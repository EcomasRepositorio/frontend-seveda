"use client";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import "./stylesHome.css";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

const PrincipalHome = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="relative flex justify-center items-center pl-8">
      <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-950 from-blue-200 to-transparent right-[11%] top-0 hidden md:block"></div>
      <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial dark:from-sky-950 from-violet-200 right-96 top-10 "></div>
      <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-950 from-blue-100 to-transparent left-[10%] top-[10%] hidden md:block"></div>
      {/* Botón para cambiar de tema */}
      <button
        className="fixed z-50 top-16 right-0 mr-3 p-2 flex items-center justify-center"
        onClick={handleThemeChange}
      >
        <Image
          src={theme === "light" ? "/image/bulb_on.png" : "/image/bulb.png"}
          className="block md:hidden w-10 h-10 object-contain"
          alt="Home Image"
          width={35}
          height={35}
        />
      </button>

      <div className=" py-8 lg:py-10 max-w-7xl  sm:px-6 lg:px-8 flex md:flex-row items-start w-full">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100, x: "-100%" },
            visible: {
              x: 0,
              opacity: 1,
              y: 0,
              transition: { duration: 2 },
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 100, duration: 0.9 }}
          className="flex-1 md:mt-16"
        >
          <button className="hover:animate-pulse bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-4">
            <svg
              className="w-2.5 h-2.5 mr-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
            </svg>
            Asegura tu futuro
          </button>
          <h1 className="mb-4">
            <TypeAnimation
              sequence={[
                "Bienvenido a",
                5000,
                "Únete a ",
                5000,
                "Sé parte de",
                5000,
                () => {},
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-blackblue dark:text-white text-5xl md:text-5xl lg:text-6xl font-semibold"
            />
          </h1>
          <h1 className="text-primaryblue text-7xl md:text-6xl lg:text-7xl font-extrabold mb-2">
            ECOMÁS
          </h1>
          <p className="mb-8 max-w-lg font-normal text-2xl md:text-xl lg:text-2xl">
            <TypeAnimation
              sequence={[
                "Impulsamos el conocimiento y el crecimiento profesional.",
                3000,
                "Innovación y calidad en cada curso que ofrecemos.",
                3000,
                "Formamos líderes del mañana con nuestros programas especializados.",
                3000,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="font-normal text-blackblue2 dark:text-white"
            />
          </p>
          <Link href="/diplomados" passHref legacyBehavior>
            <button className="hover:animate-pulse bg-blue-100 border-blue-200 border text-primaryblue rounded-full inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center hover:scale-105 focus:ring-4 focus:ring-blue-300">
              Ver Diplomados
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </motion.div>
        <motion.div
          className="hidden md:block md:mr-5 mt-8 md:mt-0 moveArrow"
          variants={{
            hidden: { opacity: 0, y: 100, x: "100%" },
            visible: {
              x: 0,
              opacity: 1,
              y: 0,
              transition: { duration: 2 },
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 100, duration: 0.9 }}
        >
          <Image
            src="/image/bg_night.png"
            width={750}
            height={500}
            className="dark:hidden"
            alt="Home Image"
          />
          <Image
            src="/image/bg_light.png"
            width={750}
            height={500}
            className="hidden dark:block"
            alt="Home Image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipalHome;
