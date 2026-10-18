"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function FloatingButtons() {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowUp(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-[calc(20px+env(safe-area-inset-bottom,0px))] z-25 flex flex-col gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Lên đầu trang"
        className={`grid size-[54px] place-items-center rounded-full border-0 bg-gold text-[24px] font-bold text-white shadow-[0_8px_20px_rgba(31,41,55,.28)] transition-all duration-300 cursor-pointer ${
          showUp
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <span aria-hidden="true">↑</span>
      </button>

      <a
        href={`tel:${site.phoneRaw}`}
        aria-label="Gọi cửa hàng"
        className="anim-ring grid size-[54px] place-items-center rounded-full border-0 bg-[#22c55e] text-[24px] shadow-[0_8px_20px_rgba(31,41,55,.28)]"
      >
        <span aria-hidden="true">📞</span>
      </a>
    </div>
  );
}
