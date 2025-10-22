'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaCalendarAlt,
    FaNewspaper,
    FaArrowRight,
    FaExclamationTriangle,
    FaBell,
    FaSearch,
    FaFilter,
    FaClock,
} from 'react-icons/fa';

type ItemType = 'alert' | 'event' | 'news';

type FeedItem = {
    id: string;
    title: string;
    description: string;
    date: string;
    type: ItemType;
    severity?: 'high' | 'medium' | 'low';
    category: string;
    gradient: string;
    link: string;
};

// Move data outside component to prevent re-creation
const highAlerts: FeedItem[] = [
    {
        id: 'alert-1',
        title: 'In-Demand Skills for 2025',
        description: 'Full-Stack Software Engineer, Data Science Analyst, ML/DL Systems Engineer, AI Solutions Architect, Cloud AI Infrastructure',
        date: '2025-10-21',
        type: 'alert',
        severity: 'high',
        category: 'Careers',
        gradient: 'from-red-500 to-red-700',
        link: '',
    },
    {
        id: 'alert-2',
        title: 'Registration Deadline Extended',
        description: 'Fall 2025 registration deadline extended to November 10, 2025. Get Started your Career now',
        date: '2025-10-22',
        type: 'alert',
        severity: 'medium',
        category: 'Academic',
        gradient: 'from-orange-500 to-orange-700',
        link: '',
    },
];

const upcomingEvents: FeedItem[] = [
    {
        id: '1',
        title: 'AI Career Consultation Virtual Free Event',
        description: 'Join our free virtual consultation event for personalized expert guidance and game-changing insights!',
        date: '2025-10-26',
        type: 'event',
        category: 'Academic',
        gradient: 'from-purple-500 to-purple-700',
        link: '',
    },

];

const generalNews: FeedItem[] = [
    {
        id: 'news-1',
        title: 'K.G. STEM Entrepreneurs',
        description: 'Admissions Started in Early-stage STEM education with entrepreneurial mindset development.',
        date: '2025-10-18',
        type: 'news',
        category: 'Competition',
        gradient: 'from-blue-500 to-blue-700',
        link: '/pages/apply',
    },
    {
        id: 'news-2',
        title: 'Research & Development',
        description: 'From methodology to publishable research output with expert guidance.',
        date: '2025-10-18',
        type: 'news',
        category: 'Research',
        gradient: 'from-green-500 to-green-700',
        link: '/pages/apply',
    },

];

const allItems = [...highAlerts, ...upcomingEvents, ...generalNews];

