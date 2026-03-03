import { Clock3, Mail, MapPinned, PhoneCall } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { InquiryForm } from "@/components/inquiry-form";
import { MapBlock } from "@/components/map-block";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact | Stop. Eat . Go",
  description:
    "Contact Stop. Eat . Go Restaurant in Tacloban City for inquiries, group bookings, directions, and business questions.",
  path: "/contact",
});

const infoCards = [
  { title: "Phone", value: BUSINESS.phone, icon: PhoneCall },
  { title: "Email", value: BUSINESS.email, icon: Mail },
  { title: "Address", value: BUSINESS.address, icon: MapPinned },
  {
    title: "Hours",
    value: BUSINESS.hours.map((entry) => `${entry.label}: ${entry.value}`).join(" | "),
    icon: Clock3,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Ask a question, plan a visit, or reach the team directly."
        description="For inquiries, group dining notes, reservations support, or location details, this page keeps the contact path clear."
      />
      <section className="section-shell space-y-10 pb-20 pt-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {infoCards.map(({ title, value, icon: Icon }) => (
            <Card key={title} className="surface">
              <CardContent className="p-6">
                <div className="inline-flex rounded-2xl bg-[#f3e7d4] p-3 text-[color:var(--primary)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <InquiryForm />
          <div className="space-y-6">
            <MapBlock />
            <Card className="bg-[#18120f] text-white">
              <CardContent className="p-6">
                <p className="text-kicker text-[#f0c16d]">Quick actions</p>
                <h3 className="font-heading mt-3 text-4xl">Need a faster route?</h3>
                <p className="mt-3 text-sm text-white/70">
                  Call for same-day reservations or use directions if you&apos;re already on the way.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <a href={BUSINESS.phoneHref}>Call Now</a>
                  </Button>
                  <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white">
                    <a href={BUSINESS.directionsUrl} target="_blank" rel="noreferrer">
                      Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
