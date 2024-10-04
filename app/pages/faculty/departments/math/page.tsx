import Image from "next/image";
import Babar from "@/public/faculty/babar.jpg";
import Amir from "@/public/faculty/amir.jpg";
import Link from "next/link";
import {FaArrowAltCircleLeft} from "react-icons/fa";

export default function MathematicsDepartment(){
    return(
        <div className={'container flex flex-col py-16'}>
            <Link href={'/pages/faculty'} className={'flex text-lg hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Faculties</Link>

            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of Mathematics</p>
            <p className={'text-xs sm:text-sm'}>
                The Faculty of Mathematics at MVIT fosters a community of mathematicians and thinkers, equipping students with a deep understanding of mathematical principles and their applications. Our esteemed faculty deliver a comprehensive curriculum spanning pure and applied mathematics, statistics, and computational mathematics, emphasizing problem-solving, logical reasoning, and analytical thinking. With research opportunities, collaborations, and cutting-edge resources, students explore the frontiers of mathematics, tackling complex challenges in fields like cryptography, data science, optimization, and mathematical modeling. Graduates are prepared for careers in academia, research, finance, technology, and more, driving innovation and solving real-world problems.
            </p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Babar} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Babar Hussain</h2>
                        <h2 className={'text-sm'}>M.Phil. Mathematics, B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Mathematics</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Amir} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Amir Shahzad</h2>
                        <h2 className={'text-sm'}>M.Phil. Mathematics, B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Computational Algorithms</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}