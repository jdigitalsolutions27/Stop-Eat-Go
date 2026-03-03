import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Timer, Mail, MoveRight } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-white/40 bg-[#15110e] pb-24 pt-16 text-[#f7efe3] md:pb-10">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Logo light className="mb-5" markClassName="border-white/10 bg-[#211915]" />
          <p className="text-kicker">Stop. Stay. Savor.</p>
          <h2 className="text-display mt-4 text-4xl">Comfort food done with polish.</h2>
          <p className="mt-4 max-w-md text-sm text-white/70">
            {BUSINESS.name} Restaurant in {BUSINESS.city} serves premium quick meals, dinner favorites, and reliable dine-in service without the usual rush.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={BUSINESS.socials.instagram} className="rounded-full border border-white/15 p-3 hover:bg-white/10" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={BUSINESS.socials.facebook} className="rounded-full border border-white/15 p-3 hover:bg-white/10" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Explore</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Contact</h3>
          <div className="mt-4 space-y-4 text-sm text-white/80">
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4" /> {BUSINESS.address}</p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4" /> {BUSINESS.phone}</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> {BUSINESS.email}</p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Opening Hours</h3>
          <div className="mt-4 space-y-3 text-sm text-white/80">
            {BUSINESS.hours.map((entry) => (
              <div key={entry.label} className="flex items-start gap-3">
                <Timer className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p>{entry.label}</p>
                  <p className="text-white/60">{entry.value}</p>
                </div>
              </div>
            ))}
          </div>
          <a href={BUSINESS.phoneHref} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f0c16d]">
            Call for same-day bookings <MoveRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
