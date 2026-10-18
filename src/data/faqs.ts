export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Tôi cần giấy tờ gì để thuê?",
    a: "Bạn cần CCCD bản gốc. Khách nước ngoài mang hộ chiếu. Doanh nghiệp thêm giấy giới thiệu hoặc hợp đồng.",
  },
  {
    q: "Tiền đặt cọc là bao nhiêu?",
    a: "Mức cọc phụ thuộc vào dòng máy và thời gian thuê. Nhân viên sẽ báo rõ trước khi ký hợp đồng và hoàn lại khi bạn trả máy.",
  },
  {
    q: "Máy bị lỗi hoặc hỏng khi đang dùng thì sao?",
    a: "Lỗi do nhà sản xuất được đổi máy khác miễn phí. Hư hỏng do người dùng (rơi vỡ, vào nước, mất máy) sẽ tính theo điều khoản trong hợp đồng.",
  },
  {
    q: "Tôi có thể gia hạn thời gian thuê không?",
    a: "Có. Gọi 0961.697.999 trước khi hết hạn để gia hạn, giá theo gói bạn chọn.",
  },
  {
    q: "Có giao máy tận nơi không?",
    a: "Có thể giao tại Hải Phòng. Hãy liên hệ để biết phí và thời gian giao.",
  },
  {
    q: "Dữ liệu cá nhân của tôi có an toàn không?",
    a: "Máy được xóa sạch và khôi phục cài đặt gốc trước và sau mỗi lần thuê. Bạn nên đăng xuất mọi tài khoản trước khi trả máy.",
  },
];

export type Step = { title: string; desc: string };

export const steps: Step[] = [
  {
    title: "Chọn máy",
    desc: "Chọn mẫu máy và gói thuê qua website hoặc gọi 0961.697.999.",
  },
  {
    title: "Ký hợp đồng",
    desc: "Mang CCCD bản gốc, ký hợp đồng thuê và đặt cọc theo thỏa thuận.",
  },
  {
    title: "Nhận máy",
    desc: "Kiểm tra máy cùng nhân viên, nhận kèm sạc và phụ kiện.",
  },
  {
    title: "Trả máy",
    desc: "Trả đúng hạn hoặc gia hạn. Hoàn cọc ngay sau khi kiểm tra máy.",
  },
];
