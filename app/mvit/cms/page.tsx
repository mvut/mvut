'use client'
import { RiLogoutCircleLine } from "react-icons/ri";
import {signOut} from "next-auth/react";
import ImsAddUser from "@/app/mvit/cms/modules/ims-add-user";
import Logo from '@/public/mvit_logo_1.png'
import Image from "next/image";
export default function ManagementSystem(){
    return(
        <div className={'flex flex-col bg-indigo-950 text-gray-50 min-h-screen'}>
            <div className={'flex items-center justify-between h-24 bg-red-700 px-10'}>
                <div className={'flex items-center justify-center gap-2'}>
                    <Image src={Logo} alt={'MVIT Logo'} className={'w-16 h-16'}/>
                    <p>MVIT Management System</p>
                </div>

                <span className={'flex items-center justify-center'} onClick={() => {
                    signOut();
                }}>
                    Logout <RiLogoutCircleLine size={25}/>
                </span>
            </div>
            {/*Main*/}
            <div className={'flex min-h-screen items-center justify-center'}>
               <div className={'flex flex-col items-center justify-center'}><ImsAddUser />Authorisation</div>
            </div>
        {/*  Main end  */}
        </div>
    )
}