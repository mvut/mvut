'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaFire, FaBookReader, FaCalendarAlt, FaUser, FaQuoteLeft, FaQuoteRight, FaChalkboardTeacher } from 'react-icons/fa';
import { Poppins } from 'next/font/google';

// Load Google Font
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

// Dummy Data
const newArticles = [
    { title: 'AI in 2024: Trends and Predictions', author: 'Dr. John Doe', rating: 4.8 },
    { title: 'Blockchain Beyond Cryptocurrency', author: 'Dr. Jane Smith', rating: 4.7 },
    { title: 'Quantum Computing: The Future of Tech', author: 'Dr. Alice Johnson', rating: 4.9 },
];

const trendingArticles = [
    { title: 'The Rise of Edge Computing', author: 'Dr. Michael Brown', rating: 4.8 },
    { title: 'Cybersecurity in the Age of AI', author: 'Dr. Emily White', rating: 4.6 },
    { title: 'Sustainable Tech: Green Computing', author: 'Dr. David Green', rating: 4.7 },
];

export default function BlogPage() {
    return (
        <div className={`min-h-screen bg-gradient-to-br from-blue-900 via-green-800 to-blue-700 text-white ${poppins.className}`}>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Main Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-16 py-20"
            >
                {/* Hero Section */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-16"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight"
                    >
                        Welcome to Our Knowledge Hub
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl mt-6 text-gray-200 leading-relaxed max-w-3xl mx-auto"
                    >
                        Explore cutting-edge articles, tutorials, and insights on AI, blockchain, and sustainable tech.
                    </motion.p>
                </motion.div>

                {/* New Articles Section */}
                <motion.div
                    variants={itemVariants}
                    className="mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">New Articles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newArticles.map((article, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-white">{article.title}</h3>
                                <p className="text-sm text-gray-400 mt-2">By {article.author}</p>
                                <div className="flex items-center gap-2 mt-4">
                                    <FaStar className="text-yellow-500" />
                                    <span className="text-sm text-gray-400">{article.rating}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Trending Articles Section */}
                <motion.div
                    variants={itemVariants}
                    className="mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Trending Articles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trendingArticles.map((article, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <FaFire className="text-red-500" />
                                    <span className="text-sm text-gray-400">Trending</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">{article.title}</h3>
                                <p className="text-sm text-gray-400 mt-2">By {article.author}</p>
                                <div className="flex items-center gap-2 mt-4">
                                    <FaStar className="text-yellow-500" />
                                    <span className="text-sm text-gray-400">{article.rating}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action Section */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-md p-8 text-center"
                >
                    <FaChalkboardTeacher size={50} className="text-green-400 mx-auto mb-6" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Start Learning Today
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Dive into our tutorials and courses to expand your knowledge and skills.
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300">
                        Explore Now →
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
}