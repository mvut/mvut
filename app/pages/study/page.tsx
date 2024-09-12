import Link from "next/link";
import { MdWebhook } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

export default function StudySchemeComponent(){
    return(
        <div className={'container flex flex-col py-16 min-h-screen items-start'}>
                <p className={'text-3xl'}>Scheme of Study</p>
                {/*<Link href={'/pages/apply'} className={'text-lg hover:text-red-500 pt-4'}>Apply now </Link>*/}
            <div className={'flex flex-col py-6 items-start'}>
                <Link href={'/pages/study/programs/fsdn'}
                className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    Full Stack Development with Next.js (FSDN)
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
        </div>
    )
}