import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            phone,
            organization,
            trainingCategory,
            preferredDate,
            participants,
            message
        } = body;

        // Validate required fields
        if (!name || !email || !phone || !trainingCategory || !preferredDate) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Insert into database
        const result = await sql`
            INSERT INTO training_bookings (
                name, 
                email, 
                phone, 
                organization, 
                training_category, 
                preferred_date, 
                participants, 
                message, 
                status,
                created_at
            ) VALUES (
                ${name},
                ${email},
                ${phone},
                ${organization},
                ${trainingCategory},
                ${preferredDate},
                ${participants},
                ${message},
                'pending',
                NOW()
            )
            RETURNING id
        `;

        // Here you would typically:
        // 1. Send confirmation email to user
        // 2. Send notification to admin
        // 3. Integrate with calendar system

        return NextResponse.json({
            success: true,
            message: 'Training session booked successfully! We will contact you within 24 hours to confirm details.',
            bookingId: result.rows[0].id
        });

    } catch (error) {
        console.error('Training booking error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        if (email) {
            // Get bookings for specific email
            const result = await sql`
                SELECT * FROM training_bookings 
                WHERE email = ${email} 
                ORDER BY created_at DESC
            `;
            return NextResponse.json({ success: true, bookings: result.rows });
        } else {
            // Get all bookings (for admin)
            const result = await sql`
                SELECT * FROM training_bookings 
                ORDER BY created_at DESC 
                LIMIT 100
            `;
            return NextResponse.json({ success: true, bookings: result.rows });
        }
    } catch (error) {
        console.error('Error fetching training bookings:', error);
        return NextResponse.json(
            { success: false, message: 'Error fetching bookings' },
            { status: 500 }
        );
    }
}