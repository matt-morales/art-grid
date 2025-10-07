export const site = {
  name: "Art.Grid",
  url: "https://artgrid.example.com",
  description: "Find exhibitions and openings in London — updated weekly.",
  twitter: "@artgrid",
};

export function jsonLdOrg() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    sameAs: ["https://instagram.com/artgrid"],
  };
}
