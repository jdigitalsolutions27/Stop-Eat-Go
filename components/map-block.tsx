import { Map, MapPinned, Navigation } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function MapBlock() {
  return (
    <div className="overflow-hidden rounded-[32px] border bg-[color:var(--card)] shadow-card">
      <div className="relative h-[280px] bg-[radial-gradient(circle_at_top,_rgba(199,146,47,0.28),_transparent_40%),linear-gradient(135deg,_#1e1712,_#463325)] text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="relative flex h-full flex-col justify-between p-8">
          <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/70">
            <Map className="h-4 w-4" />
            Map Preview
          </div>
          <div>
            <h3 className="font-heading text-4xl">Downtown Tacloban</h3>
            <p className="mt-2 max-w-sm text-sm text-white/75">
              Easy to find, easy to park near, and close to the city&apos;s busiest lunch and evening routes.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm text-[color:var(--muted)]"><MapPinned className="h-4 w-4" /> {BUSINESS.address}</p>
        </div>
        <Button asChild variant="outline">
          <a href={BUSINESS.directionsUrl} target="_blank" rel="noreferrer">
            <Navigation className="mr-2 h-4 w-4" />
            Get Directions
          </a>
        </Button>
      </div>
    </div>
  );
}
