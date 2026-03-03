import Link from "next/link";
import { MapPinned, PhoneCall, ShoppingBag } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/30 bg-[rgba(247,241,232,0.95)] p-3 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-3">
        <a href={BUSINESS.phoneHref} className="flex flex-col items-center justify-center rounded-2xl bg-white px-3 py-2 text-xs font-semibold shadow-card">
          <PhoneCall className="mb-1 h-4 w-4" />
          Call
        </a>
        <Link href="/order" className="flex flex-col items-center justify-center rounded-2xl bg-[color:var(--primary)] px-3 py-2 text-xs font-semibold text-white shadow-card">
          <ShoppingBag className="mb-1 h-4 w-4" />
          Order
        </Link>
        <a href={BUSINESS.directionsUrl} className="flex flex-col items-center justify-center rounded-2xl bg-white px-3 py-2 text-xs font-semibold shadow-card">
          <MapPinned className="mb-1 h-4 w-4" />
          Directions
        </a>
      </div>
    </div>
  );
}
