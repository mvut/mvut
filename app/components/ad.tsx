'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Rocket, AlertTriangle, Clock } from 'lucide-react';
import Link from "next/link";

type DatesheetAlertProps = {
    startDate?: string; // e.g. '13-10-2025'
    pdfUrl?: string; // link to the date-sheet PDF
    onClose?: () => void;
};

const DatesheetAlert: React.FC<DatesheetAlertProps> = ({ startDate = '13-10-2025', pdfUrl = '#', onClose }) => {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
        onClose?.();
    };

    if (!open) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15
            }}
            className="fixed bottom-6 right-4 z-50 w-full max-w-md"
            role="region"
            aria-label="MCASCE First Examination Alert"
        >
            {/* Animated Background Effect */}
            <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 opacity-75 blur-md -z-10"
                animate={{
                    background: [
                        'linear-gradient(45deg, #2563eb, #7c3aed, #dc2626)',
                        'linear-gradient(45deg, #7c3aed, #dc2626, #2563eb)',
                        'linear-gradient(45deg, #dc2626, #2563eb, #7c3aed)',
                    ]
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 shadow-2xl ring-2 ring-white/20 backdrop-blur-sm">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform animate-pulse-slow" />

                {/* Header Badge - Fixed Position */}
                <div className="absolute top-3 right-3">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="flex items-center gap-1 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white shadow-lg border border-red-300"
                    >
                        <Rocket size={10} />
                        <span>FIRST EXAM</span>
                    </motion.div>
                </div>

                <div className="relative p-5">
                    <div className="flex items-start gap-4">
                        {/* Icon with Pulse Animation */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex-shrink-0"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 rounded-xl bg-yellow-400 blur-sm animate-pulse" />
                                <div className="relative flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg ring-2 ring-yellow-200/50">
                                    <Calendar size={20} className="text-white drop-shadow-sm" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 pr-8"> {/* Added pr-8 to prevent text overlap */}
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="px-2 py-1 bg-white/20 rounded-full">
                                        <p className="text-xs font-bold text-yellow-300 tracking-wider">🚀 HISTORIC MOMENT</p>
                                    </div>
                                </div>

                                <h4 className="text-lg font-black text-white mb-1 leading-tight">
                                    MCASCE INAUGURAL EXAM
                                </h4>

                                <div className="flex items-center gap-2 mb-2">
                                    <Clock size={14} className="text-green-400" />
                                    <p className="text-sm text-green-400 font-semibold">
                                        Starts: <span className="text-yellow-300 font-black">{startDate}</span>
                                    </p>
                                </div>

                                <p className="text-sm text-blue-100 mb-4 leading-relaxed">
                                    The wait is over! MVIT&apos;s first MCASCE examination is here.
                                    <span className="block text-yellow-200 font-semibold mt-1">
                                        Make history with us! 📚✨
                                    </span>
                                </p>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Link
                                            href={'/pages/datesheet'}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2.5 text-sm font-black text-slate-900 shadow-lg hover:shadow-xl transition-all duration-200 hover:brightness-110"
                                        >
                                            <Rocket size={16} />
                                            VIEW DATE-SHEET
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Footer with Countdown Style */}
                <div className="border-t border-white/10 bg-black/30 px-5 py-3">
                    <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-orange-300 font-semibold">
                            <AlertTriangle size={12} />
                            <span>ARRIVE 30 MIN EARLY</span>
                        </div>
                        <div className="text-green-300 font-mono font-bold">
                            📧 dr.sagher@gmail.com
                        </div>
                    </div>
                </div>

                {/* Celebration Confetti Effect (Visual only) */}
                <div className="absolute top-2 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-bounce" />
                <div className="absolute top-4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="absolute top-6 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
        </motion.div>
    );
};

export default DatesheetAlert;