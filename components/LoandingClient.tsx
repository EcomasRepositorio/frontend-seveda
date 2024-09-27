"use client"; // Asegúrate de que este archivo esté marcado como cliente

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingScreen from './LoandingScreen'; // Importa el componente de pantalla de carga

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return <>{loading ? <LoadingScreen /> : children}</>;
};

export default ClientWrapper;
