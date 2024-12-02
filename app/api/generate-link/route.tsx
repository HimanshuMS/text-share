import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';

export async function GET() {
  const id = nanoid(8);
  return NextResponse.json({ link: `${process.env.NEXT_PUBLIC_BASE_URL}/${id}` });
}