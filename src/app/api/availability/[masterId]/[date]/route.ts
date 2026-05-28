import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ masterId: string; date: string }> }
) {
  try {
    const { masterId, date } = await params;

    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('booking_time, duration_minutes')
      .eq('master_id', masterId)
      .eq('booking_date', date)
      .in('status', ['pending', 'confirmed']);

    if (error) throw error;

    // Get master schedule
    const dateObj = new Date(date);
    const dayOfWeek = dateObj.getDay();

    const { data: schedule } = await supabase
      .from('master_schedules')
      .select('start_time, end_time')
      .eq('master_id', masterId)
      .eq('day_of_week', dayOfWeek)
      .single();

    if (!schedule) {
      return NextResponse.json({ slots: [], error: 'Master not available on this day' });
    }

    // Calculate available slots
    const slots: string[] = [];
    const startMinutes = timeToMinutes(schedule.start_time);
    const endMinutes = timeToMinutes(schedule.end_time);
    const slotDuration = 60; // 60 minutes service

    for (let time = startMinutes; time + slotDuration <= endMinutes; time += 15) {
      const slotTime = minutesToTime(time);
      const isBooked = bookings?.some((b) => b.booking_time === slotTime);
      if (!isBooked) {
        slots.push(slotTime);
      }
    }

    return NextResponse.json({ slots });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}
