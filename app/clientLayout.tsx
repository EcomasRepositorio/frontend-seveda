'use client';
// components/ClientLayout.tsx
import React from 'react';
import Header from '@/app/navBar';
import Footer from '@/components/footer/Footer';
import ScrollToTopButton from '@/components/home/slideup';
import { ThemeProvider } from '@/components/ThemeProvider';
import Whatsapp from '@/components/whatsapp/Index';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-roboto dark:bg-blackblue">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <link rel="icon" href="/image/ICONO-COLOR.png" />  {/* Asegúrate de que la ruta sea correcta */}
        
        <Header />
        {children}
        <Whatsapp />
        <Footer />
        <ScrollToTopButton />
      </ThemeProvider>
    </div>
  );
}
