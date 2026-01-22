from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routes import fires, metrics

# --------------------------------------------------
# APP INITIALIZATION
# --------------------------------------------------
app = FastAPI(
    title="Stubble Vision API",
    description="Fire detection and burn severity visualization API",
    version="1.0.0"
)

# --------------------------------------------------
# CORS (FRONTEND ACCESS)
# --------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # tighten later for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------------------------------
# ROUTES
# --------------------------------------------------

# 🔥 Fire spatial data (GeoJSON, points, etc.)
app.include_router(
    fires.router,
    prefix="/fires",
    tags=["Fires"]
)

# 📊 Dashboard & metrics
app.include_router(
    metrics.router,
    prefix="/dashboard",
    tags=["Dashboard"]
)

# --------------------------------------------------
# ROOT HEALTH CHECK
# --------------------------------------------------
@app.get("/")
def root():
    return {
        "message": "Stubble Vision backend running",
        "available_endpoints": [
            "/fires/points",
            "/dashboard/summary",
            "/dashboard/fires-over-time",
            "/dashboard/severity-distribution",
            "/dashboard/severity-vs-time",
            "/dashboard/dnbr-distribution",
        ]
    }
