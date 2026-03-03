import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Flame,
  MapPinned,
  PhoneCall,
  ShoppingBag,
  Sparkles,
  Table2,
} from "lucide-react";
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

const serviceModes = [
  {
    title: "Order in minutes",
    copy: "Built for direct online orders with clean checkout and fast kitchen flow.",
    cta: "Start your order",
    href: "/order",
    icon: ShoppingBag,
  },
  {
    title: "Reserve the room",
    copy: "Best for date nights, family tables, and dinner plans that need a smooth start.",
    cta: "Book a table",
    href: "/reservations",
    icon: Table2,
  },
  {
    title: "See what stands out",
    copy: "Browse best sellers, room atmosphere, and the details that build confidence.",
    cta: "Explore the gallery",
    href: "/gallery",
    icon: Sparkles,
  },
];

const serviceSteps = [
  {
    title: "Choose your format",
    copy: "Pickup, dine-in, or quick delivery depending on how much time you have.",
  },
  {
    title: "Lock in the dish",
    copy: "Best sellers, comfort meals, and polished sides are easy to scan and compare.",
  },
  {
    title: "Move fast at checkout",
    copy: "Clear forms, visible totals, and short paths to order, reserve, or call ahead.",
  },
];

export default function Home() {
  const branch = branches[0];

  return (
    <>
      <Hero />

      <Section className="pt-8 sm:pt-10">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="surface section-glow overflow-hidden">
            <CardContent className="p-6 sm:p-7">
              <p className="text-kicker">Guest confidence</p>
              <h2 className="font-heading mt-3 text-4xl sm:text-5xl">A premium quick-stop experience that still feels warm.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                The brand balance is simple: stronger food styling, sharper service, and a cleaner dine-in flow than the typical comfort food spot.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-semibold">15-20</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">Average prep mins</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">Top 6</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">Repeat-order dishes</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">Daily</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">Dine-in and takeout service</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-3">
            {serviceModes.map(({ title, copy, cta, href, icon: Icon }) => (
              <Card key={title} className="surface section-glow">
                <CardContent className="flex h-full flex-col p-5 sm:p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#f3e7d4] text-[color:var(--primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{copy}</p>
                  <Button asChild variant="outline" className="mt-6 w-full justify-between sm:w-auto">
                    <Link href={href}>
                      {cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

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
        eyebrow="Why it converts"
        title="Clear paths for the three actions that matter most."
        description="Guests typically want one of three things quickly: order food, reserve a table, or confirm they can trust the place enough to visit."
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="surface section-glow">
            <CardContent className="p-6 sm:p-8">
              <p className="text-kicker">Fast path</p>
              <h3 className="font-heading mt-3 text-4xl sm:text-5xl">Less scrolling, more action.</h3>
              <div className="mt-6 grid gap-5">
                {serviceSteps.map((step, index) => (
                  <div key={step.title} className="flex items-start gap-4 rounded-[24px] border bg-white/60 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1410] text-sm font-semibold text-white">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{step.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{step.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden bg-[#18120f] text-white">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-kicker text-[#f0c16d]">Traffic driver</p>
                  <h3 className="font-heading mt-3 text-4xl sm:text-5xl">Best sellers pull the first order.</h3>
                </div>
                <Flame className="h-10 w-10 text-[#f0c16d]" />
              </div>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Showcase the strongest dishes early, then let the menu and gallery carry the rest of the decision-making.
              </p>
              <div className="mt-6 space-y-3">
                {menuItems
                  .filter((item) => item.tags.includes("Best Seller"))
                  .slice(0, 3)
                  .map((item) => (
                    <div key={item.id} className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/5 px-4 py-3">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-white/60">{item.category}</p>
                      </div>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-sm">{formatCurrency(item.price)}</span>
                    </div>
                  ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/order">Order best sellers</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
                  <Link href="/menu">Browse full menu</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="Menu preview"
        title="Browse the kitchen by craving."
        description="Quick to scan, easy to order, and balanced across lunch, dinner, and snack runs."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {menuPreview.map((section) => (
            <Card key={section.category} className="surface section-glow">
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
            <Card key={point} className="surface section-glow">
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
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-kicker text-[#f0c16d]">Dine-in booking</p>
              <h2 className="text-display mt-4 text-5xl leading-none">Reserve ahead or call before the rush.</h2>
              <p className="mt-4 max-w-2xl text-white/70">
                Ideal for business lunches, easy catch-ups, and family dinners that need a smooth start.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[#f0c16d]">Best for</p>
                <p className="mt-2 text-xl font-semibold">Date nights, family dinner, group tables</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[#f0c16d]">Booking note</p>
                <p className="mt-2 text-xl font-semibold">Tables are held for 15 minutes after your selected time</p>
              </div>
              <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
                <ReservationModal trigger={<Button variant="secondary">Reserve a Table</Button>} />
                <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
                  <a href={BUSINESS.phoneHref}>Call Now</a>
                </Button>
              </div>
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

      <Section className="pt-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <Card className="surface section-glow">
            <CardContent className="p-6 sm:p-8">
              <p className="text-kicker">Quick choice</p>
              <h2 className="font-heading mt-3 text-4xl sm:text-5xl">Ordering right now?</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[color:var(--muted)]">
                Skip the rest of the scroll and go directly to the checkout flow, built for pickup and nearby delivery.
              </p>
              <Button asChild className="mt-6">
                <Link href="/order">Go to online ordering</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="surface section-glow">
            <CardContent className="p-6 sm:p-8">
              <p className="text-kicker">Still deciding</p>
              <h2 className="font-heading mt-3 text-4xl sm:text-5xl">Want proof before you commit?</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[color:var(--muted)]">
                Use the gallery, best sellers, and location block to confirm the food style, room feel, and convenience.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="outline">
                  <Link href="/gallery">Open gallery</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact the team</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
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
