import { sql } from '@vercel/postgres';
import {NextResponse} from "next/server";
export async function PUT(request: Request){
    const { rows, fields }  = await sql`SELECT COUNT(*) FROM applications;`;
    return NextResponse.json(rows);
}