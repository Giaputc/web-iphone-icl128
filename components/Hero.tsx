import Image from "next/image";

const highlights = [
  { icon: "🚚", title: "Giao hàng toàn quốc", desc: "Miễn phí ship đơn từ 500k" },
  { icon: "🛡️", title: "Bảo hành 12 tháng", desc: "1 đổi 1 trong 30 ngày đầu" },
  { icon: "💳", title: "Trả góp 0%", desc: "Qua thẻ tín dụng & công ty tài chính" },
  { icon: "✅", title: "Chính hãng 100%", desc: "Fullbox, nguồn gốc rõ ràng" },
];

export default function Hero() {
  return (
    <section
      id="trang-chu"
      className="bg-gradient-to-br from-brand-800 via-brand-700 to-sky-500 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/30">
            ✨ Bộ đôi iPhone 17 vừa mở bán
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
            Mua iPhone chính hãng
            <br />
            <span className="text-sky-200">giá tốt nhất 2026</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-blue-100 sm:text-lg">
            Từ iPhone 12 đến iPhone 17 — đầy đủ màu sắc, bộ nhớ. Trả góp 0%,
            giao nhanh trong 2 giờ tại nội thành.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#san-pham"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-800 shadow-lg transition hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Xem ngay sản phẩm
            </a>
            <a
              href="#lien-he"
              className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Tư vấn miễn phí
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-white/10 shadow-2xl ring-1 ring-white/20">
            <Image
              src="/images/iphone-17.jpg"
              alt="iPhone 17 chính hãng"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white px-5 py-4 text-center text-brand-900 shadow-xl sm:left-auto sm:right-0 sm:translate-x-0">
            <p className="text-xs font-semibold text-brand-600">
              iPhone 17 256GB chỉ từ
            </p>
            <p className="text-2xl font-extrabold text-brand-800">22.990.000đ</p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 border-t border-white/15 px-4 py-8 sm:px-6 lg:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.title} className="rounded-2xl bg-white/10 p-4 text-center">
            <div className="text-2xl">{h.icon}</div>
            <p className="mt-2 text-sm font-bold">{h.title}</p>
            <p className="mt-1 text-xs text-blue-100">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
