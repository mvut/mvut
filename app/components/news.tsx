'use client';

import { FaCalendarAlt, FaNewspaper, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function NewsAndEventsPage() {
    // Content data
    const cards = [
        {
            id: '1',
            title: 'Quantum Computing Breakthrough',
            description: 'Our researchers achieve quantum supremacy with revolutionary 128-qubit processor design',
            date: 'May 15, 2024',
            type: 'news',
            category: 'Research',
            gradient: 'from-blue-400 to-blue-600',
            link: '/news/quantum-computing'
        },
        {
            id: '2',
            title: 'Annual Tech Conference',
            description: 'Join 50+ industry leaders discussing AI, Web3 and future technologies',
            date: 'June 10-12, 2024',
            type: 'event',
            category: 'Conference',
            gradient: 'from-purple-400 to-purple-600',
            link: '/events/tech-conference'
        },
        {
            id: '3',
            title: 'Student App Wins National Award',
            description: 'Campus team wins first prize for innovative mental health tracking application',
            date: 'April 28, 2024',
            type: 'news',
            category: 'Achievement',
            gradient: 'from-green-400 to-green-600',
            link: '/news/student-award'
        },
        {
            id: '4',
            title: 'Blockchain Workshop',
            description: 'Hands-on session building smart contracts with Ethereum and Solidity',
            date: 'May 25, 2024',
            type: 'event',
            category: 'Workshop',
            gradient: 'from-red-400 to-red-600',
            link: '/events/blockchain-workshop'
        },
        {
            id: '5',
            title: '$5M Grant for AI Research',
            description: 'Department secures major funding for ethical AI development initiatives',
            date: 'March 22, 2024',
            type: 'news',
            category: 'Funding',
            gradient: 'from-amber-400 to-amber-600',
            link: '/news/ai-grant'
        },
        {
            id: '6',
            title: 'Hackathon: Climate Solutions',
            description: '48-hour competition to build tech solutions addressing climate change',
            date: 'July 8-9, 2024',
            type: 'event',
            category: 'Hackathon',
            gradient: 'from-indigo-400 to-indigo-600',
            link: '/events/climate-hackathon'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900 p-6">
            {/* Header */}
            <div className="max-w-6xl mx-auto text-center mb-16 pt-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Campus <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-200">News & Events</span>
                </h1>
                <p className="text-xl text-red-200 max-w-2xl mx-auto">
                    Discover the latest happenings and breakthroughs in our tech community
                </p>
            </div>

            {/* Two-column grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {cards.map((card) => (
                    <Link href={card.link} key={card.id} className="group">
                        <div className="h-full bg-gray-900 bg-opacity-70 rounded-2xl shadow-xl overflow-hidden border border-red-900 hover:shadow-2xl hover:border-red-600 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
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
                                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                                        card.type === 'news' ? 'bg-blue-900 text-blue-100' : 'bg-purple-900 text-purple-100'
                                    }`}>
                    {card.category}
                  </span>
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                                    {card.title}
                                </h2>
                                <p className="text-gray-300 mb-6 flex-grow">{card.description}</p>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">{card.date}</span>
                                    <span className="flex items-center text-sm font-medium text-red-400 group-hover:text-red-300 transition-colors">
                    {card.type === 'news' ? 'Read story' : 'View details'}
                                        <FaArrowRight className="ml-2" />
                  </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer CTA */}
            <div className="max-w-6xl mx-auto mt-16 text-center pb-12">
                <Link
                    href="/"
                    className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 hover:from-red-500 hover:to-red-700 border border-red-900"
                >
                    Subscribe to Weekly Updates
                </Link>
            </div>
        </div>
    );
}