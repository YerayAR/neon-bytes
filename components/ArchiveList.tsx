'use client';
import { FC, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Card from './Card';

export interface ArchiveItem {
  id: string;
  type: 'tutorial' | 'noticia' | 'recomendacion';
  date: string;
  title: string;
  excerpt: string;
  source: string;
  link: string;
}

interface ArchiveListProps {
  items: ArchiveItem[];
}

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ArchiveList: FC<ArchiveListProps> = ({ items }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const param = searchParams.get('type') || 'all';

  const [type, setType] = useState(param);
  const [loading, setLoading] = useState(false);

  useEffect(() => setType(param), [param]);

  const types = Array.from(new Set(items.map((i) => i.type)));
  const counts: Record<string, number> = {};
  types.forEach((t) => {
    counts[t] = items.filter((i) => i.type === t).length;
  });

  const filtered = type === 'all' ? items : items.filter((i) => i.type === type);

  const handleChange = (value: string) => {
    setLoading(true);
    setType(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') params.delete('type');
    else params.set('type', value);
    router.replace('?' + params.toString(), { scroll: false });
    setTimeout(() => setLoading(false), 300);
  };

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <section id="articles" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Edición Uno</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Artículos destacados de abril a julio 2025 - Las últimas novedades del mundo tech
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => handleChange('all')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              type === 'all'
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
                type === t
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
