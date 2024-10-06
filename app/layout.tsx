import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/app/clientLayout'; // Importa el nuevo componente cliente

export const metadata: Metadata = {
  title: 'SEVEDA - Corporación',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>

        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
