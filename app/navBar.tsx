"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { useTheme } from "next-themes";
import NavLinks from "./nav-links";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/solid";
const Header = () => {
  const { theme, resolvedTheme } = useTheme();
  const [imageSrc, setImageSrc] = useState("/image/ecomas.png"); // imagen por defecto

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  useEffect(() => {
    // actualiza la imagen cuando el tema cambia
    setImageSrc(resolvedTheme === "dark" ? "/image/ECOMAS-HORIZONTAL.png" : "/image/ecomas.png");
  }, [resolvedTheme]);
  const handleMenuItemClick = () => {
    // Cierra el menú al hacer clic en un elemento
    setIsMenuOpen(false);
  };
  const menuItems = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Diplomados",
      href: "/diplomados",
    },
    {
      name: "Certificados",
      href: "/certs",
    },
    {
      name: "Contáctanos",
      href: "/#contacto",
    },
  ];

  return (
    <>
      <Navbar
        shouldHideOnScroll
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth={"full"}
        position="sticky"
        className="z-0 hidden md:block  bg-white dark:bg-blackblue"
      >
        <Link href="/">
          <Image
            src={imageSrc}
            alt="Imagen banner"
            width={210}
            height={150}
            className="hidden md:block "
          />

        </Link>
        <NavbarContent justify="center">
          <NavbarItem>
            <Link href="/certs" passHref legacyBehavior>
              <Button className="bg-blue-100 border-blue-200 border text-blackblue hover:scale-105">
                Ver Certificados
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              target="_blank"
              as={Link}
              className="bg-blue-100 border-blue-200 border text-blackblue hover:scale-105"
              href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3"
            >
              Aula Virtual
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="z-20 bg-blue-100 dark:bg-blackblue2 "
        position="sticky"
      >
        <NavbarContent className="sm:hidden w-full" justify="center">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
          <NavbarBrand>
            <div className="flex items-center justify-between w-full">
              <Link href="/">
                <Image
                  src={imageSrc}
                  alt="Imagen banner"
                  width={130}
                  height={150}
                  className="block md:hidden mr-6"
                />
              </Link>
              <div>
                <Link href="/certs">
                  <button
                    color="primary"
                    className="bg-primaryblue mr-2 text-white py-3  px-1 rounded  text-xs"
                  >
                    Certificados
                  </button>
                </Link>
                <a
                  href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3"
                  target="_blank"
                >
                  <button
                    color="primary"
                    className="bg-primaryblue  text-white py-3 px-1 rounded text-xs "
                  >
                    Aula Virtual
                  </button>
                </a>
              </div>
            </div>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4 " justify="end">
          <NavLinks />
          <NavbarContent justify="end">
            <Link href="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 512 512"
                className="w-6 h-6 text-primaryblue dark:text-white transition-colors duration-300 ease-in-out hover:text-primaryblue dark:hover:text-blue-100"
              >
                {" "}
                <g fill="currentColor">
                  {" "}
                  <g>
                    {" "}
                    <path d="M360.1 467.2H47.4C20.3 467.2 1 440.8 9.3 415l32.9-102.8c10.6-33 46.7-50.1 78.9-37.6 21.4 8.3 48.9 14.8 82.6 14.8s61.2-6.5 82.6-14.8c1.2-.5 2.5-.9 3.8-1.3v2.5c0 59.1 43.9 108.1 100.8 116.1l7.4 23.1c8.2 25.8-11 52.2-38.2 52.2z"></path>{" "}
                    <circle cx="203.8" cy="147.9" r="103.1"></circle>{" "}
                    <ellipse
                      cx="407.3"
                      cy="275.8"
                      rx="24.1"
                      ry="24.1"
                      transform="rotate(-67.48 407.432 275.65)"
                    ></ellipse>{" "}
                    <path d="M407.3 178.5c-53.7 0-97.3 43.6-97.3 97.3s43.6 97.3 97.3 97.3 97.3-43.5 97.3-97.3-43.5-97.3-97.3-97.3zm55.4 97.2c0 3.6-.4 7.2-1 10.6l9.1 5.2c4.6 2.7 6.2 8.6 3.5 13.2L466 319c-2.7 4.6-8.6 6.2-13.2 3.5l-9.1-5.2c-5.3 4.7-11.6 8.3-18.4 10.6v10.5c0 5.3-4.3 9.7-9.7 9.7h-16.5c-5.3 0-9.7-4.3-9.7-9.7v-10.5c-6.9-2.4-13.1-6-18.4-10.6l-9.1 5.2c-4.6 2.7-10.5 1.1-13.2-3.5l-8.3-14.3c-2.7-4.6-1.1-10.5 3.5-13.2l9.1-5.2c-.7-3.5-1-7-1-10.6s.4-7.2 1-10.6l-9.1-5.2c-4.6-2.7-6.2-8.6-3.5-13.2l8.3-14.3c2.7-4.6 8.6-6.2 13.2-3.5l9.1 5.2c5.3-4.7 11.6-8.3 18.4-10.6V213c0-5.3 4.3-9.7 9.7-9.7h16.5c5.3 0 9.7 4.3 9.7 9.7v10.5c6.9 2.4 13.1 6 18.4 10.6l9.1-5.2c4.6-2.7 10.5-1.1 13.2 3.5l8.3 14.3c2.7 4.6 1.1 10.5-3.5 13.2l-9.1 5.2c.6 3.4 1 7 1 10.6z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </svg>
            </Link>
            <ThemeSwitcher />
          </NavbarContent>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((link, index) => (
            <NavbarMenuItem key={index}>
              <Link
                color="primary"
                href={link.href}
                className="text-lg mr-4"
                onClick={handleMenuItemClick} // Agrega un manejador de clic para cerrar el menú
              >
                <button className="w-full bg-primaryblue  text-white  py-2 px-6 rounded">
                  {link.name}
                </button>
              </Link>
            </NavbarMenuItem>
          ))}
          <ThemeSwitcher />
          <Link href="/login" passHref legacyBehavior>
            <UserCircleIcon
              width={40}
              height={40}
              onClick={handleMenuItemClick}
            ></UserCircleIcon>
          </Link>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Header;
