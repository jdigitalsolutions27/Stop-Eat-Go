"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { SmartImage } from "@/components/smart-image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const galleryItems = [
  { title: "Warm dining ambience", image: IMAGES.ambience1 },
  { title: "House burger close-up", image: IMAGES.dish4 },
  { title: "Open dining room", image: IMAGES.ambience2 },
  { title: "Chef-plated rice bowl", image: IMAGES.dish2 },
  { title: "Evening service mood", image: IMAGES.ambience3 },
  { title: "Dessert and coffee service", image: IMAGES.dish5 },
  { title: "Quick lunch setup", image: IMAGES.ambience4 },
  { title: "Signature pasta", image: IMAGES.dish6 },
];

export function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const [active, setActive] = useState<(typeof galleryItems)[number] | null>(null);
  const items = preview ? galleryItems.slice(0, 6) : galleryItems;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.button
            key={item.title}
            type="button"
            onClick={() => setActive(item)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="group relative overflow-hidden rounded-[28px] border text-left shadow-card"
          >
            <div className="relative aspect-[0.95]">
              <SmartImage src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120d09]/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Gallery</p>
                <p className="mt-1 text-xl font-semibold">{item.title}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl overflow-hidden p-0">
          {active ? (
            <>
              <div className="relative aspect-[16/10]">
                <SmartImage src={active.image} alt={active.title} fill className="object-cover" sizes="90vw" />
              </div>
              <DialogHeader className="p-6">
                <DialogTitle>{active.title}</DialogTitle>
              </DialogHeader>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
