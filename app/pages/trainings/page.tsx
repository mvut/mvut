'use client';
import Link from 'next/link';
import { FaSchool, FaUniversity, FaLaptopCode, FaBrain, FaChalkboardTeacher, FaRocket, FaVideo, FaUsers, FaCode, FaHandsHelping, FaAward, FaLaptop } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { motion, Variants } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import React from "react";
import {FaGear} from "react-icons/fa6";

// Font configuration
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

// Interfaces
interface Session {
    title: string;
    description: string;
    icon: JSX.Element;
    audience: string;
    gradient: string;
}

interface Service {
    title: string;
    description: string;
    icon: JSX.Element;
    gradient: string;
}

// Session Data
const sessions: Session[] = [
    {
        title: "Coding Basics for School Students",
        description: "An interactive workshop introducing programming concepts using Scratch and Python for students aged 10-15. Focuses on logical thinking and problem-solving.",
        icon: <FaSchool className="text-4xl" />,
        audience: "School Students",
        gradient: "from-blue-600 to-cyan-700"
    },
    {
        title: "AI Foundations for College Students",
        description: "A hands-on session exploring AI fundamentals, machine learning basics, and real-world applications using Python and TensorFlow. Ideal for ages 16-19.",
        icon: <FaLaptopCode className="text-4xl" />,
        audience: "College Students",
        gradient: "from-teal-600 to-emerald-700"
    },
    {
        title: "Advanced AI & Career Prep for University Students",
        description: "A deep dive into AI development, including neural networks and career strategies for landing tech jobs. Includes resume workshops and mock interviews.",
        icon: <FaUniversity className="text-4xl" />,
        audience: "University Students",
        gradient: "from-purple-600 to-indigo-700"
    }
];

// Services Data
const services: Service[] = [
    {
        title: "Webinars",
        description: "Live online sessions with industry experts on topics like AI trends, coding best practices, and career opportunities in tech. Open to all levels.",
        icon: <FaVideo className="text-3xl text-blue-400" />,
        gradient: "from-blue-500 to-cyan-600"
    },
    {
        title: "Seminars",
        description: "In-person events at educational institutions, featuring guest speakers, hands-on coding demos, and Q&A sessions for skill enhancement.",
        icon: <FaChalkboardTeacher className="text-3xl text-purple-400" />,
        gradient: "from-purple-500 to-indigo-600"
    },
    {
        title: "Coding Literacy Training",
        description: "Tailored programs to teach coding from scratch, aimed at beginners and underserved communities to boost digital inclusion and employability.",
        icon: <FaCode className="text-3xl text-green-400" />,
        gradient: "from-green-500 to-teal-600"
    },
    {
        title: "Consultancy for Students & Career Builders",
        description: "Personalized guidance on career paths, financial planning for education, and job placement strategies in computer science and AI fields.",
        icon: <FaHandsHelping className="text-3xl text-pink-400" />,
        gradient: "from-pink-500 to-rose-600"
    }
];

// Tech Tools for Background Animation
const techTools = [
    { icon: <FaCode className="text-3xl text-blue-400/30" />, x: 100, y: 200, duration: 20 },
    { icon: <FaGear className="text-4xl text-purple-400/30" />, x: 300, y: 50, duration: 25 },
    { icon: <FaBrain className="text-3xl text-teal-400/30" />, x: 500, y: 300, duration: 18 },
    { icon: <FaLaptop className="text-4xl text-pink-400/30" />, x: 700, y: 150, duration: 22 },
    { icon: <SiJavascript className="text-3xl text-yellow-400/30" />, x: 200, y: 400, duration: 19 },
];

