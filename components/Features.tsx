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
  <section className="py-16 px-4 max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {items.map((f, idx) => (
        <div key={idx} className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-pink-500 transition-colors">
          <div className="text-4xl mb-4">{f.icon}</div>
          <h3 className="font-bold mb-2 text-xl text-pink-400">{f.title}</h3>
          <p className="text-gray-300">{f.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
