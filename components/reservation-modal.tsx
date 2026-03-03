"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarRange, ShieldCheck } from "lucide-react";
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
import { toast } from "@/hooks/use-toast";

const reservationSchema = z.object({
  name: z.string().min(2, "Name is required."),
  phone: z.string().min(7, "Phone number is required."),
  date: z.string().min(1, "Date is required."),
  time: z.string().min(1, "Time is required."),
  guests: z.string().min(1, "Guest count is required."),
  notes: z.string().optional(),
  website: z.string().optional(),
});

export type ReservationFormValues = z.infer<typeof reservationSchema>;

type ReservationFormBlockProps = {
  onSuccess?: (id: string) => void;
};

export function ReservationFormBlock({ onSuccess }: ReservationFormBlockProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      notes: "",
      website: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to save reservation.");
      }

      setReference(result.id);
      form.reset();
      toast({
        title: "Reservation received",
        description: `Reference ${result.id} has been sent to the front-of-house queue.`,
      });
      onSuccess?.(result.id);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Reservation failed",
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  });

  if (reference) {
    return (
      <div className="rounded-[28px] border bg-[#fff8ef] p-6">
        <ShieldCheck className="h-10 w-10 text-[color:var(--accent)]" />
        <h3 className="mt-4 font-heading text-4xl">You&apos;re on the list.</h3>
        <p className="mt-2 text-sm text-[color:var(--muted)]">
          Your reservation reference is <span className="font-semibold text-foreground">{reference}</span>.
          Please arrive within 15 minutes of your selected time.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button variant="outline" onClick={() => setReference(null)}>
            Make another reservation
          </Button>
          <Button variant="outline" disabled>
            Add to Calendar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...form.register("website")} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={form.formState.errors.name?.message}>
          <Input placeholder="Maria Santos" {...form.register("name")} />
        </Field>
        <Field label="Phone" error={form.formState.errors.phone?.message}>
          <Input placeholder="+63 917 000 0000" {...form.register("phone")} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Date" error={form.formState.errors.date?.message}>
          <Input type="date" {...form.register("date")} />
        </Field>
        <Field label="Time" error={form.formState.errors.time?.message}>
          <Input type="time" {...form.register("time")} />
        </Field>
        <Field label="Guests" error={form.formState.errors.guests?.message}>
          <Input type="number" min={1} max={20} {...form.register("guests")} />
        </Field>
      </div>
      <Field label="Notes" error={form.formState.errors.notes?.message}>
        <Textarea placeholder="Window seat, birthday dessert, high chair..." {...form.register("notes")} />
      </Field>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending request..." : "Confirm Reservation"}
      </Button>
    </form>
  );
}

export function ReservationModal({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3e7d4] text-[color:var(--primary)]">
            <CalendarRange className="h-5 w-5" />
          </div>
          <DialogTitle>Reserve a polished, comfortable table.</DialogTitle>
          <DialogDescription>
            Book ahead for lunch breaks, date nights, and group dinners. We hold reservations for 15 minutes unless noted otherwise.
          </DialogDescription>
        </DialogHeader>
        <ReservationFormBlock />
      </DialogContent>
    </Dialog>
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
