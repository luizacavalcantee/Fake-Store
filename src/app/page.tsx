"use client";

import CartSidebar from "@/components/CartSidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ProductsCarousel from "@/components/ProductCarousel";
import StoresSection from "@/components/StoresSection";
import { useCart } from "@/hooks/useCart";

export default function Home() {
  const isCartOpen = useCart((state) => state.isCartOpen);
  const closeCart = useCart((state) => state.closeCart);
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <HeroSection />
        <StoresSection />
        <ProductsCarousel />
        <Footer />
      </div>
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </div>
  );
}
