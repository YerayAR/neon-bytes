import { FC } from 'react';

interface AboutProps {
  text: string;
}

/**
 * Breve descripción del proyecto.
 */
const About: FC<AboutProps> = ({ text }) => (
  <section className="py-10">
    <h2 className="text-2xl font-bold mb-2">Sobre el proyecto</h2>
    <p>{text}</p>
  </section>
);

export default About;
