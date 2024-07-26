'use client'
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import { usePathname } from 'next/navigation';
import Link from "next/link";
import {useState} from "react";
import { IoClose } from "react-icons/io5";

export default function NavComponent(){
    const brandName = 'MVUT';
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname;
    const InfoLinks=[
        // {id:1, name:'Admissions', path:'#'},
        {id:1, name:'Faculties', path:'#'},
        {id:2, name:'Courses', path:'#'},
        {id:3, name:'Blogs', path:'#'},
    ]
    // const [menuOpen, setMenuOpen] = useState(false);
    // const handlerNav =()=>{
    //     setMenuOpen(!menuOpen);
    // }
return(
    <div className={"flex flex-col w-full bg-fixed bg-no-repeat bg-cover h-screen bg-[url('../public/resources/students-3982520.jpg')]"} >
        <div className={'flex flex-col w-full h-14 fixed z-10 bg-black'}>
            <div className={'flex items-center justify-center text-white h-14  w-full '}>
                <p className={'flex w-1/3 justify-center font-bold text-xl font-sans'}>{brandName}</p>
                <div className={'flex flex-row w-2/3 py-4 items-center justify-center '}>
                    {/*Information*/}
                    <div className={'gap-4 items-center hidden sm:flex'}>
                        {InfoLinks.map((link) => {
                            return (
                                <Link key={link.id}
                                      href={'#'}
                                      className={`${isActive(link.path) ? 'underline' : 'no-underline'} flex items-center justify-center gap-2 hover:bg-white hover:text-red-600 h-14 px-4`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <Dialog>
                            <DialogTrigger
                                className={'flex items-center justify-center gap-2 hover:bg-white hover:text-red-600 h-14 px-4'}><FaSearch/>Search</DialogTrigger>
                            <DialogContent className={'bg-white'}>
                                <DialogHeader>
                                    <DialogTitle>You are Welcome!</DialogTitle>
                                    <DialogDescription>
                                        Searching will soon be accessible.
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                    </div>
                    {/*<div onClick={handlerNav} className={'sm:hidden cursor-pointer pl-24'}>*/}
                    {/*    <div className={'flex items-center bg-red-600 h-14 px-4 hover:bg-red-900 gap-1'}>*/}
                    {/*        <AiOutlineMenu size={35}/> <p>Close</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div >
                        <Link
                            className={'flex items-center justify-center gap-2 bg-red-600 text-white hover:bg-white hover:text-red-600 font-bold h-14 px-4'}
                            href={'#'}>Apply
                        </Link>
                    </div>

                </div>
                {/*<div*/}
                {/*    className={menuOpen ? 'fixed top-0 w-full sm:hidden h-36 bg-gray-900 p-10 ease-in duration-500' : 'fixed left-[100%] top-0 p-10 ease-in duration-500'}>*/}
                {/*    <div className={'flex items-center justify-end w-full'}>*/}
                {/*        <div onClick={handlerNav} className={'cursor-pointer'}>*/}
                {/*            <div className={'flex items-center bg-red-600 h-14 px-2 hover:bg-red-900 gap-1'}>*/}
                {/*                <IoClose size={35}/> <p>Close</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </div>
    </div>
)
}