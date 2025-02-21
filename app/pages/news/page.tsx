'use client'
const inter = Anton({ subsets: ["latin"], weight:['400'] });
import {Anton, Bebas_Neue, Mada, Milonga, Open_Sans, Oswald, Overpass, PT_Sans, Saira} from "next/font/google";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";
import { SiCoursera } from "react-icons/si";
import { HiOutlineLink } from "react-icons/hi";

export default function NewsComponents(){
    return(
        <div className={'flex flex-col lg:flex-row items-start justify-center p-4'}>

            <div className={'hidden lg:flex lg:w-[20%] h-full'}>

            </div>
            <div className={'lg:w-[60%] h-full'}>
                <h1 className={'text-3xl lg:text-5xl text-center pt-10'}>News & Events</h1>
                <div className={'grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 '}>

                    {/**/}
                    <div
                        className={'flex flex-col h-full sm:w-auto hover:bg-slate-100 transition-all ease-in-out delay-200 border-2 border-slate-100'}>
                        <div className={'px-6 py-4'}>
                            <p className={'uppercase font-bold text-sm text-gray-600'}>learning</p>
                            <h2 className={`${inter.className} text-lg pb-4 text-red-800`}>Admissions are open in Web
                                Technology Specialist
                                Training (WTST)</h2>
                            <p className={'text-sm leading-relaxed '}>
                                The Web Technology Specialist Training (WTST) program equips individuals with skills to
                                design,
                                develop, and maintain dynamic web applications. Covering latest technologies and best
                                practices,
                                WTST prepares students for in-demand digital careers, including Web Developer, Web
                                Designer,
                                and
                                UX/UI Specialist. With hands-on training, industry-recognized certification, and expert
                                mentorship, WTST is ideal for IT professionals, career changers, entrepreneurs, and
                                students.

                            </p>
                            <div
                                className={'flex h-9 w-24 my-6 hover:bg-red-600 text-amber-300 rounded-md bg-red-800 transition-all ease-in-out delay-200'}>
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
                    <div
                        className={'flex flex-col h-full sm:w-auto hover:bg-slate-100 transition-all ease-in-out delay-200 border-2 border-slate-100'}>
                        <div className={'px-6 py-4'}>
                            <p className={'uppercase font-bold text-sm text-gray-600'}>learning</p>
                            <h2 className={`${inter.className} text-lg pb-4 text-red-800`}>Admissions are open in Web
                                Technology Specialist
                                Training (WTST)</h2>
                            <p className={'text-sm leading-relaxed '}>
                                The Web Technology Specialist Training (WTST) program equips individuals with skills to
                                design,
                                develop, and maintain dynamic web applications. Covering latest technologies and best
                                practices,
                                WTST prepares students for in-demand digital careers, including Web Developer, Web
                                Designer,
                                and
                                UX/UI Specialist. With hands-on training, industry-recognized certification, and expert
                                mentorship, WTST is ideal for IT professionals, career changers, entrepreneurs, and
                                students.

                            </p>
                            <div
                                className={'flex h-9 w-24 my-6 hover:bg-red-600 text-amber-300 rounded-md bg-red-800 transition-all ease-in-out delay-200'}>
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
                    <div
                        className={'flex flex-col h-full sm:w-auto hover:bg-slate-100 transition-all ease-in-out delay-200 border-2 border-slate-100'}>
                        <div className={'px-6 py-4'}>
                            <p className={'uppercase font-bold text-sm text-gray-600'}>learning</p>
                            <h2 className={`${inter.className} text-lg pb-4 text-red-800`}>Admissions are open in Web
                                Technology Specialist
                                Training (WTST)</h2>
                            <p className={'text-sm leading-relaxed '}>
                                The Web Technology Specialist Training (WTST) program equips individuals with skills to
                                design,
                                develop, and maintain dynamic web applications. Covering latest technologies and best
                                practices,
                                WTST prepares students for in-demand digital careers, including Web Developer, Web
                                Designer,
                                and
                                UX/UI Specialist. With hands-on training, industry-recognized certification, and expert
                                mentorship, WTST is ideal for IT professionals, career changers, entrepreneurs, and
                                students.

                            </p>
                            <div
                                className={'flex h-9 w-24 my-6 hover:bg-red-600 text-amber-300 rounded-md bg-red-800 transition-all ease-in-out delay-200'}>
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
                    <div
                        className={'flex flex-col h-full sm:w-auto hover:bg-slate-100 transition-all ease-in-out delay-200 border-2 border-slate-100'}>
                        <div className={'px-6 py-4'}>
                            <p className={'uppercase font-bold text-sm text-gray-600'}>learning</p>
                            <h2 className={`${inter.className} text-lg text-red-800 pb-4`}>Admissions are open in
                                Computer Science Professional Studies (CSPS)</h2>
                            <p className={'text-sm leading-relaxed'}>
                                The Computer Science Professional Studies (CSPS) program prepares IT professionals with
                                specialized skills in AI, Cybersecurity, Data Science, and Software Engineering.
                                Combining
                                theory and hands-on training, CSPS students develop expertise in programming, data
                                structures, and software development. Upon graduation, they&apos;re equipped for tech
                                industry leadership roles.
                                Upon graduation, CSPS professionals are equipped to excel in leadership roles within the
                                tech industry.

                            </p>
                            <div
                                className={'flex h-9 w-24 my-6 hover:bg-red-600 text-amber-300 rounded-md bg-red-800 transition-all ease-in-out delay-200'}>
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
                    <div
                        className={'flex flex-col h-full sm:w-auto hover:bg-slate-100 transition-all ease-in-out delay-200 border-2 border-slate-100'}>
                        <div className={'px-6 py-4'}>
                            <p className={'uppercase font-bold text-sm text-gray-600'}>learning</p>
                            <h2 className={`${inter.className} text-lg text-red-800 pb-4`}>Celebrating Influential
                                Leaders
                                with Honorary Doctorate Degrees </h2>
                            {/*<h3 className={'text-md'}>Appreciation for Social Engagement</h3>*/}
                            <p className={'text-sm leading-relaxed'}>
                                An honorary PhD is a prestigious award given by institutions to individuals who have
                                made
                                significant contributions to society or their field. Unlike traditional doctorates, it
                                is
                                granted for outstanding achievements, leadership, or humanitarian efforts. It honors
                                individuals in business, science, arts, education, and public service who have
                                positively
                                impacted their communities and the world.

                            </p>
                            <div
                                className={'flex h-9 w-24 my-6 hover:bg-red-600 text-amber-300 rounded-md bg-red-800 transition-all ease-in-out delay-200'}>
                                <Link href={'/pages/honrarydoctorate'} className={'flex items-center justify-center '}>
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
                    <div
                        className={'flex flex-col h-full sm:w-auto hover:bg-slate-100 transition-all ease-in-out delay-200 border-2 border-slate-100'}>
                        <div className={'px-6 py-4'}>
                            <p className={'uppercase font-bold text-sm text-gray-600'}>Award Ceremony</p>
                            <h2 className={`${inter.className} text-lg text-red-800 pb-4`}>The Interpersonal Skills
                                (IPS)
                                Certification for Huffaz</h2>
                            <p className={'text-sm leading-relaxed'}>
                                IPS Certification was proudly awarded to Huffaz of ALABRAR MADINA
                                TUL ILM REHMANIA High School, Pakpattan, following a collaborative course conducted by
                                the
                                school and MVIT. This certification recognizes the participants&apos;
                                proficiency in essential life skills, including effective communication, conflict
                                resolution, teamwork, leadership, problem-solving, and emotional intelligence. By
                                complementing their academic and spiritual pursuits, this program fosters holistic
                                development, empowering Huffaz to excel in all aspects of life.
                            </p>
                            <div
                                className={'flex h-9 w-24 my-6 hover:bg-red-600 text-amber-300 rounded-md bg-red-800 transition-all ease-in-out delay-200'}>
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
            <div className={'hidden lg:flex flex-col p-4 lg:w-[20%] h-full gap-4 items-start'}>
               <p className={'text-3xl'}>Important Links</p>
                <Link href={'https://www.coursera.org/'} target={'_blank'} className={'pl-6 flex items-center justify-center gap-2 text-indigo-500 hover:text-rose-500 transition-all ease-in-out delay-200'}><SiCoursera />
                    Coursera: Learn without limits
                </Link>
                <Link href={'https://www.uopeople.edu/'} target={'_blank'} className={'pl-6 flex items-center justify-center gap-2 text-indigo-500 hover:text-rose-500 transition-all ease-in-out delay-200'}><HiOutlineLink />
                    UoPeople: 100% online, tuition-free
                </Link>
                <Link href={'https://www.mikeversity.com/'} target={'_blank'} className={'pl-6 flex items-center justify-center gap-2 text-indigo-500 hover:text-rose-500 transition-all ease-in-out delay-200'}><HiOutlineLink />
                    Mikeversity: Global Leadership
                </Link>
                <Link href={'https://vu.edu.pk/'} target={'_blank'} className={'pl-6 flex items-center justify-center gap-2 text-indigo-500 hover:text-rose-500 transition-all ease-in-out delay-200'}><HiOutlineLink />
                    Virtual University of Pakistan
                </Link>
            </div>
        </div>
    )
}