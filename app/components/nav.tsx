'use client'
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Research1 from "@/public/resources/ai-generated.jpg";
import Research2 from "@/public/resources/ai-generated3.jpg";
import Research3 from "@/public/resources/microbiology.jpg";
import Research4 from "@/public/resources/book.jpg";
import Research5 from "@/public/resources/vid.gif";
import React from "react";
import Link from "next/link";
import { IoSchoolSharp } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
const inter = Open_Sans({ subsets: ["latin"], weight:['400'] });
import {
    Agdasima,
    Bebas_Neue,
    Dancing_Script,
    Exo_2,
    Lato,
    Lora,
    Mada,
    Milonga,
    Mukta,
    Open_Sans, Orbitron,
    Overpass,
    Poppins,
    PT_Sans,
    Saira
} from "next/font/google";

export default function NavComponent(){
return(
    <div className={`sm:h-lvh ${inter.className}`}>
        <Carousel plugins={[Autoplay({delay: 7000,}),]}
                  opts={{align: "start", loop: true,}}
                  className={""}
        >
            <CarouselContent className={'sm:h-dvh'}>
                <CarouselItem className="relative flex flex-col items-center justify-center">
                    <Image src={Research1} alt="" className={'h-96 sm:h-full w-full'}/>
                    <div className={'absolute left-10 text-center md:w-[50%] flex flex-col items-center justify-center gap-10'}>
                        <p className={' md:text-5xl text-gray-50 leading-relaxed'}> Welcome to MVIT.<br/> Embark on a Transformative Journey in Artificial Intelligence with Us Today!</p>
                        <div className={'flex flex-row gap-6 items-center justify-center'}>
                            <Link href={'/pages/apply'} className={'text-nowrap transition-all ease-in-out delay-200 flex items-center justify-center gap-2 text-xs md:text-md text-gray-50 bg-red-700 hover:bg-amber-600 p-2'}><IoSchoolSharp />
                                Get
                                Admission</Link>
                            <Link href={'/pages/study'} className={'text-nowrap transition-all ease-in-out delay-200 flex items-center justify-center gap-2 text-xs md:text-md text-gray-50 bg-red-700 hover:bg-amber-600 p-2'}><GrCertificate />
                                Study Programs</Link>
                        </div>
                    </div>
                </CarouselItem>

                <CarouselItem className="relative flex flex-col items-center justify-center">
                    <Image src={Research2} alt="" className={'h-96 sm:h-full w-full '}/>
                    <div className={'absolute left-10 text-center md:w-[50%] flex flex-col items-center justify-center gap-10 '}>
                        <p className={'md:text-6xl text-blue-950 leading-relaxed'}>Believe in Yourself, you&apos;re the Architect of Tomorrow&apos;s AI Applications.</p>
                        <div className={'flex flex-row gap-6 items-center justify-center '}>
                            <Link href={'/pages/apply'} className={'text-nowrap transition-all ease-in-out delay-200 flex items-center justify-center gap-2 text-xs md:text-md text-gray-50 bg-red-700 hover:bg-amber-600 p-2'}><IoSchoolSharp />
                                Get
                                Admission</Link>
                            <Link href={'/pages/study'} className={'text-nowrap transition-all ease-in-out delay-200 flex items-center justify-center gap-2 text-xs md:text-md text-gray-50 bg-red-700 hover:bg-amber-600 p-2'}><GrCertificate />
                                Study Programs</Link>
                        </div>
                    </div>
                </CarouselItem>

                <CarouselItem className="relative flex flex-col items-center justify-center">
                    <Image src={Research3} alt="" className={'h-96 sm:h-full w-full'}/>
                    <div className={'absolute text-center md:w-[50%] flex flex-col items-center justify-center gap-10 '}>
                        <p className={'md:text-6xl text-amber-300 leading-relaxed'}>
                            AI enables scientists to analyze data, simulate experiments, and discover hidden patterns, accelerating innovation
                        </p>
                        <div className={'flex flex-row gap-6 items-center justify-center'}>
                            <Link href={'/pages/apply'} className={'text-nowrap transition-all ease-in-out delay-200 flex items-center justify-center gap-2 text-xs md:text-md text-gray-50 bg-red-700 hover:bg-amber-600 p-2'}><IoSchoolSharp />
                                Get
                                Admission</Link>
                            <Link href={'/pages/study'} className={'text-nowrap transition-all ease-in-out delay-200 flex items-center justify-center gap-2 text-xs md:text-md text-gray-50 bg-red-700 hover:bg-amber-600 p-2'}><GrCertificate />
                                Study Programs</Link>
                        </div>
                    </div>
                </CarouselItem>

                <CarouselItem className="relative flex flex-col items-center justify-center">
                    <Image src={Research4} alt="" className={'h-96 sm:h-full w-full'}/>
                    <div className={'absolute text-center md:w-[50%] flex flex-col items-center justify-start gap-10 '}>
                        <p className={'md:text-5xl text-stone-900 leading-relaxed'}>

                            MVIT confers an Honorary PhD for impactful social contributions and commitment to community welfare, reflecting our values of excellence and compassion
                        </p>
                        <div className={'flex flex-row gap-6 items-center justify-center'}>
                            <Link href={'/pages/honrarydoctorate'} className={'text-nowrap transition-all ease-in-out delay-200 flex items-center justify-center gap-2 text-xs md:text-md text-gray-50 bg-red-700 hover:bg-amber-600 p-2'}><IoSchoolSharp />
                                Apply for Honorary Degree</Link>
                            {/*<Link href={'/pages/honoraryphd'} className={'text-nowrap transition-all ease-in-out delay-200 flex items-center justify-center gap-2 text-xs md:text-md text-gray-50 bg-red-700 hover:bg-amber-600 p-2'}><GrCertificate />*/}
                            {/*    Honorary PhD</Link>*/}
                        </div>
                    </div>
                </CarouselItem>

                <CarouselItem className="relative flex flex-col items-center justify-center">
                    <Image src={Research5} alt="" className={'h-96 sm:h-full w-full'}/>
                    <div className={'absolute text-center md:w-[50%] flex flex-col items-center justify-start gap-10 '}>
                        <p className={'md:text-5xl text-white leading-relaxed '}>
                            We offers courses and certify in AI App development, empowering learners to advance in
                            cutting-edge technologies and create impactful digital solutions, aligned with our values of
                            innovation and excellence.
                        </p>
                        <div className={'flex flex-row gap-6 items-center justify-center'}>
                            <Link href={'/pages/apply'}
                                  className={'text-nowrap transition-all ease-in-out delay-200 flex items-center justify-center gap-2 text-xs md:text-md text-gray-50 bg-red-700 hover:bg-amber-600 p-2'}><IoSchoolSharp/>
                                Get
                                Admission</Link>
                            <Link href={'/pages/study'}
                                  className={'text-nowrap transition-all ease-in-out delay-200 flex items-center justify-center gap-2 text-xs md:text-md text-gray-50 bg-red-700 hover:bg-amber-600 p-2'}><GrCertificate/>
                                Study Programs</Link>
                        </div>
                    </div>
                </CarouselItem>

            </CarouselContent>
        </Carousel>
    </div>
)
}