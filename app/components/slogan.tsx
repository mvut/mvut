'use client'
import Students from '@/public/resources/welcome.jpg';
import Image from "next/image";
import Link from "next/link";
// import {useEffect, useState} from "react";

export default function SloganPage(){
    // const [applicants, setApplicants] = useState<any[]>([]);
    //
    // useEffect(() => {
    //     fetch('/api/auth/getapplicants',{next:{revalidate:1}, method: 'PUT'})
    //         .then((res) => res.json())
    //         .then((applicants) => {
    //             setApplicants(applicants)
    //         })
    // }, [applicants]);
    return (
        <div className="flex flex-col md:flex-row md:p-4 py-16 bg-teal-900 w-full items-center justify-center">
            <div className={'flex items-center justify-center flex-col w-1/2 md:leading-relaxed '}>
                <p className={'text-xl leading-relaxed text-teal-200 md:text-5xl md:py-10'}> Admission open</p>
                <div className={'flex items-center justify-center gap-2'}>
                    <Link href={'/pages/apply'} className={'text-md bg-red-600 text-gray-50 rounded-lg uppercase hover:bg-amber-600 p-2 px-6'}>apply</Link>
                    {/*<Link href={'/pages/faculty'} className={'text-md bg-teal-950 text-teal-300 rounded-full uppercase hover:bg-teal-800 p-2 px-6'}>faculty</Link>*/}
                </div>
            </div>
            {/*<div className={'flex items-center justify-center flex-col w-1/3 md:leading-relaxed'}>*/}
            {/*    <p className={'flex flex-col items-center justify-center text-xl p-1 text-amber-200'}>Application Received</p>*/}
            {/*    <p className={'text-gray-50 text-xl'}>{ applicants && applicants[0]?.applicants }</p>*/}
            {/*</div>*/}
            <div className={'hidden md:flex items-center justify-center w-1/2'}>
                <Image src={Students} alt={''}
                       className={'md:h-96 md:w-auto shadow-amber-200 rounded-l-full border-l-4 border-r-2 border-amber-300 '}/>
            </div>
        </div>
    )
}