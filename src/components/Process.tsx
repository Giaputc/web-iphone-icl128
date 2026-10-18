import { steps } from "@/data/faqs";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="quy-trinh" className="px-0 py-[84px] max-[820px]:py-[60px]">
      <div className="wrap">
        <Reveal className="mb-11 max-w-[720px]">
          <h2
            className="text-grad font-bold"
            style={{ fontSize: "clamp(34px,5vw,56px)", letterSpacing: ".02em" }}
          >
            Quy trình thuê
          </h2>
          <p className="mt-3 text-mut">
            Bốn bước, mất khoảng 10 phút tại cửa hàng.
          </p>
        </Reveal>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <Reveal key={s.title} className="step">
              <span
                aria-hidden="true"
                className="mb-[14px] grid size-[46px] place-items-center rounded-full bg-gold font-bold font-head text-[24px] text-white"
              >
                {i + 1}
              </span>
              <h3 className="mb-[6px] text-[22px]">{s.title}</h3>
              <p className="m-0 text-[15px] text-mut">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
