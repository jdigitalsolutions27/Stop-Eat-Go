"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { MenuItem } from "@/data/menu";

export type CartItem = MenuItem & {
  quantity: number;
  notes?: string;
  cartKey: string;
};

type AddItemOptions = {
  quantity?: number;
  notes?: string;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: MenuItem, options?: AddItemOptions) => void;
  updateQuantity: (cartKey: string, quantity: number) => void;
  removeItem: (cartKey: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "seg-cart";

function createCartKey(id: string, notes?: string) {
  return `${id}:${notes?.trim().toLowerCase() ?? ""}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setItems(JSON.parse(raw));
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    return {
      items,
      itemCount: items.reduce((count, item) => count + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      addItem: (item, options) => {
        const quantity = options?.quantity ?? 1;
        const notes = options?.notes?.trim();
        const cartKey = createCartKey(item.id, notes);

        setItems((current) => {
          const existing = current.find((entry) => entry.cartKey === cartKey);
          if (existing) {
            return current.map((entry) =>
              entry.cartKey === cartKey
                ? { ...entry, quantity: entry.quantity + quantity }
                : entry,
            );
          }

          return [...current, { ...item, quantity, notes, cartKey }];
        });
      },
      updateQuantity: (cartKey, quantity) => {
        setItems((current) =>
          current.flatMap((item) => {
            if (item.cartKey !== cartKey) {
              return item;
            }

            if (quantity <= 0) {
              return [];
            }

            return { ...item, quantity };
          }),
        );
      },
      removeItem: (cartKey) => {
        setItems((current) => current.filter((item) => item.cartKey !== cartKey));
      },
      clearCart: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
