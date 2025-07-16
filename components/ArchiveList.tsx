import Link from 'next/link';
import { FC } from 'react';

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
const ArchiveList: FC<ArchiveListProps> = ({ items }) => (
  <section className="py-10">
    <h2 className="text-2xl font-bold mb-4">Archivo</h2>
    <ul className="space-y-4">
      {items.map((it) => (
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

export default ArchiveList;
