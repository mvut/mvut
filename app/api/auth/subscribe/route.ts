import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        // 1. Destructure with all your fields
        const {
            email
        } = await request.json();

        // 2. Log received data
        console.log({
            email
        });

        // 3. Execute SQL insertion
        await sql`
            INSERT INTO newsletter_subscribers (
                email, source
            ) VALUES (
                ${email}, 'website_footer'
            )
        `;

        // 4. Return success response
        return NextResponse.json({
            success: true,
            message: "Successfully subscribed to our newsletter!"
        });

    } catch (error: any) {
        // 5. Error handling
        console.error('Route Error:', error);

        // Handle unique constraint violation (duplicate email)
        if (error.code === '23505') {
            return NextResponse.json({
                success: false,
                message: "This email is already subscribed to our newsletter."
            }, { status: 409 });
        }

        return NextResponse.json({
            success: false,
            message: "Error: Unable to subscribe to newsletter"
        }, { status: 500 });
    }
}