"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, MapPin, PlayCircle, Star } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { ReservationModal } from "@/components/reservation-modal";
import { SmartImage } from "@/components/smart-image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="section-shell pt-8 sm:pt-10">
      <div className="section-glow relative overflow-hidden rounded-[40px] border shadow-glow">
        <div className="absolute inset-0">
          <SmartImage src={IMAGES.hero} alt="Premium dining atmosphere and plated food" fill priority className="object-cover" sizes="100vw" />
        </div>
        <div className="hero-overlay relative grid min-h-[720px] items-end px-5 py-12 sm:px-10 lg:grid-cols-[1.12fr_0.88fr] lg:px-14 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <div className="flex flex-wrap gap-2">
              <Badge className="border-white/15 bg-white/10 text-white/90">Tacloban&apos;s premium quick-stop restaurant</Badge>
              <Badge className="border-white/15 bg-white/10 text-white/90">Dine-in • Takeout • Delivery</Badge>
            </div>
            <h1 className="text-display mt-5 text-5xl leading-none sm:text-7xl">Fast. Fresh. Flavorful.</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/78 sm:text-lg">
              Stop. Eat . Go serves comfort food favorites made fresh, perfect for dine-in, takeout, and quick cravings without compromising quality.
            </p>
            <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/12 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#f3c776]">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Guest rating</span>
                </div>
                <p className="mt-2 text-xl font-semibold">4.8 / 5</p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#f3c776]">
                  <Clock3 className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Prep pace</span>
                </div>
                <p className="mt-2 text-xl font-semibold">15-20 min</p>
              </div>
              <div className="rounded-[24px] border border-white/12 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#f3c776]">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Location</span>
                </div>
                <p className="mt-2 text-xl font-semibold">Downtown</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/order" className="gap-2">
                  Order Online
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/15">
                <Link href="/menu">View Menu</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease: "easeOut" }}
            className="mt-8 rounded-[32px] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-md sm:p-6 lg:mt-0"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Tonight&apos;s pace</p>
                <p className="mt-2 text-2xl font-semibold">Quick pickup, smooth dine-in.</p>
              </div>
              <PlayCircle className="h-10 w-10 text-[#f3c776]" />
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-white/70">Average prep</span>
                <span className="font-semibold">15-20 mins</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-white/70">Best seller today</span>
                <span className="font-semibold">Ember House Burger</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Dine-in seating</span>
                <span className="font-semibold">Reservation ready</span>
              </div>
            </div>
            <div className="mt-6 rounded-[24px] bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[#f3c776]">Peak hour tip</p>
              <p className="mt-2 text-sm leading-6 text-white/78">
                Reserve before 7 PM or place pickup orders early for the smoothest turnaround.
              </p>
            </div>
            <ReservationModal
              trigger={
                <Button variant="secondary" className="mt-8 w-full">
                  Reserve a Table
                </Button>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
