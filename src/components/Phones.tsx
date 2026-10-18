"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  phones,
  brandFilters,
  parsePrice,
  ratingFor,
  rentalsFor,
} from "@/data/phones";
import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function Phones() {
  const [filter, setFilter] = useState<string>("all");
  const [query, setQuery] = useState("");

  const list = useMemo(
    () =>
      phones
        .map((p, i) => ({ ...p, index: i }))
        .filter(
          (p) =>
            (filter === "all" || p.brand === filter) &&
            p.name.toLowerCase().includes(query.trim().toLowerCase())
        ),
    [filter, query]
  );

  return (
    <section
      id="dien-thoai"
      className="bg-navy2 px-0 py-[84px] max-[820px]:py-[60px]"
    >
      <div className="wrap">
        <Reveal className="mb-11 max-w-[720px]">
          <h2
            className="text-grad font-bold"
            style={{ fontSize: "clamp(34px,5vw,56px)", letterSpacing: ".02em" }}
          >
            Điện thoại có sẵn cho thuê
          </h2>
          <p className="mt-3 text-mut">
            Danh sách máy đang có tại cửa hàng. Giá thuê theo ngày; thuê tuần hoặc
            tháng sẽ được giảm.
          </p>
        </Reveal>

        <div className="srch mb-[18px]">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm điện thoại:Samsung, Xiaomi..."
            aria-label="Tìm điện thoại"
            className="w-full rounded-full border-2 border-line bg-ink px-5 py-[14px] text-[15px] text-text focus:border-gold focus:outline-none"
          />
        </div>

        <div
          className="mb-[30px] flex flex-wrap gap-[10px]"
          role="group"
          aria-label="Lọc theo hãng"
        >
          {brandFilters.map((b) => (
            <button
              key={b}
              type="button"
              aria-pressed={filter === b}
              onClick={() => setFilter(b)}
              className={`cursor-pointer rounded-full border px-5 py-[9px] text-[14.5px] font-medium transition-colors ${
                filter === b
                  ? "border-gold bg-gold font-bold text-white"
                  : "border-line bg-transparent text-mut"
              }`}
            >
              {b === "all" ? "Tất cả" : b === "Khác" ? "Hãng khác" : b}
            </button>
          ))}
        </div>

        <div className="phones-grid">
          {list.length > 0 ? (
            list.map((p) => {
              const oldPrice = Math.round(parsePrice(p.price) * 1.25);
              return (
                <article
                  key={p.name}
                  className="ph relative border border-line bg-navy p-[22px] text-center transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-[0_18px_40px_rgba(31,41,55,.18)]"
                >
                  {p.index < 3 && (
                    <span className="absolute top-3 left-3 rounded-[3px] bg-[#ff4d2e] px-[9px] py-[3px] text-[12px] font-bold text-white">
                      HOT
                    </span>
                  )}
                  <span className="absolute top-3 right-3 rounded-[3px] bg-[#ffd23f] px-[9px] py-[3px] text-[12px] font-bold text-[#3a2a00]">
                    -20%
                  </span>

                  {p.image ? (
                    <div className="mx-auto mb-[18px] flex h-[176px] items-center justify-center">
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={400}
                        height={400}
                        loading="lazy"
                        className="h-full w-auto max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="shape"
                      style={
                        {
                          "--c1": p.colors[0],
                          "--c2": p.colors[1],
                        } as React.CSSProperties
                      }
                    />
                  )}

                  <h3 className="text-[22px] font-bold">{p.name}</h3>
                  <p className="my-[6px] text-[14px] text-mut">
                    {p.brand} · {p.storage}
                  </p>

                  <div className="stars my-[6px] text-sm">
                    <span aria-hidden="true">★★★★★</span>{" "}
                    <small className="text-mut text-[12.5px]">
                      {ratingFor(p.index)} · Đã thuê {rentalsFor(p.index)} lượt
                    </small>
                  </div>

                  <span
                    className={`inline-block rounded-full px-[10px] py-[2px] text-[12.5px] font-bold ${
                      p.available
                        ? "bg-[rgba(34,197,94,.15)] text-[#15803d]"
                        : "bg-[rgba(239,68,68,.15)] text-[#b91c1c]"
                    }`}
                  >
                    {p.available ? "Có sẵn" : "Đang cho thuê"}
                  </span>

                  <div className="my-[10px] text-gold font-bold text-[24px] font-head">
                    {p.price}
                    <span className="ml-2 text-mut text-[14px] line-through font-normal">
                      {oldPrice}K
                    </span>{" "}
                    <span className="text-[15px]">/ ngày</span>
                  </div>

                  {p.available ? (
                    <a
                      className="btn btn-gold block w-full px-[6px] py-[11px] text-center text-[13.5px]"
                      href={`tel:${site.phoneRaw}`}
                    >
                      <span aria-hidden="true">📞</span> Thuê ngay
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="btn btn-gold block w-full cursor-not-allowed px-[6px] py-[11px] text-center text-[13.5px] opacity-45"
                    >
                      Thuê ngay
                    </span>
                  )}
                </article>
              );
            })
          ) : (
            <p className="col-span-full text-mut">
              Không tìm thấy máy phù hợp.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
