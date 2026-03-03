import { bestSellers } from "@/data/bestSellers";
import { DishCard } from "@/components/dish-card";

export function FeaturedDishes() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {bestSellers.map((item) => (
        <DishCard key={item.id} item={item} />
      ))}
    </div>
  );
}
