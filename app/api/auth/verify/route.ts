import { sql } from '@vercel/postgres';
import {NextResponse} from "next/server";
export async function PUT(request: Request) {
    const { searchParams } = new URL(request.url);
    const cvn= searchParams.get('cvn');
    try {
        const { rows, fields }  = await sql`select * from degree_verfication where cvn=${cvn}`;
        return NextResponse.json(rows);

    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}