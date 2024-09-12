"use client";
import React from "react";
import { motion } from "framer-motion"; // Importamos Framer Motion
import ScrollAnimation from "./scrollAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Importa los estilos de autoplay

// import required modules
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";

const SwiperCarrousel = () => {
  const cursosDestacados = [
    {
      imageUrl: "/image/prueba.jpg",
      title: "Curso 1",
    },
    {
      imageUrl: "/image/prueba.jpg",
      title: "Curso 2",
    },
    {
      imageUrl: "/image/prueba.jpg",
      title: "Curso 3",
    },
    {
      imageUrl: "/image/prueba.jpg",
      title: "Curso 4",
    },
    {
      imageUrl: "/image/prueba.jpg",
      title: "Curso 5",
    },
  ];

  return (
    <ScrollAnimation>
      <Swiper
        slidesPerView={1}
        spaceBetween={15} // Espaciado entre slides
        mousewheel={true} // Habilita la interacción con la rueda del mouse
        autoplay={{
          delay: 3000, // 3 segundos entre cada slide
          disableOnInteraction: false, // No detener al interactuar
        }}
        pagination={{
          clickable: true, // Habilita la paginación clicable
        }}
        breakpoints={{
          769: {
            slidesPerView: 2, // 2 slides por vista en pantallas medianas
            spaceBetween: 20, // Ajusta el espaciado para pantallas medianas
          },
          1024: {
            slidesPerView: 3, // 3 slides por vista en pantallas grandes
            spaceBetween: 30, // Ajusta el espaciado para pantallas grandes
          },
        }}
        modules={[Mousewheel, Pagination, Autoplay]} // Importa los módulos necesarios
        className="mySwiper "
      >
        {cursosDestacados.map((curso, index) => (
          <SwiperSlide key={index}>
            {/* Gradiente superior para light y dark mode con opciones ajustables */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              {/* Gradiente ajustable con opacidad y tamaño */}
              <div
                className="absolute inset-0 top-0 w-full h-[30%] bg-gradient-to-b from-customWhiteOcean to-transparent dark:from-blackblue hover:from-blackblue/75 dark:to-transparent"
                style={{
                  opacity: 0.8, // Ajusta la opacidad del gradiente
                  height: "25%", // Ajusta la altura del gradiente (puedes cambiar el valor)
                }}
              ></div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full mt-4 shadow-lg pt-2 hover:opacity-90 rounded-lg bg-customWhiteOcean dark:bg-blackblue2 ring-1 ring-gray-200/50 hover:ring-4 hover:ring-gray-50 dark:ring-1 dark:ring-blackblue2 dark:hover:ring-customOscure" // Ring y colores organizados para light/dark
            >
              {/* Contenido del curso */}
              <div className="p-2 rounded-lg">
                <Image
                  src={curso.imageUrl}
                  alt={`Imagen del curso ${curso.title}`}
                  width={450}
                  height={300}
                  className="object-cover w-full h-auto rounded-lg md:h-96"
                />
              </div>

              {/* Botón de más información */}
              <Link href="/diplomados" passHref legacyBehavior>
                <div className="mx-2 flex items-center justify-between bg-customPurple800 dark:bg-customWhiteOcean dark:text-customOscure border-none text-white rounded-md text-xs font-medium px-4 py-1">
                  <span>Más información</span>
                  <span>
                    <GrFormNextLink className="w-6 h-6" />
                  </span>
                </div>
              </Link>

              {/* Título del curso */}
              <div className="flex items-center justify-center px-4 pt-1 mb-12 pb-2 min-h-[4rem]">
                <a
                  href="/"
                  className="font-normal text-center inline-block hover:text-[#FAA32F] dark:hover:text-[#FFD700] transition duration-500 ease-in-out"
                >
                  {curso.title}
                </a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ScrollAnimation>
  );
};

export default SwiperCarrousel;
