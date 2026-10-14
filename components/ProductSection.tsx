"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import { lines, priceRanges } from "@/lib/products";
import ProductCard from "./ProductCard";

type SortKey = "default" | "priceAsc" | "priceDesc";

export default function ProductSection({
  products,
  onSelect,
  onAdd,
}: {
  products: Product[];
  onSelect: (p: Product) => void;
  onAdd: (p: Product) => void;
}) {
  const [query, setQuery] = useState("");
  const [line, setLine] = useState<string>("all");
  const [range, setRange] = useState<string>("all");
  const [sort, setSort] = useState<SortKey>("default");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
   const r = (priceRanges as any[]).find((x) => x.id === range) ?? priceRanges[0];

    let list = products.filter((p) => {
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.chip.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      const matchLine = line === "all" || p.line === line;
      const matchRange = p.price >= r.min && p.price < r.max;
      return matchQ && matchLine && matchRange;
    });

    if (sort === "priceAsc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "priceDesc") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [products, query, line, range, sort]);

  const reset = () => {
    setQuery("");
    setLine("all");
    setRange("all");
    setSort("default");
  };

  return (
    <section id="san-pham" className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-800">
            Danh sách iPhone
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Chọn lọc {products.length} mẫu máy chính hãng — giá đã bao gồm VAT
          </p>
        </div>

        {/* Bộ lọc */}
        <div className="mt-8 rounded-3xl border border-brand-100 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                🔍
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm kiếm: iPhone 15, A18, Pro Max..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <select
                value={range}
                onChange={(e) => setRange(e.target.value)}
                aria-label="Lọc theo giá"
                className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              >
               
              </select>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                aria-label="Sắp xếp"
                className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              >
                <option value="default">Sắp xếp mặc định</option>
                <option value="priceAsc">Giá thấp → cao</option>
                <option value="priceDesc">Giá cao → thấp</option>
              </select>

              <button
                type="button"
                onClick={reset}
                className="rounded-full border border-brand-200 px-4 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                Đặt lại
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setLine("all")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                line === "all"
                  ? "bg-brand-700 text-white shadow"
                  : "bg-brand-50 text-brand-700 hover:bg-brand-100"
              }`}
            >
              Tất cả dòng
            </button>
            {lines.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLine(l)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                  line === l
                    ? "bg-brand-700 text-white shadow"
                    : "bg-brand-50 text-brand-700 hover:bg-brand-100"
                }`}
              >
                iPhone {l}
              </button>
            ))}
          </div>
        </div>

        {/* Danh sách */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onSelect={onSelect} onAdd={onAdd} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-brand-200 bg-white py-16 text-center">
            <p className="text-4xl">😔</p>
            <p className="mt-3 font-bold text-slate-700">
              Không tìm thấy sản phẩm phù hợp
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Thử đổi từ khóa hoặc bộ lọc bạn nhé.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 rounded-full bg-brand-700 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-800"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