const container = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function NewsAndEventsPage(): JSX.Element {
    const [query, setQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'all' | ItemType | 'alerts'>('all');
    const [categoryFilter, setCategoryFilter] = useState<string>('All');
    const [sortNewestFirst, setSortNewestFirst] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    // Fix hydration by only rendering client-side after mount
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const categories = useMemo(() => {
        const set = new Set<string>(['All']);
        allItems.forEach((i) => set.add(i.category));
        return Array.from(set);
    }, []);

    const filtered = useMemo(() => {
        let list = allItems.slice();

        if (activeTab === 'alerts') list = list.filter((i) => i.type === 'alert');
        else if (activeTab !== 'all') list = list.filter((i) => i.type === activeTab);

        if (categoryFilter !== 'All') list = list.filter((i) => i.category === categoryFilter);

        if (query.trim()) {
            const q = query.toLowerCase();
            list = list.filter((i) => i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q));
        }

        list.sort((a, b) => {
            const da = new Date(a.date).getTime();
            const db = new Date(b.date).getTime();
            return sortNewestFirst ? db - da : da - db;
        });

        return list;
    }, [activeTab, categoryFilter, query, sortNewestFirst]);

    const latest = useMemo(() => {
        return allItems
            .slice()
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 5);
    }, []);

    // Format date consistently to avoid hydration mismatches
    const formatDate = (dateString: string) => {
        if (!isMounted) return ''; // Return empty string during SSR
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const formatShortDate = (dateString: string) => {
        if (!isMounted) return '';
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    if (!isMounted) {
        // Return a skeleton during SSR to match client structure
        return (
            <div className="min-h-screen bg-slate-50 p-6 md:p-12">
                <div className="max-w-7xl mx-auto">
                    <div className="animate-pulse">
                        <div className="h-8 bg-slate-200 rounded w-1/3 mb-2"></div>
                        <div className="h-4 bg-slate-200 rounded w-1/2 mb-8"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <div className="lg:col-span-3">
                                <div className="h-12 bg-slate-200 rounded-xl mb-6"></div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="bg-white rounded-2xl p-5 h-64 border border-slate-100"></div>
                                    ))}
                                </div>
                            </div>
                            <aside className="space-y-6">
                                <div className="bg-white rounded-2xl p-4 h-64 border border-slate-100"></div>
                                <div className="bg-white rounded-2xl p-4 h-64 border border-slate-100"></div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                {/* Top header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900"
                        >
                            Campus <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">News & Events</span>
                        </motion.h1>
                        <p className="text-sm text-slate-600 mt-1">Stay updated — alerts, events, and stories from across campus.</p>
                    </div>

                    <div className="flex gap-3 items-center w-full md:w-auto">
                        <div className="flex items-center bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm w-full md:w-[420px]">
                            <FaSearch className="text-slate-400 mr-2" />
                            <input
                                aria-label="Search news and events"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search title, description or category..."
                                className="flex-1 outline-none text-sm text-slate-700 bg-transparent"
                            />
                            {query && (
                                <button
                                    onClick={() => setQuery('')}
                                    className="text-xs text-slate-500 ml-3"
                                    aria-label="Clear search"
                                >
                                    Clear
                                </button>
                            )}
                        </div>

                        <div className="hidden md:flex items-center gap-2">
                            <button
                                onClick={() => setSortNewestFirst((s) => !s)}
                                className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-sm"
                                aria-pressed={sortNewestFirst}
                            >
                                <FaClock />
                                <span>{sortNewestFirst ? 'Newest' : 'Oldest'}</span>
                            </button>

                            <div className="relative">
                                <select
                                    value={categoryFilter}
                                    onChange={(e) => setCategoryFilter(e.target.value)}
                                    className="appearance-none px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-sm text-sm"
                                    aria-label="Filter by category"
                                >
                                    {categories.map((c) => (
                                        <option key={c} value={c}>
                                            {c}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left: Main feed (3 columns on large screens) */}
                    <div className="lg:col-span-3">
                        {/* Tabs */}
                        <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 mb-6 flex items-center gap-3">
                            <button
                                onClick={() => setActiveTab('all')}
                                className={`px-3 py-2 rounded-lg text-sm font-medium ${activeTab === 'all' ? 'bg-slate-900 text-white' : 'text-slate-700'}`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setActiveTab('alerts')}
                                className={`px-3 py-2 rounded-lg text-sm font-medium ${activeTab === 'alerts' ? 'bg-red-600 text-white' : 'text-slate-700'}`}
                            >
                                Alerts
                            </button>
                            <button
                                onClick={() => setActiveTab('event')}
                                className={`px-3 py-2 rounded-lg text-sm font-medium ${activeTab === 'event' ? 'bg-indigo-600 text-white' : 'text-slate-700'}`}
                            >
                                Events
                            </button>
                            <button
                                onClick={() => setActiveTab('news')}
                                className={`px-3 py-2 rounded-lg text-sm font-medium ${activeTab === 'news' ? 'bg-blue-600 text-white' : 'text-slate-700'}`}
                            >
                                News
                            </button>

                            <div className="ml-auto flex items-center gap-2">
                                <FaFilter className="text-slate-500" />
                                <span className="text-xs text-slate-500">Showing <strong>{filtered.length}</strong></span>
                            </div>
                        </div>

                        {/* Feed grid */}
                        <motion.div variants={container} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filtered.length === 0 ? (
                                <div className="col-span-full bg-white rounded-xl p-8 text-center border border-slate-100 shadow-sm">
                                    <h3 className="font-semibold text-slate-800">No results</h3>
                                    <p className="text-sm text-slate-500">Try changing filters or clearing your search.</p>
                                </div>
                            ) : (
                                filtered.map((itemData) => (
                                    <motion.article
                                        key={itemData.id}
                                        variants={item}
                                        whileHover={{ y: -6, boxShadow: '0 20px 30px rgba(2,6,23,0.08)' }}
                                        className="group"
                                    >
                                        <Link href={itemData.link} className="block">
                                            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-full flex flex-col">
                                                <div className={`h-2 bg-gradient-to-r ${itemData.gradient}`} />

                                                <div className="p-5 flex gap-4 flex-col flex-1">
                                                    <div className="flex items-start gap-3">
                                                        <div className={`p-2 rounded-lg ${itemData.gradient} text-white flex items-center justify-center shrink-0`}>
                                                            {itemData.type === 'alert' ? <FaExclamationTriangle /> : itemData.type === 'event' ? <FaCalendarAlt /> : <FaNewspaper />}
                                                        </div>

                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className="text-xs text-slate-400">{itemData.category}</span>
                                                                {itemData.severity && (
                                                                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                                                                        itemData.severity === 'high' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                                                                    }`}>
                                                                        {itemData.severity.toUpperCase()}
                                                                    </span>
                                                                )}
                                                            </div>

                                                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{itemData.title}</h3>
                                                            <p className="text-sm text-slate-600 mt-2 line-clamp-3">{itemData.description}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between text-sm text-slate-500">
                                                        <time dateTime={itemData.date}>{formatDate(itemData.date)}</time>
                                                        <div className="flex items-center gap-2 text-blue-600 font-medium">
                                                            <span>View</span>
                                                            <FaArrowRight />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.article>
                                ))
                            )}
                        </motion.div>
                    </div>

                    {/* Right: Sidebar */}
                    <aside className="space-y-6">
                        {/* High Alerts Section */}
                        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-red-500 to-red-700 text-white">
                                        <FaBell className="text-sm" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-800">High Alerts</h4>
                                        <p className="text-xs text-slate-500">Important campus notices</p>
                                    </div>
                                </div>
                                <Link href="/alerts" className="text-xs text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                    See all
                                </Link>
                            </div>

                            <div className="space-y-2">
                                {highAlerts.map((a) => (
                                    <Link
                                        key={a.id}
                                        href={a.link}
                                        className="block p-3 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`p-2 rounded-lg ${a.gradient} text-white flex-shrink-0 mt-0.5`}>
                                                <FaExclamationTriangle className="text-xs" />
                                            </div>
                                            <div className="flex-1 min-w-0 space-y-1">
                                                <h5 className="text-sm font-medium text-slate-800 line-clamp-2 leading-tight">
                                                    {a.title}
                                                </h5>
                                                <p className="text-xs text-slate-500">
                                                    {formatDate(a.date)}
                                                </p>
                                            </div>
                                            <FaArrowRight className="flex-shrink-0 text-slate-300 text-xs mt-0.5" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Latest Section */}
                        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-semibold text-slate-800">Latest Updates</h4>
                                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                                    Top {latest.length}
                                </span>
                            </div>

                            <ul className="space-y-3">
                                {latest.map((l) => (
                                    <li key={l.id}>
                                        <Link
                                            href={l.link}
                                            className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${l.gradient} text-white text-xs font-semibold flex-shrink-0 mt-0.5`}>
                                                {l.type === 'alert' ? '!' : l.type === 'event' ? 'E' : 'N'}
                                            </div>
                                            <div className="flex-1 min-w-0 space-y-1">
                                                <p className="text-sm text-slate-800 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                                                    {l.title}
                                                </p>
                                                <p className="text-xs text-slate-500">
                                                    {formatShortDate(l.date)}
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links Section */}
                        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                            <h4 className="font-semibold text-slate-800 mb-3 text-sm">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/pages/datesheet"
                                        className="flex items-center gap-3 p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors text-sm"
                                    >
                                        <FaCalendarAlt className="text-slate-400 text-sm flex-shrink-0" />
                                        <span>Dates & Schedules</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}