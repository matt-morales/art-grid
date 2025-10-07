import { Metadata } from "next";
import { exhibitions } from "@/data/exhibitions";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = { title: "Exhibitions" };

export default function ListPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl">Exhibitions & Openings</h1>
      <div className="flex flex-wrap gap-2 text-sm">
        <Badge>Filter: Openings</Badge>
        <Badge>Filter: Exhibitions</Badge>
        <Badge>Sort: Ending soon</Badge>
      </div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {exhibitions.map((e) => (
          <li
            key={e.slug}
            className="rounded-2xl border border-surface-border bg-surface p-4"
          >
            <a
              href={`/exhibitions/${e.slug}`}
              className="font-medium underline"
            >
              {e.title}
            </a>
            <div className="text-sm text-muted">{e.gallery}</div>
            <div className="mt-2 text-xs text-muted">
              {new Date(e.startDate).toLocaleDateString()} –{" "}
              {new Date(e.endDate).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
