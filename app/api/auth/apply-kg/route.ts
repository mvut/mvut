import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        const { student_name, father_name, national_identity,dob,mobile,program,school, classes} = await request.json();
        console.log({ student_name, father_name, national_identity,dob,mobile,program,school, classes});
        await sql`INSERT INTO kg_admissions (student_name, father_name, national_identity,dob,mobile,program,school, classes) VALUES (${student_name}, ${father_name}, ${national_identity}, ${dob}, ${mobile}, ${program}, ${school}, ${classes})`;
        return NextResponse.json({ message: "Your Application has been received successfully" });
    } catch (e) {
        console.log({ e });
        return NextResponse.json({ message: "Error: Unable to submit application" }, { status: 500 });
    }
}
