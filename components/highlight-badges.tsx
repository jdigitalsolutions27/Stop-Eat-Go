import { Clock3, Flame, Sparkles, UtensilsCrossed } from "lucide-react";
import { Card } from "@/components/ui/card";

const highlights = [
  { title: "Fresh Ingredients", icon: Sparkles, description: "Daily prep, balanced seasoning, no tired flavors." },
  { title: "Fast Prep", icon: Clock3, description: "Built for quick lunch runs and efficient dinner service." },
  { title: "Best Sellers", icon: Flame, description: "Signature plates guests reorder for and recommend." },
  { title: "Dine-in & Takeout", icon: UtensilsCrossed, description: "Comfort food that travels well and plates beautifully." },
];

export function HighlightBadges() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {highlights.map(({ title, description, icon: Icon }) => (
        <Card key={title} className="surface p-5">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3e7d4] text-[color:var(--primary)]">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-[color:var(--muted)]">{description}</p>
        </Card>
      ))}
    </div>
  );
}
