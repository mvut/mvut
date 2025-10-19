'use client';

import { FaCalendarAlt, FaNewspaper, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NewsAndEventsPage() {
    const cards = [
        {
            id: '4',
            title: 'Spring 2025 Term-I Exam Date Sheet Announced',
            description: 'The MCASCE Term-I Examination schedule has been officially released. Exams will begin on October 13, 2025. Students are advised to review the date sheet carefully, and ensure timely attendance for each paper.',
            date: 'February 15, 2026', // Sunday
            type: 'event',
            category: 'Conference',
            gradient: 'from-purple-500 to-purple-700',
            link: '/pages/datesheet'
        },
        {
            id: '3',
            title: 'Kindergarten STEM Entrepreneurs: Spring Showcase',
            description: 'Watch 5–6 year olds present their AI-powered toys, smart gardens, and robot pets at our family innovation fair.',
            date: 'April 5, 2026', // Sunday
            type: 'event',
            category: 'Education',
            gradient: 'from-amber-500 to-amber-700',
            link: '/events/kg-showcase-spring-2026'
        },
        {
            id: '2',
            title: 'MCASCE Graduation & Industry Demo Day',
            description: 'Celebrate the next generation of Autonomous Systems Engineers as they demo capstone projects to tech partners and investors.',
            date: 'June 14, 2026', // Sunday
            type: 'event',
            category: 'Program Milestone',
            gradient: 'from-red-500 to-red-700',
            link: '/news/mcasce-graduation-2026'
        },
        {
            id: '1',
            title: 'Youth AI Olympiad 2026 Finals',
            description: 'Top 100 student teams compete in Lahore to solve real-world challenges using AI, robotics, and data science.',
            date: 'August 9, 2026', // Sunday
            type: 'event',
            category: 'Competition',
            gradient: 'from-blue-500 to-blue-700',
            link: '/events/youth-ai-olympiad-finals-2026'
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.5
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header */}
            <div className="max-w-6xl mx-auto text-center mb-16 pt-12">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                >
                    Campus <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">News & Events</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-xl text-gray-600 max-w-2xl mx-auto"
                >
                    Stay updated with the latest happenings in our community
                </motion.p>
            </div>

            {/* Cards Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        variants={item}
                        whileHover={{ y: -5 }}
                    >
                        <Link href={card.link} className="group">
                            <div className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                                {/* Gradient header */}
                                <div className={`h-2 bg-gradient-to-r ${card.gradient}`}></div>

                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${card.gradient} text-white`}>
                                            {card.type === 'news' ? (
                                                <FaNewspaper className="text-lg" />
                                            ) : (
                                                <FaCalendarAlt className="text-lg" />
                                            )}
                                        </div>
                                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                            card.type === 'news' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                                        }`}>
                                            {card.category}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {card.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 flex-grow">{card.description}</p>

                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">{card.date}</span>
                                        <span className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-800 transition-colors">
                                            {card.type === 'news' ? 'Read story' : 'View details'}
                                            <FaArrowRight className="ml-2" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}