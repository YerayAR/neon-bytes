// Utilidades para envío de emails
import { getAllSubscribers } from './subscribers';

/**
 * Envía un enlace de newsletter a todos los suscriptores.
 */
export async function sendNewsletterLink(id: string, url: string) {
  const subs = await getAllSubscribers();
  for (const s of subs) {
    await sendEmail(
      s.email,
      `\u00a1Nueva NeonBytes! Edici\u00f3n ${id}`,
      `Lee aqu\u00ed: ${url}`
    );
  }
}

// Función simulada de envío de emails
async function sendEmail(to: string, subject: string, body: string) {
  console.log(`Enviando a ${to}: ${subject} -> ${body}`);
}
