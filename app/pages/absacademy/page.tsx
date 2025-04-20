'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaUsers, FaHandsHelping, FaLightbulb, FaMoneyBillWave, FaBook, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Head from 'next/head';
import MVITLogo from '@/public/mvut_flame.png';
import AbsAcademyLogo from '@/public/resources/partners/abs-academy.png';
import Link from "next/link";

const CollaborationPage: React.FC = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const cardHover = {
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 }
    };

    const logoAnimation = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    const featureItems = [
        {
            icon: <FaGraduationCap className="text-3xl" />,
            title: "Academic Excellence",
            description: "Rigorous curriculum combining theoretical knowledge with practical applications"
        },
        {
            icon: <FaCertificate className="text-3xl" />,
            title: "Industry Certifications",
            description: "Globally recognized credentials aligned with current market demands"
        },
        {
            icon: <FaHandsHelping className="text-3xl" />,
            title: "Community Impact",
            description: "Programs designed to uplift underprivileged communities through education"
        },
        {
            icon: <FaLightbulb className="text-3xl" />,
            title: "Innovation Focus",
            description: "Cutting-edge research and development opportunities for students"
        }
    ];

    const programCards = [
        {
            icon: <FaBook className="text-4xl" />,
            title: "Engineering Programs",
            items: [
                "B.Tech in Computer Science",
                "AI & Machine Learning",
                "Robotics Engineering",
                "Electronics & Communication"
            ],
            bgColor: "from-blue-600 to-blue-800"
        },
        {
            icon: <FaUsers className="text-4xl" />,
            title: "Management Studies",
            items: [
                "MBA with Specializations",
                "Business Analytics",
                "Digital Marketing",
                "Entrepreneurship"
            ],
            bgColor: "from-purple-600 to-purple-800"
        },
        {
            icon: <FaCertificate className="text-4xl" />,
            title: "Vocational Training",
            items: [
                "Data Science Bootcamps",
                "Full Stack Development",
                "Cloud Computing",
                "UI/UX Design"
            ],
            bgColor: "from-red-600 to-red-800"
        }
    ];

    return (
        <>
            <Head>
                <title>MVIT & ABS Academy Collaboration</title>
                <meta name="description" content="Strategic partnership between MVIT and ABS Academy for educational excellence" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/80 z-0" />
                    <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover opacity-10 z-0" />

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold text-white mb-6"
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Transforming Education <span className="text-red-300">Together</span>
                            </motion.h1>
                            <motion.p
                                className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                MVIT and ABS Academy unite to deliver innovative education, industry-aligned certifications, and community impact programs.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

                {/* Fancy Logo Showcase Section */}
                <motion.section
                    className="py-16 relative overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Animated background elements */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[80px] opacity-10" />
                        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-red-500 rounded-full filter blur-[90px] opacity-10" />
                    </motion.div>

                    {/* Glowing connecting line */}
                    <motion.div
                        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1 w-64 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                    />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-semibold tracking-wider text-blue-400 uppercase mb-2">
                                Strategic Partnership
                            </h2>
                            <p className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400">
                                Collaborative Excellence
                            </p>
                        </motion.div>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
                            {/* MVIT Logo */}
                            <motion.div
                                className="relative group"
                                initial={{ opacity: 0, x: -50, rotate: -5 }}
                                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.2
                                }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-blue-500/10 rounded-3xl transform group-hover:scale-110 group-hover:opacity-50 blur-md transition duration-500" />
                                <div className="relative w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 shadow-2xl flex items-center justify-center border border-white/20 overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px] opacity-5" />
                                    <motion.div
                                        className="w-full h-full relative"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Image
                                            src={MVITLogo}
                                            alt="MVIT Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-4 py-1 rounded-full shadow-md text-sm font-medium whitespace-nowrap"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        Manipal Vishwa Institute
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* VS Badge - Only visible on mobile */}
                            <motion.div
                                className="md:hidden my-4"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                    ×
                                </div>
                            </motion.div>

                            {/* ABS Academy Logo */}
                            <motion.div
                                className="relative group"
                                initial={{ opacity: 0, x: 50, rotate: 5 }}
                                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.4
                                }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-red-500/10 rounded-3xl transform group-hover:scale-110 group-hover:opacity-50 blur-md transition duration-500" />
                                <div className="relative w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 shadow-2xl flex items-center justify-center border border-white/20 overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px] opacity-5" />
                                    <motion.div
                                        className="w-full h-full relative"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Image
                                            src={AbsAcademyLogo}
                                            alt="ABS Academy Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-4 py-1 rounded-full shadow-md text-sm font-medium whitespace-nowrap"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        ABS Academy
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-white/10 backdrop-blur-sm"
                                style={{
                                    width: Math.random() * 10 + 5 + 'px',
                                    height: Math.random() * 10 + 5 + 'px',
                                    left: Math.random() * 100 + '%',
                                    top: Math.random() * 100 + '%'
                                }}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: [0, 0.6, 0],
                                    y: [0, Math.random() * 100 - 50],
                                    x: [0, Math.random() * 100 - 50]
                                }}
                                transition={{
                                    duration: Math.random() * 10 + 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: Math.random() * 5
                                }}
                            />
                        ))}
                    </div>
                </motion.section>

                {/* Mission Statement */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our <span className="text-blue-600">Collaborative</span> Mission
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mb-12">
                                We combine academic rigor with practical skills development to create professionals who are not just job-ready but future-ready. Our partnership focuses on holistic education that empowers individuals while contributing to societal development.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {featureItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center"
                                    variants={itemVariants}
                                    whileHover={cardHover}
                                >
                                    <div className="text-blue-600 mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Programs Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our <span className="text-red-600">Academic</span> Programs
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Comprehensive education pathways designed for career success in evolving industries
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {programCards.map((program, index) => (
                                <motion.div
                                    key={index}
                                    className="rounded-xl overflow-hidden shadow-lg"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={cardHover}
                                >
                                    <div className={`bg-gradient-to-r ${program.bgColor} p-6 text-white`}>
                                        <div className="mb-4">{program.icon}</div>
                                        <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                                    </div>
                                    <div className="bg-white p-6">
                                        <ul className="space-y-3">
                                            {program.items.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <FaArrowRight className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button className="mt-6 w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
                                            Learn More
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certification Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <motion.div
                                className="md:w-1/2"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Industry-Recognized <span className="text-blue-600">Certifications</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    Our partnership provides access to prestigious certifications that validate your skills and enhance employability.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                                            <FaCertificate className="text-blue-600" />
                                        </div>
                                        <span className="text-gray-700">Technology certifications in Cloud, AI, and Cybersecurity</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                                            <FaCertificate className="text-blue-600" />
                                        </div>
                                        <span className="text-gray-700">Professional credentials like PMP and Six Sigma</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                                            <FaCertificate className="text-blue-600" />
                                        </div>
                                        <span className="text-gray-700">Skill-based micro-credentials for targeted expertise</span>
                                    </li>
                                </ul>
                                <Link href={'/pages/study'} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition">
                                    View All Certifications
                                </Link>
                            </motion.div>

                            <motion.div
                                className="md:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        "AWS Certified",
                                        "Google Cloud",
                                        "Microsoft Azure",
                                        "Cisco Networking",
                                        "PMP®",
                                        "Six Sigma",
                                        "Data Science",
                                        "Digital Marketing"
                                    ].map((cert, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white p-4 rounded-lg shadow-md text-center"
                                            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="h-12 flex items-center justify-center mb-2">
                                                <FaCertificate className="text-blue-500 text-2xl" />
                                            </div>
                                            <h4 className="font-medium text-gray-800">{cert}</h4>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Social Impact Section */}
                <section className="py-16 bg-gradient-to-r from-blue-900 to-red-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Creating <span className="text-red-300">Social Impact</span>
                            </h2>
                            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                                Our collaboration extends beyond academics to drive positive change in communities
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Community Education",
                                    description: "Free workshops and digital literacy programs for underserved populations",
                                    icon: <FaUsers className="text-3xl" />
                                },
                                {
                                    title: "Women in STEM",
                                    description: "Scholarships and mentorship programs to promote gender diversity in tech",
                                    icon: <FaHandsHelping className="text-3xl" />
                                },
                                {
                                    title: "Rural Development",
                                    description: "Skill development initiatives for rural youth to enhance employability",
                                    icon: <FaGraduationCap className="text-3xl" />
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="text-red-300 mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-blue-100">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gray-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to <span className="text-blue-400">Transform</span> Your Future?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Join thousands of students who have accelerated their careers through our programs
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <motion.button
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href={'/pages/apply'}>Apply Now</Link>
                                </motion.button>
                                <motion.button
                                    className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg border border-white transition"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href={'/pages/study/fee'}>Tariff</Link>
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CollaborationPage;