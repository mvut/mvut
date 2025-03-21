'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaNewspaper, FaUsers, FaRobot, FaCode, FaMicroscope, FaChild, FaBook, FaGithub, FaLightbulb, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';

export default function UnitedSchoolOfAI() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    };

    const news = [
        {
            title: 'Introduction to AI for Kids',
            date: '2023-10-01',
            description: 'Learn how our youngest students are mastering AI concepts.',
            icon: <FaChild size={30} className="text-yellow-500" />,
        },
        {
            title: 'STEM Fair 2023 Winners',
            date: '2023-09-25',
            description: 'Congratulations to our STEM Fair winners!',
            icon: <FaMicroscope size={30} className="text-purple-500" />,
        },
        {
            title: 'New Robotics Program',
            date: '2023-09-15',
            description: 'Introducing our new robotics curriculum for young innovators.',
            icon: <FaRobot size={30} className="text-red-500" />,
        },
    ];

    const admittedCandidates = [
        'Alice Johnson',
        'Bob Smith',
        'Charlie Brown',
        'Diana Prince',
        'Ethan Hunt',
        'Fiona Gallagher',
        'George Lucas',
        'Hannah Montana',
    ];

    const learningRoadmap = [
        { title: 'Term-0 Tiny Stars', icon: <FaChild size={30} className="text-yellow-500" /> },
        { title: 'Term-I Little Coders', icon: <FaCode size={30} className="text-blue-500" /> },
        { title: 'Term-II STEM Explorers', icon: <FaMicroscope size={30} className="text-purple-500" /> },
        { title: 'Term-III Entrepreneurs', icon: <FaRobot size={30} className="text-red-500" /> },
        { title: 'Term-IV Phonics Wizards', icon: <FaBook size={30} className="text-green-500" /> },
    ];

    const testimonials = [
        {
            quote: 'USAI has transformed my child’s learning experience. They now love coding and robotics!',
            author: 'Sarah Johnson',
        },
        {
            quote: 'The STEM programs are top-notch. My daughter is always excited to attend classes.',
            author: 'Michael Brown',
        },
        {
            quote: 'A perfect blend of fun and education. Highly recommend USAI to all parents.',
            author: 'Emily Davis',
        },
    ];

    return (
        <div className="flex flex-col gap-8 min-h-screen py-16 bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 font-sans px-4 md:px-8 lg:px-16">
            {/* Header Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-blue-900"
                >
                    United School of Artificial Intelligence
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed mt-4 text-gray-700"
                >
                    Imagine a school where Kindergarten children can learn and play alongside artificial intelligence and computer science technologies! Welcome to the United School of Artificial Intelligence (USAI), where we&apos;re revolutionizing early childhood education.
                </motion.p>
            </motion.div>

            {/* Mission Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 mb-4"
                >
                    Our Mission
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto"
                >
                    To empower young learners with the skills and knowledge to thrive in a world driven by artificial intelligence and technology.
                </motion.p>
            </motion.div>

            {/* News Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-16"
            >
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Latest News</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((article, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {article.icon}
                                <h3 className="text-xl font-bold text-gray-900">{article.title}</h3>
                            </div>
                            <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                            <p className="text-gray-700">{article.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Admitted Candidates Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-16"
            >
                <h2 className="text-3xl font-bold text-green-900 text-center mb-8">Admitted Candidates</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {admittedCandidates.map((candidate, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all duration-300"
                        >
                            <FaUsers size={40} className="text-green-600 mb-4" />
                            <p className="text-lg font-bold text-gray-900">{candidate}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Learning Roadmap Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-16 text-center"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-8"
                >
                    Learning Roadmap
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learningRoadmap.map((term, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">{term.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900">{term.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Testimonials Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-16"
            >
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">What Parents Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
                        >
                            <FaHandsHelping size={40} className="text-blue-600 mb-4" />
                            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                            <p className="text-sm text-gray-500 mt-4">- {testimonial.author}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Call to Action Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center gap-10 mt-16"
            >
                <motion.a
                    variants={itemVariants}
                    href="/usai/apply"
                    className="flex items-center justify-center text-xl text-white p-4 bg-red-500 hover:bg-red-700 w-40 rounded-lg shadow-lg transition-all duration-300"
                >
                    Apply Now
                </motion.a>
                <motion.a
                    variants={itemVariants}
                    href="https://github.com/drsagher/USAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-all duration-300"
                >
                    <FaGithub size={55} />
                    Visit Our GitHub
                </motion.a>
            </motion.div>
        </div>
    );
}