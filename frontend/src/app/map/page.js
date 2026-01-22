import dynamic from "next/dynamic";

const FireMap = dynamic(
  () => import("@/components/map/FireMap"),
  { ssr: false }
);

export default function MapPage() {
  return (
    <div
      style={{
        height: "calc(100vh - 64px)", 
        position: "relative",
      }}
    >
      <FireMap />
    </div>
  );
}
