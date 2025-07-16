import { FC } from 'react';
import { motion } from 'framer-motion';
import { FrontMatter } from '../lib/editions';

interface NewsletterPageProps {
  meta: FrontMatter;
  children: React.ReactNode;
}

const sectionAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const NewsletterPage: FC<NewsletterPageProps> = ({ meta, children }) => (
  <article className="prose dark:prose-invert mx-auto p-4 max-w-3xl">
    <motion.h1
      className="text-pink-400"
      initial="hidden"
      animate="show"
      variants={sectionAnim}
    >
      {meta.title}
    </motion.h1>
    <motion.div variants={sectionAnim} initial="hidden" animate="show">
      {children}
    </motion.div>
  </article>
);

export default NewsletterPage;
