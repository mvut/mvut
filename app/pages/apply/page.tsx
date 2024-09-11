'use client'
import Link from "next/link";
import {FormEvent} from "react";
import {useRouter} from "next/navigation";
export default function ApplicationForm(){
    const router = useRouter();
    const programs =[
        {id:1, program:"Full Stack Development with Next.js (FSDN)", open:true, duration:''},
        {id:2, program:"Artificial Intelligence (AI)", open:false},
        {id:3, program:"Web Designing and Graphics (WD&G)", open:false},
        {id:4, program:"Data Science (DS)", open:false},
        {id:5, program:"Research and Development (R&D)", open:false},
        {id:6, program:"Interpersonal Skills (IPS)", open:false},
        {id:7, program:"Core Web Technologies (CWT)", open:false},
        {id:8, program:"Python Programming for AI (PyAI)", open:false},
        {id:9, program:"PHP Web Programming Course (PWPC)", open:false},
        {id:10, program:"JavaScript Programming Course (JSC)", open:false},
        {id:11, program:"Web Development Techniques (WDT)", open:false},
        {id:12, program:"C/C++ & OOP", open:false},
        {id:13, program:"UX/UI Development", open:false},
        {id:14, program:"AI and Machine Learning", open:false},
        {id:15, program:"Generative AI (GenAI)", open:false},
        {id:16, program:"Full Stack Blockchain Applications (FSBA)", open:true},
        {id:17, program:"Office Management (OMC)", open:false},
        {id:18, program:"Leadership and Management Dynamics", open:false},
        {id:19, program:"Primary School Certificate (PSC)", open:false},
        {id:20, program:"Elementary School Certificate (ESC)", open:false},
        {id:21, program:"Secondary School Certificate (SSC)", open:false},
        {id:22, program:"Higher Secondary School Certificate (HSSC)", open:false},
        {id:23, program:"BS of Computer Science", open:false},
        {id:24, program:"PGD in Computer Science", open:false},
        {id:25, program:"MS in Computer Science", open:false},
        {id:26, program:"Ph.D. in Computer Science", open:false},
    ];

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch('/api/auth/apply', {
            method: 'POST',
            body: JSON.stringify({
                fullname:formData.get("fullname"),
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
                  className={'flex flex-col md:w-1/2 items-start justify-center md:gap-6 p-2 lg:pl-16'}>
                <p className={'text-teal-900 text-2xl font-bold text-center'}>Application Form</p>

                <input type={'text'} placeholder={'Enter your full name'}
                       className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                       required={true} name={'fullname'}/>

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
                       required={true} name={'whatsapp'} pattern={'^(?:\\+?\\d{1,3}[- ]?)?\\(?\\d{3}\\)?[- ]?\\d{3}[- ]?\\d{4}$'}
                />

                <div className={'flex flex-col'}>
                    <label className={'text-teal-900'}>Choose Program:</label>
                    <select className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'} name={'program'}>
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
                        {/*<option value={2}>Onsite</option>*/}
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
                          className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 py-2 mt-2'}>Back</Link>

                </div>
            </form>

        </div>
    )
}