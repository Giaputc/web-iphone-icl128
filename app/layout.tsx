import type { Metadata, Viewport } from "next";
import { shop } from "@/lib/shop";
import "./globals.css";

export const metadata: Metadata = {
  title: `${shop.brand} — Cửa hàng chính hãng tại Hải Phòng`,
  description: ` ${shop.legalName} (${shop.legalNameShort}) — ${shop.address}. Giao hàng toàn quốc, trả góp 0%, bảo hành 12 tháng.`,
  keywords: [
    "bán iPhone",
    "..",
    "..",
    "..",
    "mua iPhone chính hãng",
    "iPhone Hải Phòng",
    shop.brand,
    shop.legalName,
    shop.legalNameForeign,
    shop.legalNameShort,
  ],
};

export const viewport: Viewport = {
  themeColor: "#1d4ed8",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
