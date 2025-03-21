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
} from "react-icons/fa";

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-16 text-white font-sans">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

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
                    className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 text-center mb-12"
                >
                    Celebrating Influential Leaders
                </motion.h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto text-center leading-relaxed mb-16">
                    At MVIT, we honor individuals who have made significant contributions to society, their fields, and the world. Through innovation, leadership, and humanitarian efforts, these leaders inspire us to create a brighter future.
                </p>

                {/* Content Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                >
                    {/* Honorary Causa Card */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex flex-col bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg border-t-4 border-teal-400 p-8 space-y-4"
                    >
                        <FaAward size={40} className="text-teal-400 mb-2" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Honorary Causa</h2>
                        <p className="text-sm sm:text-lg leading-relaxed text-gray-200">
                            An honorary PhD degree is a prestigious accolade awarded by universities to individuals who have significantly contributed to society, their field, or knowledge. Unlike traditional doctoral degrees requiring rigorous coursework and research, honorary doctorates are conferred for outstanding achievements, leadership, or humanitarian efforts. They recognize exceptional individuals in business, science, arts, education, and public service, who have positively impacted their communities and the world.
                        </p>
                        <Link
                            href="/pages/honrarydoctorate"
                            className="flex items-center gap-2 text-teal-400 hover:text-white transition-all mt-4"
                        >
                            Learn More <FaArrowRight size={16} />
                        </Link>
                    </motion.div>

                    {/* Future Programs Card */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex flex-col bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg border-t-4 border-teal-400 p-8 space-y-4"
                    >
                        <FaUserGraduate size={40} className="text-teal-400 mb-2" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Future Programs</h2>
                        <p className="text-sm sm:text-lg leading-relaxed text-gray-200">
                            Stay tuned for upcoming programs and initiatives designed to recognize and empower leaders across various domains. Our mission is to foster innovation, inspire excellence, and create opportunities for impactful contributions to society. These programs will include mentorship, research grants, and global leadership forums.
                        </p>
                        <Link
                            href="/pages/programs"
                            className="flex items-center gap-2 text-teal-400 hover:text-white transition-all mt-4"
                        >
                            Explore Upcoming Initiatives <FaArrowRight size={16} />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Additional Sections */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-16 space-y-16"
                >
                    {/* Innovation and Leadership */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center">
                        <FaLightbulb size={50} className="text-teal-400 mx-auto mb-6" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Innovation and Leadership</h2>
                        <p className="text-sm sm:text-lg leading-relaxed text-gray-200">
                            At MVIT, we believe that innovation and leadership go hand in hand. Our programs aim to nurture visionary leaders who can drive change and create sustainable solutions for global challenges. By fostering collaboration and creativity, we empower individuals to make a lasting impact.
                        </p>
                    </div>

                    {/* Global Impact */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center">
                        <FaGlobeAmericas size={50} className="text-teal-400 mx-auto mb-6" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Global Impact</h2>
                        <p className="text-sm sm:text-lg leading-relaxed text-gray-200">
                            Our initiatives extend beyond borders, connecting leaders from diverse backgrounds to address pressing global issues. From climate change to technological advancements, we provide platforms for collaboration and knowledge-sharing to drive meaningful progress worldwide.
                        </p>
                    </div>

                    {/* Success Stories */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">Success Stories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {successStories.map((story, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col bg-white bg-opacity-5 rounded-lg shadow-md p-6 text-center space-y-4"
                                >
                                    <FaAward size={30} className="text-teal-400 mx-auto" />
                                    <h3 className="text-lg font-bold text-white">{story.title}</h3>
                                    <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                                        {story.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Call-to-Action Button */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center mt-16"
                >
                    <Link
                        href="/pages/honrarydoctorate"
                        className="flex items-center gap-2 bg-teal-400 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-full transition-all"
                    >
                        Apply for Honorary Doctorate Degree <FaArrowRight size={20} />
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}

// Success Stories Data
const successStories = [
    {
        title: "Dr. Emily Carter",
        description:
            "Recognized for her groundbreaking research in renewable energy, Dr. Carter has inspired countless students and professionals to pursue sustainable solutions.",
    },
    {
        title: "Mr. Ahmed Khan",
        description:
            "An entrepreneur and philanthropist, Mr. Khan's innovative startups have transformed industries and improved lives across multiple continents.",
    },
    {
        title: "Prof. Maria Gonzalez",
        description:
            "A pioneer in AI ethics, Prof. Gonzalez's work ensures that technology is developed responsibly and inclusively, benefiting humanity as a whole.",
    },
];