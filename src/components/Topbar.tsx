import { topbarText } from "@/data/site";

export default function Topbar() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gold py-[7px] font-bold text-[13.5px] text-white">
      <span className="marquee-text">{topbarText}</span>
    </div>
  );
}
