import type { MenuItem } from "@/data/menu";
import { SmartImage } from "@/components/smart-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OrderModal } from "@/components/order-modal";
import { formatCurrency } from "@/lib/currency";

export function DishCard({ item }: { item: MenuItem }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage src={item.image} alt={item.name} fill className="object-cover transition duration-500 hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="mt-2 text-sm text-[color:var(--muted)]">{item.description}</p>
          </div>
          <div className="rounded-full bg-[#f3e7d4] px-3 py-1 text-sm font-semibold">
            {formatCurrency(item.price)}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
          {item.dietary?.slice(0, 1).map((tag) => (
            <Badge key={tag} className="bg-transparent">
              {tag}
            </Badge>
          ))}
        </div>
        <OrderModal
          item={item}
          trigger={
            <Button className="mt-5 w-full">
              Add to Order
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
}
