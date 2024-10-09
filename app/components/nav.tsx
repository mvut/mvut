'use client'
const inter = Rosario({ subsets: ["latin"], weight:['400'] });
import {Milonga, Rosario, Russo_One} from "next/font/google";
import Link from "next/link";
import { IoSchoolSharp } from "react-icons/io5";

export default function NavComponent(){
return(
    <div
        className={`flex h-72 md:min-h-screen items-center justify-start bg-[url('../public/resources/ai-generated.jpg')] bg-cover `}>
            <p className={'flex flex-col text-gray-300 text-center md:w-1/2 items-center justify-end leading-relaxed text-xl lg:text-4xl md:pr-6'}>
                Welcome to Mansha Virtual Institute of Technologies.
                Join us on a Transformative Journey today!

                <Link className={'flex items-center justify-center text-lg text-gray-100 rounded-sm hover:bg-amber-600 p-2 mt-10 bg-red-600 transition-all ease-linear delay-75 gap-2'} href={'/pages/apply'}>
                    Get Admission<IoSchoolSharp size={35}/>
                </Link>
            </p>
    </div>
)
}