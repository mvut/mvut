'use client'
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaStar,
    FaRegStar,
    FaShareAlt,
    FaBookmark,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaRegClock,
    FaUserTie,
    FaArrowRight
} from 'react-icons/fa';
import { Poppins } from 'next/font/google';
import Image from 'next/image';

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
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5
        }
    },
};

// Article Data
const featuredArticles = [
    {
        id: 1,
        title: 'The Future of Digital Banking in 2024',
        excerpt: 'How blockchain and AI are revolutionizing traditional banking systems.',
        author: 'Dr. Sarah Johnson',
        rating: 4.9,
        readTime: '8 min read',
        date: 'May 15, 2024',
        category: 'Banking',
        image: '/articles/banking-future.jpg',
        link: '#'
    },
    {
        id: 2,
        title: 'Cryptocurrency Market Trends Analysis',
        excerpt: 'In-depth analysis of emerging trends in crypto markets.',
        author: 'Michael Chen',
        rating: 4.8,
        readTime: '12 min read',
        date: 'May 10, 2024',
        category: 'Investing',
        image: '/articles/crypto-trends.jpg',
        link: '#'
    },
];

const tutorialsData = [
    {
        id: 1,
        title: 'Introduction to Blockchain Technology',
        excerpt: 'A beginner-friendly guide to understanding blockchain fundamentals.',
        author: 'John Doe',
        rating: 4.7,
        readTime: '10 min read',
        date: 'May 12, 2024',
        category: 'Tutorial',
        image: '/tutorials/blockchain-intro.jpg',
        link: '#'
    },
    {
        id: 2,
        title: 'Mastering Python for Financial Analysis',
        excerpt: 'Learn how to use Python for advanced financial data analysis.',
        author: 'Jane Smith',
        rating: 4.6,
        readTime: '15 min read',
        date: 'May 8, 2024',
        category: 'Tutorial',
        image: '/tutorials/python-finance.jpg',
        link: '#'
    },
    {
        id: 3,
        title: 'Building Your First Investment Portfolio',
        excerpt: 'Step-by-step instructions to create a diversified investment portfolio.',
        author: 'Emily Carter',
        rating: 4.5,
        readTime: '12 min read',
        date: 'May 5, 2024',
        category: 'Tutorial',
        image: '/tutorials/portfolio-building.jpg',
        link: '#'
    },
];

const blogsData = [
    {
        id: 1,
        title: 'The Psychology of Investing',
        excerpt: 'Exploring the mental aspects of successful long-term investing.',
        author: 'Robert Brown',
        rating: 4.8,
        readTime: '8 min read',
        date: 'May 20, 2024',
        category: 'Blog',
        image: '/blogs/investing-psychology.jpg',
        link: '#'
    },
    {
        id: 2,
        title: 'Top 5 Mistakes New Investors Make',
        excerpt: 'Avoid these common pitfalls when starting your investment journey.',
        author: 'Laura Wilson',
        rating: 4.7,
        readTime: '10 min read',
        date: 'May 18, 2024',
        category: 'Blog',
        image: '/blogs/investor-mistakes.jpg',
        link: '#'
    },
    {
        id: 3,
        title: 'How to Stay Updated on Market Trends',
        excerpt: 'Tips and tools to keep track of the latest financial news.',
        author: 'Mark Taylor',
        rating: 4.6,
        readTime: '9 min read',
        date: 'May 15, 2024',
        category: 'Blog',
        image: '/blogs/market-trends.jpg',
        link: '#'
    },
];

const researchArticlesData = [
    {
        id: 1,
        title: 'Impact of ESG on Investment Returns',
        excerpt: 'Analyzing the correlation between ESG factors and portfolio performance.',
        author: 'Dr. Emily Green',
        rating: 4.9,
        readTime: '14 min read',
        date: 'May 22, 2024',
        category: 'Research',
        image: '/research/esg-returns.jpg',
        link: '#'
    },
    {
        id: 2,
        title: 'AI in Financial Forecasting',
        excerpt: 'How machine learning models are improving market predictions.',
        author: 'Dr. Michael Lee',
        rating: 4.8,
        readTime: '16 min read',
        date: 'May 20, 2024',
        category: 'Research',
        image: '/research/ai-forecasting.jpg',
        link: '#'
    },
    {
        id: 3,
        title: 'Global Economic Outlook 2024',
        excerpt: 'A comprehensive report on the global economic landscape for the year ahead.',
        author: 'Dr. Sarah Adams',
        rating: 4.7,
        readTime: '20 min read',
        date: 'May 18, 2024',
        category: 'Research',
        image: '/research/global-outlook.jpg',
        link: '#'
    },
];

