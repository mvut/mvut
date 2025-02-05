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
import { FaGithub } from "react-icons/fa";

export default function FooterComponent() {
    return (
        <div className={'bg-orange-400'}>
            <div
                className="container flex flex-col sm:flex-row  justify-between items-start px-10 text-black py-10 sm:h-96 ">
                <div className={'flex flex-col items-start justify-center gap-2 '}>
                    <p className={'text-md sm:text-lg pb-4 '}>Get in Touch</p>
                    <p className={'text-lg'}>Mansha Virtual Institute of Technologies</p>
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
                    <p className={'text-lg '}>Studies</p>
                    <Link href={'/pages/study/programs/nxgd'}
                          className={'underline-animation'}
                    >
                        Next-Generation Web Development with Python (NXGDP)
                    </Link>

                    <Link href={'/pages/study/programs/fsdn'}
                          className={'underline-animation'}
                    >
                        Full Stack Development with Next.js (FSDN)
                    </Link>

                    <Link href={'/pages/study/programs/php'}
                          className={'underline-animation'}
                    >
                        Full Stack PHP Development (FSP)
                    </Link>

                    <Link href={'/pages/study/programs/omc'}
                          className={'underline-animation'}
                    >
                        Office Management and Work Ethics (OM&WE)
                    </Link>
                    <Link href={'/pages/study/programs/psc'}
                          className={'underline-animation'}
                    >
                        Junior Computer Science Certificate (JCSC)
                    </Link>

                    <Link href={'/pages/study/programs/esc'}
                          className={'underline-animation'}
                    >
                        Senior Computer Science Certificate (SCSC)
                    </Link>

                    <Link href={'/pages/study/programs/ssc'}
                          className={'underline-animation'}
                    >
                        Advance Computer Science Certificate (ACSC)
                    </Link>

                    <Link href={'/pages/study/programs/hssc'}
                          className={'underline-animation'}
                    >
                        Professional Computer Science Certificate (PCSC)
                    </Link>

                    <Link href={'/pages/study/programs/bscs'}
                          className={'underline-animation'}
                    >
                        Premier Certificate in Computer Science (PCCS)
                    </Link>

                    <Link href={'/pages/study/programs/pgdfsn'}
                          className={'underline-animation'}
                    >
                        Certified Web Professional in Full Stack Next.js (CWP FSN)
                    </Link>

                    <Link href={'/pages/study/programs/pgdfsp'}
                          className={'underline-animation'}
                    >
                        Certified Web Professional in Full Stack PHP (CWP FSP)
                    </Link>

                    <Link href={'/pages/study/programs/msfsd'}
                          className={'underline-animation'}
                    >
                        Advance Professional Certificate in Web Development (APCWD)
                    </Link>

                    <Link href={'/pages/study/programs/phdfsd'}
                          className={'underline-animation'}
                    >
                        Certificate of Philosophy in Web Development (CPWD)
                    </Link>

                    <Link href={'/pages/study/programs/ccipc'}
                          className={'underline-animation'}
                    >
                        Corporate Communication for IT Professionals
                        (CCIP)
                    </Link>

                </div>
                {/* End Studies*/}

                    {/* Important Links*/}
                    <div className={'flex flex-col text-sm '}>
                        <p className={'text-lg '}>Important Links</p>

                        <Link href={'/pages/apply'}
                              className={'underline-animation transition-all ease-in-out delay-100'}
                        >
                            Get Admission
                        </Link>
                        <Link href={'/pages/leadership'}
                              className={'underline-animation transition-all ease-in-out delay-100'}>Leadership
                        </Link>
                        <Link href={'/pages/services'}
                              className={'underline-animation transition-all ease-in-out delay-100'}>Services
                        </Link>
                        <Link href={'/pages/study/fee'}
                              className={'underline-animation transition-all ease-in-out delay-100'}>Fee Structure
                        </Link>
                        <Link href={'/pages/news'}
                              className={'underline-animation transition-all ease-in-out delay-100'}>News & Events
                        </Link>
                        <Link href={'/pages/honoraryphd'}
                              className={'underline-animation transition-all ease-in-out delay-100'}>Honorary PhD
                        </Link>
                        <Link href={'/verify'}
                              className={'underline-animation transition-all ease-in-out delay-100'}>Online Verification
                        </Link>
                        <Link href={'/pages/research'}
                              className={'underline-animation transition-all ease-in-out delay-100'}>Research
                        </Link>
                        <Link href={'/pages/admlst'}
                              className={'underline-animation transition-all ease-in-out delay-100'}>List of Candidates
                        </Link>
                    </div>
                    {/* End Links*/}


                </div>

                <div
                    className={'flex items-center justify-between gap-4 px-4 text-gray-50 text-center bg-gray-900 h-10'}>
                    <p className={'text-xs'}>Powered by
                        <Link className={'text-amber-300 uppercase'} href={'https://www.mvut.us/'}
                              target={'_blank'}> MVIT</Link>
                    </p>

                    <HoverCard>
                        <HoverCardTrigger className={'text-xs'}>Data Privacy</HoverCardTrigger>
                        <HoverCardContent className={'text-xs bg-stone-900'}>
                            <p className={'font-bold'}>Data Privacy Policy</p>
                            <p className={'text-xs'}>
                                At MVIT, we prioritize data protection, collecting only necessary personal data
                                (contact,
                                device, usage, and location information) to enhance your experience, communicate
                                effectively, and comply with regulations. We implement robust security measures to
                                safeguard
                                your data and may share it with affiliates, service providers, and law enforcement as
                                required. You have the right to access, update, withdraw consent, object, and request
                                deletion of your data. Our commitment to transparency and security ensures your trust
                                and
                                confidence.
                            </p>
                        </HoverCardContent>
                    </HoverCard>
                    <div className={'flex items-center justify-center text-center gap-2'}>
                        <Link target="_blank" href={"https://github.com/drsagher/MVIT"}
                              className="hover:text-green-400">
                            <FaGithub  size={25}/>
                        </Link>
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
                        <Link target="_blank" href={"https://www.linkedin.com/company/mvut"}
                              className=" hover:text-blue-900">
                            <FaLinkedin size={25}/>
                        </Link>
                    </div>
                </div>
            </div>
            )
            }