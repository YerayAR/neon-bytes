import { render, screen } from '@testing-library/react';
import NewsletterPage from '../NewsletterPage';

const Content = () => (
  <div>
    <h2>Seccion</h2>
    <p>Texto</p>
  </div>
);

it('renderiza secciones', () => {
  render(<NewsletterPage meta={{ title: 'Ed 1', date: '2025-07-14' }}><Content /></NewsletterPage>);
  expect(screen.getByText('Ed 1')).toBeInTheDocument();
  expect(screen.getByText('Seccion')).toBeInTheDocument();
});
