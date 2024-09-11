import Link from "next/link";
import { MdWebhook } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

export default function StudySchemeComponent(){
    return(
        <div className={'container flex flex-col py-16 min-h-screen'}>
                <p className={'text-3xl'}>Scheme of Study</p>
            <div className={'flex py-6'}>
                <Link href={'/pages/study/programs/fsdn'}
                className={'flex gap-2 items-center justify-center hover:text-red-500 transition-all delay-50'}
                > <MdWebhook size={20}/>
                    Full Stack Development with Next.js (FSDN)</Link>
            </div>
        </div>
    )
}