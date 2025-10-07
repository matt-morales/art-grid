export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-xl border border-surface-border bg-surface px-2 py-1 text-xs text-muted">
      {children}
    </span>
  );
}
