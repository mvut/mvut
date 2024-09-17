import { sql } from '@vercel/postgres';
import {NextResponse} from "next/server";
export async function GET(request: Request){
    const { rows, fields }  = await sql`SELECT COUNT(*) AS applicants FROM applications;`;
    return NextResponse.json(rows[0].applicants);
}