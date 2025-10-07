"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function TopNav() {
  const pathname = usePathname();
  const link = (href: string, label: string) => (
    <Link
      href={href}
      className={clsx(
        "px-3 py-2 rounded-xl hover:bg-surface border border-surface-border",
        pathname === href && "bg-surface",
      )}
    >
      {label}
    </Link>
  );
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-bg/70 border-b border-surface-border">
      <div className="mx-auto max-w-7xl px-gutter py-3 flex items-center gap-4">
        <Link href="/" className="font-display text-xl">
          Art.Grid
        </Link>
        <nav className="ml-auto flex gap-2">
          {link("/", "This week's pick")}
          {link("/list", "Exhibitions")}
          {link("/map", "Art Map")}
          {link("/submit", "Submit an exhibition")}
        </nav>
      </div>
    </header>
  );
}
