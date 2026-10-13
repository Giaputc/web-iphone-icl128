"use client";

import { useCallback, useEffect, useState } from "react";
import type { CartItem } from "@/lib/types";

const STORAGE_KEY = "icl128_cart_v1";

function readStored(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readStored());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore quota errors
    }
  }, [items, hydrated]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) =>
          i.productId === item.productId &&
          i.color === item.color &&
          i.storage === item.storage
      );
      if (idx === -1) return [...prev, item];
      const next = [...prev];
      next[idx] = { ...next[idx], quantity: next[idx].quantity + item.quantity };
      return next;
    });
  }, []);

  const changeQuantity = useCallback(
    (index: number, delta: number) => {
      setItems((prev) =>
        prev
          .map((item, i) =>
            i === index
              ? { ...item, quantity: Math.max(0, item.quantity + delta) }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
    },
    []
  );

  const removeItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const total = items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);

  return { items, count, total, addItem, changeQuantity, removeItem, clear, hydrated };
}
