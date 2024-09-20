'use client'
import Logo from '@/public/mvit_logo_1.png'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FormEvent} from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function AuthenticationPage(){
    const router = useRouter();
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await signIn('credentials',{login_id:formData.get('login_id'),login_key:formData.get('login_key'),designation:formData.get('designation'), redirect:false});
        console.log(response);
        if(!response?.error){
            if(formData.get('designation') === 'President'){
                router.push('/mvit/cms');
                router.refresh();
                console.log("User Authenticated")
            }else{
                router.push('/mvit');
                router.refresh();
                console.log("Login Error");
            }
        }
    };
    return(
        <div className={'flex flex-row min-h-screen'}>

            {/*Left side*/}
            <div className={'flex flex-col w-[50%] bg-teal-950 items-center justify-center gap-10'}>
                <Image src={Logo} alt={'MVIT Logo'} className={'h-32 w-32'} />
                <p className={'text-gray-50 text-xl'}>Institute Management System (IMS)</p>
            </div>

        {/*  Right side  */}
            <div className={'flex w-[50%] bg-teal-100 text-teal-950'}>
                <form onSubmit={handleSubmit}
                      className={'flex flex-col items-start justify-center md:gap-2 p-2 lg:pl-12'}>

                    <p className={'text-teal-900 text-2xl font-bold text-center'}>Authentication</p>

                    <div className={'flex flex-col '}>
                        <label>Login id</label>
                        <input type={'text'} placeholder={'Select Your Username'}
                               className={'h-10 w-64 md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                               required={true} name={'login_id'}/>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>Login key</label>
                        <input type={'password'} placeholder={'Create Your Secure Access Code'}
                               className={'h-10 w-64 md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                               required={true} name={'login_key'}/>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>Enter Designation</label>
                        <select className={'h-10 w-64 md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}
                                name={'designation'}>
                            {/*<option value={1}>Spring 2024</option>*/}
                            <option value={'President'}>President</option>
                        </select>
                    </div>

                    <div className={'flex gap-2'}>
                        <button type={'submit'}
                                className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 py-2 mt-2'}>Login
                        </button>
                        <Link href={'/'}
                              className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 py-2 mt-2'}>Back
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}