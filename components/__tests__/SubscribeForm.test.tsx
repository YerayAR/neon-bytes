import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SubscribeForm from '../SubscribeForm';

test('envia datos validos', async () => {
  const user = userEvent.setup();
  (global as any).fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ ok: true }),
  });
  const onSuccess = jest.fn();
  render(<SubscribeForm onSuccess={onSuccess} />);
  await user.type(screen.getByPlaceholderText('Nombre'), 'Test');
  await user.type(screen.getByPlaceholderText('Email'), 't@example.com');
  await user.type(screen.getByPlaceholderText('Profesión'), 'Dev');
  await user.click(screen.getByLabelText('Frontend'));
  await user.click(screen.getByLabelText('Acepto recibir comunicaciones'));
  await user.click(screen.getByText('Suscribirse'));
  expect(global.fetch).toHaveBeenCalledWith(
    '/api/subscribe',
    expect.objectContaining({ method: 'POST' })
  );
  expect(onSuccess).toHaveBeenCalled();
});
