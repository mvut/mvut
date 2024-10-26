'use client'

import React from "react";
import Image from "next/image";
import Founder from '@/public/faculty/munsha.jpg'
import President from '@/public/faculty/abs.png'
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

            <div className={'container flex flex-col overflow-auto py-10 min-h-screen '}>
                <h1 className={'text-3xl pb-8'}>Board of Governors</h1>
                <table className={"table-auto text-center text-xs sm:text-lg "}>
                    <tbody>
                    <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                        <td className={'px-4'}>1</td>
                        <td className={'text-start'}>President (Founder and Owner)</td>
                        <td>Chairman</td>
                    </tr>
                    <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                        <td className={'px-4'}>2</td>
                        <td className={'text-start'}>Vice-President</td>
                        <td>Co-Chairman</td>
                    </tr>
                    <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                        <td className={'px-4'}>3</td>
                        <td className={'text-start'}>Rector, Mansha Virtual Institute of Technologies</td>
                        <td>Member</td>
                    </tr>
                    <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                        <td className={'px-4'}>4</td>
                        <td className={'text-start'}>Deans from Departments of Mansha Virtual Institute of
                            Technologies
                        </td>
                        <td>Member</td>
                    </tr>
                    <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                        <td className={'px-4'}>5</td>
                        <td className={'text-start'}>Registrar, Mansha Virtual Institute of Technologies</td>
                        <td>Secretary</td>
                    </tr>
                    <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                        <td className={'px-4'}>6</td>
                        <td className={'text-start'}>Academic Representative</td>
                        <td>Member</td>
                    </tr>
                    <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                        <td className={'px-4'}>7</td>
                        <td className={'text-start'}>Finance Expert/Treasurer</td>
                        <td>Member</td>
                    </tr>
                    <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                        <td className={'px-4'}>8</td>
                        <td className={'text-start'}>Legal Advisor</td>
                        <td>Member</td>
                    </tr>
                    <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                        <td className={'px-4'}>9</td>
                        <td className={'text-start'}>Industry and Community Representatives</td>
                        <td>Member</td>
                    </tr>
                    <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                        <td className={'px-4'}>10</td>
                        <td className={'text-start'}>Alumni and Student Representatives</td>
                        <td>Member</td>
                    </tr>
                    </tbody>
                </table>
                <h1 className={'text-3xl py-8'}>Organizational Structure</h1>
                <ul className={'list-disc pl-16 text-xs sm:text-lg'}>
                    <li>The President (Founder and Owner) serves as the Chancellor of the Mansha Virtual Institute of
                        Technologies.
                    </li>
                    <li>The Rector serves as the Chief Executive Officer and Chief Academic Officer of the Mansha
                        Virtual Institute of Technologies.
                    </li>
                    <li>Other Officers of the institute includes
                        Registrar,
                        Deans,
                        Directors,
                        Chairpersons or Heads of the Teaching Departments,
                        Director Finance,
                        Controller of Examinations.
                    </li>
                    <li>The Board of Governors serves as the highest authority of the Mansha Virtual Institute of
                        Technologies, entrusted with overseeing and guiding its administrative, academic, and financial
                        matters, as well as establishing policies and regulations
                    </li>
                    <li>Other key authorities of the Institute includes

                        Executive Council,
                        Academic Council,
                        Board of Studies,
                        Advanced Studies and Research Board,
                        Selection Board,
                        Finance and Planning Council,
                        Affiliation Committee.
                    </li>
                </ul>
            </div>
        </div>
    )
}