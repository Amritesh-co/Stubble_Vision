# Stubble Vision

Stubble Vision is a full-stack geospatial analytics platform for agricultural fire monitoring and burn severity assessment.

It combines:
- a Python data pipeline (FIRMS + Google Earth Engine processing),
- a FastAPI backend exposing GeoJSON and dashboard metrics,
- a Next.js frontend with map and chart-based visualizations.

## Table of Contents

1. [What This Project Does](#what-this-project-does)
2. [Architecture](#architecture)
3. [Repository Structure](#repository-structure)
4. [Tech Stack](#tech-stack)
5. [Prerequisites](#prerequisites)
6. [Quick Start](#quick-start)
7. [Run the Backend (FastAPI)](#run-the-backend-fastapi)
8. [Run the Frontend (Next.js)](#run-the-frontend-nextjs)
9. [API Reference](#api-reference)
10. [ML/Data Pipeline](#mldata-pipeline)
11. [Data Files Used by Backend](#data-files-used-by-backend)
12. [Configuration](#configuration)
13. [Troubleshooting](#troubleshooting)
14. [Development Notes](#development-notes)

## What This Project Does

The system is focused on stubble-burning/fire intelligence by:
- ingesting fire data from FIRMS CSV files,
- computing burn severity signals (dNBR) using Sentinel-2 imagery,
- classifying events by severity,
- exporting outputs (CSV, GeoJSON, metrics),
- serving those outputs to a web dashboard and interactive map.

## Architecture

1. Data Pipeline (`ml/`)
	 - Loads FIRMS data.
	 - Cleans and filters likely fire events.
	 - Computes dNBR using Google Earth Engine.
	 - Exports `fire_severity_all.geojson` and `metrics.json`.

2. Backend API (`backend/`)
	 - FastAPI app serving:
		 - fire point GeoJSON,
		 - dashboard summary/time-series/distribution metrics.

3. Frontend (`frontend/`)
	 - Next.js app with:
		 - map view (`/map`),
		 - dashboard view (`/dashboard`),
		 - theory page (`/theory`),
		 - landing page (`/`).

## Repository Structure

```text
.
├── backend/                 # FastAPI app and API routes
│   ├── main.py
│   ├── config.py
│   └── routes/
│       ├── fires.py
│       └── metrics.py
├── data/
│   ├── firms/               # Input FIRMS CSV files
│   └── severity/            # Generated outputs (GeoJSON, metrics, CSV)
├── frontend/                # Next.js application
│   ├── src/app/
│   └── src/components/
├── ml/                      # Data processing and severity estimation pipeline
├── notebooks/               # Research/analysis notebooks
├── requirements.txt         # Python dependencies
└── README.md
```

## Tech Stack

- Backend: FastAPI, Uvicorn
- Frontend: Next.js 13, React 18, Chakra UI, Recharts, Leaflet
- Data/ML: Pandas, Google Earth Engine API, GeoJSON export utilities

## Prerequisites

- Python 3.10+
- Node.js 18+ and npm
- Google Earth Engine account (for running the ML pipeline)

Optional but recommended:
- `venv` for Python environment isolation

## Quick Start

Clone and enter the repository:

```bash
git clone https://github.com/Amritesh-co/Stubble_Vision.git
cd Stubble_Vision
```

Install backend/python dependencies:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Install frontend dependencies:

```bash
npm --prefix frontend install
```

Start backend (terminal 1):

```bash
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

Start frontend (terminal 2):

```bash
npm --prefix frontend run dev
```

Open:
- Frontend: http://localhost:3000
- Backend docs: http://127.0.0.1:8000/docs

## Run the Backend (FastAPI)

From repository root:

```bash
source .venv/bin/activate
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

Backend entrypoint: `backend/main.py`

Included route groups:
- `/fires/*`
- `/dashboard/*`

## Run the Frontend (Next.js)

```bash
npm --prefix frontend install
npm --prefix frontend run dev
```

Build for production:

```bash
npm --prefix frontend run build
npm --prefix frontend run start
```

## API Reference

Base URL: `http://127.0.0.1:8000`

### Health
- `GET /`
	- Basic service status and available endpoint list.

### Fires
- `GET /fires/points`
	- Returns all fire points as GeoJSON (`FeatureCollection`).
	- NaN/inf numeric values are sanitized to `null` before response.

### Dashboard
- `GET /dashboard/summary`
- `GET /dashboard/fires-over-time`
- `GET /dashboard/severity-distribution`
- `GET /dashboard/severity-vs-time`
- `GET /dashboard/dnbr-distribution`

## ML/Data Pipeline

Main pipeline script: `ml/runner.py`

Pipeline stages:
1. Load FIRMS CSV (`ml/load_data.py`)
2. Clean + label fire events (`ml/fire_detection.py`)
3. Compute dNBR and classify severity (`ml/severity_estimation.py`)
4. Export CSV, GeoJSON, and metrics (`ml/export_results.py`)

Run pipeline:

```bash
source .venv/bin/activate
python -m ml.runner
```

Expected output artifacts under `data/severity/`:
- `fire_severity_all.csv`
- `fire_severity_all.geojson`
- `metrics.json`

## Data Files Used by Backend

Configured in `backend/config.py`:
- `data/severity/fire_severity_all.geojson`
- `data/severity/metrics.json`

The backend serves these files directly through API routes.

## Configuration

Environment values read by backend (`backend/config.py`):
- `BACKEND_HOST` (default: `0.0.0.0`)
- `BACKEND_PORT` (default: `8000`)

Current frontend API calls in source are hardcoded to:
- `http://127.0.0.1:8000`

If backend host/port changes, update frontend fetch URLs accordingly.

## Troubleshooting

### `next: command not found`

Cause: frontend dependencies are not installed.

Fix:

```bash
npm --prefix frontend install
```

### Backend fails on startup with `metrics.json not found`

Cause: `backend/routes/metrics.py` currently uses an absolute machine-specific path.

Fix options:
- update that file to use paths from `backend/config.py`, or
- ensure metrics file exists at the configured absolute path.

### Frontend loads but charts/map are empty

Checks:
- backend is running on `127.0.0.1:8000`,
- required files exist in `data/severity/`,
- endpoints respond in browser/Postman (`/docs` is available).

## Development Notes

- This repository currently contains generated files and some environment-specific assumptions.
- Prefer relative paths and centralized configuration in `backend/config.py` for portability.
- Before production deployment:
	- tighten CORS policy,
	- replace hardcoded API base URLs with environment variables,
	- add tests for backend endpoints and frontend data-loading flows.