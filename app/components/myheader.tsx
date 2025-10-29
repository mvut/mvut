'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/mvutflame.png';
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showMoreLinks, setShowMoreLinks] = useState(false);
    const [showProducts, setShowProducts] = useState(false); // New state for Products dropdown
    const [windowHeight, setWindowHeight] = useState(0);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const productsDropdownRef = useRef<HTMLDivElement>(null); // Ref for Products dropdown
    const productsButtonRef = useRef<HTMLButtonElement>(null); // Ref for Products button

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        const handleResize = () => setWindowHeight(window.innerHeight);

        handleResize();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Close dropdowns when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            // Handle More Links dropdown
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setShowMoreLinks(false);
            }
            // Handle Products dropdown
            if (
                productsDropdownRef.current &&
                !productsDropdownRef.current.contains(event.target as Node) &&
                productsButtonRef.current &&
                !productsButtonRef.current.contains(event.target as Node)
            ) {
                setShowProducts(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMoreLinks = () => {
        setShowMoreLinks((prev) => !prev);
        setShowProducts(false); // Close Products dropdown when opening More Links
    };

    const toggleProducts = () => {
        setShowProducts((prev) => !prev);
        setShowMoreLinks(false); // Close More Links dropdown when opening Products
    };

    const handleLinkClick = () => {
        setShowMoreLinks(false);
        setShowProducts(false); // Close both dropdowns on link click
    };

    const mainNavItems = [
        { title: 'Flagship-Program', href: '/pages/mcasce' },
        { title: 'Profile', href: '/pages/profile' },


    ];

    const productItems = [
        { title: 'Programs', href: '/pages/study' },
        { title: 'Tariff', href: '/pages/study/fee' },



    ];

    const socialLinks = [
        { icon: <FaFacebook size={14} />, href: 'https://web.facebook.com/mvutus' },
        { icon: <FaLinkedin size={14} />, href: 'https://www.linkedin.com/company/mvut/' }
    ];

    return (
        <>
            <header className={`sticky top-0 z-50 ${scrolled ? 'bg-gray-900/95 shadow-xl' : 'bg-gray-900'} backdrop-blur-sm transition-all duration-300`}>

                {/* Main Navigation */}
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-3">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex-shrink-0">
                            <Link href="/" className="flex items-center gap-3">
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Image src={Logo} alt="MVIT Logo" width={50} height={50} className="object-contain" />
                                </motion.div>
                            </Link>
                        </motion.div>

                        <nav className="hidden md:flex items-center">
                            <ul className="flex items-center space-x-1 lg:space-x-2">
                                {mainNavItems.map((item) => (
                                    <motion.li
                                        key={item.title}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="flex items-center h-full"
                                    >
                                        <Link
                                            href={item.href}
                                            className="relative px-4 py-2 text-gray-300 hover:text-white font-medium group flex items-center h-full"
                                        >
                                            {item.title}
                                            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                                        </Link>
                                    </motion.li>
                                ))}

                                {/* Products Dropdown */}
                                <motion.li className="relative flex items-center h-full">
                                    <motion.button
                                        ref={productsButtonRef}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={toggleProducts}
                                        className="relative px-4 py-2 text-gray-300 hover:text-white font-medium group flex items-center h-full gap-1"
                                        aria-label="Toggle Products Dropdown"
                                        aria-expanded={showProducts}
                                    >
                                        Education
                                        <motion.span animate={{ rotate: showProducts ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                            <FaChevronDown className="text-xs mt-0.5" />
                                        </motion.span>
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                                    </motion.button>

                                    {showProducts && (
                                        <motion.div
                                            ref={productsDropdownRef}
                                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg shadow-xl rounded-lg border border-gray-700 z-50"
                                        >
                                            <div className="py-2">
                                                {productItems.map((item, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.05, duration: 0.2 }}
                                                    >
                                                        <Link
                                                            href={item.href}
                                                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
                                                            onClick={handleLinkClick}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.li>

                            </ul>
                        </nav>

                        <div className="hidden md:flex items-center gap-4">

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="/pages/apply" className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-full font-medium hover:from-green-600 hover:to-green-700 transition-all">
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>

                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-gray-300 hover:text-white p-2" aria-label="Toggle menu">
                            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-2">
                                {mainNavItems.map((item) => (
                                    <motion.div key={item.title} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                        <Link href={item.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                                            {item.title}
                                        </Link>
                                    </motion.div>
                                ))}

                                {/* Products in Mobile Menu */}
                                <div className="px-4 py-3">
                                    <h3 className="text-gray-400 font-medium mb-2">Products</h3>
                                    <div className="grid grid-cols-1 gap-2">
                                        {productItems.map((item, index) => (
                                            <Link
                                                key={index}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors"
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 flex flex-col gap-3">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Link href="/pages/apply" className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-full font-medium hover:from-green-600 hover:to-green-700 transition-all">
                                            Get Started
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </header>

            <style jsx global>{`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Montserrat:wght@600;700&display=swap');
body { font-family: 'Poppins', sans-serif; }
h1, h2, h3, h4, h5, h6, .font-heading { font-family: 'Montserrat', sans-serif; }
`}</style>
        </>
    );
}
