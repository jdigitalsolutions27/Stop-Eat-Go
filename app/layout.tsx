import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { StickyMobileBar } from "@/components/sticky-mobile-bar";
import { Providers } from "./providers";
import "./globals.css";
import { createMetadata } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${manrope.variable} antialiased`}
      >
        <Providers>
          <div className="brand-canvas relative min-h-screen overflow-x-hidden">
            <div className="pointer-events-none fixed inset-0">
              <div className="ambient-orb ambient-orb-1" />
              <div className="ambient-orb ambient-orb-2" />
              <div className="ambient-orb ambient-orb-3" />
              <div className="mesh-lines absolute inset-0 opacity-40" />
              <div className="grain-overlay absolute inset-0" />
              <div className="absolute inset-x-0 top-0 h-[560px] bg-hero-radial opacity-80" />
              <div className="absolute inset-x-0 top-0 h-[380px] grid-fade opacity-50" />
            </div>
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
            <StickyMobileBar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
