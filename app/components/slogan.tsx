'use client'
import Students from '@/public/resources/welcome.jpg';
import Image from "next/image";
import Link from "next/link";
import Countdown from "@/app/components/countdown";
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
    // }, []);
    // console.log(applicants);
    return (
        <div className="flex flex-col sm:flex-row bg-gradient-to-r from-stone-900 to-stone-600 w-full items-center justify-center">
            <div className={'flex items-center justify-center flex-col md:w-1/3 md:leading-relaxed '}>
                {/*<div className={'flex items-center justify-center'}>*/}
                {/*    <p className={'text-xl text-gray-50'}>Total Applicants</p>*/}
                {/*    <p className={'bg-red-500 p-2 text-xl rounded-full font-bold text-amber-200'}>0{Number(applicants)}</p>*/}
                {/*</div>*/}
                <p className={'text-xl sm:py-4 leading-relaxed text-teal-200 md:text-3xl '}>Opportunity is knocking.</p>
                <p className={'text-lg leading-relaxed text-teal-200 md:text-2xl '}>It’s time to open the door.</p>
                <div className={'flex items-center justify-center gap-2 py-6'}>
                    <Link href={'/pages/apply'}
                          className={'text-md bg-red-600 text-gray-50 uppercase hover:bg-amber-600 p-2 px-4'}>Apply Today</Link>
                </div>
            </div>

            <div className={'flex items-center justify-center flex-col w-1/3 md:leading-relaxed'}>
                <Countdown/>

            </div>
            <div className={'hidden lg:flex items-center justify-center w-1/3'}>
                <Image src={Students} alt={''}
                       className={'shadow-amber-200 rounded-l-full border-l-4 border-r-2 border-amber-300 '}/>
            </div>
        </div>
    )
}