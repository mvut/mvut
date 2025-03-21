'use client'

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AbidHussin from '../../../public/faculty/abid.jpg'
const Faculties = () => {
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

    const departments = [
        {
            name: 'AI Engineering',
            dean: {
                name: 'Abid Hussain',
                role: 'Dean of AI Engineering',
                bio: 'Expert in Agent AI & Robotics',
                image: '/faculty/abid.jpg',
                links: {
                    linkedin: '',
                    github: '',
                    twitter: '',
                },
            },
        },
        {
            name: 'Research',
            dean: {
                name: 'Muhammad Arshad Iqbal',
                role: 'Dean of Research',
                bio: 'Specialist in Research & Development Methodologies',
                image: '/faculty/arshadiqbal.jpg',
                links: {
                    linkedin: '',
                    github: '',
                    twitter: '',
                },
            },
        },
        {
            name: 'Science',
            dean: {
                name: 'Babar Hussain',
                role: 'Dean of Science',
                bio: 'Focused on Mathematical Modeling, Logic, and Computational Theory.',
                image: '/faculty/babar.jpg',
                links: {
                    linkedin: '',
                    github: '',
                    twitter: '',
                },
            },
        },
        {
            name: 'Entrepreneurship',
            dean: {
                name: 'Mike Litman',
                role: 'Dean of Entrepreneurship',
                bio: 'Global Awards Winning Leader',
                image: '/faculty/mike2.jpg',
                links: {
                    linkedin: '',
                    github: '',
                    twitter: '',
                },
            },
        },
    ];

    return (
        <div className="container flex flex-col py-20 bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 min-h-screen font-sans">
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
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight"
                >
                    Our Faculties
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl lg:text-2xl mt-4 text-gray-700 leading-relaxed"
                >
                    Meet the leaders driving innovation and excellence across our departments.
                </motion.p>
            </motion.div>

            {/* Departments Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-4"
            >
                {departments.map((department, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Department Name */}
                        <h2 className="text-xl font-bold text-blue-900">{department.name}</h2>

                        {/* Dean Profile */}
                        <div className="flex flex-col items-center justify-center gap-4">
                            {/* Profile Image */}
                            <div className="border-4 border-green-500 rounded-full overflow-hidden w-36 h-36">
                                <Image
                                    src={department.dean.image}
                                    alt={department.dean.name}
                                    width={150}
                                    height={150}
                                    className="rounded-full object-cover"
                                />
                            </div>

                            {/* Dean Details */}
                            <div className="text-center">
                                <h3 className="text-lg font-bold text-blue-900">{department.dean.name}</h3>
                                <p className="text-sm text-gray-600">{department.dean.role}</p>
                                <p className="text-xs text-gray-500 mt-2">{department.dean.bio}</p>

                                {/* Social Links */}
                                <div className="flex items-center justify-center gap-4 mt-4">
                                    <a
                                        href={department.dean.links.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 transition-all duration-300"
                                    >
                                        <FaLinkedin size={24} />
                                    </a>
                                    <a
                                        href={department.dean.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-gray-900 transition-all duration-300"
                                    >
                                        <FaGithub size={24} />
                                    </a>
                                    <a
                                        href={department.dean.links.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                                    >
                                        <FaTwitter size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Faculties;