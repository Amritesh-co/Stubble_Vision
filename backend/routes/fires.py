import json
import math
from fastapi import APIRouter, HTTPException
from backend.config import FIRE_GEOJSON

router = APIRouter()


def sanitize(obj):
    """
    Recursively replace NaN / inf values with None (JSON-safe).
    """
    if isinstance(obj, float):
        if math.isnan(obj) or math.isinf(obj):
            return None
        return obj
    elif isinstance(obj, dict):
        return {k: sanitize(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [sanitize(v) for v in obj]
    else:
        return obj


@router.get("/points")
def get_fire_points():
    """
    Return all fire points as GeoJSON (NaN-safe).
    """
    try:
        with open(FIRE_GEOJSON, "r") as f:
            data = json.load(f)

        print("🔥 Fire features:", len(data.get("features", [])))

        # 🔥 SANITIZE BEFORE RETURNING
        safe_data = sanitize(data)

        return safe_data

    except FileNotFoundError:
        raise HTTPException(
            status_code=404,
            detail=f"Fire GeoJSON not found at {FIRE_GEOJSON}"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
