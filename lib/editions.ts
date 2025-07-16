export interface Article {
  title: string;
  summary: string;
  date: string;
  source: string;
  link: string;
}

export interface Edition {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  articles: Article[];
}

export type FrontMatter = {
  [key: string]: string;
};

export function parseFrontMatter(source: string): { data: FrontMatter; content: string } {
  const match = source.match(/^---\n([\s\S]+?)\n---\n?/);
  if (!match) return { data: {}, content: source };
  const raw = match[1];
  const data: FrontMatter = {};
  raw.split(/\n/).forEach((line) => {
    const [key, ...rest] = line.split(':');
    if (key) data[key.trim()] = rest.join(':').trim();
  });
  const content = source.slice(match[0].length);
  return { data, content };
}
