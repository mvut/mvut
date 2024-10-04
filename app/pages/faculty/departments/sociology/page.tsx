import Image from "next/image";
import SARFRAZ from "@/public/faculty/SARFRAZ.jpg";
import Link from "next/link";
import {FaArrowAltCircleLeft} from "react-icons/fa";

export default function SociologyDepartment(){
    return(
        <div className={'container flex flex-col py-16'}>
            <Link href={'/pages/faculty'} className={'flex text-lg hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Faculties</Link>

            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of Sociology</p>
            <p className={'text-xs sm:text-sm'}>
                The Faculty of Sociology at MVIT explores the complex dynamics of human social behavior, relationships, and institutions, cultivating critical thinkers and informed citizens. Our esteemed faculty deliver a comprehensive curriculum encompassing sociological theory, research methods, social inequality, cultural diversity, globalization, and social policy. Students examine the intersections of power, identity, and social justice, developing skills in data analysis, critical thinking, and effective communication. Through research projects, community engagement, and internships, graduates are equipped to address pressing social issues, drive policy changes, and promote inclusive and equitable societies.

            </p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={SARFRAZ} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Sarfraz Ahmad</h2>
                        <h2 className={'text-sm'}>M.Phil. in Sociology, LLB</h2>
                        <h2 className={'text-sm'}>Legal Advisor</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}