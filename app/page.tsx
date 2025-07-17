"use client";

import { useRef, useState } from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ArchiveList, { ArchiveItem } from '../components/ArchiveList';
import NewsletterSection from '../components/NewsletterSection';
import About from '../components/About';
import Footer from '../components/Footer';
import SubscribeForm from '../components/SubscribeForm';

const features = [
  { icon: <>📰</>, title: 'Noticias', text: 'Últimas novedades del ecosistema tech.', type: 'noticia' },
  { icon: <>🧑‍💻</>, title: 'Tutoriales', text: 'Guías prácticas y técnicas avanzadas.', type: 'tutorial' },
  { icon: <>💡</>, title: 'Recomendaciones', text: 'Herramientas y recursos esenciales.', type: 'recomendacion' },
];

const archive: ArchiveItem[] = [
  {
    id: 'n1',
    type: 'noticia',
    date: '2025-05-06',
    title: "What's New with Node.js 24",
    excerpt: 'Node.js 24 llega como versión "Current" con múltiples mejoras de rendimiento, motor V8 actualizado a v13.6, npm 11 integrado y un modelo de permisos más seguro.',
    source: 'OpenJS Foundation',
    link: 'https://openjsf.org/blog/nodejs-24-released',
  },
  {
    id: 'n2',
    type: 'noticia',
    date: '2025-07-08',
    title: 'ECMAScript 2025 JavaScript standard approved',
    excerpt: 'La especificación ECMAScript 2025 incorpora nueve propuestas finalizadas, incluyendo importación de módulos JSON, métodos utilitarios para iteradores síncronos y nuevos métodos para estructuras Set.',
    source: 'InfoWorld',
    link: 'https://www.infoworld.com/article/3856449/ecmascript-2025-javascript-standard-takes-shape.html',
  },
  {
    id: 'n3',
    type: 'noticia',
    date: '2025-07-14',
    title: 'Next.js 15.4',
    excerpt: 'Lanzamiento con foco en rendimiento, estabilidad y compatibilidad del 100% en tests de integración al compilar con Turbopack.',
    source: 'Blog oficial Next.js (Vercel)',
    link: 'https://nextjs.org/blog',
  },
  {
    id: 'n4',
    type: 'noticia',
    date: '2025-04-07',
    title: 'Agent mode: available to all users and supports MCP',
    excerpt: 'Visual Studio Code habilitó el nuevo "Agent Mode" de GitHub Copilot, introduciendo un asistente de programación autónomo capaz de ejecutar tareas de código de múltiples pasos.',
    source: 'Blog VS Code',
    link: 'https://code.visualstudio.com/blogs/2025/04/07/agentMode',
  },
  {
    id: 'n5',
    type: 'noticia',
    date: '2025-04-02',
    title: 'Django 5.2 release touts automatic model importing',
    excerpt: 'Django 5.2 fue lanzado como LTS, incorporando un comando de shell que importa automáticamente los modelos de todas las aplicaciones instaladas y soporte nativo de claves primarias compuestas.',
    source: 'InfoWorld',
    link: 'https://www.infoworld.com/article/3952899/django-5-2-release-touts-automatic-model-importing.html',
  },
  {
    id: 'n6',
    type: 'noticia',
    date: '2025-05-30',
    title: 'Angular v20 arrives with eyes on generative AI development',
    excerpt: 'Angular v20 introduce mejoras en el núcleo del framework con un guiño a la integración con IA generativa, manteniendo un archivo especial llms.txt para ayudar a los modelos de lenguaje.',
    source: 'InfoWorld',
    link: 'https://www.infoworld.com/article/3998375/angular-v20-arrives-with-eyes-on-generative-ai-development.html',
  },
  {
    id: 't1',
    type: 'tutorial',
    date: '2025-06-11',
    title: 'Creating the "Moving Highlight" Navigation Bar With JavaScript And CSS',
    excerpt: 'Tutorial detallado que explica cómo implementar el efecto de "resaltado móvil" en una barra de navegación usando JavaScript y CSS, presentando dos métodos alternativos.',
    source: 'Smashing Magazine',
    link: 'https://www.smashingmagazine.com/category/coding/',
  },
  {
    id: 't2',
    type: 'tutorial',
    date: '2025-06-19',
    title: 'CSS Cascade Layers vs. BEM vs. Utility Classes: Specificity Control',
    excerpt: 'Análisis avanzado sobre estrategias de arquitectura CSS para mantener el control de la especificidad, comparando cascade layers, metodología BEM y clases utilitarias.',
    source: 'Smashing Magazine',
    link: 'https://www.smashingmagazine.com/category/coding/',
  },
  {
    id: 't3',
    type: 'tutorial',
    date: '2025-04-01',
    title: 'This One JavaScript Trick Saved My Startup $10,000 in Server Costs Overnight',
    excerpt: 'Caso de estudio donde un desarrollador comparte cómo un cambio específico en el manejo del bucle de eventos de Node.js redujo la factura de AWS en $10 mil dólares.',
    source: 'Medium',
    link: 'https://medium.com/@md.alishanali/this-one-javascript-trick-saved-my-startup-10-000-in-server-costs-overnight-2ac54f06d5c8',
  },
  {
    id: 'r1',
    type: 'recomendacion',
    date: '2025-06-20',
    title: 'How to Keep Up With New CSS Features',
    excerpt: 'Recomendaciones para desarrolladores sobre cómo mantenerse al día con las últimas novedades de CSS, incluyendo estrategias y recursos prácticos.',
    source: 'CSS-Tricks',
    link: 'https://www.uxlift.org/articles/how-to-keep-up-with-new-css-features-css-tricks/',
  },
];

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = (filterType: string) => {
    setSelectedFilter(filterType);
    // Scroll to articles section
    document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Hero onSubscribeClick={() => formRef.current?.scrollIntoView()} />
      <NewsletterSection />
      <Features items={features} onFilterChange={handleFilterChange} />
      <ArchiveList
        items={archive}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <About text="Proyecto dedicado a compartir novedades del mundo tech." />
      <div ref={formRef}>
        <SubscribeForm onSuccess={() => null} />
      </div>
      <Footer year={new Date().getFullYear()} />
    </main>
  );
}
