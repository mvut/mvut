'use client'
import React, {FormEvent, useEffect, useState,useCallback} from "react";
import { FaCheck } from "react-icons/fa";

export default function DegreeVerify(){
const [cvn, setCvn] = useState(0);
const [studentData, setStudentData] = useState([]);
    // let url = "/api/auth/verify?cvn=920001";
    const eventHandler = (e:React.ChangeEvent<any>) => {
        setCvn(e.target.value);
    }

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch(`/api/auth/verify?cvn=${cvn}`, {
            method: 'PUT',
            body: JSON.stringify({
                cvn:formData.get("cvn"),
            })
        })
        const data = response.json();
        setStudentData(await data);
    };
    return(
        <div className={'container min-h-screen py-16 '}>
            <p className={'text-3xl py-10'}>Degree Verification System</p>
            <form onSubmit={handleSubmit}>
                <div className={'flex flex-col items-start justify-start gap-2 '}>
                    <label>Enter CVN</label>
                    <input type={'text'} placeholder={'Enter Certificate Verification Number (CVN)'}
                           className={'h-10  md:h-10 w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'cvn'} onChange={eventHandler}/>
                    <button type={"submit"} className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800  px-6 py-2'}>Verify</button>
                </div>
            </form>
                <div className={'py-10'}>
                    <p className={'text-xl font-bold pb-6'}>Verification Details:</p>
                    {studentData?.map((item: any) => <div key={item.id}>
                        <div className={'flex items-center justify-start gap-4'}>
                            <label className={'font-bold'}>Registration Number : </label>
                            <p className={'text-green-600 font-bold'}>{item.registration_number}</p>
                        </div>
                        <div className={'flex items-center justify-start gap-4'}>
                            <label className={'font-bold'}>Candidate Name : </label>
                            <p className={'text-green-600 font-bold'}>{item.candidate_name}</p>
                        </div>
                        <div className={'flex items-center justify-start gap-4'}>
                            <label className={'font-bold'}>Father/Mother Name : </label>
                            <p className={'text-green-600 font-bold'}>{item.father_mother_name}</p>
                        </div>
                        <div className={'flex items-center justify-start gap-4'}>
                            <label className={'font-bold'}>Degree/Certificate Title : </label>
                            <p className={'text-green-600 font-bold'}>{item.degree_certificate_title}</p>
                        </div>
                        <div className={'flex items-center justify-start gap-4'}>
                            <label className={'font-bold'}>Date of Issue : </label>
                            <p className={'text-green-600 font-bold'}>{new Date(item.date_issue).toISOString().split("T")[0]}</p>
                        </div>
                        <div className={'flex items-center justify-start gap-4'}>
                            <label className={'font-bold'}>Country : </label>
                            <p className={'text-green-600 font-bold'}>{item.country}</p>
                        </div>
                        <div className={'flex items-center justify-start gap-4'}>
                            <label className={'font-bold'}>Status : </label>
                            <p className={'text-green-600 font-bold flex items-center justify-center gap-2'}>Verified<FaCheck size={25}/>
                            </p>
                        </div>

                    </div>)}
                </div>
        </div>
    )
}