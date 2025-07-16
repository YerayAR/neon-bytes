import { NextRequest, NextResponse } from 'next/server';
import { addSubscriber } from '../../../lib/subscribers';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  profession: z.string(),
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
  await addSubscriber(result.data);
  return NextResponse.json({ ok: true });
}
