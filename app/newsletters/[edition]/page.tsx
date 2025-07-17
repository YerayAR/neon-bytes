'use client';
import React, { useEffect, useState } from 'react';
import NewsletterPage from '../../../components/NewsletterPage';

// Define meta information directly since we can't use fs in client components
type EditionMeta = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  authors: string;
};

const editionMeta: Record<string, EditionMeta> = {
  'edicion-1': {
    id: 'edicion-1',
    title: 'Edición 1',
    date: '2025-07-14',
    excerpt: 'Artículos destacados de Abril – Julio 2025',
    authors: 'Equipo NeonBytes'
  }
};

export default function Page({ params }: { params: { edition: string } }) {
  const [Content, setContent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const ContentComponent = (await import(`../../../newsletters/${params.edition}.mdx`)).default;
        setContent(() => ContentComponent);
      } catch (error) {
        console.error('Error loading newsletter:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [params.edition]);

  const meta = editionMeta[params.edition];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Cargando newsletter...</p>
        </div>
      </div>
    );
  }

  if (!meta || !Content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-400">Newsletter no encontrada</p>
        </div>
      </div>
    );
  }

  return (
    <NewsletterPage meta={meta}>
      <Content />
    </NewsletterPage>
  );
}
