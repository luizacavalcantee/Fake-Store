"use client";

import { useCart } from "@/hooks/useCart";
import { ShoppingCart, X } from "lucide-react";
import React from "react";
import CartItem from "../CartIem";

const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(price);
};

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
    const { items, totalPrice, totalItems } = useCart();

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
            />

            <aside
                className={`fixed top-0 right-0 flex h-full w-full max-w-md flex-col bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <ShoppingCart size={20}/>
                        Seu Carrinho ({totalItems})
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 text-gray-500 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {items.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center text-center text-zinc-400 gap-4 p-4">
                        <ShoppingCart size={80} strokeWidth={1.5} />
                        <p className="text-zinc-500 text-lg">Seu carrinho está vazio.</p>
                        <p className="text-sm text-zinc-400">Adicione produtos para vê-los aqui!</p>
                    </div>
                ) : (
                    <div className="flex-1 overflow-y-auto px-4 divide-y divide-gray-200">
                        {items.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                )}

                {items.length > 0 && (
                    <div className="p-4 border-t bg-white">
                        <div className="flex justify-between font-bold text-lg mb-4">
                            <span>Subtotal</span>
                            <span>{formatPrice(totalPrice)}</span>
                        </div>
                    </div>
                )}
            </aside>
        </>
    );
}
