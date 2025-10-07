"use client";
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function Map({
  markers = [],
}: {
  markers: { lng: number; lat: number; color?: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const map = new maplibregl.Map({
      container: ref.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [-0.19, 51.51],
      zoom: 12.5,
    });
    markers.forEach((m) =>
      new maplibregl.Marker({ color: m.color ?? "#111" })
        .setLngLat([m.lng, m.lat])
        .addTo(map),
    );
    return () => map.remove();
  }, [markers]);

  return <div ref={ref} className="w-full h-full border border-black" />;
}
