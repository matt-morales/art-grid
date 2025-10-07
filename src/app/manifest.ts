import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Art.Grid",
    short_name: "ArtGrid",
    start_url: "/",
    display: "standalone",
    background_color: "#0e0f12",
    theme_color: "#27c0a7",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
