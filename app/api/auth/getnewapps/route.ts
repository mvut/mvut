import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { rows } = await sql`
            SELECT * FROM admissions 
            ORDER BY created_at DESC;
        `;
        return NextResponse.json(rows);
    } catch (error) {
        console.error('GET Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch admissions' },
            { status: 500 }
        );
    }
}