import { sql } from '@vercel/postgres';
import {NextResponse} from "next/server";
export async function GET(request: Request){
    const { rows, fields }  = await sql`select * from applications order by id`;
    return NextResponse.json(rows);
}