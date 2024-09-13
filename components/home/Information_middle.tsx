import React from "react";
import { DiAndroid } from "react-icons/di";
import Lottie from "react-lottie";
import animationData from "../../public/icons/animation02.json"; // Ruta del archivo de animación
import Image from "next/image";
import {
  PiCertificate,
  PiChalkboardTeacherFill,
  PiBooksBold,
} from "react-icons/pi";
import { TbClockHour9 } from "react-icons/tb";


function Header() {
  // Configuración de la animación Lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Animación cargada
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <header className="bg-transparent py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Animación Lottie reemplazando la imagen */}
        <div className="w-full md:w-1/2 p-4">
          <Lottie
            options={defaultOptions} // Configuración de la animación
            height={400} // Altura de la animación
            width={400} // Ancho de la animación
          />
        </div>

        {/* Contenido de texto a la derecha */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 p-4">
         

          <h1 className="text-5xl font-bold text-customPurple800 dark:text-customWhiteOcean mb-4">
            Servicios Educativos en Línea
          </h1>
          <p className="text-gray-600 dark:text-customWhiteOcean mb-6">
            Descubre una plataforma de cursos en línea adaptada a tus
            necesidades, desde cualquier lugar y en cualquier momento
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center text-lg text-gray-600 dark:text-customWhiteOcean">
              <PiCertificate className="text-customOrange text-2xl mr-2" />
              Certificaciones Acreditadas
            </li>
            <li className="flex items-center text-lg text-gray-600 dark:text-customWhiteOcean">
              <PiChalkboardTeacherFill className="text-customOrange text-2xl mr-2" />
              Asistencia de Tutores Profesionales
            </li>
            <li className="flex items-center text-lg text-gray-600 dark:text-customWhiteOcean">
              <PiBooksBold className="text-customOrange text-2xl mr-2" />
              Material de Estudio Personalizado
            </li>
            <li className="flex items-center text-lg text-gray-600 dark:text-customWhiteOcean">
              <TbClockHour9 className="text-customOrange text-2xl mr-2" />
              Acceso 24/7 a Materiales de Estudio
            </li>
          </ul>
          <a
            href="#"
            className="inline-block bg-customPurple800 text-white px-6 py-3 rounded-full shadow hover:bg-customOrange transition duration-300"
          >
            Mas Información
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
