import Abs from "@/public/faculty/munsha.jpg";
import Image from "next/image";
import Link from "next/link";
import { GrAnnounce } from "react-icons/gr";

export default function VisionComponent(){
    return(
        <div className={'container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-col sm:flex-row justify-between px-6 py-16 gap-4'}>
            <div className={'flex flex-col sm:w-full sm:h-full bg-gray-200 p-6 border-t-4 border-amber-300 transition-all ease-in-out hover:bg-amber-100 delay-100 hover:scale-110'}>
                <h2 className={'underline underline-offset-4 text-indigo-700 font-bold'}>Vision</h2>
                <p className={'text-sm leading-relaxed py-2'}>Empowering a brighter future through innovative education and technology, transforming individuals,
                    communities, and societies.</p>

                <h2 className={'underline underline-offset-4 text-indigo-700 pt-6 font-bold'}>Mission Statement</h2>
                <p className={'text-sm text-stone-600 leading-relaxed py-2'}>At MVIT, our mission is to bridge the gap between technology and
                    education, providing accessible,
                    high-quality learning experiences that foster creativity, critical thinking, and innovation.</p>
            </div>
            {/*    */}
            <div
                className={'flex sm:w-full sm:h-full bg-gray-200 p-6 border-t-4 border-green-500 transition-all ease-in-out hover:bg-green-100 delay-100 hover:scale-110'}>
                <div className={'flex w-1/4 items-start justify-start'}>
                    <Image src={Abs} alt={''} className={'w-16 h-auto '}/>
                </div>
                <div className={'w-3/4'}>
                    <h2 className={'underline underline-offset-4 text-indigo-700 font-bold'}>Founder Message</h2>
                    <p className={'leading-relaxed text-sm sm:py-4'}>
                        At MVIT, we envision a future where technology and innovation empower global prosperity,
                        bridging
                        gaps and transforming lives worldwide. Our mission is to cultivate exceptional talent, drive
                        groundbreaking research, and spark meaningful impact across borders. I&apos;m proud of our
                        journey
                        and committed to shaping a brighter future for our global community, fostering a culture of
                        collaboration, diversity, and inclusivity.</p>
                    <p className={'text-xs italic'}>Muhammad Mansha</p>
                </div>

            </div>
            {/*    */}
            <div
                className={'flex flex-col sm:w-full sm:h-full bg-gray-200 p-6 border-t-4 border-indigo-500 transition-all ease-in-out hover:bg-indigo-100 delay-100 hover:scale-110'}>
                <h2 className={'underline underline-offset-4 text-indigo-700 font-bold'}>Announcements</h2>
                <div className={'flex items-center justify-center gap-2 py-2'}>
                    {/*<Image src={Abs} alt={''} className={'w-12 h-12 '}/>*/}
                    <GrAnnounce className={'w-12 h-12 text-xs text-red-600'}/>

                    <Link className={'text-xs hover:text-red-600 text-indigo-600'} href={'/pages/study'}>Fall 2024
                        Enrollment Now Open: Explore Our Certification Programs and Apply Today</Link>
                </div>
            </div>
        </div>
    )
}