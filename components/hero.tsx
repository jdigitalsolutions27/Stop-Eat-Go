"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { ReservationModal } from "@/components/reservation-modal";
import { SmartImage } from "@/components/smart-image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="section-shell pt-8 sm:pt-10">
      <div className="relative overflow-hidden rounded-[40px] border shadow-glow">
        <div className="absolute inset-0">
          <SmartImage src={IMAGES.hero} alt="Premium dining atmosphere and plated food" fill priority className="object-cover" sizes="100vw" />
        </div>
        <div className="hero-overlay relative grid min-h-[680px] items-end px-6 py-14 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <p className="text-kicker text-[#f3c776]">Tacloban&apos;s polished quick-stop restaurant</p>
            <h1 className="text-display mt-4 text-6xl leading-none sm:text-7xl">Fast. Fresh. Flavorful.</h1>
            <p className="mt-5 max-w-xl text-base text-white/78 sm:text-lg">
              Stop. Eat . Go serves comfort food favorites made fresh, perfect for dine-in, takeout, and quick cravings without compromising quality.
            </p>
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
            className="mt-10 rounded-[32px] border border-white/15 bg-white/10 p-6 text-white backdrop-blur-md lg:mt-0"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Tonight&apos;s pace</p>
                <p className="mt-2 text-2xl font-semibold">Quick pickup, smooth dine-in.</p>
              </div>
              <PlayCircle className="h-10 w-10 text-[#f3c776]" />
            </div>
            <div className="mt-8 space-y-4">
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
