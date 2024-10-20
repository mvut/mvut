import Link from "next/link";
import {FaFacebookF, FaWhatsapp} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import {CiYoutube} from "react-icons/ci";
import React from "react";
import { CiMobile1 } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { LiaFlagUsaSolid } from "react-icons/lia";

export default function FooterComponent() {
    return (
        <div>
            <div
                className="flex flex-col sm:flex-row  justify-between items-start px-10 text-teal-500 py-10 sm:h-96 bg-[url('../public/resources/vid.gif')] bg-cover">
                <div className={'flex flex-col items-start justify-center gap-2 '}>
                    <p className={'font-bold text-md sm:text-lg pb-4 text-amber-500'}>Get in Touch</p>
                    <p className={'font-bold text-sm'}>Mansha Virtual Institute of Technologies</p>
                    <div className={'flex items-center justify-center sm:h-10 gap-1'}>
                        <FaMailBulk size={20}/>
                        <p>mvut.usa@gmail.com</p>
                    </div>
                    <div className={'flex items-center justify-center sm:h-10 gap-1'}>
                        <FaSquareWhatsapp size={20}/>
                        <p>+1 (747) 209-4775</p>
                    </div>
                    {/*<div className={'flex items-center justify-center sm:h-10 gap-1'}>*/}
                    {/*    <FaSquareWhatsapp size={20}/>*/}
                    {/*    <p>+92 301 736 2696</p>*/}
                    {/*</div>*/}
                </div>

                {/* Studies */}
                <div className={'flex flex-col text-sm'}>
                    <p className={'text-lg text-amber-500'}>Studies</p>
                    <Link href={'/pages/study/programs/nxgd'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Next-Generation Web Development with Python (NXGDP)
                    </Link>

                    <Link href={'/pages/study/programs/fsdn'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Full Stack Development with Next.js (FSDN)
                    </Link>

                    <Link href={'/pages/study/programs/php'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Full Stack PHP Development (FSP)
                    </Link>

                    <Link href={'/pages/study/programs/omc'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Office Management and Work Ethics (OM&WE)
                    </Link>
                    <Link href={'/pages/study/programs/psc'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Junior Computer Science Certificate (JCSC)
                    </Link>

                    <Link href={'/pages/study/programs/esc'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Senior Computer Science Certificate (SCSC)
                    </Link>

                    <Link href={'/pages/study/programs/ssc'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Advance Computer Science Certificate (ACSC)
                    </Link>

                    <Link href={'/pages/study/programs/hssc'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Professional Computer Science Certificate (PCSC)
                    </Link>

                    <Link href={'/pages/study/programs/bscs'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Premier Certificate in Computer Science (PCCS)
                    </Link>

                    <Link href={'/pages/study/programs/pgdfsn'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Certified Web Professional in Full Stack Next.js (CWP FSN)
                    </Link>

                    <Link href={'/pages/study/programs/pgdfsp'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Certified Web Professional in Full Stack PHP (CWP FSP)
                    </Link>

                    <Link href={'/pages/study/programs/msfsd'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Advance Professional Certificate in Web Development (APCWD)
                    </Link>

                    <Link href={'/pages/study/programs/phdfsd'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Certificate of Philosophy in Web Development (CPWD)
                    </Link>
                </div>
                {/* End Studies*/}

                {/* Important Links*/}
                <div className={'flex flex-col text-sm '}>
                    <p className={'text-lg text-amber-500'}>Important Links</p>

                    <Link href={'/pages/apply'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                    >
                        Get Admission
                    </Link>
                    <Link href={'/pages/study/fee'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}>Fee Structure
                    </Link>
                    <Link href={'/pages/news'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}>News & Events
                    </Link>
                    <Link href={'/pages/honoraryphd'}
                          className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}>Honorary PhD
                    </Link>
                </div>
                {/* End Links*/}


            </div>

            <div
                className={'flex items-center justify-between gap-4 px-4 text-gray-50 text-center bg-gradient-to-l from-stone-600 to-stone-900 h-10'}>
                <p className={'text-xs'}>Powered by
                    <Link className={'text-amber-300 uppercase'} href={'https://www.mvut.us/'} target={'_blank'}> MVIT</Link>
                </p>

                <HoverCard>
                    <HoverCardTrigger className={'text-xs'}>Data Privacy</HoverCardTrigger>
                    <HoverCardContent className={'text-xs bg-stone-900'}>
                        <p className={'font-bold'}>Data Privacy Policy</p>
                        <p className={'text-xs'}>
                            At MVIT, we prioritize data protection, collecting only necessary personal data (contact,
                            device, usage, and location information) to enhance your experience, communicate
                            effectively, and comply with regulations. We implement robust security measures to safeguard
                            your data and may share it with affiliates, service providers, and law enforcement as
                            required. You have the right to access, update, withdraw consent, object, and request
                            deletion of your data. Our commitment to transparency and security ensures your trust and
                            confidence.
                        </p>
                    </HoverCardContent>
                </HoverCard>
                <div className={'flex items-center justify-center text-center gap-2'}>
                    <Link target="_blank" href={"https://whatsapp.com/channel/0029Vapvfi26xCSYFAVBeK3y"}
                          className="hover:text-green-400">
                        <FaWhatsapp size={25}/>
                    </Link>
                    <Link target="_blank" href={"https://web.facebook.com/mvutus"} className=" hover:text-blue-700">
                        <FaFacebookF size={20}/>
                    </Link>
                    <Link target="_blank" href={"https://youtube.com/@mvutus"} className=" hover:text-red-500">
                        <CiYoutube size={25}/>
                    </Link>
                    {/*<Link target="_blank" href={""} className=" hover:text-pink-700">*/}
                    {/*    <FaInstagram size={25}/>*/}
                    {/*</Link>*/}
                    <Link target="_blank" href={"https://www.linkedin.com/company/mvut"} className=" hover:text-blue-900">
                        <FaLinkedin  size={25}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}