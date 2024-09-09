"use client";
import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa";

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
  const [imageSrc, setImageSrc] = useState("/image/logo9.png"); // imagen por defecto

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  useEffect(() => {
    // actualiza la imagen cuando el tema cambia
    setImageSrc(
      resolvedTheme === "dark" ? "/image/logo_footer.png" : "/image/logo9.png"
    );
  }, [resolvedTheme]);
  const handleMenuItemClick = () => {
    // Cierra el menú al hacer clic en un elemento
    setIsMenuOpen(false);
  };
  const menuItems = [
    {
      name: "Inicios",
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
              <Button className="bg-customPurple800 dark:bg-blackblue2 border-blue-200 border text-white hover:scale-105">
                Ver Certificados
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              target="_blank"
              as={Link}
              className="bg-customOrange dark:bg-blackblue2 border-blue-200 border text-white hover:scale-105"
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
                    className="bg-customPurple800 dark:bg-blackblue2 border border-customWhiteOcean mr-2 text-customWhiteOcean py-3 px-1 rounded text-xs"
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
                    className="bg-customOrange dark:bg-blackblue2 text-customWhiteOcean py-3 px-1 rounded text-xs"
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
            <FaUser className="text-2xl text-customPurple800" />

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
                <button className="w-full bg-customPurple800 dark:bg-blackblue2 border border-customPurple800 dark:border-white text-white  py-2 px-6 rounded">
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
