'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {FaWhatsapp} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa6";
export default function MyHeaderComponent(){
    const [menuOpen, setMenuOpen] = useState(false);
    const handlerNav =()=>{
        setMenuOpen(!menuOpen);
    }
    return(
        <div className={'flex flex-col'}>
            {/*<div className={'flex px-2 items-center justify-center bg-gradient-to-r from-amber-300 to-amber-500'}>*/}
            {/*    <p className={''}>Let`s Bring Clarity, Innovation and Peace Together. Join us on</p>*/}
            {/*    <div className={'sm:flex '}>*/}
            {/*        <Link target="_blank" href="https://chat.whatsapp.com/CFrP44L2ZbP9V01e1lcTN7"*/}
            {/*              className="hover:text-pink-600">*/}
            {/*            <FaWhatsapp size={20}/>*/}
            {/*        </Link>*/}

            {/*        <Link target="_blank" href="https://web.facebook.com/mvutus" className=" hover:text-pink-600">*/}
            {/*            <FaFacebook size={20}/>*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={'flex flex-col sm:flex-row items-center justify-center sm:justify-between sm:px-4 sm:py-4 bg-teal-950 text-gray-50 '}>
                <p className={'font-bold text-2xl uppercase'}>Mvut</p>
                <p className={'text-sm text-white uppercase'}>Empowering People for Next Century</p>
            </div>
        </div>
    );
}