import { getEditionMeta } from '../newsletters';

test('carga frontmatter de newsletter', () => {
  const meta = getEditionMeta('edicion-1');
  expect(meta.title).toBe('Edición 1');
});
