"use client";
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import studentsAnimation from '../../public/icons/students.json';
import graduatesAnimation from '../../public/icons/graduate.json';
import excelentAnimation from '../../public/icons/excelent.json';
import coursesAnimation from '../../public/icons/courses.json';

type AnimationData = Record<string, any>;

const Counter: React.FC = () => {
  const [key, setKey] = useState(0);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setKey(prevKey => prevKey + 1); // Cambiar la key para reiniciar el contador
    }
  }, [inView]);

  const defaultOptions = (animationData: AnimationData) => ({
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  });

  return (
    <section className='relative'>
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-80 bg-transparent" style={{ backgroundImage: "url('/fondo_certificate.jpg')" }}></div>
      <div className='relative z-10 p-10 max-w-screen-xl mx-auto'>
        <h1 className='text-5xl font-bold text-customPurple800 dark:text-customWhiteOcean text-center mt-10'>
          ¿Por qué Seveda?
        </h1>
        <h3 className='text-black dark:text-customWhiteOcean mt-10 mb-10 font-light lg:text-xl text-sm text-center lg:px-60'>
          Porque impulsamos el desarrollo creativo de todo profesional a través de nuestros cursos y
          diplomados, apostando por una formación con pensamiento estratégico e innovador.
        </h3>
        <div className='grid lg:grid-cols-4 text-center gap-6 mb-20'>
          {/* Primer contador con animación */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full p-4"
          >
            <div key={`counter1-${key}`} className={`flex justify-center items-center flex-col  border-2 border-customPurple800 dark:border-customOrange rounded-xl p-4 mt-5 hover:scale-110 hover:bg-transparent dark:hover:bg-customOrange duration-300`}>
              <Lottie options={defaultOptions(studentsAnimation as AnimationData)} height={150} width={150} />
              <div className='text-black dark:text-customWhiteOcean mt-5 mb-5'>
                {inView && (
                  <div className='flex flex-col items-center'>
                    <div className='flex items-center text-5xl font-extrabold'>
                      <span className="text-5xl ml-1">+</span>
                      <CountUp start={0} end={1000} duration={5} separator="." />
                    </div>
                    <span className='mt-2 font-semibold'>Nuestros Alumnos</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Segundo contador con animación */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full p-4"
          >
            <div key={`counter2-${key}`} className={`flex justify-center items-center flex-col border-2 border-customPurple800 dark:border-customOrange rounded-xl p-4 mt-5 hover:scale-110 hover:bg-transparent dark:hover:bg-customOrange duration-300`}>
              <Lottie options={defaultOptions(graduatesAnimation as AnimationData)} height={150} width={150} />
              <div className='text-black dark:text-customWhiteOcean mt-5 mb-5'>
                {inView && (
                  <div className='flex flex-col items-center'>
                    <div className='flex items-center text-5xl font-extrabold'>
                      <span className="text-5xl ml-1">+</span>
                      <CountUp start={0} end={40} duration={5} separator="." />
                    </div>
                    <span className='mt-2 font-semibold'>Diplomados Disponibles</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Tercer contador con animación */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full p-4"
          >
            <div className={`flex justify-center items-center flex-col rounded-xl border-2 border-customPurple800 dark:border-customOrange p-4 mt-5 hover:scale-110 hover:bg-transparent dark:hover:bg-customOrange duration-300`}>
              <Lottie options={defaultOptions(excelentAnimation as AnimationData)} height={150} width={150} />
              <div className='text-black dark:text-customWhiteOcean mt-5 mb-5'>
                {inView && (
                  <div className='flex flex-col items-center'>
                    <div className="flex items-center text-5xl font-extrabold">
                      <CountUp start={0} end={100} duration={5} separator="." />
                      <span className="ml-1">%</span>
                    </div>
                    <span className='mt-2 font-semibold'>Contenidos de excelencia</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Cuarto contador con animación */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full p-4"
          >
            <div className={`flex justify-center items-center flex-col border-2 border-customPurple800 dark:border-customOrange rounded-xl p-4 mt-5 hover:scale-110 hover:bg-transparent dark:hover:bg-customOrange duration-300`}>
              <Lottie options={defaultOptions(coursesAnimation as AnimationData)} height={150} width={150} />
              <div className='text-black dark:text-customWhiteOcean mt-5 mb-5'>
                {inView && (
                  <div className='flex flex-col items-center'>
                    <div className='flex items-center text-5xl font-extrabold'>
                      <span className="text-5xl ml-1">+</span>
                      <CountUp start={0} end={350} duration={5} separator="." />
                    </div>
                    <span className='mt-2 font-semibold'>Cursos disponibles</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
