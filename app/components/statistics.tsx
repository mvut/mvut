'use client'
import {useEffect, useState} from "react";

export default function StatisticsComponent(){
    const [applicants, setApplicants] = useState<[]>([]);

    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const response = await fetch('/api/auth/getapplicants', {
                    method: 'PUT',
                    headers: {
                        'Cache-Control': 'no-cache',
                    },
                });
                const data = await response.json();
                setApplicants(data);
            } catch (error) {
                console.log("Error");
            } finally {
                console.log("message");
            }
        };
        fetchApplicants();
    }, []);

    return(
        <div className={'flex flex-col sm:flex-row bg-teal-950 h-auto items-center justify-center gap-4 py-16'}>
            <div className={'flex flex-col items-center justify-center '}>
                <p className={'flex items-center justify-center text-5xl text-gray-50 bg-stone-950 h-24 w-48 rounded-lg'}>{Number(applicants)}</p>
                <p className={'flex items-center justify-center text-xl text-amber-200 bg-indigo-950 h-12 w-52 '}>Applicants</p>
            </div>

            <div className={'flex flex-col items-center justify-center '}>
                <p className={'flex items-center justify-center text-5xl text-gray-50 bg-stone-950 h-24 w-48 rounded-lg'}>100+</p>
                <p className={'flex items-center justify-center text-xl text-amber-200 bg-indigo-950 h-12 w-52'}>Faculties</p>
            </div>

            <div className={'flex flex-col items-center justify-center '}>
                <p className={'flex items-center justify-center text-5xl text-gray-50 bg-stone-950 h-24 w-48 rounded-lg'}>25+</p>
                <p className={'flex items-center justify-center text-xl text-amber-200 bg-indigo-950 h-12 w-52'}>Programs</p>
            </div>

            <div className={'flex flex-col items-center justify-center '}>
                <p className={'flex items-center justify-center text-5xl text-gray-50 bg-stone-950 h-24 w-48 rounded-lg'}>280+</p>
                <p className={'flex items-center justify-center text-xl text-amber-200 bg-indigo-950 h-12 w-52'}>Courses</p>
            </div>
        </div>
    )
}