import { Metadata } from "next";
import Map from "@/components/Map";
import { exhibitions } from "@/data/exhibitions";

export const metadata: Metadata = { title: "Art Map" };

export default function MapPage() {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl">Art Map</h1>
      <div className="flex gap-2 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked /> Openings
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked /> Exhibitions
        </label>
      </div>
      <Map
        markers={exhibitions
          .filter((e) => e.lng && e.lat)
          .map((e) => ({ lng: e.lng!, lat: e.lat! }))}
      />
    </div>
  );
}
