import os
import pandas as pd

from ml.load_data import load_firms_data
# from ml.fire_detection import (
#     clean_firms_data,
#     create_fire_labels,
#     extract_fire_events
# )
from ml.severity_estimation import (
    init_ee,
    compute_dnbr,
    classify_severity
)
from ml.export_results import (
    export_csv,
    export_geojson,
    export_metrics
)


# =========================
# CONFIG
# =========================
FIRMS_DIR = "data/firms"
OUTPUT_DIR = "data/severity"
FINAL_CSV = "fire_severity_all.csv"
FINAL_GEOJSON = "fire_severity_all.geojson"

BATCH_SIZE = 50        # SAFE for Earth Engine
START_BATCH = 0        # change if resuming


# =========================
# PIPELINE
# =========================
def run_pipeline():
    print("🔹 Loading FIRMS data...")
    df = load_firms_data(FIRMS_DIR)

    print("🔹 Cleaning & labeling data...")
    df = clean_firms_data(df)
    df = create_fire_labels(df)
    fires = extract_fire_events(df)

    print(f"🔥 Confirmed fire points: {len(fires)}")

    print("🔹 Initializing Earth Engine...")
    init_ee("stubble-vision-ee")

    all_batches = []

    total = len(fires)

    for start in range(START_BATCH, total, BATCH_SIZE):
        end = min(start + BATCH_SIZE, total)
        batch = fires.iloc[start:end].copy()

        print(f"🚀 Processing fires {start + 1} → {end} / {total}")

        dnbr_values = []
        severity_classes = []

        for _, row in batch.iterrows():
            dnbr = compute_dnbr(
                lat=row["latitude"],
                lon=row["longitude"],
                fire_date=row["fire_date"]
            )
            dnbr_values.append(dnbr)
            severity_classes.append(classify_severity(dnbr))

        batch["dnbr"] = dnbr_values
        batch["severity"] = severity_classes

        # Save batch (fault tolerance)
        batch_filename = f"fire_severity_batch_{start}.csv"
        export_csv(batch, OUTPUT_DIR, batch_filename)

        all_batches.append(batch)

    print("🔹 Combining all batches...")
    final_df = pd.concat(all_batches, ignore_index=True)

    export_csv(final_df, OUTPUT_DIR, FINAL_CSV)
    export_geojson(final_df, OUTPUT_DIR, FINAL_GEOJSON)
    export_metrics(final_df, OUTPUT_DIR)

    print("✅ PIPELINE COMPLETE")
    print(f"📄 Final CSV: {OUTPUT_DIR}/{FINAL_CSV}")
    print(f"🗺️  GeoJSON: {OUTPUT_DIR}/{FINAL_GEOJSON}")
    print("📊 Metrics saved")


# =========================
# ENTRY POINT
# =========================
if __name__ == "__main__":
    run_pipeline()
