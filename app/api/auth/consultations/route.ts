import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        // 1. Destructure with all your fields
        const {
            firstName, lastName, email, company, phone,
            companySize, challenge, preferredDate, preferredTime, budget
        } = await request.json();

        // 2. Log received data
        console.log({
            firstName, lastName, email, company, phone,
            companySize, challenge, preferredDate, preferredTime, budget
        });

        // 3. Execute SQL insertion
        await sql`
            INSERT INTO consultations (
                first_name, last_name, email, company, phone,
                company_size, challenge, preferred_date, preferred_time, budget_range
            ) VALUES (
                ${firstName}, ${lastName}, ${email}, ${company}, ${phone},
                ${companySize}, ${challenge}, ${preferredDate}, ${preferredTime}, ${budget}
            )
        `;

        // 4. Return success response
        return NextResponse.json({
            success: true,
            message: "Consultation booked successfully! We'll contact you soon to confirm your schedule."
        });

    } catch (error) {
        // 5. Error handling
        console.error('Route Error:', error);
        return NextResponse.json({
            success: false,
            message: "Error: Unable to book consultation"
        }, { status: 500 });
    }
}