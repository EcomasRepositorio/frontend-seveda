"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "./scrollAnimation";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const items = [
  {
    id: 1,
    name: "Summy Diaz",
    fecha: "11 de abril",
    link: "https://web.facebook.com/permalink.php?story_fbid=437926658692981&id=100074269517346&ref=embed_post",
    comment:
      "Recomiendo a ECOMÁS para llevar el diplomado de Gestión Ambiental Municipal y Regional, ya que cuenta con expertos profesionales y de experiencia.",
  },
  {
    id: 2,
    name: "Jose Estefano Chala Mendez ",
    fecha: "11 de febrero",
    link: "https://web.facebook.com/joseestefano.chalamendez/posts/2136550813348850?ref=embed_post",
    comment:
      "Recomiendo a ECOMÁS ya que cuenta con excelentes profesionales de amplia experiencia y expertos en los cursos de especialización y diplomados, asimismo destacar las clases didácticas, eficientes y muy productivas.",
  },
  {
    id: 3,
    name: "Edwin Alvarez",
    fecha: "04 de marzo",
    link: "https://web.facebook.com/permalink.php?story_fbid=3779887155669470&id=100009446688365&ref=embed_post",
    comment:
      "Excelentísimo ECOMÁS Consultoría y Capacitación, tiene docentes bien capacitados de larga trayectoria en todo sus cursos que dicta 100% recomendado.",
  },
];

const TestimoniosFb = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const duplicatedItems = [...items, ...items];
  const itemWidth = 460;
  const totalWidth = itemWidth * duplicatedItems.length;

  const containerVariants = {
    animate: {
      x: [0, -totalWidth / 2],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 12,
          ease: "linear",
        },
      },
    },
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <ScrollAnimation>
      <h2 className="text-primaryblue dark:text-white text-4xl font-extrabold text-center">
        Nuestros Testimonios
      </h2>
      <div className="flex flex-col md:flex-row md:items-center justify-between items-center pb-6">
        <div>
          <p className="text-lg mb-1 md:text-left md:mb-0 md:mr-4">
            Nuestras reseñas en Facebook:
          </p>
          <p className="text-sm text-gray-500 md:text-left pb-4">
            4.9 calificación sobre 155 opiniones.
          </p>
        </div>
        <Button
          target="_blank"
          className="bg-blue-100 border-blue-200 border text-primaryblue hover:opacity-90"
          as={Link}
          href="https://web.facebook.com/ecomascyc"
          color="primary"
        >
          Califícanos
        </Button>
      </div>
      <div className="relative overflow-hidden py-3">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute left-0 top-0 w-1/5 h-full bg-gradient-to-r from-white to-transparent via-transparent dark:from-blackblue dark:to-transparent dark:via-transparent"></div>
          <div className="absolute right-0 top-0 w-1/5 h-full bg-gradient-to-l from-white to-transparent via-transparent dark:from-blackblue dark:to-transparent dark:via-transparent"></div>
        </div>

        <motion.div
          className="flex  justify-center  md:justify-normal"
          variants={isMobile ? {} : containerVariants}
          animate="animate"
        >
          {isMobile
            ? items.map(
                (item, index) =>
                  index === currentIndex && (
                    <div
                      key={index}
                      className="dark:bg-blackblue2 dark:ring-0 md:mr-3 rounded-2xl relative p-8 bg-gray-50/60 backdrop-blur-md transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg w-[calc(100vw-5.75rem)] max-w-md flex flex-col justify-between snap-start snap-always shrink-0 first-of-type:scroll-m-10 scroll-m-5"
                    >
                      <blockquote>{item.comment}</blockquote>
                      <div className="flex items-center gap-3 mt-10">
                        <a
                          href={item.link}
                          target="_blank"
                          className="text-[#1877F2] dark:text-blue-100"
                        >
                          <svg
                            className="h-8 w-8 hover:scale-110"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                          >
                            <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256s114.6 256 256 256c1.5 0 3 0 4.5-.1V312.7h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5C433.7 471.4 512 372.9 512 256z"></path>
                          </svg>
                        </a>
                        <div>
                          <Link href={item.link} passHref legacyBehavior>
                            <a className="dark:text-white font-medium text-slate-800 hover:text-primaryblue dark:hover:text-blue-100">
                              {item.name}
                            </a>
                          </Link>
                          <p className="dark:text-white text-sm text-slate-600">
                            {item.fecha}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
              )
            : duplicatedItems.map((item, index) => (
                <div
                  key={index}
                  className=" dark:bg-blackblue2 dark:ring-0 mr-3 rounded-2xl relative p-8 bg-gray-50/60 backdrop-blur-md transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg w-[calc(100vw-5.75rem)] max-w-md flex flex-col justify-between snap-start snap-always shrink-0 first-of-type:scroll-m-10 scroll-m-5"
                >
                  <blockquote>{item.comment}</blockquote>
                  <div className="flex items-center gap-3 mt-10">
                    <a
                      href={item.link}
                      target="_blank"
                      className="text-[#1877F2] dark:text-blue-100"
                    >
                      <svg
                        className="h-8 w-8 hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256s114.6 256 256 256c1.5 0 3 0 4.5-.1V312.7h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5C433.7 471.4 512 372.9 512 256z"></path>
                      </svg>
                    </a>
                    <div>
                      <Link href={item.link} passHref legacyBehavior>
                        <a className="dark:text-white font-medium text-slate-800 hover:text-primaryblue dark:hover:text-blue-100">
                          {item.name}
                        </a>
                      </Link>
                      <p className="dark:text-white text-sm text-slate-600">
                        {item.fecha}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </motion.div>

        {isMobile && (
          <div className="flex h-full ">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-24  text-gray-800 dark:text-blue-50 px-4 py-10 rounded-l  "
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
              className="absolute right-0 top-24  text-gray-800 dark:text-blue-50 px-4 py-10  rounded-r "
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

export default TestimoniosFb;
