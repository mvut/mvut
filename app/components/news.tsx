'use client';

import { FaCalendarAlt, FaNewspaper, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NewsAndEventsPage() {
    const cards = [
        {
            id: '1',
            title: 'Quantum Computing Breakthrough',
            description: 'Our researchers achieve quantum supremacy with revolutionary 128-qubit processor design',
            date: 'May 15, 2024',
            type: 'news',
            category: 'Research',
            gradient: 'from-blue-500 to-blue-700',
            link: '/news/quantum-computing'
        },
        {
            id: '2',
            title: 'Annual Tech Conference',
            description: 'Join 50+ industry leaders discussing AI, Web3 and future technologies',
            date: 'June 10-12, 2024',
            type: 'event',
            category: 'Conference',
            gradient: 'from-purple-500 to-purple-700',
            link: '/events/tech-conference'
        },
        {
            id: '3',
            title: 'Student App Wins National Award',
            description: 'Campus team wins first prize for innovative mental health tracking application',
            date: 'April 28, 2024',
            type: 'news',
            category: 'Achievement',
            gradient: 'from-green-500 to-green-700',
            link: '/news/student-award'
        },
        {
            id: '4',
            title: 'Blockchain Workshop',
            description: 'Hands-on session building smart contracts with Ethereum and Solidity',
            date: 'May 25, 2024',
            type: 'event',
            category: 'Workshop',
            gradient: 'from-red-500 to-red-700',
            link: '/events/blockchain-workshop'
        },
        {
            id: '5',
            title: '$5M Grant for AI Research',
            description: 'Department secures major funding for ethical AI development initiatives',
            date: 'March 22, 2024',
            type: 'news',
            category: 'Funding',
            gradient: 'from-amber-500 to-amber-700',
            link: '/news/ai-grant'
        },
        {
            id: '6',
            title: 'Hackathon: Climate Solutions',
            description: '48-hour competition to build tech solutions addressing climate change',
            date: 'July 8-9, 2024',
            type: 'event',
            category: 'Hackathon',
            gradient: 'from-indigo-500 to-indigo-700',
            link: '/events/climate-hackathon'
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

            {/* Footer CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto mt-16 text-center pb-12"
            >
                <Link
                    href="/subscribe"
                    className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-indigo-500"
                >
                    Subscribe to Updates
                </Link>
            </motion.div>
        </div>
    );
}