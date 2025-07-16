import { render, screen } from '@testing-library/react';
import About from '../About';

test('muestra texto', () => {
  render(<About text="hola" />);
  expect(screen.getByText('hola')).toBeInTheDocument();
});
