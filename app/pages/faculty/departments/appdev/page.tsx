import Image from "next/image";
import AliIjaz from "@/public/faculty/ali.png";
import Daha from "@/public/faculty/daha.jpg";
import Mst from "@/public/faculty/mst.jpg";
import Awais from "@/public/faculty/awais.jpg";
import Haris from "@/public/faculty/haris.jpg";
import Link from "next/link";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

export default function AppDepartment(){
    return(
        <div className={'container flex flex-col py-16'}>
            <Link href={'/pages/faculty'} className={'flex text-lg hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Faculties</Link>
            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of Application
                Development</p>
            <p className={'text-xs sm:text-sm'}>
                The Faculty of Application Development at MVIT empowers students to design, develop, and deploy
                innovative software solutions that transform industries and improve lives. Our expert faculty, comprised
                of seasoned professionals and industry experts, deliver a cutting-edge curriculum that blends
                theoretical foundations with hands-on experience. Students gain proficiency in programming languages,
                software engineering, database management, and human-computer interaction, preparing them to tackle
                complex challenges. State-of-the-art facilities, including advanced labs and collaborative workspaces,
                foster creativity, experimentation, and teamwork. Through projects, internships, and partnerships with
                tech leaders, students develop a portfolio of impressive applications, addressing real-world challenges
                in areas like healthcare, finance, and sustainability.

            </p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={AliIjaz} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Ali Ijaz</h2>
                        <h2 className={'text-sm'}>MCS, M.Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Computer Science</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Daha} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Daha Qalbi</h2>
                        <h2 className={'text-sm'}>BS (CS)</h2>
                        <h2 className={'text-sm'}>Instructor MERN Stack</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Mst} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Shaban</h2>
                        <h2 className={'text-sm'}>BCS</h2>
                        <h2 className={'text-sm'}>Instructor Full-Stack Development</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Awais} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Awais</h2>
                        <h2 className={'text-sm'}>BCS</h2>
                        <h2 className={'text-sm'}>Instructor Tailwind</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Haris} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Haris</h2>
                        <h2 className={'text-sm'}>ICS</h2>
                        <h2 className={'text-sm'}>Instructor Frontend Design</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}