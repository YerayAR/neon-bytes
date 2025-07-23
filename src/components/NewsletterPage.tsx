'use client';

// Plantilla para mostrar el contenido de cada newsletter
import { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FrontMatter } from '../services/editions';

interface NewsletterPageProps {
  meta: FrontMatter;
  children: React.ReactNode;
}

const sectionAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/**
 * Envoltorio para el contenido MDX de cada edición.
 */
const NewsletterPage: FC<NewsletterPageProps> = ({ meta, children }) => {
  const editions = [
    { id: 'edicion-1', title: 'Edición 1', date: '2025-07-14' },
    { id: 'edicion-2', title: 'Edición 2', date: '2025-07-17' }
  ];

  const currentIndex = editions.findIndex(ed => ed.id === meta.id);
  const prevEdition = currentIndex > 0 ? editions[currentIndex - 1] : null;
  const nextEdition = currentIndex < editions.length - 1 ? editions[currentIndex + 1] : null;

  return (
    <article className="prose dark:prose-invert mx-auto p-4 max-w-3xl">
      <motion.h1
        className="text-pink-400"
        initial="hidden"
        animate="show"
        variants={sectionAnim}
      >
        {meta.title}
      </motion.h1>
      <motion.div variants={sectionAnim} initial="hidden" animate="show">
        {children}
      </motion.div>
      
      {/* Navegación entre ediciones */}
      <motion.div 
        className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700"
        variants={sectionAnim}
        initial="hidden"
        animate="show"
      >
        <div className="flex-1">
          {prevEdition && (
            <Link 
              href={`/newsletters/${prevEdition.id}`}
              className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors no-underline"
            >
              <span className="mr-2">←</span>
              <div>
                <div className="text-sm text-gray-400">Anterior</div>
                <div className="font-medium">{prevEdition.title}</div>
              </div>
            </Link>
          )}
        </div>
        
        <div className="flex-1 text-center">
          <Link 
            href="/"
            className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors no-underline"
          >
            Ver todas las ediciones
          </Link>
        </div>
        
        <div className="flex-1 text-right">
          {nextEdition && (
            <Link 
              href={`/newsletters/${nextEdition.id}`}
              className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors no-underline"
            >
              <div className="text-right">
                <div className="text-sm text-gray-400">Siguiente</div>
                <div className="font-medium">{nextEdition.title}</div>
              </div>
              <span className="ml-2">→</span>
            </Link>
          )}
        </div>
      </motion.div>
    </article>
  );
};

export default NewsletterPage;
