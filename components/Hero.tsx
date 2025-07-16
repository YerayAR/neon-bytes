import { FC } from 'react';
import FloatingBubbles from './FloatingBubbles';

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
    
    {/* Burbujas flotantes */}
    <FloatingBubbles count={20} />
    
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
