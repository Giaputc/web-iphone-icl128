import type { Metadata, Viewport } from "next";
import { shop } from "@/lib/shop";
import "./globals.css";

export const metadata: Metadata = {
  title: `${shop.brand} — Cửa hàng bán iPhone chính hãng tại Hải Phòng`,
  description: `Mua iPhone 12, 13, 14, 15, 16, 17 chính hãng giá tốt nhất. ${shop.legalName} (${shop.legalNameShort}) — ${shop.address}. Giao hàng toàn quốc, trả góp 0%, bảo hành 12 tháng.`,
  keywords: [
    "bán iPhone",
    "iPhone 17",
    "iPhone 16",
    "iPhone 15",
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
