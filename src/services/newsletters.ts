// Lectura y metadatos de archivos MDX de newsletters
import fs from 'fs';
import path from 'path';
import { parseFrontMatter, FrontMatter } from './editions';

/**
 * Directorio donde se almacenan los MDX de newsletters.
 */
export function getNewsletterDir() {
  return path.join(process.cwd(), 'newsletters');
}

/**
 * Devuelve los identificadores de todas las ediciones disponibles.
 */
export function getAllEditionIds(): string[] {
  return fs
    .readdirSync(getNewsletterDir())
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

/**
 * Obtiene el frontmatter de una edición.
 */
export function getEditionMeta(id: string): FrontMatter {
  const file = fs.readFileSync(path.join(getNewsletterDir(), `${id}.mdx`), 'utf8');
  return parseFrontMatter(file).data;
}
