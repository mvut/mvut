'use client'
import Logo from "@/public/mvit_logo.png";
import Image from "next/image";
import Link from "next/link";
import {FaWhatsapp} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

export default function NavComponent(){
return(
    <div className={'flex sm:w-full bg-teal-800 items-center justify-center'}>
        <div
            className={'flex flex-col sm:flex-row sm:p-6 text-center lg:min-h-screen items-center justify-center sm:justify-between '}>
            <div className={'flex items-center justify-center sm:w-1/2 h-full'}>
                <Image src={Logo} alt="MVUT Logo"
                       className={'h-32 w-32 sm:h-72 sm:w-72 md:h-96 md:w-96 '}/>
            </div>
            <div className={'flex flex-col items-center justify-center sm:w-1/2'}>
                <p className={'text-xs lg:leading-relaxed sm:text-xl text-teal-100  md:text-2xl lg:text-4xl h-full'}>
                    Unlocking Potential through Quality Education, Logical Inquiry, Human Compassion, and Intelligent
                    Innovation.
                </p>
                {/*<div className={'flex gap-2 text-teal-200 py-10'}>*/}

                {/*    <Link target="_blank" href="https://chat.whatsapp.com/CFrP44L2ZbP9V01e1lcTN7"*/}
                {/*          className="hover:text-teal-500">*/}
                {/*        <FaWhatsapp size={25}/>*/}
                {/*    </Link>*/}

                {/*    <Link target="_blank" href="https://web.facebook.com/mvutus" className=" hover:text-teal-500">*/}
                {/*        <FaFacebookF size={25}/>*/}
                {/*    </Link>*/}

                {/*    <Link target="_blank" href="https://www.youtube.com/@mvut" className=" hover:text-teal-500">*/}
                {/*        <CiYoutube  size={25}/>*/}
                {/*    </Link>*/}

                {/*</div>*/}
            </div>
        </div>
    </div>
)
}