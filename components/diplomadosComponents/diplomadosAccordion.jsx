import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { FaWhatsapp, FaBook } from "react-icons/fa6";

const DashboardSkeleton = dynamic(() => import("@/components/home/skeletons"));

const Curso = ({ curso }) => {
  function toRoman(num) {
    const romanNumerals = [
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" },
    ];

    let result = "";

    for (const pair of romanNumerals) {
      while (num >= pair.value) {
        result += pair.numeral;
        num -= pair.value;
      }
    }

    return result;
  }

  return (
    <div className="text-gray-600 body-font overflow-hidden mb-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <Suspense fallback={<DashboardSkeleton />}>
            <Image
              src={curso.imagen}
              alt="ecommerce"
              width={800}
              height={800}
              className="lg:w-1/2 lg:h-auto object-cover object-center rounded-lg"
            />
          </Suspense>
          <div className="lg:w-1/2 lg:pl-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 dark:text-white tracking-widest mt-4 sm:mt-2 md:mt-2 lg:mt-0">
              {curso.area}
            </h2>
            <h1 className="text-primaryblue dark:text-customOrange text-3xl title-font font-medium mb-4">
              {curso.titulo}
            </h1>
            <Accordion defaultExpandedKeys={["1"]}>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                subtitle=""
                title={
                  <h2 className="text-blackblue dark:text-white">
                    Detalles del diplomado
                  </h2>
                }
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold text-blackblue dark:text-white">
                      Fecha de inicio:{" "}
                      <span className="font-normal dark:text-white">
                        {curso.fechaInicio}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-blackblue dark:text-white">
                      Modalidad:{" "}
                      <span className="font-normal dark:text-white">
                        {curso.modalidad}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-blackblue dark:text-white">
                      Tiempo de duración:{" "}
                      <span className="font-normal dark:text-white">
                        {curso.duracion}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-blackblue dark:text-white">
                      Horas del curso:{" "}
                      <span className="font-normal dark:text-white">
                        {curso.horas}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex">
                  <a href="https://wa.me/51921818181" target="_blank">
                    <button
                      className="flex items-center justify-center px-6 py-3 rounded-full transition-colors duration-100 ease-in-out
      bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg transform hover:scale-105 hover:shadow-xl dark:from-green-600 dark:to-green-800 dark:text-gray-200"
                    >
                      <FaWhatsapp className="text-2xl mr-2" />
                      Inscribirse
                    </button>
                  </a>

                  <a href="https://wa.me/51921818181" target="_blank">
                    <button
                      className="flex items-center justify-center px-6 py-3 rounded-full transition-colors duration-300 ease-in-out
      bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg transform hover:scale-105 hover:shadow-xl dark:from-blue-600 dark:to-blue-800 dark:text-gray-200 ml-4"
                    >
                      <FaBook className="text-2xl mr-2" />
                      Plan de estudios
                    </button>
                  </a>
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                subtitle={<span></span>}
                title={
                  <h2 className="text-blackblue dark:text-white">
                    ¿A quiénes está dirigido este diplomado?
                  </h2>
                }
              >
                <div className="text-gray-800 dark:text-white">
                  {curso.descripcion}
                </div>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                subtitle=""
                title={
                  <h2 className="text-blackblue dark:text-white">
                    ¿Con qué módulos cuenta el diplomado?
                  </h2>
                }
              >
                <ul className="list-disc pl-5 text-gray-800 dark:text-white">
                  {curso.modulos.map((modulo, moduloIndex) => (
                    <li key={moduloIndex}>
                      <span className="font-bold">
                        MÓDULO {toRoman(moduloIndex + 1)}:{" "}
                      </span>
                      {modulo}
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curso;
