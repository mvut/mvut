'use client'
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Research1 from "@/public/resources/mvit-add2.png";
import Research2 from "@/public/resources/mvit-add3.png";
import Research3 from "@/public/resources/mvit-add4.png";
import Research4 from "@/public/resources/mvit-add6.png";
import Research5 from "@/public/resources/mvit-add7.png";
import Research6 from "@/public/resources/mvit-add8.png";
import React from "react";
const inter = Open_Sans({ subsets: ["latin"], weight:['400'] });
import {Open_Sans} from "next/font/google";

export default function NavComponent(){
return(
    <div className={` ${inter.className}`}>
        <Carousel plugins={[Autoplay({delay: 4000,}),]}
                  opts={{align: "start", loop: true,}}
                  className={""}
        >
            <CarouselContent className={''}>
                <CarouselItem className="relative flex flex-col items-center justify-center h-full w-full">
                    <Image src={Research1} alt="" className={'h-full w-full'}/>
                </CarouselItem>
                <CarouselItem className="relative flex flex-col items-center justify-center h-full w-full">
                    <Image src={Research6} alt="" className={'h-full w-full'}/>
                </CarouselItem>
                <CarouselItem className="relative flex flex-col items-center justify-center h-full w-full">
                    <Image src={Research2} alt="" className={'h-full w-full'}/>
                </CarouselItem>
                <CarouselItem className="relative flex flex-col items-center justify-center h-full w-full">
                    <Image src={Research5} alt="" className={'h-full w-full'}/>
                </CarouselItem>
                <CarouselItem className="relative flex flex-col items-center justify-center h-full w-full">
                    <Image src={Research4} alt="" className={'h-full w-full'}/>
                </CarouselItem>
                <CarouselItem className="relative flex flex-col items-center justify-center h-full w-full">
                    <Image src={Research3} alt="" className={'h-full w-full'}/>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    </div>
)
}