"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  PiCertificateBold,
  PiChalkboardTeacherBold,
  PiBagSimpleFill,
} from "react-icons/pi";
import { FaPiggyBank } from "react-icons/fa6";
import { InView } from "react-intersection-observer";
import { GiTeacher } from "react-icons/gi";

const HoverDevCards = () => {
  return (
    <div className="p-4 mb-10 mt-10 max-w-full sm:max-w-screen-md lg:max-w-screen-xl mx-auto">
      <p className="text-3xl sm:text-5xl text-center font-bold mb-8 text-customPurple800 dark:text-customWhiteOcean">
        Beneficios de nuestros programas
      </p>
      <p className="text-base sm:text-lg text-center font-light text-gray-600 dark:text-customWhiteOcean mb-8">
        Nuestros programas están diseñados para brindarte las herramientas
        necesarias que impulsen tu desarrollo profesional. Ofrecemos
        certificaciones acreditadas, acceso a una bolsa de trabajo exclusiva y
        el apoyo constante de docentes especializados. Estos beneficios están
        pensados para facilitar tu camino hacia el éxito en el competitivo
        mercado laboral.
      </p>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Certificaciones"
          subtitle="Respaldo oficial de la Universidad Nacional de Piura"
          Icon={PiCertificateBold}
          index={0}
        />
        <Card
          title="Docentes Ejecutivos"
          subtitle="Gerentes y Consultores de las empresas más destacadas de nuestro país."
          Icon={GiTeacher}
          index={1}
        />
        <Card
          title="Bolsa de Trabajo"
          subtitle="Accede a más oportunidades laborales y cursos de empleabilidad."
          Icon={PiBagSimpleFill}
          index={2}
        />
        <Card
          title="Precios cómodos"
          subtitle="Nuestros cursos ayudan a estudiantes y al público en general a mejorar sus habilidades, ofreciendo precios accesibles."
          Icon={FaPiggyBank}
          index={3}
        />
      </div>
    </div>
  );
};

const Card = ({
  title,
  subtitle,
  Icon,
  index,
}: {
  title: string;
  subtitle: string;
  Icon: React.ElementType;
  index: number;
}) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            translateX: index % 2 === 0 ? -50 : 50,
            translateY: -50,
          }}
          animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="w-full p-4 rounded border-[1px] border-slate-300 dark:border-customOscure relative overflow-hidden group bg-white dark:bg-transparent"
        >
          <div className="absolute inset-0 bg-[#4b203d] dark:bg-black translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
          <Icon className="absolute z-10 -top-8 -right-8 text-5xl sm:text-7xl lg:text-9xl text-slate-300 group-hover:text-customOrange/50 group-hover:rotate-12 transition-transform duration-300" />
          <Icon className="mb-2 text-4xl sm:text-5xl text-customPurple800 dark:text-customOrange group-hover:text-customOrange transition-colors relative z-10 duration-300" />
          <h3 className="font-extrabold text-md sm:text-lg text-slate-600 dark:text-customWhiteOcean group-hover:text-white relative z-10 duration-300">
            {title}
          </h3>
          <p className="text-slate-500 dark:text-customWhiteOcean group-hover:text-violet-200 relative z-10 duration-300">
            {subtitle}
          </p>
        </motion.div>
      )}
    </InView>
  );
};

export default HoverDevCards;
