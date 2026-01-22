"use client";

import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

export default function Legend() {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: "bottomleft" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "leaflet-control leaflet-bar");
      div.style.background = "white";
      div.style.padding = "10px";
      div.style.borderRadius = "6px";
      div.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
      div.style.fontSize = "14px";

      div.innerHTML = `
        <strong>Severity</strong><br/>
        <span style="color:#e53935">●</span> High<br/>
        <span style="color:#fb8c00">●</span> Medium<br/>
        <span style="color:#43a047">●</span> Low<br/>
        <span style="color:#757575">●</span> Unburned
      `;

      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
}
