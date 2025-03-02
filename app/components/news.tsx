'use client'
const inter = Anton({ subsets: ["latin"], weight:['400'] });
import {Anton, Bebas_Neue, Mada, Milonga, Open_Sans, Oswald, Overpass, PT_Sans, Saira} from "next/font/google";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

export default function NewsComponent(){
    return (
        <div className={'container flex flex-col items-center justify-center p-4 '}>
            <h1 className={'text-3xl font-bold text-center pt-10'}>News & Events</h1>
            <div className={'grid grid-cols-1 lg:grid-cols-3 gap-10 py-10 '}>
                {/* */}
                <div
                    className={'flex flex-col h-full sm:w-auto hover:bg-slate-100 transition-all ease-in-out delay-200 border-2 border-slate-100'}>
                    <div className={'px-6 py-4'}>
                        <p className={'uppercase font-bold text-sm text-gray-600'}>learning</p>
                        <h2 className={`${inter.className} text-lg pb-4 text-red-800`}>Admissions are open in Corporate Language Certification for Business (CLCB)</h2>
                        <p className={'text-sm leading-relaxed '}>
                            As an IT professional, you understand the importance of technical skills in your field. However, to succeed in a corporate environment, it&apos;s equally crucial to possess excellent communication skills. This course is designed to help IT professionals improve their corporate communication skills, enabling them to effectively collaborate with colleagues, communicate with clients, and present technical information to non-technical stakeholders.
                        </p>

                    </div>
                </div>
                {/*    */}

                {/**/}
                <div
                    className={'flex flex-col h-full sm:w-auto hover:bg-slate-100 transition-all ease-in-out delay-200 border-2 border-slate-100'}>
                    <div className={'px-6 py-4'}>
                        <p className={'uppercase font-bold text-sm text-gray-600'}>K.G. STEM Entrepreneurs </p>
                        <h2 className={`${inter.className} text-lg pb-4 text-red-800`}>United School of Artificial Intelligence</h2>
                        <p className={'text-sm leading-relaxed '}>
                            Imagine a school where Kindergarten children can learn and play alongside artificial intelligence and computer science technologies! Welcome to the USAI, where we&apos;re revolutionizing early childhood education. Our innovative program brings AI and computer science to the youngest learners, fostering creativity, critical thinking, and problem-solving skills. Our experienced educators provide onsite training and education, carefully crafting a nurturing environment that sparks curiosity and excitement.

                        </p>
                        <Link className={'font-bold text-blue-500 hover:text-red-500'} href={'/usai/apply'}> Apply Now!</Link>
                    </div>
                </div>
                {/*    */}

                {/**/}
                <div
                    className={'flex flex-col h-full sm:w-auto hover:bg-slate-100 transition-all ease-in-out delay-200 border-2 border-slate-100'}>
                    <div className={'px-6 py-4'}>
                        <p className={'uppercase font-bold text-sm text-gray-600'}>Quality Assurance Test</p>
                        <h2 className={`${inter.className} text-lg pb-4 text-red-800`}>Education Quality Initiative</h2>
                        <p className={'text-sm leading-relaxed '}>
                            The Quality Assurance Test (QAT) is a systematic evaluation process designed to ensure that Quality of Education meet predetermined standards, requirements, and specifications. Conducted by independent testers, QAT involves a series of rigorous tests, inspections, and analyses to identify defects, discrepancies, and areas for improvement. By verifying conformance to quality, reliability, and performance criteria, QAT provides stakeholders with confidence that the deliverables are fit for purpose, reliable, and meet user expectations, ultimately enhancing customer satisfaction and loyalty.
                             <Link className={'font-bold text-blue-500 hover:text-red-500'} href={'/qat/IR'}> Apply Now!</Link>
                        </p>

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
                            design, develop, and maintain dynamic web applications. Covering latest technologies and
                            best
                            practices, WTST prepares students for in-demand digital careers, including Web Developer,
                            Web
                            Designer, and
                            UX/UI Specialist. With hands-on training, industry-recognized certification, and expert
                            mentorship, WTST is ideal for IT professionals, career changers, entrepreneurs, and
                            students.
                        </p>

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

                    </div>

                </div>
                {/*    */}
                {/**/}
                {/*<div*/}
                {/*    className={'flex flex-col h-full sm:w-auto hover:bg-slate-100 transition-all ease-in-out delay-200 border-2 border-slate-100'}>*/}
                {/*    <div className={'px-6 py-4'}>*/}
                {/*        <p className={'uppercase font-bold text-sm text-gray-600'}>Award Ceremony</p>*/}
                {/*        <h2 className={`${inter.className} text-lg text-red-800 pb-4 font-bold`}>The Interpersonal*/}
                {/*            Skills*/}
                {/*            (IPS)*/}
                {/*            Certification for Huffaz</h2>*/}
                {/*        <p className={'text-sm leading-relaxed'}>*/}
                {/*            IPS Certification was proudly awarded to Huffaz of ALABRAR MADINA*/}
                {/*            TUL ILM REHMANIA High School, Pakpattan, following a collaborative course conducted by*/}
                {/*            the*/}
                {/*            school and MVIT. This certification recognizes the participants&apos;*/}
                {/*            proficiency in essential life skills, including effective communication, conflict*/}
                {/*            resolution, teamwork, leadership, problem-solving, and emotional intelligence. By*/}
                {/*            complementing their academic and spiritual pursuits, this program fosters holistic*/}
                {/*            development, empowering Huffaz to excel in all aspects of life.*/}
                {/*        </p>*/}

                {/*    </div>*/}

                {/*</div>*/}
            </div>

        </div>
    )
}