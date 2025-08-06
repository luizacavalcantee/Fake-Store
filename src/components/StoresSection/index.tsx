import { CalvinKlein, Gucci, Prada, Versace, Zara } from "@/assets";
import Image from "next/image";

export default function StoresSection() {
  return (
    <section className="bg-black py-10 px-6 md:px-8 lg:px-10">
      <div className="container mx-auto grid grid-cols-6 items-center justify-items-center gap-y-8 md:flex md:flex-nowrap md:justify-between">
        <div className="col-span-2">
          <Image
            src={Versace}
            alt="Logo da Versace"
            className="h-6 w-auto md:h-8"
          />
        </div>
        <div className="col-span-2">
          <Image
            src={Zara}
            alt="Logo da Zara"
            className="h-6 w-auto md:h-8"
          />
        </div>
        <div className="col-span-2">
          <Image
            src={Gucci}
            alt="Logo da Gucci"
            className="h-6 w-auto md:h-8"
          />
        </div>

        <div className="col-start-2 col-span-2">
          <Image
            src={Prada}
            alt="Logo da Prada"
            className="h-6 w-auto md:h-8"
          />
        </div>
        <div className="col-span-2">
          <Image
            src={CalvinKlein}
            alt="Logo da Calvin Klein"
            className="h-6 w-auto md:h-8"
          />
        </div>
      </div>
    </section>
  );
}