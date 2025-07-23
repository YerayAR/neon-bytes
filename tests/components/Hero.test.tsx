import { render, screen } from '@testing-library/react';
import Hero from '../../src/components/Hero';

test('renderiza titulo', () => {
  render(<Hero onSubscribeClick={() => {}} />);
  expect(screen.getByText('NeonBytes')).toBeInTheDocument();
});
