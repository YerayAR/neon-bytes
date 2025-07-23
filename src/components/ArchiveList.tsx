'use client';

// Listado filtrable de artículos y newsletters
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import FloatingBubbles from './FloatingBubbles';

export interface ArchiveItem {
  id: string;
  type: 'tutorial' | 'noticia' | 'recomendacion' | 'newsletter';
  date: string;
  title: string;
  excerpt: string;
  source: string;
  link: string;
}

interface ArchiveListProps {
  items: ArchiveItem[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  selectedEdition: string;
  onEditionChange: (edition: string) => void;
}

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/**
 * Lista de artículos con filtros por tipo y edición.
 */
const ArchiveList: FC<ArchiveListProps> = ({ items, selectedFilter, onFilterChange, selectedEdition, onEditionChange }) => {
  const [loading, setLoading] = useState(false);

  const types = Array.from(new Set(items.map((i) => i.type)));
  const counts: Record<string, number> = {};
  types.forEach((t) => {
    counts[t] = items.filter((i) => i.type === t).length;
  });

  const filtered = selectedFilter === 'all' ? items : items.filter((i) => i.type === selectedFilter);

  const handleChange = (value: string) => {
    setLoading(true);
    onFilterChange(value);
    setTimeout(() => setLoading(false), 300);
  };

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  const getEditionTitle = (edition: string) => {
    return edition === 'edicion-1' ? 'Edición Uno' : 'Edición Dos';
  };

  const getEditionDescription = (edition: string) => {
    return edition === 'edicion-1' 
      ? 'Artículos destacados de abril a julio 2025 - Las últimas novedades del mundo tech'
      : 'Artículos destacados de julio 2025 - Nuevas tendencias y tecnologías emergentes';
  };

  return (
    <section id="articles" className="py-16 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Burbujas flotantes */}
      <FloatingBubbles count={12} colors={['bg-yellow-500', 'bg-orange-500', 'bg-yellow-400', 'bg-orange-400']} />
      
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4 animate-fadeInUp">{getEditionTitle(selectedEdition)}</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          {getEditionDescription(selectedEdition)}
        </p>
        
        {/* Selector de edición */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => onEditionChange('edicion-1')}
            className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedEdition === 'edicion-1'
                ? 'bg-yellow-500 text-black shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Edición 1
          </button>
          <button
            onClick={() => onEditionChange('edicion-2')}
            className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedEdition === 'edicion-2'
                ? 'bg-yellow-500 text-black shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Edición 2
          </button>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => handleChange('all')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedFilter === 'all'
                ? 'bg-pink-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Todos ({items.length})
          </button>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => handleChange(t)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedFilter === t
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {capitalize(t)} ({counts[t]})
            </button>
          ))}
        </div>
      </div>
      
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
          <p className="text-gray-400 mt-2">Cargando artículos...</p>
        </div>
      )}
      
      {!loading && filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No hay artículos de este tipo</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
        {filtered.map((it) => (
          <motion.div
            key={it.id}
            variants={itemAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="h-full"
          >
            <Card item={it} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ArchiveList;
