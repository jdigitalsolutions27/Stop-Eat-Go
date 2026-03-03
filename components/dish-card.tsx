import type { MenuItem } from "@/data/menu";
import { SmartImage } from "@/components/smart-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OrderModal } from "@/components/order-modal";
import { formatCurrency } from "@/lib/currency";

export function DishCard({ item }: { item: MenuItem }) {
  return (
    <Card className="group premium-card-hover section-glow overflow-hidden rounded-[30px] border-white/60">
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120d09]/55 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {item.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} className="border-white/20 bg-white/14 text-white backdrop-blur-sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold sm:text-xl">{item.name}</h3>
            <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
          </div>
          <div className="rounded-full bg-[#f3e7d4] px-3 py-1 text-sm font-semibold shadow-sm">
            {formatCurrency(item.price)}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.dietary?.slice(0, 1).map((tag) => (
            <Badge key={tag} className="bg-transparent">
              {tag}
            </Badge>
          ))}
          {item.tags.slice(2).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <OrderModal
          item={item}
          trigger={
            <Button className="mt-5 h-12 w-full">
              Add to Order
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
}
