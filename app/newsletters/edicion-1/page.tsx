import { Metadata } from 'next';
import Content from '../../../newsletters/edicion-1.md';

export const metadata: Metadata = {
  title: 'Edición 1 - NeonBytes',
};

export default function Edicion1() {
  return (
    <main className="prose dark:prose-invert mx-auto p-4">
      <Content />
    </main>
  );
}
