"use client";

import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import ProductSection from "./ProductSection";
import ProductModal from "./ProductModal";
import CartDrawer from "./CartDrawer";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import { useCart } from "@/hooks/useCart";
import { products } from "@/lib/products";
import { shop } from "@/lib/shop";
import type { Product } from "@/lib/types";

export default function HomePage() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const cart = useCart();

  const addToCart = (product: Product, color: string, storage: string, unitPrice: number) => {
    cart.addItem({
      productId: product.id,
      name: product.name,
      image: product.image,
      color,
      storage,
      unitPrice,
      quantity: 1,
    });
  };

  const quickAdd = (product: Product) => {
    addToCart(
      product,
      product.colors[0]?.name ?? "Mặc định",
      product.storages[0]?.label ?? "Mặc định",
      product.price
    );
    setCartOpen(true);
  };

  return (
    <>
      <Header count={cart.count} onOpenCart={() => setCartOpen(true)} />

      <main>
        <Hero />
        <ProductSection
          products={products}
          onSelect={setSelected}
          onAdd={quickAdd}
        />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      <ProductModal
        product={selected}
        onClose={() => setSelected(null)}
        onAdd={(p, color, storage, unitPrice) => {
          addToCart(p, color, storage, unitPrice);
        }}
      />

      <CartDrawer
        open={cartOpen}
        items={cart.items}
        total={cart.total}
        onClose={() => setCartOpen(false)}
        onChangeQuantity={cart.changeQuantity}
        onRemove={cart.removeItem}
        onClear={cart.clear}
      />

      {/* Nút gọi nhanh */}
      <a
        href={`tel:${shop.phone}`}
        aria-label={`Gọi hotline ${shop.phoneDisplay}`}
        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-2xl text-white shadow-xl transition hover:bg-brand-800 hover:scale-105"
      >
        📞
      </a>
    </>
  );
}
