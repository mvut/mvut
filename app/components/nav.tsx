'use client'

import Link from "next/link";

export default function NavComponent(){
return(
    <div
        className={"flex h-72 md:min-h-screen items-center justify-center bg-[url('../public/resources/ai-generated.jpg')] bg-fixed bg-cover"}>
            <p className={'flex flex-col text-gray-50 text-center md:w-1/2 items-center justify-end leading-relaxed  text-3xl lg:text-7xl md:pr-6'}>
                Unlocking Potential through Quality Education, Logical Inquiry, Human Compassion, and Intelligent
                Innovation.
                <Link className={'text-lg bg-amber-600 p-2 mt-10 hover:bg-red-600 transition-all ease-linear delay-75'} href={'/pages/apply'}>Get Admission</Link>
            </p>
        <p className={'flex text-gray-50 text-center md:w-1/2 items-center justify-end leading-relaxed text-3xl lg:text-7xl md:pr-6'}>

        </p>
    </div>
)
}