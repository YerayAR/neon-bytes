import Link from 'next/link';
import { FC, useState } from 'react';

export interface ArchiveItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
}

interface ArchiveListProps {
  items: ArchiveItem[];
}

/**
 * Lista de ediciones publicadas.
 */
const ArchiveList: FC<ArchiveListProps> = ({ items }) => {
  const [year, setYear] = useState('');
  const years = Array.from(new Set(items.map((i) => i.date.slice(0, 4))));
  const filtered = year ? items.filter((i) => i.date.startsWith(year)) : items;

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-4">Archivo</h2>
      {years.length > 1 && (
        <select
          aria-label="Filtrar por año"
          className="mb-4 bg-gray-800 p-2"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">Todas</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      )}
      <ul className="space-y-4">
        {filtered.map((it) => (
          <li key={it.id}>
            <Link href={`/newsletters/${it.id}`} className="underline">
              {it.date} - {it.title}
            </Link>
            <p className="text-sm text-gray-400">
              {it.excerpt.slice(0, 100)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArchiveList;
