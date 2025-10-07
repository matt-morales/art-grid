export type Exhibition = {
  slug: string;
  title: string;
  gallery: string;
  website?: string;
  startDate: string; // ISO
  endDate: string; // ISO
  neighborhood?: string;
  type: "opening" | "exhibition";
  lat?: number;
  lng?: number;
  hero?: string;
  description?: string;
};
