import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type RotatingModelProps = {
  path: string; // Ruta del archivo GLB
  scale?: number;
  position?: [number, number, number];
};

const RotatingModel: React.FC<RotatingModelProps> = ({ path, scale = 1, position = [0, 0, 0] }) => {
  const modelRef = useRef<THREE.Mesh>(null);
  const { scene, animations } = useGLTF(path);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (animations && animations.length > 0) {
      const mixer = new THREE.AnimationMixer(scene);
      mixerRef.current = mixer;
      animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
      });
    }
    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [animations, scene]);

  // Actualizar las animaciones en cada frame
  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
    // Aplicar una rotación si se requiere
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={scale} position={position} />;
};

export default RotatingModel;
