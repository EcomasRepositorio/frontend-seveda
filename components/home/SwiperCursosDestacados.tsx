import React from "react";
import {
  Card,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

// Definir un tipo para las propiedades del componente CourseCard
interface CourseCardProps {
  icon: string;              // Propiedad icon debe ser una cadena
  darkIcon: string;          // Propiedad darkIcon debe ser una cadena
  courseTitle: string;       // Título del curso como cadena
  courseDescription: string; // Descripción del curso como cadena
  courseImage: string;       // Ruta de la imagen del curso
}

// Componente reutilizable para cada tarjeta del curso con tipos definidos
const CourseCard: React.FC<CourseCardProps> = ({
  icon,
  darkIcon,
  courseTitle,
  courseDescription,
  courseImage,
}) => {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px] relative">
      <CardFooter className="absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          {/* Icono para modo claro */}
          <Image
            isZoomed
            alt={`${courseTitle} icon`}
            className="rounded-full w-7 h-7 bg-black dark:hidden"
            src={icon}
          />
          {/* Icono para modo oscuro */}
          <Image
            isZoomed
            alt={`${courseTitle} icon`}
            className="rounded-full w-7 h-7 bg-black hidden dark:block"
            src={darkIcon}
          />
          {/* Información del curso */}
          <div className="flex flex-col">
            <p className="text-tiny text-white">Curso</p>
            <p className="text-lg font-light text-white">{courseDescription}</p>
          </div>
        </div>
        <Button
          className="bg-[#EC407A] text-customWhiteOcean w-40 dark:bg-[#FB8B24]"
          radius="full"
          size="sm"
        >
          Más Información
        </Button>
      </CardFooter>

      <Image
        isZoomed
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={courseImage}
      />
    </Card>
  );
};

// Componente principal que reutiliza CourseCard para cada curso
export default function App() {
  return (
    <div>
      <div
        className="
          bg-[url('/image/purple.jpg')] dark:bg-[url('/image/bg_dark.webp')] 
          fade-in-right mx-auto max-w-screen-xl bg-center bg-fixed to-transparent 
          rounded-lg mt-10"
      >
        <div className="px-2 p-3 md:p-8 transform rounded-lg mx-auto max-w-screen-xl mb-10">
          <h2 className="text-blue-50 text-4xl font-extrabold mb-1 text-center">
            Nuestros Cursos
          </h2>
        </div>
      </div>

      <div className="justify-center gap-2 grid grid-cols-12 grid-rows-2 px-2 mb-10">
        {/* Tarjetas del curso */}
        <CourseCard
          icon="/icon/haddd.svg"
          darkIcon="/icon/had_dark.svg"
          courseTitle="Arqueología"
          courseDescription="Arqueología en proyectos viales"
          courseImage="/courses/arqueologia.jpg"
        />
        <CourseCard
          icon="/icon/haddd.svg"
          darkIcon="/icon/had_dark.svg"
          courseTitle="Riego Goteo"
          courseDescription="Sistemas de riego por goteo"
          courseImage="/courses/goteo.jpg"
        />
        <CourseCard
          icon="/icon/haddd.svg"
          darkIcon="/icon/had_dark.svg"
          courseTitle="Riego Aspersión"
          courseDescription="Sistemas de riego por aspersión"
          courseImage="/courses/aspercion.jpg"
        />
        <CourseCard
          icon="/icon/haddd.svg"
          darkIcon="/icon/had_dark.svg"
          courseTitle="Residuos Sólidos"
          courseDescription="Gestión y manejo de residuos sólidos municipales"
          courseImage="/courses/solidos.jpg"
        />
        <CourseCard
          icon="/icon/haddd.svg"
          darkIcon="/icon/had_dark.svg"
          courseTitle="Supervisor SSOMA"
          courseDescription="Supervisor SSOMA"
          courseImage="/courses/ssoma.jpg"
        />
        <CourseCard
          icon="/icon/haddd.svg"
          darkIcon="/icon/had_dark.svg"
          courseTitle="Monitoreo Agua"
          courseDescription="Monitoreo de la calidad de agua"
          courseImage="/courses/agua.jpg"
        />
      </div>
    </div>
  );
}
