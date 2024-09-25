import Link from "next/link";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import FullStack from '@/public/resources/img1.jpg';
import Image from "next/image";

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
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '}>

                <Link href={'/pages/study/programs/fsdn'}
                      className={''}
                >
                    Full Stack Development with Next.js (FSDN)
                </Link>

                <Link href={'/pages/study/programs/php'}
                      className={''}
                >
                    Full Stack PHP Development (FSP)
                </Link>

                <Link href={'/pages/study/programs/omc'}
                      className={''}
                >
                    Office Management and Work Ethics (OM&WE)
                </Link>

                <Link href={'/pages/study/programs/cwt'}
                      className={''}
                >
                    Core Web Technologies (CWT)
                </Link>

                <Link href={'/pages/courses'}
                      className={''}
                >
                    Short Courses
                </Link>

            </div>

            <p className={'text-2xl text-teal-700 font-bold'}>Computer Science Professional Studies (CSPS)</p>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '}>


                <Link href= {'/pages/study/programs/psc'}
                      className={''}
                >
                    Junior Computer Science Certificate (JCSC)
                </Link>

                <Link href={'/pages/study/programs/esc'}
                      className={''}
                >
                    Senior Computer Science Certificate (SCSC)
                </Link>

                <Link href={'/pages/study/programs/ssc'}
                      className={''}
                >
                    Advance Computer Science Certificate (ACSC)
                </Link>

                <Link href={'/pages/study/programs/hssc'}
                      className={''}
                >
                    Professional Computer Science Certificate (PCSC)
                </Link>

                <Link href={'/pages/study/programs/bscs'}
                      className={''}
                >
                    Premier Certificate in Computer Science (PCCS)
                </Link>

                <Link href={'/pages/study/programs/pgdfsn'}
                      className={''}
                >
                    Certified Web Professional in Full Stack Next.js (CWP FSN)
                </Link>

                <Link href={'/pages/study/programs/pgdfsp'}
                      className={''}
                >
                    Certified Web Professional in Full Stack PHP (CWP FSP)
                </Link>

                <Link href={'/pages/study/programs/msfsd'}
                      className={''}
                >
                    Advance Professional Certificate in Web Development (APCWD)
                </Link>

                <Link href={'/pages/study/programs/phdfsd'}
                      className={''}
                >
                    Certificate of Philosophy in Web Development (CPWD)
                </Link>



            </div>
        </div>
    )
}