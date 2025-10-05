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
    FaBookOpen,
    FaUsers,
    FaSearch,
    FaConnectdevelop,
    FaRocket,
    FaGlobe,
    FaHandsHelping,
    FaPalette,
    FaPaintBrush,
    FaProjectDiagram,
} from 'react-icons/fa';
import { SiHiveBlockchain } from 'react-icons/si';
import { motion, Variants } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import React from 'react';
import { GrCertificate } from 'react-icons/gr';

// Font configuration
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

// Interfaces
interface StudyProgram {
    title: string;
    description: string;
    icon: JSX.Element;
    link: string;
    gradient: string;
}

interface Skill {
    name: string;
    icon: JSX.Element;
    description: string;
}

// Study Programs Data
const studyPrograms: StudyProgram[] = [
    {
        title: 'Mansha Certified Autonomous Systems and Cloud Engineer (MCASCE)',
        description:
            'Master the integration of cloud computing, robotics, and AI, Machine Learning and Data Science.',
        icon: <GrCertificate className="text-6xl md:text-7xl" />,
        link: '/pages/mcasce',
        gradient: 'from-indigo-700/90 to-black',
    },
    {
        title: 'Kindergarten (K.G.) STEM Entrepreneurs',
        description:
            'Inspire young innovators with STEM fundamentals and entrepreneurial thinking skills.',
        icon: <FaChalkboardTeacher className="text-6xl md:text-7xl" />,
        link: '/usai',
        gradient: 'from-blue-600/90 to-cyan-800',
    },
    {
        title: 'Research and Thesis Development',
        description:
            'Hone research techniques and excel in thesis creation for technical fields.',
        icon: <FaSearch className="text-6xl md:text-7xl" />,
        link: '/pages/research',
        gradient: 'from-gray-700/90 to-slate-900',
    },
];

// Featured Skills Data
const featuredSkills: Skill[] = [
    {
        name: 'Problem Solving',
        icon: <FaCode className="text-4xl text-blue-400" />,
        description:
            'Learn to break down complex problems into manageable solutions using code.',
    },
    {
        name: 'Collaboration',
        icon: <FaUsers className="text-4xl text-purple-400" />,
        description:
            'Work effectively in teams to build real-world applications.',
    },
    {
        name: 'Innovation',
        icon: <FaRocket className="text-4xl text-pink-400" />,
        description:
            'Develop creative solutions using cutting-edge technologies.',
    },
];

// Success Metrics Data
const successMetrics = {
    studentsTrained: '5,000+',
    projectsCompleted: '1,200+',
    employmentRate: '92%',
    communityMembers: '10,000+',
};

const StudyPrograms: React.FC = () => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        hover: { y: -12, transition: { duration: 0.3, ease: 'easeOut' } },
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <div className={`min-h-screen bg-gray-950 text-white ${montserrat.className}`}>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-gray-900"></div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4 text-center relative z-10"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Future-Ready <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
                        Empowering tomorrow&apos;s innovators with cutting-edge skills and knowledge
                    </p>
                </motion.div>
            </section>

            {/* Programs Grid - BIG CARDS */}
            <section className="container mx-auto px-4 py-12 md:py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {studyPrograms.map((program, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${program.gradient} p-8 shadow-2xl hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300`}
                        >
                            <div className="flex flex-col items-center text-center h-full justify-between">
                                <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                                    {program.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold mb-4">{program.title}</h2>
                                    <p className="text-gray-100 mb-8 text-sm md:text-base opacity-90">
                                        {program.description}
                                    </p>
                                    <Link
                                        href={program.link}
                                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border border-white/10 hover:border-white/30"
                                    >
                                        Explore Program
                                        <span className="ml-1">→</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Featured Skills */}
            <section className="container mx-auto px-4 py-16">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills You’ll Master
          </span>
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {featuredSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-gray-900/40 backdrop-blur rounded-2xl p-8 text-center border border-gray-800/50 hover:border-gray-700 transition-colors"
                        >
                            <div className="flex justify-center mb-6">{skill.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                            <p className="text-gray-300 text-sm">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Success Metrics */}
            <section className="container mx-auto px-4 py-16">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Impact
          </span>
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {Object.entries(successMetrics).map(([key, value], idx) => {
                        const colors = ['text-blue-400', 'text-purple-400', 'text-pink-400', 'text-teal-400'];
                        const labels = {
                            studentsTrained: 'Students Trained',
                            projectsCompleted: 'Projects Completed',
                            employmentRate: 'Employment Rate',
                            communityMembers: 'Community Members',
                        };
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-6"
                            >
                                <p className={`text-4xl md:text-5xl font-bold ${colors[idx]}`}>{value}</p>
                                <p className="text-gray-300 mt-2">{labels[key as keyof typeof labels]}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default StudyPrograms;