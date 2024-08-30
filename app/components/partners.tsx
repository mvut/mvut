import ABSI from '@/public/resources/partners/absi.png'
import MIKES from '@/public/resources/partners/mikesint.png'
import Image from "next/image";
import Link from "next/link";
export default function StrategicPartners(){
    return(
        <div className={'flex flex-col items-center justify-center bg-teal-900 w-full py-10 text-center'}>
            <p className={'text-teal-400 text-5xl'}>Strategic Partners</p>
            <div className={'flex flex-col md:flex-row py-10'}>
                <Link target={'_blank'} href={'https://www.mikeversity.com/'} >
                    <Image src={MIKES} alt={'MIKES International'} className={'h-48 w-auto transition-all hover:scale-75 '}/>
                </Link>
                <Link target={'_blank'} href={''} >
                    <Image src={ABSI} alt={'ASB International'} className={'h-48 w-auto hover:scale-75 transition-all'} />
                </Link>
            </div>
        </div>
    )
}