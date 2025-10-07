import { Metadata } from "next";
import Map from "@/components/Map";
import { exhibitions } from "@/data/exhibitions";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "What’s up in the art world this week?",
  description: "Explore featured exhibitions and openings across London.",
};

export default async function Page() {
  const markers = exhibitions
    .filter((e) => e.lat && e.lng)
    .map((e) => ({ lng: e.lat!, lat: e.lng! }));
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <section className="lg:col-span-1 space-y-4">
        <h1 className="font-display text-2xl">
          What’s up in the art world this week?
        </h1>
        <p className="text-muted max-w-prose">
          Find exhibitions to visit this week in London. Follow the grid for
          weekly updates.
        </p>
        <div className="space-y-2">
          <Button onClick={() => location.assign("/list?filter=openings")}>
            Openings
          </Button>
          <Button
            onClick={() => location.assign("/list?filter=exhibitions")}
            variant="ghost"
          >
            Exhibitions
          </Button>
          <Button onClick={() => location.assign("/map")} variant="ghost">
            Art Map
          </Button>
        </div>
        <Card>
          <CardContent>
            <h2 className="font-display">This week’s picks</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted">
              {exhibitions.slice(0, 3).map((e) => (
                <li key={e.slug}>
                  <a className="underline" href={`/exhibitions/${e.slug}`}>
                    {e.title}
                  </a>{" "}
                  — {e.gallery}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
      <section className="lg:col-span-2">
        <Map
          markers={exhibitions
            .filter((e) => e.lng && e.lat)
            .map((e) => ({ lng: e.lng!, lat: e.lat! }))}
        />
      </section>
    </div>
  );
}
