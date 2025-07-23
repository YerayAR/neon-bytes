import { render, screen } from '@testing-library/react';
import NeonCentelleante from '../../src/components/NeonCentelleante';

test('muestra texto de neon', () => {
  render(<NeonCentelleante duration={500} intensity={1.2} />);
  expect(screen.getByText('este semestre newsletter extra')).toBeInTheDocument();
});
