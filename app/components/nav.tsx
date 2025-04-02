'use client';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaLightbulb, FaRocket, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';
import { Playfair_Display, Poppins } from 'next/font/google';
import React, { useEffect, useState } from 'react';

// Google Fonts
const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-playfair',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
    variable: '--font-poppins',
});

interface Feature {
    icon: React.ReactNode;
    text: string;
}

const HeroSection = () => {
    // Animation Variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 0.77, 0.47, 0.97],
            },
        },
    };

    const floating = {
        initial: { y: 0 },
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    // Floating Circles Data (Generated Client-Side)
    const [floatingCircles, setFloatingCircles] = useState<
        { width: number; height: number; left: number; top: number }[]
    >([]);

    useEffect(() => {
        // Generate stable random values after component mounts
        const circles = [...Array(8)].map(() => ({
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: Math.random() * 100,
            top: Math.random() * 100,
        }));
        setFloatingCircles(circles);
    }, []);

    const features: Feature[] = [
        { icon: <FaChartLine className="text-blue-400" />, text: "Data Science" },
        { icon: <FaLightbulb className="text-yellow-400" />, text: "Machine Learning" },
        { icon: <FaRocket className="text-purple-400" />, text: "AI Research" },
        { icon: <FaShieldAlt className="text-green-400" />, text: "Ethical AI" },
    ];

    return (
        <section
            className={`min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black ${playfair.variable} ${poppins.variable}`}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Circles */}
                {floatingCircles.map((circle, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-red-500/10"
                        style={{
                            width: `${circle.width}px`,
                            height: `${circle.height}px`,
                            left: `${circle.left}%`,
                            top: `${circle.top}%`,
                        }}
                        animate={{
                            x: [0, (Math.random() - 0.5) * 100],
                            y: [0, (Math.random() - 0.5) * 100],
                            opacity: [0.05, 0.2, 0.05],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full px-6 py-20"
            >
                <div className="max-w-6xl mx-auto text-center">
                    {/* Title */}
                    <motion.div variants={item} className="mb-8">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400 font-playfair">
                                MVIT AI
                            </span>
                        </h1>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300 font-playfair">
                            Innovation <span className="text-red-400">Lab</span>
                        </h2>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        variants={item}
                        className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-poppins font-light"
                    >
                        Pioneering the future of artificial intelligence through cutting-edge research and transformative
                        education
                    </motion.p>

                    {/* Features */}
                    <motion.div variants={container} className="flex flex-wrap justify-center gap-3 mb-12">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={item}
                                whileHover={{ y: -5 }}
                                className="flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 shadow-sm hover:shadow-md transition-all"
                            >
                                {feature.icon}
                                <span className="ml-2 text-gray-300 font-medium font-poppins">{feature.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Buttons */}
                    <motion.div variants={container} className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.div variants={item}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative overflow-hidden rounded-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-amber-500 rounded-xl" />
                                <Link
                                    href="/pages/study"
                                    className="relative flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 transition-colors font-poppins"
                                >
                                    Explore Programs
                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <FaArrowRight />
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={item}>
                            <Link
                                href="/pages/apply"
                                className="flex items-center justify-center gap-2 border-2 border-gray-700 text-gray-300 font-semibold px-8 py-4 rounded-xl hover:bg-gray-700 hover:border-gray-500 transition-all font-poppins"
                            >
                                Apply Now
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Badge */}
                    <motion.div variants={item} className="mt-12">
                        <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm px-5 py-2 rounded-full border border-gray-700 shadow-sm">
                            <div className="w-2 h-2 mr-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span className="text-gray-300 font-medium font-poppins">
                                #1 Ranked AI Program in the Region
                            </span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating AI Elements */}
            <motion.div
                variants={floating}
                initial="initial"
                animate="animate"
                className="absolute left-10 bottom-20 hidden lg:block"
            >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-900 to-gray-900 border border-red-700 shadow-lg flex items-center justify-center">
                    <FaChartLine className="text-red-400 text-2xl" />
                </div>
            </motion.div>

            <motion.div
                variants={floating}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 }}
                className="absolute right-10 top-1/4 hidden lg:block"
            >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-900 to-gray-900 border border-purple-700 shadow-lg flex items-center justify-center">
                    <FaLightbulb className="text-purple-400 text-2xl" />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;