from fastapi import APIRouter
import json
import os

router = APIRouter()

METRICS_JSON = (
    "/media/ignite/New Volume/AIML_EL/"
    "stubble_vision/data/severity/metrics.json"
)

# Safety check (optional but good)
if not os.path.exists(METRICS_JSON):
    raise FileNotFoundError(f"metrics.json not found at {METRICS_JSON}")

with open(METRICS_JSON) as f:
    metrics = json.load(f)

@router.get("/summary")
def get_summary():
    return metrics["summary"]

@router.get("/fires-over-time")
def get_fires_over_time():
    return metrics["fires_over_time"]

@router.get("/severity-distribution")
def get_severity_distribution():
    return metrics["severity_distribution"]

@router.get("/severity-vs-time")
def get_severity_vs_time():
    return metrics["severity_vs_time"]

@router.get("/dnbr-distribution")
def get_dnbr_distribution():
    return metrics["dnbr_distribution"]
