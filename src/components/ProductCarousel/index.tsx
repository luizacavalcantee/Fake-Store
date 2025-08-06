"use client";

import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsCarousel() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Carregando produtos...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="w-full aspect-square rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-1/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-8">
        Erro ao carregar os produtos: {error.message}
      </div>
    );
  }

  return (
    <div className="w-full py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center uppercase px-4">
        New Arrivals
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full px-4 md:px-16 lg:px-20 border"
      >
        <CarouselContent className="-ml-6">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-6"
            >
              <div className="p-1">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex md:left-6 lg:left-10" />
        <CarouselNext className="hidden sm:flex md:right-6 lg:right-10" />
      </Carousel>
    </div>
  );
}