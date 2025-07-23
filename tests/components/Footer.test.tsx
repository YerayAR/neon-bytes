import { render, screen } from '@testing-library/react';
import Footer from '../../src/components/Footer';

test('muestra año', () => {
  render(<Footer year={2024} />);
  expect(screen.getByText(/2024/)).toBeInTheDocument();
});
