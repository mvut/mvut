'use client'
import AdmissionImage from '@/public/resources/open.jpg';
import AdmissionImage2 from '@/public/resources/open2.jpg';
import Image from "next/image";
const inter = Anton({ subsets: ["latin"], weight:['400'] });
import {Anton, Bebas_Neue, Mada, Milonga, Open_Sans, Oswald, Overpass, PT_Sans, Saira} from "next/font/google";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Alabrar1 from '@/public/alabrar/ablabrar1.jpg';
import Alabrar2 from '@/public/alabrar/ablabrar2.jpg';
import Alabrar3 from '@/public/alabrar/ablabrar3.jpg';
import Alabrar4 from '@/public/alabrar/ablabrar4.jpg';
import Alabrar5 from '@/public/alabrar/ablabrar5.jpg';
import Alabrar6 from '@/public/alabrar/ablabrar6.jpg';

export default function NewsComponents(){
    return(
        <div className={'container flex flex-col items-center justify-center  py-16'}>
            <h1 className={'text-5xl'}>News & Events</h1>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 py-10 '}>
                {/**/}
                <div className={'flex flex-col h-full sm:w-auto bg-yellow-50 '}>
                    <Image src={AdmissionImage} alt={''} className={'h-40 w-full'}/>
                    <div className={'px-6 py-4'}>
                        <p className={'uppercase font-bold text-sm text-gray-400'}>learning</p>
                        <h2 className={`${inter.className} text-lg text-indigo-800 pb-4`}>Admissions are open in Web
                            Technology Specialist
                            Training (WTST)</h2>
                        <p className={'text-sm leading-relaxed'}>
                            The Web Technology Specialist Training (WTST) program equips individuals with skills to
                            design,
                            develop, and maintain dynamic web applications. Covering latest technologies and best
                            practices,
                            WTST prepares students for in-demand digital careers, including Web Developer, Web Designer,
                            and
                            UX/UI Specialist. With hands-on training, industry-recognized certification, and expert
                            mentorship, WTST is ideal for IT professionals, career changers, entrepreneurs, and
                            students.

                        </p>
                        <div
                            className={'flex h-9 w-24 my-6 hover:bg-red-800 text-gray-50 hover:text-amber-300 rounded-md bg-stone-950'}>
                            <Link href={'/pages/apply'} className={'flex items-center justify-center '}>
                                <p className={'p-2 h-full uppercase '}>Apply</p>
                                <div className={'flex items-center justify-start  h-10 w-10 '}>
                                    <FaArrowUpRightFromSquare/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/*    */}
                {/**/}
                <div className={'flex flex-col h-full sm:w-auto bg-yellow-50'}>
                    <Image src={AdmissionImage} alt={''} className={'h-40 w-full'}/>
                    <div className={'px-6 py-4'}>
                        <p className={'uppercase font-bold text-sm text-gray-400'}>learning</p>
                        <h2 className={`${inter.className} text-lg text-indigo-800 pb-4`}>Admissions are open in
                            Computer Science Professional Studies (CSPS)</h2>
                        <p className={'text-sm leading-relaxed'}>
                            The Computer Science Professional Studies (CSPS) program prepares IT professionals with
                            specialized skills in AI, Cybersecurity, Data Science, and Software Engineering. Combining
                            theory and hands-on training, CSPS students develop expertise in programming, data
                            structures, and software development. Upon graduation, they&apos;re equipped for tech
                            industry leadership roles.
                            Upon graduation, CSPS professionals are equipped to excel in leadership roles within the
                            tech industry.

                        </p>
                        <div
                            className={'flex h-9 w-24 my-6 hover:bg-red-800 text-gray-50 hover:text-amber-300 rounded-md bg-stone-950'}>
                            <Link href={'/pages/apply'} className={'flex items-center justify-center '}>
                                <p className={'p-2 h-full uppercase '}>Apply</p>
                                <div className={'flex items-center justify-start  h-10 w-10 '}>
                                    <FaArrowUpRightFromSquare/>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
                {/*    */}
                {/**/}
                <div className={'flex flex-col h-full sm:w-auto bg-yellow-50'}>
                    <Carousel plugins={[Autoplay({delay: 5000,}),]}
                              opts={{align: "start", loop: true,}}
                              className="h-40 w-full "
                    >
                        <CarouselContent className={'h-40 w-full'}>
                            <CarouselItem className="">
                                <Image src={Alabrar1} alt="" className={''}/>
                            </CarouselItem>
                            <CarouselItem className="">
                                <Image src={Alabrar2} alt=""/>
                            </CarouselItem>
                            <CarouselItem className="">
                                <Image src={Alabrar3} alt=""/>
                            </CarouselItem>
                            <CarouselItem className="">
                                <Image src={Alabrar4} alt=""/>
                            </CarouselItem>
                            <CarouselItem className="">
                                <Image src={Alabrar5} alt=""/>
                            </CarouselItem>
                            <CarouselItem className="">
                                <Image src={Alabrar6} alt=""/>
                            </CarouselItem>
                        </CarouselContent>
                        {/*<CarouselPrevious/>*/}
                        {/*<CarouselNext/>*/}
                    </Carousel>
                    <div className={'px-6 py-4'}>
                        <p className={'uppercase font-bold text-sm text-gray-400'}>Award Ceremony</p>
                        <h2 className={`${inter.className} text-lg text-indigo-800 pb-4`}>The Interpersonal Skills (IPS)
                            Certification for Huffaz</h2>
                        <p className={'text-sm leading-relaxed'}>
                            The Interpersonal Skills (IPS) Certification was proudly awarded to Huffaz of ALABRAR MADINA
                            TUL ILM REHMANIA High School, Pakpattan, following a collaborative course conducted by the
                            school and MVI Technologies (MVIT). This certification recognizes the
                            participants&apos; proficiency in essential life skills, including effective communication,
                            leadership, problem-solving, and emotional intelligence. This program fosters holistic
                            development, empowering Huffaz to excel in life.
                        </p>
                        <div
                            className={'flex h-9 w-28 my-6 bg-red-800 text-gray-50 hover:text-amber-300 rounded-md hover:bg-stone-950'}>
                            <Link href={'/pages/study'} className={'flex items-center justify-center '}>
                                <p className={'p-2 h-full uppercase '}>Studies</p>
                                <div className={'flex items-center justify-start  h-10 w-10 '}>
                                    <FaArrowUpRightFromSquare/>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}