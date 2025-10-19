'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaIndustry, FaNetworkWired, FaUserGraduate, FaHandshake, FaGlobeAmericas } from 'react-icons/fa';
import Image from 'next/image';
import MVITLogo from '@/public/mvut_flame.png';
import ABSInternationalLogo from '@/public/resources/partners/absi.png';
import Link from "next/link";

const CollaborationPage = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    const corporatePartners = [
        "Fortune 500 Companies",
        "Global IT Giants",
        "Manufacturing Leaders",
        "Financial Institutions",
        "Healthcare Organizations"
    ];

    const workforceSolutions = [
        {
            icon: <FaIndustry className="text-3xl text-blue-600" />,
            title: "Industry-Aligned Curriculum",
            description: "Co-developed with corporate partners to address real-world challenges"
        },
        {
            icon: <FaNetworkWired className="text-3xl text-blue-600" />,
            title: "Technology Immersion",
            description: "Hands-on training in emerging technologies used by top enterprises"
        },
        {
            icon: <FaUserGraduate className="text-3xl text-blue-600" />,
            title: "Talent Pipeline",
            description: "Direct recruitment channels for corporate partners"
        },
        {
            icon: <FaNetworkWired className="text-3xl text-blue-600" />,
            title: "Leadership Development",
            description: "Executive programs for high-potential employees"
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 to-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern-dark.svg')] opacity-20" />
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            <span className="text-blue-400">Corporate-Education</span> Nexus
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            MVIT and ABS International: Building tomorrow&apos;s workforce through industry-integrated education
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Partnership Showcase */}
            <section className="py-16 -mt-16 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="bg-white rounded-xl shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12"
                        initial="hidden"
                        whileInView="visible"
                        variants={container}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="flex-1"
                            variants={item}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Strategic <span className="text-blue-600">Workforce</span> Alliance
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                ABS International specializes in corporate workforce transformation through strategic partnerships with academia. Our collaboration with MVIT creates a powerful talent development ecosystem that benefits:
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                        <FaIndustry className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Industry Partners</h4>
                                        <p className="text-gray-600">Access to job-ready talent with relevant technical and soft skills</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                        <FaUserGraduate className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Students</h4>
                                        <p className="text-gray-600">Industry-aligned education with clear career pathways</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                        <FaGlobeAmericas className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Economy</h4>
                                        <p className="text-gray-600">Developing skilled professionals to drive economic growth</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex-1 flex flex-col items-center"
                            variants={item}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="relative w-full max-w-md aspect-square">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-100 rounded-full shadow-lg p-8 flex items-center justify-center">
                                    <div className="relative w-48 h-48 md:w-56 md:h-56">
                                        <Image
                                            src={MVITLogo}
                                            alt="MVIT Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-lg w-32 h-32 p-4 flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={ABSInternationalLogo}
                                            alt="ABS International Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 bg-white rounded-full shadow-lg w-24 h-24 p-3 flex items-center justify-center border-4 border-blue-500">
                                    <FaHandshake className="text-blue-600 text-3xl" />
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <p className="text-lg font-medium text-gray-600">
                                    Partnership since 2022 • 10+ joint initiatives
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Corporate Network */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-blue-600">Corporate</span> Network
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            ABS International connects MVIT with leading organizations across industries
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-5 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        variants={container}
                        viewport={{ once: true }}
                    >
                        {corporatePartners.map((partner, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg p-6 shadow-md text-center flex items-center justify-center h-full"
                                variants={item}
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            >
                                <h4 className="font-medium text-gray-800">{partner}</h4>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Workforce Solutions */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Integrated <span className="text-blue-600">Workforce</span> Solutions
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our collaborative programs address the complete talent lifecycle
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        variants={container}
                        viewport={{ once: true }}
                    >
                        {workforceSolutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition"
                                variants={item}
                                whileHover={{
                                    y: -10,
                                    borderColor: "#3b82f6",
                                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
                                }}
                            >
                                <div className="mb-4">{solution.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{solution.title}</h3>
                                <p className="text-gray-600">{solution.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Program Structure */}
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
                            Corporate <span className="text-blue-600">Engagement</span> Model
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            How organizations participate in our talent development ecosystem
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 transform -translate-x-1/2" />

                        <div className="space-y-12 lg:space-y-0">
                            {[
                                {
                                    title: "Needs Assessment",
                                    description: "Collaborative analysis of workforce requirements",
                                    position: "left"
                                },
                                {
                                    title: "Curriculum Co-creation",
                                    description: "Joint development of industry-relevant courses",
                                    position: "right"
                                },
                                {
                                    title: "Campus Engagement",
                                    description: "Guest lectures, workshops, and live projects",
                                    position: "left"
                                },
                                {
                                    title: "Talent Acquisition",
                                    description: "Priority access to qualified graduates",
                                    position: "right"
                                }
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex flex-col lg:flex-row items-center ${step.position === 'left' ? 'lg:justify-start' : 'lg:justify-end'}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={`w-full lg:w-5/12 ${step.position === 'left' ? 'lg:pr-8' : 'lg:pl-8'}`}>
                                        <div className="bg-white p-6 rounded-xl shadow-md">
                                            <div className="flex items-center mb-3">
                                                <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                                                    {index + 1}
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                                            </div>
                                            <p className="text-gray-600 pl-14">{step.description}</p>
                                        </div>
                                    </div>
                                    {index !== 3 && (
                                        <div className="lg:hidden my-4 flex justify-center">
                                            <div className="w-0.5 h-12 bg-gray-300" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CollaborationPage;