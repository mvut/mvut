'use client';
import React from 'react';
import {
    GiArchiveResearch,
    GiBookshelf,
    GiGlobe,
    GiGraduateCap,
    GiTeacher,
    GiFamilyHouse,
} from 'react-icons/gi';
import { FaLaptopCode, FaHandsHelping, FaUserFriends, FaChild } from 'react-icons/fa';
import { MdWork, MdOutlineSecurity } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';

// Load Google Font
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function WhyUsComponent() {
    // Features Data
    const features: Feature[] = [
        { icon: <GiBookshelf size={80} />, title: 'Online Affordable Education', description: 'Accessible and affordable education for everyone, anywhere.' },
        { icon: <FaLaptopCode size={80} />, title: 'Code Literacy for All', description: 'Empowering individuals with coding skills for the digital age.' },
        { icon: <GiGlobe size={80} />, title: 'United Minds, Global Learning', description: 'Connecting learners worldwide for a collaborative educational experience.' },
        { icon: <GiArchiveResearch size={80} />, title: 'Hands-on Research Experience', description: 'Practical research opportunities to solve real-world problems.' },
        { icon: <GiTeacher size={80} />, title: 'Expert Faculty', description: 'Learn from industry experts and experienced educators.' },
        { icon: <MdWork size={80} />, title: 'Career Support and Placement', description: 'Comprehensive career services to help you land your dream job.' },
        { icon: <FaUserFriends size={80} />, title: 'Collaborative Learning Environment', description: 'Work with peers on projects and build a strong professional network.' },
        { icon: <GiGraduateCap size={80} />, title: 'Industry-Relevant Curriculum', description: 'Stay ahead with courses designed to meet industry demands.' },
        { icon: <FaHandsHelping size={80} />, title: 'Personalized Learning Paths', description: 'Tailored courses to match your career goals and learning pace.' },
        { icon: <MdOutlineSecurity size={80} />, title: 'Cutting-Edge Technology', description: 'Access to the latest tools and technologies in your field of study.' },
        { icon: <FaChild size={80} />, title: 'Kindergarten Intelligence (KI)', description: 'Nurture young minds with engaging and age-appropriate learning programs.' },
        { icon: <GiFamilyHouse size={80} />, title: 'Parenting Empowerment', description: 'Supporting parents with resources and guidance for effective child development.' },
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger child animations
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 15 },
        },
    };

    return (
        <div className={`flex flex-col gap-10 items-center justify-center py-16 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white ${montserrat.className}`}>
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl font-bold text-center"
            >
                Why MVIT?
            </motion.h1>

            {/* Features Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex flex-col items-center justify-center text-center gap-4 p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300"
                    >
                        <div className="text-amber-500">{feature.icon}</div>
                        <p className="text-xl font-semibold text-white">{feature.title}</p>
                        <p className="text-gray-400">{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}