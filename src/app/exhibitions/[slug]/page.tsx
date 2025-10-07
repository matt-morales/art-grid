import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { exhibitions } from "@/data/exhibitions";

export async function generateStaticParams() {
  return exhibitions.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const ex = exhibitions.find((e) => e.slug === params.slug);
  if (!ex) return {};
  const title = `${ex.title} at ${ex.gallery}`;
  return {
    title,
    description: ex.description ?? `${ex.title} — ${ex.gallery}`,
    alternates: { canonical: `/exhibitions/${ex.slug}` },
    openGraph: { title, type: "article" },
  };
}

export default function ExhibitionPage({
  params,
}: {
  params: { slug: string };
}) {
  const ex = exhibitions.find((e) => e.slug === params.slug);
  if (!ex) return notFound();
  return (
    <article className="prose prose-invert max-w-3xl">
      <h1 className="font-display">{ex.title}</h1>
      <p className="text-muted">{ex.gallery}</p>
      <p>
        <strong>Dates:</strong> {new Date(ex.startDate).toLocaleDateString()} –{" "}
        {new Date(ex.endDate).toLocaleDateString()}
      </p>
      {ex.website && (
        <p>
          <a
            className="underline"
            href={ex.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </p>
      )}
      {ex.description && <p>{ex.description}</p>}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ExhibitionEvent",
            name: ex.title,
            startDate: ex.startDate,
            endDate: ex.endDate,
            location: { "@type": "Place", name: ex.gallery },
            url: `https://artgrid.example.com/exhibitions/${ex.slug}`,
          }),
        }}
      />
    </article>
  );
}
