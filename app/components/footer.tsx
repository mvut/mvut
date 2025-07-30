'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppQR from '@/public/mvit-whtsapp.jpg';
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
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20
            }
        }
    };

    const socialLinks = [
        { icon: <FaFacebookF size={24} />, href: "https://web.facebook.com/mvutus", color: "hover:text-[#D4AF37]" },
        { icon: <FaInstagram size={24} />, href: "https://www.instagram.com/drsagher/", color: "hover:text-[#2DD4BF]" },
        { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/company/mvut/", color: "hover:text-[#D4AF37]" },
        { icon: <CiYoutube size={26} />, href: "https://www.youtube.com/@mvutus", color: "hover:text-[#2DD4BF]" },
        { icon: <FaGithub size={24} />, href: "https://github.com/drsagher/MVIT", color: "hover:text-[#D4AF37]" }
    ];

    return (
        <footer className={`relative bg-gradient-to-b from-[#0F172A] to-black text-gray-200 ${montserrat.variable} ${oswald.variable} overflow-hidden`}>
            {/* Background Animation */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full bg-[linear-gradient(45deg,#0F172A_0%,#1E3A8A_50%,#2DD4BF_100%)] bg-[length:200%_200%] animate-gradient-flow opacity-20"></div>
                <div className="absolute top-10 left-10 w-1 h-1 bg-[#D4AF37] rounded-full animate-star-drift" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-20 right-20 w-1 h-1 bg-[#2DD4BF] rounded-full animate-star-drift" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-10 left-40 w-1 h-1 bg-[#D4AF37] rounded-full animate-star-drift" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative max-w-full mx-auto px-0 py-16 z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-8"
                >
                    {/* MVIT Contact */}
                    <motion.div variants={itemVariants} className="px-6 space-y-4">
                        <h3 className="text-xl font-bold font-oswald tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#2DD4BF]">
                            MVIT
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed font-light">
                            Mansha Virtual Institute of Technologies is dedicated to advancing education through innovative programs in AI, technology, and research, empowering global learners.
                        </p>
                        <div className="space-y-3">
                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
                                <FaMailBulk className="text-[#D4AF37]" size={18} />
                                <a href="mailto:mvut.usa@gmail.com" className="text-sm hover:text-[#D4AF37] transition-colors">
                                    mvut.usa@gmail.com
                                </a>
                            </motion.div>
                            {/*<motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">*/}
                            {/*    <FaWhatsapp className="text-[#2DD4BF]" size={18} />*/}
                            {/*    <a href="https://chat.whatsapp.com/Ilrz17rzdlCLMsGH3amsu1" className="text-sm hover:text-[#2DD4BF] transition-colors">*/}
                            {/*        +1 (747) 209-4775*/}
                            {/*    </a>*/}
                            {/*</motion.div>*/}
                            {/*<motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">*/}
                            {/*    <FaMapMarkerAlt className="text-[#D4AF37]" size={18} />*/}
                            {/*    <p className="text-sm text-gray-300">MVIT Headquarters, USA</p>*/}
                            {/*</motion.div>*/}
                        </div>
                    </motion.div>

                    {/* Google Map */}
                    <motion.div variants={itemVariants} className="px-6 space-y-4">
                        <h3 className="text-xl font-bold font-oswald tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#2DD4BF]">
                            Our Location
                        </h3>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="w-full h-56 rounded-xl overflow-hidden border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all shadow-[0_0_10px_rgba(212,175,55,0.2)]"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.678123456789!2d-118.12345678901234!3d34.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA3JzI0LjQiTiAxMTjCsDA3JzI0LjQiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl"
                                title="MVIT Location Map"
                            ></iframe>
                        </motion.div>
                    </motion.div>

                    {/* Connect via WhatsApp */}
                    <motion.div variants={itemVariants} className="px-6 space-y-4">
                        <h3 className="text-xl font-bold font-oswald tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#2DD4BF]">
                            Connect via WhatsApp
                        </h3>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-32 h-32 rounded-xl overflow-hidden bg-gray-900/30 backdrop-blur-sm border-2 border-[#2DD4BF]/20 hover:border-[#2DD4BF]/50 transition-all shadow-[0_0_10px_rgba(45,212,191,0.2)]"
                        >
                            <Image
                                src={WhatsAppQR}
                                alt="WhatsApp QR Code"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <p className="text-xs text-gray-400 font-light">Scan to connect with us</p>
                    </motion.div>

                    {/* Follow Us (Social Media) */}
                    <motion.div variants={itemVariants} className="px-6 space-y-4">
                        <h3 className="text-xl font-bold font-oswald tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#2DD4BF]">
                            Follow Us
                        </h3>
                        <div className="flex flex-col gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, x: 5, boxShadow: "0 0 8px rgba(212, 175, 55, 0.3)" }}
                                    className={`text-gray-300 ${social.color} p-2 rounded-full bg-gray-900/30 backdrop-blur-sm border border-[#D4AF37]/20 transition-all duration-300 flex items-center gap-2`}
                                    aria-label={`Visit our ${social.href.includes('facebook') ? 'Facebook' : social.href.includes('instagram') ? 'Instagram' : social.href.includes('linkedin') ? 'LinkedIn' : social.href.includes('youtube') ? 'YouTube' : 'GitHub'}`}
                                >
                                    {social.icon}
                                    <span className="text-sm font-light hidden sm:inline">
                                        {social.href.includes('facebook') ? 'Facebook' : social.href.includes('instagram') ? 'Instagram' : social.href.includes('linkedin') ? 'LinkedIn' : social.href.includes('youtube') ? 'YouTube' : 'GitHub'}
                                    </span>
                                </motion.a>
                            ))}
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
                className="relative border-t border-[#D4AF37]/10 py-6 bg-gray-900/30 backdrop-blur-sm z-10"
            >
                <div className="max-w-full mx-auto px-0">
                    <div className="px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-400 font-light">
                            © {new Date().getFullYear()} MVIT. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="/privacy" className="text-xs text-gray-400 hover:text-[#D4AF37] transition-colors font-light">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-xs text-gray-400 hover:text-[#D4AF37] transition-colors font-light">
                                Terms of Service
                            </Link>
                            <Link
                                href="https://www.mvitech.org/"
                                target="_blank"
                                className="text-xs font-medium text-[#2DD4BF] hover:text-[#2DD4BF]/80 transition-colors font-light"
                            >
                                Official Website
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>

            <style jsx global>{`
                .animate-gradient-flow {
                    animation: gradientFlow 15s ease infinite;
                }
                @keyframes gradientFlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-star-drift {
                    animation: starDrift 10s linear infinite;
                }
                @keyframes starDrift {
                    0% { transform: translate(0, 0); opacity: 0.3; }
                    50% { opacity: 0.8; }
                    100% { transform: translate(20px, 20px); opacity: 0.3; }
                }
            `}</style>
        </footer>
    );
}