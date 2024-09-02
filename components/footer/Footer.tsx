"use client";
import React from "react";
import {
  BookOpenIcon,
  PhoneIcon,
  AtSymbolIcon,
  ClockIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-blue-100 dark:bg-blackblue2  items-center px-4 md:px-0"
    >
      <div className="pt-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-2 gap-2 md:gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
            <div className="col-span-full lg:col-span-2">
              <div className="mb-4 lg:-mt-2">
                <Link href="/">
                  <Image
                    src="/image/ECOMAS-HORIZONTAL.png"
                    alt="Imagen banner"
                    width={300}
                    height={150}
                    className="hidden dark:block"
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/image/ecomas.png"
                    alt="Imagen banner"
                    width={310}
                    height={150}
                    className="block dark:hidden"
                  />
                </Link>
              </div>

              <p className="mb-2 text-darkblue dark:text-white  sm:pr-8">
                Información de contacto:
              </p>
              <div className="gap-4">
                <div className="flex items-center text-darkblue dark:text-white ">
                  <PhoneIcon className="w-5 h-5 mr-2 text-primaryblue dark:text-white " />
                  <span>
                    Número de celular:{" "}
                    <a target="_blank" href="https://wa.me/51921818181">
                      +51921818181
                    </a>
                  </span>
                </div>

                <div className="flex items-center text-darkblue dark:text-white ">
                  <AtSymbolIcon className="w-5 h-5 mr-2 text-primaryblue dark:text-white" />
                  <span>
                    Correo electrónico: <a>contacto@ecomas.pe</a>
                  </span>
                </div>

                <div className="flex items-center text-darkblue dark:text-white ">
                  <ClockIcon className="w-5 h-5 mr-2 text-primaryblue dark:text-white" />
                  <span>Horario de atención: Jueves a Martes, 9am - 6pm</span>
                </div>
              </div>

              <div className="flex gap-4 mt-3">
                <a
                  href="https://web.facebook.com/ecomascyc"
                  target="_blank"
                  className="text-primaryblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-[#37753a] active:text-gray-600"
                >
                  <svg
                    className="h-8 w-8 hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256s114.6 256 256 256c1.5 0 3 0 4.5-.1V312.7h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5C433.7 471.4 512 372.9 512 256z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.tiktok.com/@ecomas_cyc"
                  target="_blank"
                  className="text-primaryblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-[#de6c29] active:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-8 w-8 hover:scale-110"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    imageRendering="optimizeQuality"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 0c141.39 0 256 114.61 256 256S397.39 512 256 512 0 397.39 0 256 114.61 0 256 0zm57.5 106.01c.01 4.58 1.36 70.83 70.87 74.96 0 19.1.02 32.95.02 51.18-5.26.3-45.76-2.64-70.97-25.12l-.08 99.64c.96 69.16-49.93 111.24-116.46 96.7-114.71-34.31-76.59-204.44 38.59-186.24 0 54.93.03-.01.03 54.93-47.58-7-63.5 32.58-50.85 60.93 11.5 25.8 58.88 31.39 75.41-5.01 1.87-7.12 2.8-15.25 2.8-24.37V105.76z"></path>
                  </svg>
                </a>

                <a
                  href="https://wa.me/51921818181"
                  target="_blank"
                  className="text-primaryblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-[#37753a]  active:text-gray-600"
                >
                  <svg
                    className="h-8 w-8 hover:scale-110"
                    fill="currentColor"
                    x="0"
                    y="0"
                    enableBackground="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path d="M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0zm148.96 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744-3.776 4.352-7.36 7.68-11.136 12.352-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/ecomas_cyc/"
                  target="_blank"
                  className="text-primaryblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-[#de6c29]  active:text-gray-600"
                >
                  <svg
                    className="h-8 w-8 hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M305 256c0 27.063-21.938 49-49 49s-49-21.938-49-49 21.938-49 49-49 49 21.938 49 49zm0 0"></path>
                    <path d="M370.594 169.305a45.546 45.546 0 00-10.996-16.903 45.514 45.514 0 00-16.903-10.996c-5.18-2.011-12.96-4.406-27.293-5.058-15.504-.707-20.152-.86-59.402-.86-39.254 0-43.902.149-59.402.856-14.332.656-22.118 3.05-27.293 5.062a45.483 45.483 0 00-16.903 10.996 45.572 45.572 0 00-11 16.903c-2.011 5.18-4.406 12.965-5.058 27.297-.707 15.5-.86 20.148-.86 59.402 0 39.25.153 43.898.86 59.402.652 14.332 3.047 22.114 5.058 27.293a45.563 45.563 0 0010.996 16.903 45.514 45.514 0 0016.903 10.996c5.18 2.015 12.965 4.41 27.297 5.062 15.5.707 20.144.856 59.398.856 39.258 0 43.906-.149 59.402-.856 14.332-.652 22.118-3.047 27.297-5.062a48.68 48.68 0 0027.899-27.899c2.011-5.18 4.406-12.96 5.062-27.293.707-15.504.856-20.152.856-59.402 0-39.254-.149-43.902-.856-59.402-.652-14.332-3.047-22.118-5.062-27.297zM256 331.485c-41.691 0-75.488-33.794-75.488-75.485s33.797-75.484 75.488-75.484c41.688 0 75.484 33.793 75.484 75.484S297.688 331.484 256 331.484zm78.469-136.313c-9.742 0-17.64-7.899-17.64-17.64s7.898-17.641 17.64-17.641 17.64 7.898 17.64 17.64c-.004 9.742-7.898 17.64-17.64 17.64zm0 0"></path>
                    <path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm146.113 316.605c-.71 15.649-3.199 26.333-6.832 35.684a75.164 75.164 0 01-42.992 42.992c-9.348 3.633-20.035 6.117-35.68 6.832-15.675.715-20.683.887-60.605.887-39.926 0-44.93-.172-60.61-.887-15.644-.715-26.331-3.199-35.68-6.832a72.018 72.018 0 01-26.038-16.957 72.044 72.044 0 01-16.953-26.035c-3.633-9.348-6.121-20.035-6.832-35.68-.723-15.68-.891-20.687-.891-60.609s.168-44.93.887-60.605c.71-15.649 3.195-26.332 6.828-35.684a72.013 72.013 0 0116.96-26.035 72.003 72.003 0 0126.036-16.957c9.352-3.633 20.035-6.117 35.684-6.832C211.07 109.172 216.078 109 256 109s44.93.172 60.605.89c15.649.712 26.332 3.196 35.684 6.825a72.061 72.061 0 0126.04 16.96 72.027 72.027 0 0116.952 26.036c3.637 9.352 6.121 20.035 6.836 35.684.715 15.675.883 20.683.883 60.605s-.168 44.93-.887 60.605zm0 0"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-darkblue dark:text-white">
                Nuestra Empresa
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    href="/"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Inicio
                  </Link>
                </div>

                <div>
                  <Link
                    href="/diplomados"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Diplomados
                  </Link>
                </div>

                <div>
                  <Link
                    href="/certs"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Certificados
                  </Link>
                </div>

                <div>
                  <Link
                    href="/#contacto"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Contáctanos
                  </Link>
                </div>

                <div>
                  <Link
                    href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Aula virtual
                  </Link>
                </div>
              </nav>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-darkblue dark:text-white ">
                Legalidad
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Términos de servicio
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Política de privacidad
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Configuración de Cookies
                  </a>
                </div>
              </nav>
            </div>
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-darkblue dark:text-white ">
                Ayuda
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Contacto
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    Chat
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-darkblue dark:text-white dark:hover:text-blue-100 transition duration-100 hover:text-primaryblue active:text-primaryblue"
                  >
                    FAQ
                  </a>
                </div>
              </nav>
            </div>
            <div className="max-w-lg sm:mx-auto sm:text-center text-darkblue dark:text-white ">
              <p className="leading-relaxed mt-2 text-[15px]">
                "Gracias por visitarnos. En ECOMÁS, estamos comprometidos con tu
                desarrollo profesional. ¡Esperamos verte pronto!"
              </p>
              <div className="mt-2 sm:mt-0 sm:ml-2">
                {" "}
                {/* Contenedor para el texto y el botón */}
                <Link href="/book" passHref legacyBehavior>
                  <Button
                    className=" w-full md:mt-4 bg-primaryblue border-primaryblue border text-white dark:bg-blue-100 dark:text-blackblue"
                    color="primary"
                  >
                    <BookOpenIcon className=" w-8 h-8"></BookOpenIcon>
                    <p className="hidden:md-block">Libro de reclamaciones</p>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t py-8 text-center text-sm text-darkblue dark:text-white ">
            © 2024 - Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
