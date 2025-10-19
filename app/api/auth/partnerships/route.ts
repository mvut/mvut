import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        // 1. Destructure with all your fields
        const {
            institutionName, contactName, contactEmail, contactPhone,
            institutionType, country, city, studentCount, partnershipType,
            currentChallenges, desiredSupport, budgetRange, timeline, additionalNotes
        } = await request.json();

        // 2. Log received data
        console.log({
            institutionName, contactName, contactEmail, contactPhone,
            institutionType, country, city, studentCount, partnershipType,
            currentChallenges, desiredSupport, budgetRange, timeline, additionalNotes
        });

        // 3. Execute SQL insertion
        await sql`
            INSERT INTO partnership_requests (
                institution_name, contact_name, contact_email, contact_phone,
                institution_type, country, city, student_count, partnership_type,
                current_challenges, desired_support, budget_range, timeline, additional_notes
            ) VALUES (
                ${institutionName}, ${contactName}, ${contactEmail}, ${contactPhone},
                ${institutionType}, ${country}, ${city}, ${studentCount}, ${partnershipType},
                ${currentChallenges}, ${desiredSupport}, ${budgetRange}, ${timeline}, ${additionalNotes}
            )
        `;

        // 4. Return success response
        return NextResponse.json({
            success: true,
            message: "Partnership request submitted successfully"
        });

    } catch (error) {
        // 5. Error handling
        console.error('Route Error:', error);
        return NextResponse.json({
            success: false,
            message: "Error: Unable to submit partnership request"
        }, { status: 500 });
    }
}