"use client";

import { useEffect, useState, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Legend from "./Legend";
import Filters from "./Filters";
import DateSlider from "./DateSlider";

/* 🎨 FINAL COLOR PALETTE */
const severityColors = {
  High: "#8B0000",       // blood red
  Medium: "#D35400",     // deep orange
  Low: "#1E7F4B",        // deep green
  Unburned: "#2B1B0F",   // dark brown / black
};

/* 🔬 SCIENTIFIC dNBR-BASED SEVERITY */
const getSeverityFromDNBR = (dnbr) => {
  if (dnbr == null) return "Unburned";
  if (dnbr >= 0.44) return "High";
  if (dnbr >= 0.27) return "Medium";
  if (dnbr >= 0.10) return "Low";
  return "Unburned";
};

export default function FireMap() {
  const [fires, setFires] = useState([]);

  /* 🔘 Severity filter state */
  const [severityFilter, setSeverityFilter] = useState({
    High: true,
    Medium: true,
    Low: true,
    Unburned: true,
  });

  /* 📅 Date range state */
  const [dateRange, setDateRange] = useState({
    start: "",
    end: "",
  });

  /* 📡 Fetch backend data */
  useEffect(() => {
    fetch("http://127.0.0.1:8000/fires/points")
      .then((res) => res.json())
      .then((data) => setFires(data.features))
      .catch(console.error);
  }, []);

  /* 📅 Compute min & max dates from data */
  const allDates = useMemo(() => {
    return fires
      .map((f) => f.properties.fire_date)
      .filter(Boolean)
      .sort();
  }, [fires]);

  const minDate = allDates[0];
  const maxDate = allDates[allDates.length - 1];

  /* 📅 Initialize date slider once data loads */
  useEffect(() => {
    if (minDate && maxDate) {
      setDateRange({ start: minDate, end: maxDate });
    }
  }, [minDate, maxDate]);

  /* ✅ FILTER BY SEVERITY + DATE */
  const filteredFires = useMemo(() => {
    return fires.filter((f) => {
      const { fire_date, dnbr } = f.properties;
      const severity = getSeverityFromDNBR(dnbr);

      if (!severityFilter[severity]) return false;
      if (!fire_date) return false;

      return (
        fire_date >= dateRange.start &&
        fire_date <= dateRange.end
      );
    });
  }, [fires, severityFilter, dateRange]);

  /* 🔥 Render markers */
  const markers = useMemo(() => {
    return filteredFires.map((fire, idx) => {
      const [lon, lat] = fire.geometry.coordinates;
      const { fire_date, dnbr } = fire.properties;
      const severity = getSeverityFromDNBR(dnbr);

      return (
        <CircleMarker
          key={idx}
          center={[lat, lon]}
          radius={severity === "High" ? 5 : 4}
          fillColor={severityColors[severity]}
          color={severityColors[severity]}
          fillOpacity={0.85}
          weight={0}
        >
          <Tooltip direction="top" sticky>
            <b>Date:</b> {fire_date}<br />
            <b>Severity:</b> {severity}<br />
            <b>dNBR:</b> {dnbr?.toFixed(3)}<br />
            <b>Latitude:</b> {lat.toFixed(5)}<br />
            <b>Longitude:</b> {lon.toFixed(5)}
          </Tooltip>
        </CircleMarker>
      );
    });
  }, [filteredFires]);

  return (
    <div style={{ height: "100%", position: "relative" }}>
      <MapContainer
        center={[29.5, 76.5]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
        preferCanvas
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {markers}

        <Legend />

        <Filters
          selected={severityFilter}
          onChange={setSeverityFilter}
        />

        <DateSlider
          minDate={minDate}
          maxDate={maxDate}
          range={dateRange}
          onChange={setDateRange}
        />
      </MapContainer>
    </div>
  );
}
