"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn("section-shell py-14 sm:py-20", className)}
    >
      {(eyebrow || title || description) && (
        <div className="mb-8 max-w-3xl space-y-3 sm:mb-12">
          {eyebrow ? <p className="text-kicker">{eyebrow}</p> : null}
          {title ? <h2 className="text-display text-4xl leading-none text-foreground sm:text-5xl">{title}</h2> : null}
          {description ? <p className="max-w-2xl text-base text-[color:var(--muted)] sm:text-lg">{description}</p> : null}
        </div>
      )}
      <div className={contentClassName}>{children}</div>
    </motion.section>
  );
}
