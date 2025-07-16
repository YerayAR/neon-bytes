"use client";

import { useRef } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ArchiveList, { ArchiveItem } from '../components/ArchiveList';
import About from '../components/About';
import Footer from '../components/Footer';
import SubscribeForm from '../components/SubscribeForm';

const features = [
  { icon: <>⚡</>, title: 'Rápido', text: 'Noticias al grano.' },
  { icon: <>🧑‍💻</>, title: 'Para devs', text: 'Contenido técnico útil.' },
  { icon: <>🚀</>, title: 'Tendencias', text: 'Lo último en innovación.' },
];

const archive: ArchiveItem[] = [
  {
    id: 't1',
    type: 'tutorial',
    date: '2025-06-11',
    title: 'Moving Highlight Navigation Bar',
    excerpt: 'Tutorial para resaltar elementos con la View Transition API.',
    source: 'Smashing Magazine',
    link: '#',
  },
  {
    id: 'n1',
    type: 'noticia',
    date: '2025-07-14',
    title: 'Next.js 15.4',
    excerpt: 'Enfoque en rendimiento y compatibilidad total con Turbopack.',
    source: 'Blog Next.js',
    link: '#',
  },
  {
    id: 'r1',
    type: 'recomendacion',
    date: '2025-04-01',
    title: 'Vercel CLI',
    excerpt: 'Herramienta para desplegar proyectos con facilidad.',
    source: 'Vercel',
    link: '#',
  },
];

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <Hero onSubscribeClick={() => formRef.current?.scrollIntoView()} />
      <Features items={features} />
      <ArchiveList items={archive} />
      <About text="Proyecto dedicado a compartir novedades del mundo tech." />
      <div ref={formRef}>
        <SubscribeForm onSuccess={() => null} />
      </div>
      <Footer year={new Date().getFullYear()} />
    </main>
  );
}
