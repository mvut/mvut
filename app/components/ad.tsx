'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { X, AlertTriangle } from 'lucide-react';
import { FaLaptopCode, FaRocket } from 'react-icons/fa';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-inter',
});

const FloatingAd: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const containerVariants = {
        initial: { opacity: 0, y: 50, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: 'spring', stiffness: 150 } },
        exit: { opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.3 } },
    };

    if (!isVisible) return null;

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`fixed bottom-6 right-4 sm:right-6 z-50 w-full max-w-xs sm:max-w-sm rounded-2xl shadow-2xl overflow-hidden ${inter.variable} font-sans`}
            style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FF4500 100%)', // Yellow to Red
            }}
        >
            {/* Close Button */}
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/20 hover:bg-black/30 transition-colors"
                aria-label="Close advertisement"
            >
                <X size={16} className="text-white" />
            </button>

            {/* Alert Banner */}
            <div className="flex items-center justify-center gap-2 py-2 bg-red-700 text-white text-xs font-bold tracking-wide">
                <AlertTriangle size={14} className="animate-pulse" />
                <span>LAST CHANCE TO APPLY!</span>
            </div>

            {/* Content */}
            <div className="p-5 pt-3 text-gray-900">
                <h3 className="text-lg font-bold text-center mb-2">🚀 Apply Before Oct 31!</h3>
                <p className="text-xs text-center mb-4 font-medium">
                    Join MVIT’s flagship programs—limited seats available!
                </p>

                {/* MCASCE */}
                <div className="flex items-start gap-3 mb-3 p-2.5 bg-white/30 backdrop-blur-sm rounded-xl">
                    <FaLaptopCode size={20} className="text-red-800 mt-0.5 flex-shrink-0" />
                    <div>
                        <h4 className="text-sm font-bold text-gray-900">MCASCE Certification</h4>
                        <p className="text-xs text-gray-800">AI & Cloud Engineering</p>
                    </div>
                </div>

                {/* KG STEM Entre */}
                <div className="flex items-start gap-3 mb-4 p-2.5 bg-white/30 backdrop-blur-sm rounded-xl">
                    <FaRocket size={20} className="text-orange-800 mt-0.5 flex-shrink-0" />
                    <div>
                        <h4 className="text-sm font-bold text-gray-900">Kindergarten STEM Entrepreneurs</h4>
                        <p className="text-xs text-gray-800">Youth Innovation Program</p>
                    </div>
                </div>

                {/* Dual CTA Buttons */}
                <div className="space-y-2.5">
                    <Link
                        href="/pages/apply"
                        className="block w-full py-2.5 text-center text-sm font-bold text-white bg-red-800 hover:bg-red-700 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99]"
                    >
                        Apply for MCASCE
                    </Link>
                    <Link
                        href="/usai/apply"
                        className="block w-full py-2.5 text-center text-sm font-bold text-white bg-orange-700 hover:bg-orange-600 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99]"
                    >
                        Apply for Kindergarten STEM Entrepreneurs
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default FloatingAd;