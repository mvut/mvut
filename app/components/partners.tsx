import ABSI from '@/public/resources/partners/absi.png'
import MIKES from '@/public/resources/partners/mikesint.png'
import Image from "next/image";
import Link from "next/link";
import { SiMicrostrategy } from "react-icons/si";
import { TfiSharethis } from "react-icons/tfi";

export default function StrategicPartners(){
    return(
        <div className={'flex flex-col items-center justify-center text-center h-96 '}>
            <p className={'flex flex-col items-center justify-center text-teal-950 text-3xl gap-2 py-10'}><TfiSharethis  size={40}/>Strategic Partners</p>
            <div className={'flex flex-col md:flex-row gap-10'}>
                <Link target={'_blank'} href={'https://www.mikeversity.com/'} >
                    <Image src={MIKES} alt={'MIKES International'} className={'h-24 w-auto sm:h-32 transition-all ease-in-out delay-300 hover:scale-110 '}/>
                </Link>
                <Link target={'_blank'} href={'https://absi.com.pk/'} >
                    <Image src={ABSI} alt={'ASB International'} className={'h-24 w-auto sm:h-32 transition-all ease-in-out delay-300 hover:scale-110 '} />
                </Link>
            </div>
        </div>
    )
}