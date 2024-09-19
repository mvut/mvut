'use client'
import {useEffect, useState} from "react";
import Link from "next/link";

export default function StatisticsComponent(){
    const [applicants, setApplicants] = useState<any[]>([]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            fetch('/api/auth/getapplicants', {
                method: 'PUT',
                next: { revalidate: 1 },
            })
                .then((res) => res.json())
                .then((applicants) => {
                    setApplicants(applicants);
                });
        }, 1000); // update every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return(
        <div className={'flex flex-col sm:flex-row bg-teal-950 h-auto items-center justify-center gap-4 py-16'}>
            <div className={'flex flex-col items-center justify-center '}>
                <p className={'flex items-center justify-center text-5xl text-gray-50 bg-stone-950 h-24 w-48 rounded-lg'}>{Number(applicants)}+</p>
                <p className={'flex items-center justify-center text-xl text-amber-200 bg-indigo-950 h-12 w-52  transition-all ease-linear delay-75'}>
                    <Link href={'/pages/candidatelist'} className={'hover:underline hover:underline-offset-4 hover:text-gray-200'}>Applicants</Link>
                </p>
            </div>

            <div className={'flex flex-col items-center justify-center '}>
                <p className={'flex items-center justify-center text-5xl text-gray-50 bg-stone-950 h-24 w-48 rounded-lg'}>100+</p>
                <p className={'flex items-center justify-center text-xl text-amber-200 bg-indigo-950 h-12 w-52'}>
                    <Link href={'/pages/faculty'} className={'hover:underline hover:underline-offset-4 hover:text-gray-200'}>Faculty</Link>
                </p>
            </div>

            <div className={'flex flex-col items-center justify-center '}>
                <p className={'flex items-center justify-center text-5xl text-gray-50 bg-stone-950 h-24 w-48 rounded-lg'}>10+</p>
                <p className={'flex items-center justify-center text-xl text-amber-200 bg-indigo-950 h-12 w-52'}>
                    <Link href={'/pages/study'} className={'hover:underline hover:underline-offset-4 hover:text-gray-200'}>Programs</Link>
                </p>
            </div>

            <div className={'flex flex-col items-center justify-center '}>
                <p className={'flex items-center justify-center text-5xl text-gray-50 bg-stone-950 h-24 w-48 rounded-lg'}>150+</p>
                <p className={'flex items-center justify-center text-xl text-amber-200 bg-indigo-950 h-12 w-52'}>
                    <Link href={'/pages/courses'} className={'hover:underline hover:underline-offset-4 hover:text-gray-200'}>Courses</Link>
                </p>
            </div>
        </div>
    )
}