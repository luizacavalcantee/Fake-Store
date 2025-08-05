"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Logo } from "@/assets";
import { useCart } from "@/hooks/useCart";

export default function Header() {
  const totalItems = useCart((state) => state.totalItems);
  const openCart = useCart((state) => state.openCart);

  return (
    <header className="bg-white shadow-sm px-6 md:px-8 lg:px-10 flex h-16 items-center justify-between">
      <div className="flex items-center gap-8">
        <a href="#" className="">
          <Image src={Logo} alt="Logo da loja" />
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={openCart}
          className="p-2 text-gray-700 hover:text-black transition-colors relative"
        >
          <ShoppingCart size={24} />

          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}