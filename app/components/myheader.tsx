'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RiMenuFold2Fill } from "react-icons/ri";
import { motion } from "framer-motion"
import Image from "next/image";
import Logo from "@/public/mvut_flame.png";

const inter = Cairo({ subsets: ["latin"], weight:['400'] });
import {Cairo, PT_Sans, Saira} from "next/font/google";

export default function MyHeaderComponent(){
    const pathname = usePathname();
    const isActive = (link: string) => link === pathname;
    const [menuOpen, setMenuOpen] = useState(false);
    const handlerNav =()=>{
        setMenuOpen(!menuOpen);
    }
    return(
        <div className={'flex flex-col sm:flex-row items-center justify-between bg-stone-950 p-4 w-full'}>
            <section className={'flex gap-2 '}>
                <Link className={''}
                    href={'/'}>
                    <Image src={Logo} alt={''} height={100} width={100} />
                </Link>
            </section>
            <section className={'flex flex-col'}>
                <div className={'flex justify-end gap-4 text-gray-300 py-4'}>
                    <Link href={'/pages/leadership'}
                          className={'hover:text-gray-50'}>Leadership</Link>
                    <Link href={'/pages/news'}
                          className={'hover:text-gray-50'}>News & Events</Link>


                    <Link href={'/pages/study/fee'}
                          className={'hover:text-gray-50'}>Fee Structure</Link>
                </div>
                <div className={'flex text-gray-300 text-xl gap-2 uppercase'}>
                    <Link href={'/'}
                          className={'hover:text-gray-50'}>Home</Link>

                    <Link href={'/pages/faculty'}
                          className={'hover:text-gray-50'}>Faculties</Link>
                    <Link href={'/pages/study'}
                          className={''}>Studies</Link>
                    <Link href={'/pages/research'}
                          className={'hover:text-gray-50'}>Research</Link>
                    {/*<Link href={'/pages/apply'}*/}
                    {/*      className={''}>*/}
                    {/*    Apply*/}
                    {/*</Link>*/}
                </div>
            </section>
        </div>
    );
}