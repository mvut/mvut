'use client'
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/mvutflame.png";

export default function MyHeaderComponent(){
    return(
        <div className={'flex h-auto flex-col sm:flex-row items-center justify-between py-4 px-8 w-full text-white bg-zinc-900'}>
            <section className={'flex flex-col gap-2 items-center justify-center'}>
                <Link className={'auto-rotate-horizontal hover:scale-110 transition-all ease-in-out delay-200'}
                      href={'/'}>
                    <Image src={Logo} alt={''} height={65} width={65}/>
                </Link>
                <p className={'text-xs'}>Empowering People with AI</p>
            </section>

            <div className={'flex text-md gap-2 sm:gap-4 uppercase py-6'}>
                <Link href={'/'}
                      className={'underline-animation '}>Home</Link>
                <Link href={'/pages/faculty'}
                      className={'underline-animation'}>Faculties</Link>
                <Link href={'/pages/study'}
                      className={'underline-animation'}>Studies</Link>
                {/*<Link href={'/pages/courses'}*/}
                {/*      className={'underline-animation'}>Courses</Link>*/}
                <Link href={'/pages/apply'}
                      className={'underline-animation'}>Apply</Link>
            </div>
        </div>
    );
}