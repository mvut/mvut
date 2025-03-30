'use client';
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaAward,
    FaUserGraduate,
    FaArrowRight,
    FaLightbulb,
    FaChartLine,
    FaGlobeAmericas,
    FaMedal,
    FaHandsHelping,
    FaGraduationCap
} from "react-icons/fa";

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900 py-16 text-white font-sans">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                {/* Title Section */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 text-center mb-8"
                >
                    Honoring Visionary Leaders
                </motion.h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto text-center leading-relaxed mb-12">
                    MVIT celebrates exceptional individuals who have transformed industries, advanced knowledge, and made lasting impacts on society through their groundbreaking work.
                </p>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    <div className="bg-black bg-opacity-50 rounded-xl p-4 text-center border border-red-800">
                        <div className="text-3xl font-bold text-red-400">24</div>
                        <div className="text-sm text-gray-300">Honorary Degrees</div>
                    </div>
                    <div className="bg-black bg-opacity-50 rounded-xl p-4 text-center border border-red-800">
                        <div className="text-3xl font-bold text-red-400">15+</div>
                        <div className="text-sm text-gray-300">Countries</div>
                    </div>
                    <div className="bg-black bg-opacity-50 rounded-xl p-4 text-center border border-red-800">
                        <div className="text-3xl font-bold text-red-400">10</div>
                        <div className="text-sm text-gray-300">Fields of Impact</div>
                    </div>
                    <div className="bg-black bg-opacity-50 rounded-xl p-4 text-center border border-red-800">
                        <div className="text-3xl font-bold text-red-400">100%</div>
                        <div className="text-sm text-gray-300">Merit-Based</div>
                    </div>
                </motion.div>

                {/* Content Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {/* Honorary Causa Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex flex-col bg-black bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg border border-red-900 hover:border-red-600 p-8 space-y-6 transition-all"
                    >
                        <div className="flex items-center">
                            <FaAward size={40} className="text-red-400 mr-4" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Honorary Doctorate</h2>
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                            Our highest academic honor recognizes individuals who have made extraordinary contributions beyond traditional scholarship. Recipients include Nobel laureates, pioneering entrepreneurs, and transformative social leaders whose work has advanced human knowledge and welfare.
                        </p>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center">
                                <FaMedal className="text-red-400 mr-3" />
                                <span className="text-sm sm:text-base text-gray-300">Global recognition of lifetime achievement</span>
                            </div>
                            <div className="flex items-center">
                                <FaGraduationCap className="text-red-400 mr-3" />
                                <span className="text-sm sm:text-base text-gray-300">Conferred by unanimous faculty decision</span>
                            </div>
                            <div className="flex items-center">
                                <FaHandsHelping className="text-red-400 mr-3" />
                                <span className="text-sm sm:text-base text-gray-300">Honors both academic and humanitarian impact</span>
                            </div>
                        </div>
                        <Link
                            href="/pages/honrarydoctorate"
                            className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors mt-4 group"
                        >
                            <span className="group-hover:underline">Nomination Process</span>
                            <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Distinguished Leadership Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex flex-col bg-black bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg border border-red-900 hover:border-red-600 p-8 space-y-6 transition-all"
                    >
                        <div className="flex items-center">
                            <FaUserGraduate size={40} className="text-red-400 mr-4" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Distinguished Leadership</h2>
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                            Our leadership initiatives identify and support emerging visionaries across sectors. Through mentorship programs, research grants, and global forums, we empower the next generation of change-makers to tackle humanity&apos;s greatest challenges.
                        </p>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center">
                                <FaChartLine className="text-red-400 mr-3" />
                                <span className="text-sm sm:text-base text-gray-300">Annual leadership summit with global experts</span>
                            </div>
                            <div className="flex items-center">
                                <FaLightbulb className="text-red-400 mr-3" />
                                <span className="text-sm sm:text-base text-gray-300">Innovation incubator for social impact projects</span>
                            </div>
                            <div className="flex items-center">
                                <FaGlobeAmericas className="text-red-400 mr-3" />
                                <span className="text-sm sm:text-base text-gray-300">Cross-cultural exchange programs</span>
                            </div>
                        </div>
                        <Link
                            href="/pages/programs"
                            className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors mt-4 group"
                        >
                            <span className="group-hover:underline">Explore Programs</span>
                            <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Impact Sections */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-20 space-y-16"
                >
                    {/* Innovation Section */}
                    <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-red-900">
                        <div className="flex flex-col md:flex-row items-center">
                            <FaLightbulb size={60} className="text-red-400 mb-6 md:mb-0 md:mr-8" />
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Pioneering Innovation</h2>
                                <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                                    We champion leaders who push boundaries in science, technology, and social innovation. Our honorees include inventors of life-saving medical technologies, architects of sustainable urban solutions, and creators of groundbreaking artistic movements that redefine cultural landscapes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Global Impact Section */}
                    <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-red-900">
                        <div className="flex flex-col md:flex-row items-center">
                            <FaGlobeAmericas size={60} className="text-red-400 mb-6 md:mb-0 md:mr-8" />
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Global Transformation</h2>
                                <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                                    MVIT&apos;s global network connects leaders across continents to address pressing challenges. From climate resilience initiatives to digital inclusion programs, our community drives collaborative solutions that transcend borders and create measurable impact worldwide.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Success Stories */}
                    <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-red-900">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">Spotlight: Honoree Achievements</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {successStories.map((story, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="flex flex-col bg-black bg-opacity-30 rounded-lg border border-red-900 p-6 text-center space-y-4 h-full"
                                >
                                    <div className="bg-red-900 bg-opacity-30 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                                        <FaAward size={24} className="text-red-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{story.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-300">
                                        {story.description}
                                    </p>
                                    <div className="mt-2 text-xs text-red-400 font-medium">
                                        {story.field} • {story.year}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Call-to-Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center mt-20 text-center"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Nominate an Exceptional Leader</h2>
                    <p className="text-sm sm:text-base text-gray-300 max-w-2xl mb-8">
                        Help us recognize those making extraordinary contributions to society. Nominations are reviewed quarterly by our international selection committee.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/pages/honrarydoctorate"
                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all group"
                        >
                            <span>Submit Nomination</span>
                            <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/pages/honrarydoctorate/recipients"
                            className="flex items-center gap-2 bg-transparent hover:bg-black hover:bg-opacity-30 text-white font-bold py-3 px-6 rounded-full border border-red-600 transition-all group"
                        >
                            <span>View Past Honorees</span>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

// Enhanced Success Stories Data
const successStories = [
    {
        title: "Dr. Naila Khan",
        description: "Revolutionized renewable energy storage with her nanoparticle research, enabling sustainable power solutions for developing regions.",
        field: "Sustainable Technology",
        year: "2024"
    },
    {
        title: "Prof. Carlos Mendez",
        description: "Pioneered AI-driven healthcare diagnostics now used in over 200 hospitals worldwide, improving early disease detection rates by 40%.",
        field: "Medical AI",
        year: "2023"
    },
    {
        title: "Dr. Amina Diallo",
        description: "Transformed agricultural practices across West Africa through her climate-resilient farming techniques, benefiting over 2 million smallholder farmers.",
        field: "Climate Resilience",
        year: "2022"
    }
];