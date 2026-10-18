"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

type Left = { d: string; h: string; m: string; s: string };

/** Tính thời gian còn lại tới 23:59:59 Chủ nhật (kết thúc flash sale cuối tuần). */
function remaining(): Left {
  const now = new Date();
  const end = new Date(now);
  const day = now.getDay(); // 0 = Chủ nhật
  const diff = (7 - day) % 7; // số ngày tới Chủ nhật gần nhất
  end.setDate(now.getDate() + diff);
  end.setHours(23, 59, 59, 999);

  const total = Math.max(0, end.getTime() - now.getTime()) / 1000 | 0;
  const z = (v: number) => String(v).padStart(2, "0");
  return {
    d: z((total / 86400) | 0),
    h: z(((total % 86400) / 3600) | 0),
    m: z(((total % 3600) / 60) | 0),
    s: z(total % 60),
  };
}

export default function FlashSale() {
  const [left, setLeft] = useState<Left>({ d: "00", h: "00", m: "00", s: "00" });

  useEffect(() => {
    setLeft(remaining());
    const id = setInterval(() => setLeft(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const cells: Array<[keyof Left, string]> = [
    ["d", "ngày"],
    ["h", "giờ"],
    ["m", "phút"],
    ["s", "giây"],
  ];

  return (
    <section className="bg-[linear-gradient(100deg,#ff4d2e,#ff9a2e)] py-7 text-white">
      <div className="wrap flex flex-wrap items-center justify-between gap-5">
        <div>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)" }}>
            ⚡ Flash sale cuối tuần
          </h2>
          <p className="mt-1">
            Giảm 20% khi thuê gói tuần. Kết thúc sau:
          </p>
        </div>

        <div
          className="flex items-center gap-2 font-bold font-head text-[34px]"
          aria-label="Thời gian flash sale còn lại"
          role="timer"
        >
          {cells.map(([k, label], idx) => (
            <span key={k} className="flex items-center gap-2">
              <b className="min-w-16 rounded-md bg-white px-2 py-1 text-center text-[#d8381a]">
                {left[k]}
              </b>
              <span className="sr-only">{label}</span>
              {idx < cells.length - 1 && (
                <span aria-hidden="true">:</span>
              )}
            </span>
          ))}
        </div>

        <a
          className="btn !border-white !bg-white !text-[#d8381a] !shadow-none"
          href="#dien-thoai"
        >
          Thuê ngay
        </a>
      </div>
    </section>
  );
}
