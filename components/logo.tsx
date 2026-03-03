import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  compact?: boolean;
  light?: boolean;
};

export function Logo({
  className,
  markClassName,
  textClassName,
  compact = false,
  light = false,
}: LogoProps) {
  const accentText = light ? "text-[#f0c16d]" : "text-[color:var(--accent)]";
  const bodyText = light ? "text-white" : "text-foreground";
  const mutedText = light ? "text-white/55" : "text-[color:var(--muted)]";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-[#1a1410] shadow-card",
          markClassName,
        )}
      >
        <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
          <defs>
            <linearGradient id="seg-mark" x1="10%" y1="8%" x2="86%" y2="92%">
              <stop offset="0%" stopColor="#f4c46b" />
              <stop offset="45%" stopColor="#cf6a2d" />
              <stop offset="100%" stopColor="#922c1e" />
            </linearGradient>
          </defs>
          <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#seg-mark)" />
          <path
            d="M18 23.5h20.8c3.5 0 6.2-2.8 6.2-6.3"
            fill="none"
            stroke="#fff7ee"
            strokeLinecap="round"
            strokeWidth="3.8"
          />
          <path
            d="M18 32h18.5c6.9 0 12.5 5.6 12.5 12.5V47"
            fill="none"
            stroke="#fff7ee"
            strokeLinecap="round"
            strokeWidth="3.8"
          />
          <circle cx="44.8" cy="17.2" r="3.2" fill="#fff7ee" />
          <circle cx="46.5" cy="46.8" r="3.2" fill="#fff7ee" />
        </svg>
      </div>
      {!compact ? (
        <div className={cn("leading-none", textClassName)}>
          <div className={cn("font-heading text-[2rem]", bodyText)}>
            Stop<span className={accentText}>.</span> Eat <span className={accentText}>.</span> Go
          </div>
          <div className={cn("mt-1 text-[10px] uppercase tracking-[0.32em]", mutedText)}>
            MODERN COMFORT FOOD
          </div>
        </div>
      ) : null}
    </div>
  );
}
