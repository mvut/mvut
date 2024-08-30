import FullStackImage from '../../public/resources/webdesign.jpg';
import AIIntroImage from '../../public/resources/ai.jpg';
import DataScImage from '../../public/resources/datasc.jpg';
import ResearchDevImage from '../../public/resources/researchdev.jpg';
import GraphicsImage from '../../public/resources/graphics.jpg';
import Ug from '../../public/resources/ug.jpg';
import Image from "next/image";

export default function CoursesPage(){
    return (
        <div className="flex flex-col items-center justify-center py-6 lg:py-12">
            <p className={'text-teal-900 text-xl lg:text-7xl font-bold text-center lg:pb-10'}>Available Programs</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/**/}
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-72 w-96 ">
                        <Image src={FullStackImage} alt={''}
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
                        <Image src={AIIntroImage} alt={''}
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
                        <Image src={GraphicsImage} alt={''}
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
                        <Image src={DataScImage} alt={''}
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
                        <Image src={ResearchDevImage} alt={''}
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
                        <Image src={Ug} alt={''}
                               className={'h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'}/>
                    </div>
                    <div
                        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-teal-900">
                        <h1 className="text-2xl font-bold text-white">Interpersonal Skills</h1>
                        <p className="mb-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Our Interpersonal Skills and Microsoft Office Management course combines essential communication and productivity training to help you excel in the workplace. Learn to develop strong relationships, resolve conflicts, and master Microsoft Office applications like Word, Excel, and PowerPoint. Improve your written and verbal communication skills, enhance your productivity, and work effectively with others to achieve success in your career.
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