'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MVITLogo from '@/public/mvutflame.png';
import { motion } from 'framer-motion';

export default function NotFoundPage(): JSX.Element {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i = 1) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: 0.1 * i, type: 'spring', stiffness: 100, duration: 0.9 },
                opacity: { delay: 0.1 * i, duration: 0.2 },
            },
        }),
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white px-6">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 relative rounded-full overflow-hidden bg-white/5 p-2">
                            <Image src={MVITLogo} alt="MVIT" fill className="object-contain" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">MVIT</h1>
                            <p className="text-sm text-gray-300">Mansha Virtual Institute of Technologies</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Maintenance in progress — we’ll be back soon</h2>
                    </div>

                    <div className="rounded-xl bg-white/5 p-4 border border-white/6">
                        <p className="text-sm text-gray-200">We&apos;re currently performing scheduled maintenance on parts of the site. We should be back shortly — thank you for your patience.</p>
                        <ul className="mt-3 text-xs text-gray-400 space-y-1">
                            <li>• Maintenance status: In progress</li>
                            <li>• Estimated resume: Soon</li>
                            <li>• Need immediate help? Email <a className="underline" href="mailto:dr.sagher@gmail.com">dr.sagher@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                        <Link href="/" className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow">Go to Home</Link>
                    </div>

                    <div className="text-xs text-gray-400 mt-4">Reference: MVIT — If the problem persists, please contact the site administrator.</div>
                </motion.div>

                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="hidden md:flex justify-center"
                >
                    <svg
                        width="320"
                        height="320"
                        viewBox="0 0 320 320"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="max-w-full"
                    >
                        <rect x="0" y="0" width="320" height="320" rx="24" fill="url(#g)" />

                        {/* left content card (your original artwork slightly adapted) */}
                        <g transform="translate(40 48)">
                            <path
                                d="M40 0C61.046 0 78 16.954 78 38V150H2V38C2 16.954 18.954 0 40 0Z"
                                fill="rgba(255,255,255,0.06)"
                            />
                            <rect x="6" y="44" width="108" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
                            <rect x="6" y="56" width="84" height="6" rx="3" fill="rgba(255,255,255,0.03)" />
                            <circle cx="94" cy="16" r="6" fill="rgba(255,255,255,0.06)" />
                            <g transform="translate(0 96)">
                                <rect x="0" y="0" width="160" height="12" rx="3" fill="rgba(255,255,255,0.04)" />
                                <rect x="0" y="20" width="160" height="12" rx="3" fill="rgba(255,255,255,0.03)" />
                                <rect x="0" y="40" width="108" height="12" rx="3" fill="rgba(255,255,255,0.03)" />
                            </g>
                        </g>

                        {/* TARGET area on the right */}
                        {/* We'll position it in the remaining space */}
                        <g transform="translate(184 76)">
                            {/* Outer ring - pulse scale */}
                            <motion.circle
                                cx="56"
                                cy="72"
                                r="40"
                                fill="none"
                                stroke="rgba(255,255,255,0.06)"
                                strokeWidth="10"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: [0, 1.12, 1], opacity: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            />

                            {/* Middle ring - drawn in */}
                            <motion.circle
                                cx="56"
                                cy="72"
                                r="28"
                                fill="none"
                                stroke="rgba(255,255,255,0.12)"
                                strokeWidth="8"
                                variants={draw}
                                initial="hidden"
                                animate="visible"
                                custom={1}
                                strokeLinecap="round"
                            />

                            {/* Inner ring - drawn in a little later */}
                            <motion.circle
                                cx="56"
                                cy="72"
                                r="14"
                                fill="none"
                                stroke="white"
                                strokeWidth="6"
                                variants={draw}
                                initial="hidden"
                                animate="visible"
                                custom={2}
                                strokeLinecap="round"
                            />

                            {/* A small dot (the 'arrow' / hit) that moves in and scales */}
                            <motion.circle
                                cx="56"
                                cy=" -24" // start above the target
                                r="6"
                                fill="#34d399" // green hit
                                initial={{ y: -120, opacity: 0, scale: 0.6 }}
                                animate={{ y: 96 - 72, opacity: 1, scale: [1.0, 0.9, 1.05, 1] }}
                                transition={{
                                    delay: 0.9,
                                    y: { type: 'spring', stiffness: 160, damping: 14 },
                                    scale: { times: [0, 0.5, 1], duration: 0.6 },
                                }}
                            />

                            {/* Checkmark that draws once the dot 'lands' */}
                            <motion.path
                                d="M44 74 L52 82 L72 62"
                                fill="none"
                                stroke="#bbf7d0"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ delay: 1.1, duration: 0.45, ease: 'easeOut' }}
                            />

                            {/* Optional small label under the target */}
                            <motion.text
                                x="56"
                                y="128"
                                textAnchor="middle"
                                fontSize="12"
                                fill="rgba(255,255,255,0.85)"
                                initial={{ y: 132, opacity: 0 }}
                                animate={{ y: 128, opacity: 1 }}
                                transition={{ delay: 1.3, duration: 0.4 }}
                            >
                                Target Achieved
                            </motion.text>
                        </g>

                        <defs>
                            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stopColor="#0ea5a4" stopOpacity="0.18" />
                                <stop offset="1" stopColor="#2563eb" stopOpacity="0.12" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </div>
        </div>
    );
}
