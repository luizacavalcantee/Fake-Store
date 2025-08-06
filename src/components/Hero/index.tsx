import React from "react";
import { Hero } from "@/assets";
import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="relative py-12 md:py-20 lg:py-24 overflow-hidden text-black">
      <Image
        src={Hero}
        alt="Background image of stylish people"
        fill
        sizes="100vw"
        className="w-full sm:h-fit h-[calc(100vh_-_150px)] object-cover object-left md:object-[60%_50%] -z-10"
        priority
        quality={100}
      />

      <div className="relative pl-6 pr-6 md:pr-0 md:pl-8 lg:pl-10 w-full md:w-1/2">
        <h2 className="font-black tracking-tight text-4xl md:text-5xl lg:text-6xl">
          FIND CLOTHES <br className="hidden sm:block" /> THAT MATCHES{" "}
          <br className="hidden sm:block" /> YOUR STYLE
        </h2>
        <p className="mt-6 text-base text-zinc-500">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button className="w-full inline-flex items-center justify-center px-16 py-5 border border-transparent text-base font-normal rounded-4xl mt-6 md:w-fit">
          Shop Now
        </Button>
        <dl className="mt-16 grid grid-cols-2 place-items-center gap-y-8 md:flex md:items-center md:gap-8">
          <div className="flex flex-col items-center border-r border-gray-300 pr-6 md:border-r-0 md:pr-0">
            <dt className="text-3xl font-bold">200+</dt>
            <dd className="mt-1 text-base text-center">International Brands</dd>
          </div>

          <div className="hidden border-r border-gray-300 md:block h-12"></div>

          <div className="flex flex-col items-center pl-6 md:pl-0">
            <dt className="text-3xl font-bold">2,000+</dt>
            <dd className="mt-1 text-base text-center">High-Quality Products</dd>
          </div>

          <div className="hidden border-r border-gray-300 md:block h-12"></div>

          <div className="col-span-2 flex flex-col items-center">
            <dt className="text-3xl font-bold">30,000+</dt>
            <dd className="mt-1 text-base text-center">Happy Customers</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
