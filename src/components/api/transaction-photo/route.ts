import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
  try {
    const { email, photoUrl } = await req.json();
    if (!email || !photoUrl) {
      return NextResponse.json({ error: 'Missing email or photoUrl' }, { status: 400 });
    }
    await db.update(users)
      .set({ transactionPhotoUrl: photoUrl })
      .where(eq(users.email, email));
    return NextResponse.json({ message: 'Transaction photo URL saved' });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error ) {
    return NextResponse.json({ error: 'Failed to save transaction photo URL' }, { status: 500 });
  }
} 