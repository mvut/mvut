'use client'
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Research1 from "@/public/resources/mvit-add2.png";
import React from "react";
const inter = Open_Sans({ subsets: ["latin"], weight:['400'] });
import {Open_Sans} from "next/font/google";

export default function NavComponent(){
return(
    <div className={` ${inter.className}`}>
        <Carousel plugins={[Autoplay({delay: 5000,}),]}
                  opts={{align: "start", loop: true,}}
                  className={""}
        >
            <CarouselContent className={''}>
                <CarouselItem className="relative flex flex-col items-center justify-center h-full w-full">
                    <Image src={Research1} alt="" className={'h-full w-full'}/>
                </CarouselItem>

            </CarouselContent>
        </Carousel>
    </div>
)
}