const ArticleCard = ({ article }: { article: typeof featuredArticles[0] }) => {
    const fullStars = Math.floor(article.rating);
    const hasHalfStar = article.rating % 1 >= 0.5;

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700 hover:border-teal-400/50 group"
        >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Image with overlay */}
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />

                {/* Category badge */}
                <span className="absolute top-4 left-4 text-xs font-semibold bg-gradient-to-r from-teal-500 to-blue-600 text-white px-3 py-1.5 rounded-full shadow-md z-10">
                    {article.category}
                </span>

                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <button className="p-2.5 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/20">
                        <FaBookmark className="text-gray-300 hover:text-white" size={14} />
                    </button>
                    <button className="p-2.5 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                        <FaShareAlt className="text-gray-300 hover:text-white" size={14} />
                    </button>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">{article.title}</h3>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            {[...Array(fullStars)].map((_, i) => (
                                <FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />
                            ))}
                            {hasHalfStar && <FaRegStar className="text-yellow-400 text-sm" />}
                            <span className="text-xs ml-1 text-gray-300">{article.rating}</span>
                        </div>
                        <span className="text-gray-400 text-xs">•</span>
                        <div className="flex items-center gap-1 text-xs text-gray-300">
                            <FaRegClock size={10} />
                            <span>{article.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <p className="text-gray-300 text-sm mb-5 line-clamp-2">{article.excerpt}</p>

                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                            {article.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">{article.author}</p>
                            <p className="text-xs text-gray-400">{article.date}</p>
                        </div>
                    </div>
                    <a
                        href={article.link}
                        className="flex items-center gap-1.5 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors group/readmore"
                    >
                        Read more
                        <span className="group-hover/readmore:translate-x-1 transition-transform duration-200">
                            <FaArrowRight size={12} />
                        </span>
                    </a>
                </div>

                {/* Social sharing */}
                <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                    <button className="text-gray-400 hover:text-blue-500 transition-colors p-1.5 rounded-full hover:bg-gray-800">
                        <FaLinkedin size={16} />
                    </button>
                    <button className="text-gray-400 hover:text-sky-400 transition-colors p-1.5 rounded-full hover:bg-gray-800">
                        <FaTwitter size={16} />
                    </button>
                    <button className="text-gray-400 hover:text-blue-400 transition-colors p-1.5 rounded-full hover:bg-gray-800">
                        <FaFacebook size={16} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default function ArticlesPage() {
    return (
        <div className={`min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white ${poppins.className}`}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
            >
                {/* Hero Section */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-400 leading-tight mb-4">
                        Financial Insights Hub
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Expert analysis, market trends, and investment strategies from leading financial minds
                    </p>
                </motion.div>

                {/* Featured Articles */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                            <span className="w-2 h-8 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full"></span>
                            Featured Research
                        </h2>
                        <a href="#" className="text-sm font-medium text-gray-400 hover:text-teal-300 transition-colors flex items-center gap-1">
                            View All Research <FaArrowRight size={12} />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredArticles.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </motion.div>

                {/* Tutorials Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                            <span className="w-2 h-8 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full"></span>
                            Tutorials
                        </h2>
                        <a href="#" className="text-sm font-medium text-gray-400 hover:text-teal-300 transition-colors flex items-center gap-1">
                            View All Tutorials <FaArrowRight size={12} />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tutorialsData.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </motion.div>

                {/* Blogs Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                            <span className="w-2 h-8 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full"></span>
                            Blogs
                        </h2>
                        <a href="#" className="text-sm font-medium text-gray-400 hover:text-teal-300 transition-colors flex items-center gap-1">
                            View All Blogs <FaArrowRight size={12} />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogsData.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </motion.div>

                {/* Research Articles Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                            <span className="w-2 h-8 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full"></span>
                            Research Articles
                        </h2>
                        <a href="#" className="text-sm font-medium text-gray-400 hover:text-teal-300 transition-colors flex items-center gap-1">
                            View All Research <FaArrowRight size={12} />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {researchArticlesData.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-lg border border-gray-700/50"
                >
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                            Get Weekly Financial Insights
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Subscribe to our newsletter for exclusive market analysis and investment strategies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-xl bg-gray-800/70 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent border border-gray-700"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium rounded-xl hover:from-teal-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-teal-500/20">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}