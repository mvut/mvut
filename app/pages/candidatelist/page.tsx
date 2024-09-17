'use client'
import {useEffect, useState} from "react";

export default function CandidateList(){
    const [applicants, setApplicants] = useState<any[]>([]);
    useEffect(() => {
        fetch('/api/auth/getapplications',{next:{revalidate:1}, method: 'GET'})
            .then((res) => res.json())
            .then((applicants) => {
                setApplicants(applicants)
            })
    }, []);
    return(
        <div className={'container flex flex-col items-center justify-start py-16 overflow-auto'}>
            <p className={'text-lg md:text-5xl font-bold text-center py-2 lg:py-10 uppercase'}>List of Applicants</p>
            <table className="table-auto text-center text-xs sm:text-lg" >
                <thead>
                <tr className={'bg-stone-700 text-gray-50'}>
                    <th className={'text-start p-2'}>ID</th>
                    <th className={'text-start p-2'}>Applicant Name</th>
                    <th className={'text-start p-2'}>Father/ Mother Name</th>
                    <th className={'text-start p-2'}>Program Applied</th>
                    <th className={'text-start p-2'}>Semester</th>
                    <th className={'text-start p-2'}>Country</th>
                </tr>
                </thead>
                <tbody>
                {
                    applicants.map(applicant => <tr key={applicant.id} className={'odd:bg-gray-200 even:bg-teal-100'}>
                        <td className={'text-start p-2'}>{applicant.id}</td>
                        <td className={'text-start p-2'}>{applicant.fullname}</td>
                        <td className={'text-start p-2'}>{applicant.fathername}</td>
                        <td className={'text-start p-2'}>{applicant.program}</td>
                        <td className={'text-start p-2'}>{applicant.semester}</td>
                        <td className={'text-start p-2'}>{applicant.country}</td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}