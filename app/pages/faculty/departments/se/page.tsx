import Image from "next/image";
import Arshad from "@/public/faculty/arshadit.jpg";
import GhulamAbbas from "@/public/faculty/gabbas2.jpeg";
import Link from "next/link";
import {FaArrowAltCircleLeft} from "react-icons/fa";

export default function SoftwareEngineeringDepartment(){
    return(
        <div className={'container flex flex-col py-16'}>
            <Link href={'/pages/faculty'} className={'flex text-lg hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Faculties</Link>

            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of Software Engineering</p>
            <p className={'text-xs sm:text-sm'}>
                The Faculty of Software Engineering at MVIT bridges the gap between technology and innovation, nurturing skilled professionals who design, develop, and deliver high-quality software solutions. Our expert faculty guide students through a rigorous curriculum emphasizing software design patterns, architecture, testing, and project management, alongside cutting-edge technologies like agile development, DevOps, and cloud computing. With hands-on projects, internships, and industry partnerships, students gain expertise in programming languages, software development methodologies, and collaborative teamwork. Graduates are equipped to drive digital transformation, lead tech initiatives, and craft reliable, scalable, and secure software systems that transform industries and improve lives.

            </p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Arshad} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Arshad</h2>
                        <h2 className={'text-sm'}>MS (CS), M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Software Engineering</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={GhulamAbbas} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Ghulam Abbas</h2>
                        <h2 className={'text-sm'}>MS (CS), M.Sc Mathematics, B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Programming & Algorithms</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}