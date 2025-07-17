'use client';
import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Newsletter {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  authors: string[];
}

const newsletters: Newsletter[] = [
  {
    id: 'edicion-1',
    title: 'Edición 1',
    date: '2025-07-14',
    excerpt: 'Artículos destacados de abril a julio 2025 - Las últimas novedades del mundo tech',
    authors: ['Equipo NeonBytes']
  },
  {
    id: 'edicion-2',
    title: 'Edición 2',
    date: '2025-07-17', 
    excerpt: 'Artículos destacados Abril–Julio 2025 (segunda edición)',
    authors: ['Equipo NeonBytes']
  }
];

const containerAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const NewsletterSection: FC = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">📧 Newsletters Disponibles</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explora nuestras ediciones completas con los artículos más relevantes del ecosistema tecnológico
        </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        variants={containerAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {newsletters.map((newsletter) => (
          <motion.div key={newsletter.id} variants={itemAnim}>
            <Link
              href={`/newsletters/${newsletter.id}`}
              className="group block p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-lg hover:shadow-pink-500/25 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105 no-underline"
            >
              <div className="text-center">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-16 h-16 bg-pink-600/20 text-pink-400 rounded-full text-2xl border border-pink-600/30 group-hover:bg-pink-600/30 transition-colors">
                    📖
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                  {newsletter.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {newsletter.excerpt}
                </p>
                
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <span>📅</span>
                    <span>{new Date(newsletter.date).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>✍️</span>
                    <span>{newsletter.authors.join(', ')}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <span className="inline-flex items-center text-pink-400 group-hover:text-pink-300 font-medium transition-colors">
                    Leer newsletter
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
