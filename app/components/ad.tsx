'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { X, AlertCircle } from 'lucide-react';
import { FaLaptopCode } from 'react-icons/fa';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-inter',
});

const FloatingAd: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const containerVariants = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring', stiffness: 120 } },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
    };

    if (!isVisible) return null;

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`fixed bottom-6 right-6 z-50 w-full max-w-sm bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-2xl border border-red-600 overflow-hidden ${inter.variable}`}
        >
            <div className="relative p-4 bg-red-600/10">
                <h3 className="text-xl font-bold text-center text-white">MCASCE Certification</h3>
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-3 right-3 text-white hover:text-red-400 transition-colors"
                    aria-label="Close advertisement"
                >
                    <X size={18} />
                </button>
            </div>

            <div className="p-6 flex flex-col items-center space-y-4">
                <div className="p-3 bg-red-600/20 rounded-lg border border-red-600/30">
                    <FaLaptopCode size={40} className="text-red-400" />
                </div>
                <h4 className="text-lg font-semibold text-white text-center">Master AI & Cloud Engineering</h4>
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                    Build expertise in AI-driven software development and cloud technologies to shape the future of tech with MVIT’s MCASCE program.
                </p>
                <div className="text-sm space-y-2 w-full">
                    <p className="flex justify-between">
                        <span className="font-semibold text-red-400">BASR Test Fee:</span>
                        <span>$5</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="font-semibold text-red-400">Admission Fee:</span>
                        <span>$70</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="font-semibold text-red-400">Monthly Fee:</span>
                        <span>$35</span>
                    </p>
                    <p className="flex items-center justify-center gap-2 text-center text-lg font-bold text-red-400 mt-4">
                        <AlertCircle size={24} className="text-red-300" aria-hidden="true" />
                        Last Date to Apply for BASR: <span className="text-2xl text-red-300">27 Sep</span>
                    </p>
                </div>
            </div>

            <div className="p-4 bg-red-600/10">
                <Link
                    href="/pages/apply"
                    className="block w-full py-2.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:scale-105 transition-transform duration-200 shadow-md"
                >
                    Apply Now
                </Link>
            </div>
        </motion.div>
    );
};

export default FloatingAd;