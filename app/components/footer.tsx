'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppQR from '@/public/mvit-whtsapp.png';
import {
    FaFacebookF,
    FaWhatsapp,
    FaMailBulk,
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaMapMarkerAlt
} from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { Oswald, Montserrat } from 'next/font/google';

// Load Google Fonts
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-oswald'
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
    variable: '--font-montserrat'
});

export default function FooterComponent() {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15
            }
        }
    };

    const socialLinks = [
        { icon: <FaFacebookF size={18} />, href: "#", color: "hover:text-[#1877F2]" },
        { icon: <FaInstagram size={18} />, href: "#", color: "hover:text-[#E1306C]" },
        { icon: <FaLinkedin size={18} />, href: "#", color: "hover:text-[#0077B5]" },
        { icon: <CiYoutube size={20} />, href: "#", color: "hover:text-[#FF0000]" },
        { icon: <FaGithub size={18} />, href: "#", color: "hover:text-gray-400" }
    ];

    const quickLinks = [
        { name: "Leadership", href: "/pages/leadership" },
        { name: "Honoris", href: "/pages/honoraryphd" },
        { name: "Validation", href: "/verify" },
        { name: "Acceptees", href: "/pages/admlst" },
        { name: "QAC", href: "/qac" }
    ];

    return (
        <footer className={`bg-gradient-to-b from-black to-gray-900 text-gray-300 ${montserrat.variable} ${oswald.variable}`}>
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    {/* Contact Information */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-xl font-bold text-white font-oswald tracking-wide">GET IN TOUCH</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-red-500 mt-1 flex-shrink-0" />
                                <p>Mansha Virtual Institute of Technologies</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMailBulk className="text-red-500" />
                                <a href="mailto:mvut.usa@gmail.com" className="hover:text-white transition-colors">
                                    mvut.usa@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaWhatsapp className="text-green-500" />
                                <a href="https://wa.me/17472094775" className="hover:text-white transition-colors">
                                    +1 (747) 209-4775
                                </a>
                            </div>
                        </div>

                        {/* WhatsApp QR Code */}
                        <div className="pt-2">
                            <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-white/10 hover:border-red-500 transition-all">
                                <Image
                                    src={WhatsAppQR}
                                    alt="WhatsApp QR Code"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-xs mt-2 text-gray-400">Scan to chat on WhatsApp</p>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-xl font-bold text-white font-oswald tracking-wide">QUICK LINKS</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-red-500 transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-xl font-bold text-white font-oswald tracking-wide">NEWSLETTER</h3>
                        <p className="text-gray-400">Subscribe to our newsletter for the latest updates</p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/20"
                            >
                                Subscribe
                            </button>
                        </form>
                    </motion.div>

                    {/* Social Media & Location */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-xl font-bold text-white font-oswald tracking-wide">CONNECT WITH US</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gray-400 hover:text-white ${social.color} transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700`}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>

                        <div className="pt-4">
                            <h4 className="text-lg font-semibold text-white mb-3">OUR LOCATION</h4>
                            <div className="w-full h-48 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.678123456789!2d-118.12345678901234!3d34.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA3JzI0LjQiTiAxMTjCsDA3JzI0LjQiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-xl"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Copyright & Privacy */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border-t border-gray-800 py-6"
            >
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} MVIT. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link
                            href="https://www.mvut.us/"
                            target="_blank"
                            className="text-sm font-medium text-red-500 hover:text-red-400 transition-colors"
                        >
                            Official Website
                        </Link>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}