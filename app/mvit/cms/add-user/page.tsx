'use client'
import React, {FormEvent, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
export default function AddUserPage() {
    const router = useRouter();

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch('/api/auth/registersysuser', {
            method: 'POST',
            body: JSON.stringify({
                login_id:formData.get("login_id"),
                login_key:formData.get("login_key"),
                full_name:formData.get("full_name"),
                email:formData.get("email"),
                designation:formData.get("designation"),
                dob:formData.get("dob"),
                whatsapp:formData.get("whatsapp"),
                status:formData.get("status"),
            })
        })
        if(response.ok){
            alert('System User Created Successfully');
            console.log(response)
            router.push('/mvit/cms');
            router.refresh();
        }else{  alert("Server Error!");
        }
    };
    return(
        <div className={' min-h-screen'}>
            {/*  Form  */}
            <form onSubmit={handleSubmit} className={'flex flex-col items-start justify-center md:gap-2 p-2 lg:pl-12'}>

                <p className={'text-teal-900 text-2xl font-bold text-center'}>System User Registration</p>

                <div className={'flex flex-col '}>
                    <label>Select Your Username</label>
                    <input type={'text'} placeholder={'Select Your Username'}
                           className={'h-10 w-64 md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'login_id'}/>
                </div>

                <div className={'flex flex-col '}>
                    <label>Create Your Secure Access Code</label>
                    <input type={'password'} placeholder={'Create Your Secure Access Code'}
                           className={'h-10 w-64 md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'login_key'}/>
                </div>

                <div className={'flex flex-col '}>
                    <label>Enter Full Name </label>
                    <input type={'text'} placeholder={'Enter full name'}
                           className={'h-10 w-64 md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'full_name'}/>
                </div>

                <div className={'flex flex-col '}>
                    <label>Email</label>
                    <input type={'text'} placeholder={'Enter your Email'}
                           className={'h-10 w-64 md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'email'}/>
                </div>

                <div className={'flex flex-col '}>
                    <label>Enter Designation</label>
                    <select className={'h-10 w-64 md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                            name={'designation'}>
                        {/*<option value={1}>Spring 2024</option>*/}
                        <option value={'Fall 2024'}>President</option>
                    </select>
                </div>

                <div className={'flex flex-col'}>
                    <label className={'text-teal-900'}>Date of Birth</label>
                    <input type={'date'}
                           className={'h-10 w-64 md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'dob'}/>
                </div>
                <div className={'flex flex-col '}>
                    <label>WhatsApp</label>
                    <input type={'text'} placeholder={'Enter WhatsApp number with country code'}
                           className={'h-10 w-64 md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                           required={true} name={'whatsapp'}
                    />
                </div>

                <div className={'flex flex-col '}>
                    <label>Status</label>
                    <select className={'h-10 w-64 md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                            name={'status'}>
                        <option value={'Active'}>Active</option>
                    </select>
                </div>
                <div className={'flex gap-2'}>
                    <button type={'submit'}
                            className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 py-2 mt-2'}>Apply
                    </button>
                    <Link href={'/mvit/cms'}
                          className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 py-2 mt-2'}>Back
                    </Link>
                </div>
            </form>
            {/*  Form End  */}
        </div>
    )
}