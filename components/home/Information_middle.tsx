import React from "react";
import { DiAndroid } from "react-icons/di";
import Lottie from "react-lottie";
import {
  PiCertificate,
  PiChalkboardTeacherFill,
  PiBooksBold,
} from "react-icons/pi";
import { TbClockHour9 } from "react-icons/tb";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importamos el hook
import Image from "next/image";

function Header() {
  // Configuración de la animación Lottie

  // Utilizamos el hook `useInView` para detectar cuando el componente está visible
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <header className="bg-transparent py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Contenedor de la animación Lottie */}
        <motion.div
          ref={ref} // Asignamos el ref para la visibilidad
          initial={{ opacity: 0, translateX: -50, translateY: -50 }}
          animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-1/2 p-4"
        >
          <Image
            src="/image/middle.png" // Ruta de la imagen
            alt="Descripción de la imagen" // Descripción de la imagen
            width={500} // Ancho de la imagen
            height={300} // Alto de la imagen
            className="my-custom-class" // Clases adicionales de Tailwind o CSS
          />
        </motion.div>

        {/* Contenido de texto a la derecha */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, translateX: 50, translateY: 50 }}
          animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full md:w-1/2 mt-8 md:mt-0 p-4"
        >
          <h1 className="text-5xl font-bold  text-customPurple800 dark:text-customWhiteOcean mb-4">
            Servicios Educativos en Línea
          </h1>
          <p className="text-gray-600 font-light dark:text-customWhiteOcean mb-6">
            Descubre una plataforma de cursos en línea adaptada a tus
            necesidades, desde cualquier lugar y en cualquier momento
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center text-lg font-light text-gray-600 dark:text-customWhiteOcean">
              <PiCertificate className="text-customOrange text-2xl mr-2" />
              Certificaciones Acreditadas
            </li>
            <li className="flex items-center text-lg font-light text-gray-600 dark:text-customWhiteOcean">
              <PiChalkboardTeacherFill className="text-customOrange text-2xl mr-2" />
              Asistencia de Tutores Profesionales
            </li>
            <li className="flex items-center text-lg font-light text-gray-600 dark:text-customWhiteOcean">
              <PiBooksBold className="text-customOrange text-2xl mr-2" />
              Material de Estudio Personalizado
            </li>
            <li className="flex items-center text-lg font-light text-gray-600 dark:text-customWhiteOcean">
              <TbClockHour9 className="text-customOrange text-2xl mr-2" />
              Acceso 24/7 a Materiales de Estudio
            </li>
          </ul>
          <a
            href="/"
            className="inline-block bg-customPurple800 dark:bg-customOrange text-white px-6 py-3 rounded-full shadow hover:bg-customOrange dark:hover:bg-customPurple800 transition duration-300"
          >
            Más Información
          </a>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
