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

import Image from "next/image";

export default function CoursesPage(){
    return (
        <div className="flex flex-col items-center justify-center py-6 lg:py-12 mt-10">
            <p className={'text-teal-900 text-xl lg:text-7xl font-bold text-center lg:pb-10'}>Skill Development Programs</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img1} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>

                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">Full Stack Development</h1>
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">Artificial Intelligence</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Uncover the fundamentals of Artificial Intelligence (AI) and unlock its potential! This
                            beginner-friendly course introduces you to the basics of AI, including machine learning,
                            deep learning, and neural networks. Learn how AI is transforming industries and daily life,
                            and gain hands-on experience with practical exercises and projects. No prior experience
                            needed - just curiosity and enthusiasm! </p>
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">Web Designing and Graphics</h1>
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">Data Science</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Unlock the power of AI and Data Science with Python! Learn to harness the potential of
                            machine learning, data analysis, and visualization using Python&apos;s popular libraries
                            like NumPy, pandas, and scikit-learn. Master the skills to extract insights, build
                            predictive models, and drive business decisions with data-driven solutions. Dive into the
                            world of AI and Data Science with Python and shape the future! </p>
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">Research and Development</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Drive innovation and shape the future! Learn the systematic approach to Research and
                            Development (R&D), from idea generation to prototype development. Master the skills to
                            design experiments, collect data, and analyze results to bring cutting-edge solutions to
                            life. Discover how to turn creativity into reality and make a meaningful impact in various
                            industries and fields. </p>
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">Interpersonal Skills</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Our Interpersonal Skills and Microsoft Office Management course combines essential
                            communication and productivity training to help you excel in the workplace. Learn to develop
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">Certificate Courses</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Certificate Courses in Computer Science provide specialized training in specific areas of computer science, such as programming, data analysis, cybersecurity, or artificial intelligence. These short-term programs offer practical skills and knowledge, enhancing career prospects and providing a competitive edge in the tech industry. Ideal for professionals, students, and enthusiasts, certificate courses offer flexible and focused learning, aligning with industry demands and trends.                        </p>
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white"> Leadership and Management Dynamics</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The Leadership and Management Dynamics program is a transformative learning experience that equips professionals to lead and manage high-performing teams. Through interactive modules and expert insights, participants explore the dynamic interplay between leadership and management, developing skills in strategic planning, communication, and adaptive leadership. This program empowers leaders to drive innovation and achieve sustainable success.                        </p>
                    </div>
                </div>
            </div>
            {/*-----------------------*/}
            <p className={'text-teal-900 text-xl lg:text-7xl font-bold text-center lg:pb-10 py-6 lg:py-10 mt-10'}>Non-Academic Programs</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/**/}
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96">
                        <Image src={Img9} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">Primary School Certificate (PSC)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The Primary School Certificate in Computer Science introduces young learners to digital literacy, coding, and problem-solving. This foundational program explores interactive topics like algorithms and computer safety, sparking curiosity and creativity. It prepares students for future academic and professional opportunities in the digital world.                        </p>
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">Elementary School Certificate (ESC)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The Elementary School Certificate (ESC) in Computer Science introduces young learners to the exciting world of computer science. This program fosters curiosity, develops basic programming skills, and encourages digital literacy through interactive lessons and hands-on activities. It provides a solid foundation for further studies in computer science and prepares boys and girls for future careers in STEM fields.                        </p>
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">Secondary School Certificate (SSC)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The Secondary School Certificate (SSC) in Computer Science builds on foundational knowledge, equipping students with advanced programming skills, data analysis, and software development expertise. This program enhances problem-solving abilities, logical thinking, and digital literacy, preparing students for higher education and careers in technology. Through comprehensive lessons and projects, students gain a deeper understanding of computer systems, networks, and cybersecurity.                        </p>
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">Higher Secondary School Certificate (HSSC)</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The Higher Secondary School Certificate (HSSC) in Computer Science refines programming skills, focusing on algorithms, software engineering, and practical applications. This program prepares students for higher education, careers, and entrepreneurship in tech through project-based learning and industry-specific technologies. Students gain expertise in computer systems, networks, and cybersecurity, setting them up for success in the digital landscape.                        </p>
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">BS of Computer Science</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The Bachelor of Science in Computer Science (BSCS) is a comprehensive program that covers theoretical foundations and practical applications. Students explore advanced topics, developing strong programming skills and problem-solving abilities. This program prepares graduates for careers in software development, data analysis, AI, cybersecurity, and other emerging tech fields.                        </p>
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">PGD in Computer Science</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The Postgraduate Diploma (PGD) in Computer Science enhances students&apos; skills and knowledge in computer science. This program covers advanced topics in software development, data structures, and computer systems, preparing students for tech and IT careers. Ideal for professionals seeking to upgrade skills or transition into tech, it provides a solid foundation for further studies or career advancement.                        </p>
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">MS in Computer Science</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The Master of Science in Computer Science (MSCS) is a graduate program that advances students&apos; knowledge and skills in cutting-edge computer science fields. Students explore specialized topics like artificial intelligence, data science, cybersecurity, and cloud computing, developing expertise through research, projects, and collaboration. This program prepares graduates for leadership roles, advanced research, and innovative careers in tech, as well as for Ph.D. studies in computer science.                        </p>
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
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">Ph.D. in Computer Science</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            The Doctor of Philosophy (PhD) in Computer Science is a research-focused program that advances computer science knowledge. Students conduct original research, contributing to the field, and produce innovative solutions. Under expert guidance, PhD candidates develop expertise in specialized areas, preparing them for careers in academia, research, or industry leadership, driving technological innovation.                        </p>
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