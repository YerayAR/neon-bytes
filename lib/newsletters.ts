import fs from 'fs';
import path from 'path';
import { parseFrontMatter, FrontMatter } from './editions';

export function getNewsletterDir() {
  return path.join(process.cwd(), 'newsletters');
}

export function getAllEditionIds(): string[] {
  return fs
    .readdirSync(getNewsletterDir())
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getEditionMeta(id: string): FrontMatter {
  const file = fs.readFileSync(path.join(getNewsletterDir(), `${id}.md`), 'utf8');
  return parseFrontMatter(file).data;
}
