import Link from "next/link";
import { MdWebhook } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

export default function StudySchemeComponent(){
    return(
        <div className={'container flex flex-col py-16 min-h-screen items-start'}>
            <p className={'text-3xl'}>Scheme of Study</p>
            {/*<Link href={'/pages/apply'} className={'text-lg hover:text-red-500 pt-4'}>Apply now </Link>*/}
            <div className={'flex flex-col py-6 items-start gap-2'}>
                <p className={'text-xl text-teal-700 font-bold'}>Skill Development Professional Programs</p>

                <Link href={'/pages/study/programs/fsdn'}
                      className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    Full Stack Development with Next.js (FSDN)
                </Link>

                <Link href={'/pages/study/programs/php'}
                      className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    Full Stack PHP Development (FSP)
                </Link>

                <Link href={'/pages/study/programs/omc'}
                      className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    Office Management and Work Ethics (OM&WE)
                </Link>

                <Link href={'/pages/study/programs/cwt'}
                      className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    Core Web Technologies (CWT)
                </Link>
            </div>
            <div className={'flex flex-col py-6 items-start gap-2'}>
                <p className={'text-xl text-teal-700 font-bold'}>Non-Academic Computer Science Programs</p>

                <Link href={'/pages/study/programs/psc'}
                      className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    Primary School Certificate (PSC)
                </Link>

                <Link href={'/pages/study/programs/esc'}
                      className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    Elementary School Certificate (ESC)
                </Link>

                <Link href={'/pages/study/programs/ssc'}
                      className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    Secondary School Certificate (SSC)
                </Link>

                <Link href={'/pages/study/programs/hssc'}
                      className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    Higher Secondary School Certificate (HSSC)
                </Link>

                <Link href={'/pages/study/programs/bscs'}
                      className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    Bachelor of Science in Computer Science (BSCS)
                </Link>

                <Link href={'/pages/study/programs/pgdfsn'}
                      className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    PGD in Full Stack Next.js (PGD FSN)
                </Link>

                <Link href={'/pages/study/programs/pgdfsp'}
                      className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    PGD in Full Stack PHP (PGD FSP)
                </Link>

                <Link href={'/pages/study/programs/msfsd'}
                      className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    Master of Science in Full Stack Development MS(FSD)
                </Link>

                <Link href={'/pages/study/programs/phdfsd'}
                      className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    Ph.D. in Full Stack Development (Ph.D. FSD)
                </Link>


            </div>
        </div>
    )
}