'use client';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaLightbulb, FaRocket, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HeroSection = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // or return a loading state that matches your layout
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-black via-red-900 to-red-950 relative flex items-center justify-center overflow-hidden">
            {/* Blood cell animation - now only renders on client */}
            {isMounted && (
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-red-900/20"
                            style={{
                                width: Math.random() * 200 + 100,
                                height: Math.random() * 200 + 100,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                x: [0, (Math.random() - 0.5) * 200],
                                y: [0, (Math.random() - 0.5) * 200],
                                opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Glowing center orb */}
            {isMounted && (
                <div className="absolute w-64 h-64 rounded-full bg-red-600/20 blur-3xl animate-pulse" />
            )}

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 text-center px-4 max-w-6xl"
            >
                {/* Animated title */}
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        textShadow: '0 0 10px rgba(239, 68, 68, 0.7)'
                    }}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                        Empowering People with AI
                    </span>
                </motion.h1>

                {/* Mission statement with animated border */}
                <motion.div
                    className="relative p-8 mb-8 rounded-xl border border-red-900/50 bg-black/30 backdrop-blur-sm"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-red-600/30 to-transparent blur-sm" />
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                        Harness the power of Artificial Intelligence to drive innovation, solve real-world problems, and create meaningful impact. Join us on this transformative journey, today.
                    </p>
                </motion.div>

                {/* Feature badges */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {[
                        { icon: <FaChartLine />, text: "Data-Driven Insights" },
                        { icon: <FaLightbulb />, text: "Innovative Methods" },
                        { icon: <FaRocket />, text: "Rapid Implementation" },
                        { icon: <FaShieldAlt />, text: "Secure Platform" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-red-900/30 rounded-full border border-red-800/50">
                            <span className="text-red-400">{item.icon}</span>
                            <span className="text-white font-medium">{item.text}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Action buttons with hover effects */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <Link
                        href="/pages/study"
                        className="relative group flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10">Explore Studies</span>
                        <FaArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>

                    <Link
                        href="/pages/apply"
                        className="relative group flex items-center gap-2 bg-transparent border-2 border-red-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-900/30 transition-all duration-300"
                    >
                        <span className="relative z-10">Online Application</span>
                        <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/20 transition-all duration-300" />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Floating certification badges - now only renders on client */}
            {isMounted && (
                <>
                    <motion.div
                        className="absolute top-1/4 left-10 w-16 h-16 bg-red-900/30 rounded-lg border border-red-800/50 flex items-center justify-center"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        <FaShieldAlt className="text-red-400 text-2xl" />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-1/4 right-10 w-16 h-16 bg-red-900/30 rounded-lg border border-red-800/50 flex items-center justify-center"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    >
                        <FaChartLine className="text-red-400 text-2xl" />
                    </motion.div>
                </>
            )}
        </section>
    );
};

export default HeroSection;