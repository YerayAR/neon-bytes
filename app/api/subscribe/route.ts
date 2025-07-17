import { NextRequest, NextResponse } from 'next/server';
import { addSubscriber, Subscriber } from '../../../lib/subscribers';
import { rateLimit } from '../../../lib/rateLimit';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Configurar el transportador de email
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verificar configuración de email
const verifyEmailConfig = async () => {
  try {
    console.log('Verificando configuración de email...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Configurado' : 'No configurado');
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Configurado' : 'No configurado');
    
    await transporter.verify();
    console.log('✅ Configuración de email verificada correctamente');
    return true;
  } catch (error) {
    console.error('❌ Error en configuración de email:', error);
    return false;
  }
};

// Función para enviar email
async function sendEmail(to: string, subject: string, text: string) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || 'neonbytes.newsletter@gmail.com',
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
  // Verificar configuración de email al inicio
  const emailConfigOk = await verifyEmailConfig();
  if (!emailConfigOk) {
    console.error('❌ Error: Configuración de email no válida');
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
    const adminEmail = process.env.ADMIN_EMAIL || 'yera217@gmail.com';
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
