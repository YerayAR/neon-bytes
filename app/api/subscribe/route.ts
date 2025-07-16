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
  return NextResponse.json({ ok: true });
}
