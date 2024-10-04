import Image from "next/image";
import Yasir from "@/public/faculty/yasir.jpg";
import Yasri from "@/public/faculty/yassri.jpeg";
import Hameed from "@/public/faculty/hameed.jpg";
import Ikram from "@/public/faculty/ikram.jpg";
import Link from "next/link";
import {FaArrowAltCircleLeft} from "react-icons/fa";

export default function InterDisDepartment(){
    return(
        <div className={'container flex flex-col py-16'}>
            <Link href={'/pages/faculty'} className={'flex text-lg hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Faculties</Link>

            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of Interdisciplinary Education</p>
            <p className={'text-xs sm:text-sm'}>
                The Faculty of Interdisciplinary Education at MVIT revolutionizes learning by integrating multiple disciplines, fostering creative problem-solving, critical thinking, and collaborative leadership. Our innovative faculty bridge gaps between arts, humanities, social sciences, natural sciences, and technology, delivering a forward-thinking curriculum that addresses complex real-world challenges. Students explore interconnected themes, such as sustainability, social justice, and global citizenship, developing adaptable skills in design thinking, project-based learning, and community engagement. Through interdisciplinary research, internships, and capstone projects, graduates emerge as visionary thinkers, equipped to navigate complex systems, drive social change, and thrive in an ever-evolving world.

            </p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>


                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Yasir} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Yasir Ali</h2>
                        <h2 className={'text-sm'}>M.A. Education</h2>
                        <h2 className={'text-sm'}>Instructor Educational Studies</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Yasri} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Yasir</h2>
                        <h2 className={'text-sm'}>M.A. Political Science</h2>
                        <h2 className={'text-sm'}>Instructor Political Science</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>

                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Hameed} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Abdul Hameed</h2>
                        <h2 className={'text-sm'}>M.A. Islamic Studies, M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Islamic Studies</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Ikram} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Ikram</h2>
                        <h2 className={'text-sm'}>M.A Urdu, B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor National Language</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}