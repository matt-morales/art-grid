"use client";

import { useState } from "react";
import { ExhibitionCard } from "@/components/ui/ExhibitionCard";
import { exhibitions } from "@/data/exhibitions";

export default function SidePanel() {
  const [openSection, setOpenSection] = useState<
    "openings" | "exhibitions" | null
  >("openings");

  return (
    <aside className="border-r border-black overflow-y-auto bg-white p-6 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-slate-900 text-2xl font-semibold leading-9">
          What’s up in the art world this week?
        </h1>
        <p className="text-slate-900 text-sm leading-6 mt-2">
          Are you looking for exhibition to visit this week in London? Just
          follow the ArtGrid and get all the updated art events in London this
          week.
        </p>
      </div>

      {/* Accordion */}
      <AccordionSection
        title="Openings"
        isOpen={openSection === "openings"}
        onToggle={() =>
          setOpenSection(openSection === "openings" ? null : "openings")
        }
      >
        {exhibitions.slice(0, 6).map((e) => (
          <ExhibitionCard key={e.slug} exhibition={e} />
        ))}
      </AccordionSection>

      <AccordionSection
        title="Exhibitions"
        isOpen={openSection === "exhibitions"}
        onToggle={() =>
          setOpenSection(openSection === "exhibitions" ? null : "exhibitions")
        }
      >
        {exhibitions.slice(0, 6).map((e) => (
          <ExhibitionCard key={e.slug} exhibition={e} />
        ))}
      </AccordionSection>
    </aside>
  );
}

/** Collapsible section subcomponent **/
function AccordionSection({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-black">
      <button
        className="w-full h-14 px-4 py-2.5 bg-zinc-300/40 text-left text-black text-xl font-medium hover:bg-zinc-200 flex justify-between items-center"
        onClick={onToggle}
      >
        <span>{title}</span>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="max-h-[50vh] overflow-y-auto p-4 bg-white space-y-4 border-t border-black">
          {children}
        </div>
      )}
    </div>
  );
}
