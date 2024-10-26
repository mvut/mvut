'use client'
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/mvut_flame.png";

export default function MyHeaderComponent(){
    return(
        <div className={'flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-stone-950 to-stone-900 py-2 px-4 w-full text-center'}>
            <section className={'flex gap-2 hover:scale-110 transition-all ease-in-out delay-200'}>
                <Link className={''}
                    href={'/'}>
                    <Image src={Logo} alt={''} height={63} width={63} />
                </Link>
            </section>
            <section className={'flex flex-col items-center justify-center'}>
                <div className={'flex justify-end gap-2 sm:gap-4 text-gray-300 text-xs'}>
                    <Link href={'/pages/news'}
                          className={'hover:text-gray-50'}>News & Events
                    </Link>
                    <Link href={'/pages/leadership'}
                          className={'hover:text-gray-50'}>Leadership
                    </Link>
                </div>
                <div className={'flex text-gray-300 text-lg gap-2 sm:gap-4 '}>
                    <Link href={'/pages/faculty'}
                          className={'hover:text-gray-50'}>Faculties</Link>
                    <Link href={'/pages/study'}
                          className={'hover:text-gray-50'}>Studies</Link>
                    <Link href={'/pages/research'}
                          className={'hover:text-gray-50'}>Research</Link>
                </div>
            </section>
        </div>
    );
}