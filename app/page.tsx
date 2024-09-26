"use client";
import dynamic from "next/dynamic";

const PrincipalHome = dynamic(() => import("@/components/home/PrincipalHome"));
const PorqueNosotros = dynamic(() => import("@/components/home/PorqueNosotros"));
const Cards = dynamic(() => import("@/components/home/Cards"));
const SwiperCarrouselDiplomados = dynamic(() => import("@/components/home/SwiperDiplomados"));
const CarouselCursosDestacados = dynamic(() => import("@/components/home/SwiperCursosDestacados"));
const Counter = dynamic(() => import("@/components/home/Counter"));
const Information = dynamic(() => import("@/components/home/Information_middle"));
const NuestrosDiplomados = dynamic(() => import("@/components/home/NuestrosDiplomados"));
const ContactForm = dynamic(() => import("@/components/home/ContactForm"));
const ScrollToBotButton = dynamic(() => import("@/components/home/bounceDown"));

export default function Main() {
  return (
    <main className="relative z-0 overflow-hidden w-full"> {/* Añadido overflow-hidden */}
      {/* Botón para cambiar de tema */}
      <div className="w-full"> {/* Añadido w-full */}
        <PrincipalHome />
      </div>
      <div className="w-full"> {/* Añadido w-full */}
        <Cards />
      </div>
      <div className="mx-auto max-w-screen-xl w-full"> {/* Añadido w-full */}
        <NuestrosDiplomados />
      </div>

      {/* Gradientes optimizados */}
      <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-500/25 from-customPurple300/45 to-transparent right-52 top-[25%] hidden lg:block"></div> {/* Condicional para lg */}
      <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-950  from-customPurple800 to-transparent right-[5%] top-[1%] block md:hidden"></div>
      <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-950 from-violet-200 to-transparent left-52 top-[25%] hidden lg:block"></div>

      <div className="rounded-lg mx-auto max-w-screen-xl w-full"> {/* Añadido w-full */}
        <SwiperCarrouselDiplomados />
      </div>
      
      <div className="w-full"> {/* Añadido w-full */}
        <Information />
      </div>

      {/* Gradientes adicionales optimizados */}
      <div className="absolute w-[500px] h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-950 from-customPurple800/35 to-transparent top-[40%] right-24 transform -translate-x-1/2 hidden lg:block"></div>
      <div className="absolute w-[500px] h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-800 from-customPurple300/25 to-transparent top-[60%] left-1/2 transform -translate-x-1/2 hidden lg:block"></div>
      <div className="absolute w-[500px] h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-950 from-violet-100 to-transparent top-[60%] left-[40%] transform -translate-x-1/2 hidden lg:block"></div>
      
      <div className="w-full"> {/* Añadido w-full */}
        <Counter />
      </div>

      <div className="mx-auto max-w-screen-xl w-full"> {/* Añadido w-full */}
        <CarouselCursosDestacados />
      </div>

      <div className="w-full"> {/* Añadido w-full */}
        <ContactForm />
      </div>

      <div className="w-full"> {/* Añadido w-full */}
        <ScrollToBotButton />
      </div>
    </main>
  );
}
