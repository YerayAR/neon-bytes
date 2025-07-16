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

const archive: ArchiveItem[] = [];

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
