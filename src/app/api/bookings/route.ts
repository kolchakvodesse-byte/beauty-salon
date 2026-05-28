import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      service_id,
      master_id,
      booking_date,
      booking_time,
      client_name,
      client_phone,
      email,
      notes,
    } = body;

    // Validate input
    if (!service_id || !master_id || !booking_date || !booking_time || !client_name || !client_phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if slot is available
    const { data: existingBookings } = await supabase
      .from('bookings')
      .select('*')
      .eq('master_id', master_id)
      .eq('booking_date', booking_date)
      .eq('booking_time', booking_time);

    if (existingBookings && existingBookings.length > 0) {
      return NextResponse.json({ error: 'Slot already booked' }, { status: 409 });
    }

    // Get service duration
    const { data: service } = await supabase
      .from('services')
      .select('duration_minutes')
      .eq('id', service_id)
      .single();

    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    // Create booking
    const { data: booking, error } = await supabase
      .from('bookings')
      .insert({
        service_id,
        master_id,
        booking_date,
        booking_time,
        duration_minutes: service.duration_minutes,
        client_name,
        client_phone,
        status: 'pending',
        notes,
      })
      .select();

    if (error) {
      throw error;
    }

    // TODO: Send Telegram notification
    // await notifyTelegram({ booking, email });

    return NextResponse.json({ success: true, booking: booking?.[0] });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
