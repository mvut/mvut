import { MdFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialSkypeOutline } from "react-icons/ti";

export default function FooterComponent(){
    return (
        <div className="flex flex-col w-full bg-gray-200 ">
            <div className={'flex items-center justify-center gap-16 h-52 bg-red-900'}>
                <Link className={'flex border-2 border-white px-32 py-10 text-white text-xl hover:bg-black'} href="">Apply for Admission</Link>
                <Link className={'flex border-2 border-white px-32 py-10 text-white text-xl hover:bg-black'} href="">Fee Structure</Link>
            </div>
            {/*<div className="flex bg-gray-800 justify-center items-center p-10 text-center">*/}
            {/*    <div className="w-1/2">*/}
            {/*        <p className="text-3xl text-pink-600 font-extrabold">MVUT</p>*/}
            {/*    </div>*/}
            {/*    <div className=" flex text-amber-400 w-1/2 gap-6 justify-center items-center">*/}
            {/*        <Link href="" className="hover:text-pink-600">*/}
            {/*            <FaFacebook size={32}/>*/}
            {/*        </Link>*/}

            {/*        <Link href="" className="hover:text-pink-600">*/}
            {/*            <FaLinkedin size={32}/>*/}
            {/*        </Link>*/}

            {/*        <Link href="" className="hover:text-pink-600">*/}
            {/*            <FaInstagram size={32}/>*/}
            {/*        </Link>*/}

            {/*        <Link href="" className="hover:text-pink-600">*/}
            {/*            <FaSquareTwitter size={32}/>*/}
            {/*        </Link>*/}

            {/*        <Link href="" className="hover:text-pink-600">*/}
            {/*            <FaYoutube size={32}/>*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="flex bg-gray-500 py-8">*/}
            {/*    <div*/}
            {/*        className="flex sm:flex-col gap-2 md:gap-6 font-bold w-1/2 justify-center items-center text-gray-800 text-md md:flex-row">*/}
            {/*        <Link href="">Maps and Locations</Link>*/}
            {/*        <Link href="">Jobs</Link>*/}
            {/*        <Link href="">Directory</Link>*/}
            {/*        <Link href="">Contact</Link>*/}
            {/*        <Link href="">My MVUT</Link>*/}
            {/*    </div>*/}
            {/*    <div className="flex-col w-1/2 justify-center items-center">*/}
            {/*        <div className="flex justify-center items-center">*/}
            {/*            <p className="text-xl text-gray-800 font-bold">Empowering People</p>*/}
            {/*        </div>*/}
            {/*        <div className="flex sm:flex-col md:flex-row gap-1 justify-center items-center py-2">*/}
            {/*            <p className="text-teal-900 font-bold px-2">Innovation</p>*/}
            {/*            <p className="text-teal-900 font-bold px-2">Sustainability</p>*/}
            {/*            <p className="text-teal-900 font-bold px-2">Global Impact</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={'flex items-start justify-between px-24 py-10 bg-center bg-gray-50 w-full'}>
                <div className={'flex flex-col text-gray-950'}>
                    <h2 className={'text-lg font-bold uppercase'}>Contact</h2>
                    <address className={'text-md '}>
                        Bakha Hans, Pakpattan, Punjab, Pakistan
                    </address>
                    <div className={'flex items-center gap-1'}>
                        <MdOutlineMailOutline size={20}/><p>dr.sagher@gmail.com</p>
                    </div>
                    <div className={'flex items-center gap-1'}>
                        <FaWhatsapp size={20}/>
                        <p>+923017362696</p>
                    </div>
                    <div className={'flex items-center gap-1'}>
                        <TiSocialSkypeOutline size={24}/>
                        <p>dr.sagher</p>
                    </div>

                </div>
                <div>
                    <h2 className={'text-lg font-bold uppercase'}>AI Courses</h2>
                    <ul>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Machine Learning
                            Fundamentals</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Deep Learning with
                            Python</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Artificial Intelligence
                            (AI) for
                            Beginners</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Natural Language Processing
                            (NLP)</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Computer Vision with
                            Python</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Robotics and Autonomous Systems</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>AI Ethics and Bias</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Reinforcement Learning</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Neural Networks and TensorFlow</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>AI and Data Science with Python</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Chatbots and Conversational A</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>AI for Computer Vision</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>AI and Machine Learning with Python</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>AI and Robotics with Python</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Advanced Machine Learning with Deep Learning</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className={'text-lg font-bold uppercase '}>Web Courses</h2>
                    <ul>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>HTML/CSS Fundamentals</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Responsive Web Design</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>JavaScript Essentials</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>UI/UX Design Principles</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Web Development Bootcamp</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>WordPress Development</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>ReactJS for Front-end Development</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>AngularJS for Single-page Applications</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Vue.js for Dynamic Web Development</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Node.js for Back-end Development</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>MongoDB for NoSQL Database Management</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Web Security and Best Practices</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>E-commerce Website Development</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Mobile-first Web Design</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Accessibility and Inclusive Design</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className={'text-lg font-bold uppercase'}>Our People</h2>
                    <ul>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Prospective Students</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Current Students</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Parents & Families</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Faculty & Staff</Link></li>
                        <li className={'hover:underline hover:text-red-600'}><Link href={''}>Alumni & Friends</Link></li>

                    </ul>
                </div>
            </div>
            <div
                className="flex justify-between items-center bg-black text-white py-6 px-10">
                <div className="flex justify-start items-center gap-6 py-2 ">
                    <Link target="_blank" href="https://web.facebook.com/mvutus" className=" hover:text-pink-600">
                        <FaFacebook size={30}/>
                    </Link>
                    <Link target="_blank" href="https://www.youtube.com/@mvut" className="hover:text-pink-600">
                        <FaYoutube size={40}/>
                    </Link>
                    <Link target="_blank" href="https://chat.whatsapp.com/IpG66lObuHo3MUelWoH6tu" className="hover:text-pink-600">
                        <FaWhatsapp size={40}/>
                    </Link>
                </div>
                &copy;2024 Mansha Virtual Univeristy of Technologies, Pakistan
            </div>

        </div>
    )
}