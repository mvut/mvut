'use client'

import React from "react";
import Image from "next/image";
import Founder from '@/public/faculty/munsha.jpg'
import President from '@/public/faculty/abs.png'
import AdmissionImage2 from "@/public/faculty/abs.png";
import Link from "next/link";
import {FaArrowUpRightFromSquare} from "react-icons/fa6";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const inter = Anton({ subsets: ["latin"], weight:['400'] });
import {Anton, Bebas_Neue, Mada, Milonga, Open_Sans, Oswald, Overpass, PT_Sans, Saira} from "next/font/google";

export default function ResearchPage() {

    return (
        <div className={'flex flex-col items-center justify-center'}>
            <div className={"flex w-full h-48 bg-[url(../public/resources/glass.jpg)] items-center p-4"}>
                <h1 className={'text-start text-5xl uppercase'}>Leadership at the MVIT</h1>
            </div>
            <div className={'flex flex-col items-center justify-center mt-10'}>
                <h2 className={'text-3xl font-bold'}>Our Mission</h2>
                <p className={'sm:text-3xl w-[60%] mx-auto text-center leading-relaxed '}>
                    Empowering a brighter future through innovative education and
                    technology, transforming individuals, communities, and societies.
                </p>
            </div>
            <div className={'container grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 py-10 '}>
                {/**/}
                <div
                    className={'flex flex-col h-full sm:w-auto shadow-xl shadow-stone-900 border-t-4 border-stone-500'}>
                    {/*<Image src={AdmissionImage2} alt={''} className={'h-40 w-full'}/>*/}
                    <div className={'px-6 py-4'}>
                        <p className={'uppercase font-bold text-sm text-gray-400'}>Vision</p>
                        <h2 className={`${inter.className} text-lg text-indigo-800 pb-4`}>Founder MVIT</h2>
                        <p className={'text-sm leading-relaxed'}>
                            At MVIT, we envision a future where technology and innovation empower global prosperity,
                            bridging socio-economic gaps and transforming lives worldwide. Our mission is to cultivate
                            exceptional talent through rigorous academic programs, drive groundbreaking research, and
                            spark meaningful impact across borders. We&apos;re proud of our journey, marked by
                            innovative spirit, interdisciplinary approaches, and commitment to social responsibility. As
                            we shape a brighter future, we remain dedicated to fostering a culture of collaboration,
                            diversity, and inclusivity, nurturing a global network of visionary leaders and innovators,
                            and empowering marginalized communities through technology access and digital literacy.
                            Through our efforts, we aim to harness the power of technology to create a more equitable,
                            sustainable, and prosperous world for all.

                        </p>
                    </div>
                </div>
                {/*    */}
                {/**/}
                <div
                    className={'flex flex-col items-center justify-center shadow-xl shadow-stone-900 border-t-4 border-stone-500'}>
                    <Carousel plugins={[Autoplay({delay: 5000,}),]}
                              opts={{align: "start", loop: true,}}
                              className={""}
                    >
                        <CarouselContent className={''}>
                            <CarouselItem className="flex flex-col items-center justify-center ">
                                <Image src={Founder} alt="" className={'h-80 w-80'}/>
                                <p className={'text-xl font-bold text-center text-indigo-900 pt-4'}>Muhammad Munsha</p>
                                <p className={'text-sm font-bold text-center text-red-500'}>(Founder MVIT)</p>
                            </CarouselItem>
                            <CarouselItem className="flex flex-col items-center justify-center h-96 w-96">
                                <Image src={President} alt="" className={'h-80 w-80'}/>
                                <p className={'text-xl font-bold text-center text-indigo-900 pt-4'}>Abubakar
                                    Siddique</p>
                                <p className={'text-sm font-bold text-center text-red-500'}>(MVIT President)</p>
                            </CarouselItem>
                        </CarouselContent>
                        {/*<CarouselPrevious/>*/}
                        {/*<CarouselNext/>*/}
                    </Carousel>
                </div>
                {/**/}
                <div
                    className={'flex flex-col h-full sm:w-auto shadow-xl shadow-stone-900 border-t-4 border-stone-500'}>
                    {/*<Image src={AdmissionImage2} alt={''} className={'h-40 w-full'}/>*/}
                    <div className={'px-6 py-4'}>
                        <p className={'uppercase font-bold text-sm text-gray-400'}>Message</p>
                        <h2 className={`${inter.className} text-lg text-indigo-800 pb-4`}>MVIT President</h2>
                        <p className={'text-sm leading-relaxed'}>
                            As President Abubakar Siddique of MVIT, I am honored to lead this vibrant community of
                            innovators, educators, and change-makers. Building on our founder Muhammad Mansha&apos;s
                            legacy, we continue to push boundaries in technology and innovation, fostering a culture of
                            excellence, diversity, and inclusivity. Our commitment to academic rigor, cutting-edge
                            research, and social responsibility empowers our students, faculty, and alumni to drive
                            positive impact globally. As we navigate the complexities of the digital age, MVIT remains
                            dedicated to cultivating visionary leaders, entrepreneurs, and problem-solvers who harness
                            technology for the betterment of society. Together, let us shape a brighter future, where
                            innovation and technology converge to transform lives and communities worldwide.
                        </p>

                    </div>

                </div>
                {/*    */}

            </div>
        </div>
        // <div className={"flex flex-col min-h-screen"}>
        //     <div className={"flex w-full h-48 bg-[url(../public/resources/glass.jpg)] items-center p-4"}>
        //         <h1 className={'text-start text-5xl uppercase'}>Leadership at the MVIT</h1>
    //     </div>
    //     {/*Founder*/}
    //     <div className={'container py-10 outline outline-offset-2 outline-2'}>
    //         <div className={'flex items-center justify-center bg-gray-200 mx-auto text-gray-900 p-6 '}>
    //             <div className={'w-2/3'}>
    //                 <p className={'text-3xl underline underline-offset-8 font-bold'}> Founder Vision</p>
    //                 <p className={'leading-relaxed sm:py-4 text-xl '}>
    //                     The vision of MVIT was born out of the profound belief of our founder, Muhammad Mansha, in technology&apos;s transformative power. Although he is no longer with us, his legacy endures, inspiring us to empower global prosperity, bridge gaps, and transform lives worldwide. We continue to cultivate exceptional talent, drive groundbreaking research, and foster a culture of collaboration, diversity, and inclusivity. Honoring Muhammad Mansha&apos;s memory, we strive to shape a brighter future, perpetuating his commitment to excellence, innovation, and social responsibility.
    //                 </p>
    //
    //             </div>
    //             <div className={'flex flex-col items-center justify-center w-1/3 skew-r-10 rounded-l-full p-6 '}>
    //                 <Image src={Founder} alt={''} className={'h-72 w-72 rounded-full border-4 border-red-600'}/>
    //                 <p className={'text-md italic mt-4'}>Muhammad Mansha (Late)</p>
    //             </div>
    //         </div>
    //     </div>

// </div>
)
}