'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/mvutflame.png';
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoMdNotifications } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";

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

    const newsItems = [
        "Apply for MCASCE Eligibility Test",
        "Eligibility Test Fee - $5",
        "Admission Test Fee- $70, Monthly Fee-$35",
        "Start your research project, today"
    ];

    const mainNavItems = [
        { title: 'Programs', href: '/pages/study' },
        { title: 'Faculties', href: '/pages/faculty' },
        { title: 'Tariff', href: '/pages/study/fee' },
        { title: 'Articles', href: '/pages/articles' },
    ];

    const productItems = [
        { title: 'Careers', href: '/pages/mycareer' },
        { title: 'AI Education', href: '/pages/aie' },
        { title: 'ELITE Certification', href: '/pages/elite' },
        { title: 'AI Solutions', href: '/pages/agents' },

    ];

    const moreLinks = [
        { title: 'Services', href: '/pages/services' },
        { title: 'Leadership', href: '/pages/leadership' },
        { title: 'Honorary Ph.D.', href: '/pages/honoraryphd' },
        { title: 'Degree Verification', href: '/verify' },
        { title: 'Admitted Candidates', href: '/pages/admlst' },
        { title: 'United School of AI', href: '/usai' },
        { title: 'Quality Assurance Commission', href: '/qac' },
        { title: 'Success Stories', href: '/pages/stories' },
        { title: 'Trainings', href: '/pages/trainings' },
        { title: 'Research', href: '/pages/research' },
        { title: 'Scholarship', href: '/pages/scholarship' },
        { title: 'ABS Academy', href: '/pages/absacademy' },
        { title: 'ABS International', href: '/pages/absinternational' },
    ];

    const socialLinks = [
        { icon: <FaFacebook size={14} />, href: 'https://web.facebook.com/mvutus' },
        { icon: <FaLinkedin size={14} />, href: 'https://www.linkedin.com/company/mvut/' }
    ];

    return (
        <>
            <header className={`sticky top-0 z-50 ${scrolled ? 'bg-gray-900/95 shadow-xl' : 'bg-gray-900'} backdrop-blur-sm transition-all duration-300`}>
                {/* Top Contact Bar */}
                <div className="border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col sm:flex-row justify-between items-center py-2 gap-2 sm:gap-0">
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                {/*<motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">*/}
                                {/*    <FaPhoneAlt className="text-blue-400" />*/}
                                {/*    <Link href="tel:+923017362696">+923017362696</Link>*/}
                                {/*</motion.div>*/}
                                <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
                                    <FaEnvelope className="text-blue-400" />
                                    <Link href="mailto:dr.sagher@gmail.com">dr.sagher@gmail.com</Link>
                                </motion.div>
                            </div>

                            <div className="hidden md:flex items-center overflow-hidden bg-gray-800/50 rounded-full px-3 py-1 max-w-lg">
                                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-blue-400 mr-2">
                                    <IoMdNotifications />
                                </motion.div>
                                <div className="overflow-hidden">
                                    <motion.div
                                        className="whitespace-nowrap"
                                        animate={{ x: ['100%', '-100%'] }}
                                        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                                    >
                                        {newsItems.map((item, index) => (
                                            <span key={index} className="inline-block mx-6 text-sm text-gray-300">{item}</span>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2 bg-blue-900/70 hover:bg-blue-800 px-3 py-1 rounded-full transition-colors border border-blue-800/50">
                                    <FaGraduationCap className="text-yellow-400" />
                                    <Link href="/pages/learnfree" className="font-medium text-sm text-white">Free Courses</Link>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2 bg-green-900/70 hover:bg-green-800 px-3 py-1 rounded-full transition-colors border border-green-800/50">
                                    <FaWhatsapp className="text-green-300" />
                                    <Link href="https://whatsapp.com/channel/0029VbBCRZEEVccR46xZwh3Y" target="_blank" rel="noopener noreferrer" className="font-medium text-sm text-white">WhatsApp</Link>
                                </motion.div>

                                <div className="hidden sm:flex items-center gap-1 ml-2">
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, y: -2 }}
                                            className="text-gray-300 hover:text-white p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                                        >
                                            {link.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-3">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex-shrink-0">
                            <Link href="/" className="flex items-center gap-3">
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Image src={Logo} alt="MVIT Logo" width={50} height={50} className="object-contain" />
                                </motion.div>
                                <span className="hidden md:block text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">MVIT</span>
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
                                        Projects
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

                                {/* Important Links Dropdown */}
                                <motion.li className="relative flex items-center h-full">
                                    <motion.button
                                        ref={buttonRef}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={toggleMoreLinks}
                                        className="relative px-4 py-2 text-gray-300 hover:text-white font-medium group flex items-center h-full gap-1"
                                        aria-label="Toggle More Links"
                                        aria-expanded={showMoreLinks}
                                    >
                                        Important Links
                                        <motion.span animate={{ rotate: showMoreLinks ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                            <FaChevronDown className="text-xs mt-0.5" />
                                        </motion.span>
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                                    </motion.button>

                                    {showMoreLinks && (
                                        <motion.div
                                            ref={dropdownRef}
                                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg shadow-xl rounded-lg border border-gray-700 z-50"
                                        >
                                            <div className="py-2">
                                                {moreLinks.map((link, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.05, duration: 0.2 }}
                                                    >
                                                        <Link
                                                            href={link.href}
                                                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
                                                            onClick={handleLinkClick}
                                                        >
                                                            {link.title}
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
                                <Link href="/mlms" className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all">
                                    MLMS <FaArrowRight className="text-sm" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="/pages/apply" className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-full font-medium hover:from-green-600 hover:to-green-700 transition-all">
                                    Apply Now <FaArrowRight className="text-sm" />
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

                                {/* More Links in Mobile Menu */}
                                <div className="px-4 py-3">
                                    <h3 className="text-gray-400 font-medium mb-2">More Links</h3>
                                    <div className="grid grid-cols-1 gap-2">
                                        {moreLinks.map((link, index) => (
                                            <Link
                                                key={index}
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors"
                                            >
                                                {link.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 flex flex-col gap-3">
                                    <Link href="/mlms" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-full font-medium">
                                        MLMS Login <FaArrowRight />
                                    </Link>
                                    <Link href="/pages/apply" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-full font-medium">
                                        Apply Now <FaArrowRight />
                                    </Link>
                                    <Link href="" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-3 rounded-full font-medium">
                                        Free Courses <FaArrowRight />
                                    </Link>
                                </div>

                                <div className="pt-4 flex justify-center gap-4">
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2 }}
                                            className="text-gray-300 hover:text-white p-2 rounded-full bg-gray-800"
                                        >
                                            {link.icon}
                                        </motion.a>
                                    ))}
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
