import { FC } from 'react';

interface HeroProps {
  onSubscribeClick: () => void;
}

/**
 * Sección principal con título y CTA.
 */
const Hero: FC<HeroProps> = ({ onSubscribeClick }) => (
  <section className="py-20 text-center">
    <h1 className="text-5xl font-bold mb-4">NeonBytes</h1>
    <p className="mb-6 text-xl">Tu dosis semestral de innovación tech</p>
    <button
      className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded"
      onClick={onSubscribeClick}
    >
      Suscríbete
    </button>
  </section>
);

export default Hero;
