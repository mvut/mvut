'use client';
import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaMedal, FaUniversity, FaLightbulb } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Founder from '@/public/faculty/father.png';
import President from '@/public/faculty/abs.png';

interface LeaderCardProps {
    image: StaticImageData;
    alt: string;
    title: string;
    icon: React.ReactNode;
    name: string;
    position: string;
    message: string;
    quote: string;
    isReversed?: boolean;
}

const LeaderCard = ({
                        image,
                        alt,
                        title,
                        icon,
                        name,
                        position,
                        message,
                        quote,
                        isReversed = false
                    }: LeaderCardProps) => {
    return (
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
            {/* Profile Image with Elegant Frame */}
            <div className="relative w-64 h-64 flex-shrink-0 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 p-1.5">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                            src={image}
                            alt={alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                </div>
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-800 text-white px-5 py-2 rounded-full shadow-lg">
                    <p className="font-medium">{name}</p>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-red-600/20 rounded-xl backdrop-blur-sm border border-red-600/30">
                        {icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                        {title}
                    </h2>
                </div>

                <div className="space-y-6">
                    <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-900/50">
                        <p className="text-gray-200 leading-relaxed">
                            {message}
                        </p>
                    </div>

                    <div className="relative pl-6 border-l-2 border-red-600/50">
                        <FaQuoteLeft className="absolute left-0 top-0 text-lg text-red-500/50" />
                        <p className="italic text-gray-300">{quote}</p>
                    </div>

                    <div className="text-center lg:text-left">
                        <p className="text-gray-400">{position}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LeadershipSection = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const [ref1, inView1] = useInView({ threshold: 0.2 });
    const [ref2, inView2] = useInView({ threshold: 0.2 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (inView1) controls1.start('visible');
        if (inView2) controls2.start('visible');
    }, [controls1, controls2, inView1, inView2]);

    const variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
        hidden: {
            opacity: 0,
            y: 50
        }
    };

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 text-white py-20 px-4 sm:px-8 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-red-600/5"
                        style={{
                            width: `${Math.random() * 300 + 100}px`,
                            height: `${Math.random() * 300 + 100}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, (Math.random() - 0.5) * 100],
                            y: [0, (Math.random() - 0.5) * 100],
                            opacity: [0.05, 0.15, 0.05]
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto relative z-10 space-y-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                        Leadership Vision
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Guiding principles from our visionary leaders
                    </p>
                </motion.div>

                {/* Founder */}
                <motion.div
                    ref={ref1}
                    initial="hidden"
                    animate={controls1}
                    variants={variants}
                >
                    <LeaderCard
                        image={Founder}
                        alt="Founder"
                        title="Founder's Vision"
                        icon={<FaUniversity className="text-red-400" />}
                        name="Muhammad Mansha"
                        position="Founder & Visionary"
                        message="At MVIT, we envision a future where technology empowers global prosperity, bridging socio-economic gaps and transforming lives through rigorous academic programs and groundbreaking research."
                        quote="Together, we are building a brighter future marked by innovation, inclusivity, and social responsibility."
                    />
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-red-700/50 to-transparent" />

                {/* President */}
                <motion.div
                    ref={ref2}
                    initial="hidden"
                    animate={controls2}
                    variants={variants}
                >
                    <LeaderCard
                        image={President}
                        alt="President"
                        title="President's Message"
                        icon={<FaMedal className="text-red-400" />}
                        name="Abubakar Siddique"
                        position="President & CEO"
                        message="As President of MVIT, I am honored to lead this vibrant community of innovators, educators, and change-makers as we push boundaries in technology and foster excellence."
                        quote="Together, let us shape a brighter future where innovation transforms lives and communities worldwide."
                        isReversed
                    />
                </motion.div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center pt-8"
                >
                    <div className="inline-flex items-center bg-black/40 backdrop-blur-sm px-5 py-3 rounded-full border border-red-600/30">
                        <FaLightbulb className="text-red-400 mr-2" />
                        <span className="text-gray-200 font-medium">
              Our Mission: Empowering Skills for the Future with AI Integration
            </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LeadershipSection;