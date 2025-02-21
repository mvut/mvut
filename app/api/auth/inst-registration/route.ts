import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        const {institute_name, emis_code, head_teacher, email, whatsapp, address } = await request.json();
        console.log({institute_name, emis_code, head_teacher, email, whatsapp, address});
        await sql`INSERT INTO institute_registration (institute_name, emis_code, head_teacher, email, whatsapp, address) VALUES (${institute_name}, ${emis_code}, ${head_teacher}, ${email}, ${whatsapp}, ${address})`;
        return NextResponse.json({ message: "Your Application has been received successfully" });
    } catch (e) {
        console.log({ e });
        return NextResponse.json({ message: "Error: Unable to submit application" }, { status: 500 });
    }
}
