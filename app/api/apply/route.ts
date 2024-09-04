import {NextResponse} from "next/server";
import {sql} from '@vercel/postgres'
export async function POST(request: Request) {
    try{
        const {fullname, gmail, whatsapp, program, semester, classes, country} = await request.json();
        console.log({fullname, gmail, whatsapp, program, semester, classes, country});
        const response = await sql`insert into applications (fullname, gmail, whatsapp, program, semester, classes, country) VALUES (${fullname}, ${gmail}, ${whatsapp}, ${program}, ${semester}, ${classes}, ${country})`;
    }catch(e){
        console.log({e});
    }
    return NextResponse.json({message:"Your Application has been received successfully"});
}