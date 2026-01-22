import sys
import os

# Add project root to Python path
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.append(PROJECT_ROOT)
import json
import pandas as pd
from collections import defaultdict
from backend.config import METRICS_JSON


# --------------------------------
# CSV PATH (YOUR EXACT LOCATION)
# --------------------------------
CSV_PATH = (
    "/media/ignite/New Volume/AIML_EL/"
    "stubble_vision/data/severity/fire_severity_all.csv"
)

# --------------------------------
# LOAD CSV
# --------------------------------
df = pd.read_csv(CSV_PATH)
print("CSV columns:", df.columns.tolist())

# Normalize column names
df.columns = df.columns.str.lower()

# --------------------------------
# FIRE COUNT OVER TIME
# --------------------------------
fires_over_time = (
    df.groupby("fire_date")
      .size()
      .reset_index(name="count")
      .sort_values("fire_date")
      .to_dict(orient="records")
)

# --------------------------------
# SEVERITY DISTRIBUTION
# --------------------------------
severity_distribution = (
    df.groupby("severity")
      .size()
      .reset_index(name="count")
      .to_dict(orient="records")
)

# --------------------------------
# SEVERITY VS TIME
# --------------------------------
severity_vs_time_df = (
    df.pivot_table(
        index="fire_date",
        columns="severity",
        aggfunc="size",
        fill_value=0
    )
    .reset_index()
)

# Normalize column names
severity_vs_time_df.columns = [
    col.lower() if isinstance(col, str) else col
    for col in severity_vs_time_df.columns
]

# Ensure missing severity columns exist
for col in ["low", "medium", "high"]:
    if col not in severity_vs_time_df.columns:
        severity_vs_time_df[col] = 0

severity_vs_time = severity_vs_time_df[
    ["fire_date", "low", "medium", "high"]
].rename(columns={"fire_date": "date"}).to_dict(orient="records")

# --------------------------------
# dNBR DISTRIBUTION (BINS)
# --------------------------------
dnbr_bins = {
    "-0.1–0.1": 0,
    "0.1–0.27": 0,
    "0.27–0.44": 0,
    ">0.44": 0,
}

for dnbr in df["dnbr"].dropna():
    if dnbr < 0.1:
        dnbr_bins["-0.1–0.1"] += 1
    elif dnbr < 0.27:
        dnbr_bins["0.1–0.27"] += 1
    elif dnbr < 0.44:
        dnbr_bins["0.27–0.44"] += 1
    else:
        dnbr_bins[">0.44"] += 1

dnbr_distribution = [
    {"range": r, "count": c} for r, c in dnbr_bins.items()
]

# --------------------------------
# SUMMARY
# --------------------------------
summary = {
    "total_fires": int(len(df)),
    "severity": {
        "low": int((df["severity"].str.lower() == "low").sum()),
        "medium": int((df["severity"].str.lower() == "medium").sum()),
        "high": int((df["severity"].str.lower() == "high").sum()),
    }
}

# --------------------------------
# FINAL METRICS OBJECT
# --------------------------------
metrics = {
    "summary": summary,
    "fires_over_time": fires_over_time,
    "severity_distribution": severity_distribution,
    "severity_vs_time": severity_vs_time,
    "dnbr_distribution": dnbr_distribution,
}

# --------------------------------
# SAVE metrics.json
# --------------------------------
with open(METRICS_JSON, "w") as f:
    json.dump(metrics, f, indent=2)

print("✅ metrics.json generated successfully")
print(f"📄 Saved to: {METRICS_JSON}")
