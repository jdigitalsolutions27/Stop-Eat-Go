import Link from "next/link";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery | Stop. Eat . Go",
  description:
    "See the food, dining room, and atmosphere at Stop. Eat . Go Restaurant in Tacloban City through a premium gallery experience.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A closer look at the plates and the room."
        description="From polished burgers to warm ambient lighting, this is the visual side of Stop. Eat . Go guests experience on-site."
      />
      <section className="section-shell pb-20 pt-10">
        <GalleryGrid />
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/reservations">Reserve after browsing</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
