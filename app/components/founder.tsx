'use client';
import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaMedal, FaUniversity, FaLightbulb } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';
import Founder from '@/public/faculty/father.png';
import President from '@/public/faculty/abs.png';

interface MessageSectionProps {
    image: StaticImageData;
    alt: string;
    title: string;
    icon: React.ReactNode;
    name: string;
    position: string;
    children: React.ReactNode;
    quote: string;
    isPresident?: boolean;
}

const MessageSection = ({
                            image,
                            alt,
                            title,
                            icon,
                            name,
                            position,
                            children,
                            quote,
                            isPresident = false
                        }: MessageSectionProps) => (
    <div className={`space-y-8 ${isPresident ? 'md:order-2' : ''}`}>
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-red-900/50 rounded-full">
                {icon}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {title}
            </h2>
        </div>

        <div className="relative">
            <div className="absolute -inset-4 bg-red-900/20 rounded-xl blur-md" />
            <div className="relative bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-red-900/50">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-6" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {children}
                </p>

                <div className="relative">
                    <FaQuoteLeft className="absolute -left-6 -top-4 text-3xl text-red-500/50" />
                    <p className="italic text-gray-300 pl-8 border-l-2 border-red-700/50">
                        {quote}
                    </p>
                    <FaQuoteRight className="absolute -right-6 -bottom-4 text-3xl text-red-500/50" />
                </div>
            </div>
        </div>

        <div className="mt-8">
            <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {name}
            </p>
            <p className="text-red-300">{position}</p>
        </div>
    </div>
);

const FounderAndPresidentMessage = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (inView1) controls1.start('visible');
        if (inView2) controls2.start('visible');
    }, [controls1, controls2, inView1, inView2]);

    const variants: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        hidden: {
            opacity: 0,
            y: 50
        },
    };

    const imageVariants: Variants = {
        hover: {
            scale: 1.03,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
    };

    const glowVariants: Variants = {
        visible: {
            boxShadow: "0 0 25px rgba(239, 68, 68, 0.7)",
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    // Generate stable random values for floating elements
    const getStableRandomValues = (i: number) => {
        // Use a seeded random approach based on the index
        const seed = i * 12345;
        const random = (min: number, max: number) => {
            const x = Math.sin(seed) * 10000;
            return min + (x - Math.floor(x)) * (max - min);
        };

        return {
            width: random(50, 250),
            height: random(50, 250),
            left: random(0, 100),
            top: random(0, 100),
            x: [0, random(-50, 50)],
            y: [0, random(-50, 50)],
            opacity: [0.1, random(0.2, 0.4), 0.1],
            duration: random(10, 25)
        };
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-red-900 to-red-950 text-white py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
            {/* Floating decorative elements - using stable random values */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => {
                    const { width, height, left, top, x, y, opacity, duration } = getStableRandomValues(i);

                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-red-900/20"
                            style={{
                                width: `${width}px`,
                                height: `${height}px`,
                                left: `${left}%`,
                                top: `${top}%`,
                            }}
                            animate={{
                                x,
                                y,
                                opacity,
                            }}
                            transition={{
                                duration,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        />
                    );
                })}
            </div>

            {/* Founder Message */}
            <motion.div
                ref={ref1}
                initial="hidden"
                animate={controls1}
                variants={variants}
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 relative z-10"
            >
                <MessageSection
                    image={Founder}
                    alt="Founder"
                    title="FOUNDER'S VISION"
                    icon={<FaUniversity className="text-2xl text-red-400" />}
                    name="Muhammad Mansha"
                    position="Founder & Visionary"
                    quote="Together, we are building a brighter future marked by innovation, inclusivity, and social responsibility."
                >
                    At MVIT, we envision a future where technology empowers global prosperity, bridging socio-economic gaps and transforming lives. Our mission is to cultivate exceptional talent through rigorous academic programs, drive groundbreaking research, and spark meaningful impact across borders.
                </MessageSection>

                {/* Founder Image */}
                <motion.div
                    className="relative w-full h-[500px] rounded-xl overflow-hidden"
                    whileHover="hover"
                    variants={imageVariants}
                >
                    <motion.div
                        className="absolute inset-0 border-4 border-red-600/30 rounded-xl"
                        variants={glowVariants}
                        animate="visible"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <Image
                        src={Founder}
                        alt="Founder"
                        fill
                        className="object-cover object-top"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>
            </motion.div>

            {/* Divider */}
            <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-red-700/50 to-transparent my-12" />

            {/* President Message */}
            <motion.div
                ref={ref2}
                initial="hidden"
                animate={controls2}
                variants={variants}
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
            >
                {/* President Image */}
                <motion.div
                    className="relative w-full h-[500px] rounded-xl overflow-hidden md:order-1"
                    whileHover="hover"
                    variants={imageVariants}
                >
                    <motion.div
                        className="absolute inset-0 border-4 border-red-600/30 rounded-xl"
                        variants={glowVariants}
                        animate="visible"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <Image
                        src={President}
                        alt="President"
                        fill
                        className="object-cover object-top"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>

                <MessageSection
                    image={President}
                    alt="President"
                    title="PRESIDENT'S MESSAGE"
                    icon={<FaMedal className="text-2xl text-red-400" />}
                    name="Abubakar Siddique"
                    position="President & CEO"
                    quote="Together, let us shape a brighter future where innovation transforms lives and communities worldwide."
                    isPresident={true}
                >
                    As President of MVIT, I am honored to lead this vibrant community of innovators, educators, and change-makers. Building on our founder&apos;s legacy, we continue to push boundaries in technology and foster a culture of excellence, diversity, and inclusivity.
                </MessageSection>
            </motion.div>

            {/* Floating Mission Statement */}
            <motion.div
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <div className="relative group">
                    <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-3 bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border border-red-700/50 group-hover:border-red-500 transition-all duration-300">
                        <FaLightbulb className="text-xl text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                        <span className="text-gray-100 font-medium text-sm sm:text-base tracking-wide">
              Quality Education Through Innovation & Excellence
            </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FounderAndPresidentMessage;