import React, { useState, useEffect } from "react";
import ScrollAnimation from "./scrollAnimation";
import { IoLogoWhatsapp } from "react-icons/io";

const CourseCarousel = () => {
  const courses = [
    {
      id: 1,
      image: "/image/SSOMA.webp",
      title: "Arqueología en proyectos viales",
      description: "Curso sobre la integración de la arqueología en el diseño y desarrollo de proyectos viales.",
      link: "#",
    },
    {
      id: 2,
      image: "/image/SSOMA.webp",
      title: "Sistemas de riego por goteo",
      description: "Curso que explora el diseño y aplicación de sistemas eficientes de riego por goteo en agricultura y jardin.",
      link: "#",
    },
    {
      id: 3,
      image: "/image/SSOMA.webp",
      title: "Sistemas de riego por aspersión",
      description:
        "Curso sobre el diseño y uso eficiente de sistemas de riego por aspersión.",
      link: "#",
    },
    {
      id: 4,
      image: "/image/SSOMA.webp",
      title: "Gestion y manejo de residuos sólidos municipales",
      description: "Este curso aborda estrategias y técnicas para gestionar eficazmente los residuos sólidos en entornos urbanos, incluyendo temas como reciclaje, tratamiento de residuos y participación comunitaria.",
      link: "#",
    },
    {
      id: 5,
      image: "/image/SSOMA.webp",
      title: "Supervisor SSOMA",
      description: "Curso que prepara a los supervisores en seguridad, salud ocupacional y medio ambiente (SSOMA) para la gestión efectiva en entornos laborales.",
      link: "#",
    },
    {
      id: 6,
      image: "/image/SSOMA.webp",
      title: "Monitoreo de la calidad de agua",
      description: "Curso sobre técnicas y métodos para monitorear la calidad del agua en diferentes contextos ambientales y aplicaciones.",
      link: "#",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const slideInterval = setInterval(() => {
        nextSlide();
      }, 4000); // Mueve el carrusel cada 4 segundos

      return () => clearInterval(slideInterval); // Limpia el intervalo al desmontar
    }
  }, [currentSlide, isPaused]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? courses.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === courses.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div>
      <ScrollAnimation>
        <div className="bg-[url('/image/purple.jpg')] fade-in-right mx-auto max-w-screen-xl bg-center bg-fixed to-transparent rounded-lg mt-10">
          {/* ... */}
          <div className=" px-2 p-3 md:p-8 transform rounded-lg mx-auto max-w-screen-xl">
            <h2 className="text-blue-50 text-4xl font-extrabold mb-1 text-center">
              Nuestros Cursos
            </h2>
          </div>
        </div>
      </ScrollAnimation>
      <div
        className="relative w-full max-w-6xl mx-auto py-8"
        onMouseEnter={() => setIsPaused(true)} // Pausa al pasar el cursor
        onMouseLeave={() => setIsPaused(false)} // Reanuda al quitar el cursor
      >
        <div className="flex items-center justify-center space-x-4">
          {/* Botón de navegación izquierda */}
          <button
            onClick={prevSlide}
            className="text-gray-500 dark:text-customOrange text-4xl bg-transparent px-2 py-1 rounded-full"
          >
            ❮
          </button>

          {/* Carrusel */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform ease-out duration-700"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                opacity: "0.85",
              }} // Efecto de fade
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="min-w-full px-4 py-6 sm:p-10 flex flex-col sm:flex-row items-center justify-around bg-gray-100 dark:bg-blackblue2 rounded-lg transition-opacity duration-700"
                >
                  {/* Imagen del curso */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-96 h-40 sm:h-60 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                  />

                  {/* Información del curso */}
                  <div className="mt-4 sm:ml-4 sm:mt-0 flex flex-col items-center justify-center text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-customWhiteOcean hover:text-blue-600 transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 dark:text-customWhiteOcean hover:text-gray-800 transition-colors duration-300">
                      {course.description}
                    </p>
                    <a
                      href={course.link}
                      className="mt-4 text-sm sm:text-base w-full max-w-xs text-center text-white bg-customPurple800 dark:bg-customOrange border-1 dark:border-customOrange px-3 py-2 rounded-lg hover:bg-customOrange dark:hover:bg-customPurple800 hover:scale-105 transform transition-all duration-300 flex justify-center items-center"
                    >
                      Más Información
                      <img
                        src="/icons/logo_1.svg"
                        alt="icono_whatsapp"
                        className="w-8 ml-2"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botón de navegación derecha */}
          <button
            onClick={nextSlide}
            className="text-gray-500 dark:text-customOrange text-4xl bg-transparent px-2 py-1 rounded-full "
          >
            ❯
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-4 space-x-2">
          {courses.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`cursor-pointer w-2 h-2 rounded-full ${
                currentSlide === index
                  ? "bg-customPurple800 dark:bg-customOrange"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCarousel;
