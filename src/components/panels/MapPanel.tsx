import Map from "@/components/Map";
import { exhibitions } from "@/data/exhibitions";

export default function MapPanel() {
  const markers = exhibitions
    .filter((e) => e.lng && e.lat)
    .map((e) => ({ lng: e.lng!, lat: e.lat! }));

  return (
    <section className="w-full h-full">
      <Map markers={markers} />
    </section>
  );
}
