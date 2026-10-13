export type ColorOption = {
  name: string;
  hex: string;
};

export type StorageOption = {
  label: string;
  priceOffset: number; // so với giá gốc
};

export type Product = {
  id: string;
  name: string;
  line: "12" | "13" | "14" | "15" | "16" | "17";
  image: string;
  price: number; // giá khuyến mãi (VND)
  originalPrice: number; // giá gạch ngang
  screen: string;
  chip: string;
  camera: string;
  battery: string;
  description: string;
  colors: ColorOption[];
  storages: StorageOption[];
  hot?: boolean;
};

export type CartItem = {
  productId: string;
  name: string;
  image: string;
  color: string;
  storage: string;
  unitPrice: number;
  quantity: number;
};
