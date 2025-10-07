import Link from "next/link";

type Props = { href: string; children: React.ReactNode };

export default function RowButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="
        block h-14 px-4 py-2.5
        bg-zinc-300/40
        border border-black
        text-black text-xl font-medium
        leading-none
        hover:bg-zinc-300/50 transition
      "
    >
      {children}
    </Link>
  );
}
