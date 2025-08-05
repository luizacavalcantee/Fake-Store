import { CalvinKlein, Gucci, Prada, Versace, Zara } from "@/assets";
import Image from "next/image";

export default function StoresSection() {
  return (
    <section className="bg-black flex itens-center justify-between py-10 px-6 md:px-8 lg:px-10">
      <Image src={Prada} alt="Prada logo" />
      <Image src={Gucci} alt="Prada logo" />
      <Image src={Versace} alt="Prada logo" />
      <Image src={CalvinKlein} alt="Prada logo" />
      <Image src={Zara} alt="Prada logo" />
    </section>
  );
}
