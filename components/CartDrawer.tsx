"use client";

import { useState } from "react";
import SafeImage from "./SafeImage";
import { formatVND } from "@/lib/products";
import type { CartItem } from "@/lib/types";

type FormState = { name: string; phone: string; address: string; note: string };

const EMPTY: FormState = { name: "", phone: "", address: "", note: "" };

export default function CartDrawer({
  open,
  items,
  total,
  onClose,
  onChangeQuantity,
  onRemove,
  onClear,
}: {
  open: boolean;
  items: CartItem[];
  total: number;
  onClose: () => void;
  onChangeQuantity: (index: number, delta: number) => void;
  onRemove: (index: number) => void;
  onClear: () => void;
}) {
  const [checkout, setCheckout] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [orderCode, setOrderCode] = useState<string | null>(null);

  const shipping = total >= 500_000 || total === 0 ? 0 : 30_000;

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Vui lòng nhập họ tên";
    if (!/^(0|\+84)\d{9,10}$/.test(form.phone.replace(/\s/g, "")))
      next.phone = "Số điện thoại không hợp lệ";
    if (form.address.trim().length < 6) next.address = "Vui lòng nhập địa chỉ";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setOrderCode(
      "ICL" + String(Date.now()).slice(-6)
    );
  };

  const closeAll = () => {
    onClose();
    window.setTimeout(() => {
      setCheckout(false);
      setOrderCode(null);
      setForm(EMPTY);
      setErrors({});
    }, 300);
  };

  return (
    <>
      <div
        onClick={closeAll}
        className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
      />

      <aside
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between bg-gradient-to-r from-brand-800 to-brand-600 px-5 py-4 text-white">
          <h2 className="text-lg font-bold">
            {orderCode
              ? "Đặt hàng thành công 🎉"
              : checkout
              ? "Thông tin đặt hàng"
              : "Giỏ hàng của bạn"}
          </h2>
          <button
            type="button"
            onClick={closeAll}
            aria-label="Đóng giỏ hàng"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
          >
            ✕
          </button>
        </div>

        {orderCode ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-4xl">
              ✅
            </div>
            <p className="mt-5 text-lg font-bold text-slate-900">
              Cảm ơn bạn đã đặt hàng!
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Mã đơn hàng: <b className="text-brand-700">{orderCode}</b>
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Nhân viên sẽ gọi điện xác nhận trong vòng 15 phút.
            </p>
            <button
              type="button"
              onClick={closeAll}
              className="mt-7 rounded-full bg-brand-700 px-8 py-3 text-sm font-bold text-white transition hover:bg-brand-800"
            >
              Tiếp tục mua sắm
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-4xl">
              🛒
            </div>
            <p className="mt-5 font-bold text-slate-700">Giỏ hàng đang trống</p>
            <p className="mt-1 text-sm text-slate-500">
              Thêm sản phẩm bạn yêu thích để tiến hành đặt hàng.
            </p>
            <button
              type="button"
              onClick={closeAll}
              className="mt-6 rounded-full border border-brand-200 px-7 py-3 text-sm font-bold text-brand-700 transition hover:bg-brand-50"
            >
              Xem sản phẩm
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {!checkout ? (
                <ul className="space-y-3">
                  {items.map((item, i) => (
                    <li
                      key={`${item.productId}-${item.color}-${item.storage}`}
                      className="flex gap-3 rounded-2xl border border-brand-100 bg-white p-3"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-brand-50">
                        <SafeImage
                          src={item.image}
                          alt={item.name}
                          fallbackLabel={item.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-slate-900">
                          {item.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {item.storage} · {item.color}
                        </p>
                        <p className="mt-1 text-sm font-extrabold text-brand-700">
                          {formatVND(item.unitPrice)}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            aria-label="Giảm"
                            onClick={() => onChangeQuantity(i, -1)}
                            className="h-7 w-7 rounded-full border border-brand-200 font-bold text-brand-700 transition hover:bg-brand-50"
                          >
                            −
                          </button>
                          <span className="min-w-6 text-center text-sm font-bold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Tăng"
                            onClick={() => onChangeQuantity(i, 1)}
                            className="h-7 w-7 rounded-full border border-brand-200 font-bold text-brand-700 transition hover:bg-brand-50"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => onRemove(i)}
                            className="ml-auto text-xs font-semibold text-red-500 transition hover:text-red-700"
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <form id="order-form" onSubmit={submit} className="space-y-4">
                  <Field label="Họ và tên" error={errors.name}>
                    <input
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Nguyễn Văn A"
                      className={inputClass(!!errors.name)}
                    />
                  </Field>
                  <Field label="Số điện thoại" error={errors.phone}>
                    <input
                      value={form.phone}
                      onChange={set("phone")}
                      inputMode="tel"
                      placeholder="0961 697 999"
                      className={inputClass(!!errors.phone)}
                    />
                  </Field>
                  <Field label="Địa chỉ nhận hàng" error={errors.address}>
                    <input
                      value={form.address}
                      onChange={set("address")}
                      placeholder="Số nhà, đường, quận/huyện, tỉnh/thành"
                      className={inputClass(!!errors.address)}
                    />
                  </Field>
                  <Field label="Ghi chú (không bắt buộc)">
                    <textarea
                      value={form.note}
                      onChange={set("note")}
                      rows={3}
                      placeholder="Giao giờ hành chính, gọi trước khi giao..."
                      className={inputClass(false)}
                    />
                  </Field>

                  <div className="rounded-2xl bg-brand-50 p-4 text-sm text-slate-600">
                    <p className="font-bold text-brand-800">Phương thức thanh toán</p>
                    <label className="mt-2 flex items-center gap-2">
                      <input type="radio" name="pay" defaultChecked className="accent-brand-700" />
                      Thanh toán khi nhận hàng (COD)
                    </label>
                    <label className="mt-1.5 flex items-center gap-2">
                      <input type="radio" name="pay" className="accent-brand-700" />
                      Chuyển khoản ngân hàng
                    </label>
                  </div>
                </form>
              )}
            </div>

            <div className="border-t border-brand-100 bg-white px-4 py-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Tạm tính</span>
                <span>{formatVND(total)}</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between text-sm text-slate-600">
                <span>Phí vận chuyển</span>
                <span className={shipping === 0 ? "font-bold text-brand-700" : ""}>
                  {shipping === 0 ? "Miễn phí" : formatVND(shipping)}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-dashed border-slate-200 pt-2.5">
                <span className="font-bold text-slate-900">Tổng cộng</span>
                <span className="text-xl font-extrabold text-brand-700">
                  {formatVND(total + shipping)}
                </span>
              </div>

              <div className="mt-4 flex gap-3">
                {!checkout ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setCheckout(true)}
                      className="flex-1 rounded-full bg-gradient-to-r from-brand-700 to-sky-500 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                    >
                      Đặt hàng ngay
                    </button>
                    <button
                      type="button"
                      onClick={onClear}
                      className="rounded-full border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-500 transition hover:bg-slate-50"
                    >
                      Xóa hết
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setCheckout(false)}
                      className="rounded-full border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
                    >
                      Quay lại
                    </button>
                    <button
                      type="submit"
                      form="order-form"
                      className="flex-1 rounded-full bg-gradient-to-r from-brand-700 to-sky-500 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                    >
                      Xác nhận đặt hàng
                    </button>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold text-slate-700">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-semibold text-red-500">{error}</span>}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 ${
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
      : "border-slate-200 focus:border-brand-500 focus:ring-brand-200"
  }`;
}