const InteractiveSessions: React.FC = () => {
    // Animation variants
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        hover: { y: -10, transition: { duration: 0.3 } }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Background animation variant
    const floatVariants: Variants = {
        animate: (tool: { x: number; y: number; duration: number }) => ({
            x: [tool.x, tool.x + 50, tool.x - 50, tool.x],
            y: [tool.y, tool.y - 50, tool.y + 50, tool.y],
            rotate: [0, 15, -15, 0],
            transition: {
                duration: tool.duration,
                repeat: Infinity,
                ease: "easeInOut"
            }
        })
    };

    return (
        <div className={`min-h-screen bg-gray-950 text-white ${montserrat.className} relative overflow-hidden`}>
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {techTools.map((tool, index) => (
                    <motion.div
                        key={index}
                        custom={tool}
                        variants={floatVariants}
                        animate="animate"
                        className="absolute"
                    >
                        {tool.icon}
                    </motion.div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-gray-900/10"></div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Interactive Sessions for Future Tech Leaders
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Empowering students with computer science and AI skills for career success and financial independence
                    </p>
                </motion.div>
            </section>

            {/* Mission Statement */}
            <section className="container mx-auto px-4 py-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 text-center border border-gray-800/50"
                >
                    <FaRocket className="text-4xl text-blue-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We partner with schools, colleges, and universities to deliver engaging, hands-on sessions that build technical expertise and career readiness. Our programs focus on computer science, AI, and financial literacy to equip students for the digital economy.
                    </p>
                </motion.div>
            </section>

            {/* Interactive Sessions */}
            <section className="container mx-auto px-4 py-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                    Tailored Sessions for All Levels
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {sessions.map((session, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${session.gradient} p-6 shadow-lg hover:shadow-xl transition-shadow`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform translate-x-16 -translate-y-16"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    {session.icon}
                                    <h3 className="text-xl font-semibold">{session.title}</h3>
                                </div>
                                <p className="text-gray-100 mb-4 text-sm">{session.description}</p>
                                <p className="text-gray-200 text-sm font-medium mb-6">For: {session.audience}</p>
                                <Link href={`/sessions/${session.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                    Learn More
                                    <span className="w-4 h-4 rounded-full border-2 border-white/50 flex items-center justify-center">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Our Services */}
            <section className="container mx-auto px-4 py-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                    Our Offerings
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`rounded-xl p-6 bg-gradient-to-br ${service.gradient} text-center shadow-md`}
                        >
                            {service.icon}
                            <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                            <p className="text-gray-200 text-sm">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="container mx-auto px-4 py-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                    Why Join Our Sessions?
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-700 p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform translate-x-16 -translate-y-16"></div>
                        <div className="relative z-10 text-center">
                            <FaLaptopCode className="text-4xl text-white mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
                            <p className="text-gray-200 text-sm">Engage in real-world projects to apply your skills practically.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="relative rounded-xl overflow-hidden bg-gradient-to-br from-teal-600 to-emerald-700 p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform translate-x-16 -translate-y-16"></div>
                        <div className="relative z-10 text-center">
                            <FaChalkboardTeacher className="text-4xl text-white mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Expert-Led Training</h3>
                            <p className="text-gray-200 text-sm">Learn from industry professionals in CS and AI.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-700 p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform translate-x-16 -translate-y-16"></div>
                        <div className="relative z-10 text-center">
                            <FaRocket className="text-4xl text-white mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
                            <p className="text-gray-200 text-sm">Get support for job placement and financial planning.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="relative rounded-xl overflow-hidden bg-gradient-to-br from-pink-600 to-rose-700 p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform translate-x-16 -translate-y-16"></div>
                        <div className="relative z-10 text-center">
                            <FaUsers className="text-4xl text-white mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Networking</h3>
                            <p className="text-gray-200 text-sm">Connect with peers and tech professionals.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="relative rounded-xl overflow-hidden bg-gradient-to-br from-green-600 to-lime-700 p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform translate-x-16 -translate-y-16"></div>
                        <div className="relative z-10 text-center">
                            <FaAward className="text-4xl text-white mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Certificates</h3>
                            <p className="text-gray-200 text-sm">Earn completion certificates for all sessions.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Call to Action */}
            <section className="container mx-auto px-4 py-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 text-center"
                >
                    <FaUsers className="text-4xl text-blue-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-4">Get Involved Today!</h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Whether you&apos;re a student, educator, or career builder, join our interactive sessions to unlock your potential in computer science and AI. Register for upcoming events or request a session at your institution.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/register" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold transition-colors">
                            Register Now
                        </Link>
                        <Link href="/contact" className="bg-transparent hover:bg-blue-600/20 px-6 py-3 rounded-full font-semibold border border-blue-500 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default InteractiveSessions;