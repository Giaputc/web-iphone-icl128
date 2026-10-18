export const site = {
  name: "ICL 128",
  legalName: "Công ty TNHH ICL 128",
  legalNameEn: "ICL 128 Co., Ltd",
  fullName: "Công ty trách nhiệm hữu hạn",
  slogan: "Thuê điện thoại chuẩn – Giá rõ ràng – Đồng hành mọi hành trình",
  description:
    "ICL 128 cho thuê điện thoại thông minh theo ngày, tuần, tháng cho cá nhân, du khách và doanh nghiệp tại Hải Phòng.",
  phone: "0961.697.999",
  phoneRaw: "0961697999",
  addressShort: "Số 11B Đường Trần Tất Văn, Xã An Lão, TP. Hải Phòng",
  addressFull:
    "Số 11B Đường Trần Tất Văn, Xã An Lão, Thành phố Hải Phòng, Việt Nam",
  license: "Sở Tài chính TP. Hải Phòng",
  year: 2026,
} as const;

export const info = [
  { label: "Địa chỉ", value: site.addressShort },
  { label: "Điện thoại", value: site.phone },
] as const;

export const navLinks = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#danh-muc", label: "Gói thuê" },
  { href: "#dien-thoai", label: "Điện thoại" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#faq", label: "Câu hỏi" },
  { href: "#lien-he", label: "Liên hệ" },
] as const;

export const topbarText =
  "🚚 Giao máy tận nơi tại Hải Phòng · 🔥 Giảm 20% gói tuần cuối tuần này · 🛡️ Máy sạch, kiểm tra kỹ, đổi máy miễn phí nếu lỗi · 📞 Hotline 0961.697.999";
