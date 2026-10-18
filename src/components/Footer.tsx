import { site, navLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer
      id="lien-he"
      className="border-t-[3px] border-gold bg-dark px-0 pt-14 pb-6"
    >
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h4 className="mb-3 text-[20px] font-bold tracking-[.06em] text-accentlt">
              {site.legalName}
            </h4>
            <p className="my-[6px] text-[15px] text-onmut">
              Cho thuê điện thoại thông minh tại Hải Phòng. Thuê chuẩn, giá rõ
              ràng, đồng hành mọi hành trình.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-[20px] font-bold tracking-[.06em] text-accentlt">
              Liên hệ
            </h4>
            <ul className="list-none p-0">
              <li className="my-[6px] text-[15px] text-onmut">
                {site.addressFull}
              </li>
              <li className="my-[6px] text-[15px] text-onmut">
                <a className="transition-colors hover:text-accentlt" href={`tel:${site.phoneRaw}`}>
                  Điện thoại: {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[20px] font-bold tracking-[.06em] text-accentlt">
              Menu
            </h4>
            <ul className="list-none p-0">
              {navLinks
                .filter((l) =>
                  ["#danh-muc", "#dien-thoai", "#quy-trinh", "#faq"].includes(l.href)
                )
                .map((l) => (
                  <li key={l.href} className="my-[6px] text-[15px] text-onmut">
                    <a className="transition-colors hover:text-accentlt" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-9 border-t border-[rgba(147,197,253,.2)] pt-[18px] text-center text-[13.5px] text-onmut">
          © {site.year} {site.legalName} ({site.legalNameEn}). Giấy chứng nhận
          đăng ký doanh nghiệp do {site.license} cấp.
        </div>
      </div>
    </footer>
  );
}
