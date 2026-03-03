"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const inquirySchema = z.object({
  name: z.string().min(2, "Name is required."),
  contact: z.string().min(5, "Email or phone is required."),
  message: z.string().min(10, "Tell us a bit more about your inquiry."),
  website: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export function InquiryForm() {
  const [reference, setReference] = useState<string | null>(null);
  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      contact: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to send inquiry.");
      }

      form.reset();
      setReference(result.id);
      toast({
        title: "Inquiry sent",
        description: `Reference ${result.id} has been queued for the team.`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Inquiry failed",
        description: error instanceof Error ? error.message : "Please try again.",
      });
    }
  });

  return (
    <div className="rounded-[32px] border bg-[color:var(--card)] p-6 shadow-card">
      {reference ? (
        <div className="rounded-[28px] bg-[#fff8ef] p-6">
          <MailCheck className="h-10 w-10 text-[color:var(--accent)]" />
          <h3 className="mt-4 font-heading text-4xl">Message received.</h3>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Your inquiry reference is <span className="font-semibold text-foreground">{reference}</span>.
            The team typically replies within one business day.
          </p>
          <Button variant="outline" className="mt-5" onClick={() => setReference(null)}>
            Send another inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...form.register("website")} />
          <Field label="Name" error={form.formState.errors.name?.message}>
            <Input placeholder="Juan dela Cruz" {...form.register("name")} />
          </Field>
          <Field label="Email or Phone" error={form.formState.errors.contact?.message}>
            <Input placeholder="you@example.com or +63 917..." {...form.register("contact")} />
          </Field>
          <Field label="Message" error={form.formState.errors.message?.message}>
            <Textarea placeholder="Catering request, brand inquiry, table setup question..." {...form.register("message")} />
          </Field>
          <Button type="submit" className="w-full">
            Send Inquiry
          </Button>
        </form>
      )}
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
