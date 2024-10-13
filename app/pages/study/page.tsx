import Link from "next/link";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import FullStack from '@/public/resources/img1.jpg';
import Image from "next/image";
import Skill1 from "@/public/resources/skill1.jpg";
import Skill2 from "@/public/resources/skill2.jpg";
import Skill3 from "@/public/resources/skill3.jpg";
import Skill4 from "@/public/resources/skill4.jpg";
import Img9 from "@/public/resources/img9.jpg";
import Img10 from "@/public/resources/img10.jpg";
import Img11 from "@/public/resources/img11.jpg";
import Img12 from "@/public/resources/img12.jpg";
import Img13 from "@/public/resources/img13.jpg";
import Img14 from "@/public/resources/img14.jpg";
import Img15 from "@/public/resources/img15.jpg";
import Img16 from "@/public/resources/img16.jpg";
import Img17 from "@/public/resources/cthe.jpg";

export default function StudySchemeComponent(){
    return(
        <div className={'container flex flex-col py-8 sm:py-16 min-h-screen gap-10'}>
            <div className={'flex gap-10 '}>
                <Link href={'/pages/apply'}
                      className={'flex text-xs hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Apply</Link>
                <Link href={'/pages/study/fee'}
                      className={'flex text-xs hover:text-red-500 items-center gap-2'}><FaArrowAltCircleRight/>Fee</Link>
            </div>
            <p className={'text-4xl font-bold'}>Scheme of Studies</p>
            <p className={'text-2xl text-teal-700 font-bold'}>Web Technology Specialist Training (WTST)</p>


            {/*<Link href={'/pages/apply'} className={'text-lg hover:text-red-500 pt-4'}>Apply now </Link>*/}
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-2'}>

                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Skill1} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/study/programs/nxgd'}
                              className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                        >
                            Next-Generation Web Development with Python (NXGDP)
                        </Link>
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Skill2} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/study/programs/fsdn'}
                              className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                        >
                            Full Stack Development with Next.js (FSDN)
                        </Link>
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Skill3} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/study/programs/php'}
                              className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                        >
                            Full Stack PHP Development (FSP)
                        </Link>
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Skill4} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/study/programs/omc'}
                              className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                        >
                            Office Management and Work Ethics (OM&WE)
                        </Link>
                    </div>
                </div>

            </div>

            <p className={'text-2xl text-teal-700 font-bold '}>Computer Science Professional Studies (CSPS)</p>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '}>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img9} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/study/programs/psc'}
                              className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                        >
                            Junior Computer Science Certificate (JCSC)
                        </Link>
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img10} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/study/programs/esc'}
                              className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                        >
                            Senior Computer Science Certificate (SCSC)
                        </Link>
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img11} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/study/programs/ssc'}
                              className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                        >
                            Advance Computer Science Certificate (ACSC)
                        </Link>
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img12} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/study/programs/hssc'}
                              className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                        >
                            Professional Computer Science Certificate (PCSC)
                        </Link>
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img13} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/study/programs/bscs'}
                              className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                        >
                            Premier Certificate in Computer Science (PCCS)
                        </Link>
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img14} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/study/programs/pgdfsn'}
                              className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                        >
                            Certified Web Professional in Full Stack Next.js (CWP FSN)
                        </Link>
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img15} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/study/programs/pgdfsp'}
                              className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                        >
                            Certified Web Professional in Full Stack PHP (CWP FSP)
                        </Link>
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img16} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/study/programs/msfsd'}
                              className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                        >
                            Advance Professional Certificate in Web Development (APCWD)
                        </Link>
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img17} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/study/programs/phdfsd'}
                              className={'hover:text-indigo-700 transition-all ease-in-out delay-100'}
                        >
                            Certificate of Philosophy in Web Development (CPWD)
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}