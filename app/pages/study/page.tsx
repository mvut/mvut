import Link from "next/link";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

export default function StudySchemeComponent(){
    return(
        <div className={'container flex flex-col py-8 sm:py-16 min-h-screen items-center gap-10'}>
            <div className={'flex gap-10 '}>
                <Link href={'/pages/apply'}
                      className={'flex text-xs hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Apply</Link>
                <Link href={'/pages/study/fee'}
                      className={'flex text-xs hover:text-red-500 items-center gap-2'}><FaArrowAltCircleRight/>Fee</Link>
            </div>
            <p className={'text-4xl font-bold'}>Scheme of Studies</p>

            <div className={'flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-16 py-2 sm:py-10'}>
                {/*<Link href={'/pages/apply'} className={'text-lg hover:text-red-500 pt-4'}>Apply now </Link>*/}
                <div className={'flex flex-col py-6 items-start gap-4'}>
                    <p className={'text-xl text-teal-700 font-bold'}>Web Technology Specialist Training (WTST)</p>

                    <Link href={'/pages/study/programs/fsdn'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Full Stack Development with Next.js (FSDN)
                    </Link>

                    <Link href={'/pages/study/programs/php'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Full Stack PHP Development (FSP)
                    </Link>

                    <Link href={'/pages/study/programs/omc'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Office Management and Work Ethics (OM&WE)
                    </Link>

                    <Link href={'/pages/study/programs/cwt'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Core Web Technologies (CWT)
                    </Link>

                    <Link href={'/pages/courses'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Short Courses
                    </Link>

                </div>
                <div className={'flex flex-col py-6 items-start gap-4'}>
                    <p className={'text-xl text-teal-700 font-bold'}>Computer Science Professional Studies (CSPS)</p>

                    <Link href={'/pages/study/programs/psc'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Junior Computer Science Certificate (JCSC)
                    </Link>

                    <Link href={'/pages/study/programs/esc'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Senior Computer Science Certificate (SCSC)
                    </Link>

                    <Link href={'/pages/study/programs/ssc'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Advance Computer Science Certificate (ACSC)
                    </Link>

                    <Link href={'/pages/study/programs/hssc'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Professional Computer Science Certificate (PCSC)
                    </Link>

                    <Link href={'/pages/study/programs/bscs'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Premier Certificate in Computer Science (PCCS)
                    </Link>

                    <Link href={'/pages/study/programs/pgdfsn'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Certified Web Professional in Full Stack Next.js (CWP FSN)
                    </Link>

                    <Link href={'/pages/study/programs/pgdfsp'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Certified Web Professional in Full Stack PHP (CWP FSP)
                    </Link>

                    <Link href={'/pages/study/programs/msfsd'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Advance Professional Certificate in Web Development (APCWD)
                    </Link>

                    <Link href={'/pages/study/programs/phdfsd'}
                          className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                    >
                        Certificate of Philosophy in Web Development (CPWD)
                    </Link>

                </div>
            </div>
        </div>
    )
}