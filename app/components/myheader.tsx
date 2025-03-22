'use client';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/mvut_flame.png';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'; // For mobile menu toggle
import { FaRegArrowAltCircleRight, FaSearch, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Icons for MLMS Login, Search, and Social Links
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';

// Load Google Font
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

// Top Header Component
function TopHeader() {
    return (
        <div className="bg-blue-800 text-white py-2">
            <div className="container mx-auto px-8 flex justify-between items-center">
                {/* Social Links */}
                <div className="flex space-x-4">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-xl hover:text-blue-400 transition-colors" />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-xl hover:text-blue-400 transition-colors" />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-xl hover:text-blue-400 transition-colors" />
                    </a>
                </div>

                {/* Quick News Marquee */}
                <div className="flex-1 mx-8 overflow-hidden">
                    <motion.div
                        className="whitespace-nowrap"
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    >
                        <span className="text-sm font-semibold">
                            🚀 Quick News: MVIT announces new scholarship programs for 2025! Apply now! 🎓
                        </span>
                    </motion.div>
                </div>

                {/* WhatsApp Contact */}
                <a
                    href="https://wa.me/17472094775"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-green-400 transition-colors"
                >
                    <FaWhatsapp className="text-xl" />
                    <span className="text-sm font-semibold">Contact Us</span>
                </a>
            </div>
        </div>
    );
}

// Main Header Component
export default function MyHeaderComponent() {
    const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
    const [isSearchOpen, setIsSearchOpen] = useState(false); // For search bar toggle

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <>
            {/* Top Header */}
            <TopHeader />

            {/* Main Header */}
            <nav
                className={`sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 shadow-md text-white ${montserrat.className}`}
            >
                {/* Desktop Navbar */}
                <div className="hidden md:flex justify-between items-center px-8 py-4">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 10,
                            delay: 0.2,
                        }}
                        className="flex items-center"
                    >
                        <Link href="/" className="flex items-center justify-center">
                            <Image
                                src={Logo}
                                alt="MVIT Logo"
                                width={48}
                                height={48}
                                className="mr-2 rounded-full shadow-lg"
                            />
                            <span className="text-2xl font-bold text-white">MVIT</span>
                        </Link>
                    </motion.div>

                    {/* Links */}
                    <ul className="flex space-x-8 text-lg font-semibold">
                        <motion.li
                            whileHover={{ scale: 1.1, color: '#ffffff' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Link href="/pages/team" className="hover:text-gray-200">
                                Team
                            </Link>
                        </motion.li>

                        <motion.li
                            whileHover={{ scale: 1.1, color: '#ffffff' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Link href="/pages/study" className="hover:text-gray-200">
                                Studies
                            </Link>
                        </motion.li>

                        <motion.li
                            whileHover={{ scale: 1.1, color: '#ffffff' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Link href="/pages/faculty" className="hover:text-gray-200">
                                Faculties
                            </Link>
                        </motion.li>

                        <motion.li
                            whileHover={{ scale: 1.1, color: '#ffffff' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Link href="/articles" className="hover:text-gray-200">
                                Articles
                            </Link>
                        </motion.li>

                        <motion.li
                            whileHover={{ scale: 1.1, color: '#ffffff' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Link href="/usai" className="hover:text-gray-200">
                                USAI
                            </Link>
                        </motion.li>

                    </ul>

                    {/* Search and MLMS Login */}
                    <div className="flex items-center space-x-6">
                        {/* Search Icon */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="cursor-pointer"
                            onClick={toggleSearch}
                        >
                            <FaSearch className="text-2xl text-white" />
                        </motion.div>

                        {/* Search Bar (Expands on click) */}
                        {isSearchOpen && (
                            <motion.input
                                initial={{ width: 0 }}
                                animate={{ width: 200 }}
                                transition={{ duration: 0.3 }}
                                type="text"
                                placeholder="Search..."
                                className="px-3 py-1 rounded-full bg-white text-black focus:outline-none"
                            />
                        )}

                        {/* MLMS Login Button */}
                        <Link href="/mlms" passHref legacyBehavior>
                            <motion.a
                                whileHover={{ scale: 1.1, backgroundColor: '#ffffff', color: '#1E40AF' }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="flex items-center bg-white text-blue-600 px-6 py-2 rounded-full font-semibold"
                            >
                                MLMS <FaRegArrowAltCircleRight className="ml-2" />
                            </motion.a>
                        </Link>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="md:hidden flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 10,
                            delay: 0.2,
                        }}
                        className="flex items-center"
                    >
                        <Link href="/" className="flex items-center justify-center">
                            <Image
                                src={Logo}
                                alt="MVIT Logo"
                                width={48}
                                height={48}
                                className="mr-2 rounded-full shadow-lg"
                            />
                            <span className="text-2xl font-bold text-white">MVIT</span>
                        </Link>
                    </motion.div>

                    {/* Menu Toggle */}
                    <motion.button
                        onClick={toggleMenu}
                        whileTap={{ scale: 0.9 }}
                        className="text-2xl text-white"
                    >
                        <AiOutlineMenu />
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden flex flex-col space-y-4 px-6 py-4 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 shadow-lg"
                    >
                        <Link
                            href="/pages/study"
                            className="text-lg font-semibold text-white hover:text-gray-200 transition-colors"
                        >
                            Studies
                        </Link>
                        <Link
                            href="/pages/faculty"
                            className="text-lg font-semibold text-white hover:text-gray-200 transition-colors"
                        >
                            Faculties
                        </Link>
                        <Link
                            href="/articles"
                            className="text-lg font-semibold text-white hover:text-gray-200 transition-colors"
                        >
                            Articles
                        </Link>
                        <Link
                            href="/usai"
                            className="text-lg font-semibold text-white hover:text-gray-200 transition-colors"
                        >
                            USAI
                        </Link>
                        <button
                            className="flex items-center bg-white text-blue-600 px-6 py-2 rounded-full font-semibold mt-4"
                            onClick={() => alert('MLMS Login!')}
                        >
                            MLMS Login <FaRegArrowAltCircleRight className="ml-2" />
                        </button>
                    </motion.div>
                )}
            </nav>
        </>
    );
}