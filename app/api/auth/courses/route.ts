import { sql } from '@vercel/postgres';
import {NextResponse} from "next/server";
export async function PUT(request: Request){
    const { rows }  = await sql`SELECT * FROM courses`;
    return NextResponse.json(rows[0]);
}