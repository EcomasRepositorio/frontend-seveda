"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'; // Importa motion de Framer Motion

const Counter = () => {
  const [key, setKey] = useState(0);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setKey(prevKey => prevKey + 1); // Cambiar la key para reiniciar el contador
    }
  }, [inView]);

  return (
    <section className='relative'>
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-80 bg-gray-800" style={{ backgroundImage: "url('/fondo_certificate.jpg')" }}></div>
      <div className='relative z-10 p-10 max-w-screen-xl mx-auto'>
        <h1 className='text-5xl font-bold text-white text-center mt-10 '>
          ¿Por qué Seveda?
        </h1>
        <h3 className='text-white mt-10 mb-10 font-light lg:text-xl text-sm text-center lg:px-60'>
          Porque impulsamos el desarrollo creativo de todo profesional a través de nuestros cursos y
          diplomados, apostando por una formación con pensamiento estratégico e innovador.
        </h3>
        <div className='grid lg:grid-cols-4 bord text-center gap-6 mb-20'>
          {/* Animación del primer contador */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full p-4"
          >
            <div key={`counter1-${key}`} className={`flex justify-center items-center flex-col border-2 border-violet-600 dark:border-customOrange rounded-xl p-4 mt-5 hover:scale-110 duration-300`}>
              <Image
                src="/estudiantes.png"
                alt="alumnos"
                width={150}
                height={150} />
              <div className='text-white mt-5 mb-5'>
                {inView && (
                  <div className='flex flex-col items-center'>
                    <div className='flex items-center text-5xl font-extrabold'>
                      <span className="text-5xl ml-1">+</span>
                      <CountUp start={0} end={10000} duration={5} separator="." />
                    </div>
                    <span className='mt-2 font-semibold'>alumnos confiaron</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Animación del segundo contador */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full p-4"
          >
            <div key={`counter2-${key}`} className={`flex justify-center items-center flex-col border-2 border-violet-600 dark:border-customOrange rounded-xl p-4 mt-5 hover:scale-110 duration-300`}>
              <Image
                src="/certificados.png"
                alt="diplomados"
                width={150}
                height={150} />
              <div className='text-white mt-5 mb-5'>
                {inView && (
                  <div className='flex flex-col items-center'>
                    <div className='flex items-center text-5xl font-extrabold'>
                      <span className="text-5xl ml-1">+</span>
                      <CountUp start={0} end={70} duration={5} separator="." />
                    </div>
                    <span className='mt-2 font-semibold'>diplomados disponibles</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Animación del tercer contador */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full p-4"
          >
            <div className={`flex justify-center items-center flex-col rounded-xl border-2 border-violet-600 dark:border-customOrange p-4 mt-5 hover:scale-110 duration-300`}>
              <Image
                src="/metologia.png"
                alt="metodología"
                width={150}
                height={150} />
              <div className='text-white mt-5 mb-5'>
                {inView && (
                  <div className='flex flex-col items-center'>
                    <div className="flex items-center text-5xl font-extrabold">
                      <CountUp start={0} end={100} duration={5} separator="." />
                      <span className="ml-1">%</span>
                    </div>
                    <span className='mt-2 font-semibold'>Contenidos de alta calidad</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Animación del cuarto contador */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full p-4"
          >
            <div className={`flex justify-center items-center flex-col border-2 border-violet-600 dark:border-customOrange rounded-xl p-4 mt-5 hover:scale-110 duration-300`}>
              <Image
                src="/enseñanza.png"
                alt="enseñanza"
                width={150}
                height={150} />
              <div className='text-white mt-5 mb-5'>
                {inView && (
                  <div className='flex flex-col items-center'>
                    <div className='flex items-center text-5xl font-extrabold'>
                      <span className="text-5xl ml-1">+</span>
                      <CountUp start={0} end={700} duration={5} separator="." />
                    </div>
                    <span className='mt-2 font-semibold'>cursos a su disposición</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Counter;
