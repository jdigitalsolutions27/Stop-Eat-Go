"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { bestSellers } from "@/data/bestSellers";
import { menuItems } from "@/data/menu";
import { BUSINESS } from "@/lib/constants";
import { useCart } from "@/components/cart-provider";
import { DishCard } from "@/components/dish-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/currency";
import { toast } from "@/hooks/use-toast";

const orderSchema = z
  .object({
    name: z.string().min(2, "Name is required."),
    phone: z.string().min(7, "Phone number is required."),
    fulfillment: z.enum(["delivery", "pickup"]),
    address: z.string().optional(),
    pickupTime: z.string().optional(),
    paymentMethod: z.enum(["Cash", "Card"]),
    notes: z.string().optional(),
    website: z.string().optional(),
  })
  .superRefine((value, ctx) => {
    if (value.fulfillment === "delivery" && !value.address?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Delivery address is required.",
        path: ["address"],
      });
    }

    if (value.fulfillment === "pickup" && !value.pickupTime?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Pickup time is required.",
        path: ["pickupTime"],
      });
    }
  });

type OrderFormValues = z.infer<typeof orderSchema>;

export function OrderExperience() {
  const [reference, setReference] = useState<string | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState("");
  const { items, subtotal, itemCount, addItem, updateQuantity, removeItem, clearCart } = useCart();

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: "",
      phone: "",
      fulfillment: "delivery",
      address: "",
      pickupTime: "",
      paymentMethod: "Cash",
      notes: "",
      website: "",
    },
  });

  const fulfillment = form.watch("fulfillment");
  const deliveryFee = fulfillment === "delivery" && itemCount > 0 ? 79 : 0;
  const total = subtotal + deliveryFee;

  const suggestions = useMemo(() => menuItems.slice(0, 6), []);

  const onSubmit = form.handleSubmit(async (values) => {
    if (items.length === 0) {
      toast({
        variant: "destructive",
        title: "Cart is empty",
        description: "Add at least one dish before checking out.",
      });
      return;
    }

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          items,
          subtotal,
          deliveryFee,
          total,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to place order.");
      }

      const summary = items.map((item) => `${item.quantity}x ${item.name}`).join(", ");
      setSubmittedSummary(summary);
      setReference(result.id);
      clearCart();
      form.reset();
      toast({
        title: "Order received",
        description: `Reference ${result.id} is ready for kitchen confirmation.`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Order failed",
        description: error instanceof Error ? error.message : "Please try again.",
      });
    }
  });

  if (reference) {
    const whatsappMessage = encodeURIComponent(
      `Hi ${BUSINESS.name}, I'm following up on order ${reference}. Items: ${submittedSummary}.`,
    );

    return (
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="surface">
          <CardContent className="p-8">
            <CheckCircle2 className="h-12 w-12 text-[color:var(--accent)]" />
            <h2 className="font-heading mt-5 text-5xl">Order received.</h2>
            <p className="mt-3 max-w-lg text-[color:var(--muted)]">
              Your reference number is <span className="font-semibold text-foreground">{reference}</span>.
              The team can now review your request and prepare the next step for fulfillment.
            </p>
            <div className="mt-6 rounded-[28px] bg-[#fff8ef] p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">Submitted order</p>
              <p className="mt-2 text-base">{submittedSummary}</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={`${BUSINESS.whatsappPlaceholder}&text=${whatsappMessage}`} target="_blank" rel="noreferrer">
                  Send order to WhatsApp
                </a>
              </Button>
              <Button variant="outline" onClick={() => setReference(null)}>
                Place another order
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-8">
            <p className="text-kicker">Keep the pace</p>
            <h3 className="font-heading mt-3 text-4xl">Want to add more later?</h3>
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              Browse current best sellers and add a second order when ready.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild>
                <Link href="/menu">Back to Menu</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="space-y-8">
        <Card className="surface">
          <CardContent className="p-6">
            <p className="text-kicker">Popular picks</p>
            <h2 className="font-heading mt-3 text-4xl">Build your order fast.</h2>
            <p className="mt-3 max-w-xl text-sm text-[color:var(--muted)]">
              Add from the curated list below or visit the full menu for every category.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {bestSellers.map((item) => (
                <DishCard key={item.id} item={item} />
              ))}
            </div>
            <Button asChild variant="outline" className="mt-6">
              <Link href="/menu">Browse Full Menu</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-kicker">More to add</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {suggestions.map((item) => (
                <div key={item.id} className="rounded-[24px] border bg-white/70 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="mt-1 text-sm text-[color:var(--muted)]">{item.description}</p>
                    </div>
                    <span className="text-sm font-semibold">{formatCurrency(item.price)}</span>
                  </div>
                  <Button
                    className="mt-4 w-full"
                    size="sm"
                    onClick={() => {
                      addItem(item);
                      toast({
                        title: "Quick added",
                        description: `${item.name} was added to your cart.`,
                      });
                    }}
                  >
                    Quick Add
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="lg:sticky lg:top-24 lg:self-start">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-kicker">Checkout</p>
                <h2 className="font-heading mt-2 text-4xl">Your cart</h2>
              </div>
              <div className="rounded-full bg-[#f3e7d4] px-3 py-1 text-sm font-semibold">
                {itemCount} item{itemCount === 1 ? "" : "s"}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {items.length === 0 ? (
                <div className="rounded-[24px] border border-dashed bg-[#fcf7ef] px-4 py-8 text-center text-sm text-[color:var(--muted)]">
                  Your cart is empty. Add a dish from the cards on the left or the full menu.
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.cartKey} className="rounded-[24px] border bg-white/70 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="mt-1 text-sm text-[color:var(--muted)]">{item.notes || item.description}</p>
                      </div>
                      <button type="button" onClick={() => removeItem(item.cartKey)} className="rounded-full p-2 text-[color:var(--muted)] hover:bg-black/5">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border bg-white">
                        <button type="button" className="p-2" onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}>
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-10 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" className="p-2" onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}>
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="font-semibold">{formatCurrency(item.price * item.quantity)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...form.register("website")} />
              <div className="grid grid-cols-2 gap-3 rounded-[24px] bg-[#f3e7d4] p-2">
                <button
                  type="button"
                  onClick={() => form.setValue("fulfillment", "delivery")}
                  className={`rounded-[18px] px-4 py-3 text-sm font-semibold ${fulfillment === "delivery" ? "bg-white shadow-sm" : "text-[color:var(--muted)]"}`}
                >
                  Delivery
                </button>
                <button
                  type="button"
                  onClick={() => form.setValue("fulfillment", "pickup")}
                  className={`rounded-[18px] px-4 py-3 text-sm font-semibold ${fulfillment === "pickup" ? "bg-white shadow-sm" : "text-[color:var(--muted)]"}`}
                >
                  Pickup
                </button>
              </div>

              <Field label="Full name" error={form.formState.errors.name?.message}>
                <Input placeholder="Patricia Flores" {...form.register("name")} />
              </Field>
              <Field label="Phone number" error={form.formState.errors.phone?.message}>
                <Input placeholder="+63 917 000 0000" {...form.register("phone")} />
              </Field>

              {fulfillment === "delivery" ? (
                <Field label="Delivery address" error={form.formState.errors.address?.message}>
                  <Textarea placeholder="House number, street, landmark, barangay..." {...form.register("address")} />
                </Field>
              ) : (
                <Field label="Preferred pickup time" error={form.formState.errors.pickupTime?.message}>
                  <Input type="time" {...form.register("pickupTime")} />
                </Field>
              )}

              <Field label="Payment method" error={form.formState.errors.paymentMethod?.message}>
                <Select defaultValue="Cash" onValueChange={(value) => form.setValue("paymentMethod", value as "Cash" | "Card")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Cash">Cash</SelectItem>
                    <SelectItem value="Card">Card</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Additional notes">
                <Textarea placeholder="Gate code, extra utensils, spice level..." {...form.register("notes")} />
              </Field>

              <div className="space-y-3 rounded-[28px] bg-[#fcf6ed] p-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[color:var(--muted)]">Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[color:var(--muted)]">Delivery fee</span>
                  <span>{deliveryFee ? formatCurrency(deliveryFee) : "Free"}</span>
                </div>
                <div className="flex items-center justify-between border-t pt-3 text-base font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Submit Order
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      <span>{label}</span>
      {children}
      {error ? <span className="text-xs text-[color:var(--danger)]">{error}</span> : null}
    </label>
  );
}
