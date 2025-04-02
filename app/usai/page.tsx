'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaMicroscope, FaChild, FaBook, FaGraduationCap, FaUserTie, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import { Poppins } from 'next/font/google';
import Logo from '@/public/usai-logo-3.png';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const UnitedSchoolOfAI = () => {
    const learningRoadmap = [
        {
            title: 'Tiny Stars (Ages 3-5)',
            description: 'Introduction to technology through play',
            icon: <FaChild className="text-yellow-500" size={24} />,
            skills: ['Basic computing', 'Pattern recognition', 'Simple robotics']
        },
        {
            title: 'Little Coders (Ages 5-7)',
            description: 'Foundational programming concepts',
            icon: <FaCode className="text-blue-500" size={24} />,
            skills: ['Block coding', 'Algorithm thinking']
        },
        {
            title: 'STEM Explorers (Ages 7-9)',
            description: 'Hands-on science and engineering',
            icon: <FaMicroscope className="text-purple-500" size={24} />,
            skills: ['Robotics kits', 'Scientific method']
        },
        {
            title: 'Young Entrepreneurs (Ages 9-11)',
            description: 'Innovation and problem-solving',
            icon: <FaRobot className="text-red-500" size={24} />,
            skills: ['App development', 'Business concepts']
        }
    ];

    const faculty = [
        {
            name: 'Abid Hussain',
            role: 'Agentic AI Leader',
            expertise: 'Hands-on AI learning'
        },
        {
            name: 'Babar Hussain',
            role: 'Lead STEM Educator',
            expertise: 'Math & Science education'
        },
        {
            name: 'Aneela Abubakar',
            role: 'Child Care Specialist',
            expertise: 'Early childhood development'
        },
        {
            name: 'Muhammad Younas Alam',
            role: 'Language Expert',
            expertise: 'Communication skills'
        }
    ];

    const testimonials = [
        {
            quote: 'USAI has transformed my child\'s learning experience. They now love coding and robotics!',
            author: 'Parent of 6-year-old'
        },
        {
            quote: 'The STEM programs are top-notch. My daughter comes home bursting with new ideas.',
            author: 'Parent of 7-year-old'
        },
        {
            quote: 'A perfect blend of fun and education. Highly recommend USAI to all parents.',
            author: 'Parent of 5-year-old'
        }
    ];

    return (
        <div className={`min-h-screen ${poppins.className} bg-gray-900 text-gray-100`}>
            {/* Hero Section */}
            <header className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-900 to-gray-900">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                        className="mb-8"
                    >
                        <Image
                            src={Logo}
                            alt="USAI Logo"
                            width={100}
                            height={100}
                            className="mx-auto"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
                    >
                        United School of Artificial Intelligence
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg text-gray-300 max-w-3xl mx-auto mb-8"
                    >
                        Preparing young minds for the future through innovative AI education
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link href="/usai/apply">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg flex items-center gap-2"
                            >
                                <FaGraduationCap /> Apply Now
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pb-16">
                {/* Programs Section */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                                Our Learning Programs
                            </h2>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                Age-appropriate AI and STEM education pathways
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {learningRoadmap.map((program, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-red-500 transition-all"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 rounded-full bg-gray-700">
                                            {program.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">
                                            {program.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        {program.description}
                                    </p>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-2">
                                            Skills Developed:
                                        </h4>
                                        <ul className="flex flex-wrap gap-2">
                                            {program.skills.map((skill, i) => (
                                                <li
                                                    key={i}
                                                    className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded"
                                                >
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Faculty Section */}
                <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                                Meet Our Educators
                            </h2>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                Passionate professionals dedicated to nurturing young minds
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {faculty.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-900 rounded-lg p-6 text-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-red-900 flex items-center justify-center mx-auto mb-4">
                                        <FaUserTie className="text-white" size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">
                                        {member.name}
                                    </h3>
                                    <p className="text-red-400 text-sm mb-2">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        {member.expertise}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                                What Parents Say
                            </h2>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                Experiences from our community
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-800 rounded-lg p-6"
                                >
                                    <FaHandsHelping
                                        size={24}
                                        className="text-red-500 mb-4"
                                    />
                                    <p className="text-gray-300 italic mb-4">
                                        &quot;{testimonial.quote}&quot;
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        — {testimonial.author}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                            Ready to Join USAI?
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Limited spots available for the 2025-2026 academic year
                        </p>
                        <Link href="/usai/apply">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg flex items-center gap-2 mx-auto"
                            >
                                <FaGraduationCap /> Apply Now
                            </motion.button>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default UnitedSchoolOfAI;