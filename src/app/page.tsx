// src/app/page.tsx
import type { Metadata } from "next";
import MapPanel from "@/components/panels/MapPanel";
import SidePanel from "@/components/panels/SidePanel";

export const metadata: Metadata = {
  title: "What’s up in the art world this week?",
  description:
    "Find exhibitions to visit this week in London. Follow the Art.Grid for weekly updates.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Art.Grid — This week in London art",
    description:
      "Featured openings and exhibitions across London, updated weekly.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <div className="grid grid-cols-[420px_1fr] h-full">
      <SidePanel />
      <MapPanel />
    </div>
  );
}
