import Image from "next/image";
import { shop } from "@/lib/shop";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-blue-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src={shop.logo}
            alt={shop.legalName}
            width={shop.logoWidth}
            height={shop.logoHeight}
            className="h-auto w-full max-w-xs rounded-xl ring-1 ring-white/20"
          />
          <p className="mt-4 text-sm leading-relaxed">
            <b className="text-white">{shop.legalName}</b>
            <br />
            <span className="text-blue-200">{shop.legalNameForeign}</span> · MST{" "}
            {shop.mst}
            <br />
           
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">
            Danh mục sản phẩm
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {[].map(
              (l) => (
                <li key={l}>
                  <a href="#san-pham" className="transition hover:text-white">
                    {l}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">
            Thông tin liên hệ
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>📍 {shop.address}</li>
            <li>
              📞{" "}
              <a href={`tel:${shop.phone}`} className="transition hover:text-white">
                {shop.phoneDisplay}
              </a>
            </li>
            <li>✉️ {shop.email}</li>
            <li>🕗 {shop.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-blue-200">
        © {new Date().getFullYear()} {shop.legalName} ({shop.legalNameShort},
        MST {shop.mst}) — {shop.address}. Tất cả quyền được bảo lưu.
      </div>
    </footer>
  );
}
