import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.name} className="surface">
          <CardContent className="p-6">
            <Quote className="h-8 w-8 text-[color:var(--accent)]" />
            <p className="mt-4 text-lg leading-relaxed">{testimonial.quote}</p>
            <div className="mt-6">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-[color:var(--muted)]">{testimonial.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
