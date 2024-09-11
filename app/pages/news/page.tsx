'use client'
import Link from "next/link";
import Image from "next/image";
import WebImage from "@/public/resources/webinar.jpg";
import CareerImage from "@/public/resources/career.jpg";
import Hacka from '@/public/resources/img1.jpg';
import TechExpo from '@/public/resources/img2.jpg';
import Wrksp from '@/public/resources/img3.jpg';
import Startup from '@/public/resources/img4.jpg';
import Countdown from "@/app/components/countdown";

export default function NewsComponents(){
    return(
        <div className="container flex flex-col py-10">
            <section className={'flex flex-col '}>
                <div className="flex justify-between items-center py-2 w-full">
                    <h2 className="text-xl font-extrabold animate-bounce text-red-700">Latest news</h2>
                    <button className="px-6 rounded-full bg-amber-400 text-red-950
                    border-b-2 border-red-600 hover:text-white
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
                    ">All news
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col md:w-2/4 bg-gray-900 text-white md:px-12 p-2 md:py-12 gap-6">
                        <p className="text-md text-gray-300">5 September 2024</p>
                        <h2 className="text-xl font-bold text-amber-200">Admission Open: Unlock the Future with Our AI and Web Programs</h2>
                        <p>Are you ready to shape the future of technology? We are excited to announce that admissions are
                            now open for our comprehensive AI and Web programs!
                        </p>
                        <h2 className="text-xl font-bold text-amber-200">
                            <Countdown/>
                        </h2>
                        <Link href={'/pages/apply'} className={'hover:text-amber-200 text-3xl text-red-600 font-bold'}>Apply Now</Link>
                    </div>
                    <div className="flex-col md:w-1/4 bg-gray-400 p-2 hover:scale-110 transition-all delay-100 ">
                        <Image src={WebImage} alt=""/>
                        <p className="text-sm mt-2 text-white">26 Oct 2024</p>
                        <h2 className="text-md text-blue-900 font-bold">Industry-relevant curriculum Webinar</h2>
                        <p className="text-sm">In today fast-paced tech landscape, staying ahead of the curve is crucial. Our webinar will explore the importance of industry-relevant curriculum in bridging the gap between education and employment. Discover how our programs are designed in collaboration with industry experts to equip you with the skills and knowledge demanded by top employers.
                        </p>
                        {/*<Link href="" className="hover:text-red-800 text-red-700 hover:font-bold">Register</Link>*/}
                    </div>
                    <div className="flex-col md:w-1/4 bg-gray-400 p-2 hover:scale-110 transition-all delay-100 ">
                        <Image src={CareerImage} alt=""/>
                        <p className="text-sm mt-2 text-white">11 Dec 2024</p>
                        <h2 className="text-md text-blue-900 font-bold">Career support and mentorship online workshop</h2>
                        <p className="text-sm">Unlock Your Career Potential: Join Our Career Support and Mentorship Online Workshop. Join our expert career coaches and industry mentors for an interactive and immersive experience. Take the first step towards a fulfilling and successful career. Register now and let shape your future together!</p>
                        {/*<Link href="" className="hover:text-red-800 text-red-700 hover:font-bold">Register</Link>*/}
                    </div>
                </div>
            </section>

            <section className="mt-6">
                <div className="flex items-center py-2 justify-between">
                    <h2 className="text-xl font-extrabold animate-bounce text-red-700">Upcoming events</h2>
                    <button className="px-6 rounded-full bg-amber-400 text-red-950
                        border-b-2 border-red-600 hover:text-white
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">All
                        events
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-col md:w-1/4 bg-gray-400 p-2 hover:scale-110 transition-all delay-100">
                        <Image src={Hacka} alt="" />
                        <p className="text-xs mt-2 text-white">12 Nov 2024</p>
                        <h2 className="text-md text-blue-900 font-bold">Hackathons</h2>
                        <p className="text-sm">A hackathon is a coding competition where students, faculty, and industry professionals come together to develop innovative solutions to real-world problems within a set timeframe usually 24-48 hours.</p>
                        <Link href="" className="hover:font-bold hover:text-red-800">Read more</Link>
                    </div>
                    <div className="flex-col md:w-1/4 bg-gray-400 p-2 hover:scale-110 transition-all delay-100">
                        <Image src={TechExpo} alt="" />
                        <p className="text-xs mt-2 text-white">1 Sep 2024</p>
                        <h2 className="text-md text-blue-900 font-bold">Tech Expo</h2>
                        <p className="text-sm">A tech expo is an exhibition showcasing cutting-edge technologies, prototypes, and projects developed by students, faculty, and industry partners. It provides a platform for networking, collaboration, and demonstration of innovative ideas.</p>
                        <Link href="" className="hover:font-bold hover:text-red-800">Read more</Link>
                    </div>
                    <div className="flex-col md:w-1/4 bg-gray-400 p-2 hover:scale-110 transition-all delay-100">
                        <Image src={Wrksp} alt="" />
                        <p className="text-xs mt-2 text-white">22 Jun 2024</p>
                        <h2 className="text-md text-blue-900 font-bold">Guest Lectures & Workshops</h2>
                        <p className="text-sm">Hosting renowned industry experts and thought leaders for guest lectures and workshops can inspire and educate students about the latest technologies and trends. These events can cover topics like AI, blockchain, cybersecurity, and more</p>
                        <Link href="" className="hover:font-bold hover:text-red-800">Read more</Link>
                    </div>
                    <div className="flex-col md:w-1/4 bg-gray-400 p-2 hover:scale-110 transition-all delay-100">
                        <Image src={Startup} alt=""/>
                        <p className="text-xs mt-2 text-white">11 Aug 2024</p>
                        <h2 className="text-md text-blue-900 font-bold">Startup Pitch Competitions</h2>
                        <p className="text-sm">A startup pitch competition encourages students and young entrepreneurs to present their innovative ideas and prototypes to a panel of investors, industry experts, and potential customers. It fosters innovation, entrepreneurship, and collaboration</p>
                        <Link href="" className="hover:font-bold hover:text-red-800">Read more</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}