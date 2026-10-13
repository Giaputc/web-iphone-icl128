"use client";

import Image from "next/image";
import { shop } from "@/lib/shop";

const navLinks = [
  { href: "#trang-chu", label: "Trang chủ" },
  { href: "#san-pham", label: "Sản phẩm" },
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#lien-he", label: "Liên hệ" },
];

export default function Header({
  count,
  onOpenCart,
}: {
  count: number;
  onOpenCart: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#trang-chu" className="flex items-center gap-3">
          <Image
            src={shop.logo}
            alt={`${shop.legalName} — ${shop.brand}`}
            width={shop.logoWidth}
            height={shop.logoHeight}
            priority
            className="h-16 w-auto rounded-lg object-contain shadow-sm sm:h-[4.5rem]"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${shop.phone}`}
            className="hidden items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 sm:flex"
          >
            📞 {shop.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={onOpenCart}
            className="relative flex items-center gap-2 rounded-full bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
          >
            <span aria-hidden>🛒</span>
            <span className="hidden sm:inline">Giỏ hàng</span>
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      <nav className="flex items-center justify-center gap-5 border-t border-brand-100 bg-brand-50 py-2 md:hidden">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs font-semibold text-brand-800"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
