'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaBookOpen, FaSearch, FaStar, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Montserrat } from 'next/font/google';

// Load Google Font
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

// Magazine Articles Data (Enhanced)
const articles = [
    {
        id: 1,
        title: 'The Future of AI in Education',
        author: {
            name: 'Dr. Arshad Iqbal',
            bio: 'AI Researcher and Educator with over 15 years of experience.',
            avatar: '/dummy-avatar-1.jpg',
        },
        summary:
            'This article explores how artificial intelligence is transforming the education sector by personalizing learning experiences and improving accessibility.',
        content:
            'Artificial Intelligence (AI) has revolutionized various industries, and education is no exception. From adaptive learning platforms to intelligent tutoring systems, AI is helping educators tailor lessons to individual student needs...',
        category: 'Technology',
        tags: ['AI', 'Education', 'Innovation'],
        readingTime: '8 min read',
        image: '/dummy-article-image-1.jpg',
        thumbnail: '/dummy-thumbnail-1.jpg',
        rating: 4.5,
    },
    {
        id: 2,
        title: 'Sustainable Development Goals',
        author: {
            name: 'Jane Doe',
            bio: 'Environmental Policy Analyst focused on global sustainability.',
            avatar: '/dummy-avatar-2.jpg',
        },
        summary:
            'A deep dive into the UN’s Sustainable Development Goals and their global impact on reducing poverty and inequality.',
        content:
            'The United Nations Sustainable Development Goals (SDGs) are a blueprint for achieving a better and more sustainable future for all. These goals address global challenges such as poverty, inequality, climate change...',
        category: 'Environment',
        tags: ['Sustainability', 'UN', 'Climate Change'],
        readingTime: '12 min read',
        image: '/dummy-article-image-2.jpg',
        thumbnail: '/dummy-thumbnail-2.jpg',
        rating: 4.7,
    },
    {
        id: 3,
        title: 'The Rise of Remote Work',
        author: {
            name: 'John Smith',
            bio: 'Workplace Strategist specializing in remote work trends.',
            avatar: '/dummy-avatar-3.jpg',
        },
        summary:
            'An analysis of the remote work trend and its implications for businesses, employees, and the global economy.',
        content:
            'Remote work has become a defining feature of the modern workplace. Enabled by advancements in technology, companies are adopting flexible work policies to attract top talent and reduce operational costs...',
        category: 'Business',
        tags: ['Remote Work', 'Productivity', 'Trends'],
        readingTime: '10 min read',
        image: '/dummy-article-image-3.jpg',
        thumbnail: '/dummy-thumbnail-3.jpg',
        rating: 4.3,
    },
];

export default function MagazinePage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = articles.length;

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const currentArticle = articles[currentPage - 1];

    return (
        <div className={`flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white ${montserrat.className}`}>
            {/* Front Page */}
            {currentPage === 1 && (
                <section className="relative h-[50vh] overflow-hidden">
                    <Image
                        src="/dummy-cover-image.jpg"
                        alt="Magazine Cover"
                        layout="fill"
                        objectFit="cover"
                        className="z-0"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-10">
                        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            The Empowered Technologist
                        </h1>
                        <p className="text-xl mt-4 text-gray-300">Your Source for Innovation, Trends, and Insights</p>
                    </div>
                </section>
            )}

            {/* Header */}
            <header className="py-6 px-4 sm:px-8 lg:px-16 border-b border-gray-700">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <FaBookOpen size={24} className="text-blue-400" />
                        Digital Magazine
                    </h1>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="px-4 py-2 rounded-lg bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-48"
                        />
                        <FaSearch size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-col lg:flex-row flex-grow px-4 sm:px-8 lg:px-16 py-8 gap-8">
                {/* Table of Contents (Index) */}
                <aside className="w-full lg:w-1/4 bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
                    <ul className="space-y-4">
                        {articles.map((article, index) => (
                            <li key={article.id} className="flex flex-col space-y-2">
                                <Link href={`/magazine/${article.id}`} className="flex items-center gap-4">
                                    <Image
                                        src={article.thumbnail}
                                        alt={article.title}
                                        width={80}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <h3 className="text-lg font-bold">{article.title}</h3>
                                        <p className="text-sm text-gray-400">{article.summary}</p>
                                        <button className="text-blue-400 hover:text-blue-300 transition-all duration-300 mt-2">
                                            Read More →
                                        </button>
                                    </div>
                                </Link>
                                <div className="flex items-center gap-2 text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            size={16}
                                            className={i < Math.floor(article.rating) ? 'text-yellow-500' : 'text-gray-600'}
                                        />
                                    ))}
                                    <span className="text-gray-400 text-sm">{article.rating.toFixed(1)}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Article Content */}
                <section className="w-full lg:w-3/4 bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md space-y-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold">{currentArticle.title}</h2>
                        <div className="flex items-center gap-4 mt-2">
                            <Image
                                src={currentArticle.author.avatar}
                                alt={currentArticle.author.name}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div>
                                <p className="text-sm text-gray-400">{currentArticle.author.name}</p>
                                <p className="text-xs text-gray-500">{currentArticle.author.bio}</p>
                            </div>
                        </div>
                        <Image
                            src={currentArticle.image}
                            alt={currentArticle.title}
                            width={800}
                            height={400}
                            className="rounded-lg my-4"
                        />
                        <p className="text-gray-300">{currentArticle.content}</p>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <span>{currentArticle.readingTime}</span>
                            <span>•</span>
                            <span>{currentArticle.category}</span>
                            <span>•</span>
                            <div className="flex gap-2">
                                {currentArticle.tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-700 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-all duration-300">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-blue-600 hover:text-blue-500 transition-all duration-300">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-blue-500 hover:text-blue-400 transition-all duration-300">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-xl font-bold">Rate This Article</h3>
                            <div className="flex items-center gap-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        size={24}
                                        className="cursor-pointer text-gray-500 hover:text-yellow-500 transition-all duration-300"
                                        onClick={() => alert(`You rated this article ${i + 1} stars!`)}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Pagination */}
            <footer className="flex items-center justify-center py-6 border-t border-gray-700">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-l-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300 ${
                        currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    <FaArrowLeft size={16} />
                </button>
                <span className="px-4 py-2 bg-gray-700 text-gray-300">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-r-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300 ${
                        currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    <FaArrowRight size={16} />
                </button>
            </footer>
        </div>
    );
}