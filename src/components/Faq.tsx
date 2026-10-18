import { faqs } from "@/data/faqs";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section id="faq" className="bg-navy2 px-0 py-[84px] max-[820px]:py-[60px]">
      <div className="wrap">
        <Reveal className="mb-11 max-w-[720px]">
          <h2
            className="text-grad font-bold"
            style={{ fontSize: "clamp(34px,5vw,56px)", letterSpacing: ".02em" }}
          >
            Câu hỏi thường gặp
          </h2>
        </Reveal>

        <div className="max-w-[860px]">
          {faqs.map((f) => (
            <Reveal as="details" key={f.q} className="faq-item border-b border-line py-[4px]">
              <summary>{f.q}</summary>
              <p className="mb-[18px] max-w-[70ch] text-mut">{f.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
