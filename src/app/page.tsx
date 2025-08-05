import HeroSection from "@/components/Hero";
import ProductsCarousel from "@/components/ProductCarousel";

export default async function Home() {
  return (
    <div>
      <HeroSection/>
      <ProductsCarousel/>
    </div>
  );
}