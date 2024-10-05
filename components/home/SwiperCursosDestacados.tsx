import React, { useState, useEffect } from "react";
import ScrollAnimation from "./scrollAnimation";

const CourseCarousel = () => {
  const courses = [
    {
      id: 1,
      image: "/image/SSOMA.webp",
      title: "Ingeniería de Software",
      description: "Aprende los fundamentos del desarrollo de software.",
      link: "#",
    },
    {
      id: 2,
      image: "/image/SSOMA.webp",
      title: "Ciencia de Datos",
      description: "Domina el análisis de datos y la inteligencia artificial.",
      link: "#",
    },
    {
      id: 3,
      image: "/image/SSOMA.webp",
      title: "Marketing Digital",
      description:
        "Conviértete en un experto en estrategias de marketing online.",
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
            className="text-white bg-gray-800 px-2 py-1 rounded-full hover:bg-gray-700"
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
                  className="min-w-full px-4 py-6 sm:p-10 flex flex-col sm:flex-row items-center justify-around bg-gray-100 rounded-lg transition-opacity duration-700"
                >
                  {/* Imagen del curso */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 sm:h-60 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                  />

                  {/* Información del curso */}
                  <div className="mt-4 sm:ml-4 sm:mt-0 flex flex-col items-center sm:items-start justify-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 text-center sm:text-left">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 hover:text-gray-800 transition-colors duration-300 text-center sm:text-left">
                      {course.description}
                    </p>
                    <a
                      href={course.link}
                      className="mt-4 inline-block text-sm sm:text-base text-white bg-blue-600 px-3 py-2 rounded-lg hover:bg-blue-500 hover:scale-105 transform transition-all duration-300"
                    >
                      Ver Curso
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botón de navegación derecha */}
          <button
            onClick={nextSlide}
            className="text-white bg-gray-800 px-2 py-1 rounded-full hover:bg-gray-700"
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
              className={`cursor-pointer w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCarousel;
