/**
 * Layout raíz compartido por todas las páginas.
 * Incluye cabecera, pie y carga de estilos globales.
 */
import './globals.css';
import { ReactNode } from 'react';
// import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NeonBytes - Newsletter Tecnológica',
  description: 'La newsletter tecnológica que te conecta con las últimas tendencias',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

/**
 * Componente de layout principal.
 * Envuelve a todas las páginas con cabecera y pie de página.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-900 text-gray-200">
        <header className="p-4 text-center text-2xl font-bold text-pink-400">
          NeonBytes
        </header>
        {children}
        {/* <Analytics /> */}
        <footer className="p-4 text-center text-gray-400 border-t border-gray-800">
          © {new Date().getFullYear()} NeonBytes
        </footer>
      </body>
    </html>
  );
}
