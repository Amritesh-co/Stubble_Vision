"use client";

export default function Filters({ selected, onChange }) {
  const severities = ["High", "Medium", "Low", "Unburned"];

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: 20,
        background: "white",
        padding: "10px",
        borderRadius: "6px",
        fontSize: "14px",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <strong>Filter Severity</strong>
      {severities.map((s) => (
        <div key={s}>
          <label>
            <input
              type="checkbox"
              checked={selected[s]}
              onChange={() =>
                onChange({
                  ...selected,
                  [s]: !selected[s],
                })
              }
            />{" "}
            {s}
          </label>
        </div>
      ))}
    </div>
  );
}
