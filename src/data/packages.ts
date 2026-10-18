export type Pkg = {
  name: string;
  price: string;
  unit: string;
  cta: string;
  features: string[];
  hot?: boolean;
  tag?: string;
};

export const packages: Pkg[] = [
  {
    name: "Gói ngày",
    price: "từ 80K",
    unit: " / ngày",
    cta: "Chọn gói ngày",
    features: [
      "Thuê từ 1 ngày",
      "Phù hợp đi công tác, du lịch",
      "Tặng sạc và ốp lưng",
      "Đặt cọc linh hoạt",
    ],
  },
  {
    name: "Gói tuần",
    price: "từ 450K",
    unit: " / tuần",
    cta: "Chọn gói tuần",
    hot: true,
    tag: "Được thuê nhiều nhất",
    features: [
      "Rẻ hơn thuê lẻ từng ngày",
      "Hỗ trợ cài đặt, chuyển dữ liệu",
      "Đổi máy miễn phí nếu lỗi",
      "Gia hạn bằng một cuộc gọi",
    ],
  },
  {
    name: "Gói tháng",
    price: "từ 1.200K",
    unit: " / tháng",
    cta: "Chọn gói tháng",
    features: [
      "Dùng thay máy chính dài hạn",
      "Bảo dưỡng định kỳ",
      "Máy dự phòng khi sửa chữa",
      "Ưu đãi khi thuê nhiều tháng",
    ],
  },
  {
    name: "Gói doanh nghiệp",
    price: "Báo giá",
    unit: " theo số lượng",
    cta: "Nhận báo giá",
    features: [
      "Thuê từ 5 máy trở lên",
      "Phục vụ sự kiện, hội nghị",
      "Xuất hóa đơn công ty",
      "Một đầu mối hỗ trợ riêng",
    ],
  },
];
