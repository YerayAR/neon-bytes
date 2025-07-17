import { render, screen } from '@testing-library/react';
import Features from '../Features';

test('muestra titulos de features', () => {
  render(
    <Features
      items={[{ icon: <>x</>, title: 't1', text: 'desc', type: 'test' }]}
      onFilterChange={() => {}}
    />
  );
  expect(screen.getByText('t1')).toBeInTheDocument();
});
