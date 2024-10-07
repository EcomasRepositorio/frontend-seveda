import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import ScrollAnimation from "./scrollAnimation";

export default function App() {
  return (
    <div>
      <ScrollAnimation>
        <div
          className="
      bg-[url('/image/purple.jpg')] dark:bg-[url('/image/bg_dark.webp')] 
      fade-in-right mx-auto max-w-screen-xl bg-center bg-fixed to-transparent 
      rounded-lg mt-10"
        >
          <div className="px-2 p-3 md:p-8 transform rounded-lg mx-auto max-w-screen-xl">
            <h2 className="text-blue-50 text-4xl font-extrabold mb-1 text-center">
              Nuestros Diplomados
            </h2>
          </div>
        </div>
      </ScrollAnimation>

      <div className="justify-center gap-2 grid grid-cols-12 grid-rows-2 px-2 mb-10">
        {[
          {
            title: "Arqueología en proyectos viales",
            imgSrc: "/courses/arqueologia.jpg",
            icon: "/icon/haddd.svg",
            darkIcon: "/icon/had_dark.svg",
          },
          {
            title: "Sistemas de riego por goteo",
            imgSrc: "/courses/goteo.jpg",
            icon: "/icon/haddd.svg",
            darkIcon: "/icon/had_dark.svg",
          },
          {
            title: "Sistemas de riego por aspersión",
            imgSrc: "/courses/aspercion.jpg",
            icon: "/icon/haddd.svg",
            darkIcon: "/icon/had_dark.svg",
          },
          {
            title: "Gestión y manejo de residuos sólidos municipales",
            imgSrc: "/courses/solidos.jpg",
            icon: "/icon/haddd.svg",
            darkIcon: "/icon/had_dark.svg",
          },
          {
            title: "Supervisor SSOMA",
            imgSrc: "/courses/ssoma.jpg",
            icon: "/icon/haddd.svg",
            darkIcon: "/icon/had_dark.svg",
          },
          {
            title: "Monitoreo de la calidad de agua",
            imgSrc: "/courses/agua.jpg",
            icon: "/icon/haddd.svg",
            darkIcon: "/icon/had_dark.svg",
          },
        ].map(({ title, imgSrc, icon, darkIcon }) => (
          <Card key={title} className="col-span-12 sm:col-span-4 h-[300px]">
            <div className="relative h-full">
              <Image
                isZoomed
                alt="Card background"
                className="w-full h-full object-cover"
                src={imgSrc}
              />
              <CardFooter className="absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    isZoomed
                    alt="Breathing app icon"
                    className="rounded-full w-7 h-7 bg-black dark:hidden"
                    src={icon}
                  />
                  <Image
                    isZoomed
                    alt="Breathing app icon"
                    className="rounded-full w-7 h-7 bg-black hidden dark:block"
                    src={darkIcon}
                  />
                  <div className="flex flex-col">
                    <p className="text-tiny text-white">Curso</p>
                    <p className="text-xl font-light text-white">{title}</p>
                  </div>
                </div>
                <Button
                  className="bg-[#EC407A] text-customWhiteOcean dark:bg-[#FB8B24]"
                  radius="full"
                  size="sm"
                >
                  Más Información
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
