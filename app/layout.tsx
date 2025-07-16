import './globals.css';
import { ReactNode } from 'react';
// import { Analytics } from '@vercel/analytics/react';
// import { DefaultSeo } from 'next-seo';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-900 text-gray-200">
        {/* <DefaultSeo title="NeonBytes" description="Newsletter tech" /> */}
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
