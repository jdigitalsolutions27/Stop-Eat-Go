import Link from "next/link";
import { HeartHandshake, ShieldCheck, Sparkles, TimerReset } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { PageHeader } from "@/components/page-header";
import { SmartImage } from "@/components/smart-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About | Stop. Eat . Go",
  description:
    "Learn the story behind Stop. Eat . Go, a modern comfort food restaurant in Tacloban City focused on freshness, speed, consistency, and customer care.",
  path: "/about",
});

const values = [
  {
    title: "Freshness",
    description: "Ingredients are prepped daily with a focus on clean flavors and dependable texture.",
    icon: Sparkles,
  },
  {
    title: "Speed",
    description: "Service is tuned for lunch rushes and after-work cravings without losing polish.",
    icon: TimerReset,
  },
  {
    title: "Consistency",
    description: "Guests return because the dishes stay familiar, balanced, and well executed.",
    icon: ShieldCheck,
  },
  {
    title: "Customer care",
    description: "Orders, questions, and reservation notes are handled with more attention than a typical quick-stop spot.",
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the brand"
        title="Quick-stop comfort food done right."
        description="Stop. Eat . Go was built for guests who want satisfying food quickly, but still expect a cleaner experience, better plating, and stronger consistency."
      />
      <section className="section-shell space-y-10 pb-20 pt-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Card className="surface">
            <CardContent className="p-6 sm:p-8">
              <p className="text-kicker">Brand story</p>
              <h2 className="font-heading mt-3 text-5xl">Built for the pause between busy moments.</h2>
              <p className="mt-4 text-[color:var(--muted)]">
                The idea was simple: create a restaurant where guests could stop in for a fast meal, enjoy real comfort food with a premium edge, and leave satisfied without the usual friction.
              </p>
              <p className="mt-4 text-[color:var(--muted)]">
                That means warm service, clean kitchen standards, balanced menus, and dishes designed to hold up whether they land on the table or head out in a takeaway bag.
              </p>
            </CardContent>
          </Card>
          <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border shadow-card">
            <SmartImage src={IMAGES.chef} alt="Kitchen team portrait" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map(({ title, description, icon: Icon }) => (
            <Card key={title}>
              <CardContent className="p-6">
                <div className="inline-flex rounded-2xl bg-[#f3e7d4] p-3 text-[color:var(--primary)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm text-[color:var(--muted)]">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden bg-[#18120f] text-white">
          <CardContent className="grid gap-6 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-kicker text-[#f0c16d]">Meet the kitchen</p>
              <h2 className="font-heading mt-3 text-5xl">Calm execution, comfort-driven menu development.</h2>
              <p className="mt-4 max-w-2xl text-white/70">
                The kitchen team focuses on reliable prep, strong flavor layering, and dishes that feel generous without becoming heavy or rushed.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/order">Order Online</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white">
                <Link href="/reservations">Reserve a Table</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
