"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { useCart } from "@/hooks/useCart";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

type ProductCardProps = {
  product: Product;
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCart((state) => state.addToCart);
  const openCart = useCart((state) => state.openCart);

  const handleAddToCart = () => {
    addToCart(product);
    openCart();
  };

  return (
    <Dialog>
      <Card className="flex flex-col h-full shadow-none border-none gap-2">
        <DialogTrigger asChild>
          <div className="cursor-pointer flex flex-col flex-1">
            <CardContent className="flex flex-col items-center justify-center p-4 bg-zinc-100 rounded-2xl">
              <div className="w-full aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain w-full h-full"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority
                />
              </div>
            </CardContent>
            <CardHeader className="px-0 mt-2">
              <CardTitle className="truncate text-base" title={product.title}>
                {product.title}
              </CardTitle>
            </CardHeader>
          </div>
        </DialogTrigger>

        <CardFooter className="flex justify-between items-center px-0 mt-auto pt-2">
          <span className="text-base font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <Button className="rounded-full px-3" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Adicionar</span>
          </Button>
        </CardFooter>
      </Card>

      <DialogContent className="sm:max-w-3xl p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center p-6 md:p-8 bg-zinc-100">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col p-6 md:p-8">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl mb-2">{product.title}</DialogTitle>
              <DialogDescription className="text-sm md:text-base text-gray-600">
                {product.description}
              </DialogDescription>
            </DialogHeader>
            <div className="my-4 md:my-6">
              <span className="text-2xl md:text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
            </div>
            <DialogFooter className="mt-auto">
              <DialogClose asChild>
                <Button size="lg" className="w-full" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Adicionar ao Carrinho
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}