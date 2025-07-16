import { render, screen } from '@testing-library/react';
import ArchiveList from '../ArchiveList';

test('muestra elementos de archivo', () => {
  render(
    <ArchiveList items={[{ id: '1', date: '2024-01-01', title: 'Ed1', excerpt: '...' }]} />
  );
  expect(screen.getByText(/Ed1/)).toBeInTheDocument();
});
