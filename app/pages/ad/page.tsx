'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaGraduationCap } from 'react-icons/fa';
import { Poppins, Montserrat } from 'next/font/google';

// Fonts
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700', '800'],
    variable: '--font-poppins'
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-montserrat'
});

// Interfaces
interface Slide {
    title: string;
    subtitle: string;
    icon: JSX.Element;
    image: string;
    ctaText: string;
    ctaLink: string;
}

// Slide Data
const slides: Slide[] = [
    {
        title: "Code Your Future",
        subtitle: "Master cutting-edge programming skills with our intensive software development programs.",
        icon: <FaCode className="text-6xl text-indigo-300" />,
        image: "/images/coding-workshop.jpg",
        ctaText: "Join Now",
        ctaLink: "/programs/coding"
    },
    {
        title: "Launch Your Career",
        subtitle: "Gain real-world experience through hands-on projects and industry mentorship.",
        icon: <FaRocket className="text-6xl text-indigo-300" />,
        image: "/images/project-work.jpg",
        ctaText: "Explore Programs",
        ctaLink: "/programs"
    },
    {
        title: "Build Your Network",
        subtitle: "Connect with tech leaders and peers in our vibrant community of innovators.",
        icon: <FaUsers className="text-6xl text-indigo-300" />,
        image: "/images/tech-community.jpg",
        ctaText: "Get Involved",
        ctaLink: "/community"
    },
    {
        title: "Earn Your Credentials",
        subtitle: "Graduate with industry-recognized certifications and a robust portfolio.",
        icon: <FaGraduationCap className="text-6xl text-indigo-300" />,
        image: "/images/graduation.jpg",
        ctaText: "Enroll Today",
        ctaLink: "/apply"
    }
];

// Animation Variants
const slideVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5, ease: "easeIn" } }
};

const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } }
};

const ProgramsPromo: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={`min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white ${montserrat.className} relative overflow-hidden`}>
            {/* Background Effect */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/20 via-purple-300/10 to-transparent opacity-50"></div>
                <div className="absolute top-1/5 left-1/3 w-72 h-72 bg-indigo-400 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/5 w-88 h-88 bg-purple-300 rounded-full filter blur-3xl opacity-25 animate-pulse delay-500"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwSDYwVjYwSDBaIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1IDNDMTUuNjY3OCAzIDE2IDMuMzMyMiAxNiA0QzE2IDQuNjY3OCAxNS42Njc4IDUgMTUgNUMxNC4zMzIyIDUgMTQgNC42Njc4IDE0IDRDMTQgMy4zMzIyIDE0LjMzMjIgMyAxNSAzeiIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTQ1IDNDNDUuNjY3OCAzIDQ2IDMuMzMyMiA0NiA0QzQ2IDQuNjY3OCA0NS42Njc4IDUgNDUgNUM0NC4zMzIyIDUgNDQgNC42Njc4IDQ0IDRDNDQgMy4zMzIyIDQ0LjMzMjIgMyA0NSAzeiIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTE1IDUzQzE1LjY2NzggNTMgMTYgNTMuMzMyMiAxNiA1NEMxNiA1NC42Njc4IDE1LjY2NzggNTUgMTUgNTVDMTQuMzMyMiA1NSA0NCA1NC42Njc4IDQ0IDU0QzQ0IDUzLjMzMjIgMTQuMzMyMiA1MyAxNSA1M3oiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik00NSA1M0M0NS42Njc4IDUzIDQ2IDUzLjMzMjIgNDYgNTNDNDYgNTQuNjY3OCA0NS42Njc4IDU1IDQ1IDU1QzQ0LjMzMjIgNTUgNDQgNTQuNjY3OCA0NCA1NEM0NCA1My4zMzIyIDQ0LjMzMjIgNTMgNDUgNTN6IiBmaWxsPSIjRkZGRkZGRiIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-200/15 to-transparent animate-shine"></div>
            </div>

            {/* Hero Slider Section */}
            <section className="relative min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            variants={slideVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="relative flex flex-col md:flex-row items-center justify-between"
                        >
                            {/* Text Content */}
                            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                                <motion.div
                                    variants={textVariants}
                                    className="mb-6 flex justify-center md:justify-start"
                                >
                                    {slides[currentSlide].icon}
                                </motion.div>
                                <motion.h1
                                    variants={textVariants}
                                    className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 ${poppins.className}`}
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-indigo-400">
                                        {slides[currentSlide].title}
                                    </span>
                                </motion.h1>
                                <motion.p
                                    variants={textVariants}
                                    className="text-lg md:text-xl text-gray-100 mb-8 max-w-md mx-auto md:mx-0"
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.p>
                                <motion.div
                                    variants={textVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={slides[currentSlide].ctaLink}
                                        className={`inline-block px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-indigo-300 hover:to-purple-400 text-gray-900 font-bold rounded-full text-lg shadow-lg shadow-indigo-400/30 hover:shadow-indigo-400/50 ${poppins.className}`}
                                    >
                                        {slides[currentSlide].ctaText}
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Image Content */}
                            <motion.div
                                variants={slideVariants}
                                className="md:w-1/2 relative"
                            >
                                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border-2 border-indigo-300/50 shadow-xl">
                                    <Image
                                        src={slides[currentSlide].image}
                                        alt={slides[currentSlide].title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
};

export default ProgramsPromo;