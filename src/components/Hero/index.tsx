import React from "react";
import { Hero } from "@/assets";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative py-24 overflow-hidden text-black">
      <Image
        src={Hero}
        alt="Background image of stylish people"
        fill
        sizes="100vw" 
        className="w-full h-fit -z-10"
        priority
        quality={100}
      />

      <div className="relative pl-6 md:pl-8 lg:pl-10 w-1/2">
        <h2 className="text-6xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          FIND CLOTHES <br className="hidden sm:block" /> THAT MATCHES{" "}
          <br className="hidden sm:block" /> YOUR STYLE
        </h2>
        <p className="mt-6 text-base text-zinc-500">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <div className="mt-6">
          <div className="inline-flex">
            <a
              href="#"
              className="inline-flex items-center justify-center px-16 py-3 border border-transparent text-base rounded-4xl text-white bg-black"
            >
              Shop Now
            </a>
          </div>
        </div>
        <dl className="mt-16 flex gap-8">
          <div className="flex flex-col items-center">
            <dt className="text-3xl font-bold">200+</dt>
            <dd className="mt-1 text-base">International Brands</dd>
          </div>
          <div className="border-r border-gray-300 w-1"></div>
          <div className="flex flex-col items-center">
            <dt className="text-3xl font-bold">2,000+</dt>
            <dd className="mt-1 text-base">High-Quality Products</dd>
          </div>
          <div className="border-r border-gray-300 w-1"></div>
          <div className="flex flex-col items-center">
            <dt className="text-3xl font-bold">30,000+</dt>
            <dd className="mt-1 text-base">Happy Customers</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
