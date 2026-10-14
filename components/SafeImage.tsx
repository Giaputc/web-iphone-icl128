"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = ImageProps & {
  /** Nhãn hiển thị trên ảnh minh họa dự phòng (khi ảnh gốc không tồn tại) */
  fallbackLabel?: string;
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** SVG minh họa điện thoại dùng tạm khi file ảnh không có sẵn. */
function placeholderDataUri(label: string): string {
  const text = escapeXml(label);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#e8f1fb"/>
      <stop offset="100%" stop-color="#cfe3f7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg)"/>
  <rect x="140" y="70" width="120" height="210" rx="22" fill="#ffffff" stroke="#1e3a8a" stroke-width="6"/>
  <rect x="182" y="82" width="36" height="8" rx="4" fill="#1e3a8a"/>
  <circle cx="200" cy="258" r="8" fill="#1e3a8a"/>
  <circle cx="164" cy="104" r="9" fill="#93b4e8"/>
  <circle cx="192" cy="104" r="9" fill="#93b4e8"/>
  <text x="200" y="330" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#1e3a8a">${text}</text>
  <text x="200" y="356" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#64748b">Ảnh đang được cập nhật</text>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/**
 * Image "bản sao" của next/image: nếu ảnh gốc bị lỗi / chưa tồn tại
 * (vd: chưa có file trong public/images), sẽ tự động hiển thị ảnh minh họa dự phòng.
 */
export default function SafeImage({
  fallbackLabel = "iPhone",
  alt,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <Image
      {...props}
      alt={alt}
      src={failed ? placeholderDataUri(fallbackLabel) : props.src}
      onError={() => setFailed(true)}
    />
  );
}
