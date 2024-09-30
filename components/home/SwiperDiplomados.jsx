"use client";
import React from "react";
import { motion } from "framer-motion"; // Importamos Framer Motion
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Importa los estilos de autoplay

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const SwiperCarrousel = () => {
  const cursosDestacados = [
    {
      imageUrl: "/courses/1.jpg",
      title: "Ingeniería Civil",
    },
    {
      imageUrl: "/courses/2.jpg",
      title: "Ingeniería Agrónoma",
    },
    {
      imageUrl: "/courses/3.jpg",
      title: "Ingeniería Ambiental",
    },
    {
      imageUrl: "/courses/4.jpg",
      title: "Ingeniería Alimentaria",
    },
    {
      imageUrl: "/courses/5.jpg",
      title: "Ingeniería Vial",
    },
    {
      imageUrl: "/courses/7.jpg",
      title: "SSOMA",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10} // Ajusta el espaciado para pantallas pequeñas
      mousewheel={true} // Habilita la interacción con la rueda del mouse
      autoplay={{
        delay: 3000, // 3 segundos entre cada slide
        disableOnInteraction: false, // No detener al interactuar
      }}
      pagination={{
        clickable: true, // Habilita la paginación clicable
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 15, // Espaciado ajustado para pantallas pequeñas
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20, // Espaciado para pantallas medianas
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30, // Espaciado para pantallas grandes
        },
      }}
      modules={[Pagination, Autoplay]} // Importa los módulos necesarios
      className="mySwiper"
    >
      {cursosDestacados.map((curso, index) => (
        <SwiperSlide key={index}>
          {/* Gradiente superior para light y dark mode con opciones ajustables */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div
              className="absolute inset-0 top-0 w-full h-[25%] bg-gradient-to-b from-customWhiteOcean to-transparent dark:from-blackblue hover:from-blackblue/75 dark:to-transparent"
              style={{
                opacity: 0.8, // Ajusta la opacidad del gradiente
              }}
            ></div>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full shadow-lg pt-2 hover:opacity-90 rounded-lg bg-customWhiteOcean dark:bg-blackblue2 ring-1 ring-gray-200/50 hover:ring-4 hover:ring-gray-50 dark:ring-1 dark:ring-blackblue2 dark:hover:ring-customOscure"
          >
            {/* Contenido del curso */}
            <div className="p-2 rounded-lg">
              <Image
                src={curso.imageUrl}
                alt={`Imagen del curso ${curso.title}`}
                width={450}
                height={450}
                className="object-cover w-full h-auto rounded-xl" // Asegura que la imagen se adapte correctamente
              />
            </div>

            {/* Botón de más información */}
            <Link href="/diplomados" passHref legacyBehavior>
              <div className="mx-2 cursor-pointer flex items-center justify-between bg-customPurple800 dark:bg-customWhiteOcean dark:text-customOscure border-none text-white rounded-md text-xs font-medium px-4 py-1">
                <span>Más información</span>
                <span>
                  <GrFormNextLink className="w-6 h-6" />
                </span>
              </div>
            </Link>

            {/* Título del curso */}
            <div className="flex items-center justify-center px-4 pt-1 mb-12 pb-2 min-h-[4rem]">
              <a
                href="/diplomados"
                className="font-normal text-center inline-block hover:text-customPurple800 dark:hover:text-customOrange transition duration-500 ease-in-out"
              >
                {curso.title}
              </a>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarrousel;
