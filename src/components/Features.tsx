// Sección de características principales
import { FC } from 'react';
import Link from 'next/link';
import FloatingBubbles from './FloatingBubbles';

interface Feature {
  icon: JSX.Element;
  title: string;
  text: string;
  type: string;
}

interface FeaturesProps {
  items: Feature[];
  onFilterChange: (filterType: string) => void;
}

/**
 * Muestra características de la newsletter con enlaces a tipos de artículos.
 */
const Features: FC<FeaturesProps> = ({ items, onFilterChange }) => (
  <section className="py-16 px-4 max-w-6xl mx-auto relative overflow-hidden">
    {/* Burbujas flotantes */}
    <FloatingBubbles count={10} colors={['bg-blue-500', 'bg-cyan-500', 'bg-blue-400', 'bg-cyan-400']} />
    
    <div className="text-center mb-12 animate-fadeInUp">
      <h2 className="text-3xl font-bold text-white mb-4">¿Qué encontrarás?</h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Explora nuestro contenido organizado por categorías
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
      {items.map((f, idx) => (
        <button 
          key={idx} 
          onClick={() => onFilterChange(f.type)} 
          className="group"
        >
          <div className={`p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer text-center ${
            idx === 0 ? 'animate-slideInLeft' : idx === 2 ? 'animate-slideInRight' : 'animate-fadeInUp'
          }`} style={{animationDelay: `${idx * 0.2}s`}}>
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
            <h3 className="font-bold mb-2 text-xl text-pink-400 group-hover:text-pink-300 transition-colors">{f.title}</h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{f.text}</p>
            <div className="mt-4 text-sm text-pink-400 group-hover:text-pink-300 transition-colors">
              Ver artículos →
            </div>
          </div>
        </button>
      ))}
    </div>
  </section>
);

export default Features;
