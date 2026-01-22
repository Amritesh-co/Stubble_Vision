import os
import pandas as pd


def load_firms_data(data_dir: str) -> pd.DataFrame:
    """
    Load FIRMS CSV data from a directory.

    Parameters
    ----------
    data_dir : str
        Path to directory containing FIRMS CSV file.

    Returns
    -------
    pd.DataFrame
        Loaded FIRMS dataframe.
    """
    if not os.path.exists(data_dir):
        raise FileNotFoundError(f"Data directory not found: {data_dir}")

    csv_files = [f for f in os.listdir(data_dir) if f.lower().endswith(".csv")]
    if not csv_files:
        raise FileNotFoundError("No FIRMS CSV file found")

    csv_path = os.path.join(data_dir, csv_files[0])
    return pd.read_csv(csv_path)
