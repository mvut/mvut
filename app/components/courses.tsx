import AIIntroImage from '../../public/resources/img1.jpg';
import Img1 from '../../public/resources/img1.jpg';
import Img2 from '../../public/resources/img2.jpg';
import Img3 from '../../public/resources/img3.jpg';
import Img4 from '../../public/resources/img4.jpg';
import Img5 from '../../public/resources/img5.jpg';
import Img6 from '../../public/resources/img6.jpg';
import Img7 from '../../public/resources/img7.jpg';
import Img8 from '../../public/resources/img8.jpg';
import Img9 from '../../public/resources/img9.jpg';
import Img10 from '../../public/resources/img10.jpg';
import Img11 from '../../public/resources/img11.jpg';
import Img12 from '../../public/resources/img12.jpg';
import Img13 from '../../public/resources/img13.jpg';
import Img14 from '../../public/resources/img14.jpg';
import Img15 from '../../public/resources/img15.jpg';
import Img16 from '../../public/resources/img16.jpg';
import Img17 from '../../public/resources/etm.jpg';
import Img18 from '../../public/resources/cthe.jpg';

import Image from "next/image";

export default function CoursesPage(){
    return (
        <div className="flex flex-col items-center justify-center py-6 lg:py-12 mt-10">
            <p className={'text-teal-900 text-xl lg:text-4xl font-bold text-center lg:pb-10'}>Web Technology Specialist Training (WTST)</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img1} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>

                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg py-2 font-bold text-white">Full Stack Development (FSD)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Unlock the power of full stack development and bring your ideas to life! Learn to design,
                            build, and deploy dynamic web applications from scratch, mastering both front-end and
                            back-end development skills. From user interface to server-side logic, get ready to create
                            seamless user experiences and take your skills to the next level.
                        </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img2} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[47%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg py-2 font-bold text-white">Artificial Intelligence (AI)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            This beginner-friendly course introduces you to the basics of AI, including machine learning,
                            deep learning, and neural networks. Learn how AI is transforming industries and daily life,
                            and gain hands-on experience with practical exercises and projects. No prior experience
                            needed - just curiosity and enthusiasm!
                        </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img3} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg py-2 font-bold text-white">Web Designing and Graphics (WDG)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Bring your creativity to life on the web! Learn the art of web designing and graphics, from
                            visual storytelling to user-friendly interfaces. Master the skills to craft stunning
                            websites, logos, and graphics that captivate audiences. Discover the perfect blend of design
                            principles, visual elements, and technical expertise to make your digital presence
                            shine! </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img4} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[47%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg py-2 font-bold text-white">Data Science (DS)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                           Learn to harness the potential of
                            machine learning, data analysis, and visualization using Python&apos;s popular libraries
                            like NumPy, pandas, and scikit-learn. Master the skills to extract insights, build
                            predictive models, and drive business decisions with data-driven solutions. </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img5} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[43%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg py-2 font-bold text-white">Research and Development (R&D)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Learn the systematic approach to Research and
                            Development (R&D), from idea generation to prototype development. Master the skills to
                            design experiments, collect data, and analyze results to bring cutting-edge solutions to
                            life.  </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img6} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg py-2 font-bold text-white">Interpersonal Skills (IPS)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Learn to develop
                            strong relationships, resolve conflicts, and master Microsoft Office applications like Word,
                            Excel, and PowerPoint. Improve your written and verbal communication skills, enhance your
                            productivity, and work effectively with others to achieve success in your career.
                        </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img7} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg py-2 font-bold text-white">Certificate Courses in Technology (CCT)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            These short-term programs offer practical skills and knowledge, enhancing career prospects and providing a competitive edge in the tech industry. Ideal for professionals, students, and enthusiasts, certificate courses offer flexible and focused learning, aligning with industry demands and trends.                        </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img8} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[53%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg py-2 font-bold text-white"> Leadership and Management Dynamics (LMD)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Through interactive modules and expert insights, participants explore the dynamic interplay between leadership and management, developing skills in strategic planning, communication, and adaptive leadership. This program empowers leaders to drive innovation and achieve sustainable success.                        </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img17} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg py-2 font-bold text-white">Entrepreneurial Technology Management (ETM)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Master the art of tech entrepreneurship and learn to launch, grow, and scale successful tech businesses. This comprehensive course covers digital business strategy, technology management, innovation, and leadership, preparing you for the demands of the rapidly evolving tech industry                        </p>
                    </div>
                </div>
            </div>
            {/*-----------------------*/}
            <p className={'text-teal-900 text-xl lg:text-4xl font-bold text-center lg:pb-10 py-6 lg:py-10 mt-10'}>Computer Science Professional Studies (CSPS)</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img9} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg font-bold text-white py-2">Junior Computer Science Certificate (JCSC)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The Junior Computer Science Certificate introduces young learners to digital literacy, coding, and problem-solving, sparking curiosity and creativity. This foundational program prepares students for future digital opportunities.                        </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img10} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg font-bold text-white py-2">Senior Computer Science Certificate (SCSC)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Unlock the world of computer science with the Senior Computer Science Certificate (SCSC). This interactive program develops programming skills, digital literacy, and curiosity, preparing students for STEM careers.                        </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img11} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg font-bold text-white py-2">Advance Computer Science Certificate (ACSC)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Elevate your skills in programming, data analysis, and software development. Enhance problem-solving, logical thinking, and digital literacy, preparing for tech careers and higher education.                        </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img12} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg font-bold text-white py-2">Professional Computer Science Certificate (PCSC)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Refine programming skills, master algorithms, software engineering, and practical applications. Prepare for tech careers, entrepreneurship, and higher education through project-based learning.                        </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img13} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[57%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg font-bold text-white py-2">Premier Certificate in Computer Science (PCCS)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The PCCS is a comprehensive program covering theoretical foundations and practical applications. Students develop strong programming skills and problem-solving abilities, preparing them for careers in software development, data analysis, AI, cybersecurity, and emerging tech fields.
                        </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img14} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg font-bold text-white py-2">Certified Web Professional (CWP)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The CWP enhances tech skills through advanced training in software development, data structures, and computer systems. This program prepares professionals for IT careers, skill upgrades, or transitions, providing a solid foundation for further studies or career advancement.                        </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img15} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg font-bold text-white py-2">Advance Professional Certificate in Web Development (APCWD)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The APCWD enhances graduate-level skills in cutting-edge tech fields. Explore AI, data science, cybersecurity, and cloud computing through research, projects, and collaboration. Prepare for leadership roles, advanced research, and innovative tech career.                        </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img16} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[53%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg font-bold text-white py-2">Certificate of Philosophy in Web Development (CPWD)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The CPWD program investigates philosophical dimensions of web development, including epistemology, ethics, and aesthetics. Students critically analyze technological innovation, user experience, and societal implications, cultivating a deeper understanding of web development&apos;s philosophical underpinnings                        </p>
                    </div>
                </div>
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img18} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-lg font-bold text-white py-2">Certificate in Technological Humanism and Ethics (CTHE)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            In this certificate program, explore the intersection of technology, humanity, and ethics. Delve into the social, cultural, and moral implications of emerging technologies and develop a deep understanding of the human-centered approach to technological innovation.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        // <div className={'flex flex-col items-center justify-center py-16'}>
        //     <p className={'text-5xl font-bold text-center'}>Available Programs</p>
        //     <div className={'flex sm:flex-col lg:flex-row justify-center items-start gap-6 py-6 px-6'}>
        //         {courses.map((link) => {
        //             return (
        //                 <div key={link.id}
        //                      className={'flex rounded-xl h-64 flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-amber-500'}>
        //                     {/*<Image src={link.pic} alt={''}/>*/}
        //                     <h2 className={'font-bold text-lg text-indigo-950 bg-teal-900 rounded-t-xl p-1'}>{link.name}</h2>
        //                     <p className={'text-sm text-gray-950'}>{link.description}</p>
        //                     {/*<Link className={'hover:font-bold text-red-600 text-sm'} href={link.pageLink}>Read*/}
        //                     {/*    more...</Link>*/}
        //                 </div>
        //
        //             );
        //         })}
        //
        //     </div>
        // </div>
    )
}