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
        <div className={'flex flex-col '}>
            <div
                className={'flex h-auto flex-col sm:flex-row items-center justify-center sm:justify-between sm:px-4 sm:py-4 bg-gray-950 text-gray-50 '}>
                <div className={'flex flex-row  justify-center sm:flex-col'}>
                    <Link className={'font-bold text-2xl uppercase'} href={'/'}>Mvut</Link>
                    <p className={'hidden sm:flex text-xs text-white uppercase'}>Empowering People for Next Century</p>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <div className={'text-xs text-amber-200'}>
                        <Link href={'/pages/news'}>News & Events</Link>
                    </div>
                    <nav className={'flex items-center justify-center uppercase gap-2'}>
                        <Link href={'/'} className={'bg-teal-900 rounded-lg py-2 px-6 hover:bg-amber-600'}>Home</Link>
                        <Link href={'/pages/faculty'}
                              className={'bg-teal-900 rounded-lg py-2 px-6 hover:bg-amber-600'}>Faculty</Link>
                        <Link href={'/pages/apply'} className={'bg-red-600 rounded-lg py-2 px-6 hover:bg-indigo-800'}>Apply</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}