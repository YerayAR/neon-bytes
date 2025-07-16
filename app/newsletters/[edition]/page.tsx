import { Metadata } from 'next';
import NewsletterPage from '../../../components/NewsletterPage';
import { getAllEditionIds, getEditionMeta } from '../../../lib/newsletters';

export async function generateStaticParams() {
  return getAllEditionIds().map((edition) => ({ edition }));
}

export async function generateMetadata({ params }: { params: { edition: string } }): Promise<Metadata> {
  const meta = getEditionMeta(params.edition);
  return {
    title: `${meta.title} - NeonBytes`,
  };
}

export default async function Page({ params }: { params: { edition: string } }) {
  const meta = getEditionMeta(params.edition);
  const Content = (await import(`../../../newsletters/${params.edition}.md`)).default;

  return (
    <NewsletterPage meta={meta}>
      <Content />
    </NewsletterPage>
  );
}
