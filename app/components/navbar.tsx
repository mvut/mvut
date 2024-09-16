'use client'
import Link from "next/link";
import Logo from '@/public/mvit_logo_1.png';
import Image from "next/image";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight:['400'] });

export default function MyHeaderComponent(){
    return(
        <div className={`${ubuntu.className} flex w-full h-44 flex-col sm:flex-row items-center justify-center sm:justify-between sm:px-4 sm:py-4 bg-stone-950 text-gray-50 shadow-amber-200`}>
            <div className={'flex flex-row justify-center sm:flex-col items-center'}>
                <Link
                    className={'flex flex-row items-center justify-center font-bold text-sm sm:text-2xl uppercase gap-2'}
                    href={'/'}>
                    <Image src={Logo} alt={''} height={85} width={85}/>
                    Mansha Virtual Institute of Technologies
                </Link>
            </div>
                <nav className={'flex flex-col lg:flex-row text-sm items-center justify-center uppercase'}>
                    <Link href={'/'}
                          className={'rounded-l-full hover:bg-stone-600 hover:text-amber-200 px-2 lg:px-6 py-2 bg-stone-700 rounded-lg'}>Home</Link>
                    <Link href={'/pages/faculty'}
                          className={'hover:bg-stone-600 hover:text-amber-200 px-4 py-2 lg:px-6 bg-stone-700 rounded-lg'}>Faculty</Link>
                    <Link href={'/pages/study'}
                          className={'hover:bg-stone-600 hover:text-amber-200 px-4 py-2 lg:px-6 bg-stone-700 rounded-lg'}>Studies</Link>
                    <Link href={'/pages/study/fee'}
                          className={'hover:bg-stone-600 hover:text-amber-200 px-4 py-2 lg:px-6 bg-stone-700 rounded-lg'}>Fee</Link>
                    <Link href={'/pages/apply'}
                          className={'hover:bg-stone-600 hover:text-amber-200 px-4 py-2 lg:px-6 bg-stone-700 rounded-r-full'}>Apply</Link>
                </nav>
        </div>
    );
}