"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";

const Counter: React.FC = () => {
  const [key, setKey] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Asegura que la animación solo se active una vez
  });

  useEffect(() => {
    if (inView) {
      setKey((prevKey) => prevKey + 1); // Cambiar la key para reiniciar el contador
    }
  }, [inView]);

  return (
    <section className="relative bg-transparent">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-80"
        style={{ backgroundImage: "url('/fondo_certificate.jpg')" }}
      ></div>
      <div className="relative z-10 p-6 lg:p-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-customPurple800 dark:text-customWhiteOcean text-center mt-10">
          ¿Por qué SEVEDA?
        </h1>
        <h3 className="text-black dark:text-customWhiteOcean mt-6 lg:mt-10 mb-10 font-light text-sm sm:text-base lg:text-xl text-center lg:px-40">
          Porque impulsamos el desarrollo creativo de todo profesional a través
          de nuestros cursos y diplomados, apostando por una formación con
          pensamiento estratégico e innovador.
        </h3>
        <div className="grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-6 mb-20">
          {/* Primer contador - Nuestros Alumnos */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full p-4"
          >
            <div
              key={`counter1-${key}`}
              className="relative flex justify-center items-center flex-col border-3 dark:border-1 border-customOrange bg-customPurple800 dark:bg-transparent dark:border-customOrange rounded-xl w-60 h-80 p-0 mt-5 hover:scale-105 duration-300 overflow-hidden group"
            >
              <Image
                src="/counter/counter_alumnos.webp"
                layout="fill"
                objectFit="cover"
                alt="Nuestros Alumnos"
                className="rounded-xl transform transition duration-300 group-hover:grayscale"
              />
              <div className="relative z-10 p-4 text-center">
                {inView && (
                 <div className="flex flex-col items-center mt-52 w-60  bg-customPurple800 dark:bg-blackblue2 rounded-lg text-customWhiteOcean dark:text-customOrange">
                    <div className="flex items-center text-4xl lg:text-5xl font-extrabold">
                      <span className="ml-1">+</span>
                      <CountUp  start={0} end={1000} duration={5} separator="." />
                    </div>
                    <span className="mt-2 font-semibold">Nuestros Alumnos</span>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 rounded-xl"></div>
            </div>
          </motion.div>

          {/* Segundo contador - Diplomados Disponibles */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full p-4"
          >
            <div
              key={`counter2-${key}`}
              className="relative flex justify-center items-center flex-col border-3 dark:border-1 border-customOrange bg-customPurple800 dark:bg-transparent dark:border-customOrange rounded-xl w-60 h-80 p-0 mt-5 hover:scale-105 duration-300 overflow-hidden group"
            >
              <Image
                src="/counter/count_diplomados.webp"
                layout="fill"
                objectFit="cover"
                alt="Diplomados Disponibles"
                className="rounded-xl transform transition duration-300 group-hover:grayscale"
              />
              <div className="relative z-10 p-4 text-center">
                {inView && (
                  <div className="flex flex-col items-center mt-52 w-60  bg-customPurple800 dark:bg-blackblue2 rounded-lg text-customWhiteOcean dark:text-customOrange">
                    <div className="flex items-center text-4xl lg:text-5xl font-extrabold">
                      <span className="ml-1">+</span>
                      <CountUp start={0} end={40} duration={5} separator="." />
                    </div>
                    <span className="mt-2 font-semibold">
                      Diplomados Disponibles
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 rounded-xl"></div>
            </div>
          </motion.div>

          {/* Tercer contador - Contenidos de excelencia */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full p-4"
          >
            <div
              key={`counter3-${key}`}
              className="relative flex justify-center items-center flex-col border-3 dark:border-1 border-customOrange bg-customPurple800 dark:bg-transparent dark:border-customOrange rounded-xl w-60 h-80 p-0 mt-5 hover:scale-105 duration-300 overflow-hidden group"
            >
              <Image
                src="/counter/count_excelencia.webp"
                layout="fill"
                objectFit="cover"
                alt="Contenidos de excelencia"
                className="rounded-xl transform transition duration-300 group-hover:grayscale"
              />
              <div className="relative  z-10 p-4 text-center">
                {inView && (
                 <div className="flex flex-col items-center mt-52 w-60  bg-customPurple800 dark:bg-blackblue2 rounded-lg text-customWhiteOcean dark:text-customOrange">
                    <div className="flex items-center text-4xl lg:text-5xl font-extrabold">
                      <CountUp start={0} end={100} duration={5} separator="." />
                      <span className="ml-1">%</span>
                    </div>
                    <span className="mt-2 font-semibold">
                      Contenidos de excelencia
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 rounded-xl"></div>
            </div>
          </motion.div>

          {/* Cuarto contador - Cursos disponibles */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full p-4"
          >
            <div
              key={`counter4-${key}`}
              className="relative flex justify-center items-center flex-col border-3 dark:border-1 border-customOrange bg-customPurple800 dark:bg-transparent dark:border-customOrange rounded-xl w-60 h-80 p-0 mt-5 hover:scale-105 duration-300 overflow-hidden group"
            >
              <Image
                src="/counter/course_male.webp"
                layout="fill"
                objectFit="cover"
                alt="Cursos disponibles"
                className="rounded-xl transform transition duration-300 group-hover:grayscale"
              />
              <div className="relative z-10 p-4 text-center">
                {inView && (
                 <div className="flex flex-col items-center mt-52 w-60  bg-customPurple800 dark:bg-blackblue2 rounded-lg text-customWhiteOcean dark:text-customOrange">
                    <div className="flex items-center text-4xl lg:text-5xl font-extrabold">
                      <span className="ml-1">+</span>
                      <CountUp start={0} end={350} duration={5} separator="." />
                    </div>
                    <span className="mt-2 font-semibold">Cursos disponibles</span>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 rounded-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
