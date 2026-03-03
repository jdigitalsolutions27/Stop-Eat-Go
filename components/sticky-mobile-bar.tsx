import Link from "next/link";
import { MapPinned, PhoneCall, ShoppingBag } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 md:hidden">
      <div className="rounded-[28px] border border-white/40 bg-[rgba(247,241,232,0.92)] p-2 shadow-glow backdrop-blur-xl">
        <div className="grid grid-cols-3 gap-2">
          <a href={BUSINESS.phoneHref} className="flex flex-col items-center justify-center rounded-[18px] bg-white px-3 py-2.5 text-[11px] font-semibold shadow-card">
            <PhoneCall className="mb-1 h-4 w-4" />
            <span className="leading-none">Call</span>
          </a>
          <Link href="/order" className="flex flex-col items-center justify-center rounded-[18px] bg-[color:var(--primary)] px-3 py-2.5 text-[11px] font-semibold text-white shadow-card">
            <ShoppingBag className="mb-1 h-4 w-4" />
            <span className="leading-none">Order</span>
          </Link>
          <a href={BUSINESS.directionsUrl} className="flex flex-col items-center justify-center rounded-[18px] bg-white px-3 py-2.5 text-[11px] font-semibold shadow-card">
            <MapPinned className="mb-1 h-4 w-4" />
            <span className="leading-none">Directions</span>
          </a>
        </div>
      </div>
    </div>
  );
}
