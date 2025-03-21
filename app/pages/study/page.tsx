'use client';
import Link from 'next/link';
import {
    FaRobot,
    FaCode,
    FaChalkboardTeacher,
    FaPython,
    FaPhp,
    FaLaptopCode,
    FaClipboardList,
    FaAward,
    FaGraduationCap,
    FaBookOpen,
    FaChartBar,
    FaQuoteLeft,
    FaQuoteRight,
    FaUsers,
    FaBriefcase,

} from 'react-icons/fa';
import { SiHiveBlockchain } from "react-icons/si";

import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';

// Load Google Font
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

// Study Programs Data
const studyPrograms = [
    {
        title: 'Mansha Robotics and Software Engineer',
        description:
            'Develop advanced skills in robotics, software engineering, and automation technologies.',
        icon: <FaLaptopCode className="text-5xl text-purple-500" />,
        link: '/study/mrse',
    },
    {
        title: 'Mansha Certified AI Agents Developer',
        description:
            'Master the art of building intelligent agents and AI systems with hands-on projects.',
        icon: <FaRobot className="text-5xl text-teal-500" />,
        link: '/study/mcaad',
    },
    {
        title: 'Office Management, AI and Prompt Engineering',
        description:
            'Combine office management skills with AI and prompt engineering expertise.',
        icon: <FaRobot className="text-5xl text-pink-500" />,
        link: '/study/om-ai-prompt',
    },
    {
        title: 'Mansha Certified Blockchain Technician',
        description:
            'Learn blockchain fundamentals and gain hands-on experience in decentralized applications.',
        icon: <SiHiveBlockchain  className="text-5xl text-yellow-500" />,
        link: '/study/mcbt',
    },
    {
        title: 'Full Stack Development with Next.js',
        description:
            'Learn modern web development techniques with Next.js and React.',
        icon: <FaCode className="text-5xl text-green-500" />,
        link: '/study/fsdn',
    },
    {
        title: 'Next-Generation Web Development with Python',
        description:
            'Build dynamic web applications using Python frameworks like Django and Flask.',
        icon: <FaPython className="text-5xl text-red-500" />,
        link: '/study/nxgdp',
    },
    {
        title: 'Full Stack PHP Development',
        description:
            'Master server-side scripting and full-stack development with PHP.',
        icon: <FaPhp className="text-5xl text-indigo-500" />,
        link: '/study/fsp',
    },
    {
        title: 'Kindergarten (K.G.) STEM Entrepreneurs',
        description:
            'Introduce young minds to STEM concepts and entrepreneurial thinking.',
        icon: <FaChalkboardTeacher className="text-5xl text-blue-500" />,
        link: '/study/kg-stem',
    },
    {
        title: 'Corporate Communication for IT Professionals',
        description:
            'Enhance communication skills tailored for IT professionals in corporate environments.',
        icon: <FaUsers className="text-5xl text-orange-500" />,
        link: '/study/corporate-communication',
    },
    {
        title: 'Office Management and Work Ethics',
        description:
            'Enhance productivity and professionalism with office management skills.',
        icon: <FaClipboardList className="text-5xl text-cyan-500" />,
        link: '/study/omwe',
    },
];

// Testimonials Data
const testimonials = [
    {
        quote:
            "The Mansha Certified AI Agents Developer program transformed my career. Highly recommend it!",
        name: "John Doe",
        position: "AI Engineer, Class of 2023",
    },
    {
        quote:
            "The Full Stack Development course gave me the skills I needed to land my dream job.",
        name: "Jane Smith",
        position: "Web Developer, Class of 2022",
    },
    {
        quote:
            "I loved the hands-on approach of the Mansha Robotics program. It was both challenging and rewarding.",
        name: "Alice Johnson",
        position: "Software Engineer, Class of 2021",
    },
];

export default function StudyPrograms() {
    return (
        <div
            className={`bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-12 ${montserrat.className}`}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
            {/* Main Content */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 mb-12"
                >
                    Explore Our Study Programs
                </motion.h1>
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
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform"
                        >
                            {/* Icon */}
                            <div className="mb-4">{program.icon}</div>
                            {/* Title */}
                            <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-2">
                                {program.title}
                            </h2>
                            {/* Description */}
                            <p className="text-sm sm:text-base text-gray-200 mb-4">
                                {program.description}
                            </p>
                            {/* Link Button */}
                            <Link href={program.link} passHref legacyBehavior>
                                <motion.a
                                    whileHover={{ scale: 1.05, color: '#1E40AF' }}
                                    className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full font-semibold transition-all"
                                >
                                    Learn More
                                </motion.a>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center mb-16"
                >
                    <FaAward size={50} className="text-teal-400 mx-auto mb-6" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">
                        Why Choose MVIT?
                    </h2>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                        At MVIT, we provide cutting-edge education and training programs designed to empower students with the skills and knowledge needed to excel in their careers. Our programs are led by industry experts and supported by state-of-the-art resources.
                    </p>
                </motion.div>
                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 col-span-full text-center mb-8">
                        What Our Students Say
                    </h2>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all"
                        >
                            <FaQuoteLeft size={20} className="text-teal-400 mb-4" />
                            <p className="text-sm sm:text-base text-gray-200 italic">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <FaQuoteRight size={20} className="text-teal-400 ml-auto mt-4" />
                            <p className="text-teal-400 font-bold mt-4">{testimonial.name}</p>
                            <p className="text-gray-300">{testimonial.position}</p>
                        </motion.div>
                    ))}
                </motion.div>
                {/* Upcoming Programs Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center mt-16"
                >
                    <FaBookOpen size={50} className="text-teal-400 mx-auto mb-6" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">
                        Upcoming Programs
                    </h2>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                        Stay tuned for exciting new programs launching soon. These include advanced certifications in AI, blockchain, cloud computing, and specialized workshops tailored to meet the demands of modern industries.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}