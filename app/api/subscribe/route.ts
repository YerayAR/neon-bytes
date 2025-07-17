import { NextRequest, NextResponse } from 'next/server';
import { addSubscriber, Subscriber } from '../../../lib/subscribers';
import { rateLimit } from '../../../lib/rateLimit';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Variables de entorno requeridas
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// Función para enviar email
async function sendEmail(to: string, subject: string, text: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    }
  });

  try {
    const mailOptions = {
      from: EMAIL_USER,
      to,
      subject,
      text,
      html: `<pre>${text}</pre>`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error enviando email:', error);
    throw error;
  }
}

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

  if (!EMAIL_USER || !EMAIL_PASS) {
    return NextResponse.json(
      { error: 'EMAIL_USER and EMAIL_PASS must be set' },
      { status: 500 }
    );
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }


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
    
    // Enviar email real
    await sendEmail(adminEmail, subject, body);
    
  } catch (error) {
    console.error('Error al enviar notificación:', error);
  }
  
  return NextResponse.json({ ok: true });
}
