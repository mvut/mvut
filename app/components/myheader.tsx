'use client';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/mvutflame.png';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaRegArrowAltCircleRight, FaSearch, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
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
        <div className="bg-black text-white py-2 border-b border-red-900">
            <div className="container mx-auto px-8 flex justify-between items-center">
                {/* Social Links */}
                <div className="flex space-x-4">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-xl hover:text-red-500 transition-colors" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-xl hover:text-red-500 transition-colors" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-xl hover:text-red-500 transition-colors" />
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
                    className="flex items-center space-x-2 hover:text-red-500 transition-colors"
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
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    const mainNavItems = [
        { title: 'Studies', href: '/pages/study' },
        { title: 'Faculties', href: '/pages/faculty' },  // Added Faculties
        { title: 'Tariff', href: '/pages/study/fee' },  // Added Faculties
        { title: 'Services', href: '/pages/services' },
        { title: 'Research', href: '/pages/research' },
        { title: 'USAI', href: '/usai' }
    ];

    return (
        <>
            {/* Top Header */}
            <TopHeader />

            {/* Main Header */}
            <nav className={`sticky top-0 z-50 bg-gradient-to-r from-black via-red-900 to-black shadow-md text-white ${montserrat.className}`}>
                {/* Desktop Navbar */}
                <div className="hidden md:flex justify-between items-center px-8 py-4">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
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

                    {/* Main Navigation */}
                    <ul className="flex space-x-8 text-lg font-semibold">
                        {mainNavItems.map((item) => (
                            <motion.li
                                key={item.title}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Link href={item.href} className="hover:text-red-400 py-2 px-1">
                                    {item.title}
                                </Link>
                            </motion.li>
                        ))}
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

                        {/* Search Bar */}
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
                                whileHover={{ scale: 1.1, backgroundColor: '#ffffff', color: '#DC2626' }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="flex items-center bg-white text-red-600 px-6 py-2 rounded-full font-semibold"
                            >
                                MLMS <FaRegArrowAltCircleRight className="ml-2" />
                            </motion.a>
                        </Link>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="md:hidden flex justify-between items-center px-6 py-4 bg-gradient-to-r from-black via-red-900 to-black">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
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
                        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-gradient-to-b from-black to-red-900 shadow-lg"
                    >
                        {mainNavItems.map((item) => (
                            <div key={item.title} className="border-b border-red-900/50">
                                <Link
                                    href={item.href}
                                    className="block px-6 py-4 text-lg font-semibold text-white hover:text-red-400"
                                >
                                    {item.title}
                                </Link>
                            </div>
                        ))}

                        {/* Mobile Search and Login */}
                        <div className="p-4 flex flex-col space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="flex-1 px-3 py-2 rounded-l-full bg-white text-black focus:outline-none"
                                />
                                <button className="bg-red-600 text-white px-4 py-2 rounded-r-full">
                                    <FaSearch />
                                </button>
                            </div>
                            <Link
                                href="/mlms"
                                className="flex items-center justify-center bg-white text-red-600 px-6 py-3 rounded-full font-semibold"
                            >
                                MLMS Login <FaRegArrowAltCircleRight className="ml-2" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </nav>
        </>
    );
}