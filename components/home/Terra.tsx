import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import RotatingModel from "@/components/home/RotatingModel"; // Importa el componente de modelo
import Image from "next/image";

const Globe = () => {
  const [isClient, setIsClient] = useState(false);
  const [size, setSize] = useState({ width: 600, height: 600 });

  useEffect(() => {
    setIsClient(typeof window !== "undefined");

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize({ width: 300, height: 300 });
      } else {
        setSize({ width: 600, height: 600 });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div style={{ width: `${size.width}px`, margin: "0 auto" }}>
      <div style={{ position: "relative" }}>
        <Image
          className="dark:hidden animate-bounce"
          src="/image/sun_3d.png"
          alt="Globo"
          width={130} // Cambia el tamaño según lo necesites
          height={130}
          style={{
            position: "absolute",
            top: "10px",
            left: "10%",
            transform: "translateX(-50%)",
          }}
        />
        <Image
          className="hidden dark:block animate-bounce"
          src="/image/moon_3d.png"
          alt="Globo"
          width={130} // Cambia el tamaño según lo necesites
          height={130}
          style={{
            position: "absolute",
            top: "10px",
            left: "10%",
            transform: "translateX(-50%)",
          }}
        />
      </div>
      <Canvas
        style={{ width: `${size.width}px`, height: `${size.height}px` }}
        camera={{ position: [0, 0, 5], fov: 54 }}
      >
        <OrbitControls enableZoom={false} />
        <Stars radius={400} depth={50} count={5000} factor={15} fade />
        <ambientLight intensity={5.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />

        {/* Añadir los modelos en posiciones específicas */}
        <RotatingModel path="/textures/texture1.glb" scale={1} position={[0, 0, 0]} />
    
      </Canvas>
    </div>
  );
};

export default Globe;
