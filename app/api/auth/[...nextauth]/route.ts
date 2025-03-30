import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {compare} from "bcrypt";
import {sql} from "@vercel/postgres";

const handler = NextAuth({
    session:{ strategy:"jwt"},
    pages:{ signIn:"/"},
    providers: [ CredentialsProvider({
        credentials: {
            login_id: { },
            login_key: { },
            designation: { },
        },
        async authorize(credentials, req) {
            const response = await sql`select * from sys_users where login_id=${credentials?.login_id} and designation=${credentials?.designation}`;
            const user = response.rows[0];
            const passwordCorrect =  await compare(credentials?.login_key || "", user.login_key);
            // console.log(passwordCorrect);
            if(passwordCorrect){
                return {
                    id: user.id,
                    login_id: user.login_id,
                    login_key: user.login_key,
                    designation: user.designation,
                }
            }
            return null
        }
    }) ],
})

export {handler as GET, handler as POST}