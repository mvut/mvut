'use client';
// HeroSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 relative flex items-center justify-center overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 text-center px-4"
            >
                {/* Mission Statement */}
                <h1
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    Empowering People with AI
                </h1>
                <p
                    className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                    Harness the power of Artificial Intelligence to drive innovation, solve real-world problems, and create meaningful impact. Join us on this transformative journey, today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href={'/pages/services'} className="flex items-center bg-white text-indigo-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300">
                        Explore More
                        <FaArrowRight className="ml-2 text-lg" />
                    </Link>
                    <Link href={'/pages/apply'} className="flex items-center bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-indigo-900 transition-all duration-300">
                        Apply Now
                    </Link>
                </div>
            </motion.div>

            {/* Shimmer Effect */}
            <motion.div
                className="absolute inset-0 bg-white/10 blur-[120px] animate-shimmer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ repeat: Infinity, duration: 3 }}
            ></motion.div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-24 h-24 bg-indigo-500 rounded-full blur-md"
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
        </section>
    );
};

export default HeroSection;