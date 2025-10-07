"use client";
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Map({
  markers = [] as { lng: number; lat: number; color?: string }[],
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const map = new maplibregl.Map({
      container: ref.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [-0.1276, 51.5072], // London
      zoom: 10,
    });
    markers.forEach((m) =>
      new maplibregl.Marker({ color: m.color ?? "#27c0a7" })
        .setLngLat([m.lng, m.lat])
        .addTo(map),
    );
    return () => map.remove();
  }, [markers]);
  return (
    <div
      ref={ref}
      className="h-[60vh] rounded-2xl border border-surface-border overflow-hidden"
    />
  );
}
