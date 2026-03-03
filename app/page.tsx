import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, MapPinned, PhoneCall } from "lucide-react";
import { branches } from "@/data/branches";
import { menuItems } from "@/data/menu";
import { BUSINESS } from "@/lib/constants";
import { FeaturedDishes } from "@/components/featured-dishes";
import { FaqAccordion } from "@/components/faq-accordion";
import { GalleryGrid } from "@/components/gallery-grid";
import { Hero } from "@/components/hero";
import { HighlightBadges } from "@/components/highlight-badges";
import { MapBlock } from "@/components/map-block";
import { ReservationModal } from "@/components/reservation-modal";
import { Section } from "@/components/section";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/currency";

const menuPreview = [
  {
    category: "Rice Meals",
    copy: "Hearty bowls with polished sauces, crisp toppings, and fast prep.",
    items: menuItems.filter((item) => item.category === "Rice Meals").slice(0, 2),
  },
  {
    category: "Burgers & Sandwiches",
    copy: "Premium handheld favorites layered for real bite and texture.",
    items: menuItems.filter((item) => item.category === "Burgers & Sandwiches").slice(0, 2),
  },
  {
    category: "Pasta & Noodles",
    copy: "Comforting sauces, rich finishing touches, and balanced heat.",
    items: menuItems.filter((item) => item.category === "Pasta & Noodles").slice(0, 2),
  },
];

const valuePoints = [
  "Chef-inspired recipes",
  "Consistent quality",
  "Clean kitchen standards",
  "Quick service without sacrificing taste",
  "Great for groups and solo meals",
  "Affordable premium comfort food",
];

export default function Home() {
  const branch = branches[0];

  return (
    <>
      <Hero />

      <Section className="pt-10 sm:pt-14">
        <HighlightBadges />
      </Section>

      <Section
        id="best-sellers"
        eyebrow="Best sellers"
        title="The dishes guests come back for."
        description="Six standouts built for appetite, repeat visits, and strong first impressions whether you dine in or take it to go."
      >
        <FeaturedDishes />
      </Section>

      <Section
        eyebrow="Menu preview"
        title="Browse the kitchen by craving."
        description="Quick to scan, easy to order, and balanced across lunch, dinner, and snack runs."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {menuPreview.map((section) => (
            <Card key={section.category} className="surface">
              <CardContent className="p-6">
                <h3 className="font-heading text-3xl">{section.category}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{section.copy}</p>
                <div className="mt-5 space-y-4">
                  {section.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-4 border-b border-dashed pb-4 last:border-b-0 last:pb-0">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-[color:var(--muted)]">{item.description}</p>
                      </div>
                      <span className="text-sm font-semibold">{formatCurrency(item.price)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/menu">View Full Menu</Link>
          </Button>
          <Button variant="outline" disabled title="PDF menu download is coming soon.">
            Download Menu (PDF)
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Why Stop. Eat . Go"
        title="A quick-stop restaurant built with premium habits."
        description="Everything from prep to plating is designed to keep quality high while keeping service efficient."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {valuePoints.map((point) => (
            <Card key={point} className="surface">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="mt-1 rounded-full bg-[#f3e7d4] p-2 text-[color:var(--primary)]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{point}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    Refined comfort food, dependable prep, and a polished dining rhythm that respects guests&apos; time.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-6">
        <div className="overflow-hidden rounded-[36px] border bg-[#16120f] px-6 py-10 text-white shadow-glow sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-kicker text-[#f0c16d]">Dine-in booking</p>
              <h2 className="text-display mt-4 text-5xl leading-none">Reserve ahead or call before the rush.</h2>
              <p className="mt-4 max-w-2xl text-white/70">
                Ideal for business lunches, easy catch-ups, and family dinners that need a smooth start.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ReservationModal trigger={<Button variant="secondary">Reserve a Table</Button>} />
              <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
                <a href={BUSINESS.phoneHref}>Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Gallery"
        title="Food, atmosphere, and service details that feel intentional."
        description="A premium casual setting for quick cravings, coffee catch-ups, and polished comfort meals."
      >
        <GalleryGrid preview />
        <Button asChild variant="outline" className="mt-8">
          <Link href="/gallery" className="gap-2">
            View Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </Section>

      <Section
        eyebrow="Guest feedback"
        title="Specific praise from repeat customers."
        description="Believable feedback matters more than generic stars. These guests call out the details that actually drive repeat visits."
      >
        <Testimonials />
      </Section>

      <Section
        eyebrow="Questions"
        title="Everything guests ask before ordering or visiting."
        description="Need a quick answer on delivery, reservations, allergies, or payment methods? Start here."
      >
        <FaqAccordion />
      </Section>

      <Section
        id="location"
        eyebrow="Location & hours"
        title={`${BUSINESS.name} Restaurant in ${BUSINESS.city}`}
        description="Find the dining room, review the hours, and lock in the easiest way to visit."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="surface">
            <CardContent className="p-6">
              <h3 className="font-heading text-4xl">{branch.name}</h3>
              <div className="mt-5 space-y-5 text-sm">
                <p className="flex items-start gap-3 text-[color:var(--muted)]">
                  <MapPinned className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--primary)]" />
                  {branch.address}
                </p>
                <p className="flex items-center gap-3 text-[color:var(--muted)]">
                  <PhoneCall className="h-4 w-4 text-[color:var(--primary)]" />
                  {branch.phone}
                </p>
                <div className="flex items-start gap-3 text-[color:var(--muted)]">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--primary)]" />
                  <div className="space-y-2">
                    {branch.hours.map((entry) => (
                      <div key={entry.label}>
                        <p className="font-medium text-foreground">{entry.label}</p>
                        <p>{entry.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href={BUSINESS.phoneHref}>Call Now</a>
                </Button>
                <Button asChild variant="outline">
                  <a href={BUSINESS.directionsUrl} target="_blank" rel="noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <MapBlock />
        </div>
      </Section>
    </>
  );
}
