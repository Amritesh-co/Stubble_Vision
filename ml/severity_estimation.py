from datetime import datetime, timedelta
import ee


def init_ee(project: str):
    """
    Initialize Google Earth Engine.
    """
    ee.Initialize(project=project)


def compute_dnbr(
    lat: float,
    lon: float,
    fire_date: str,
    buffer_m: int = 500,
    cloud_pct: int = 20
):
    """
    Compute mean dNBR around a fire point.
    Returns None if data unavailable.
    """
    try:
        point = ee.Geometry.Point([lon, lat]).buffer(buffer_m)

        fire_dt = datetime.strptime(fire_date, "%Y-%m-%d")

        pre_start = (fire_dt - timedelta(days=30)).strftime("%Y-%m-%d")
        pre_end   = (fire_dt - timedelta(days=5)).strftime("%Y-%m-%d")
        post_start = (fire_dt + timedelta(days=1)).strftime("%Y-%m-%d")
        post_end   = (fire_dt + timedelta(days=10)).strftime("%Y-%m-%d")

        s2 = (
            ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
            .filterBounds(point)
            .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE", cloud_pct))
        )

        pre = s2.filterDate(pre_start, pre_end).sort("CLOUDY_PIXEL_PERCENTAGE").first()
        post = s2.filterDate(post_start, post_end).sort("CLOUDY_PIXEL_PERCENTAGE").first()

        if pre is None or post is None:
            return None

        nbr_pre = pre.normalizedDifference(["B8", "B12"])
        nbr_post = post.normalizedDifference(["B8", "B12"])
        dnbr = nbr_pre.subtract(nbr_post)

        stats = dnbr.reduceRegion(
            reducer=ee.Reducer.mean(),
            geometry=point,
            scale=30,
            maxPixels=1e9
        )

        return stats.get("nd").getInfo()

    except Exception:
        return None


def classify_severity(dnbr: float) -> str:
    """
    Classify burn severity based on dNBR.
    """
    if dnbr is None:
        return "No Data"

    if dnbr < 0.1:
        return "Unburned / Recovered"
    elif dnbr < 0.27:
        return "Low"
    elif dnbr < 0.44:
        return "Moderate"
    else:
        return "High"
