import "maplibre-gl/dist/maplibre-gl.css";
import "./globals.css";
import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { injectTokensCSS } from "@/lib/tokens";
import { site } from "@/lib/seo";
import TopNav from "@/components/nav/TopNav";

const sora = Sora({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: "%s · " + site.name,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: site.twitter,
    site: site.twitter,
  },
  icons: { icon: "/favicon.ico", apple: "/icon.png" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <TopNav />
        <main className="flex-1 min-h-0">{children}</main>
      </body>
    </html>
  );
}
