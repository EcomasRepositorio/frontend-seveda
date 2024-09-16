import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useEffect, useState, useMemo } from "react";

// Función para convertir coordenadas cartesianas a esféricas
const cartesianToSpherical = (x: number, y: number, z: number) => {
  const radius = Math.sqrt(x * x + y * y + z * z);
  const theta = Math.acos(z / radius); // ángulo con respecto al eje z
  const phi = Math.atan2(y, x); // ángulo en el plano xy
  return { radius, theta, phi };
};

// Función para convertir coordenadas esféricas a cartesianas
const sphericalToCartesian = (radius: number, theta: number, phi: number) => {
  const x = radius * Math.sin(theta) * Math.cos(phi);
  const y = radius * Math.sin(theta) * Math.sin(phi);
  const z = radius * Math.cos(theta);
  return [x, y, z];
};

// Componente para la rotación del globo
const RotatingGlobe = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const texture = useMemo(() => new THREE.TextureLoader().load("/textures/terra12.jpg"), []); // Carga de textura optimizada

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.004; // Ajusta este valor para cambiar la velocidad de rotación
    }
  });

  return (
    <mesh ref={globeRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

// Función para crear líneas curvas que simulan rutas, siguiendo la curvatura del globo
const FlightLine = ({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) => {
  const startSpherical = cartesianToSpherical(...start);
  const endSpherical = cartesianToSpherical(...end);

  // Generar un punto de control intermedio en la curvatura de la esfera
  const midTheta = (startSpherical.theta + endSpherical.theta) / 2;
  const midPhi = (startSpherical.phi + endSpherical.phi) / 2;
  const controlPoint = sphericalToCartesian(
    startSpherical.radius + 0.1, // Puedes ajustar este valor para controlar qué tan alta es la curva
    midTheta,
    midPhi
  );

  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(...start), // Punto de inicio
    new THREE.Vector3(...controlPoint), // Punto de control en la curvatura de la esfera
    new THREE.Vector3(...end), // Punto de destino
  ]);

  const points = curve.getPoints(1000); // Número de puntos a lo largo de la curva
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line>
     
    </line>
  );
};

// Componente principal del globo
const Globe = () => {
  const [isClient, setIsClient] = useState(false);
  const [size, setSize] = useState({ width: 600, height: 600 }); // Estado para controlar el tamaño del Canvas

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
    <Canvas
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        margin: "0 auto",
      }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <OrbitControls enableZoom={false} />
      <Stars radius={300} depth={50} count={5000} factor={15} fade />

      <ambientLight intensity={3.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <RotatingGlobe />

      {/* Añadiendo algunas líneas de rutas (curvas) que siguen la curvatura */}
      <FlightLine start={[2, 1, 1]} end={[-1, -1, 0]} />
      <FlightLine start={[-1.5, 1, 1]} end={[1.5, -1, -1]} />
    </Canvas>
  );
};

export default Globe;
