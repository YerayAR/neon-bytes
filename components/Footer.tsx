import { FC } from 'react';

interface FooterProps {
  year: number;
}

/**
 * Pie de página con enlaces.
 */
const Footer: FC<FooterProps> = ({ year }) => (
  <footer className="py-4 text-center border-t border-gray-700 mt-10">
    <a href="https://github.com" className="mx-2 underline">
      GitHub
    </a>
    <a href="https://twitter.com" className="mx-2 underline">
      Twitter
    </a>
    <p className="mt-2 text-sm">© {year} NeonBytes</p>
  </footer>
);

export default Footer;
