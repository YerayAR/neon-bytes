import type { DefaultSeoProps } from 'next-seo';
import type { Metadata } from 'next';

const title = 'NeonBytes';
const description = 'La newsletter tecnológica que te conecta con las últimas tendencias';

export const metadata: Metadata = {
  title,
  description,
};

const config: DefaultSeoProps = {
  title,
  description,
};

export default config;
