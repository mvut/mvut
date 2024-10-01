import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        const { full_name, father_mother_name, dob, email, mobile, country, study_program, program_fee, semester_enrolled_in, student_login_id, student_login_password,account_status } = await request.json();
        console.log({ full_name, father_mother_name, dob, email, mobile, country, study_program, program_fee, semester_enrolled_in, student_login_id, student_login_password,account_status});
        await sql`INSERT INTO student_registration (full_name, father_mother_name, dob, email, mobile, country, study_program, program_fee, semester_enrolled_in, student_login_id, student_login_password,account_status) VALUES (${full_name}, ${father_mother_name}, ${dob}, ${email}, ${mobile}, ${country}, ${study_program}, ${program_fee}, ${semester_enrolled_in}, ${student_login_id}, ${student_login_password}, ${account_status})`;
        return NextResponse.json({ message: "Student has been received successfully" });
    } catch (e) {
        console.log({ e });
        return NextResponse.json({ message: "Error: Unable to Register Student" }, { status: 500 });
    }
}
