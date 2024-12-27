'use client'
import React from "react";
import ResearchImage from '@/public/resources/research2.png'
import Image from "next/image";
import { FaGoogleScholar } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Founder from "@/public/resources/research2.png";
import President from "@/public/resources/research/research1.png";
import Research1 from "@/public/resources/research/research1.png";
import Research2 from "@/public/resources/research/research2.jpg";
import Research3 from "@/public/resources/research/research3.png";
import Research4 from "@/public/resources/research/research4.jpg";
import Research5 from "@/public/resources/research/research5.jpg";
import Research6 from "@/public/resources/research/research6.jpg";
import Research7 from "@/public/resources/research/research7.jpg";
import Research8 from "@/public/resources/research/research8.png";
import Research9 from "@/public/resources/research/research9.jpg";

export default function ResearchPage(){
        return (
            <div className={"container flex flex-col py-16"}>
                <h1 className={'text-4xl pb-10'}>Research and Development (R&D)</h1>
                <div className={"grid grid-cols-1 sm:grid-cols-2 gap-6 "}>

                    <div className={'flex flex-col shadow-xl shadow-stone-900 border-t-4 border-stone-500 p-10'}>
                        <h1 className={'text-2xl sm:pb-2'}>MVIT Research</h1>
                        <p className={'text-sm lg:text-lg leading-relaxed'}>
                            MVIT&apos;s research endeavors are driven by a multidisciplinary approach, focusing on
                            cutting-edge areas such as Industry 4.0, healthcare technology, smart cities, climate
                            change, and digital transformation. Employing methodologies like experimental research, surveys,
                            case studies, simulations, and statistical analysis, MVIT aims to advance knowledge, foster
                            innovation and entrepreneurship, develop research talent, and address pressing societal
                            challenges. Through strategic industry partnerships, interdisciplinary collaborations,
                            and international cooperation, MVIT&apos;s research outcomes include publications, patents,
                            and research grants, solidifying its position at the forefront of technological advancement
                            and driving positive impact.
                        </p>
                    </div>

                    <div className={'flex flex-col shadow-xl shadow-stone-900 border-t-4 border-stone-500'}>
                        {/**/}

                            <Carousel plugins={[Autoplay({delay: 2000,}),]}
                                      opts={{align: "start", loop: true,}}
                                      className={""}
                            >
                                <CarouselContent className={''}>
                                    <CarouselItem className="flex flex-col items-center justify-center ">
                                        <Image src={Research1} alt="" className={'h-96 w-full'}/>
                                    </CarouselItem>
                                    <CarouselItem className="flex flex-col items-center justify-center ">
                                        <Image src={Research2} alt="" className={'h-96 w-full'}/>
                                    </CarouselItem>
                                    <CarouselItem className="flex flex-col items-center justify-center ">
                                        <Image src={Research3} alt="" className={'h-96 w-full'}/>
                                    </CarouselItem>
                                    <CarouselItem className="flex flex-col items-center justify-center ">
                                        <Image src={Research4} alt="" className={'h-96 w-full'}/>
                                    </CarouselItem>
                                    <CarouselItem className="flex flex-col items-center justify-center ">
                                        <Image src={Research5} alt="" className={'h-96 w-full'}/>
                                    </CarouselItem>
                                    <CarouselItem className="flex flex-col items-center justify-center ">
                                        <Image src={Research6} alt="" className={'h-96 w-full'}/>
                                    </CarouselItem>
                                    <CarouselItem className="flex flex-col items-center justify-center ">
                                        <Image src={Research7} alt="" className={'h-96 w-full'}/>
                                    </CarouselItem>
                                    <CarouselItem className="flex flex-col items-center justify-center ">
                                        <Image src={Research8} alt="" className={'h-96 w-full'}/>
                                    </CarouselItem>
                                    <CarouselItem className="flex flex-col items-center justify-center ">
                                        <Image src={Research9} alt="" className={'h-96 w-full'}/>
                                    </CarouselItem>
                                </CarouselContent>
                                {/*<CarouselPrevious/>*/}
                                {/*<CarouselNext/>*/}
                            </Carousel>

                        {/**/}
                    </div>
                </div>

                {/*Research Area*/}
                <p className={'flex items-center justify-center text-3xl mt-16 gap-4'}><GiProgression/>
                    Emerging
                    Technologies</p>

                <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-4 sm:py-10 text-start'}>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Artificial Intelligence</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Machine Learning</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Data Science and Analytics</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Database Systems</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Computer Vision and Graphics</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Cryptography</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Computer Networks and Cybersecurity</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Human-Computer Interaction</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Distributed Systems and Cloud Computing</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Bioinformatics</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Quantum Computing</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Blockchain</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Internet of Things</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Computer Science Education</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Social Computing</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Software Project Management</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Agile Development</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Cloud Computing</p>
                    <p className={'flex items-center gap-2 hover:text-indigo-700 transition-all ease-in-out delay-100 cursor-pointer text-stone-700'}>
                        <FaGoogleScholar/>Animation</p>

                </div>
            </div>
        )
}