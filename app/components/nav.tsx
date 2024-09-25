'use client'
const inter = Russo_One({ subsets: ["latin"], weight:['400'] });
import {Milonga, Russo_One} from "next/font/google";
import Link from "next/link";

export default function NavComponent(){
return(
    <div
        className={`${inter.className} flex h-72 md:min-h-screen items-center justify-start bg-[url('../public/resources/ai-generated.jpg')] bg-fixed bg-cover `}>
            <p className={'flex flex-col text-amber-200 text-center md:w-1/2 items-center justify-end leading-relaxed text-sm lg:text-4xl md:pr-6'}>
                Unlocking Potential through Quality Education, Logical Inquiry, Human Compassion, and Intelligent
                Innovation.
                <Link className={'text-lg hover:bg-amber-600 p-2 mt-10 bg-red-600 transition-all ease-linear delay-75'} href={'/pages/apply'}>Get Admission</Link>
            </p>
    </div>
)
}