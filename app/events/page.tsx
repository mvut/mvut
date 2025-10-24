'use client';
import { motion } from 'framer-motion';
import Head from 'next/head';
import {
    FaCalendarAlt,
    FaClock,
    FaMapMarkerAlt,
    FaFacebook,
    FaLaptop,
    FaUsers,
    FaGraduationCap,
    FaLightbulb,
    FaArrowRight,
    FaStar,
    FaRocket,
    FaBrain,
    FaCode,
    FaNetworkWired,
    FaCheck,
    FaYoutube, FaGlobe, FaTwitter, FaLinkedin, FaEnvelope, FaTrophy, FaBriefcase, FaUser, FaGoogle, FaMicrosoft
} from 'react-icons/fa';
import Link from "next/link";
import President from '@/public/faculty/abs.png';
import Image from "next/image";

export default function AICareersEvent() {
    const eventDate = new Date('2025-10-25T20:30:00');
    const formattedDate = eventDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const formattedTime = eventDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return (
        <div className="min-h-screen bg-black text-white">
            <Head>
                <title>AI CAREERS EVENT | FREE ONLINE WORKSHOP</title>
                <meta name="description" content="JOIN OUR FREE ONLINE EVENT TO EXPLORE AI CAREER OPPORTUNITIES. LIVE ON FACEBOOK WITH INDUSTRY EXPERTS." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/50 mb-8"
                            >
                                <FaRocket className="mr-2 text-purple-400" />
                                <span className="text-purple-300 font-semibold">FREE ONLINE EVENT</span>
                            </motion.div>

                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
                                LAUNCH YOUR
                                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mt-4">
                                    AI CAREER
                                </span>
                            </h1>

                            <p className="mt-8 text-2xl md:text-3xl text-gray-300 max-w-2xl leading-relaxed">
                                FREE ONLINE EVENT FOR ASPIRING AI PROFESSIONALS. LEARN FROM INDUSTRY EXPERTS AND DISCOVER YOUR PATH IN ARTIFICIAL INTELLIGENCE.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#4F46E5" }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-12 bg-purple-600 hover:bg-purple-700 text-white font-black py-6 px-12 rounded-2xl text-2xl flex items-center shadow-2xl shadow-purple-500/25"
                                onClick={() => window.open('https://web.facebook.com/events/2242840729551371', '_blank')}
                            >
                                <FaFacebook className="mr-4 text-2xl" />
                                <span className="text-2xl">JOIN ON FACEBOOK LIVE</span>
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-3xl p-8 shadow-2xl border border-purple-500/30 backdrop-blur-sm">
                                <div className="bg-black/80 rounded-2xl p-8 border border-gray-800">
                                    <h3 className="text-4xl font-black text-white mb-8 text-center">EVENT DETAILS</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-center p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                                            <FaCalendarAlt className="text-purple-400 mr-4 text-2xl" />
                                            <div>
                                                <div className="text-gray-400 text-lg">DATE</div>
                                                <div className="text-white text-xl font-bold">{formattedDate.toUpperCase()}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                                            <FaClock className="text-cyan-400 mr-4 text-2xl" />
                                            <div>
                                                <div className="text-gray-400 text-lg">TIME</div>
                                                <div className="text-white text-xl font-bold">{formattedTime.toUpperCase()} (GMT-5)</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                                            <FaMapMarkerAlt className="text-green-400 mr-4 text-2xl" />
                                            <div>
                                                <div className="text-gray-400 text-lg">PLATFORM</div>
                                                <div className="text-white text-xl font-bold">FACEBOOK LIVE</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                                            <FaLaptop className="text-yellow-400 mr-4 text-2xl" />
                                            <div>
                                                <div className="text-gray-400 text-lg">PRICE</div>
                                                <div className="text-white text-xl font-bold">FREE TO ATTEND</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What You'll Learn */}
            <section className="py-32 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
                            WHAT YOU&apos;LL LEARN
                        </h2>
                        <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            GAIN PRACTICAL INSIGHTS TO START OR ADVANCE YOUR CAREER IN ARTIFICIAL INTELLIGENCE
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: FaGraduationCap, title: "CAREER PATHS", desc: "EXPLORE ROLES LIKE ML ENGINEER, DATA SCIENTIST, AI RESEARCHER" },
                            { icon: FaLightbulb, title: "INDUSTRY TRENDS", desc: "LEARN ABOUT EMERGING AI TECHNOLOGIES AND MARKET DEMANDS" },
                            { icon: FaUsers, title: "EXPERT INSIGHTS", desc: "HEAR FROM PROFESSIONALS WORKING AT TOP AI COMPANIES" },
                            { icon: FaCode, title: "SKILL DEVELOPMENT", desc: "ESSENTIAL TECHNICAL AND SOFT SKILLS FOR AI CAREERS" },
                            { icon: FaNetworkWired, title: "JOB STRATEGIES", desc: "RESUME TIPS, INTERVIEW PREP, AND PORTFOLIO BUILDING" },
                            { icon: FaBrain, title: "FUTURE OUTLOOK", desc: "WHERE AI IS HEADING AND HOW TO FUTURE-PROOF YOUR CAREER" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mb-6">
                                    <item.icon className="text-white text-3xl" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4">{item.title}</h3>
                                <p className="text-xl text-gray-300 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-6">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-gray-700">FEATURED GUEST SPEAKER</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Distinguished <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">AI Visionary</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Industry pioneer shaping the future of artificial intelligence and machine learning
                        </p>
                    </motion.div>

                    <div className="flex justify-center">
                        {/* Single Centered Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200/80 max-w-4xl w-full"
                        >
                            {/* Background Decorative Elements */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tr from-purple-500/3 to-cyan-500/3 rounded-full translate-x-1/3 translate-y-1/3"></div>

                            <div className="relative p-8">
                                <div className="flex flex-col lg:flex-row items-center gap-8">
                                    {/* Profile Image - Left Side */}
                                    <div className="relative flex-shrink-0 lg:w-2/5">
                                        <div className="relative w-64 h-64 mx-auto">
                                            {/* Outer Glow */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                                            {/* Main Image Container */}
                                            <div className="relative w-full h-full rounded-3xl bg-gradient-to-r from-purple-500 to-cyan-500 p-2">
                                                <div className="w-full h-full rounded-2xl bg-white p-1.5 overflow-hidden">
                                                    <Image
                                                        src={President}
                                                        alt="Abubakar Siddique"
                                                        className="w-full h-full object-cover rounded-2xl grayscale-0 group-hover:grayscale-0 transition-all duration-500"
                                                    />
                                                </div>
                                            </div>

                                            {/* Verification Badge */}
                                            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                                <FaCheck className="text-white text-sm" />
                                            </div>

                                            {/* Company Logo Badge */}
                                            <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white rounded-2xl border-2 border-gray-200 shadow-lg flex items-center justify-center">
                                                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                                    <FaRocket className="text-white text-sm" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content - Right Side */}
                                    <div className="flex-1 lg:w-3/5 text-center lg:text-left">
                                        {/* Name and Title */}
                                        <div className="mb-6">
                                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                                <h3 className="text-3xl font-bold text-gray-900">Abubakar Siddique</h3>
                                                <div className="flex gap-1">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                    <span className="text-xs text-green-600 font-medium">Online</span>
                                                </div>
                                            </div>
                                            <p className="text-xl font-semibold text-purple-600 mb-2">
                                                Co-Founder & President MVIT
                                            </p>
                                            <p className="text-md text-gray-500 font-medium">
                                                Solo Architect of AI-Empowered Learning Revolutions
                                            </p>
                                        </div>

                                        {/* Expertise Tags */}
                                        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                                <span className="px-4 py-2 bg-purple-50 text-purple-700 text-sm font-medium rounded-full border border-purple-200">
                                    Intelligent Automation
                                </span>
                                            <span className="px-4 py-2 bg-cyan-50 text-cyan-700 text-sm font-medium rounded-full border border-cyan-200">
                                    AI Integration & Ethics
                                </span>
                                            <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-300">
                                    Process Optimization
                                </span>
                                            <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-300">
                                    Predictive Analytics
                                </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed mb-6 text-base">
                                            Drives innovation in technology education and workforce development, bridging industry-academia gaps to shape future-ready professionals through cutting-edge programs and research initiatives.
                                        </p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-6 mb-8">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-gray-900">15+</div>
                                                <div className="text-sm text-gray-500">Years Exp</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-gray-900">100k+</div>
                                                <div className="text-sm text-gray-500">Students</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-gray-900">50+</div>
                                                <div className="text-sm text-gray-500">Trainings</div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link
                                                href="/pages/profile"
                                                className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl"
                                            >
                                                <FaUser className="text-white" />
                                                View Profile
                                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                            </Link>
                                            <Link
                                                href="/pages/trainings"
                                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 transition-all duration-300"
                                            >
                                                <FaCalendarAlt />
                                                Schedule Session
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-r from-purple-900/50 via-black to-cyan-900/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-cyan-900/20"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-7xl font-black text-white mb-8"
                    >
                        READY TO START YOUR AI JOURNEY?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
                    >
                        JOIN THOUSANDS OF PROFESSIONALS AT OUR FREE ONLINE EVENT. NO EXPERIENCE REQUIRED!
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05, backgroundColor: "#4F46E5" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-black py-8 px-16 rounded-2xl text-3xl shadow-2xl shadow-purple-500/25 flex items-center mx-auto"
                        onClick={() => window.open('https://web.facebook.com/events/2242840729551371', '_blank')}
                    >
                        <FaFacebook className="mr-6 text-3xl" />
                        <span>WATCH ON FACEBOOK LIVE</span>
                    </motion.button>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 text-xl text-purple-300 font-semibold"
                    >
                        Code Literacy for All - Free Skill Based Education and Training Project
                    </motion.p>
                </div>
            </section>

        </div>
    );
}