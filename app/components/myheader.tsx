'use client'
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/mvut_flame.png";

export default function MyHeaderComponent(){
    return(
        <div className={'flex flex-col sm:flex-row items-center justify-between bg-gradient-to-l from-stone-900 to-stone-800 p-4 w-full'}>
            <section className={'flex gap-2 hover:scale-110 transition-all ease-in-out delay-200'}>
                <Link className={''}
                    href={'/'}>
                    <Image src={Logo} alt={''} height={100} width={100} />
                </Link>
            </section>
            <section className={'flex flex-col'}>
                <div className={'flex justify-end gap-2 sm:gap-4 text-gray-300 py-4 text-xs'}>
                    <Link href={'/pages/news'}
                          className={'hover:text-gray-50'}>News & Events
                    </Link>
                    <Link href={'/pages/leadership'}
                          className={'hover:text-gray-50'}>Leadership
                    </Link>
                    <Link href={'/bog'}
                          className={'hover:text-gray-50'}>BoG
                    </Link>
                    {/*<Link href={'/pages/honoraryphd'}*/}
                    {/*      className={'hover:text-gray-50'}>Honorary PhD*/}
                    {/*</Link>*/}


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