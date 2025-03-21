'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    FaRobot,
    FaDatabase,
    FaNetworkWired,
    FaDna,
    FaBrain,
    FaLock,
    FaCloud,
    FaCodeBranch,
    FaMicrochip,
    FaChartLine,
    FaLaptopCode,
    FaProjectDiagram,
    FaRegLightbulb,
    FaCube,
    FaUserGraduate,
    FaUsers,
    FaSyncAlt,
    FaServer,
    FaFilm,
    FaBookOpen,
    FaChartBar,
    FaFileAlt,
    FaAward,
} from 'react-icons/fa';
import { Montserrat } from 'next/font/google';
import { Poppins } from 'next/font/google';

// Load Google Font
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});
// Load Google Font
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

export default function ResearchPage() {
    return (
        <div className={`container flex flex-col py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 min-h-screen ${montserrat.className}`}>
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
                {/* Research Overview Section */}
                <div className="flex flex-col py-20">
                    {/* Header Section */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 text-center mb-10"
                    >
                        Research and Development (R&D)
                    </motion.h1>
                    {/* MVIT Research Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 mb-16"
                    >
                        {/* Research Description */}
                        <div
                            className="flex flex-col bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg border-t-4 border-teal-400 p-6 hover:shadow-2xl transition-all duration-300"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="bg-black/50 p-6 rounded-lg">
                                <h2 className="text-2xl font-bold text-white mb-4">MVIT Research</h2>
                                <p className="text-sm sm:text-lg text-gray-200 leading-relaxed">
                                    MVIT's research endeavors are driven by a multidisciplinary approach, focusing on cutting-edge areas such as Industry 4.0, healthcare technology, smart cities, climate change, and digital transformation. Through strategic industry partnerships, interdisciplinary collaborations, and international cooperation, MVIT produces impactful research outcomes, including publications, patents, and research grants.
                                </p>
                            </div>
                        </div>
                        {/* Research Highlights */}
                        <div className="flex flex-col gap-6">
                            {/* New Articles Section */}
                            <div className="flex flex-col bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg border-t-4 border-green-400 p-6 hover:shadow-2xl transition-all duration-300">
                                <h3 className="text-xl font-bold text-green-400 flex items-center gap-2 mb-4">
                                    <FaBookOpen /> New Research Articles
                                </h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li className="flex items-center gap-2">
                                        <FaFileAlt size={16} className="text-teal-400" />
                                        <span>AI in Education: Transforming Learning</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaFileAlt size={16} className="text-teal-400" />
                                        <span>Sustainable Technologies for Smart Cities</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaFileAlt size={16} className="text-teal-400" />
                                        <span>Blockchain Applications in Healthcare</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Research Statistics Section */}
                            <div className="flex flex-col bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg border-t-4 border-purple-400 p-6 hover:shadow-2xl transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-400 flex items-center gap-2 mb-4">
                                    <FaChartBar /> Research Statistics
                                </h3>
                                <div className="space-y-2 text-gray-200">
                                    <p className="flex items-center gap-2">
                                        <FaUsers size={16} className="text-teal-400" />
                                        <span>Active Researchers: 250+</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaFileAlt size={16} className="text-teal-400" />
                                        <span>Publications: 150+</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaChartBar size={16} className="text-teal-400" />
                                        <span>Ongoing Projects: 50+</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Emerging Technologies Section */}
                <div className={`min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-20 ${poppins.className}`}>
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
                        {/* Section Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 flex items-center justify-center gap-4 mb-12"
                        >
                            <FaChartLine size={30} />
                            Emerging Technologies
                        </motion.h2>

                        {/* Technologies Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 sm:p-10 mt-6"
                        >
                            {[
                                { name: 'Artificial Intelligence', icon: <FaRobot size={40} />, gradient: 'from-blue-400 to-green-400' },
                                { name: 'Machine Learning', icon: <FaBrain size={40} />, gradient: 'from-indigo-400 to-purple-400' },
                                { name: 'Data Science and Analytics', icon: <FaChartLine size={40} />, gradient: 'from-teal-400 to-cyan-400' },
                                { name: 'Database Systems', icon: <FaDatabase size={40} />, gradient: 'from-pink-400 to-red-400' },
                                { name: 'Computer Vision and Graphics', icon: <FaMicrochip size={40} />, gradient: 'from-yellow-400 to-orange-400' },
                                { name: 'Cryptography', icon: <FaLock size={40} />, gradient: 'from-green-400 to-lime-400' },
                                { name: 'Computer Networks and Cybersecurity', icon: <FaNetworkWired size={40} />, gradient: 'from-purple-400 to-indigo-400' },
                                { name: 'Human-Computer Interaction', icon: <FaUserGraduate size={40} />, gradient: 'from-blue-400 to-violet-400' },
                                { name: 'Distributed Systems and Cloud Computing', icon: <FaCloud size={40} />, gradient: 'from-red-400 to-pink-400' },
                                { name: 'Bioinformatics', icon: <FaDna size={40} />, gradient: 'from-orange-400 to-yellow-400' },
                                { name: 'Quantum Computing', icon: <FaCube size={40} />, gradient: 'from-teal-400 to-emerald-400' },
                                { name: 'Blockchain', icon: <FaCodeBranch size={40} />, gradient: 'from-cyan-400 to-sky-400' },
                                { name: 'Internet of Things', icon: <FaSyncAlt size={40} />, gradient: 'from-lime-400 to-green-400' },
                                { name: 'Computer Science Education', icon: <FaLaptopCode size={40} />, gradient: 'from-violet-400 to-fuchsia-400' },
                                { name: 'Social Computing', icon: <FaUsers size={40} />, gradient: 'from-pink-400 to-rose-400' },
                                { name: 'Software Project Management', icon: <FaProjectDiagram size={40} />, gradient: 'from-yellow-400 to-amber-400' },
                                { name: 'Agile Development', icon: <FaRegLightbulb size={40} />, gradient: 'from-indigo-400 to-blue-400' },
                                { name: 'Cloud Computing', icon: <FaServer size={40} />, gradient: 'from-green-400 to-teal-400' },
                                { name: 'Animation', icon: <FaFilm size={40} />, gradient: 'from-purple-400 to-pink-400' },
                            ].map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {/* Icon */}
                                    <div
                                        className={`text-4xl text-white mb-4 p-4 rounded-full shadow-md`}
                                        style={{
                                            background: `linear-gradient(to right, ${tech.gradient})`,
                                        }}
                                    >
                                        {tech.icon}
                                    </div>
                                    {/* Technology Name */}
                                    <h3 className="text-lg sm:text-xl font-semibold text-white text-center">
                                        {tech.name}
                                    </h3>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Awards and Recognition Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center"
                >
                    <FaAward size={50} className="text-teal-400 mx-auto mb-6" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Awards and Recognition</h2>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                        Our researchers and projects have been recognized globally for their contributions to science and technology. From prestigious awards to groundbreaking innovations, MVIT continues to lead in impactful research.
                    </p>
                </motion.div>

                {/* Future Initiatives Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center"
                >
                    <FaRegLightbulb size={50} className="text-teal-400 mx-auto mb-6" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Future Initiatives</h2>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                        We are committed to expanding our research horizons. Upcoming initiatives include advanced AI labs, global research collaborations, and sustainable innovation hubs to address tomorrow's challenges.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}