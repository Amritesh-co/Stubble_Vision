import pandas as pd


def clean_firms_data(df: pd.DataFrame) -> pd.DataFrame:
    """
    Clean and standardize FIRMS dataframe.
    """
    df = df.copy()

    # Ensure correct dtypes
    df["latitude"] = pd.to_numeric(df["latitude"], errors="coerce")
    df["longitude"] = pd.to_numeric(df["longitude"], errors="coerce")

    # Convert confidence to numeric (handles 'l', 'n', 'h')
    confidence_map = {
        "l": 30,
        "n": 70,
        "h": 100
    }

    if df["confidence"].dtype == object:
        df["confidence"] = df["confidence"].map(confidence_map)

    df["confidence"] = pd.to_numeric(df["confidence"], errors="coerce")

    # Drop invalid rows
    df = df.dropna(subset=["latitude", "longitude", "confidence"])

    return df


def create_fire_labels(df: pd.DataFrame, threshold: int = 70) -> pd.DataFrame:
    """
    Create binary fire labels based on FIRMS confidence.
    """
    df = df.copy()
    df["label"] = (df["confidence"] >= threshold).astype(int)
    return df


def extract_fire_events(df: pd.DataFrame) -> pd.DataFrame:
    """
    Extract confirmed fire events (label = 1).
    """
    fire_df = df[df["label"] == 1].copy()

    required_cols = [
        "latitude",
        "longitude",
        "acq_date",
        "confidence",
        "frp",
        "satellite",
        "instrument",
        "daynight"
    ]

    existing_cols = [c for c in required_cols if c in fire_df.columns]
    fire_df = fire_df[existing_cols]

    fire_df = fire_df.rename(columns={
        "acq_date": "fire_date"
    })

    return fire_df.reset_index(drop=True)
