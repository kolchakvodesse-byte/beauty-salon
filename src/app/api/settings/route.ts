import { NextRequest, NextResponse } from 'next/server';
import { getSiteSettings } from '@/lib/supabase/queries';

export async function GET(req: NextRequest) {
  try {
    const settings = await getSiteSettings();
    return NextResponse.json(settings);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
