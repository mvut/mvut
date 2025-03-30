'use client';
import Link from 'next/link';
import {FaRobot, FaCode, FaChalkboardTeacher, FaPython, FaPhp, FaLaptopCode, FaClipboardList, FaAward, FaBookOpen, FaUsers, FaSearch, FaConnectdevelop, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import {SiHiveBlockchain} from "react-icons/si";
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import React from "react";

// Load Google Font
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

// Study Programs Data
const studyPrograms = [
    {
        title: 'Mansha Robotics and Software Engineer',
        description: 'Develop advanced skills in robotics, software engineering, and automation technologies.',
        icon: <FaLaptopCode className="text-5xl" />,
        link: '/study/mrse',
        gradient: 'from-purple-600 to-indigo-700'
    },
    {
        title: 'Mansha Certified AI Agents Developer',
        description: 'Master the art of building intelligent agents and AI systems with hands-on projects.',
        icon: <FaRobot className="text-5xl" />,
        link: '/study/mcaad',
        gradient: 'from-teal-600 to-emerald-700'
    },
    {
        title: 'Office Management, AI and Prompt Engineering',
        description: 'Combine office management skills with AI and prompt engineering expertise.',
        icon: <FaRobot className="text-5xl" />,
        link: '/study/om-ai-prompt',
        gradient: 'from-pink-600 to-rose-700'
    },
    {
        title: 'Mansha Certified Blockchain Technician',
        description: 'Learn blockchain fundamentals and gain hands-on experience in decentralized applications.',
        icon: <SiHiveBlockchain className="text-5xl" />,
        link: '/study/mcbt',
        gradient: 'from-yellow-600 to-amber-700'
    },
    {
        title: 'Full Stack Development with Next.js',
        description: 'Learn modern web development techniques with Next.js and React.',
        icon: <FaCode className="text-5xl" />,
        link: '/study/fsdn',
        gradient: 'from-green-600 to-lime-700'
    },
    {
        title: 'Next-Generation Web Development with Python',
        description: 'Build dynamic web applications using Python frameworks like Django and Flask.',
        icon: <FaPython className="text-5xl" />,
        link: '/study/nxgdp',
        gradient: 'from-red-600 to-orange-700'
    },
    {
        title: 'Full Stack PHP Development',
        description: 'Master server-side scripting and full-stack development with PHP.',
        icon: <FaPhp className="text-5xl" />,
        link: '/study/fsp',
        gradient: 'from-indigo-600 to-violet-700'
    },
    {
        title: 'Kindergarten (K.G.) STEM Entrepreneurs',
        description: 'Introduce young minds to STEM concepts and entrepreneurial thinking.',
        icon: <FaChalkboardTeacher className="text-5xl" />,
        link: '/study/kg-stem',
        gradient: 'from-blue-600 to-cyan-700'
    },
    {
        title: 'Corporate Communication for IT Professionals',
        description: 'Enhance communication skills tailored for IT professionals in corporate environments.',
        icon: <FaUsers className="text-5xl" />,
        link: '/study/corporate-communication',
        gradient: 'from-orange-600 to-amber-700'
    },
    {
        title: 'Office Management and Work Ethics',
        description: 'Enhance productivity and professionalism with office management skills.',
        icon: <FaClipboardList className="text-5xl" />,
        link: '/study/omwe',
        gradient: 'from-cyan-600 to-sky-700'
    },
    {
        title: 'Research and Thesis Development',
        description: 'Develop advanced research skills and learn the process of thesis writing in technical fields.',
        icon: <FaSearch className="text-5xl" />,
        link: '/study/research-thesis',
        gradient: 'from-gray-600 to-slate-700'
    },
    {
        title: 'Mansha Certified API Developer',
        description: 'Master API design, development, and security with industry best practices.',
        icon: <FaConnectdevelop className="text-5xl" />,
        link: '/study/mcad',
        gradient: 'from-emerald-600 to-teal-700'
    },
    {
        title: 'Laravel Fullstack Engineer',
        description: 'Become proficient in fullstack development using Laravel PHP framework.',
        icon: <FaPhp className="text-5xl" />,
        link: '/study/laravel-fullstack',
        gradient: 'from-violet-600 to-purple-700'
    },
    {
        title: 'Golang API Engineer',
        description: 'Learn to build high-performance APIs and microservices with Go (Golang).',
        icon: <FaCode className="text-5xl" />,
        link: '/study/golang-api',
        gradient: 'from-amber-600 to-orange-700'
    },
];

// Testimonials Data
const testimonials = [
    {
        quote: "The Mansha Certified AI Agents Developer program transformed my career. Highly recommend it!",
        name: "Abid Hussain",
        position: "AI Engineer, Class of 2023",
        gradient: 'from-teal-600 to-emerald-700'
    },
    {
        quote: "The Research and Development course gave me the skills I needed to land my dream job.",
        name: "Muhammad Younas Alam",
        position: "Linguistics Researcher",
        gradient: 'from-blue-600 to-indigo-700'
    },
    {
        quote: "I loved the hands-on approach of the Mansha Robotics program. It was both challenging and rewarding.",
        name: "Safia",
        position: "Software Engineer, Class of 2021",
        gradient: 'from-purple-600 to-violet-700'
    },
];

export default function StudyPrograms() {
    return (
        <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 ${montserrat.className}`}>
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 mb-4">
                        Explore Our Study Programs
                    </h1>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Cutting-edge education programs designed for the digital future
                    </p>
                </motion.div>

                {/* Study Program Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {studyPrograms.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`group relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br ${program.gradient} hover:shadow-2xl transition-all duration-300`}
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                            <div className="relative p-8 h-full flex flex-col">
                                <div className="mb-6 text-white group-hover:text-white/90 transition-all">
                                    {program.icon}
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                                    {program.title}
                                </h2>
                                <p className="text-gray-200 mb-6 flex-grow">
                                    {program.description}
                                </p>
                                <Link href={program.link} passHref legacyBehavior>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold border border-white/20 transition-all"
                                    >
                                        Learn More
                                    </motion.a>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-gray-800/50 to-purple-900/50 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-purple-800/30">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0">
                                <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4 rounded-full">
                                    <FaAward size={50} className="text-white" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                    Why Choose MVIT?
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    At MVIT, we provide cutting-edge education and training programs designed to empower students with the skills and knowledge needed to excel in their careers. Our programs are led by industry experts and supported by state-of-the-art resources.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 mb-12">
                        What Our Students Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className={`bg-gradient-to-br ${testimonial.gradient} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all`}
                            >
                                <FaQuoteLeft size={24} className="text-white/50 mb-4" />
                                <p className="text-white/90 italic mb-6">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <FaQuoteRight size={24} className="text-white/50 ml-auto mb-4" />
                                <div className="border-t border-white/20 pt-4">
                                    <p className="text-white font-bold">{testimonial.name}</p>
                                    <p className="text-white/80">{testimonial.position}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Upcoming Programs Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/50 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-blue-800/30">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0">
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full">
                                    <FaBookOpen size={50} className="text-white" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                    Upcoming Programs
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Stay tuned for exciting new programs launching soon. These include advanced certifications in AI, blockchain, cloud computing, and specialized workshops tailored to meet the demands of modern industries.
                                </p>
                                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all">
                                    Notify Me
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}