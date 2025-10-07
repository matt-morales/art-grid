"use client";
import Link from "next/link";

export default function TopNav() {
  return (
    <header className="h-20 w-full border-b border-black bg-white">
      {/* full-bleed; just pad the content */}
      <div className="h-full px-6 flex items-center gap-6">
        <Link href="/" className="text-2xl font-semibold">
          Art.Grid
        </Link>

        <nav className="ml-auto flex items-center gap-12 text-sm font-semibold">
          <Link href="/">This week’s pick</Link>
          <Link href="/subscribe">Subscribe</Link>
          <Link href="/submit">Submit an exhibition</Link>
        </nav>
      </div>
    </header>
  );
}
