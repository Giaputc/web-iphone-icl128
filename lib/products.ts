import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "iphone-17",
    name: "iPhone 17",
    line: "17",
    image: "/images/iphone-17.jpg",
    price: 22_990_000,
    originalPrice: 24_990_000,
    screen: '6.3" Super Retina XDR, ProMotion 120Hz',
    chip: "A19 Bionic",
    camera: "Chính 48MP + Ultra Wide 18MP",
    battery: "Pin đến 30 giờ xem video",
    description:
      "iPhone 17 với chip A19 thế hệ mới, màn hình ProMotion 120Hz và hệ thống camera nâng cấp toàn diện. Thiết kế khung nhôm cao cấp, chống nước IP68.",
    colors: [
      { name: "Xanh dương", hex: "#2f6fed" },
      { name: "Trắng", hex: "#f5f5f7" },
      { name: "Đen", hex: "#1d1d1f" },
      { name: "Hồng", hex: "#f7c9d3" },
    ],
    storages: [
      { label: "256GB", priceOffset: 0 },
      { label: "512GB", priceOffset: 3_000_000 },
    ],
    hot: true,
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    line: "16",
    image: "/images/iphone-16.jpg",
    price: 17_490_000,
    originalPrice: 19_990_000,
    screen: '6.1" Super Retina XDR, 60Hz',
    chip: "A18 Bionic",
    camera: "Chính 48MP + Ultra Wide 12MP",
    battery: "Pin đến 22 giờ xem video",
    description:
      "iPhone 16 sở hữu nút Camera Control mới, chip A18 mạnh mẽ và thiết kế bo góc mềm mại. Hỗ trợ Apple Intelligence.",
    colors: [
      { name: "Xanh dương", hex: "#a7c7e7" },
      { name: "Trắng", hex: "#f5f5f7" },
      { name: "Đen", hex: "#1d1d1f" },
      { name: "Xanh lá", hex: "#c9e4c5" },
    ],
    storages: [
      { label: "128GB", priceOffset: 0 },
      { label: "256GB", priceOffset: 2_000_000 },
      { label: "512GB", priceOffset: 4_500_000 },
    ],
    hot: true,
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    line: "15",
    image: "/images/iphone-15-pro-max.jpg",
    price: 19_990_000,
    originalPrice: 24_990_000,
    screen: '6.7" Super Retina XDR, ProMotion 120Hz',
    chip: "A17 Pro",
    camera: "Chính 48MP + Tele 5x (120mm)",
    battery: "Pin đến 29 giờ xem video",
    description:
      "Khung titan bền nhẹ, nút Action linh hoạt, camera tele 5x chụp xa vượt trội. Cổng USB-C tốc độ cao.",
    colors: [
      { name: "Xanh dương", hex: "#3a4f6a" },
      { name: "Titan tự nhiên", hex: "#bfb8ad" },
      { name: "Đen", hex: "#3b3b3d" },
      { name: "Trắng", hex: "#e8e8ed" },
    ],
    storages: [
      { label: "256GB", priceOffset: 0 },
      { label: "512GB", priceOffset: 3_500_000 },
    ],
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    line: "15",
    image: "/images/iphone-15-pro.jpg",
    price: 16_490_000,
    originalPrice: 19_990_000,
    screen: '6.1" Super Retina XDR, ProMotion 120Hz',
    chip: "A17 Pro",
    camera: "Chính 48MP + Tele 3x (77mm)",
    battery: "Pin đến 23 giờ xem video",
    description:
      "Máy nhỏ gọn mạnh mẽ với khung titan, chip A17 Pro hỗ trợ chơi game console ngay trên iPhone.",
    colors: [
      { name: "Xanh dương", hex: "#3a4f6a" },
      { name: "Titan tự nhiên", hex: "#bfb8ad" },
      { name: "Đen", hex: "#3b3b3d" },
      { name: "Trắng", hex: "#e8e8ed" },
    ],
    storages: [
      { label: "128GB", priceOffset: 0 },
      { label: "256GB", priceOffset: 2_500_000 },
      { label: "512GB", priceOffset: 5_000_000 },
    ],
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    line: "15",
    image: "/images/iphone-15.jpg",
    price: 13_990_000,
    originalPrice: 16_990_000,
    screen: '6.1" Super Retina XDR, 60Hz',
    chip: "A16 Bionic",
    camera: "Chính 48MP + Ultra Wide 12MP",
    battery: "Pin đến 20 giờ xem video",
    description:
      "Dynamic Island, camera 48MP zoom 2x và cổng USB-C. Giá dễ tiếp cận nhất trong dòng iPhone 15.",
    colors: [
      { name: "Xanh dương", hex: "#ccd9e8" },
      { name: "Hồng", hex: "#f4d0d4" },
      { name: "Vàng", hex: "#f3e2c7" },
      { name: "Đen", hex: "#35393b" },
    ],
    storages: [
      { label: "128GB", priceOffset: 0 },
      { label: "256GB", priceOffset: 2_000_000 },
    ],
  },
  {
    id: "iphone-14-pro-max",
    name: "iPhone 14 Pro Max",
    line: "14",
    image: "/images/iphone-14-pro-max.jpg",
    price: 14_990_000,
    originalPrice: 18_990_000,
    screen: '6.7" Super Retina XDR, ProMotion 120Hz',
    chip: "A16 Bionic",
    camera: "Chính 48MP + Tele 3x",
    battery: "Pin đến 29 giờ xem video",
    description:
      "Dynamic Island, Always-On Display và camera 48MP. Màn hình lớn pin trâu, phù hợp giải trí.",
    colors: [
      { name: "Xanh dương", hex: "#2c3e50" },
      { name: "Tím", hex: "#d3c6e0" },
      { name: "Vàng", hex: "#f1e3cd" },
      { name: "Đen", hex: "#3b3b3d" },
    ],
    storages: [
      { label: "128GB", priceOffset: 0 },
      { label: "256GB", priceOffset: 2_000_000 },
    ],
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    line: "14",
    image: "/images/iphone-14.jpg",
    price: 10_490_000,
    originalPrice: 12_990_000,
    screen: '6.1" Super Retina XDR, 60Hz',
    chip: "A15 Bionic",
    camera: "Chính 12MP + Ultra Wide 12MP",
    battery: "Pin đến 20 giờ xem video",
    description:
      "Ổn định, bền bỉ, chống rung cảm biến. Lựa chọn phổ thông cực kỳ hợp lý.",
    colors: [
      { name: "Xanh dương", hex: "#a7c1d9" },
      { name: "Đỏ", hex: "#e14b4b" },
      { name: "Trắng", hex: "#f5f5f7" },
      { name: "Đen", hex: "#35393b" },
    ],
    storages: [
      { label: "128GB", priceOffset: 0 },
      { label: "256GB", priceOffset: 1_500_000 },
    ],
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    line: "13",
    image: "/images/iphone-13.jpg",
    price: 8_490_000,
    originalPrice: 10_990_000,
    screen: '6.1" Super Retina XDR, 60Hz',
    chip: "A15 Bionic",
    camera: "Chính 12MP + Ultra Wide 12MP",
    battery: "Pin đến 19 giờ xem video",
    description:
      "Thiết kế chéo camera đặc trưng, hiệu năng còn rất mạnh sau nhiều năm. Mua cũ mới 99% giá cực tốt.",
    colors: [
      { name: "Xanh dương", hex: "#4a6fa5" },
      { name: "Hồng", hex: "#f6d3d4" },
      { name: "Đen", hex: "#35393b" },
      { name: "Trắng", hex: "#f5f5f7" },
    ],
    storages: [
      { label: "128GB", priceOffset: 0 },
      { label: "256GB", priceOffset: 1_200_000 },
    ],
  },
  {
    id: "iphone-12",
    name: "iPhone 12",
    line: "12",
    image: "/images/iphone-12.jpg",
    price: 5_990_000,
    originalPrice: 7_990_000,
    screen: '6.1" Super Retina XDR, 60Hz',
    chip: "A14 Bionic",
    camera: "Chính 12MP + Ultra Wide 12MP",
    battery: "Pin đến 17 giờ xem video",
    description:
      "Mức giá thấp nhất để trải nghiệm màn hình OLED và 5G. Phù hợp làm máy phụ hoặc cho người mới.",
    colors: [
      { name: "Xanh dương", hex: "#4b7bd1" },
      { name: "Tím", hex: "#d8cbe8" },
      { name: "Trắng", hex: "#f5f5f7" },
      { name: "Đen", hex: "#35393b" },
    ],
    storages: [
      { label: "64GB", priceOffset: 0 },
      { label: "128GB", priceOffset: 900_000 },
    ],
  },
];

export const lines = ["12", "13", "14", "15", "16", "17"] as const;

export const priceRanges = [
  { id: "all", label: "Tất cả giá", min: 0, max: Infinity },
  { id: "under10", label: "Dưới 10 triệu", min: 0, max: 10_000_000 },
  { id: "10to15", label: "10 - 15 triệu", min: 10_000_000, max: 15_000_000 },
  { id: "15to20", label: "15 - 20 triệu", min: 15_000_000, max: 20_000_000 },
  { id: "over20", label: "Trên 20 triệu", min: 20_000_000, max: Infinity },
];

export function formatVND(value: number): string {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}
