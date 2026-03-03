"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useCart } from "@/components/cart-provider";
import { Logo } from "@/components/logo";
import { ReservationModal } from "@/components/reservation-modal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-white/30 bg-[rgba(247,241,232,0.78)] backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-[color:var(--muted)] hover:text-foreground",
                pathname === link.href && "text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" asChild>
            <Link href="/order" className="gap-2">
              <ShoppingBag className="h-4 w-4" />
              Order Online
              {itemCount > 0 ? <span className="rounded-full bg-[#f2e2c6] px-2 py-0.5 text-xs">{itemCount}</span> : null}
            </Link>
          </Button>
          <ReservationModal
            trigger={
              <Button variant="secondary">
                Reserve
              </Button>
            }
          />
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md p-0">
            <div className="p-6">
              <Logo />
              <p className="mt-2 text-sm text-[color:var(--muted)]">Fast dine-in, pickup, and comfort food favorites.</p>
            </div>
            <div className="border-t px-6 py-5">
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="text-base font-medium">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild>
                  <Link href="/order">Order Online</Link>
                </Button>
                <ReservationModal trigger={<Button variant="outline">Reserve a Table</Button>} />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
