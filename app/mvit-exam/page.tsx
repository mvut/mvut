'use client';
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    FaGraduationCap,
    FaBook,
    FaLaptopCode,
    FaUserPlus,
    FaClipboardList,
    FaPollH,
} from "react-icons/fa";

type Props = {};

const MVITHomePage: React.FC<Props> = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="min-h-screen py-16 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white font-sans relative overflow-hidden"
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Container */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400"
                    >
                        Welcome to Quality Assurance Cell (QAC)
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl font-medium text-gray-200 max-w-3xl mx-auto"
                    >
                        Empowering students with comprehensive study programs, seamless test-taking, and instant result access.
                    </motion.p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                    <Link href="/mvit-exam/enrollment">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-md flex items-center gap-2 transition-all"
                        >
                            <FaUserPlus className="text-xl" /> Enroll Now
                        </motion.button>
                    </Link>
                    <Link href="/mvit-exam/take-test">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md flex items-center gap-2 transition-all"
                        >
                            <FaClipboardList className="text-xl" /> Take Test
                        </motion.button>
                    </Link>
                    <Link href="/results">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-md flex items-center gap-2 transition-all"
                        >
                            <FaPollH className="text-xl" /> View Results
                        </motion.button>
                    </Link>
                </div>

                {/* Study Programs Section */}
                <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                    Our Study Programs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
                    >
                        <FaGraduationCap className="text-5xl text-teal-400 mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold text-center mb-2 text-white">Academic Excellence</h3>
                        <p className="text-gray-200 text-center">
                            Strong foundation in core subjects to prepare you for success.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
                    >
                        <FaBook className="text-5xl text-blue-400 mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold text-center mb-2 text-white">Comprehensive Curriculum</h3>
                        <p className="text-gray-200 text-center">
                            Covering all essential topics for thorough preparation.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
                    >
                        <FaLaptopCode className="text-5xl text-pink-400 mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold text-center mb-2 text-white">Interactive Learning</h3>
                        <p className="text-gray-200 text-center">
                            Engage with interactive modules and hands-on exercises.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-24 h-24 bg-teal-500 rounded-full blur-md"
                initial={{ x: -100, y: -100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-pink-500 rounded-full blur-md"
                initial={{ x: 100, y: 100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
        </motion.section>
    );
};

export default MVITHomePage;