"use client";

import Image from "next/image";
import type { Product } from "@/lib/types";
import { formatVND } from "@/lib/products";

export default function ProductCard({
  product,
  onSelect,
  onAdd,
}: {
  product: Product;
  onSelect: (p: Product) => void;
  onAdd: (p: Product) => void;
}) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl">
      <button
        type="button"
        onClick={() => onSelect(product)}
        className="relative block aspect-square w-full bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-2.5 py-1 text-xs font-bold text-white shadow">
          -{discount}%
        </span>
        {product.hot && (
          <span className="absolute right-3 top-3 rounded-full bg-brand-700 px-2.5 py-1 text-xs font-bold text-white shadow">
            Bán chạy
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-bold text-slate-900">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-slate-500">
          {product.chip} · {product.screen}
        </p>

        <div className="mt-3">
          <p className="text-lg font-extrabold text-brand-700">
            {formatVND(product.price)}
          </p>
          <p className="text-xs text-slate-400 line-through">
            {formatVND(product.originalPrice)}
          </p>
        </div>

        <div className="mt-3 flex items-center gap-1.5">
          {product.colors.slice(0, 4).map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="h-4 w-4 rounded-full ring-1 ring-slate-200"
              style={{ backgroundColor: c.hex }}
            />
          ))}
          <span className="ml-auto text-[11px] font-semibold text-brand-600">
            {product.storages[0].label}+
          </span>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="flex-1 rounded-full border border-brand-200 py-2.5 text-xs font-bold text-brand-700 transition hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            Chi tiết
          </button>
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="flex-1 rounded-full bg-brand-700 py-2.5 text-xs font-bold text-white transition hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </article>
  );
}
