import React from "react";

export default function ResearchPage(){

        return (
            <div className={"flex flex-row md:min-h-screen items-center justify-center bg-[url('../public/resources/research2.png')] bg-fixed bg-cover"}>
                {/*<div*/}
                {/*    className={"hidden md:flex md:flex-col min-h-screen md:w-1/2 bg-teal-400 items-center justify-center md:gap-8 bg-[url('../public/resources/research.png')]  bg-cover"}>*/}
                {/*    /!*<p className={'text-amber-200 text-5xl font-bold text-center bg-red-700 p-2 rounded-xl'}>Build a Career</p>*!/*/}
                {/*    /!*<p className={'text-gray-50 text-6xl font-bold text-center bg-blue-700 p-2 rounded-xl'}>Research and Development (R&D)</p>*!/*/}
                {/*</div>*/}

                <div className={'flex flex-col md:w-1/2 items-start justify-center md:gap-2 p-4 lg:pl-12 bg-indigo-900 text-amber-200'}>
                    <h1 className={'text-3xl py-4'}>Research and Development (R&D)</h1>
                    <p className={'text-xl leading-relaxed'}>
                        MVIT&apos;s research endeavors are spearheaded by 10 specialized departments, including
                        Artificial Intelligence and Machine Learning, Cybersecurity, Data Science, Internet of Things,
                        Networking, Software Engineering, Human-Computer Interaction, Robotics, Sustainable Energy, and
                        Biotechnology. These departments focus on cutting-edge areas like Industry 4.0, healthcare
                        technology, smart cities, climate change, and digital transformation, employing methodologies
                        such as experimental research, surveys, case studies, simulations, and statistical analysis.
                        Through industry partnerships, interdisciplinary collaborations, and international cooperation,
                        MVIT&apos;s research aims to advance knowledge, foster innovation and entrepreneurship, develop
                        research talent, and address pressing societal challenges, resulting in publications, patents,
                        and research grants that solidify its position at the forefront of technological advancement.
                    </p>
                </div>

            </div>
        )
}