import { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-2xl border border-surface-border bg-surface">
      {children}
    </div>
  );
}

export function CardContent({ children }: PropsWithChildren) {
  return <div className="p-4">{children}</div>;
}
