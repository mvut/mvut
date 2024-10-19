import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        const { full_name, father_name, dob, country, address, email, mobile_no, current_occupation, organization_institution, position_title, service_length, discipline, contributions, statement_of_purpose, social_profile_link } = await request.json();
        console.log({ full_name,
            father_name,
            dob,
            country,
            address,
            email,
            mobile_no,
            current_occupation,
            organization_institution,
            position_title,
            service_length,
            discipline,
            contributions,
            statement_of_purpose,
            social_profile_link });
        await sql`INSERT INTO honorary_phd_applications (full_name, father_name, dob, country, address, email, mobile_no, current_occupation, organization_institution, position_title, service_length, discipline, contributions, statement_of_purpose, social_profile_link) VALUES (${full_name}, ${father_name}, ${dob}, ${country}, ${address}, ${email}, ${mobile_no}, ${current_occupation}, ${organization_institution}, ${position_title}, ${service_length}, ${discipline}, ${contributions}, ${statement_of_purpose}, ${social_profile_link})`;
        return NextResponse.json({ message: "Your Application has been submitted successfully" });
    } catch (e) {
        console.log({ e });
        return NextResponse.json({ message: "Error: Unable to submit application" }, { status: 500 });
    }
}
