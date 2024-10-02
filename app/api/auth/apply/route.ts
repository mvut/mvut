import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        const { full_name, father_name, qualification, institute, total_marks, obtained_marks, gmail, dob, whatsapp, program, campus, semester, classes, country } = await request.json();
        console.log({ full_name, father_name, qualification, institute, total_marks, obtained_marks, gmail, dob, whatsapp, program, campus, semester, classes, country });
        await sql`INSERT INTO admissions (full_name, father_name, qualification, institute, total_marks, obtained_marks, gmail, dob, whatsapp, program, campus, semester, classes, country) VALUES (${full_name}, ${father_name}, ${qualification}, ${institute}, ${total_marks}, ${obtained_marks}, ${gmail}, ${dob}, ${whatsapp}, ${program}, ${campus}, ${semester}, ${classes}, ${country})`;
        return NextResponse.json({ message: "Your Application has been received successfully" });
    } catch (e) {
        console.log({ e });
        return NextResponse.json({ message: "Error: Unable to submit application" }, { status: 500 });
    }
}
