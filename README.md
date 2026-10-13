# iCL128 — Web bán iPhone

Trang web bán điện thoại iPhone **1 trang duy nhất**, tông màu xanh dương.

Thông tin công ty (lấy từ logo/biển hiệu trong `public/logo.png`):

- **CÔNG TY TNHH ICL 128** — tên tiếng Anh **ICL 128 COMPANY LIMITED** — viết
  tắt **ICL 128 CO.,LTD** — MST `0202369720`
- Trụ sở chính: Số 11B Đường Trần Tất Văn, Xã An Lão, Thành phố Hải Phòng, Việt Nam
- Điện thoại: `0961.697.999`

Toàn bộ thông tin này tập trung ở **`lib/shop.ts`** — đổi 1 chỗ là cập nhật hết Header, Footer, Liên hệ, metadata SEO.

## Công nghệ

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Dữ liệu sản phẩm hardcode trong `lib/products.ts`
- Giỏ hàng lưu trong `localStorage` (không cần backend)

## Chạy dự án

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # build production
npm run start    # chạy bản production
npx tsc --noEmit # kiểm tra type
```

## Cấu trúc

```
app/
  layout.tsx      # metadata SEO, ngôn ngữ vi
  page.tsx        # render HomePage
  globals.css     # theme xanh dương (brand-*), scrollbar xanh
components/
  HomePage.tsx    # state chung: giỏ hàng + modal chi tiết
  Header.tsx      # nav anchor, hotline, nút giỏ hàng (badge)
  Hero.tsx        # banner + 4 cam kết dịch vụ
  ProductSection.tsx # tìm kiếm, lọc theo dòng/giá, sắp xếp
  ProductCard.tsx # card sản phẩm
  ProductModal.tsx# chi tiết SP: chọn màu + bộ nhớ → thêm giỏ
  CartDrawer.tsx  # giỏ hàng + form đặt hàng + mã đơn
  AboutSection.tsx
  ContactSection.tsx # hotline, Zalo, Messenger, form, bản đồ
  Footer.tsx
hooks/useCart.ts  # localStorage cart
lib/
  types.ts        # Product, CartItem...
  shop.ts         # thông tin công ty (tên, MST, SĐT, địa chỉ, logo)
  products.ts     # 9 sản phẩm iPhone 12 → 17
```

## Tính năng

- Danh sách 9 mẫu iPhone (12 → 17) với giá khuyến mãi/giá gốc
- Tìm kiếm theo tên/chip/mô tả, lọc theo dòng, lọc theo khoảng giá, sắp xếp giá
- Modal chi tiết: thông số, chọn màu & bộ nhớ (giá tăng theo dung lượng)
- Giỏ hàng: tăng/giảm/xóa, phí ship miễn phí từ 500k, tổng tiền
- Form đặt hàng có validate (tên/SĐT/địa chỉ) → hiện mã đơn
- Trang giới thiệu, liên hệ (Zalo/Messenger/phone/map), bản đồ nhúng
- Responsive mobile → desktop, tông xanh dương đồng bộ

## Ghi chú

- Chưa commit: chạy `git add -A && git commit` sau khi bạn tự review.
- Logo (biển hiệu công ty): `public/logo.png` (1143×683, thật ra là dữ liệu JPEG —
  trình duyệt/Next vẫn hiển thị bình thường), ảnh SP: `public/images/*.jpg`,
  icon: `public/icons/*.png`
