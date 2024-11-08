"use client";
import React from "react";
import ScrollAnimation from "./scrollAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

// import required modules
import {
  Keyboard,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import { title } from "process";

const SwiperCarrousel = () => {
  const cursosDestacados = [
    // Tus datos de cursos destacados
    {
      title: "Ingeniería de Puentes",
      imageUrl: "/dip2/1.webp",
    },
    {
      title: "Asistente Técnico en Obras",
      imageUrl: "/dip2/2.webp",
    },
    {
      title: "Ingeniería Vial",
      imageUrl: "/dip2/3.webp",
    },
    {
      title: "Residencia y supervisón de obras",
      imageUrl: "/dip2/4.webp",
    },
    {
      title: "SSOMA (Seguridad y Salud Ocupacional y Medio Ambiente)",
      imageUrl: "/dip2/5.webp",
    },
    {
      title: "Gestión Ambiental Municipal y Regional",
      imageUrl: "/dip2/6.webp",
    },
    {
      title: "Monitoreo y Evaluación de la Calidad Ambiental",
      imageUrl: "/dip2/7.webp",
    },
    {
      title: "Gestión y manejo integral de residuos sólidos",
      imageUrl: "/dip2/8.webp",
    },
    {
      title: "Sistemas de Riego Tecnificado",
      imageUrl: "/dip2/9.webp",
    },
    {
      title: "Riego y Fertirriego",
      imageUrl: "/dip2/10.webp",
    },
    {
      title: "Gestión de la calidad e inocuidad alimentaria",
      imageUrl: "/dip2/11.webp",
    },
    {
      title: "PERITO FORENSE Y CRIMINALÍSTICO",
      imageUrl: "/dip2/12.webp",
    },
  ];

  return (
    <ScrollAnimation>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        spaceBetween={15}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={false}
       
        autoplay={{
          delay: 3000, // Intervalo de tiempo entre cada slide (5 segundos)
          disableOnInteraction: false, // Autoplay no se detendrá al interactuar con el swiper
        }}
        loop={true}
        modules={[Keyboard, Scrollbar, Autoplay]}
        style={{ padding: "10px" }}
      >
        {cursosDestacados.map((curso, index) => (
          <SwiperSlide key={index}>
            <div className="w-full mt-4 shadow-lg pt-2 hover:opacity-90 rounded-lg bg-white dark:bg-blackblue2">
              <div className="p-2 rounded-lg">
                <Image
                  src={curso.imageUrl}
                  alt="Imagen banner"
                  width={550}
                  height={300}
                  className="object-cover max-h-90 max-w-94 rounded-lg "
                />
              </div>
              <a
                href={`https://api.whatsapp.com/send?phone=51921818181&text=Hola, podría darme información sobre el curso de ${encodeURIComponent(
                  curso.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 flex items-center justify-between dark:bg-blackblue dark:text-white dark:border-0 bg-blue-100 border-blue-200 border text-primaryblue rounded-md text-xs font-medium px-4 py-1"
              >
                <span>Más información</span>
                <span>
                  <GrFormNextLink className="w-6 h-6" />
                </span>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ScrollAnimation>
  );
};
export default SwiperCarrousel;
