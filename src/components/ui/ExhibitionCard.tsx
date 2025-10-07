import { Exhibition } from "@/types";

export function ExhibitionCard({ exhibition }: { exhibition: Exhibition }) {
  return (
    <article className="border border-black bg-zinc-100">
      <div className="aspect-square bg-zinc-200 border-b border-black" />
      <div className="p-3 space-y-1">
        <h3 className="text-black font-semibold text-lg leading-tight">
          {exhibition.artist}
        </h3>
        <p className="text-black text-base">{exhibition.title}</p>
        <p className="text-xs border-t border-black pt-2 mt-2">
          {exhibition.gallery}
        </p>
      </div>
    </article>
  );
}
