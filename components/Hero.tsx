import { FC } from 'react';

interface HeroProps {
  onSubscribeClick: () => void;
}

/**
 * Sección principal con título y CTA.
 */
const Hero: FC<HeroProps> = ({ onSubscribeClick }) => (
  <section className="py-20 px-4 text-center bg-gradient-to-b from-gray-900 to-gray-800">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
        NeonBytes
      </h1>
      <p className="mb-8 text-xl text-gray-300 max-w-2xl mx-auto">
        Tu dosis semestral de innovación tech. Noticias, tendencias y herramientas que todo desarrollador necesita conocer.
      </p>
      <button
        className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-pink-500/25"
        onClick={onSubscribeClick}
      >
        Suscríbete Gratis
      </button>
    </div>
  </section>
);

export default Hero;
