"use client";
import dynamic from "next/dynamic";
const PrincipalHome = dynamic(() => import("@/components/home/PrincipalHome"));
const PorqueNosotros = dynamic(
  () => import("@/components/home/PorqueNosotros")
);
const SwiperCarrouselDiplomados = dynamic(
  () => import("@/components/home/SwiperDiplomados")
);
const CarouselCursosDestacados = dynamic(
  () => import("@/components/home/SwiperCursosDestacados")
);
const TestimoniosFb = dynamic(() => import("@/components/home/TestimoniosFb"));
const QuienesSomos = dynamic(() => import("@/components/home/QuienesSomos"));
const NuestrosDiplomados = dynamic(
  () => import("@/components/home/NuestrosDiplomados")
);
const ContactForm = dynamic(() => import("@/components/home/ContactForm"));
const ScrollToBotButton = dynamic(() => import("@/components/home/bounceDown"));
const LogosCarrousel = dynamic(
  () => import("@/components/home/logosCarrousel")
);


export default function Main() {


  return (
    <main className="relative z-0">
      {/* Botón para cambiar de tema */}
      <div className="">
        <PrincipalHome />
      </div>
      <div className="">
        <QuienesSomos />
      </div>
      <div className="">
        <LogosCarrousel />
      </div>
      <div className="mx-auto max-w-screen-xl ">
        <NuestrosDiplomados />
      </div>
      <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial dark:from-teal-950 from-blue-200 to-transparent right-52 top-[25%] hidden md:block"></div>
      <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-950  from-blue-200 to-transparent right-[5%] top-[1%] block md:hidden"></div>
      <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-950 from-violet-200 to-transparent left-52 top-[25%] hidden md:block"></div>

      <div className=" rounded-lg  mx-auto max-w-screen-xl ">
        <SwiperCarrouselDiplomados />
      </div>
      <div className=" absolute w-[500px] h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-950 from-blue-100 to-transparent top-[40%] right-24 transform -translate-x-1/2 hidden md:block"></div>
      <div className="absolute w-[500px] h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-950 from-blue-100 to-transparent top-[60%] left-1/2 transform -translate-x-1/2 hidden md:block"></div>
      <div className="absolute w-[500px] h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-950 from-violet-100 to-transparent top-[60%] left-[40%] transform -translate-x-1/2 hidden md:block"></div>
      <div className="px-4 mx-auto rounded-lg p-4 md:p-2 ">
        <PorqueNosotros />
      </div>
      <div className=" mx-auto max-w-screen-xl ">
        <CarouselCursosDestacados />
      </div>
      <div className=" mx-auto max-w-screen-xl mt-6 ">
        <TestimoniosFb />
      </div>

      <div className=" ">
        <ContactForm />
      </div>

      <div className="">
        <ScrollToBotButton />
      </div>
    </main>
  );
}
