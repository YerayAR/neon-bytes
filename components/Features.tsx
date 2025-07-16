import { FC } from 'react';

interface Feature {
  icon: JSX.Element;
  title: string;
  text: string;
}

interface FeaturesProps {
  items: Feature[];
}

/**
 * Muestra características de la newsletter.
 */
const Features: FC<FeaturesProps> = ({ items }) => (
  <section className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    {items.map((f, idx) => (
      <div key={idx} className="p-4">
        <div className="text-4xl mb-2">{f.icon}</div>
        <h3 className="font-bold mb-1">{f.title}</h3>
        <p>{f.text}</p>
      </div>
    ))}
  </section>
);

export default Features;
