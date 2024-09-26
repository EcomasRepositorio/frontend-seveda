"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/components/utils/motion";
import Globe from "@/components/home/Terra"; // Importamos tu componente Globe (Terra)
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Link from "next/link";

const texts = [
  "Tu puerta abierta al conocimiento en vivo, desde donde estes...",
  "Con nuestros Cursos y Diplomados de especialización...",
];

const tittles = [
  { tittle1: "DIPLOMADOS, CURSOS SEVEDA", color1: "text-customWhiteOcean" },
  { tittle2: "¡CONSTRUYENDO", color2: "text-customWhiteOcean", tittle3: "UN MUNDO MEJOR!", color3: "text-customWhiteOcean" },
];

const icons = [
  { img1: <FaFacebookF />, img2: <FaInstagram />, img3: <FaTiktok />, img4: <FaWhatsapp />, img5: <FaYoutube /> },
  { img1: <FaFacebookF />, img2: <FaInstagram />, img3: <FaTiktok />, img4: <FaWhatsapp />, img5: <FaYoutube /> },
];

const buttons = [
  { text: "Contacto", link: "#contact" },
  { text: "Informes", link: "#contact" },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.hidden) {
        setIndex((prevIndex) =>
          prevIndex === texts.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === tittles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? tittles.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gradient-to-b from-customPurple800 via-[#552B50] to-[#552B50] dark:bg-gradient-to-tr dark:from-black dark:to-blackblue2 relative overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative flex flex-col-reverse md:flex-row max-w-screen-xl mx-auto items-center justify-between w-full"
      >
        <div className="mb-6 lg:mb-0 p-2 md:mt-12">
          {icons.map((icon, i) => (
            i === index && (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={slideInFromTop}
                className="py-1 lg:text-left text-center px-1 opacity-90"
              >
                <h1 className="text-customWhiteOcean lg:text-2xl text-xl text-center inline-flex lg:gap-6 gap-2">
                  <Link
                    href="https://www.facebook.com/people/Corporaci%C3%B3n-Prom%C3%A1s/61552473052389/"
                    target="_blank"
                    className="border bg-blue-600 dark:bg-customOscure p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl"
                  >
                    {icon.img1}
                  </Link>
                  <Link
                    href="https://www.instagram.com/corporacion.promas/"
                    target="_blank"
                    className="border bg-customPurple300 dark:bg-customOscure p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl"
                  >
                    {icon.img2}
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@promas.corp"
                    target="_blank"
                    className="border bg-gray-500 dark:bg-customOscure p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl"
                  >
                    {icon.img3}
                  </Link>
                  <Link
                    href="https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados"
                    target="_blank"
                    className="border bg-green-600 dark:bg-customOscure p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl"
                  >
                    {icon.img4}
                  </Link>
                  <Link
                    href="https://www.youtube.com/@Corporacion.Promas"
                    target="_blank"
                    className="border bg-red-600 dark:bg-customOscure p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl"
                  >
                    {icon.img5}
                  </Link>
                </h1>
              </motion.div>
            )
          ))}

          {tittles.map((tittle, i) => (
            i === index && (
              <React.Fragment key={`tittles-${i}`}>
                <motion.div
                  key={`${i}-1`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={slideInFromLeft(1)}
                  className="lg:leading-[3.5em] leading-[2.2em]"
                >
                  <h1>
                    <p className={`t-6 lg:text-[50px] text-[28px] font-extrabold bg-clip-text text-customPurple ${tittle.color1}`}>
                      {tittle.tittle1}
                    </p>
                  </h1>
                </motion.div>
                <motion.div
                  key={`${i}-2`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={slideInFromLeft(1)}
                  className="lg:leading-[3.5em] leading-[2.2em] mt-4"
                >
                  <h1>
                    <p className={`lg:text-[50px] text-[28px] font-extrabold bg-clip-text text-customPurple ${tittle.color2}`}>
                      {tittle.tittle2}
                    </p>
                  </h1>
                </motion.div>
                <motion.div
                  key={`${i}-3`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={slideInFromLeft(1)}
                  className="lg:leading-[3.5em] leading-[2.2em] mt-4"
                >
                  <h1>
                    <p className={`lg:text-[45px] text-[32px] font-extrabold bg-clip-text ${tittle.color3}`}>
                      {tittle.tittle3}
                    </p>
                  </h1>
                </motion.div>
              </React.Fragment>
            )
          ))}

          {texts.map((text, i) => (
            i === index && (
              <motion.p
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={slideInFromLeft(1.5)}
                className="lg:text-3xl text-gray-200 mb-8"
              >
                {text}
              </motion.p>
            )
          ))}

          {buttons.map((button, i) => (
            i === index && (
              <motion.a
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={slideInFromLeft(2)}
                href={button.link}
                className="py-2 lg:text-2xl px-8 font-mono text-center button-primary text-white cursor-pointer rounded-lg"
              >
                {button.text}
              </motion.a>
            )
          ))}
        </div>

        {/* Reemplazamos las imágenes por tu componente Globe */}
        <div className="w-full h-full flex justify-center items-center text-center mt-20 max-w-full max-h-[350px] lg:max-h-full lg:max-w-full">
          <Globe /> {/* Aquí se muestra tu componente Globe */}
        </div>
      </motion.div>

      <div className="flex justify-center mt-6">
        <button
          onClick={prevSlide}
          className="py-2 px-4 mr-2 font-mono text-center button-primary text-white cursor-pointer rounded-lg"
        >
          <BiChevronLeft className="text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="py-2 px-4 font-mono text-center button-primary text-white cursor-pointer rounded-lg"
        >
          <BiChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Home;
