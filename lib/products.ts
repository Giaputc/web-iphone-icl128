import type { Product } from "./types";

export const products: Product[] = [
  
];

export const lines = [] as const;

export const priceRanges = [
 
];

export function formatVND(value: number): string {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}
