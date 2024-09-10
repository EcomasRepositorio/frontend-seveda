import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { UsersIcon, GlobeAltIcon, BriefcaseIcon, HeartIcon } from '@heroicons/react/solid';

const PorQueElegirnos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  const handleScroll = () => {
    const element = document.getElementById("por-que-elegirnos");
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.5;
      if (elementPosition < screenPosition) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } }
  };

  const features = [
    { name: '+5000', description: 'Clientes satisfechos', icon: UsersIcon },
    { name: '50+', description: 'Países con presencia', icon: GlobeAltIcon },
    { name: '200+', description: 'Proyectos completados', icon: BriefcaseIcon },
    { name: '100%', description: 'Compromiso con la calidad', icon: HeartIcon },
  ];

  return (
    <div id="por-que-elegirnos" className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-12 items-center pt-8 px-4 sm:px-6 sm:py-12 lg:max-w-8xl lg:grid-cols-2 lg:px-10">
      <div>
        <motion.h2
          className="text-customPurple800 text-5xl font-bold mb-3 sm:text-5xl"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          ¿Por qué elegirnos?
        </motion.h2>
        <motion.p
          className="mt-5 text-gray-700 text-lg leading-relaxed text-justify"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          Nuestra misión es entregar soluciones innovadoras y personalizadas para nuestros clientes. Nos enorgullece
          ofrecer servicios de alta calidad y acompañar a nuestros clientes en cada paso del camino hacia el éxito.
        </motion.p>
        <motion.dl
          className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="border-l-4 border-customPurple800 pl-4 flex items-center" variants={textVariants}>
              <div className="mr-3">
                <feature.icon className="h-10 w-10 text-customPurple800" aria-hidden="true" />
              </div>
              <div>
                <dt className="text-3xl font-bold text-gray-800">{feature.name}</dt>
                <dd className="mt-1 text-md text-gray-600">{feature.description}</dd>
              </div>
            </motion.div>
          ))}
        </motion.dl>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 lg:gap-10">
        <motion.div className="relative" variants={imageVariants} initial="hidden" animate={controls}>
          <Image
            src='/image/prueba.jpg'
            alt='Imagen uno'
            width={500}
            height={350}
            className='rounded-lg shadow-lg object-cover'
          />
        </motion.div>
        <motion.div className="relative" variants={imageVariants} initial="hidden" animate={controls}>
          <Image
            src='/image/prueba.jpg'
            alt='Imagen dos'
            width={500}
            height={350}
            className='rounded-lg shadow-lg object-cover'
          />
        </motion.div>
        <motion.div className="relative" variants={imageVariants} initial="hidden" animate={controls}>
          <Image
            src='/image/prueba.jpg'
            alt='Imagen tres'
            width={500}
            height={350}
            className='rounded-lg shadow-lg object-cover'
          />
        </motion.div>
        <motion.div className="relative" variants={imageVariants} initial="hidden" animate={controls}>
          <Image
            src='/image/prueba.jpg'
            alt='Imagen cuatro'
            width={500}
            height={350}
            className='rounded-lg shadow-lg object-cover'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PorQueElegirnos;
