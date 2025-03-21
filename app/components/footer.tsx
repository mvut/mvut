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
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
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
        <div className={`bg-gradient-to-br from-indigo-900 via-purple-800 to-teal-900 py-16 ${montserrat.className}`}>
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
                        <FaMailBulk size={20} className="text-amber-300" />
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
                    <Link href="/pages/leadership" className="hover:text-amber-300 transition-all duration-300">
                        Leadership
                    </Link>
                    <Link href="/pages/services" className="hover:text-amber-300 transition-all duration-300">
                        Services
                    </Link>
                    <Link href="/pages/study/fee" className="hover:text-amber-300 transition-all duration-300">
                        Fee Structure
                    </Link>
                    <Link href="/pages/honoraryphd" className="hover:text-amber-300 transition-all duration-300">
                        Honorary PhD
                    </Link>
                    <Link href="/verify" className="hover:text-amber-300 transition-all duration-300">
                        Online Verification
                    </Link>
                    <Link href="/pages/research" className="hover:text-amber-300 transition-all duration-300">
                        Research
                    </Link>
                    <Link href="/pages/admlst" className="hover:text-amber-300 transition-all duration-300">
                        List of Candidates
                    </Link>
                    <Link href="/qac" className="hover:text-amber-300 transition-all duration-300">
                        Quality Assurance Cell (QAC)
                    </Link>
                </motion.div>

                {/* Subscription Form */}
                <motion.div variants={itemVariants} className="flex flex-col gap-4">
                    <p className="text-lg font-bold text-white">Subscribe to Updates</p>
                    <form className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                        />
                        <button
                            type="submit"
                            className="bg-amber-300 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-amber-400 transition-all duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>

                {/* Google Map */}
                <motion.div variants={itemVariants} className="flex flex-col gap-4">
                    <p className="text-lg font-bold text-white">Our Location</p>
                    <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
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

            {/* Social Media Links */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container flex flex-col sm:flex-row justify-between items-center mt-10 px-10 text-gray-300 text-sm bg-black/20 py-4"
            >
                <p className="text-xs sm:text-sm">
                    Powered by{' '}
                    <Link href="https://www.mvut.us/" target="_blank" className="text-amber-300 uppercase hover:underline">
                        MVIT
                    </Link>
                </p>
                <HoverCard>
                    <HoverCardTrigger className="text-xs sm:text-sm cursor-pointer underline-animation">
                        Data Privacy
                    </HoverCardTrigger>
                    <HoverCardContent className="text-xs bg-stone-900 p-4 rounded-lg shadow-lg">
                        <p className="font-bold text-white">Data Privacy Policy</p>
                        <p className="text-xs text-gray-300">
                            At MVIT, we prioritize data protection, collecting only necessary personal data (contact, device, usage,
                            and location information) to enhance your experience, communicate effectively, and comply with regulations.
                            We implement robust security measures to safeguard your data and may share it with affiliates, service
                            providers, and law enforcement as required. You have the right to access, update, withdraw consent, object,
                            and request deletion of your data. Our commitment to transparency and security ensures your trust and
                            confidence.
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </motion.div>
        </div>
    );
}