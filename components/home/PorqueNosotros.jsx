import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { UsersIcon, BookOpenIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/solid';

const PorqueNosotros = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  // Efecto para activar la animación cuando el componente se vuelve visible
  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  // Función para manejar el evento de scroll y determinar la visibilidad del componente
  const handleScroll = () => {
    const element = document.getElementById("porque-nosotros");
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      if (elementPosition < screenPosition) {
        setIsVisible(true);
      }
    }
  };

  // Efecto para añadir el listener de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variantes de animación
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } }
  };

  const features = [
    { name: '+3000', description: 'Alumnos beneficiados', icon: UsersIcon },
    { name: '+70', description: 'Diplomados disponibles', icon: AcademicCapIcon },
    { name: '+700', description: 'Cursos disponibles', icon: BookOpenIcon },
    { name: '+10000', description: 'Clases virtuales impartidas', icon: StarIcon },
  ];

  return (
    <div id="porque-nosotros" className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 items-center pt-4 px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <motion.h2
          className="text-primaryblue dark:text-white text-4xl font-extrabold mb-1 sm:text-4xl"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          ¿Por qué debes elegirnos?
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-800 dark:text-white text-justify"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          En Ecomas, nos dedicamos a ayudar a mejorar el currículum vitae de los titulados mediante una amplia
          gama de cursos y diplomados especializados en áreas clave como ingenierías,
          ofreciendo oportunidades para el desarrollo profesional y el crecimiento personal.
        </motion.p>
        <motion.dl
          className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-4"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="border-t border-gray-200 dark:border-gray-500 pt-4 flex items-center" variants={textVariants}>
              <div className="mr-2">
                <feature.icon className="h-12 w-12 mr-4 text-primaryblue" aria-hidden="true" />
              </div>
              <div>
                <dt className="font-extrabold text-4xl text-gray-800 dark:text-white">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-800 dark:text-white">{feature.description}</dd>
              </div>
            </motion.div>
          ))}
        </motion.dl>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <motion.div className="relative" variants={imageVariants} initial="hidden" animate={controls}>
          <Image
            src='/image/inges.jpg'
            alt='Imagen banner'
            width={400}
            height={300}
            className='hidden md:block rounded-lg w-full h-72 object-cover object-center'
          />
        </motion.div>
        <motion.div className="relative" variants={imageVariants} initial="hidden" animate={controls}>
          <Image
            src='/image/riego.jpg'
            alt='Imagen banner'
            width={400}
            height={300}
            className='hidden md:block rounded-lg w-full h-72 object-cover object-center'
          />
        </motion.div>
        <motion.div className="relative" variants={imageVariants} initial="hidden" animate={controls}>
          <Image
            src='/image/autocad.jpg'
            alt='Imagen banner'
            width={400}
            height={300}
            className='hidden md:block rounded-lg w-full h-72 object-cover object-center'
          />
        </motion.div>
        <motion.div className="relative" variants={imageVariants} initial="hidden" animate={controls}>
          <Image
            src='/image/alkumnos.jpg'
            alt='Imagen banner'
            width={400}
            height={300}
            className='hidden md:block rounded-lg w-full h-72 object-cover object-center'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PorqueNosotros;
