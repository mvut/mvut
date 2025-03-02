'use client'
import React, {FormEvent} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
export default function InstituteRegistration(){
    const router = useRouter();
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch('/api/auth/std-enrollment', {
            method: 'POST',
            body: JSON.stringify({
                student_name:formData.get("student_name"),
                father_name:formData.get("father_name"),
                emis_code:formData.get("emis_code"),
                grade:formData.get("grade"),
                session:formData.get("session"),
            })
        })
        if(response.ok){
            alert('Student Enrolled Successfully');
            console.log(response)
            router.push('/qac');
            router.refresh();
        }else{  alert("Server Error!");
        }
    };

    return(
        <div className={'container py-16'}>
           <div className={''}>
               <h1 className={'text-3xl py-6 '}>Student Enrollment</h1>
               {/*<p className={'leading-relaxed'}>*/}
               {/*    The Quality Assurance Test (QAT) is a systematic evaluation process designed to ensure that Quality of Education meet predetermined standards, requirements, and specifications. Conducted by independent testers, QAT involves a series of rigorous tests, inspections, and analyses to identify defects, discrepancies, and areas for improvement. By verifying conformance to quality, reliability, and performance criteria, QAT provides stakeholders with confidence that the deliverables are fit for purpose, reliable, and meet user expectations, ultimately enhancing customer satisfaction and loyalty.*/}
               {/*</p>*/}
           </div>

            <form onSubmit={handleSubmit}>

               <div className={'flex flex-col '}>
                    <label>Student Name</label>
                    <input type={'text'} placeholder={'Enter full name of student'}
                           className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'student_name'}/>
               </div>

                <div className={'flex flex-col '}>
                    <label>Father Name</label>
                    <input type={'text'} placeholder={'Enter student father name'}
                           className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'father_name'}/>
                </div>


                <div className={'flex flex-col '}>
                    <label>Institute Name</label>
                    <select className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                            name={'emis_code'}>

                        <option value={'36210125'}>GES PACCA SIDHAR</option>
                        <option value={'36210128'}>GPS BAHU KEY DOGAR</option>
                        <option value={'36210136'}>GPS 3 EB</option>
                        <option value={'36210121'}>GPS 3 KB</option>
                        <option value={'36210133'}>GPS TAI JAWIND SINGH</option>
                        <option value={'36210127'}>GPS 35 SP</option>
                        <option value={'36210124'}>GPS ARIF ABAD</option>
                        <option value={'39210144'}>GPS DHAWANA</option>
                        <option value={'39210476'}>GPS GURU WALA</option>
                        <option value={'36210119'}>GPS OPANA</option>

                    </select>
                </div>


                <div className={'flex flex-col '}>
                    <label>Grade / Class</label>
                    <select className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                            name={'grade'}>
                        <option value={'Nursery'}>Nursery</option>
                        <option value={'Grade-I'}>Grade-I</option>
                        <option value={'Grade-II'}>Grade-II</option>
                        <option value={'Grade-III'}>Grade-III</option>
                        <option value={'Grade-IV'}>Grade-IV</option>
                        <option value={'Grade-V'}>Grade-V</option>
                        <option value={'Grade-VI'}>Grade-VI</option>
                        <option value={'Grade-VII'}>Grade-VII</option>
                        <option value={'Grade-VIII'}>Grade-VIII</option>
                    </select>
                </div>


                <div className={'flex flex-col '}>
                    <label>Session</label>
                    <select className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                            name={'session'}>
                        <option value={'2025-26'}>2025-26</option>
                    </select>
                </div>

                <div className={'flex gap-2 py-6'}>
                    <button type={'submit'}
                            className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 py-2 mt-2'}>
                        Enroll
                    </button>

                    <Link href={'/qac'}
                          className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 py-2 mt-2'}>Back
                    </Link>

                </div>
            </form>
        </div>
    )
}