import Image from "next/image";
import { shop } from "@/lib/shop";

const stats = [
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "50.000+", label: "Khách hàng tin tưởng" },
  { value: "99%", label: "Khách hàng hài lòng" },
  { value: "24/7", label: "Hỗ trợ tư vấn" },
];

const reasons = [
  {
    icon: "✅",
    title: "Chính hãng 100%",
    desc: "Máy nhập khẩu nguyên seal, kiểm tra IMEI trước khi nhận.",
  },
  {
    icon: "🔄",
    title: "Đổi trả dễ dàng",
    desc: "1 đổi 1 trong 30 ngày nếu lỗi do nhà sản xuất.",
  },
  {
    icon: "🔧",
    title: "Bảo hành dài hạn",
    desc: "Bảo hành chính hãng 12 tháng, hỗ trợ sửa chữa trọn đời.",
  },
  {
    icon: "💰",
    title: "Giá cạnh tranh",
    desc: "Luôn rẻ hơn thị trường 500k — 2 triệu, thu cũ đổi mới cao.",
  },
];

export default function AboutSection() {
  return (
    <section id="gioi-thieu" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-700">
              Về {shop.legalNameShort}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-brand-800">
              Cửa hàng uy tín
              <br />
              được hàng nghìn khách hàng tin chọn
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              <b>{shop.legalName}</b> — tên tiếng Anh{" "}
              <b>{shop.legalNameForeign}</b> (MST {shop.mst}), thương hiệu{" "}
              <b>{shop.brand}</b>, chuyên kinh doanh  chính hãng fullbox
              từ 12 đến17. Trụ sở chính: {shop.address}. Chúng
              tôi cam kết nguồn gốc minh bạch, giá bán rõ ràng và dịch vụ hậu
              mãi tận tâm — mọi máy đều được kiểm tra kỹ thuật 30 điểm trước
              khi bàn giao.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Đội ngũ nhân viên nhiệt tình sẽ tư vấn model phù hợp với nhu cầu
              và ngân sách của bạn, hỗ trợ trả góp 0% và thu cũ đổi mới với giá
              cao nhất thị trường.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-brand-50 px-3 py-4 text-center"
                >
                  <p className="text-xl font-extrabold text-brand-700">{s.value}</p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-3xl border border-brand-100 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-xl">
                  {r.icon}
                </div>
                <h3 className="mt-3 font-bold text-slate-900">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-brand-100 bg-brand-50">
          <Image
            src={shop.logo}
            alt={`${shop.legalName} — biển hiệu công ty`}
            width={shop.logoWidth}
            height={shop.logoHeight}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
