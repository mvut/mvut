'use client'
import React, {FormEvent} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
export default function InstituteRegistration(){
    const router = useRouter();
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch('/api/auth/inst-registration', {
            method: 'POST',
            body: JSON.stringify({
                institute_name:formData.get("institute_name"),
                emis_code:formData.get("emis_code"),
                head_teacher:formData.get("head_teacher"),
                email:formData.get("email"),
                whatsapp:formData.get("whatsapp"),
                address:formData.get("address"),
            })
        })
        if(response.ok){
            alert('Institute Registered Successfully');
            console.log(response)
            router.push('/qac');
            router.refresh();
        }else{  alert("Server Error!");
        }
    };

    return(
        <div className={'container py-16'}>
           <div className={''}>
               <h1 className={'text-3xl py-6 '}>Institute Registration</h1>
               {/*<p className={'leading-relaxed'}>*/}
               {/*    The Quality Assurance Test (QAT) is a systematic evaluation process designed to ensure that Quality of Education meet predetermined standards, requirements, and specifications. Conducted by independent testers, QAT involves a series of rigorous tests, inspections, and analyses to identify defects, discrepancies, and areas for improvement. By verifying conformance to quality, reliability, and performance criteria, QAT provides stakeholders with confidence that the deliverables are fit for purpose, reliable, and meet user expectations, ultimately enhancing customer satisfaction and loyalty.*/}
               {/*</p>*/}
           </div>

            <form onSubmit={handleSubmit}>

               <div className={'flex flex-col '}>
                    <label>Institute Name</label>
                    <input type={'text'} placeholder={'Enter name of the institute'}
                           className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'institute_name'}/>
               </div>

                <div className={'flex flex-col '}>
                    <label>EMIS Code</label>
                    <input type={'text'} placeholder={'Enter name of the institute'}
                           className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'emis_code'}/>
                </div>

                <div className={'flex flex-col '}>
                    <label>Head Teacher</label>
                    <input type={'text'} placeholder={'Enter Head Teacher Name'}
                           className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'head_teacher'}/>
                </div>

                <div className={'flex flex-col '}>
                    <label>Email</label>
                    <input type={'text'} placeholder={'Enter Principal Name'}
                           className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'email'}/>
                </div>

                <div className={'flex flex-col '}>
                    <label>WhatsApp</label>
                    <input type={'text'} placeholder={'Enter WhatsApp with country code'}
                           className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'whatsapp'}/>
                </div>

                <div className={'flex flex-col '}>
                    <label>Address</label>
                    <input type={'text'} placeholder={'Enter full address with country'}
                           className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'address'}/>
                </div>

                <div className={'flex gap-2 py-6'}>
                    <button type={'submit'}
                            className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 py-2 mt-2'}>
                        Register
                    </button>
                    <Link href={'/qac'}
                          className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 py-2 mt-2'}>Back
                    </Link>
                </div>
            </form>
        </div>
    )
}