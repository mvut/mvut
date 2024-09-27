'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RiMenuFold2Fill } from "react-icons/ri";
import { motion } from "framer-motion"
import Image from "next/image";
import Logo from "@/public/mvit_logo_1.png";

const inter = Saira({ subsets: ["latin"], weight:['400'] });
import {Saira} from "next/font/google";

export default function MyHeaderComponent(){
    const pathname = usePathname();
    const isActive = (link: string) => link === pathname;
    const [menuOpen, setMenuOpen] = useState(false);
    const handlerNav =()=>{
        setMenuOpen(!menuOpen);
    }
    return(
        <motion.header  layout layoutRoot style={{ position: "sticky" }}
            className={`${inter.className} flex flex-row justify-between p-2 lg:p-6 text-xs bg-stone-950`}>
            <div className={'flex flex-col items-start gap-2 sm:grid-cols-1 md:grid-cols-1 w-full text-white uppercase'}>
                <Link
                    className={'flex flex-row items-center justify-center font-bold text-sm sm:text-2xl gap-2 '}
                    href={'/'}>
                    <Image src={Logo} alt={''} height={85} width={85}/>
                    Mansha Virtual Institute of Technologies
                </Link>
            </div>
            <motion.div layout className={'hidden lg:flex items-center justify-center sm:text-sm lg:text-md uppercase text-amber-200'}>
                <Link href={'/'}
                      className={'rounded-l-full hover:bg-stone-600 hover:text-gray-200 px-2 lg:px-4 py-2 bg-stone-700 '}>Home</Link>
                <Link href={'/pages/leadership'}
                      className={'hover:bg-stone-600 hover:text-gray-200 px-2 lg:px-4 py-2 bg-stone-700 '}>Leadership</Link>
                <Link href={'/pages/news'}
                      className={'hover:bg-stone-600 hover:text-gray-200 px-2 lg:px-4 py-2 bg-stone-700 '}>Alerts</Link>
                <Link href={'/pages/research'}
                      className={'hover:bg-stone-600 hover:text-gray-200 px-2 lg:px-4 py-2 bg-stone-700 '}>Research</Link>
                <Link href={'/pages/faculty'}
                      className={'hover:bg-stone-600 hover:text-gray-200 px-4 py-2 lg:px-4 bg-stone-700 '}>Faculties</Link>
                <Link href={'/pages/study'}
                      className={'hover:bg-stone-600 hover:text-gray-200 px-4 py-2 lg:px-4 bg-stone-700 '}>Studies</Link>
                <Link href={'/pages/study/fee'}
                      className={'hover:bg-stone-600 hover:text-gray-200 px-4 py-2 lg:px-4 bg-stone-700 '}>Fee</Link>
                <Link href={'/pages/apply'}
                      className={'hover:bg-stone-600 hover:text-gray-200 px-4 py-2 lg:px-4 bg-stone-700 rounded-r-full'}>Apply</Link>
            </motion.div>
            <div onClick={handlerNav} className={'text-gray-50 lg:hidden cursor-pointer '}>
                <div className={''}>
                    <RiMenuUnfold2Fill  size={35} />
                </div>
            </div>
            <div
                className={menuOpen ? 'fixed right-0 z-20 lg:hidden h-auto bg-stone-950 p-4 ease-in duration-500' : 'h-auto fixed left-[100%] top-0 z-20 ease-in duration-500'}>
                <div className={'flex items-center justify-end w-full'}>
                    <div onClick={handlerNav} className={'flex items-start cursor-pointer justify-between gap-8 text-gray-50 text-xl'}>
                        <div className={'grid grid-cols-1 gap-4 sm:text-sm lg:text-base uppercase text-amber-200'}>
                            <Link href={'/'}
                                  className={'hover:bg-stone-600 hover:text-gray-200 px-4 py-2 lg:px-6 bg-stone-700 '}>Home</Link>
                            <Link href={'/pages/leadership'}
                                  className={'hover:bg-stone-600 hover:text-gray-200 px-4 py-2 lg:px-6 bg-stone-700 '}>Leadership</Link>
                            <Link href={'/pages/news'}
                                  className={'hover:bg-stone-600 hover:text-gray-200 px-4 py-2 lg:px-6 bg-stone-700 '}>Alerts</Link>
                            <Link href={'/pages/research'}
                                  className={'hover:bg-stone-600 hover:text-gray-200 px-4 py-2 lg:px-6 bg-stone-700 '}>Research</Link>
                            <Link href={'/pages/faculty'}
                                  className={'hover:bg-stone-600 hover:text-gray-200 px-4 py-2 lg:px-6 bg-stone-700 '}>Faculties</Link>
                            <Link href={'/pages/study'}
                                  className={'hover:bg-stone-600 hover:text-gray-200 px-4 py-2 lg:px-6 bg-stone-700 '}>Studies</Link>
                            <Link href={'/pages/study/fee'}
                                  className={'hover:bg-stone-600 hover:text-gray-200 px-4 py-2 lg:px-6 bg-stone-700 '}>Fee</Link>
                            <Link href={'/pages/apply'}
                                  className={'hover:bg-stone-600 hover:text-gray-200 px-4 py-2 lg:px-6 bg-stone-700 '}>Apply</Link>
                        </div>
                        <div className={'text-gray-50'}>
                            <RiMenuFold2Fill size={35}/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}