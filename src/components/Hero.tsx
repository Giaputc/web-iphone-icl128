"use client";

import Image from "next/image";
import { info, site } from "@/data/site";
import { phones, parsePrice } from "@/data/phones";

const BEST_INDEX = 0;
const best = phones[BEST_INDEX];
const bestOldPrice = Math.round(parsePrice(best.price) * 1.25);

export default function Hero() {
  return (
    <section
      id="gioi-thieu"
      className="border-b-[3px] border-gold px-0 py-14 text-center max-[820px]:py-[60px]"
      style={{
        background:
          "radial-gradient(900px 500px at 70% 0, var(--color-navy2), transparent 70%), #fff",
      }}
    >
      <div className="hero-grid wrap">
        <Image
          src="/logo.webp"
          alt={`${site.name} – Cho thuê điện thoại tại Hải Phòng`}
          width={1143}
          height={683}
          priority
          className="hero-logo anim-float w-full self-center rounded-md border-2 border-gold shadow-[0_20px_50px_rgba(37,99,235,.16)]"
        />

        <div className="min-w-0">
          <h1
            className="text-grad shimmer-title font-bold"
            style={{
              fontSize: "clamp(64px,9.5vw,135px)",
              letterSpacing: ".04em",
              lineHeight: ".95",
              filter:
                "drop-shadow(0 3px 0 rgba(37,99,235,.28)) drop-shadow(0 12px 20px rgba(37,99,235,.18))",
            }}
          >
            {site.name}
          </h1>
          <p
            className="text-grad mt-[14px] font-bold uppercase"
            style={{
              fontSize: "clamp(20px,3.6vw,38px)",
              letterSpacing: ".12em",
            }}
          >
            {site.fullName}
          </p>
          <p
            className="mx-auto mt-[26px] max-w-[900px] font-medium uppercase text-text"
            style={{
              fontSize: "clamp(20px,3vw,32px)",
              letterSpacing: ".06em",
            }}
          >
            {site.slogan}
          </p>
          <p className="mx-auto mt-[18px] max-w-[640px] text-[17px] text-mut">
            {site.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-[14px]">
            <a className="btn btn-gold" href="#dien-thoai">
              Xem điện thoại cho thuê
            </a>
            <a className="btn btn-line" href={`tel:${site.phoneRaw}`}>
              Gọi {site.phone}
            </a>
          </div>
        </div>

        <aside className="best relative rounded-md border-2 border-gold bg-navy2 px-5 pt-[26px] pb-[22px] text-center shadow-[0_20px_45px_rgba(37,99,235,.15)]">
          <span className="absolute top-3 left-3 rounded-[3px] bg-[#ff4d2e] px-[9px] py-[3px] text-[12px] font-bold text-white">
            🔥 BÁN CHẠY NHẤT
          </span>
          <div className="mx-auto mt-[18px] flex h-[176px] items-center justify-center">
            {best.image ? (
              <Image
                src={best.image}
                alt={best.name}
                width={400}
                height={400}
                className="h-full w-auto max-w-full object-contain"
              />
            ) : (
              <div
                className="shape !m-0"
                style={
                  {
                    "--c1": best.colors[0],
                    "--c2": best.colors[1],
                  } as React.CSSProperties
                }
              />
            )}
          </div>
          <h3 className="text-[26px] font-bold">{best.name}</h3>
          <p className="my-1 text-mut">
            {best.storage} · {best.available ? "Có sẵn" : "Đang cho thuê"}
          </p>
          <div className="stars my-[6px] text-sm">
            <span aria-hidden="true">★★★★★</span>{" "}
            <small className="text-mut text-[12.5px]">
              4.9 · Đã thuê 200+ lượt
            </small>
          </div>
          <div className="my-[14px] text-gold font-bold text-[32px] font-head">
            {best.price}
            <span className="ml-2 text-mut text-[14px] line-through font-normal">
              {bestOldPrice}K
            </span>{" "}
            <span className="text-[18px]">/ ngày</span>
          </div>
          <a
            className="btn btn-gold anim-pulse-ring block w-full text-center"
            href={`tel:${site.phoneRaw}`}
          >
            <span aria-hidden="true">📞</span> Thuê ngay
          </a>
        </aside>

        <div className="info-grid col-span-full mt-14 border border-line bg-[rgba(37,99,235,.05)] text-left">
          {info.map((i) => (
            <div key={i.label} className="border-line px-6 py-5">
              <b className="mb-1 block text-[13px] font-medium text-gold">
                {i.label}
              </b>
              <span className="text-[17px] font-bold">{i.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
