'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {FaWhatsapp} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa6";
import {signIn} from "next-auth/react";
export default function MyHeaderComponent(){
    const [menuOpen, setMenuOpen] = useState(false);
    const handlerNav =()=>{
        setMenuOpen(!menuOpen);
    }
    return(

            <div className={'flex w-full h-auto flex-col sm:flex-row items-center justify-center sm:justify-between sm:px-4 sm:py-4 bg-gray-950 text-gray-50 shadow-amber-200'}>
                <div className={'flex flex-col justify-center sm:flex-col items-center'}>
                    <Link className={'font-bold text-sm sm:text-2xl uppercase'} href={'/'}>Mvit</Link>
                    {/*<p className={'text-xs text-gray-50'}>Empowering People for Next Century</p>*/}
                </div>
                <div className={'flex flex-col gap-2'}>
                    <div className={'flex gap-2 text-xs text-amber-200'}>
                        {/*<Link href={'/pages/news'}>News & Events</Link>*/}
                        <Link href={'/pages/study'}>Studies</Link>
                        <Link href={'/pages/study/fee'}>Fee</Link>
                    </div>
                    <nav className={'flex text-sm items-center justify-center gap-2'}>
                        <Link href={'/'} className={'hover:underline hover:underline-offset-4 hover:text-amber-600'}>Home</Link>
                        <Link href={'/pages/faculty'}
                              className={'hover:underline hover:underline-offset-4 hover:text-amber-600'}>Faculty</Link>
                        <Link href={'/pages/apply'} className={'hover:underline hover:underline-offset-4 hover:text-amber-600'}>Apply</Link>
                        {/*<button onClick={()=>signIn('google')}*/}
                        {/*    className={'hover:underline hover:underline-offset-4 hover:text-amber-600'}>Apply</button>*/}
                    </nav>
                </div>
            </div>

    );
}