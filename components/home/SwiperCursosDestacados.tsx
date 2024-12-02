"use client";

import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface CourseCardProps {
  darkIcon: string;
  courseTitle: string;
  courseImage: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  darkIcon,
  courseTitle,
  courseImage,
}) => {
  return (
    <Card className="h-[300px] relative">
      <CardFooter className="absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            isZoomed
            alt={`${courseTitle} icon`}
            className="rounded-full w-7 h-7 bg-black hidden dark:block"
          />
          <div className="flex flex-col">
            <p className="text-lg font-light text-white">
              {/* Add description here if needed */}
            </p>
          </div>
        </div>
        <a
          href={`https://wa.me/51921818181?text=Hola, podría darme información sobre el curso de ${encodeURIComponent(
            courseTitle
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="bg-[#EC407A] mr-28 text-customWhiteOcean w-40 dark:bg-[#FB8B24]"
            radius="full"
            size="sm"
          >
            Más Información
          </Button>
        </a>
      </CardFooter>

      <Image
        isZoomed
        alt="Card background "
        className="z-0 w-full h-full object-cover "
        src={courseImage}
      />
    </Card>
  );
};

const App = () => {
  const cursosDestacados = [
    {
      title: "Arqueología",
      courseImage: "/courses/arqueologia.jpg",
    },
    {
      title: "Riego Goteo",
      courseImage: "/courses/goteo.jpg",
    },
    {
      title: "Riego Aspersión",
      courseImage: "/courses/aspercion.jpg",
    },
    {
      title: "Residuos Sólidos  ",
      courseImage: "/courses/solidos.jpg",
    },
    {
      title: "Supervisor SSOMA",
      courseImage: "/courses/ssoma.jpg",
    },
    {
      title: "Monitoreo Agua",
      courseImage: "/courses/agua.jpg",
    },
  ];

  return (
    <div>
      {/* Nuevo bloque añadido */}
      <div
        className="
          bg-[url('/image/purple.jpg')] dark:bg-[url('/image/bg_dark.webp')] 
          fade-in-right mx-auto max-w-screen-xl bg-center bg-fixed to-transparent 
          rounded-lg mt-10"
      >
        <div className="px-2 p-3 md:p-8 transform rounded-lg mx-auto max-w-screen-xl mb-10">
          <h2 className="text-blue-50 text-4xl font-extrabold mb-1 text-center">
            Nuestros Cursos
          </h2>
        </div>
      </div>

      {/* Componente Swiper */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="w-full mx-auto max-w-screen-xl mb-10"
      >
        {cursosDestacados.map((curso, index) => (
          <SwiperSlide key={index}>
            <CourseCard
              darkIcon="/icon/had_dark.svg"
              courseTitle={curso.title}
              courseImage={curso.courseImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default App;
