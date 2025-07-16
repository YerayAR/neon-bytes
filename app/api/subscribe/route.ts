import { NextRequest, NextResponse } from 'next/server';
import { addSubscriber, Subscriber } from '../../../lib/subscribers';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  profession: z.string().min(1),
  interests: z.array(z.string()),
  gdpr: z.literal(true),
});

/**
 * Endpoint para registrar un nuevo suscriptor.
 */
export async function POST(req: NextRequest) {
  const data = await req.json();
  const result = schema.safeParse(data);
  if (!result.success) {
    return NextResponse.json({ error: 'invalid' }, { status: 400 });
  }
  
  // Cast to Subscriber type since validation passed
  const subscriberData = result.data as Subscriber;
  await addSubscriber(subscriberData);
  
  // Enviar notificación por email al admin
  try {
    const adminEmail = 'yera217@gmail.com';
    const subject = `Nueva suscripción a NeonBytes: ${subscriberData.email}`;
    const body = `
      ¡Nueva suscripción a NeonBytes!
      
      Nombre: ${subscriberData.name}
      Email: ${subscriberData.email}
      Profesión: ${subscriberData.profession}
      Intereses: ${subscriberData.interests.join(', ')}
      Fecha: ${new Date().toLocaleString('es-ES')}
      
      Saludos,
      Sistema NeonBytes
    `;
    
    console.log('=== NUEVA SUSCRIPCIÓN ===');
    console.log('Notificación para:', adminEmail);
    console.log('Asunto:', subject);
    console.log('Mensaje:', body);
    console.log('=======================');
    
    // TODO: Integrar con servicio de email real (SendGrid, Nodemailer, etc.)
    // await sendEmail(adminEmail, subject, body);
    
  } catch (error) {
    console.error('Error al enviar notificación:', error);
  }
  
  return NextResponse.json({ ok: true });
}
