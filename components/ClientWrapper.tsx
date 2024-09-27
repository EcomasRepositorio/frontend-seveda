"use client"; // Indica que este archivo es un componente de cliente

import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoandingScreen"; // Asegúrate de que la ruta sea correcta

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga durante 2 segundos antes de mostrar la página
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Ajusta el tiempo de carga (en milisegundos) como desees

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []);

  return <>{loading ? <LoadingScreen /> : children}</>;
};

export default ClientWrapper;
