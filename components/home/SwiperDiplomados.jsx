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
import "swiper/css/pagination";

// import required modules
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

const SwiperCarrousel = () => {
  const cursosDestacados = [
    // Tus datos de cursos destacados
    {
      imageUrl: "/image/diplo_tecnifi.jpg",
      title: "Sistemas de Riego Tecnificado",
    },
    {
      imageUrl: "/image/diplo_municipal.jpg",
      title: "Gestión Ambiental Municipal y Regional",
    },
    {
      imageUrl: "/image/diplo_ssoma.jpg",
      title: "SSOMA",
    },
    {
      imageUrl: "/image/diplo_alim.jpg",
      title: "Gestión de la calidad e inocuidad alimentaria",
    },
    {
      imageUrl: "/image/bim_model.jpg",
      title: "Modelamiento BIM",
    },
    {
      imageUrl: "/image/vialdiplo.jpg",
      title: "Ingeniería Vial",
    },
    {
      imageUrl: "/image/tecobras.jpg",
      title: "Asistente Técnico en Obras",
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
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Intervalo de tiempo entre cada slide (5 segundos)
          disableOnInteraction: false, // Autoplay no se detendrá al interactuar con el swiper
        }}
        loop={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        style={{ padding: "10px" }}
      >
        {cursosDestacados.map((curso, index) => (
          <SwiperSlide key={index} style={{}}>
            <div
              key={index}
              className="w-full mt-4 shadow-lg pt-2 hover:opacity-90 rounded-lg bg-white dark:bg-blackblue2"
            >
              <div className="p-2 rounded-lg">
                <Image
                  src={curso.imageUrl}
                  alt="Imagen banner"
                  width={450}
                  height={300}
                  className="object-cover h-96 rounded-lg w-full"
                />
              </div>
              <Link href="/diplomados" passHref legacyBehavior>
                <div className="mx-2 flex items-center justify-between dark:bg-blackblue dark:text-white dark:border-0 bg-blue-100 border-blue-200 border text-primaryblue rounded-md text-xs font-medium px-4 py-1">
                  <span>Más información</span>
                  <span>
                    <GrFormNextLink className="w-6 h-6" />
                  </span>
                </div>
              </Link>
              <div className="flex items-center justify-center px-4 pt-1 mb-12 pb-2 min-h-[4rem]">
                {" "}
                {/* Ajusta min-h-[4rem] según tu diseño */}
                <a
                  href="/"
                  className="font-normal text-center inline-block hover:text-primaryblue transition duration-500 ease-in-out"
                >
                  {curso.title}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ScrollAnimation>
  );
};
export default SwiperCarrousel;
