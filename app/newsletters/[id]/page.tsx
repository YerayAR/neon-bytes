'use client';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { sendNewsletterLink } from '../../../lib/mailer';

export default function NewsletterPage() {
  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const url = `${process.env.VERCEL_URL}/newsletters/${id}`;
      sendNewsletterLink(id, url);
    }
  }, [id]);

  return (
    <main className="p-4">
      <h1>Edición {id}</h1>
      <article>Contenido próximamente...</article>
    </main>
  );
}
