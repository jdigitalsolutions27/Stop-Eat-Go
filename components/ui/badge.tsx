import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--border)] bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
