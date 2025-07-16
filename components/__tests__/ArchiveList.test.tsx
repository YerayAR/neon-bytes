import { render, screen, fireEvent } from '@testing-library/react';
import ArchiveList from '../ArchiveList';

test('muestra elementos de archivo y permite navegar', () => {
  render(
    <ArchiveList
      items={[
        { id: 'ed1', date: '2024-01-01', title: 'Ed1', excerpt: '...' },
        { id: 'ed2', date: '2025-01-01', title: 'Ed2', excerpt: '...' },
      ]}
    />
  );
  expect(screen.getByText(/Ed1/)).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText('Filtrar por año'), { target: { value: '2025' } });
  expect(screen.queryByText(/Ed1/)).not.toBeInTheDocument();
  expect(screen.getByText(/Ed2/)).toBeInTheDocument();
});
