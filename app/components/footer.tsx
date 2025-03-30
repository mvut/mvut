'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppQR from '@/public/mvit-whtsapp.png'; // Replace with your actual WhatsApp QR image
import {
    FaFacebookF,
    FaWhatsapp,
    FaMailBulk,
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { Montserrat } from 'next/font/google';

// Load Google Font
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

export default function FooterComponent() {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger child animations
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 80, damping: 12 }, // Smooth spring effect
        },
    };

    return (
        <div className={`bg-gradient-to-br from-black via-red-900 to-red-800 py-16 ${montserrat.className}`}>
            {/* Main Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-10 text-gray-100"
            >
                {/* Contact Information */}
                <motion.div variants={itemVariants} className="flex flex-col gap-4">
                    <p className="text-lg font-bold text-white">Get in Touch</p>
                    <p className="text-md">Mansha Virtual Institute of Technologies</p>
                    <div className="flex items-center gap-2">
                        <FaMailBulk size={20} className="text-red-400" />
                        <p className="text-sm">mvut.usa@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaWhatsapp size={20} className="text-green-400" />
                        <p className="text-sm">+1 (747) 209-4775</p>
                    </div>
                    {/* WhatsApp QR Code */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={WhatsAppQR}
                            alt="WhatsApp QR Code"
                            width={120}
                            height={120}
                            className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        />
                    </div>
                </motion.div>

                {/* Important Links */}
                <motion.div variants={itemVariants} className="flex flex-col gap-2">
                    <p className="text-lg font-bold text-white">Quick Links</p>
                    {/*<Link href="/tet" className="hover:text-red-400 transition-all duration-300">*/}
                    {/*    TET*/}
                    {/*</Link>*/}
                    <Link href="/pages/leadership" className="hover:text-red-400 transition-all duration-300">
                        Leadership
                    </Link>

                    <Link href="/pages/honoraryphd" className="hover:text-red-400 transition-all duration-300">
                        Honoris
                    </Link>
                    <Link href="/verify" className="hover:text-red-400 transition-all duration-300">
                        Validation
                    </Link>
                    <Link href="/pages/admlst" className="hover:text-red-400 transition-all duration-300">
                        Acceptees
                    </Link>
                    <Link href="/qac" className="hover:text-red-400 transition-all duration-300">
                        QAC
                    </Link>
                    {/*<Link href="/articles" className="hover:text-red-400 transition-all duration-300">*/}
                    {/*    Articles*/}
                    {/*</Link>*/}
                </motion.div>

                {/* Subscription Form */}
                <motion.div variants={itemVariants} className="flex flex-col gap-4">
                    <p className="text-lg font-bold text-white">Subscribe to Updates</p>
                    <form className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-lg bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 border border-red-500"
                        />
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                    {/* Social Media Links */}
                    <div className="flex gap-4 mt-2">
                        <Link href="#" className="text-white hover:text-red-400 transition-colors duration-300">
                            <FaFacebookF size={20} />
                        </Link>
                        <Link href="#" className="text-white hover:text-red-400 transition-colors duration-300">
                            <FaInstagram size={20} />
                        </Link>
                        <Link href="#" className="text-white hover:text-red-400 transition-colors duration-300">
                            <FaLinkedin size={20} />
                        </Link>
                        <Link href="#" className="text-white hover:text-red-400 transition-colors duration-300">
                            <CiYoutube size={22} />
                        </Link>
                        <Link href="#" className="text-white hover:text-red-400 transition-colors duration-300">
                            <FaGithub size={20} />
                        </Link>
                    </div>
                </motion.div>

                {/* Google Map */}
                <motion.div variants={itemVariants} className="flex flex-col gap-4">
                    <p className="text-lg font-bold text-white">Our Location</p>
                    <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg border border-red-500">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.678123456789!2d-118.12345678901234!3d34.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA3JzI0LjQiTiAxMTjCsDA3JzI0LjQiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Bar */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container flex flex-col sm:flex-row justify-between items-center mt-10 px-10 text-gray-300 text-sm bg-black/40 py-4 border-t border-red-900"
            >
                <p className="text-xs sm:text-sm">
                    Powered by{' '}
                    <Link href="https://www.mvut.us/" target="_blank" className="text-red-400 uppercase hover:underline">
                        MVIT
                    </Link>
                </p>
                <div className="relative group">
                    <button className="text-xs sm:text-sm cursor-pointer relative">
                        <span className="relative inline-block">
                            Data Privacy
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </button>
                    <div className="absolute hidden group-hover:block bottom-full right-0 mb-2 w-64 bg-black/90 text-white text-xs p-4 rounded-lg shadow-lg z-50 border border-red-500">
                        <p className="font-bold text-white mb-2">Data Privacy Policy</p>
                        <p className="text-gray-300">
                            At MVIT, we prioritize data protection, collecting only necessary personal data (contact, device, usage,
                            and location information) to enhance your experience, communicate effectively, and comply with regulations.
                            We implement robust security measures to safeguard your data and may share it with affiliates, service
                            providers, and law enforcement as required. You have the right to access, update, withdraw consent, object,
                            and request deletion of your data. Our commitment to transparency and security ensures your trust and
                            confidence.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}