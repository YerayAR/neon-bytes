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
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-4">Artículos</h2>
      <div className="mb-4">
        <label htmlFor="type-select" className="sr-only">
          Filtrar por tipo
        </label>
        <select
          id="type-select"
          aria-label="Filtrar por tipo"
          className="bg-gray-800 p-2 rounded focus:outline-none focus:ring"
          value={type}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="all">Todos ({items.length})</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {capitalize(t)} ({counts[t]})
            </option>
          ))}
        </select>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && filtered.length === 0 && <p>No hay artículos de este tipo</p>}
      <ul className="grid gap-4" role="list">
        {filtered.map((it) => (
          <motion.li
            key={it.id}
            variants={itemAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Card item={it} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ArchiveList;
