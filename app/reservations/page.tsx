import { CalendarRange, Clock3, Shield } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ReservationFormBlock } from "@/components/reservation-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Reservations | Stop. Eat . Go",
  description:
    "Reserve a table at Stop. Eat . Go Restaurant in Tacloban City for lunch, dinner, group meals, and polished dine-in service.",
  path: "/reservations",
});

const policies = [
  {
    title: "Holding time",
    description: "Tables are held for 15 minutes unless you call ahead with an updated arrival time.",
    icon: Clock3,
  },
  {
    title: "Group notes",
    description: "Please include special seating, high chairs, or celebration notes in the form so the team can prepare.",
    icon: CalendarRange,
  },
  {
    title: "Dining policy",
    description: "Walk-ins are welcome, but reservations are recommended during peak dinner hours and weekends.",
    icon: Shield,
  },
];

export default function ReservationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reservations"
        title="Book a table without the back-and-forth."
        description="A straightforward reservation flow for casual dining, date nights, and group meals that need a polished start."
      />
      <section className="section-shell pb-20 pt-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Card className="surface">
            <CardContent className="p-6 sm:p-8">
              <ReservationFormBlock />
            </CardContent>
          </Card>
          <div className="space-y-6">
            {policies.map(({ title, description, icon: Icon }) => (
              <Card key={title}>
                <CardContent className="flex gap-4 p-6">
                  <div className="rounded-2xl bg-[#f3e7d4] p-3 text-[color:var(--primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">{description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="bg-[#18120f] text-white">
              <CardContent className="p-6">
                <p className="text-kicker text-[#f0c16d]">Calendar support</p>
                <h3 className="font-heading mt-3 text-4xl">Add to calendar coming soon.</h3>
                <p className="mt-3 text-sm text-white/70">
                  The reservation flow is already connected to the mock backend. Calendar export can be added as a next enhancement.
                </p>
                <Button variant="outline" disabled className="mt-5 border-white/15 bg-white/5 text-white">
                  Add to Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
