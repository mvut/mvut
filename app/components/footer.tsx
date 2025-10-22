'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub, FaChevronRight, FaMapMarkerAlt, FaPhone, FaEnvelope, FaShieldAlt, FaRocket, FaBrain, FaCog, FaChartLine, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
    variable: '--font-inter',
});

interface SocialLink {
    icon: React.ReactNode;
    href: string;
    color: string;
    label: string;
}

interface Service {
    title: string;
    href: string;
    icon: React.ReactNode;
    description: string;
}

interface Program {
    title: string;
    href: string;
}

interface Resource {
    title: string;
    href: string;
}

const FooterComponent: React.FC = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [subscriptionStatus, setSubscriptionStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setSubscriptionStatus({
                success: false,
                message: 'Please enter your email address.'
            });
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setSubscriptionStatus({
                success: false,
                message: 'Please enter a valid email address.'
            });
            return;
        }

        setLoading(true);
        setSubscriptionStatus(null);

        try {
            const response = await fetch('/api/auth/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (result.success) {
                setSubscriptionStatus({
                    success: true,
                    message: result.message
                });
                setEmail(''); // Clear the input on success
            } else {
                setSubscriptionStatus({
                    success: false,
                    message: result.message
                });
            }
        } catch (error) {
            setSubscriptionStatus({
                success: false,
                message: 'Network error. Please try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    const socialLinks: SocialLink[] = [
        { icon: <FaFacebookF size={20} />, href: 'https://web.facebook.com/mvutus', color: 'hover:text-blue-400', label: 'Facebook' },
        { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/mvitech/', color: 'hover:text-pink-400', label: 'Instagram' },
        { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/company/mvut/', color: 'hover:text-blue-400', label: 'LinkedIn' },
        { icon: <CiYoutube size={22} />, href: 'https://www.youtube.com/@mvutus', color: 'hover:text-red-400', label: 'YouTube' },
        { icon: <FaGithub size={20} />, href: 'https://github.com/drsagher/MVIT', color: 'hover:text-gray-300', label: 'GitHub' },
    ];

    const services: Service[] = [
        {
            title: 'Custom AI Solutions',
            href: '/pages/services',
            icon: <FaBrain className="text-blue-400" />,
            description: 'Tailored AI systems for your business challenges'
        },
        {
            title: 'Agentic AI Systems',
            href: '/pages/services',
            icon: <FaRocket className="text-purple-400" />,
            description: 'Autonomous AI agents for complex tasks'
        },
        {
            title: 'AI Integration',
            href: '/pages/services',
            icon: <FaCog className="text-green-400" />,
            description: 'Seamless AI integration into existing systems'
        },
        {
            title: 'Predictive Analytics',
            href: '/pages/services',
            icon: <FaChartLine className="text-orange-400" />,
            description: 'Data-driven insights and forecasting'
        }
    ];

    const programs: Program[] = [
        { title: 'MCASCE', href: '/pages/mcasce' },
        { title: 'K.G. STEM Entrepreneurs', href: '/pages/kg-ai' },
        { title: 'Applicants', href: '/pages/admissions' },
    ];

    const resources: Resource[] = [
        { title: 'Career Opportunities', href: '/pages/mycareer' },
        { title: 'Academic Programs', href: '/pages/study' },
        { title: 'Fee Structure', href: '/pages/study/fee' },
        { title: 'Academic Calendar', href: '/pages/datesheet' },
        { title: 'Research', href: '/pages/research' },
    ];

    const companyLinks = [
        { title: 'About MVIT', href: '/pages/about' },
    ];

    return (
        <footer className={`relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-gray-300 ${inter.variable} overflow-hidden`}>
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

            {/* Main Footer Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8 lg:gap-12"
                >
                    {/* Brand & Description */}
                    <motion.div variants={itemVariants} className="xl:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-sm">MVIT</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">MVIT Labs</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Pioneering AI-driven education and enterprise solutions. We empower learners and businesses
                            with cutting-edge AI technologies, bridging the gap between foundational knowledge and
                            advanced artificial intelligence proficiency.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 pt-4">
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" />
                                <span>Virtual AI Research Center</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <FaPhone className="text-green-400 flex-shrink-0" />
                                <span>+923460050008</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <FaEnvelope className="text-purple-400 flex-shrink-0" />
                                <span>mvut.usa@gmail.com</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* AI Services */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <FaRocket className="text-blue-400" />
                            AI Services
                        </h3>
                        <div className="space-y-3">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className="group"
                                >
                                    <Link
                                        href={service.href}
                                        className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-all duration-300 group"
                                    >
                                        <div className="mt-0.5 flex-shrink-0">
                                            {service.icon}
                                        </div>
                                        <div>
                                            <div className="font-medium group-hover:text-blue-400 transition-colors">
                                                {service.title}
                                            </div>
                                            <div className="text-xs text-gray-500 mt-1">
                                                {service.description}
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Academic Programs */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Academic Programs</h3>
                        <div className="space-y-3">
                            {programs.map((program, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className="group"
                                >
                                    <Link
                                        href={program.href}
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-300 group"
                                    >
                                        <FaChevronRight className="text-blue-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="group-hover:text-blue-400 transition-colors">
                                            {program.title}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Resources */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Resources</h3>
                        <div className="space-y-3">
                            {resources.map((resource, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className="group"
                                >
                                    <Link
                                        href={resource.href}
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        <FaChevronRight className="text-green-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="group-hover:text-green-400 transition-colors">
                                            {resource.title}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Company */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Company</h3>
                        <div className="space-y-3">
                            {companyLinks.map((link, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className="group"
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        <FaChevronRight className="text-purple-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="group-hover:text-purple-400 transition-colors">
                                            {link.title}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Social Links & Newsletter */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-12 pt-8 border-t border-gray-800/50"
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        {/* Social Links */}
                        <motion.div variants={itemVariants} className="flex items-center gap-4">
                            <span className="text-sm text-gray-400 font-medium">Follow our innovation:</span>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`text-gray-400 ${social.color} p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10`}
                                        aria-label={`Visit our ${social.label}`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Newsletter Signup */}
                        <motion.div variants={itemVariants} className="flex-1 max-w-md">
                            <form onSubmit={handleSubscribe} className="space-y-2">
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Subscribe to AI insights..."
                                        className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                                        disabled={loading}
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {loading ? (
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            'Subscribe'
                                        )}
                                    </button>
                                </div>

                                {/* Subscription Status Message */}
                                {subscriptionStatus && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex items-center gap-2 text-xs ${
                                            subscriptionStatus.success
                                                ? 'text-green-400'
                                                : 'text-red-400'
                                        }`}
                                    >
                                        {subscriptionStatus.success ? (
                                            <FaCheck className="flex-shrink-0" />
                                        ) : (
                                            <FaExclamationTriangle className="flex-shrink-0" />
                                        )}
                                        <span>{subscriptionStatus.message}</span>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <div className="flex items-center gap-6 text-gray-400">
                            <span>© {new Date().getFullYear()} MVIT. All rights reserved.</span>
                            <div className="flex items-center gap-1 text-xs">
                                <FaShieldAlt className="text-green-400" />
                                <span>Enterprise-Grade Security</span>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default FooterComponent;