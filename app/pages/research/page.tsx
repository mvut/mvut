import React from "react";
import Image from "next/image";
import BgdR from '@/public/resources/ai-generated2.jpg'
export default function ResearchPage(){

        return (
            <div
                className={"flex flex-col items-center justify-start bg-fixed bg-cover"}>
                {/*<div*/}
                {/*    className={"hidden md:flex md:flex-col min-h-screen md:w-1/2 bg-teal-400 items-center justify-center md:gap-8 bg-[url('../public/resources/research.png')]  bg-cover"}>*/}
                {/*    /!*<p className={'text-amber-200 text-5xl font-bold text-center bg-red-700 p-2 rounded-xl'}>Build a Career</p>*!/*/}
                {/*    /!*<p className={'text-gray-50 text-6xl font-bold text-center bg-blue-700 p-2 rounded-xl'}>Research and Development (R&D)</p>*!/*/}
                {/*</div>*/}


                    <div className={"flex flex-col h-auto text-slate-100 bg-[url(../public/resources/research2.png)] items-start justify-center p-4"}>
                            <h1 className={'text-xl sm:text-3xl '}>Research and Development (R&D)</h1>
                            <p className={'text-sm sm:text-md sm:text-lg leading-relaxed sm:pl-16 sm:w-1/2 '}>
                                MVIT&apos;s research endeavors are driven by a multidisciplinary approach, focusing on
                                cutting-edge areas such as Industry 4.0, healthcare technology, smart cities, climate
                                change,
                                and digital transformation. Employing methodologies like experimental research, surveys,
                                case
                                studies, simulations, and statistical analysis, MVIT aims to advance knowledge, foster
                                innovation and entrepreneurship, develop research talent, and address pressing societal
                                challenges. Through strategic industry partnerships, interdisciplinary collaborations,
                                and
                                international cooperation, MVIT&apos;s research outcomes include publications, patents,
                                and
                                research grants, solidifying its position at the forefront of technological advancement
                                and
                                driving positive impact.
                            </p>
                    </div>

                {/*Research Area*/}
                <p className={'mx-4 text-3xl text-start text-amber-200 bg-indigo-950 p-4 rounded-r-full mt-10'}>Emerging
                    Technologies</p>

                <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:py-10'}>
                    <p className={'text-xl odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6 even:bg-amber-500'}>Artificial
                        Intelligence</p>
                    <p className={'text-xl odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6 even:bg-amber-500'}>Machine
                        Learning</p>
                    <p className={'text-xl odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6 even:bg-amber-500'}>Data Science and
                        Analytics</p>
                    <p className={'text-xl odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6 even:bg-amber-500'}>Database
                        Systems</p>
                    <p className={'text-xl odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6 even:bg-amber-500'}>Computer Vision
                        and Graphics</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Cryptography</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Computer Networks and Cybersecurity</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Human-Computer Interaction</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Distributed Systems and Cloud Computing</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Bioinformatics</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Quantum Computing</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Blockchain</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Internet of Things</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Computer Science Education</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Social Computing</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Software Project Management</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Agile Development</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Cloud Computing</p>
                    <p className={'text-xl even:bg-amber-500 odd:bg-indigo-900 p-2 text-gray-200 rounded-r-full pl-6'}>Animation</p>

                </div>
            </div>
        )
}