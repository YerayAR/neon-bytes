import { FC } from 'react';
import Link from 'next/link';
import MatrixRain from './MatrixRain';

interface HeroProps {
  onSubscribeClick: () => void;
}

/**
 * Sección principal con título y CTA.
 */
const Hero: FC<HeroProps> = ({ onSubscribeClick }) => (
  <section className="py-24 px-6 text-center relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
    {/* Efectos de fondo */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-600/20 to-transparent opacity-25 pointer-events-none"></div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/20 to-transparent opacity-25 pointer-events-none"></div>
    
    {/* Matrix Rain Effect */}
    <MatrixRain intensity={0.6} color="#ff0080" />
    
    <div className="max-w-4xl mx-auto z-10 relative">
      <div className="mb-4">
        <span className="inline-block px-4 py-2 bg-pink-600/20 text-pink-400 rounded-full text-sm font-medium border border-pink-600/30">
          🚀 Edición Uno disponible
        </span>
      </div>
      
      <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
        NeonBytes
      </h1>
      
      <p className="mb-8 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Tu dosis semestral de innovación tech. Noticias, tendencias y herramientas que todo desarrollador necesita conocer.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          className="px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 text-white"
          onClick={onSubscribeClick}
        >
          Suscríbete Gratis
        </button>
        
        <button
          className="px-8 py-4 border border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white rounded-lg font-medium transition-all duration-300"
          onClick={() => document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Ver Artículos
        </button>
      </div>
      
      {/* Selector de Ediciones */}
      <div className="mt-8 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 text-center">📚 Ediciones Disponibles</h3>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/newsletters/edicion-1"
            className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-center no-underline"
          >
            <div className="flex items-center justify-center gap-2">
              <span>📖</span>
              <div>
                <div className="font-semibold">Edición 1</div>
                <div className="text-xs opacity-90">Julio 2025</div>
              </div>
            </div>
          </Link>
          <Link
            href="/newsletters/edicion-2"
            className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 text-center no-underline"
          >
            <div className="flex items-center justify-center gap-2">
              <span>📖</span>
              <div>
                <div className="font-semibold">Edición 2</div>
                <div className="text-xs opacity-90">Julio 2025</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      
      <div className="mt-12 flex justify-center space-x-8 text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>10 artículos</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          <span>Gratis</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
          <span>Sin spam</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
