'use client';
import ABSI from '@/public/resources/partners/absi.png';
import MIKES from '@/public/resources/partners/mikesint.png';
import MIKEVERSITY from '@/public/resources/partners/mikeversity.png';
import ABS_ACADEMY from '@/public/resources/partners/abs-academy.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import { useRef } from 'react';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700', '900'],
});

type Partner = {
    name: string;
    logo: StaticImageData;
    url: string;
    tagline: string;
    description: string;
    focusAreas: string[];
    impact: string;
    color: 'blue' | 'purple' | 'pink' | 'amber';
    buttonText: string;
};

const partners: Partner[] = [
    {
        name: 'Mikeversity',
        logo: MIKEVERSITY,
        url: 'https://www.mikeversity.com/',
        tagline: 'Global Thought Leadership',
        description:
            'Mikeversity transforms organizations through executive coaching and leadership development programs that drive measurable results.',
        focusAreas: ['Executive Coaching', 'Leadership Development', 'Organizational Transformation'],
        impact: '250+ organizations transformed | 95% client satisfaction',
        color: 'blue',
        buttonText: 'Explore Programs',
    },
    {
        name: 'MIKES International',
        logo: MIKES,
        url: 'https://www.mikeversity.com/',
        tagline: 'Serving the Underserved',
        description:
            'MIKES International delivers innovative solutions to marginalized communities through education and healthcare initiatives.',
        focusAreas: ['Community Development', 'Education Access', 'Healthcare Initiatives'],
        impact: '50+ countries served | 1M+ lives impacted',
        color: 'purple',
        buttonText: 'View Initiatives',
    },
    {
        name: 'ASB International',
        logo: ABSI,
        url: 'https://absi.com.pk/',
        tagline: 'Social Training Support',
        description:
            'ASB International bridges the gap between corporations and social impact through customized training programs.',
        focusAreas: ['Corporate Training', 'CSR Strategy', 'Community Engagement'],
        impact: '200+ corporate partners | 300+ training programs',
        color: 'pink',
        buttonText: 'Learn About Training',
    },
    {
        name: 'ABS Academy',
        logo: ABS_ACADEMY,
        url: '#',
        tagline: 'STEM & AI Education',
        description:
            'ABS Academy prepares the next generation of innovators through cutting-edge STEM education and AI training.',
        focusAreas: ['STEM Curriculum', 'AI Certification', 'Professional Upskilling'],
        impact: '10,000+ graduates | 85% career placement',
        color: 'amber',
        buttonText: 'Discover Courses',
    },
];

type ColorMap = {
    [key in Partner['color']]: {
        text: string;
        bg: string;
        border: string;
        light: string;
    };
};

const colorMap: ColorMap = {
    blue: { text: 'text-blue-400', bg: 'bg-blue-500/80', border: 'border-blue-500/30', light: 'bg-blue-500/10' },
    purple: { text: 'text-purple-400', bg: 'bg-purple-500/80', border: 'border-purple-500/30', light: 'bg-purple-500/10' },
    pink: { text: 'text-pink-400', bg: 'bg-pink-500/80', border: 'border-pink-500/30', light: 'bg-pink-500/10' },
    amber: { text: 'text-amber-400', bg: 'bg-amber-500/80', border: 'border-amber-500/30', light: 'bg-amber-500/10' },
};

export default function StrategicPartners() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
    const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 80, rotateX: 10 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
        hover: {
            scale: 1.05,
            rotateY: 5,
            boxShadow: '0 20px 50px rgba(255, 255, 255, 0.1)',
            transition: { duration: 0.3 },
        },
    };

    const logoVariants = {
        hover: {
            rotate: [0, 10, -10, 0],
            scale: 1.15,
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
    };

    return (
        <div
            ref={ref}
            className={`relative w-full min-h-screen py-24 overflow-hidden ${montserrat.className}`}
        >
            {/* Transformational Background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-red-950 opacity-70"
                style={{ opacity: backgroundOpacity, scale: backgroundScale }}
            />
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent 70%)`,
                    opacity: 0.5,
                }}
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative text-center mb-20 px-6 max-w-5xl mx-auto"
            >
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-red-200">
                    Strategic Partners
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                    Forging alliances with pioneers to shape a transformative future
                </p>
            </motion.div>

            {/* Partner Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
                {partners.map((partner, index) => {
                    const colors = colorMap[partner.color];
                    return (
                        <motion.div
                            key={partner.name}
                            variants={cardVariants}
                            whileHover="hover"
                            className={`relative bg-gray-900/40 backdrop-blur-xl rounded-3xl overflow-hidden border ${colors.border} shadow-lg`}
                            style={{ perspective: 1000 }}
                        >
                            <Link href={partner.url} target="_blank" className="h-full flex flex-col">
                                {/* Logo and Header Section */}
                                <div className={`p-6 ${colors.light} flex items-center space-x-4 border-b ${colors.border}`}>
                                    <motion.div
                                        variants={logoVariants}
                                        className={`flex-shrink-0 bg-white/95 p-3 rounded-2xl shadow-lg border ${colors.border}`}
                                    >
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={80}
                                            height={80}
                                            className="w-14 h-14 object-contain"
                                            priority={index < 2} // Only prioritize first 2 images
                                        />
                                    </motion.div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-white">{partner.name}</h2>
                                        <p className={`text-sm font-medium ${colors.text}`}>{partner.tagline}</p>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex-grow">
                                    <p className="text-gray-200 text-sm mb-4">{partner.description}</p>

                                    <div className="mb-4">
                                        <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">Focus Areas</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {partner.focusAreas.map((area) => (
                                                <motion.span
                                                    key={area}
                                                    className={`text-xs px-3 py-1 rounded-full ${colors.light} ${colors.text}`}
                                                    whileHover={{ scale: 1.1, backgroundColor: colors.bg }}
                                                >
                                                    {area}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-sm text-gray-300">
                                        <h3 className="font-semibold uppercase text-xs mb-1">Impact</h3>
                                        <p>{partner.impact}</p>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="px-6 pb-6">
                                    <motion.button
                                        className={`w-full py-3 ${colors.bg} text-white font-medium rounded-xl transition-all duration-300`}
                                        whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)' }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={(e) => e.preventDefault()} // Prevent hydration mismatch
                                    >
                                        {partner.buttonText}
                                    </motion.button>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-24 text-center px-6"
            >
                <div className="relative max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/10">
                    <h3 className="text-3xl font-bold text-white mb-4">Join Our Vision</h3>
                    <p className="text-gray-300 mb-6 text-lg">
                        Partner with us to co-create solutions that redefine industries and impact lives.
                    </p>
                    <Link
                        href="#"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white font-medium rounded-xl transition-all duration-300"
                    >
                        Connect Now
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}