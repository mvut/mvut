import Image from "next/image";
import Younas from "@/public/faculty/younis.jpg";
import Sabar from "@/public/faculty/sabar.jpg";
import Safdar from "@/public/faculty/safdar.jpg";
import Link from "next/link";
import {FaArrowAltCircleLeft} from "react-icons/fa";

export default function EnglishDepartment(){
    return(
        <div className={'container flex flex-col py-16'}>
            <Link href={'/pages/faculty'} className={'flex text-lg hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Faculties</Link>

            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of English Language</p>
            <p className={'text-xs sm:text-sm'}>
                The Faculty of English Language at MVIT cultivates effective communication, creative expression, and critical thinking, empowering students to excel in a linguistically diverse world. Our expert faculty deliver a comprehensive curriculum encompassing language, literature, linguistics, and cultural studies, exploring the complexities of the English language and its global applications. With a focus on language acquisition, literary analysis, and professional communication, students develop skills in writing, teaching, translation, and cultural competency. Through research opportunities, internships, and international collaborations, graduates are prepared for careers in education, publishing, journalism, and international relations, shaping the cultural and linguistic landscape of the 21st century.
            </p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                {/* Leader */}
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Younas} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Younas Alam</h2>
                        <h2 className={'text-sm'}>M.Phil. Linguistics, M.A. Edu, LLB</h2>
                        <h2 className={'text-sm'}>Instructor English Language</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Sabar} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Sabar Hussain</h2>
                        <h2 className={'text-sm'}>M.Phil. English, M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor English Language</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Safdar} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Safdar Hussain</h2>
                        <h2 className={'text-sm'}>M.A. English, M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor English, Education</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}