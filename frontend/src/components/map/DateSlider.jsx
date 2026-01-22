"use client";

export default function DateSlider({
  minDate,
  maxDate,
  range,
  onChange,
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: 140,
        left: 20,
        background: "white",
        padding: "10px",
        borderRadius: "6px",
        fontSize: "13px",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
        width: "220px",
      }}
    >
      <strong>Date Range</strong>

      <div style={{ marginTop: "8px" }}>
        <input
          type="date"
          value={range.start}
          min={minDate}
          max={range.end}
          onChange={(e) =>
            onChange({ ...range, start: e.target.value })
          }
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginTop: "6px" }}>
        <input
          type="date"
          value={range.end}
          min={range.start}
          max={maxDate}
          onChange={(e) =>
            onChange({ ...range, end: e.target.value })
          }
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
