import Link from "next/link";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import Image from "next/image";
import Img6 from "@/public/resources/research.png";
import { FaStar } from "react-icons/fa";

export default function CoursesPage(){
    return(
        <div className={'container flex flex-col sm:py-16 my-10'}>
            <div className={'flex gap-10 '}>
                <Link href={'/pages/study'}
                      className={'flex text-xs hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Back</Link>
                <Link href={'/pages/study/fee'}
                      className={'flex text-xs hover:text-red-500 items-center gap-2'}><FaArrowAltCircleRight/>Fee</Link>
            </div>
            <h2 className={'text-lg sm:text-4xl my-6'}>MVIT Courses</h2>

            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'}>
                {/*    */}
                <div className={'border-4 h-96 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img6} alt={'h-32'}
                               className={'h-52 w-full object-cover transition-transform duration-500 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div className={'flex flex-col h-44 bg-stone-950 text-gray-200  items-start justify-center p-4 hover:bg-stone-800'}>
                       <h2 className={'text-md text-amber-400'}>Certified Cloud Applied Generative AI Engineer</h2>
                       <h3 className={'text-xs'}>Dr. Sagher, John Smith</h3>
                        <div className={'flex text-amber-300 text-sm items-center justify-center gap-1'}>
                            <p>5.0</p>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className={'text-xs'}>$99.99</p>
                        <Link className={'px-1 bg-blue-700 text-xs hover-fill'} href={''}>Enroll</Link>
                    </div>
                </div>
            </div>


        </div>
    )
}