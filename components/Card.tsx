'use client';
import { FC } from 'react';
import Link from 'next/link';
import { ArchiveItem } from './ArchiveList';

interface CardProps {
  item: ArchiveItem;
}

const Card: FC<CardProps> = ({ item }) => (
  <article className="p-4 bg-gray-800 border border-gray-700 rounded-lg shadow hover:shadow-pink-500/25 transition">
    <h3 className="text-lg font-bold text-pink-400 mb-1">
      <Link href={item.link} className="hover:underline">
        {item.title}
      </Link>
    </h3>
    <p className="text-sm text-gray-400 mb-2">
      {item.date} &bull; {item.source}
    </p>
    <p className="text-gray-300 text-sm">{item.excerpt}</p>
  </article>
);

export default Card;
