import React from "react";
import { Hero } from "@/assets";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden text-black">
      <Image
        src={Hero}
        alt="Background image of stylish people"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            FIND CLOTHES <br className="hidden sm:block" /> THAT MATCHES{" "}
            <br className="hidden sm:block" /> YOUR STYLE
          </h2>
          <p className="mt-6 text-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="mt-8">
            <div className="inline-flex">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-4xl text-white bg-black"
              >
                Shop Now
              </a>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:gap-x-8">
            <div className="flex flex-col items-center">
              <dt className="text-3xl font-bold">200+</dt>
              <dd className="mt-1 text-base">International Brands</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="text-3xl font-bold">2,000+</dt>
              <dd className="mt-1 text-base">High-Quality Products</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="text-3xl font-bold">30,000+</dt>
              <dd className="mt-1 text-base">Happy Customers</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
