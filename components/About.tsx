import { FC } from 'react';

interface AboutProps {
  text: string;
}

/**
 * Breve descripción del proyecto.
 */
const About: FC<AboutProps> = ({ text }) => (
  <section className="py-16 px-4 text-center bg-gray-800/50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-pink-400">Acerca de NeonBytes</h2>
      <p className="text-lg text-gray-300 leading-relaxed">{text}</p>
    </div>
  </section>
);

export default About;
