import { packages } from "@/data/packages";
import Reveal from "./Reveal";

export default function Packages() {
  return (
    <section id="danh-muc" className="px-0 py-[84px] max-[820px]:py-[60px]">
      <div className="wrap">
        <Reveal className="mb-11 max-w-[720px]">
          <h2 className="text-grad font-bold" style={{ fontSize: "clamp(34px,5vw,56px)", letterSpacing: ".02em" }}>
            Danh mục gói thuê
          </h2>
          <p className="mt-3 text-mut">
            Chọn gói theo thời gian bạn cần. Giá dưới đây là giá tham khảo cho máy
            tầm trung; máy cao cấp tính theo bảng ở mục điện thoại.
          </p>
        </Reveal>

        <div className="pk-grid">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`card flex flex-col border border-line border-t-[5px] border-t-gold bg-navy p-[30px_26px] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-[0_18px_40px_rgba(31,41,55,.18)] ${
                p.hot ? "border-gold bg-navy2 shadow-[0_0_0_1px_var(--color-gold)]" : ""
              }`}
            >
              {p.tag && (
                <span className="mb-[10px] self-start rounded-[2px] bg-gold px-[10px] py-[3px] text-[12px] font-bold text-white">
                  {p.tag}
                </span>
              )}
              <h3 className="text-[30px] font-bold">{p.name}</h3>
              <div className="text-grad my-[10px] font-bold text-[40px] font-head">
                {p.price}
                <small className="text-mut text-[14px] font-normal">
                  {p.unit}
                </small>
              </div>
              <ul className="my-[14px] mb-6 flex-1 list-none p-0 text-mut">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="relative border-b border-dashed border-[rgba(31,41,55,.12)] py-[7px] pl-[26px]"
                  >
                    <span className="absolute left-0 font-bold text-gold" aria-hidden="true">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                className={`btn ${p.hot ? "btn-gold" : "btn-line"}`}
                href="#lien-he"
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
