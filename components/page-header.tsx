import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function PageHeader({ eyebrow, title, description, className }: PageHeaderProps) {
  return (
    <section className={cn("section-shell pt-28 sm:pt-32", className)}>
      <div className="surface rounded-[36px] border px-6 py-12 shadow-glow sm:px-10 sm:py-16">
        <p className="text-kicker">{eyebrow}</p>
        <h1 className="text-display mt-4 max-w-3xl text-5xl leading-none text-foreground sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[color:var(--muted)] sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
