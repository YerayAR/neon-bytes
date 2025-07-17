import { FC } from 'react';

interface FooterProps {
  year: number;
}

/**
 * Pie de página con enlaces.
 */
const Footer: FC<FooterProps> = ({ year }) => (
  <footer className="py-12 px-6 bg-gray-800/50 border-t border-gray-700 mt-16">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
          NeonBytes
        </h3>
        <p className="text-gray-400 mb-6">
          Conectando desarrolladores con la innovación tech
        </p>
      </div>
      
      <div className="flex justify-center space-x-6 mb-8">
        <a
          href="https://github.com/YerayAR/neon-bytes"
          className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐈 GitHub
        </a>
        <a
          href="https://github.com/YerayAR"
          className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐙 YerayAR
        </a>
        <a
          href="https://www.linkedin.com/in/yeray-alonso-reyes-ii/"
          className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://twitter.com"
          className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐦 Twitter
        </a>
        <a
          href="mailto:contact@neonbytes.dev"
          className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
        >
          📧 Contacto
        </a>
      </div>
      
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        <p>© {year} NeonBytes. Hecho con ❤️ por desarrolladores, para desarrolladores.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
