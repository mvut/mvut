'use client'
import React from "react";
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Research1 from "@/public/resources/research/research17.jpg";
import Research2 from "@/public/resources/research/research11.jpg";
import Research3 from "@/public/resources/research/research16.jpg";
import Research4 from "@/public/resources/research/research13.jpg";
import Research5 from "@/public/resources/research/research12.jpg";
import Research6 from "@/public/resources/research/research14.jpg";
import Research7 from "@/public/resources/research/research19.jpg";
import Research8 from "@/public/resources/research/research18.jpg";
import Research9 from "@/public/resources/research/research15.jpg";
import Link from "next/link";

export default function ResearchPage(){
        return (
            <div className={"container flex flex-col py-16 min-h-screen"}>
                <h1 className={'text-4xl pb-10'}>Celebrating Influential Leaders</h1>
                <div className={"grid grid-cols-1 sm:grid-cols-2 gap-6 "}>

                    <div className={'flex flex-col shadow-xl shadow-stone-900 border-t-4 border-stone-500 p-2'}>
                        <h1 className={'text-2xl sm:pb-2'}>Honorary Causa</h1>
                        <p className={'text-sm lg:text-lg leading-relaxed'}>
                            An honorary PhD degree, or honorary doctorate, is a prestigious accolade awarded by universities to individuals who have significantly contributed to society, their field, or knowledge. Unlike traditional doctoral degrees requiring rigorous coursework and research, honorary doctorates are conferred for outstanding achievements, leadership, or humanitarian efforts. They recognize exceptional individuals in business, science, arts, education, and public service, who have positively impacted their communities and the world. Honorary PhD degrees celebrate the honoree&apos;s accomplishments and inspire others to strive for excellence in their fields.
                        </p>

                    </div>

                    <div className={'flex flex-col shadow-xl shadow-stone-900 border-t-4 border-stone-500'}>
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
                <Link href={'/pages/honrarydoctorate'} className={'hover-fill text-slate-200 bg-red-600 p-2 w-96 my-10 text-center'}>Click to Apply for Honorary Doctorate Degree</Link>

            </div>
        )
}