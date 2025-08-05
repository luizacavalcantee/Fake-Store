import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import { Logo } from "@/assets";

export default function Header() {
  return (
    <header className="bg-white shadow-sm px-6 md:px-20 lg:px-24 flex h-16 items-center justify-between">
      <div className="flex items-center gap-8">
        <a href="#" className="">
          <Image src={Logo} alt="Logo da loja" />
        </a>
      </div>

      {/* Barra de pesquisa 
      <div className="hidden md:flex flex-1 max-w-md mx-4">
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
        type="text"
        placeholder="Search for products..."
        className="block w-full rounded-full border-0 bg-gray-100 py-2.5 pl-10 pr-4 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm"
          />
        </div>
      </div>
      */}

      <div className="flex items-center gap-4">
        <a
          href="#"
          className="p-2 text-gray-700 hover:text-black transition-colors"
        >
          <ShoppingCart size={24} />
        </a>
      </div>
    </header>
  );
}
