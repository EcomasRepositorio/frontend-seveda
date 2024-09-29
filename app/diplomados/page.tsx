import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";
import styles from "@/style/index";
import { motion, Variants, TargetAndTransition } from "framer-motion";


const DiplomadosNav = dynamic(
  () => import("@/components/diplomadosComponents/diplomadosNav")
);
const DashboardSkeleton = dynamic(() => import("@/components/home/skeletons"));

export default function Main() {
  return (
    <div className="">
       <div className="relative h-full max-w-full  pt-20 lg:pt-40 pb-20 lg:pb-40 mb-16">
        <div className="absolute top-0 w-full h-full z-0">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/image/graduate_bg.webm" type="video/webm" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-testBlue opacity-60"></div>
          {/* <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-gray-800"></span> */}
        </div>
        <div className="relative mx-auto max-w-screen-xl p-2 text-white">
          <div>
            <p className="text-center text-[#fff]  font-extrabold text-4xl lg:text-6xl mt-10">
              Descubre Nuestros Diplomados
            </p>
          </div>
          <p className="text-center  font-semibold text-lg mt-2">
            ¡Te ofrecemos un servicio de calidad para segurar el exito de tu
            profesión!
          </p>
         
        </div>
      </div>
      
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mb-12">
        <Suspense fallback={<DashboardSkeleton />}>
          <DiplomadosNav />
        </Suspense>
      </div>
      <div>
        
          
      </div>
    </div>
  );
}
