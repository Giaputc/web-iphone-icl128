import Image from "next/image";
import { shop } from "@/lib/shop";

const contacts = [
  {
    icon: "/icons/phone.png",
    title: "Hotline / Điện thoại",
    value: shop.phoneDisplay,
    desc: "Gọi ngay để được tư vấn & báo giá",
    href: `tel:${shop.phone}`,
  },
  {
    icon: "/icons/zalo.png",
    title: "Zalo",
    value: shop.phoneDisplay,
    desc: "Nhắn tin Zalo nhận ưu đãi riêng",
    href: "#lien-he",
  },
  {
    icon: "/icons/messenger.png",
    title: "Messenger",
    value: `${shop.brand} Store`,
    desc: "Chat Facebook hỗ trợ 24/7",
    href: "#lien-he",
  },
  {
    icon: "/icons/map.png",
    title: "Trụ sở công ty",
    value: shop.addressShort,
    desc: `Mở cửa ${shop.hours}`,
    href: `https://maps.google.com/?q=${encodeURIComponent(shop.mapQuery)}`,
  },
];

export default function ContactSection() {
  return (
    <section id="lien-he" className="bg-gradient-to-b from-brand-50 to-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-800">
            Liên hệ với chúng tôi
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Tư vấn miễn phí — phản hồi trong vòng 5 phút
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="group rounded-3xl border border-brand-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-400 hover:shadow-lg"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100">
                <Image src={c.icon} alt="" width={30} height={30} />
              </span>
              <p className="mt-3 text-xs font-bold uppercase tracking-wide text-brand-600">
                {c.title}
              </p>
              <p className="mt-1 text-sm font-extrabold text-slate-900">{c.value}</p>
              <p className="mt-1 text-xs text-slate-500">{c.desc}</p>
            </a>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-brand-800 to-brand-600 p-6 text-white sm:p-8">
              <h3 className="text-xl font-bold">Nhận báo giá ưu đãi</h3>
              <p className="mt-2 text-sm text-blue-100">
                Để lại thông tin, nhân viên iCL128 sẽ gọi lại trong 5 phút với
                mức giá tốt nhất thị trường.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-blue-50">
                <li>✓ Tư vấn chọn máy theo nhu cầu & ngân sách</li>
                <li>✓ Hỗ trợ trả góp 0% qua thẻ tín dụng</li>
                <li>✓ Thu cũ đổi mới — trợ giá đến 2 triệu</li>
              </ul>
            </div>

            <form
              className="space-y-3 p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const el = e.currentTarget.querySelector<HTMLElement>("[data-ok]");
                if (el) el.style.display = "block";
                e.currentTarget.reset();
              }}
            >
              <input
                required
                placeholder="Họ và tên *"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
              <input
                required
                inputMode="tel"
                placeholder="Số điện thoại *"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
              <select
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                defaultValue=""
              >
                <option value="" disabled>
                  Bạn quan tâm model nào?
                </option>
                <option>iPhone 17</option>
                <option>iPhone 16</option>
                <option>iPhone 15 series</option>
                <option>iPhone 14 series</option>
                <option>iPhone 13 / 12</option>
              </select>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-brand-700 to-sky-500 py-3.5 text-sm font-bold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
              >
                Gửi yêu cầu tư vấn
              </button>
              <p data-ok style={{ display: "none" }} className="text-center text-sm font-semibold text-brand-700">
                ✓ Đã gửi! Chúng tôi sẽ gọi lại cho bạn ngay.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-brand-100 bg-brand-50">
          <iframe
            title={`Bản đồ ${shop.legalName}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              shop.mapQuery
            )}&output=embed`}
            className="h-72 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
