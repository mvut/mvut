'use client';

import { useState, useEffect } from 'react';
import {
    FaRobot, FaSignInAlt, FaUserGraduate, FaChalkboardTeacher,
    FaRocket, FaStar, FaMedal, FaLock, FaUserEdit, FaIdCard,
    FaBookOpen, FaGraduationCap, FaLightbulb, FaChevronRight
} from 'react-icons/fa';
import { RiAiGenerate, RiMentalHealthLine } from 'react-icons/ri';
import { FiBarChart2, FiBook, FiAward, FiUsers, FiClock } from 'react-icons/fi';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from "next/link";

const AIFeaturesPage = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });
    const [ref2, inView2] = useInView({ threshold: 0.1 });
    const [ref3, inView3] = useInView({ threshold: 0.1 });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Auto-rotate features
    useEffect(() => {
        if (!isMounted) return;

        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 6);
        }, 5000);
        return () => clearInterval(interval);
    }, [isMounted]);

    // Animation triggers
    useEffect(() => {
        if (inView && isMounted) {
            controls.start('visible');
        }
    }, [controls, inView, isMounted]);

    const features = [
        {
            icon: <FaRobot size={48} />,
            title: "24/7 AI Tutor",
            desc: "Get instant help with course concepts through conversational AI.",
            bullets: [
                "Natural language understanding",
                "Multi-step problem solving",
                "Context-aware explanations"
            ]
        },
        {
            icon: <RiAiGenerate size={48} />,
            title: "Smart Content Engine",
            desc: "Personalized study materials tailored to your learning patterns.",
            bullets: [
                "Dynamic flashcards",
                "Lecture summaries",
                "Practice question generator"
            ]
        },
        {
            icon: <FiBarChart2 size={48} />,
            title: "Predictive Analytics",
            desc: "AI predicts your performance and suggests interventions.",
            bullets: [
                "Early warning system",
                "Optimal study scheduling",
                "Knowledge gap analysis"
            ]
        },
        {
            icon: <FiBook size={48} />,
            title: "Adaptive Pathways",
            desc: "Content adjusts difficulty and style in real-time.",
            bullets: [
                "Personalized learning paths",
                "Dynamic difficulty adjustment",
                "Multi-modal content"
            ]
        },
        {
            icon: <RiMentalHealthLine size={48} />,
            title: "Wellness Companion",
            desc: "AI suggests optimal breaks to prevent burnout.",
            bullets: [
                "Stress level detection",
                "Cognitive load balancing",
                "Mindfulness exercises"
            ]
        },
        {
            icon: <FaChalkboardTeacher size={48} />,
            title: "Virtual Instructor",
            desc: "AI-powered avatars deliver personalized lectures.",
            bullets: [
                "Real-time Q&A",
                "Multilingual support",
                "Personalized pacing"
            ]
        }
    ];

    const stats = [
        { value: "92%", label: "Pass Rate Improvement", icon: <FiAward size={40} /> },
        { value: "40%", label: "Faster Learning", icon: <FiClock size={40} /> },
        { value: "100%", label: "Personalized", icon: <FiUsers size={40} /> }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const featureVariants = {
        enter: { opacity: 0, x: 100 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 }
    };

    if (!isMounted) return null;

    // Generate random galaxy elements
    const generateGalaxyElements = (count: number, type: 'star' | 'planet' | 'comet') => {
        return Array.from({ length: count }).map((_, i) => {
            const size = type === 'star'
                ? Math.random() * 3 + 1
                : type === 'planet'
                    ? Math.random() * 8 + 4
                    : Math.random() * 2 + 1;

            const color = type === 'star'
                ? ['#ffffff', '#f8f8b0', '#b0d0f8'][Math.floor(Math.random() * 3)]
                : type === 'planet'
                    ? ['#6b5b95', '#feb236', '#d64161', '#ff7b25'][Math.floor(Math.random() * 4)]
                    : '#ffffff';

            return (
                <motion.div
                    key={`${type}-${i}`}
                    className={`absolute rounded-full ${type === 'comet' ? 'bg-gradient-to-r from-blue-400 to-transparent' : ''}`}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        backgroundColor: type !== 'comet' ? color : undefined,
                        opacity: Math.random() * 0.8 + 0.2
                    }}
                    animate={{
                        y: type === 'comet'
                            ? [0, Math.random() * 100 - 50]
                            : [0, Math.random() * 10 - 5],
                        x: type === 'comet'
                            ? [0, Math.random() * 100 - 50]
                            : [0, Math.random() * 10 - 5],
                        rotate: type === 'planet' ? [0, 360] : undefined
                    }}
                    transition={{
                        duration: type === 'comet'
                            ? Math.random() * 20 + 10
                            : Math.random() * 10 + 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                >
                    {type === 'planet' && (
                        <div
                            className="absolute rounded-full bg-black bg-opacity-30"
                            style={{
                                width: '30%',
                                height: '30%',
                                top: '20%',
                                left: '20%'
                            }}
                        />
                    )}
                </motion.div>
            );
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white overflow-x-hidden relative">
            {/* Cosmic Background */}
            <div className="fixed inset-0 overflow-hidden z-0">
                {/* Stars */}
                {generateGalaxyElements(150, 'star')}

                {/* Planets */}
                {generateGalaxyElements(15, 'planet')}

                {/* Comets */}
                {generateGalaxyElements(5, 'comet')}

                {/* Nebula Effect */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: 'radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.3), transparent 60%), radial-gradient(circle at 80% 70%, rgba(0, 191, 255, 0.3), transparent 60%)'
                    }}
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Hero Section with Floating Elements */}
                <div className="relative bg-black bg-opacity-70 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    {/* Floating stars */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute text-yellow-400"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    fontSize: `${Math.random() * 10 + 10}px`
                                }}
                                animate={{
                                    y: [0, Math.random() * 40 - 20],
                                    x: [0, Math.random() * 40 - 20],
                                    opacity: [0.7, 1, 0.7],
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    duration: Math.random() * 10 + 10,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                <FaStar />
                            </motion.div>
                        ))}
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <div className="flex items-center justify-center space-x-3 mb-6">
                                <motion.div
                                    className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 10, -10, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                >
                                    <span className="text-white font-bold text-2xl">MVIT</span>
                                </motion.div>
                                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                                    Mansha Virtual Institute of Technologies
                                </h1>
                            </div>
                            <motion.h2
                                className="text-5xl font-bold mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="inline-block">Paint</span>
                                <motion.span
                                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                >
                                    a Brighter Tomorrow
                                </motion.span>
                            </motion.h2>
                            <motion.p
                                className="text-2xl text-red-200 max-w-3xl mx-auto mb-12"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Blast off into the future with our AI-powered learning galaxy!
                            </motion.p>

                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {/* Student Login Card */}
                                <motion.div
                                    className="bg-black bg-opacity-40 p-8 rounded-xl border-2 border-red-900 hover:border-yellow-400 transition-all backdrop-blur-sm"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative mb-4">
                                            <div className="flex items-center justify-center">
                                                <FaLock className="text-red-500 mr-2" size={30} />
                                                <FaSignInAlt className="text-yellow-400" size={30} />
                                            </div>
                                            <motion.div
                                                className="absolute -top-2 -right-2 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    rotate: [0, 360]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity
                                                }}
                                            >
                                                <span className="text-xs font-bold">!</span>
                                            </motion.div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">Student Login</h3>
                                        <p className="text-red-200 mb-6">
                                            Access your personalized learning dashboard and AI tools
                                        </p>
                                        <Link
                                            href={"/mlms/login"}
                                            className="w-full max-w-xs bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/30 flex items-center justify-center"
                                        >
                                            <motion.span
                                                animate={{
                                                    x: [0, 5, -5, 0],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity
                                                }}
                                                className="flex items-center"
                                            >
                                                <FaLock className="mr-2" /> Secure Login <FaChevronRight className="ml-2" />
                                            </motion.span>
                                        </Link>
                                        <div className="mt-4 text-sm text-yellow-300 flex items-center justify-center">
                                            <FaLightbulb className="mr-2" /> Returning students only
                                        </div>
                                    </div>
                                </motion.div>

                                {/* My Application Card */}
                                <motion.div
                                    className="bg-black bg-opacity-40 p-8 rounded-xl border-2 border-red-900 hover:border-yellow-400 transition-all backdrop-blur-sm"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative mb-4">
                                            <div className="flex items-center justify-center">
                                                <FaUserEdit className="text-purple-400 mr-2" size={30} />
                                                <FaIdCard className="text-blue-400" size={30} />
                                            </div>
                                            <motion.div
                                                className="absolute -top-2 -right-2 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    rotate: [0, 360]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity
                                                }}
                                            >
                                                <span className="text-xs font-bold">NEW</span>
                                            </motion.div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">My Application</h3>
                                        <p className="text-red-200 mb-6">
                                            Begin your journey to academic excellence with MVIT
                                        </p>
                                        <Link
                                            href={"/pages/apply"}
                                            className="w-full max-w-xs bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border border-yellow-400 text-white font-bold py-3 px-6 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center"
                                        >
                                            <motion.span
                                                animate={{
                                                    x: [0, 5, -5, 0],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity
                                                }}
                                                className="flex items-center"
                                            >
                                                <FaGraduationCap className="mr-2" /> Start Application <FaChevronRight className="ml-2" />
                                            </motion.span>
                                        </Link>
                                        <div className="mt-4 text-sm text-blue-300 flex items-center justify-center">
                                            <FaBookOpen className="mr-2" /> New students start here
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Floating Rocket Transition */}
                <motion.div
                    className="flex justify-center my-8"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <FaRocket className="text-yellow-400 text-4xl" />
                    </motion.div>
                </motion.div>

                {/* AI Course Value Proposition */}
                <div ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-40 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
                                Why Kids & Teens Love Our AI Academy
                            </h2>
                            <p className="text-xl text-red-200 max-w-3xl mx-auto">
                                Learning that feels like play, with results that impress parents!
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-black bg-opacity-60 p-8 rounded-xl border-2 border-red-900 hover:border-yellow-400 transition-all backdrop-blur-sm"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-yellow-400 mx-auto mb-4">
                                        {stat.icon}
                                    </div>
                                    <motion.h3
                                        className="text-3xl font-bold mb-3"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    >
                                        {stat.value}
                                    </motion.h3>
                                    <p className="text-yellow-200 text-xl">{stat.label}</p>
                                    <p className="text-sm text-red-300 mt-4">{index === 0
                                        ? "Students using AI tools show better results"
                                        : index === 1
                                            ? "Adaptive content speeds up learning"
                                            : "Every student gets a unique learning path"}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Testimonial Carousel */}
                        <motion.div
                            className="mt-20 bg-gradient-to-r from-red-900 to-black p-8 rounded-xl border-2 border-yellow-400 max-w-4xl mx-auto backdrop-blur-sm"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center">
                                <div className="mr-6">
                                    <motion.div
                                        className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl"
                                        animate={{
                                            rotate: [0, 360],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            repeatType: "loop"
                                        }}
                                    >
                                        😊
                                    </motion.div>
                                </div>
                                <div>
                                    <p className="text-lg text-white italic mb-2">
                                        &quot;I used to hate math, but now with the AI tutor, it&apos;s like having a fun game that teaches me! My grades went from C to A in just 2 months!&quot;
                                    </p>
                                    <p className="text-yellow-300">- Sarah, Age 12</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Floating Medals Transition */}
                <motion.div
                    className="flex justify-center my-8 space-x-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 20, -20, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <FaMedal className="text-yellow-400 text-4xl" />
                    </motion.div>
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, -15, 15, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.5
                        }}
                    >
                        <FaMedal className="text-red-400 text-4xl" />
                    </motion.div>
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 1
                        }}
                    >
                        <FaMedal className="text-blue-400 text-4xl" />
                    </motion.div>
                </motion.div>

                {/* AI Features Section */}
                <div ref={ref2} className="py-16 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-40 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0 }}
                            animate={inView2 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                                Supercharged Learning Tools
                            </h2>
                            <p className="text-xl text-red-200 max-w-3xl mx-auto">
                                Our AI makes learning as fun as your favorite video game!
                            </p>
                        </motion.div>

                        {/* Feature Showcase */}
                        <div className="mb-16">
                            <div className="flex justify-center mb-8">
                                <div className="flex space-x-2 bg-black bg-opacity-60 p-2 rounded-full border border-red-900">
                                    {features.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveFeature(index)}
                                            className={`w-3 h-3 rounded-full transition-all ${activeFeature === index ? 'bg-yellow-400 w-6' : 'bg-red-700'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="relative h-96">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeFeature}
                                        variants={featureVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 bg-black bg-opacity-40 p-8 rounded-xl border-2 border-purple-600 backdrop-blur-sm"
                                    >
                                        <div className="h-full flex flex-col md:flex-row items-center">
                                            <div className="text-purple-400 mb-6 md:mb-0 md:mr-8">
                                                {features[activeFeature].icon}
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold mb-4 text-yellow-300">
                                                    {features[activeFeature].title}
                                                </h3>
                                                <p className="text-xl text-red-200 mb-6">
                                                    {features[activeFeature].desc}
                                                </p>
                                                <ul className="space-y-3 text-white">
                                                    {features[activeFeature].bullets.map((bullet, i) => (
                                                        <motion.li
                                                            key={i}
                                                            className="flex items-center"
                                                            initial={{ x: -20, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: 0.1 * i }}
                                                        >
                                                            <span className="text-yellow-400 mr-2">✦</span> {bullet}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* All Features Grid */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView2 ? "visible" : "hidden"}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-black bg-opacity-40 p-8 rounded-xl border-2 border-red-900 hover:border-yellow-400 transition-all backdrop-blur-sm"
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0 0 20px rgba(234, 179, 8, 0.3)"
                                    }}
                                >
                                    <div className="text-yellow-400 mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-red-200 mb-4">
                                        {feature.desc}
                                    </p>
                                    <ul className="space-y-2 text-red-100">
                                        {feature.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-center">
                                                <span className="text-yellow-400 mr-2">•</span> {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Final CTA */}
                <div
                    ref={ref3}
                    className="bg-gradient-to-r from-blue-900 via-orange-500 to-yellow-300 py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-sm"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            className="text-4xl font-bold mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView3 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            Ready for Your <span className="text-yellow-400">Learning Adventure?</span>
                        </motion.h2>
                        <motion.p
                            className="text-xl text-red-200 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView3 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Join our community of young explorers discovering the joy of learning!
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row justify-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView3 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link
                                href="/mlms/login"
                                className="relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50 flex items-center justify-center"
                            >
                <span className="relative z-10 flex items-center">
                    <FaLock className="mr-2" /> Student Login <FaChevronRight className="ml-2" />
                </span>
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 hover:opacity-100 transition-opacity"
                                    initial={{ x: -100 }}
                                    animate={{ x: 1000 }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                />
                            </Link>
                            <Link
                                href="/pages/apply"
                                className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 border-2 border-yellow-400 flex items-center justify-center"
                            >
                <span className="relative z-10 flex items-center">
                    <FaGraduationCap className="mr-2" /> My Application <FaChevronRight className="ml-2" />
                </span>
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 hover:opacity-100 transition-opacity"
                                    initial={{ x: -100 }}
                                    animate={{ x: 1000 }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
                                />
                            </Link>
                        </motion.div>

                        {/* Floating confetti */}
                        <motion.div
                            className="mt-12 flex justify-center space-x-2"
                            initial={{ opacity: 0 }}
                            animate={inView3 ? { opacity: 1 } : {}}
                            transition={{ delay: 0.6 }}
                        >
                            {['🎓', '🚀', '🌟', '🧠', '🏆'].map((emoji, i) => (
                                <motion.span
                                    key={i}
                                    className="text-2xl"
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [0, 360]
                                    }}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                >
                                    {emoji}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIFeaturesPage;