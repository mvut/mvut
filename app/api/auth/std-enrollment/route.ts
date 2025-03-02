import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        const {student_name, father_name, emis_code, grade, session } = await request.json();
        console.log({student_name, father_name, emis_code, grade, session});
        await sql`INSERT INTO student_enrollement (student_name, father_name, emis_code, grade, session) VALUES (${student_name}, ${father_name}, ${emis_code}, ${grade}, ${session})`;
        return NextResponse.json({ message: "Your Application has been received successfully" });
    } catch (e) {
        console.log({ e });
        return NextResponse.json({ message: "Error: Unable to submit application" }, { status: 500 });
    }
}
