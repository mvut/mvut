import { GiArchiveResearch } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import { GiGlobe } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";

export default function WhyUsComponent(){
    return(
        <div className={'container flex flex-col gap-10 h-auto items-center justify-center my-16'}>
            <p className={'text-5xl'}>Why MVIT?</p>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}>
                <div
                    className={'flex flex-col items-center justify-center text-2xl text-center gap-4 text-stone-900 hover:text-indigo-800 transition-all ease-in-out delay-100 rounded-lg p-4'}>
                    <GiBookshelf size={100}/>
                    <p>Online Affordable Education </p>
                </div>
                <div
                    className={'flex flex-col items-center justify-center text-2xl text-center gap-4 text-stone-900 hover:text-indigo-800 transition-all ease-in-out delay-100 rounded-lg p-4'}>
                    <FaLaptopCode size={100}/>
                    <p>Code Literacy for All</p>
                </div>
                <div
                    className={'flex flex-col items-center justify-center text-2xl text-center gap-4 text-stone-900 hover:text-indigo-800 transition-all ease-in-out delay-100 rounded-lg p-4'}>
                    <GiGlobe size={100}/>
                    <p>United Minds, Global Learning</p>
                </div>
                <div
                    className={'flex flex-col items-center justify-center text-2xl text-center gap-4 text-stone-900 hover:text-indigo-800 transition-all ease-in-out delay-100 rounded-lg p-4'}>
                    <GiArchiveResearch size={100}/>
                    <p>Hands-on Research Experience</p>
                </div>
            </div>
        </div>
    )
}