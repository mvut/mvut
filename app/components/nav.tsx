'use client'
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Research1 from "@/public/resources/ai-generated.jpg";
import Research2 from "@/public/resources/vid.gif";
import Research3 from "@/public/resources/matrix.jpg";
import React from "react";
import Link from "next/link";
import { IoSchoolSharp } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
const inter = Saira({ subsets: ["latin"], weight:['400'] });
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
        <Carousel plugins={[Autoplay({delay: 9000,}),]}
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
                    <div className={'absolute text-center md:w-[50%] flex flex-col items-center justify-center gap-10 '}>
                        <p className={'md:text-4xl text-gray-300 leading-relaxed'}> Embrace the future of Web Development Technologies, where Artificial Intelligence(AI) meets Innovation! <br/>Learn AI, Machine Learning and Cloud Computing to Shape Immersive Experiences, Intelligent Interfaces and Sustainable Solutions. Believe in Yourself, you&apos;re the Architect of Tomorrow&apos;s AI Applications.</p>
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
                        <p className={'md:text-4xl text-gray-300 leading-relaxed'}> AI revolutionizes Science and Technologies, advancing Physics, Chemistry, Biology, Mathematics, Space Exploration and Climate Modeling. It drives innovation in Quantum Computing, Nanotechnology and Synthetic Biology, Transforming our Understanding of the World and Future of Our Future</p>
                        <div className={'flex flex-row gap-6 items-center justify-center'}>
                            <Link href={'/pages/apply'} className={'text-nowrap transition-all ease-in-out delay-200 flex items-center justify-center gap-2 text-xs md:text-md text-gray-50 bg-red-700 hover:bg-amber-600 p-2'}><IoSchoolSharp />
                                Get
                                Admission</Link>
                            <Link href={'/pages/study'} className={'text-nowrap transition-all ease-in-out delay-200 flex items-center justify-center gap-2 text-xs md:text-md text-gray-50 bg-red-700 hover:bg-amber-600 p-2'}><GrCertificate />
                                Study Programs</Link>
                        </div>
                    </div>
                </CarouselItem>

            </CarouselContent>
        </Carousel>
    </div>
)
}