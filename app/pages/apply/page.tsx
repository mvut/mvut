'use client'
import Link from "next/link";
import {FormEvent} from "react";
import {useRouter} from "next/navigation";
export default function ApplicationForm(){
    const router = useRouter();
    const programs =[
        {id:1, program:"Office Management and Work Ethics (OM&WE)", open:true},
        {id:2, program:"Core Web Technologies (CWT)", open:true},
        {id:3, program:"Full Stack Development with Next.js (FSDN)", open:true, duration:''},
        {id:4, program:"Full Stack PHP Development (FSP)", open:true},
        {id:5, program:"Primary School Certificate (PSC)", open:true},
        {id:6, program:"Elementary School Certificate (ESC)", open:true},
        {id:7, program:"Secondary School Certificate (SSC)", open:true},
        {id:8, program:"Higher Secondary School Certificate (HSSC)", open:true},
        {id:9, program:"Bachelor of Science in Computer Science (BSCS)", open:true},
        {id:10, program:"PGD in Full Stack Next.js (PGD FSN)", open:true},
        {id:11, program:"PGD in Full Stack PHP (PGD FSP)", open:true},
        {id:12, program:"Master of Science in Full Stack Development MS(FSD)", open:true},
        {id:13, program:"Ph.D. in Full Stack Development (Ph.D. FSD)", open:true},
    ];

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch('/api/auth/apply', {
            method: 'POST',
            body: JSON.stringify({
                fullname:formData.get("fullname"),
                fathername:formData.get("fathername"),
                qualification:formData.get("qualification"),
                gmail:formData.get("gmail"),
                dob:formData.get("dob"),
                whatsapp:formData.get("whatsapp"),
                program:formData.get("program"),
                semester:formData.get("semester"),
                classes:formData.get("classes"),
                country:formData.get("country"),
            })
        })
        if(response.ok){
            alert('Entry Saved Successfully');
            console.log(response)
            router.push('/');
            router.refresh();
        }else{  alert("Server Error!");
        }
    };

    return(
        <div className={'flex flex-row md:min-h-screen items-center justify-center'}>
            <div className={'hidden md:flex md:flex-col min-h-screen md:w-1/2 bg-teal-400 items-center justify-center md:gap-8'}>
                <p className={'text-teal-100 text-5xl font-bold text-center'}>Build a Career</p>
                <p className={'text-teal-500 text-6xl font-bold text-center'}>Admission Open</p>
            </div>

            <form onSubmit={handleSubmit}
                  className={'flex flex-col md:w-1/2 items-start justify-center md:gap-2 p-2 lg:pl-12'}>
                <p className={'text-teal-900 text-2xl font-bold text-center'}>Application Form</p>

                <input type={'text'} placeholder={'Enter your full name'}
                       className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                       required={true} name={'fullname'}/>

                <input type={'text'} placeholder={'Enter your father name'}
                       className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                       required={true} name={'fathername'}/>

                <div className={'flex flex-col '}>
                    <label>Latest Qualification</label>
                    <select className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'} name={'qualification'}>
                        <option value={'Online'}>Primary School Certificate (PSC)</option>
                        <option value={'Onsite'}>Elementary School Certificate (ESC)</option>
                        <option value={'Onsite'}>Secondary School Certificate (SSC)</option>
                        <option value={'Onsite'}>Higher Secondary School Certificate (HSSC)</option>
                        <option value={'Onsite'}>Bachelor of Science (B.S.)</option>
                        <option value={'Onsite'}>Bachelor of Arts (B.A.)</option>
                        <option value={'Onsite'}>Post Graduate Diploma</option>
                        <option value={'Onsite'}>Master of Science</option>
                        <option value={'Onsite'}>Master of Arts</option>
                        <option value={'Onsite'}>Doctor of Philosophy (Ph.D.)</option>
                    </select>
                </div>

                <input type={'text'} placeholder={'Enter your Email'}
                       className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                       required={true} name={'gmail'}/>

                <div className={'flex flex-col'}>
                    <label className={'text-teal-900'}>Date of Birth:</label>
                    <input type={'date'} placeholder={'Enter your Email account'}
                           className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'dob'}/>
                </div>

                <input type={'text'} placeholder={'Enter WhatsApp number with country code'}
                       className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                       required={true} name={'whatsapp'}
                       pattern={'^(?:\\+?\\d{1,3}[- ]?)?\\(?\\d{3}\\)?[- ]?\\d{3}[- ]?\\d{4}$'}
                />

                <div className={'flex flex-col'}>
                    <label className={'text-teal-900'}>Choose Program(<Link href={'/pages/study'}
                                                                            className={'text-xs text-red-500 hover:text-teal-900'}>Study
                        Scheme </Link>
                        , <Link href={'/pages/study/fee'} className={'text-xs text-red-500 hover:text-teal-900'}>Fee
                            Structure </Link>)</label>
                    <select className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200 '} name={'program'}>
                        {
                            programs ?
                                programs.map((program) => {
                                    return program["open"] && <option key={program["id"]} value={program["program"]}>
                                        {program["program"]}
                                    </option>
                                }) : null
                        }
                    </select>
                </div>

                <div className={'flex flex-col '}>
                    <label>Semester</label>
                    <select className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'} name={'semester'}>
                        {/*<option value={1}>Spring 2024</option>*/}
                        <option value={'Fall 2024'}>Fall 2024</option>
                    </select>
                </div>

                <div className={'flex flex-col '}>
                    <label>Classes</label>
                    <select className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'} name={'classes'}>
                        <option value={'Online'}>Online</option>
                        <option value={'Onsite'}>Onsite (Only in Pakpattan)</option>
                    </select>
                </div>

                <div className={'flex flex-col '}>
                    <label>Country</label>
                    <select className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'} name={'country'}>
                        <option value={'Pakistan'}>Pakistan</option>
                        {/*<option value={2}>Onsite</option>*/}
                    </select>
                </div>

                <div className={'flex gap-2'}>
                    <button type={'submit'}
                            className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 py-2 mt-2'}>Apply
                    </button>
                    <Link href={'/'}
                          className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 py-2 mt-2'}>Back
                    </Link>
                </div>
            </form>

        </div>
    )
}