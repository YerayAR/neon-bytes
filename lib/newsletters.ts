import fs from 'fs';
import path from 'path';
import { parseFrontMatter, FrontMatter } from './editions';

export function getNewsletterDir() {
  return path.join(process.cwd(), 'newsletters');
}

export function getAllEditionIds(): string[] {
  return fs
    .readdirSync(getNewsletterDir())
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getEditionMeta(id: string): FrontMatter {
  const file = fs.readFileSync(path.join(getNewsletterDir(), `${id}.mdx`), 'utf8');
  return parseFrontMatter(file).data;
}
