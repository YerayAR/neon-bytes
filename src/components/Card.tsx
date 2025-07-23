'use client';

// Tarjeta individual para listar artículos y recursos
import { FC } from 'react';
import Link from 'next/link';
import { ArchiveItem } from './ArchiveList';

interface CardProps {
  item: ArchiveItem;
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'noticia': return 'bg-blue-600/20 text-blue-400 border-blue-600/50';
    case 'tutorial': return 'bg-green-600/20 text-green-400 border-green-600/50';
    case 'recomendacion': return 'bg-purple-600/20 text-purple-400 border-purple-600/50';
    case 'newsletter': return 'bg-pink-600/20 text-pink-400 border-pink-600/50';
    default: return 'bg-gray-600/20 text-gray-400 border-gray-600/50';
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'noticia': return 'Noticia';
    case 'tutorial': return 'Tutorial';
    case 'recomendacion': return 'Recomendación';
    default: return type;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Representa un artículo de la lista de archivos.
 */
const Card: FC<CardProps> = ({ item }) => (
  <article className="group p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-pink-500/25 hover:border-pink-500/50 transition-all duration-300">
    <div className="flex items-start justify-between mb-3">
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
        {getTypeLabel(item.type)}
      </span>
      <time className="text-xs text-gray-400" dateTime={item.date}>
        {formatDate(item.date)}
      </time>
    </div>
    
    <h3 className="text-xl font-bold text-pink-400 mb-2 group-hover:text-pink-300 transition-colors">
      <Link href={item.link} className="hover:underline" target="_blank" rel="noopener noreferrer">
        {item.title}
      </Link>
    </h3>
    
    <p className="text-gray-300 text-sm leading-relaxed mb-3">
      {item.excerpt}
    </p>
    
    <div className="flex items-center justify-between">
      <p className="text-xs text-gray-400 font-medium">
        {item.source}
      </p>
      <Link 
        href={item.link} 
        className="text-xs text-pink-400 hover:text-pink-300 font-medium transition-colors"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Leer artículo →
      </Link>
    </div>
  </article>
);

export default Card;
