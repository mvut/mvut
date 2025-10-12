'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
    variable: '--font-inter',
});

interface SocialLink {
    icon: React.ReactNode;
    href: string;
    color: string;
    label: string;
}

interface Program {
    title: string;
    href: string;
}

interface Resource {
    title: string;
    href: string;
}

const FooterComponent: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
            },
        },
    };

    const socialLinks: SocialLink[] = [
        { icon: <FaFacebookF size={24} />, href: 'https://web.facebook.com/mvutus', color: 'hover:text-blue-500', label: 'Facebook' },
        { icon: <FaInstagram size={24} />, href: 'https://www.instagram.com/drsagher/', color: 'hover:text-pink-500', label: 'Instagram' },
        { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com/company/mvut/', color: 'hover:text-blue-500', label: 'LinkedIn' },
        { icon: <CiYoutube size={26} />, href: 'https://www.youtube.com/@mvutus', color: 'hover:text-red-500', label: 'YouTube' },
        { icon: <FaGithub size={24} />, href: 'https://github.com/drsagher/MVIT', color: 'hover:text-gray-300', label: 'GitHub' },
    ];

    const programs: Program[] = [
        { title: 'Mansha Certified Autonomous Systems and Cloud Engineer', href: '/pages/mcasce' },
        { title: 'Kindergarten (K.G.) STEM Entrepreneurs', href: '/pages/kg-ai' },
    ];

    const resources: Resource[] = [
        { title: 'Careers', href: '/pages/mycareer' },
        { title: 'Programs', href: '/pages/study' },
        { title: 'Tariff', href: '/pages/study/fee' },
        { title: 'Date Sheet', href: '/pages/datesheet' },
    ];

    return (
        <footer className={`relative bg-gray-900 text-gray-200 ${inter.variable} py-12 overflow-hidden`}>
            <div className="absolute inset-x-0 top-0 h-12 bg-gray-800 [clip-path:polygon(0_0,100%_0,50%_100%)]"></div>
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gray-800 [clip-path:polygon(50%_0,100%_100%,0_100%)]"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">About</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            MVIT pioneers AI-driven education, empowering learners from kindergarten through to professionals with cutting-edge skills in software development and innovative technologies. Our holistic programs bridge the gap between foundational learning and advanced AI proficiency, fostering future-ready innovators at every stage of their journey.                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Our Programs</h3>
                        <div className="flex flex-col gap-2">
                            {programs.map((program, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    className="text-sm text-gray-300 hover:text-blue-500 transition-colors"
                                >
                                    <Link href={program.href}>{program.title}</Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Resources</h3>
                        <div className="flex flex-col gap-2">
                            {resources.map((resource, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    className="text-sm text-gray-300 hover:text-blue-500 transition-colors"
                                >
                                    <Link href={resource.href}>{resource.title}</Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-10 flex justify-center gap-4"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className={`text-gray-300 ${social.color} p-2 rounded-full bg-gray-800/50 transition-all duration-300`}
                            aria-label={`Visit our ${social.label}`}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 pt-6 border-t border-gray-800"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} MVIT. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-blue-500 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-blue-500 transition-colors">
                            Terms of Service
                        </Link>
                        <Link
                            href="https://www.mvitech.org/"
                            target="_blank"
                            className="hover:text-blue-500 transition-colors"
                        >
                            Official Website
                        </Link>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default FooterComponent;