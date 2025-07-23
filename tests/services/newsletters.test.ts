import { getEditionMeta } from '../../src/services/newsletters';

test('carga frontmatter de newsletter existente', () => {
  const meta = getEditionMeta('edicion-1');
  expect(meta.title).toBe('Edición 1');
});

test('carga frontmatter de nueva edición', () => {
  const meta = getEditionMeta('edicion-2');
  expect(meta.title).toBe('Edición 2');
});
