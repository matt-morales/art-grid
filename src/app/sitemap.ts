import type { MetadataRoute } from "next";
import { exhibitions } from "@/data/exhibitions";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://artgrid.example.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: base + "/list", changeFrequency: "daily", priority: 0.8 },
    { url: base + "/map", changeFrequency: "daily", priority: 0.8 },
    ...exhibitions.map((e) => ({
      url: `${base}/exhibitions/${e.slug}`,
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  ];
}
