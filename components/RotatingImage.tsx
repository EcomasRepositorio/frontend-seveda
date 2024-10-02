"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import reload_img from "@/public/terra/planeta2.png"; // Imagen principal rotatoria
import sun_img from "@/public/image/sun.png"; // Imagen del sol
import moon_img from "@/public/image/moon_3d.png"; // Imagen de la luna

const RotatingImageComponent: React.FC = () => {
  const [reloadClassName, setReloadClassName] = useState<HTMLImageElement | null>(null);

  // Obtener la referencia a la imagen cuando el componente se monta
  useEffect(() => {
    const reload = document.getElementById('reload') as HTMLImageElement;
    setReloadClassName(reload);
  }, []);

  // Función que maneja la rotación en base al scroll
  const scrollRotate = () => {
    if (reloadClassName) {
      reloadClassName.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
    }
  };

  // Añadir el evento de scroll cuando el componente esté montado y removerlo al desmontar
  useEffect(() => {
    if (reloadClassName !== null) {
      window.addEventListener('scroll', scrollRotate);
    }
    return () => {
      window.removeEventListener('scroll', scrollRotate);
    };
  }, [reloadClassName]);

  return (
    <div className="p-relative flex justify-center items-center h-full">
      {/* Contenedor para las imágenes flotantes (sol y luna) */}
      <div className="relative flex justify-center ">
        {/* Imagen del sol para el modo claro */}
       
        <Image
          className="dark:hidden animate-bounce"
          src={sun_img}
          alt="Globo"
          width={130}
          height={130}
          style={{
            position: "absolute",
            top: "10px",
            left: "10%",
            transform: "translateX(-50%)",
          }}
        />
        
        {/* Imagen de la luna para el modo oscuro */}
        <Image
          className="hidden dark:block animate-bounce"
          src={moon_img}
          alt="Globo"
          width={130}
          height={130}
          style={{
            position: "absolute",
            top: "10px",
            left: "10%",
            transform: "translateX(-50%)",
          }}
        />
          <Image id="reload" src={reload_img} alt="scrolling planet" className=" w-10/12 h-full " />
         
      </div>
      
      {/* Imagen principal que rota con el scroll */}
    
      
    </div>
  );
};

export default RotatingImageComponent;