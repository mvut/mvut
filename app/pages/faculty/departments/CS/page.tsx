import Image from "next/image";
import Dummy from "@/public/faculty/dummy.png";
import Gami from "@/public/faculty/gami.jpg";
import Hussain from "@/public/faculty/hussain.jpg";
import Rizwan from "@/public/faculty/rizwan.jpg";
import Link from "next/link";
import {FaArrowAltCircleLeft} from "react-icons/fa";

export default function CSDepartment(){
    return(
        <div className={'container flex flex-col py-16'}>
            <Link href={'/pages/faculty'} className={'flex text-lg hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Faculties</Link>

            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of Computer Science</p>
            <p className={'text-xs sm:text-sm'}>
                The Faculty of Computer Science at MVIT cultivates innovative thinkers and tech leaders, equipping students with a comprehensive foundation in computer science principles, theories, and applications. Our expert faculty deliver a forward-thinking curriculum spanning algorithms, data structures, software engineering, computer networks, database systems, artificial intelligence, and cybersecurity. With state-of-the-art facilities and collaborative research opportunities, students develop programming expertise, problem-solving skills, and innovative solutions to real-world challenges. Graduates are prepared for successful careers in tech, research, and entrepreneurship, driving digital transformation and shaping the future of computing.

            </p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Dummy} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Safia</h2>
                        <h2 className={'text-sm'}>MS (CS), M. Ed, M.A. Pak Studies</h2>
                        <h2 className={'text-sm'}>Instructor Computer Education</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Rizwan} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>M. Rizwan Khalid</h2>
                        <h2 className={'text-sm'}>BS in Computer Science</h2>
                        <h2 className={'text-sm'}>Instructor Computer Science</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Dummy} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Haiqa Safdar</h2>
                        <h2 className={'text-sm'}>BS (CS), B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Computer Science</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Hussain} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Hussain</h2>
                        <h2 className={'text-sm'}>BCS</h2>
                        <h2 className={'text-sm'}>Instructor Computer Graphics</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Gami} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Ghulam Muhammad</h2>
                        <h2 className={'text-sm'}>ICS</h2>
                        <h2 className={'text-sm'}>Instructor Amazon VA</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Dummy} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Aneela Abubakar</h2>
                        <h2 className={'text-sm'}>BCS</h2>
                        <h2 className={'text-sm'}>Technical Assistant</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}