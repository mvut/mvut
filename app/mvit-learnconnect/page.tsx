// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    FaUserGraduate,
    FaSearch,
    FaEnvelope,
    FaWhatsapp,
    FaSignInAlt,
    FaSearchPlus,
    FaComments,
    FaLinkedin,
    FaTwitter,
    FaBook,
    FaChalkboardTeacher,
    FaGraduationCap,
    FaClock,
    FaDollarSign,
    FaFilter,
    FaCalendarAlt,
    FaStar,
    FaCheckCircle,
    FaRocket
} from 'react-icons/fa';
import {
    MdSchedule,
    MdTrendingUp,
    MdEmail,
    MdGroup,
    MdSecurity,
    MdSupport
} from 'react-icons/md';
import {
    FiSmartphone,
    FiMenu,
    FiX,
    FiMessageCircle,
    FiVideo,
    FiBookOpen
} from 'react-icons/fi';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [activeFeature, setActiveFeature] = useState(0);
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        {
            id: 1,
            name: "Ahmed S.",
            role: "Computer Science Student",
            quote: "Found my coding mentor in a day! The platform made it so easy to connect with experienced programmers who helped me land my first internship.",
            rating: 5,
            subjects: ["Python", "Web Development"]
        },
        {
            id: 2,
            name: "Dr. Sarah Johnson",
            role: "Mathematics Professor",
            quote: "I've enrolled my advanced calculus and linear algebra courses. The platform helped me reach 25+ dedicated students globally. The scheduling system is fantastic!",
            rating: 5,
            subjects: ["Calculus", "Linear Algebra"]
        },
        {
            id: 3,
            name: "Maria L.",
            role: "English Language Student",
            quote: "My English fluency improved dramatically with personalized sessions. My teacher customized lessons based on my business needs. Highly recommended!",
            rating: 5,
            subjects: ["Business English", "Conversation"]
        },
        {
            id: 4,
            name: "Prof. David Chen",
            role: "Physics Teacher",
            quote: "As a retired professor, this platform lets me continue teaching passionate students. The payment system is seamless and the support team is very responsive.",
            rating: 4,
            subjects: ["Physics", "Engineering Math"]
        }
    ];

    const teacherFeatures = [
        {
            icon: FaChalkboardTeacher,
            title: "Create Your Profile",
            description: "Showcase your qualifications, teaching experience, and expertise. Add certifications, degrees, and teaching philosophy.",
            details: ["Professional profile builder", "Credential verification", "Portfolio showcase", "Student reviews system"]
        },
        {
            icon: FaBook,
            title: "List Your Subjects",
            description: "Add all subjects you teach with detailed descriptions, curriculum outlines, and prerequisite knowledge.",
            details: ["Unlimited subjects", "Curriculum templates", "Skill level indicators", "Pricing flexibility"]
        },
        {
            icon: MdSchedule,
            title: "Set Your Schedule",
            description: "Define your availability with timezone support. Set session durations and buffer times between classes.",
            details: ["Calendar integration", "Timezone conversion", "Recurring sessions", "Booking automation"]
        },
        {
            icon: FaDollarSign,
            title: "Manage Payments",
            description: "Secure payment processing with flexible pricing models - hourly rates, package deals, or subscription plans.",
            details: ["Multiple payment methods", "Automated invoicing", "Revenue tracking", "Tax documentation"]
        }
    ];

    const studentFeatures = [
        {
            icon: FaSearch,
            title: "Advanced Search",
            description: "Find perfect teachers using filters for subjects, expertise level, availability, pricing, and teaching style.",
            details: ["Smart matching algorithm", "Rating filters", "Availability search", "Price range filters"]
        },
        {
            icon: FiMessageCircle,
            title: "Multiple Contact Options",
            description: "Connect with teachers through your preferred channel - WhatsApp, Email, or integrated messaging.",
            details: ["Direct messaging", "Video call integration", "File sharing", "Progress tracking"]
        },
        {
            icon: FaCalendarAlt,
            title: "Flexible Scheduling",
            description: "Book sessions that fit your schedule with automatic reminders and rescheduling options.",
            details: ["One-click booking", "Calendar sync", "Reminder system", "Rescheduling flexibility"]
        },
        {
            icon: MdTrendingUp,
            title: "Progress Tracking",
            description: "Monitor your learning journey with detailed progress reports, achievement badges, and skill assessments.",
            details: ["Learning analytics", "Skill milestones", "Achievement system", "Performance reports"]
        }
    ];

    const subjects = [
        "Mathematics", "Physics", "Chemistry", "Biology", "Computer Science",
        "Programming", "Web Development", "Data Science", "English", "Spanish",
        "French", "Business", "Economics", "History", "Art & Design"
    ];

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        console.log('Form submission:', data);
        alert('Thank you for your interest! We will contact you soon to complete your registration.');
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header/Navigation */}
            <motion.header
                className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-200"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <motion.div
                            className="flex items-center space-x-3"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                <FaGraduationCap className="text-white text-lg" />
                            </div>
                            <div>
                                <span className="text-xl font-bold text-gray-900 block">MVIT LearnConnect</span>
                                <span className="text-xs text-gray-500 block">Modern Vocational Institute of Technology</span>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {['Home', 'For Teachers', 'For Students', 'How It Works', 'Subjects', 'Contact'].map((item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
                                    whileHover={{ y: -2 }}
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                                </motion.a>
                            ))}
                            <motion.button
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Started
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-gray-700 p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="px-4 py-6 space-y-4">
                                    {['Home', 'For Teachers', 'For Students', 'How It Works', 'Subjects', 'Contact'].map((item) => (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                                            className="block text-gray-700 hover:text-blue-600 font-medium py-3 border-b border-gray-100"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all mt-4">
                                        Get Started
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </motion.header>

            {/* Hero Section */}
            <section id="home" className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 relative overflow-hidden pt-16">
                <motion.div
                    className="absolute inset-0"
                    style={{ opacity, scale }}
                >
                    {/* Enhanced Animated Background Elements */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-white/10"
                            style={{
                                top: `${20 + i * 10}%`,
                                left: `${i * 12}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 15 + i * 2,
                                repeat: Infinity,
                                delay: i * 0.5
                            }}
                        >
                            <FaBook size={i % 2 === 0 ? 32 : 24} />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="container mx-auto px-4 h-screen flex items-center justify-center relative z-10">
                    <div className="text-center text-white max-w-6xl">
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Connect with Expert
                            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                Teachers in Seconds
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl lg:text-3xl mb-8 text-blue-100 leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Join MVIT's premier platform where educators and learners connect seamlessly.
                            <span className="block text-lg md:text-xl mt-2">
                                Teach your expertise or find your perfect mentor - completely free to start!
                            </span>
                        </motion.p>

                        {/* Enhanced Search Bar */}
                        <motion.div
                            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto border border-white/30"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex-1 flex items-center bg-white rounded-full px-6 py-4 shadow-lg">
                                    <FaSearch className="text-gray-400 flex-shrink-0" />
                                    <input
                                        type="text"
                                        placeholder="Try 'Advanced Python Programming', 'Calculus Tutoring', or 'Business English'..."
                                        className="flex-1 bg-transparent outline-none px-4 text-gray-800 placeholder-gray-500 text-lg"
                                    />
                                </div>
                                <motion.button
                                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg whitespace-nowrap"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Search Teachers
                                </motion.button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4 justify-center">
                                {subjects.slice(0, 6).map((subject) => (
                                    <span key={subject} className="text-white/80 text-sm bg-white/10 px-3 py-1 rounded-full">
                                        {subject}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.button
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-3"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaChalkboardTeacher />
                                Enroll as Teacher
                            </motion.button>
                            <motion.button
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-3"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaUserGraduate />
                                Find a Teacher
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            {[
                                { number: "500+", label: "Expert Teachers" },
                                { number: "10k+", label: "Students Helped" },
                                { number: "50+", label: "Subjects" },
                                { number: "98%", label: "Satisfaction Rate" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                                    <div className="text-blue-100 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* For Teachers Section */}
            <section id="for-teachers" className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Empower Your <span className="text-blue-600">Teaching Journey</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transform your expertise into meaningful teaching opportunities. Reach students globally and build your teaching legacy.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            {teacherFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all cursor-pointer"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setActiveFeature(index)}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="text-blue-600 text-xl" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600 mb-3">{feature.description}</p>
                                            <div className="grid grid-cols-2 gap-2">
                                                {feature.details.map((detail, i) => (
                                                    <div key={i} className="flex items-center text-sm text-gray-500">
                                                        <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center">
                                <FaRocket className="text-6xl mx-auto mb-6 text-yellow-300" />
                                <h3 className="text-3xl font-bold mb-4">Start Teaching Today</h3>
                                <div className="space-y-4 text-lg">
                                    <div className="flex items-center justify-center space-x-3">
                                        <FaCheckCircle className="text-green-300" />
                                        <span>Zero enrollment fees</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-3">
                                        <FaCheckCircle className="text-green-300" />
                                        <span>Keep 85% of your earnings</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-3">
                                        <FaCheckCircle className="text-green-300" />
                                        <span>Flexible scheduling</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-3">
                                        <FaCheckCircle className="text-green-300" />
                                        <span>Global student reach</span>
                                    </div>
                                </div>
                                <motion.button
                                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg mt-8 hover:bg-gray-100 transition-colors w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Create Teacher Profile
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* For Students Section */}
            <section id="for-students" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Unlock Your <span className="text-purple-600">Learning Potential</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover personalized learning experiences with expert teachers who match your goals, schedule, and learning style.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white order-2 lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center">
                                <FaUserGraduate className="text-6xl mx-auto mb-6 text-yellow-300" />
                                <h3 className="text-3xl font-bold mb-4">Begin Your Journey</h3>
                                <div className="space-y-4 text-lg">
                                    <div className="flex items-center justify-center space-x-3">
                                        <FaCheckCircle className="text-green-300" />
                                        <span>Free teacher discovery</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-3">
                                        <FaCheckCircle className="text-green-300" />
                                        <span>Verified teacher profiles</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-3">
                                        <FaCheckCircle className="text-green-300" />
                                        <span>Secure payment system</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-3">
                                        <FaCheckCircle className="text-green-300" />
                                        <span>Money-back guarantee</span>
                                    </div>
                                </div>
                                <motion.button
                                    className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg mt-8 hover:bg-gray-100 transition-colors w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Find Your Teacher
                                </motion.button>
                            </div>
                        </motion.div>

                        <div className="space-y-8 order-1 lg:order-2">
                            {studentFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all cursor-pointer"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="text-purple-600 text-xl" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600 mb-3">{feature.description}</p>
                                            <div className="grid grid-cols-2 gap-2">
                                                {feature.details.map((detail, i) => (
                                                    <div key={i} className="flex items-center text-sm text-gray-500">
                                                        <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        How It <span className="text-blue-600">Works</span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Getting started with MVIT LearnConnect is simple and straightforward
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                step: 1,
                                icon: FaSignInAlt,
                                title: "Create Your Profile",
                                description: "Sign up as a teacher or student. Complete your profile with details about your expertise or learning goals.",
                                details: ["Quick registration", "Profile verification", "Skill assessment", "Goal setting"]
                            },
                            {
                                step: 2,
                                icon: FaSearchPlus,
                                title: "Connect & Match",
                                description: "Teachers list their subjects while students search and filter to find perfect learning matches.",
                                details: ["Smart matching", "Advanced filters", "Profile browsing", "Direct messaging"]
                            },
                            {
                                step: 3,
                                icon: FaComments,
                                title: "Start Learning Together",
                                description: "Begin your educational journey with scheduled sessions, progress tracking, and continuous support.",
                                details: ["Session scheduling", "Progress monitoring", "Feedback system", "Achievement tracking"]
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                className="text-center group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative mb-8">
                                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="text-white text-3xl" />
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        {item.step}
                                    </div>
                                    {index < 2 && (
                                        <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 z-0"></div>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                                <div className="space-y-2">
                                    {item.details.map((detail, i) => (
                                        <div key={i} className="flex items-center justify-center text-sm text-gray-500">
                                            <FaCheckCircle className="text-green-500 mr-2" />
                                            {detail}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Success <span className="text-purple-600">Stories</span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Hear from our community of teachers and students who are transforming education
                    </motion.p>

                    <div className="max-w-6xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTestimonial}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-200"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className={`text-xl ${
                                                        i < testimonials[activeTestimonial].rating
                                                            ? 'text-yellow-400'
                                                            : 'text-gray-300'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <blockquote className="text-2xl text-gray-700 mb-6 leading-relaxed">
                                            "{testimonials[activeTestimonial].quote}"
                                        </blockquote>
                                        <div>
                                            <p className="font-semibold text-gray-900 text-xl">{testimonials[activeTestimonial].name}</p>
                                            <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {testimonials[activeTestimonial].subjects.map((subject, i) => (
                                                    <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                                                        {subject}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
                                        <FaUserGraduate className="text-6xl mx-auto mb-6 text-yellow-300" />
                                        <h3 className="text-2xl font-bold mb-4">Join Our Success Stories</h3>
                                        <p className="text-blue-100 mb-6">
                                            Become part of our growing community of educators and learners
                                        </p>
                                        <motion.button
                                            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Share Your Story
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-center space-x-3 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        index === activeTestimonial
                                            ? 'bg-blue-600 w-8'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    onClick={() => setActiveTestimonial(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Start Your Educational Journey?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of teachers and students already transforming education through personalized connections
                        </p>

                        <form onSubmit={handleFormSubmit} className="bg-white rounded-3xl p-8 shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <motion.input
                                    type="text"
                                    name="name"
                                    placeholder="Your Full Name"
                                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                    whileFocus={{ scale: 1.02 }}
                                    required
                                />
                                <motion.input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                    whileFocus={{ scale: 1.02 }}
                                    required
                                />
                                <motion.select
                                    name="role"
                                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                    whileFocus={{ scale: 1.02 }}
                                    required
                                >
                                    <option value="">I want to join as...</option>
                                    <option value="teacher">Teacher/Educator</option>
                                    <option value="student">Student/Learner</option>
                                    <option value="both">Both Teacher and Student</option>
                                </motion.select>
                                <motion.select
                                    name="subject"
                                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                    whileFocus={{ scale: 1.02 }}
                                >
                                    <option value="">Primary Subject Interest</option>
                                    {subjects.map((subject) => (
                                        <option key={subject} value={subject}>{subject}</option>
                                    ))}
                                </motion.select>
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaRocket />
                                Start Your Journey Today
                            </motion.button>
                            <p className="text-gray-600 text-sm mt-4">
                                By signing up, you agree to our Terms of Service and Privacy Policy. We never share your information.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Enhanced Footer */}
            <motion.footer
                className="bg-gray-900 text-white py-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <FaGraduationCap className="text-white text-lg" />
                                </div>
                                <div>
                                    <span className="text-xl font-bold block">MVIT LearnConnect</span>
                                    <span className="text-xs text-gray-400 block">Modern Vocational Institute of Technology</span>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Connecting educators and learners worldwide through innovative technology and personalized learning experiences.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <FaTwitter size={20} />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">For Teachers</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Create Profile</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Teaching Resources</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing Guide</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">For Students</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Find Teachers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Learning Resources</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Subject Catalog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Study Tips</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">Support</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 MVIT LearnConnect. Modern Vocational Institute of Technology. All rights reserved.</p>
                    </div>
                </div>
            </motion.footer>
        </div>
    );
}