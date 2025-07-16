import './globals.css';
import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <DefaultSeo title="NeonBytes" description="Newsletter tech" />
        <header className="p-4 text-center text-2xl font-bold">NeonBytes</header>
        {children}
        <Analytics />
        <footer className="p-4 text-center">© {new Date().getFullYear()} NeonBytes</footer>
      </body>
    </html>
  );
}
