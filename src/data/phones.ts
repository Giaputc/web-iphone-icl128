export type Phone = {
  name: string;
  brand: "iPhone" | "Samsung" | "Khác";
  storage: string;
  price: string;
  available: boolean;
  colors: [string, string];
  /** Đường dẫn ảnh thật trong /public/image_phone — nếu bỏ trống sẽ dùng mockup CSS. */
  image?: string;
};

export const phones: Phone[] = [
  { name: "Samsung Galaxy S24 Ultra", brand: "Samsung", storage: "256GB", price: "240K", available: true, colors: ["#6b6f77", "#25272b"], image: "/image_phone/Samsung-Galaxy-S24-Ultra.jpg" },
  { name: "Samsung Galaxy A55", brand: "Samsung", storage: "128GB", price: "100K", available: true, colors: ["#3aa0a8", "#0f4a52"], image: "/image_phone/Samsung-Galaxy-A55.jpg" },
  { name: "Xiaomi Redmi Note 13", brand: "Khác", storage: "128GB", price: "80K", available: true, colors: ["#e0a43a", "#7a4a07"], image: "/image_phone/Xiaomi-Redmi-Note-13.jpg" },
  { name: "OPPO Reno11", brand: "Khác", storage: "256GB", price: "110K", available: true, colors: ["#3ec28f", "#0e5a40"], image: "/image_phone/OPPO-Reno11.jpg" },
];

export const brandFilters = ["all", "Samsung", "Khác"] as const;

export const parsePrice = (p: string) => parseInt(p, 10);

/** Đánh giá sao "ảo" theo index — giữ nguyên công thức gốc để đồng bộ hiển thị. */
export const ratingFor = (i: number) => (4.6 + ((i * 3) % 5) / 10).toFixed(1);
export const rentalsFor = (i: number) => 40 + i * 17;
