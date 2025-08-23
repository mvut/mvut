"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaRocket, FaArrowRight } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function ProgramsIntro() {
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className={`${roboto.className} py-20 relative overflow-hidden min-h-screen flex items-center`}>
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0000] to-[#2d0000] animate-gradient-xy z-0"></div>

            {/* Animated particles */}
            <div className="absolute inset-0 z-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-red-600 rounded-full opacity-30"
                        initial={{
                            x: Math.random() * 100 + 'vw',
                            y: Math.random() * 100 + 'vh'
                        }}
                        animate={{
                            x: [null, Math.random() * 100 + 'vw'],
                            y: [null, Math.random() * 100 + 'vh']
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <motion.span
                        className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-red-400 bg-red-950/50 rounded-full border border-red-800/30"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Admissions Open
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Transform Your Future at <span className="text-red-500">MVIT</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-8"></div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-gray-300 max-w-3xl mx-auto"
                    >
                        Our <span className="font-semibold text-red-400">trending programs</span> are designed to build successful Careers and meet the <span className="font-semibold text-red-400">high industry demand</span> in AI, Cloud, Robotics, and STEM Education.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* MCASCE Program */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.7 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:shadow-red-900/20 border border-gray-800 hover:border-red-800/30 transition-all duration-300"
                    >
                        <div className="p-8 text-left flex flex-col h-full">
                            <div className="flex items-center mb-6">
                                <motion.div
                                    className="p-3 bg-red-900/30 rounded-xl mr-4 group-hover:bg-red-900/50 transition-colors border border-red-800/20"
                                    whileHover={{ rotate: 5 }}
                                >
                                    <FaGraduationCap className="text-red-500 text-3xl" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white">
                                    MCASCE Certification
                                </h3>
                            </div>

                            <p className="text-gray-300 mb-6 flex-grow">
                                Offered by <span className="font-bold text-red-400">MVIT</span>, the Mansha
                                Certified Autonomous Systems and Cloud Engineer (MCASCE)
                                Certification prepares you for high-impact roles in AI, Cloud &
                                Autonomous Systems. This program is highly sought after by global
                                industries for skilled professionals.
                            </p>

                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-red-400 bg-red-900/30 px-3 py-1 rounded-full border border-red-800/20">
                                    High Industry Demand
                                </span>
                                <Link
                                    href="/pages/apply"
                                    className="inline-flex items-center bg-gradient-to-r from-red-700 to-red-900 text-white px-5 py-3 rounded-xl shadow-lg hover:shadow-red-900/30 transition-all group-hover:gap-2 gap-1 border border-red-700/30"
                                >
                                    Apply Now <FaArrowRight className="text-sm" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Kindergarten STEM Entrepreneurs */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.9 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:shadow-red-900/20 border border-gray-800 hover:border-red-800/30 transition-all duration-300"
                    >
                        <div className="p-8 text-left flex flex-col h-full">
                            <div className="flex items-center mb-6">
                                <motion.div
                                    className="p-3 bg-red-900/30 rounded-xl mr-4 group-hover:bg-red-900/50 transition-colors border border-red-800/20"
                                    whileHover={{ rotate: 5 }}
                                >
                                    <MdScience className="text-red-500 text-3xl" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white">
                                    Kindergarten STEM Entrepreneurs
                                </h3>
                            </div>

                            <p className="text-gray-300 mb-6 flex-grow">
                                A project of <span className="font-bold text-red-400">USAI</span>, powered by
                                MVIT. Designed to introduce young minds to Science, Technology,
                                Engineering, Mathematics, and Entrepreneurship through fun &
                                creativity. This initiative is shaping the next generation of
                                innovators who are in demand for tomorrow&apos;s economy.
                            </p>

                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-red-400 bg-red-900/30 px-3 py-1 rounded-full border border-red-800/20">
                                    Future Innovators
                                </span>
                                <Link
                                    href="/usai/apply"
                                    className="inline-flex items-center bg-gradient-to-r from-red-700 to-red-900 text-white px-5 py-3 rounded-xl shadow-lg hover:shadow-red-900/30 transition-all group-hover:gap-2 gap-1 border border-red-700/30"
                                >
                                    Apply Now <FaArrowRight className="text-sm" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-16 pt-8 border-t border-gray-800"
                >
                    <p className="text-gray-400 mb-4">Have questions about our programs?</p>
                    <Link
                        href="/pages/study"
                        className="inline-flex items-center text-red-400 font-semibold hover:text-red-300 transition-colors"
                    >
                        Explore Career Growth Opportunities <FaArrowRight className="ml-2 text-sm" />
                    </Link>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes gradient-xy {
                    0%, 100% {
                        background-position: 0% 50%;
                        background-size: 200% 200%;
                    }
                    50% {
                        background-position: 100% 50%;
                        background-size: 200% 200%;
                    }
                }
                .animate-gradient-xy {
                    animation: gradient-xy 15s ease infinite;
                }
            `}</style>
        </section>
    );
}