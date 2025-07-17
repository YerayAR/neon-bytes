import { render, screen, fireEvent } from '@testing-library/react';
import ArchiveList from '../ArchiveList';

const replace = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({ replace }),
  useSearchParams: () => ({ get: () => null, toString: () => '' }),
}));

test('filtra elementos por tipo y actualiza la URL', () => {
  render(
    <ArchiveList
      items={[
        {
          id: '1',
          type: 'tutorial',
          date: '2024-01-01',
          title: 'Tut',
          excerpt: '...',
          source: 'src',
          link: '#',
        },
        {
          id: '2',
          type: 'noticia',
          date: '2024-01-02',
          title: 'Not',
          excerpt: '...',
          source: 'src',
          link: '#',
        },
      ]}
      selectedFilter="all"
      onFilterChange={() => {}}
    />
  );
  expect(screen.getByText(/Tut/)).toBeInTheDocument();
  expect(screen.getByText('Tutorial (1)')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem').length).toBe(2);
  fireEvent.change(screen.getByLabelText('Filtrar por tipo'), {
    target: { value: 'noticia' },
  });
  expect(screen.queryByText(/Tut/)).not.toBeInTheDocument();
  expect(screen.getByText(/Not/)).toBeInTheDocument();
  expect(replace).toHaveBeenCalledWith('?type=noticia', { scroll: false });
});
