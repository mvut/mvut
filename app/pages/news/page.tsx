'use client'
import Link from "next/link";
import Image from "next/image";
import WebImage from "@/public/resources/webinar.jpg";
import CareerImage from "@/public/resources/career.jpg";
import Countdown from "@/app/components/countdown";
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
        <div className="container flex flex-col py-10">
            <section className={'flex flex-col '}>
                <div className="flex justify-between items-center py-2 w-full">
                    <h2 className="text-5xl font-extrabold animate-bounce text-red-700">News</h2>
                    {/*<button className="px-6 rounded-full bg-amber-400 text-red-950*/}
                    {/*border-b-2 border-red-600 hover:text-white*/}
                    {/*transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300*/}
                    {/*">All news*/}
                    {/*</button>*/}
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col md:w-2/4 bg-gray-900 text-white md:px-12 p-2 md:py-12 gap-6">
                        <p className="text-md text-gray-300">5 September 2024</p>
                        <h2 className="text-xl font-bold text-amber-200">Admission Open: Unlock the Future with Our AI
                            and Web Programs</h2>
                        <p>Are you ready to shape the future of technology? We are excited to announce that admissions
                            are
                            now open for our comprehensive AI and Web programs!
                        </p>
                        <h2 className="text-xl font-bold text-amber-200">
                            <Countdown/>
                        </h2>
                        <Link href={'/pages/apply'} className={'hover:text-amber-200 text-3xl text-red-600 font-bold'}>Apply
                            Now</Link>
                    </div>
                    <div className="flex-col md:w-1/4 bg-gray-400 p-2 hover:scale-110 transition-all delay-100 ">
                        <Image src={CareerImage} alt=""/>
                        <p className="text-sm mt-2 text-white">22 Aug 2024</p>
                        <h2 className="text-md text-blue-900 font-bold">Industry-relevant curriculum </h2>
                        <p className="text-sm">
                            Unlock your potential with our industry-driven certification courses, designed to bridge the
                            gap between knowledge and application. In today&apos;s fast-paced world, staying ahead is
                            vital, and our programs empower individuals to thrive. Developed with industry experts, our
                            courses equip you with in-demand skills, practical knowledge, and expertise to stay
                            relevant. Join our community and gain confidence, enhance career prospects, and make
                            meaningful contributions. Empower yourself and elevate your future with our certification
                            courses, tailored to meet the needs of a rapidly changing landscape.
                        </p>
                        {/*<Link href="" className="hover:text-red-800 text-red-700 hover:font-bold">Register</Link>*/}
                    </div>
                    <div className="flex-col md:w-1/4 bg-gray-400 p-2 hover:scale-110 transition-all delay-100 ">
                        <Image src={WebImage} alt=""/>
                        <p className="text-sm mt-2 text-white">11 Dec 2023</p>
                        <h2 className="text-md text-blue-900 font-bold">Career support and mentorship</h2>
                        <p className="text-sm">
                            Unlock your dream career with our expert-led online workshop, featuring interactive sessions
                            with seasoned career coaches and industry mentors. Join us to transform your professional
                            journey, gain valuable insights, and develop actionable strategies for success. Discover
                            your strengths, overcome obstacles, and create a personalized career roadmap with expert
                            guidance, interactive networking, and proven strategies for career advancement. Invest in
                            yourself and ignite your career potential - limited spots available!
                        </p>
                        {/*<Link href="" className="hover:text-red-800 text-red-700 hover:font-bold">Register</Link>*/}
                    </div>
                </div>
            </section>
            <section className={'py-16'}>
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 6000,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className=""
                >
                    <CarouselContent className={'flex flex-col sm:flex-row gap-4'}>
                        <CarouselItem className="w-96 h-96 basis-1/3 ">
                            <div className="flex-col h-full">
                                <p className="text-sm mt-2 text-white">11 Dec 2024</p>
                                <h2 className="text-md text-amber-200 font-bold bg-red-800 p-2 ">Young Tech Explorers
                                    (YTE)</h2>
                                <p className="text-sm py-4 ">
                                    Young Tech Explorers (YTE) Certification introduces students aged 8-12 to Computer
                                    Science, AI, and Web Development through interactive project-based learning.
                                    Students acquire skills in programming (Scratch, Python, JavaScript), AI (machine
                                    learning, data analysis), and web development (HTML, CSS, WordPress), receiving
                                    certification upon completion. This certification demonstrates proficiency in
                                    coding, AI-powered tools, and web design, fostering critical thinking, creativity,
                                    and collaboration, and preparing young learners for advanced tech education and
                                    lifelong technological exploration.

                                </p>
                                {/*<Link href="" className="hover:text-red-800 text-red-700 hover:font-bold">Register</Link>*/}
                            </div>
                        </CarouselItem>
                        <CarouselItem className="w-96 h-96 basis-1/3 ">
                            <div
                                className="flex-col h-full ">
                                {/*<Image src={CareerImage} alt=""/>*/}
                                <p className="text-sm mt-2 text-white">11 Dec 2024</p>
                                <h2 className="text-md text-amber-200 font-bold bg-blue-800 p-2 ">Senior Tech
                                    Professional (STP) Certification</h2>
                                <p className="text-sm ">
                                    Senior Tech Professional (STP) Certification program prepares school graduates for
                                    in-demand careers in tech, equipping them with specialized skills in Computer
                                    Science, Artificial Intelligence (AI), and Web Development. This comprehensive
                                    program covers data structures, algorithms, object-oriented programming, software
                                    engineering, deep learning, natural language processing, computer vision, predictive
                                    modeling, full-stack development, responsive design, database management, and web
                                    security. Upon completion, graduates receive certification demonstrating expertise
                                    in programming languages (Java, Python, JavaScript), AI frameworks (TensorFlow,
                                    PyTorch), web development frameworks (React, Angular), and industry-standard tools.
                                    This certification accelerates careers in software engineering, AI development, data
                                    science, and web development.

                                </p>
                                {/*<Link href="" className="hover:text-red-800 text-red-700 hover:font-bold">Register</Link>*/}
                            </div>
                        </CarouselItem>
                        <CarouselItem className="w-96 h-96 basis-1/3 ">
                            <div
                                className="flex-col h-full ">
                                {/*<Image src={CareerImage} alt=""/>*/}
                                <p className="text-sm mt-2 text-white">11 Dec 2024</p>
                                <h2 className="text-md text-amber-200 font-bold bg-teal-800 p-2 ">Professional Tech
                                    Certification (PTC)</h2>
                                <p className="text-sm  ">
                                    Professional Tech Certification (PTC) for College Students enhances career prospects
                                    by providing hands-on training in Computer Science, Artificial Intelligence (AI),
                                    and Web Development. Master programming languages (Java, Python, JavaScript, C++),
                                    AI/ML frameworks (TensorFlow, PyTorch, Keras), web development frameworks (React,
                                    Angular, Vue), data structures, algorithms, software engineering, cloud computing
                                    (AWS, Azure, Google Cloud), cybersecurity, and data analytics. Upon completion,
                                    receive industry-recognized certification, boost employability, enhance your resume,
                                    expand your professional network, and access exclusive internship and job
                                    opportunities, staying ahead in the competitive tech landscape.

                                </p>
                                {/*<Link href="" className="hover:text-red-800 text-red-700 hover:font-bold">Register</Link>*/}
                            </div>
                        </CarouselItem>
                        <CarouselItem className="w-96 h-96 basis-1/3 ">
                            <div
                                className="flex-col h-full ">
                                {/*<Image src={CareerImage} alt=""/>*/}
                                <p className="text-sm mt-2 text-white">11 Dec 2024</p>
                                <h2 className="text-md text-amber-200 font-bold bg-indigo-800 p-2 ">Undergraduate Tech
                                    Certification (UTC)</h2>
                                <p className="text-sm ">
                                    Undergraduate Tech Certification (UTC) program empowers students to launch
                                    successful careers in tech, providing foundational skills in Computer Science,
                                    Artificial Intelligence (AI), and Web Development. Through interactive coursework
                                    and projects, undergraduates master programming languages (Python, Java,
                                    JavaScript), AI/ML frameworks (TensorFlow, PyTorch), web development frameworks
                                    (React, Angular), data structures, algorithms, software engineering, and cloud
                                    computing (AWS, Azure). Upon completion, students receive industry-recognized
                                    certification, enhancing their resume, employability, and networking prospects,
                                    while preparing for in-demand roles in software engineering, AI development, data
                                    science, and web development.

                                </p>
                                {/*<Link href="" className="hover:text-red-800 text-red-700 hover:font-bold">Register</Link>*/}
                            </div>
                        </CarouselItem>
                        <CarouselItem className="w-96 h-96 basis-1/3 ">
                            <div
                                className="flex-col h-full ">
                                {/*<Image src={CareerImage} alt=""/>*/}
                                <p className="text-sm mt-2 text-white">11 Dec 2024</p>
                                <h2 className="text-md text-amber-200 font-bold bg-stone-800 p-2 ">Graduate Tech
                                    Certification (GTC)</h2>
                                <p className="text-sm ">
                                    Graduate Tech Certification (GTC) program accelerates research innovation for
                                    Master&apos;s and PhD students, fostering expertise in cutting-edge technologies.
                                    Through intensive coursework, projects, and collaboration, graduate students deepen
                                    knowledge in advanced programming languages (Scala, Rust, Haskell), AI/ML
                                    architectures (Transformers, Graph Neural Networks), web development frameworks
                                    (Node.js, Django), data science and analytics (Data Mining, Predictive Modeling),
                                    cloud computing and distributed systems (Kubernetes, Docker), and research
                                    methodologies. Upon completion, graduate students receive industry-recognized
                                    certification, enhancing research capabilities, publication potential, visibility,
                                    networking opportunities, and career advancement in academia, industry, or research
                                    institutions.

                                </p>
                                {/*<Link href="" className="hover:text-red-800 text-red-700 hover:font-bold">Register</Link>*/}
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    {/*<CarouselPrevious/>*/}
                    {/*<CarouselNext/>*/}
                </Carousel>

            </section>

            <h2 className="text-5xl font-extrabold animate-bounce text-red-700">Events</h2>

            <section className="flex flex-col sm:flex-row gap-4 ">
                <div className="flex flex-col py-2 sm:w-1/2 ">
                    <h2 className={'sm:text-xl font-bold '}>The Interpersonal Skills (IPS) Certification for Huffaz</h2>
                    <p className="text-xs sm:text-lg text-stone-900 leading-relaxed">
                        The Interpersonal Skills (IPS) Certification was proudly awarded to Huffaz of ALABRAR MADINA
                        TUL ILM REHMANIA High School, Pakpattan, following a collaborative course conducted by the
                        school and MVI Technologies (MVIT). This certification recognizes the participants&apos;
                        proficiency in essential life skills, including effective communication, conflict
                        resolution, teamwork, leadership, problem-solving, and emotional intelligence. By
                        complementing their academic and spiritual pursuits, this program fosters holistic
                        development, empowering Huffaz to excel in all aspects of life.
                    </p>
                </div>
               <div className={'sm:w-1/2 '}>
                   <Carousel plugins={[Autoplay({delay: 5000,}),]}
                             opts={{align: "start", loop: true,}}
                             className=" "
                   >
                       <CarouselContent className={''}>
                           <CarouselItem className="w-96 h-96">
                               <Image src={Alabrar1} alt="" className={''}/>
                           </CarouselItem>
                           <CarouselItem className="w-96 h-96">
                               <Image src={Alabrar2} alt=""/>
                           </CarouselItem>
                           <CarouselItem className="w-96 h-96">
                               <Image src={Alabrar3} alt=""/>
                           </CarouselItem>
                           <CarouselItem className="w-96 h-96">
                               <Image src={Alabrar4} alt=""/>
                           </CarouselItem>
                           <CarouselItem className="w-96 h-96">
                               <Image src={Alabrar5} alt=""/>
                           </CarouselItem>
                           <CarouselItem className="w-96 h-96">
                               <Image src={Alabrar6} alt=""/>
                           </CarouselItem>
                       </CarouselContent>
                       {/*<CarouselPrevious/>*/}
                       {/*<CarouselNext/>*/}
                   </Carousel>
               </div>

            </section>
        </div>
    )
}