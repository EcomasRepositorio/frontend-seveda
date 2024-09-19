import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useEffect, useState, useMemo } from "react";
import { FaGlobe } from "react-icons/fa"; // Importa un icono de react-icons

const cartesianToSpherical = (x: number, y: number, z: number) => {
  const radius = Math.sqrt(x * x + y * y + z * z);
  const theta = Math.acos(z / radius); 
  const phi = Math.atan2(y, x); 
  return { radius, theta, phi };
};

const sphericalToCartesian = (radius: number, theta: number, phi: number) => {
  const x = radius * Math.sin(theta) * Math.cos(phi);
  const y = radius * Math.sin(theta) * Math.sin(phi);
  const z = radius * Math.cos(theta);
  return [x, y, z];
};

const RotatingGlobe = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const texture = useMemo(() => new THREE.TextureLoader().load("/textures/terra12.jpg"), []);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.004;
    }
  });

  return (
    <mesh ref={globeRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const FlightLine = ({ start, end }: { start: [number, number, number]; end: [number, number, number]; }) => {
  const startSpherical = cartesianToSpherical(...start);
  const endSpherical = cartesianToSpherical(...end);

  const midTheta = (startSpherical.theta + endSpherical.theta) / 2;
  const midPhi = (startSpherical.phi + endSpherical.phi) / 2;
  const controlPoint = sphericalToCartesian(startSpherical.radius + 0.1, midTheta, midPhi);

  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(...start),
    new THREE.Vector3(...controlPoint),
    new THREE.Vector3(...end),
  ]);

  const points = curve.getPoints(1000);
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line>
      {/* Aquí iría el material y las propiedades de la línea */}
    </line>
  );
};

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
    <div style={{ position: "relative", width: `${size.width}px`, margin: "0 auto" }}>
      {/* Icono en la parte superior */}
      <FaGlobe style={{ position: "absolute", top: "10px", left: "10%", transform: "translateX(-50%)", fontSize: "24px" }} />
      
      {/* El canvas con el globo */}
      <Canvas
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <OrbitControls enableZoom={false} />
        <Stars radius={300} depth={50} count={5000} factor={15} fade />
        <ambientLight intensity={3.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <RotatingGlobe />
        <FlightLine start={[2, 1, 1]} end={[-1, -1, 0]} />
        <FlightLine start={[-1.5, 1, 1]} end={[1.5, -1, -1]} />
      </Canvas>
    </div>
  );
};

export default Globe;
