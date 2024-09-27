import type { Metadata } from 'next';
import './globals.css';
import ClientWrapper from '@/components/ClientWrapper'; // Importa el nuevo componente cliente

export const metadata: Metadata = {
  title: 'SEVEDA - Corporación',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* Usa ClientWrapper para manejar la lógica de cliente */}
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
