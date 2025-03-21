'use client';
import { useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Founder from '@/public/faculty/father.png';
import President from '@/public/faculty/abs.png';

const FounderAndPresidentMessage = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView1) controls1.start('visible');
        if (inView2) controls2.start('visible');
    }, [controls1, controls2, inView1, inView2]);

    const variants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        hidden: { opacity: 0, y: 50 },
    };

    const imageVariants = {
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-900 via-purple-800 to-indigo-900 text-white py-16 px-4 sm:px-8 lg:px-16">
            {/* Founder Message */}
            <motion.div
                ref={ref1}
                initial="hidden"
                animate={controls1}
                variants={variants}
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
            >
                {/* Founder Content */}
                <div className="space-y-6">
                    <h2
                        className="text-3xl sm:text-4xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400"
                        style={{ fontFamily: "'Merriweather', serif" }}
                    >
                        Founder&apos;s Vision
                    </h2>
                    <p
                        className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                        At MVIT, we envision a future where technology empowers global prosperity, bridging socio-economic gaps and transforming lives. Our mission is to cultivate exceptional talent through rigorous academic programs, drive groundbreaking research, and spark meaningful impact across borders.
                    </p>
                    <FaQuoteLeft className="text-3xl text-teal-400 inline-block mr-2" />
                    <span className="italic text-gray-300">Together, we are building a brighter future marked by innovation, inclusivity, and social responsibility.</span>
                    <FaQuoteRight className="text-3xl text-teal-400 inline-block ml-2" />
                    <div className="mt-6">
                        <p
                            className="text-xl font-semibold text-white"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                            Muhammad Mansha
                        </p>
                        <p className="text-gray-400">Founder</p>
                    </div>
                </div>

                {/* Founder Image with Glow Effect */}
                <motion.div
                    className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl"
                    whileHover="hover"
                    variants={imageVariants}
                >
                    <div className="absolute inset-0 border-4 border-transparent animate-glow"></div>
                    <Image
                        src={Founder}
                        alt="Founder"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        priority
                    />
                </motion.div>
            </motion.div>

            {/* President Message */}
            <motion.div
                ref={ref2}
                initial="hidden"
                animate={controls2}
                variants={variants}
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                {/* President Image with Glow Effect */}
                <motion.div
                    className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl"
                    whileHover="hover"
                    variants={imageVariants}
                >
                    <div className="absolute inset-0 border-4 border-transparent animate-glow"></div>
                    <Image
                        src={President}
                        alt="President"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        priority
                    />
                </motion.div>

                {/* President Content */}
                <div className="space-y-6">
                    <h2
                        className="text-3xl sm:text-4xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
                        style={{ fontFamily: "'Merriweather', serif" }}
                    >
                        President&apos;s Message
                    </h2>
                    <p
                        className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                        As President of MVIT, I am honored to lead this vibrant community of innovators, educators, and change-makers. Building on our founder’s legacy, we continue to push boundaries in technology and foster a culture of excellence, diversity, and inclusivity.
                    </p>
                    <FaQuoteLeft className="text-3xl text-pink-400 inline-block mr-2" />
                    <span className="italic text-gray-300">Together, let us shape a brighter future where innovation transforms lives and communities worldwide.</span>
                    <FaQuoteRight className="text-3xl text-pink-400 inline-block ml-2" />
                    <div className="mt-6">
                        <p
                            className="text-xl font-semibold text-white"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                            Abubakar Siddique
                        </p>
                        <p className="text-gray-400">President</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FounderAndPresidentMessage;