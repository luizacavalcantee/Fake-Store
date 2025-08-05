"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";

type CartItemProps = {
    item: {
        id: number;
        title: string;
        price: number;
        image: string;
        quantity: number;
    };
};

const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(price);
};

export default function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="flex items-center gap-4 py-4">
            <div className="relative h-20 w-20 flex-shrink-0 rounded-md border bg-slate-50">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="h-full w-full object-contain"
                />
            </div>
            <div className="flex flex-col min-w-0">
                <p className="font-medium text-gray-800 truncate">{item.title}</p>
                <span className="text-sm font-semibold text-gray-900">{formatPrice(item.price)}</span>
                <div className="mt-2 flex items-center">
                    <div className="flex items-center rounded-md border">
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
                            disabled={item.quantity <= 1}
                        >
                            <Minus size={14} />
                        </button>
                        <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                        >
                            <Plus size={14} />
                        </button>
                    </div>
                </div>
            </div>
            <button
                onClick={() => removeFromCart(item.id)}
                className="ml-auto p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                title="Remover item"
            >
                <Trash2 size={18} />
            </button>
        </div>
    );
}
