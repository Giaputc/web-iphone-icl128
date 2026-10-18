import type { Metadata, Viewport } from "next";
import { Oswald, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const oswald = Oswald({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
  variable: "--font-bevietnam",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://icl128.click"), // TODO: thay bằng domain thật
  title: "ICL 128 – Cho thuê điện thoại Hải Phòng",
  description:
    "ICL 128 cho thuê điện thoại thông minh theo ngày, tuần, tháng tại Hải Phòng. Hotline 0961.697.999.",
  keywords: [
    "cho thuê điện thoại",
    "thuê điện thoại Hải Phòng",
    "thuê Phone",
    "ICL 128",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: site.name,
    title: "ICL 128 – Cho thuê điện thoại Hải Phòng",
    description:
      "Thuê điện thoại chuẩn – Giá rõ ràng – Đồng hành mọi hành trình. Cho thuê điện thoại theo ngày, tuần, tháng tại Hải Phòng.",
    images: [{ url: "/logo.webp", width: 1143, height: 683, alt: "ICL 128" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ICL 128 – Cho thuê điện thoại Hải Phòng",
    description:
      "Thuê điện thoại chuẩn – Giá rõ ràng – Đồng hành mọi hành trình tại Hải Phòng.",
    images: ["/logo.webp"],
  },
  // TODO: thêm canonical khi có domain thật
  // canonical: "https://domain/",
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  alternateName: site.legalName,
  description: "Cho thuê điện thoại thông minh tại Hải Phòng theo ngày, tuần, tháng.",
  telephone: "+84961697999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Số 11B Đường Trần Tất Văn, Xã An Lão",
    addressLocality: "TP. Hải Phòng",
    addressCountry: "VN",
  },
  areaServed: "TP. Hải Phòng",
  priceRange: "từ 80.000đ",
  image: "/logo.webp",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${oswald.variable} ${beVietnam.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
