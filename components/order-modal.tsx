"use client";

import { useState } from "react";
import type { MenuItem } from "@/data/menu";
import { useCart } from "@/components/cart-provider";
import { SmartImage } from "@/components/smart-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/currency";
import { toast } from "@/hooks/use-toast";

export function OrderModal({
  item,
  trigger,
}: {
  item: MenuItem;
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");
  const { addItem } = useCart();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="overflow-hidden p-0 sm:max-w-3xl">
        <div className="grid md:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[280px]">
            <SmartImage src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="p-6 sm:p-8">
            <DialogHeader>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <DialogTitle>{item.name}</DialogTitle>
              <DialogDescription>{item.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-6 space-y-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Quantity</label>
                <Input
                  type="number"
                  min={1}
                  max={12}
                  value={quantity}
                  onChange={(event) => setQuantity(Number(event.target.value) || 1)}
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Order Notes</label>
                <Textarea
                  placeholder="Extra sauce, no onions, pickup after 7 PM..."
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                />
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-[#f2e6d3] px-4 py-3">
                <span className="text-sm text-[color:var(--muted)]">Estimated line total</span>
                <span className="text-lg font-semibold">{formatCurrency(item.price * quantity)}</span>
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  addItem(item, { quantity, notes });
                  toast({
                    title: "Added to order",
                    description: `${quantity} x ${item.name} is now in your cart.`,
                  });
                  setOpen(false);
                  setQuantity(1);
                  setNotes("");
                }}
              >
                Add to Order
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
