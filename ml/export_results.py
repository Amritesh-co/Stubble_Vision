import os
import json
import pandas as pd


def ensure_dir(path: str):
    """Create directory if it does not exist."""
    os.makedirs(path, exist_ok=True)


def export_csv(df: pd.DataFrame, output_dir: str, filename: str):
    """Export DataFrame to CSV."""
    ensure_dir(output_dir)
    path = os.path.join(output_dir, filename)
    df.to_csv(path, index=False)
    return path


def export_geojson(df: pd.DataFrame, output_dir: str, filename: str):
    """
    Export fire data to GeoJSON for map visualization.
    Requires latitude & longitude columns.
    """
    ensure_dir(output_dir)

    features = []
    for _, row in df.iterrows():
        features.append({
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [row["longitude"], row["latitude"]],
            },
            "properties": row.drop(["latitude", "longitude"]).to_dict(),
        })

    geojson = {
        "type": "FeatureCollection",
        "features": features,
    }

    path = os.path.join(output_dir, filename)
    with open(path, "w") as f:
        json.dump(geojson, f)

    return path


def export_metrics(df: pd.DataFrame, output_dir: str, filename: str = "metrics.json"):
    """
    Export summary metrics for dashboard cards.
    """
    ensure_dir(output_dir)

    metrics = {
        "total_fires": len(df),
        "severity_distribution": df["severity"].value_counts(dropna=False).to_dict()
    }

    path = os.path.join(output_dir, filename)
    with open(path, "w") as f:
        json.dump(metrics, f, indent=2)

    return path
