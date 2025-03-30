'use client';
import ABSI from '@/public/resources/partners/absi.png';
import MIKES from '@/public/resources/partners/mikesint.png';
import Image from "next/image";
import Link from "next/link";
import { SiMicrostrategy, SiMicrosoft, SiGooglecloud } from "react-icons/si";
import { TfiSharethis } from "react-icons/tfi";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { useState, useEffect } from 'react';

// Load Google Font
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function StrategicPartners() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            },
        },
    };

    const hoverVariants = {
        hover: {
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    // Generate stable random values for floating orbs
    const getStableOrbValues = (i: number) => {
        // Use a seeded random approach based on the index
        const seed = i * 12345;
        const random = (min: number, max: number) => {
            const x = Math.sin(seed) * 10000;
            return min + (x - Math.floor(x)) * (max - min);
        };

        return {
            width: random(100, 400),
            height: random(100, 400),
            left: random(0, 100),
            top: random(0, 100),
            x: [0, random(-50, 50)],
            y: [0, random(-50, 50)],
            opacity: [0.1, random(0.2, 0.4), 0.1],
            duration: random(10, 25)
        };
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className={`w-full py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ${montserrat.className} relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat"></div>
            </div>

            {/* Floating Orbs - using stable random values */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => {
                    const { width, height, left, top, x, y, opacity, duration } = getStableOrbValues(i);

                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20"
                            style={{
                                width: `${width}px`,
                                height: `${height}px`,
                                left: `${left}%`,
                                top: `${top}%`,
                            }}
                            animate={{
                                x,
                                y,
                                opacity,
                            }}
                            transition={{
                                duration,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        />
                    );
                })}
            </div>

            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-center justify-center text-white text-center px-4 relative z-10"
            >
                <div className="p-4 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full shadow-lg mb-6">
                    <TfiSharethis size={40} className="text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-400">
                    Our Strategic Partners
                </h1>
                <p className="text-lg text-gray-300 max-w-3xl mt-6 leading-relaxed">
                    We collaborate with industry leaders and innovators to drive transformative solutions and create lasting impact across global markets.
                </p>
            </motion.div>

            {/* Partner Logos and Descriptions */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 mt-16 max-w-7xl mx-auto relative z-10"
            >
                {/* MIKES International */}
                <motion.div variants={itemVariants}>
                    <Link href="https://www.mikeversity.com/" target="_blank">
                        <motion.div
                            className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden flex flex-col p-8 border border-gray-700 hover:border-teal-400 transition-all duration-300"
                            whileHover="hover"
                            variants={hoverVariants}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="flex justify-center">
                                <Image
                                    src={MIKES}
                                    alt="MIKES International"
                                    width={180}
                                    height={100}
                                    className="h-24 w-auto object-contain"
                                    priority
                                />
                            </div>
                            <h2 className="text-2xl font-semibold text-white mt-8 text-center">MIKES International</h2>
                            <p className="text-gray-300 mt-4 text-center">
                                Global education leader delivering transformative learning experiences.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    "Global accreditation programs",
                                    "Industry-aligned curriculum",
                                    "Cutting-edge research initiatives",
                                    "Professional development"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start text-gray-300">
                                        <span className="text-teal-400 mr-2">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-gray-700 flex justify-center">
                                <span className="text-teal-400 text-sm font-medium">Explore Partnership →</span>
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>

                {/* ASB International */}
                <motion.div variants={itemVariants}>
                    <Link href="https://absi.com.pk/" target="_blank">
                        <motion.div
                            className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden flex flex-col p-8 border border-gray-700 hover:border-purple-400 transition-all duration-300"
                            whileHover="hover"
                            variants={hoverVariants}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="flex justify-center">
                                <Image
                                    src={ABSI}
                                    alt="ASB International"
                                    width={180}
                                    height={100}
                                    className="h-24 w-auto object-contain"
                                    priority
                                />
                            </div>
                            <h2 className="text-2xl font-semibold text-white mt-8 text-center">ASB International</h2>
                            <p className="text-gray-300 mt-4 text-center">
                                Business solutions pioneer driving strategic growth.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    "Strategic business consulting",
                                    "Market expansion services",
                                    "Global partnership networks",
                                    "Investment opportunities"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start text-gray-300">
                                        <span className="text-purple-400 mr-2">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-gray-700 flex justify-center">
                                <span className="text-purple-400 text-sm font-medium">Explore Partnership →</span>
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Tech Innovators */}
                <motion.div variants={itemVariants}>
                    <Link href="#" target="_blank">
                        <motion.div
                            className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden flex flex-col p-8 border border-gray-700 hover:border-teal-400 transition-all duration-300"
                            whileHover="hover"
                            variants={hoverVariants}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="flex justify-center gap-6">
                                <SiMicrostrategy size={50} className="text-teal-400" />
                                <SiMicrosoft size={50} className="text-blue-400" />
                                <SiGooglecloud size={50} className="text-red-400" />
                            </div>
                            <h2 className="text-2xl font-semibold text-white mt-8 text-center">Tech Innovators Alliance</h2>
                            <p className="text-gray-300 mt-4 text-center">
                                Consortium of technology leaders driving digital transformation.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    "AI & machine learning solutions",
                                    "Cloud computing platforms",
                                    "Cybersecurity innovations",
                                    "Digital transformation consulting"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start text-gray-300">
                                        <span className="text-teal-400 mr-2">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-gray-700 flex justify-center">
                                <span className="text-teal-400 text-sm font-medium">Explore Partnership →</span>
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-20 text-center px-4 relative z-10 max-w-4xl mx-auto"
            >
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl">
                    <h3 className="text-2xl font-bold text-white mb-4">Become a Strategic Partner</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Join our network of industry leaders and benefit from exclusive collaboration opportunities, shared resources, and mutual growth.
                    </p>
                    <Link
                        href="#"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                        Contact Our Partnership Team
                        <TfiSharethis className="ml-2" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}