import { FC } from 'react';

interface AboutProps {
  text: string;
}

/**
 * Breve descripción del proyecto.
 */
const About: FC<AboutProps> = ({ text }) => (
  <section className="py-20 px-6 text-center bg-gray-800/50 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10 opacity-50"></div>
    <div className="max-w-4xl mx-auto relative z-10">
      <h2 className="text-4xl font-bold mb-6 text-pink-400">Acerca de NeonBytes</h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">{text}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-700">
          <div className="text-3xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-pink-400 mb-2">Curado</h3>
          <p className="text-gray-300">Contenido seleccionado cuidadosamente para desarrolladores.</p>
        </div>
        <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-700">
          <div className="text-3xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold text-pink-400 mb-2">Actualizado</h3>
          <p className="text-gray-300">Las últimas tendencias y novedades del ecosistema tech.</p>
        </div>
        <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-700">
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold text-pink-400 mb-2">Relevante</h3>
          <p className="text-gray-300">Información práctica que puedes aplicar en tus proyectos.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
