import ABSI from '@/public/resources/partners/absi.png'
import MIKES from '@/public/resources/partners/mikesint.png'
import Image from "next/image";
import Link from "next/link";
export default function StrategicPartners(){
    return(
        <div className={'flex flex-col items-center justify-center bg-gray-50 py-6 text-center'}>
            <p className={'text-teal-950 text-3xl'}>Strategic Partners</p>
            <div className={'flex flex-col md:flex-row'}>
                <Link target={'_blank'} href={'https://www.mikeversity.com/'} >
                    <Image src={MIKES} alt={'MIKES International'} className={'h-24 w-auto sm:h-32 transition-all hover:scale-75 '}/>
                </Link>
                <Link target={'_blank'} href={''} >
                    <Image src={ABSI} alt={'ASB International'} className={'h-24 sm:h-32 w-auto hover:scale-75 transition-all'} />
                </Link>
            </div>
        </div>
    )
}