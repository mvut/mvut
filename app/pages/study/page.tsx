'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import { GrCertificate } from 'react-icons/gr';
import { FaChalkboardTeacher, FaSearch, FaCode, FaUsers, FaRocket, FaArrowRight } from 'react-icons/fa';
import { SiHiveBlockchain } from 'react-icons/si';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

type Program = {
    title: string;
    subtitle: string;
    link: string;
    icon: React.ReactNode;
    gradient: string;
    badge?: string;
};

type Skill = {
    name: string;
    desc: string;
    icon: React.ReactNode;
};

const PROGRAMS: Program[] = [
    {
        title: 'MCASCE — Mansha Certified Autonomous System and Cloud Engineer',
        subtitle: 'Master AI, Cloud, and Robotics integration with hands-on deployment experience.',
        link: '/pages/mcasce',
        icon: <GrCertificate className="text-4xl" />,
        gradient: 'from-blue-600 via-purple-600 to-indigo-700',
        badge: 'Advanced'
    },
    {
        title: 'K.G. STEM Entrepreneurs',
        subtitle: 'Early-stage STEM education with entrepreneurial mindset development.',
        link: '/pages/kg-ai',
        icon: <FaChalkboardTeacher className="text-4xl" />,
        gradient: 'from-emerald-500 to-teal-700',
        badge: 'Popular'
    },
    {
        title: 'Research & Development',
        subtitle: 'From methodology to publishable research output with expert guidance.',
        link: '/pages/research',
        icon: <FaSearch className="text-4xl" />,
        gradient: 'from-slate-600 to-gray-800',
        badge: 'Elite'
    },
];

const SKILLS: Skill[] = [
    { name: 'Technical Excellence', desc: 'Industry-standard coding practices and solution architecture', icon: <FaCode className="text-2xl" /> },
    { name: 'Team Collaboration', desc: 'Agile methodologies and peer review processes', icon: <FaUsers className="text-2xl" /> },
    { name: 'Innovation Focus', desc: 'Rapid prototyping and iterative development cycles', icon: <FaRocket className="text-2xl" /> },
    { name: 'Emerging Technologies', desc: 'Cloud-native, edge computing, and decentralized systems', icon: <SiHiveBlockchain className="text-2xl" /> },
];

const cardMotion = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }),
    hover: {
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
    },
};

export default function StudyPrograms(): JSX.Element {
    return (
        <main className={`min-h-screen bg-neutral-50 text-gray-900 ${montserrat.className}`}>
            {/* Hero Section */}
            <section className="relative py-24 px-6 text-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
                <div className="relative max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                    >
                        Engineering Tomorrow&apos;s
                        <span className="block bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent mt-2">
                            Tech Leaders
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        Industry-aligned programs combining cutting-edge curriculum,
                        expert mentorship, and real-world project experience.
                    </motion.p>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Premier Learning Programs
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Structured pathways designed for career advancement and technical mastery
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {PROGRAMS.map((program, index) => (
                        <motion.article
                            key={program.title}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            variants={cardMotion}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-2xl h-full flex flex-col">
                                {/* Gradient Header */}
                                <div className={`bg-gradient-to-r ${program.gradient} p-6 text-white`}>
                                    <div className="flex items-start justify-between">
                                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                            {program.icon}
                                        </div>
                                        {program.badge && (
                                            <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                                {program.badge}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold mt-4 leading-tight">
                                        {program.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-grow flex flex-col">
                                    <p className="text-gray-600 mb-6 flex-grow">
                                        {program.subtitle}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center text-sm text-gray-700">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                            Project-based curriculum
                                        </li>
                                        <li className="flex items-center text-sm text-gray-700">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                                            Industry expert mentorship
                                        </li>
                                        <li className="flex items-center text-sm text-gray-700">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                                            Professional certification
                                        </li>
                                    </ul>

                                    {/* CTA */}
                                    <Link
                                        href={program.link}
                                        className="group/btn inline-flex items-center justify-center w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:shadow-lg mt-auto"
                                    >
                                        Explore Program
                                        <FaArrowRight className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 bg-white border-y border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Core Competencies
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Developing the essential skills that drive innovation and career success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SKILLS.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg mb-4">
                                    {skill.icon}
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    {skill.name}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {skill.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}