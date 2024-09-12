import React, { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "./scrollAnimation";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const cursosDestacados = [
  {
    id: 1,
    imageUrl: "/image/prueba.jpg",
    title: "Gestion y manejo de residuos sólidos municipales",
    description:
      "Este curso aborda estrategias y técnicas para gestionar eficazmente los residuos sólidos en entornos urbanos, incluyendo temas como reciclaje, tratamiento de residuos y participación comunitaria.",
  },
  {
    id: 2,
    imageUrl: "/image/prueba.jpg",
    title: "Sistemas de riego por aspersión",
    description:
      "Curso sobre el diseño y uso eficiente de sistemas de riego por aspersión.",
  },
  {
    id: 3,
    imageUrl: "/image/prueba.jpg",
    title: "Sistemas de riego por goteo",
    description:
      "Curso que explora el diseño y aplicación de sistemas eficientes de riego por goteo en agricultura y jardinería.",
  },
  {
    id: 4,
    imageUrl: "/image/prueba.jpg",
    title: "Arqueología en proyectos viales",
    description:
      "Curso sobre la integración de la arqueología en el diseño y desarrollo de proyectos viales.",
  },
  {
    id: 5,
    imageUrl: "/image/prueba.jpg",
    title: "Ampliaciones de plazo, adicionales de obra y penalidades en obra",
    description:
      "Curso que aborda la gestión de ampliaciones de plazo, cambios en obra y las penalizaciones asociadas en proyectos de construcción.",
  },
  {
    id: 6,
    imageUrl: "/image/prueba.jpg",
    title: "Monitoreo de la calidad de agua",
    description:
      "Curso sobre técnicas y métodos para monitorear la calidad del agua en diferentes contextos ambientales y aplicaciones.",
  },
  {
    id: 7,
    imageUrl: "/image/prueba.jpg",
    title: "Supervisor SSOMA 2024",
    description:
      "Curso que prepara a los supervisores en seguridad, salud ocupacional y medio ambiente (SSOMA) para la gestión efectiva en entornos laborales.",
  },
];

const SwiperCursosDestacados = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const duplicatedCursos = [...cursosDestacados, ...cursosDestacados];
  const itemWidth = 396;
  const totalWidth = itemWidth * duplicatedCursos.length;

  const containerVariants = {
    animate: {
      x: [-totalWidth / 2, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 38,
          ease: "linear",
        },
      },
    },
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cursosDestacados.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + cursosDestacados.length) % cursosDestacados.length
    );
  };

  return (
    <ScrollAnimation>
      <div className="rounded-lg p-10 md:p-6 flex flex-col items-center">
        <h2 className="text-primaryblue dark:text-white text-5xl font-extrabold mb-2">
          Nuestros Cursos
        </h2>
      </div>
      <div className="relative overflow-hidden py-8">
        {" "}
        {/* Aumenté el padding vertical aquí */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute left-0 top-0 w-2/4 h-full bg-gradient-to-r from-white to-transparent via-transparent dark:from-blackblue dark:to-transparent dark:via-transparent hidden md:block"></div>
          <div className="absolute right-0 top-0 w-2/4 h-full bg-gradient-to-l from-white to-transparent via-transparent dark:from-blackblue dark:to-transparent dark:via-transparent hidden md:block"></div>
        </div>
        <motion.div
          className="flex justify-center ml-3 md:justify-normal"
          animate={isMobile ? false : "animate"}
          variants={isMobile ? {} : containerVariants}
        >
          {isMobile
            ? cursosDestacados.map(
                (curso, index) =>
                  index === currentIndex && (
                    <motion.div
                      key={index}
                      className="px-12 dark:bg-blackblue2 dark:ring-0 py-8 mr-4 rounded-2xl relative p-4 bg-gray-50/60 backdrop-blur-md transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg w-[30rem] max-w-xl flex flex-col justify-between snap-start snap-always shrink-0 first-of-type:scroll-m-10 scroll-m-5"
                    >
                      <div className="object-cover">
                        <div className="p-3 rounded-lg">
                          <Image
                            src={curso.imageUrl}
                            alt="Imagen curso"
                            width={500}
                            height={400}
                            className="object-cover h-[20rem] md:h-[24rem] lg:h-[28rem] w-full rounded-lg"
                          />
                        </div>
                        <div className="px-3 md:px-6 pt-3 mb-5 pb-3">
                          <a className="text-justify font-semibold text-lg text-blackblue dark:text-white">
                            {curso.title}
                          </a>
                          <p className="text-justify font-light text-base">
                            {curso.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
              )
            : duplicatedCursos.map((curso, index) => (
                <motion.div
                  key={index}
                  className="dark:bg-blackblue2 dark:ring-0 py-8 mr-4 rounded-3xl relative p-8 bg-gray-50/60 backdrop-blur-md transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg w-[28rem] max-w-lg flex flex-col justify-between snap-start snap-always shrink-0 first-of-type:scroll-m-10 scroll-m-5"
                >
                  <div className="object-cover">
                    <div className="p-3 rounded-lg">
                      <Image
                        src={curso.imageUrl}
                        alt="Imagen curso"
                        width={420}
                        height={350}
                        className="object-cover h-60 rounded-lg w-full"
                      />
                    </div>
                    <div className="px-10 md:px-6 pt-3 mb-5 pb-3">
                      <a className="text-justify font-semibold text-lg text-blackblue dark:text-white">
                        {curso.title}
                      </a>
                      <p className="text-justify font-light text-base">
                        {curso.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
        </motion.div>
        {isMobile && (
          <div className="flex justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-40 text-gray-800 dark:text-blue-50 px-5 py-12"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-40 text-gray-800 dark:text-blue-50 px-5 py-12"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </ScrollAnimation>
  );
};

export default SwiperCursosDestacados;
