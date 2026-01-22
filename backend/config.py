import os
from dotenv import load_dotenv

load_dotenv()

# --------------------------------------------------
# PROJECT ROOT (ABSOLUTE, STABLE)
# --------------------------------------------------
PROJECT_ROOT = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "..")
)

# --------------------------------------------------
# DATA DIRECTORIES
# --------------------------------------------------
DATA_DIR = os.path.join(PROJECT_ROOT, "data")
SEVERITY_DIR = os.path.join(DATA_DIR, "severity")

# --------------------------------------------------
# DATA FILES (USED BY BACKEND ROUTES)
# --------------------------------------------------
FIRE_GEOJSON = os.path.join(SEVERITY_DIR, "fire_severity_all.geojson")
METRICS_JSON = os.path.join(SEVERITY_DIR, "metrics.json")

# --------------------------------------------------
# SERVER CONFIG
# --------------------------------------------------
BACKEND_HOST = os.getenv("BACKEND_HOST", "0.0.0.0")
BACKEND_PORT = int(os.getenv("BACKEND_PORT", 8000))

# --------------------------------------------------
# DEBUG (KEEP THIS FOR NOW)
# --------------------------------------------------
print("📁 PROJECT_ROOT:", PROJECT_ROOT)
print("📄 METRICS_JSON:", METRICS_JSON)
print("📄 FIRE_GEOJSON:", FIRE_GEOJSON)
