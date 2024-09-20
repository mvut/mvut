import {NextResponse} from "next/server";
import { hash } from 'bcrypt';
import {sql} from '@vercel/postgres'
export async function POST(request: Request) {
    try{
        const {login_id, login_key, full_name, email, designation, dob, whatsapp, status} = await request.json();
        console.log({login_id, login_key, full_name, email, designation, dob, whatsapp, status});
        const hashedLoginKey = await hash(login_key,10);
        const response = await sql`insert into sys_users (login_id, login_key, full_name, email, designation, dob, whatsapp, status) VALUES (${login_id},${hashedLoginKey},${full_name}, ${email}, ${designation}, ${dob}, ${whatsapp}, ${status})`;

    }catch(e){
        console.log({e});
    }
    return NextResponse.json({message:"success"});
}