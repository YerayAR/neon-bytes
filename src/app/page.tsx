"use client";

/**
 * Página principal de la aplicación.
 * Muestra hero, características y listado de artículos por edición.
 */

import { useRef, useState } from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ArchiveList, { ArchiveItem } from '../components/ArchiveList';
import About from '../components/About';
import Footer from '../components/Footer';
import SubscribeForm from '../components/SubscribeForm';

const features = [
  { icon: <>📰</>, title: 'Noticias', text: 'Últimas novedades del ecosistema tech.', type: 'noticia' },
  { icon: <>🧑‍💻</>, title: 'Tutoriales', text: 'Guías prácticas y técnicas avanzadas.', type: 'tutorial' },
  { icon: <>💡</>, title: 'Recomendaciones', text: 'Herramientas y recursos esenciales.', type: 'recomendacion' },
];

// Edición 1
const edicion1: ArchiveItem[] = [
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

// Edición 2
const edicion2: ArchiveItem[] = [
  {
    id: 'n1_e2',
    type: 'noticia',
    date: '2025-07-11',
    title: 'TypeScript 5.9 supports deferred module evaluation',
    excerpt: 'TypeScript 5.9 (beta) introduce la evaluación diferida de módulos de ECMAScript mediante la nueva sintaxis import defer, permitiendo cargar módulos sin ejecutarlos de inmediato.',
    source: 'InfoWorld',
    link: 'https://www.infoworld.com/article/4020579/typescript-5-9-supports-deferred-module-evaluation.html',
  },
  {
    id: 'n2_e2',
    type: 'noticia',
    date: '2025-07-07',
    title: 'Deno 2.4 restores JavaScript bundling subcommand',
    excerpt: 'Deno 2.4 restablece el comando deno bundle para generar bundles JavaScript de un solo archivo. También estabiliza la integración de OpenTelemetry y añade deno update.',
    source: 'InfoWorld',
    link: 'https://www.infoworld.com/article/4018342/deno-2-4-restores-javascript-bundling-subcommand.html',
  },
  {
    id: 'n3_e2',
    type: 'noticia',
    date: '2025-07-11',
    title: 'Visual Studio Code bolsters Copilot Chat, MCP support',
    excerpt: 'Visual Studio Code 1.102 amplía las capacidades de GitHub Copilot Chat y finaliza el soporte para el Model Context Protocol (MCP) en el editor.',
    source: 'InfoWorld',
    link: 'https://www.infoworld.com/article/4021110/visual-studio-code-bolsters-copilot-chat-mcp-support.html',
  },
  {
    id: 't1_e2',
    type: 'tutorial',
    date: '2025-04-23',
    title: 'Building An Offline-Friendly Image Upload System',
    excerpt: 'Tutorial paso a paso para construir un sistema de subida de imágenes que funcione offline, usando tecnologías PWA como IndexedDB, service workers y Background Sync.',
    source: 'Smashing Magazine',
    link: 'https://www.smashingmagazine.com/2025/04/building-offline-friendly-image-upload-system/',
  },
  {
    id: 't2_e2',
    type: 'tutorial',
    date: '2025-04-08',
    title: 'Using Manim For Making UI Animations',
    excerpt: 'Introducción a Manim, una biblioteca de Python para crear animaciones dinámicas que ayudan a explicar conceptos de forma visual e interactiva.',
    source: 'Smashing Magazine',
    link: 'https://www.smashingmagazine.com/2025/04/using-manim-making-ui-animations/',
  },
  {
    id: 't3_e2',
    type: 'tutorial',
    date: '2025-06-27',
    title: 'CSS Blob Recipes',
    excerpt: 'Exploración de varios métodos para generar formas tipo "blob" (manchas orgánicas) con CSS, evaluando cada enfoque según criterios de diseño.',
    source: 'CSS-Tricks',
    link: 'https://css-tricks.com/css-blob-recipes/',
  },
  {
    id: 'r1_e2',
    type: 'recomendacion',
    date: '2025-07-16',
    title: 'ECMAScript 2025: The best new features in JavaScript',
    excerpt: 'Repaso a las nuevas funcionalidades incluidas en el estándar ECMAScript 2025 de JavaScript, que agrega mejoras en Set, expresiones regulares y más.',
    source: 'InfoWorld',
    link: 'https://www.infoworld.com/article/4021944/ecmascript-2025-the-best-new-features-in-javascript.html',
  },
  {
    id: 'r2_e2',
    type: 'recomendacion',
    date: '2025-06-26',
    title: 'KelpUI',
    excerpt: 'Presentación de KelpUI, un nuevo micro-framework UI desarrollado por Chris Ferdinandi que utiliza Web Components y CSS moderno.',
    source: 'CSS-Tricks',
    link: 'https://css-tricks.com/kelpui/',
  },
  {
    id: 'r3_e2',
    type: 'recomendacion',
    date: '2025-04-17',
    title: 'Fostering An Accessibility Culture',
    excerpt: 'Reflexiones sobre cómo fomentar una cultura de accesibilidad en entornos de desarrollo grandes, basado en experiencia personal en una gran organización.',
    source: 'Smashing Magazine',
    link: 'https://www.smashingmagazine.com/2025/04/fostering-accessibility-culture/',
  },
  {
    id: 'r4_e2',
    type: 'recomendacion',
    date: '2025-07-16',
    title: '4 tips for getting started with free-threaded Python',
    excerpt: 'Cuatro consejos para comenzar a aprovechar el nuevo modo "sin GIL" introducido en Python 3.13, que permite verdadero paralelismo en Python.',
    source: 'InfoWorld',
    link: 'https://www.infoworld.com/article/4018856/4-tips-for-getting-started-with-free-threaded-python.html',
  },
];

/**
 * Componente principal que compone la landing page.
 */
export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedEdition, setSelectedEdition] = useState('edicion-1');

  // Obtener artículos de la edición seleccionada
  const currentArchive = selectedEdition === 'edicion-1' ? edicion1 : edicion2;

  // Actualiza filtro seleccionado y hace scroll a la sección de artículos
  const handleFilterChange = (filterType: string) => {
    setSelectedFilter(filterType);
    document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Cambia de edición y resetea el filtro
  const handleEditionChange = (edition: string) => {
    setSelectedEdition(edition);
    setSelectedFilter('all');
  };

  return (
    <main>
      <Hero onSubscribeClick={() => formRef.current?.scrollIntoView()} />
      <Features items={features} onFilterChange={handleFilterChange} />
      <ArchiveList
        items={currentArchive}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        selectedEdition={selectedEdition}
        onEditionChange={handleEditionChange}
      />
      <About text="Proyecto dedicado a compartir novedades del mundo tech." />
      <div ref={formRef}>
        <SubscribeForm onSuccess={() => null} />
      </div>
      <Footer year={new Date().getFullYear()} />
    </main>
  );
}
