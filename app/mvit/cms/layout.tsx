'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/mvit_logo_1.png";
import {signOut} from "next-auth/react";
import {RiLogoutCircleLine} from "react-icons/ri";

export default function CmsLayout({children,}: { children: React.ReactNode;}) {
    return (
        <>
            <div className={'flex items-center justify-between h-24 bg-stone-900 px-10 text-gray-200'}>
                <div className={'flex items-center justify-center gap-2'}>
                    <Image src={Logo} alt={'MVIT Logo'} className={'w-16 h-16'}/>
                    <p className={'text-3xl'}>MVIT Management System</p>
                </div>

                <span className={'flex items-center justify-center'} onClick={() => {
                    signOut();
                }}>
                    Logout <RiLogoutCircleLine size={25}/>
                </span>
            </div>
            <div className={'flex '}>
                <div className={'flex flex-col w-1/5 bg-slate-200   p-6'}>

                        <Link href={'/mvit/cms'}>Home</Link>
                        <Link href={'/mvit/cms/add-user'}>Add User</Link>
                        <Link href={'/mvit/cms/registerStudent'}>Register Student</Link>

                </div>

                <div className={'w-4/5'}>
                    {children}
                </div>
            </div>
        </>
    );
}