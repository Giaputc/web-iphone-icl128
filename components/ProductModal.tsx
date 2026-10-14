"use client";

import { useEffect, useState } from "react";
import SafeImage from "./SafeImage";
import type { Product } from "@/lib/types";
import { formatVND } from "@/lib/products";

export default function ProductModal({
  product,
  onClose,
  onAdd,
}: {
  product: Product | null;
  onClose: () => void;
  onAdd: (product: Product, color: string, storage: string, unitPrice: number) => void;
}) {
  const [color, setColor] = useState(product?.colors[0]?.name ?? "");
  const [storage, setStorage] = useState(product?.storages[0]?.label ?? "");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!product) return;
    setColor(product.colors[0]?.name ?? "");
    setStorage(product.storages[0]?.label ?? "");
    setAdded(false);
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  const offset = product.storages.find((s) => s.label === storage)?.priceOffset ?? 0;
  const unitPrice = product.price + offset;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gradient-to-r from-brand-800 to-sky-500 px-5 py-4 text-white sm:rounded-t-3xl">
          <h2 className="pr-10 text-lg font-bold sm:text-xl">{product.name}</h2>
          <p className="text-xs text-blue-100">
            Sản phẩm chính hãng · Bảo hành 12 tháng
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-lg transition hover:bg-white/30"
          >
            ✕
          </button>
        </div>

        <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-brand-50">
            <SafeImage
              src={product.image}
              alt={product.name}
              fallbackLabel={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex items-end gap-3">
              <p className="text-3xl font-extrabold text-brand-700">
                {formatVND(unitPrice)}
              </p>
              <p className="pb-1 text-sm text-slate-400 line-through">
                {formatVND(product.originalPrice)}
              </p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {product.description}
            </p>

            <div className="mt-4 rounded-2xl bg-brand-50 p-4 text-sm text-slate-700">
              <p><b className="text-brand-800">Màn hình:</b> {product.screen}</p>
              <p className="mt-1"><b className="text-brand-800">Chip:</b> {product.chip}</p>
              <p className="mt-1"><b className="text-brand-800">Camera:</b> {product.camera}</p>
              <p className="mt-1"><b className="text-brand-800">Pin:</b> {product.battery}</p>
            </div>

            <div className="mt-5">
              <p className="text-sm font-bold text-slate-900">
                Chọn màu: <span className="text-brand-700">{color}</span>
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setColor(c.name)}
                    className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                      color === c.name
                        ? "border-brand-600 bg-brand-50 text-brand-800 ring-2 ring-brand-300"
                        : "border-slate-200 text-slate-600 hover:border-brand-300"
                    }`}
                  >
                    <span
                      className="h-3.5 w-3.5 rounded-full ring-1 ring-slate-300"
                      style={{ backgroundColor: c.hex }}
                    />
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-bold text-slate-900">Chọn bộ nhớ</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.storages.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setStorage(s.label)}
                    className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                      storage === s.label
                        ? "border-brand-600 bg-brand-50 text-brand-800 ring-2 ring-brand-300"
                        : "border-slate-200 text-slate-600 hover:border-brand-300"
                    }`}
                  >
                    {s.label}
                    {s.priceOffset > 0 && (
                      <span className="ml-1 text-xs font-normal text-slate-500">
                        +{formatVND(s.priceOffset)}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  onAdd(product, color, storage, unitPrice);
                  setAdded(true);
                  window.setTimeout(() => setAdded(false), 1800);
                }}
                className="flex-1 rounded-full bg-brand-700 py-3.5 text-sm font-bold text-white transition hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
              >
                {added ? "✓ Đã thêm vào giỏ" : "Thêm vào giỏ hàng"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
