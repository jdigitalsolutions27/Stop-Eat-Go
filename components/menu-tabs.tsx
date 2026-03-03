"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, ShoppingBag } from "lucide-react";
import { menuCategories, menuItems, type MenuTag } from "@/data/menu";
import { useCart } from "@/components/cart-provider";
import { DishCard } from "@/components/dish-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const filters: MenuTag[] = ["Spicy", "Best Seller", "New", "Budget"];

export function MenuTabs() {
  const [activeCategory, setActiveCategory] = useState("Best Sellers");
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<MenuTag | null>(null);
  const { itemCount } = useCart();

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const categoryMatch = item.category === activeCategory;
      const queryMatch =
        !query ||
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase());
      const filterMatch = !activeFilter || item.tags.includes(activeFilter);

      return categoryMatch && queryMatch && filterMatch;
    });
  }, [activeCategory, query, activeFilter]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 rounded-[32px] border bg-[color:var(--card)] p-5 shadow-card lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted)]" />
          <Input className="pl-11" placeholder="Search dishes, ingredients, or cravings..." value={query} onChange={(event) => setQuery(event.target.value)} />
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium",
                activeFilter === filter ? "border-transparent bg-[color:var(--primary)] text-white" : "bg-white text-[color:var(--muted)]",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <Tabs value={activeCategory} onValueChange={setActiveCategory}>
        <TabsList className="scrollbar-hide flex max-w-full flex-nowrap overflow-x-auto">
          {menuCategories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {menuCategories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {(category === activeCategory ? filtered : []).map((item) => (
                <DishCard key={item.id} item={item} />
              ))}
            </div>
            {category === activeCategory && filtered.length === 0 ? (
              <div className="rounded-[32px] border bg-white/60 px-6 py-10 text-center text-[color:var(--muted)]">
                No dishes matched this search. Try another keyword or clear the filter.
              </div>
            ) : null}
          </TabsContent>
        ))}
      </Tabs>

      <div className="fixed bottom-20 left-1/2 z-30 -translate-x-1/2 md:hidden">
        <Button asChild size="lg" className="shadow-glow">
          <Link href="/order" className="gap-2">
            <ShoppingBag className="h-4 w-4" />
            View Cart {itemCount > 0 ? `(${itemCount})` : ""}
          </Link>
        </Button>
      </div>
    </div>
  );
}
