"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";

const Counter: React.FC = () => {
  const [key, setKey] = useState(0);

  // Usar useInView para cada contador individualmente
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView1 || inView2 || inView3 || inView4) {
      setKey((prevKey) => prevKey + 1);
    }
  }, [inView1, inView2, inView3, inView4]);

  return (
    <section className="relative bg-transparent">
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-80"></div>
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
          {/* Primer contador */}
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={
              inView1 ? { opacity: 1, translateX: 0, translateY: 0 } : {}
            }
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full p-4"
          >
            <div
              key={`counter1-${key}`}
              className="relative flex justify-center items-center flex-col border-3 dark:border-1 border-customOrange bg-customPurple800 dark:bg-transparent dark:border-customOrange rounded-xl w-60 h-80 p-0 mt-5 hover:scale-105 duration-300 overflow-hidden group"
            >
              {/* Componente Image actualizado con las nuevas propiedades */}
              <Image
                src="/counter/counter_alumnos.webp"
                fill // Reemplazo de `layout="fill"`
                alt="Nuestros Alumnos"
                style={{ objectFit: "cover" }} // Reemplazo de `objectFit`
                className="rounded-xl transform transition duration-300 group-hover:grayscale"
              />

              {/* Contenido del contador */}
              <div className="relative z-10 p-4 text-center">
                {inView1 && (
                  <div className="flex flex-col items-center mt-52 w-60 bg-customPurple800 dark:bg-blackblue2 rounded-lg text-customWhiteOcean dark:text-customOrange">
                    <div className="flex items-center text-4xl lg:text-5xl font-extrabold">
                      <span className="ml-1">+</span>
                      <CountUp
                        start={0}
                        end={1000}
                        duration={5}
                        separator="."
                      />
                    </div>
                    <span className="mt-2 font-semibold">Nuestros Alumnos</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Segundo contador */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={
              inView2 ? { opacity: 1, translateX: 0, translateY: 0 } : {}
            }
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full p-4"
          >
            <div
              key={`counter2-${key}`}
              className="relative flex justify-center items-center flex-col border-3 dark:border-1 border-customOrange bg-customPurple800 dark:bg-transparent dark:border-customOrange rounded-xl w-60 h-80 p-0 mt-5 hover:scale-105 duration-300 overflow-hidden group"
            >
              <Image
                src="/counter/count_diplomados.webp"
                fill // Reemplazo de `layout="fill"`
                alt="Nuestros Alumnos"
                style={{ objectFit: "cover" }} // Reemplazo de `objectFit`
                className="rounded-xl transform transition duration-300 group-hover:grayscale"
              />
              <div className="relative z-10 p-4 text-center">
                {inView2 && (
                  <div className="flex flex-col items-center mt-52 w-60 bg-customPurple800 dark:bg-blackblue2 rounded-lg text-customWhiteOcean dark:text-customOrange">
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
            </div>
          </motion.div>

          {/* Tercer contador */}
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={
              inView3 ? { opacity: 1, translateX: 0, translateY: 0 } : {}
            }
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full p-4"
          >
            <div
              key={`counter3-${key}`}
              className="relative flex justify-center items-center flex-col border-3 dark:border-1 border-customOrange bg-customPurple800 dark:bg-transparent dark:border-customOrange rounded-xl w-60 h-80 p-0 mt-5 hover:scale-105 duration-300 overflow-hidden group"
            >
              <Image
                src="/counter/count_excelencia.webp"
                fill // Reemplazo de `layout="fill"`
                alt="Nuestros Alumnos"
                style={{ objectFit: "cover" }} // Reemplazo de `objectFit`
                className="rounded-xl transform transition duration-300 group-hover:grayscale"
              />
              <div className="relative  z-10 p-4 text-center">
                {inView3 && (
                  <div className="flex flex-col items-center mt-52 w-60 bg-customPurple800 dark:bg-blackblue2 rounded-lg text-customWhiteOcean dark:text-customOrange">
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
            </div>
          </motion.div>

          {/* Cuarto contador */}
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={
              inView4 ? { opacity: 1, translateX: 0, translateY: 0 } : {}
            }
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full p-4"
          >
            <div
              key={`counter4-${key}`}
              className="relative flex justify-center items-center flex-col border-3 dark:border-1 border-customOrange bg-customPurple800 dark:bg-transparent dark:border-customOrange rounded-xl w-60 h-80 p-0 mt-5 hover:scale-105 duration-300 overflow-hidden group"
            >
              <Image
                src="/counter/course_male.webp"
                fill // Reemplazo de `layout="fill"`
                alt="Nuestros Alumnos"
                style={{ objectFit: "cover" }} // Reemplazo de `objectFit`
                className="rounded-xl transform transition duration-300 group-hover:grayscale"
              />
              <div className="relative z-10 p-4 text-center">
                {inView4 && (
                  <div className="flex flex-col items-center mt-52 w-60 bg-customPurple800 dark:bg-blackblue2 rounded-lg text-customWhiteOcean dark:text-customOrange">
                    <div className="flex items-center text-4xl lg:text-5xl font-extrabold">
                      <span className="ml-1">+</span>
                      <CountUp start={0} end={200} duration={5} separator="." />
                    </div>
                    <span className="mt-2 font-semibold">
                      Cursos disponibles
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
