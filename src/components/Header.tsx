"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-20 border-b border-[rgba(147,197,253,.25)] bg-[rgba(13,17,23,.94)] backdrop-blur-[8px]">
      <div className="wrap flex h-[68px] items-center justify-between">
        <a
          href="#gioi-thieu"
          className="flex items-center"
          aria-label="ICL 128 – về đầu trang"
        >
          <Image
            src="/logo-mark.webp"
            alt="ICL 128"
            width={742}
            height={178}
            priority
            className="h-10 w-auto rounded-md border border-[rgba(147,197,253,.3)] shadow-[0_2px_10px_rgba(0,0,0,.35)] max-[820px]:h-8"
          />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="menu"
          className="hidden max-[820px]:block cursor-pointer rounded border-2 border-accentlt bg-transparent px-3 py-[6px] font-bold text-[15px] text-accentlt"
        >
          Menu
        </button>

        <ul
          id="menu"
          className={`list-none p-0 font-medium text-[14.5px] max-[820px]:absolute max-[820px]:top-[68px] max-[820px]:right-0 max-[820px]:left-0 max-[820px]:flex-col max-[820px]:gap-0 max-[820px]:border-b max-[820px]:border-[rgba(147,197,253,.25)] max-[820px]:bg-dark max-[820px]:px-[4%] max-[820px]:py-2 ${
            menuOpen ? "flex max-[820px]:flex" : "flex max-[820px]:hidden"
          }`}
        >
          {navLinks.map((l) => (
            <li key={l.href} className="max-[820px]:w-full">
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-onmut transition-colors hover:text-accentlt max-[820px]:block max-[820px]:py-[14px] max-[820px]:text-base"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="btn btn-gold anim-pulse-ring !py-[9px] !text-[14px]"
          href={`tel:0961697999`}
        >
          📞 Gọi thuê
        </a>
      </div>
    </header>
  );
}
