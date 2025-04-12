'use client';
import { motion, Variants } from "framer-motion";
import { FaQuoteLeft, FaTrophy, FaBriefcase, FaUserTie, FaChartLine, FaStar, FaRocket } from "react-icons/fa";
import { MdSchool, MdLocationOn, MdDateRange } from "react-icons/md";
import { Montserrat } from 'next/font/google';
import { useEffect, useState } from "react";

// Font configuration
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

// Success stories data
const successStories = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Founder & CEO, TechNova Solutions",
        certification: "MVIT Certified Cloud Architect",
        location: "Bangalore, India",
        year: 2021,
        story: "The MVIT certification gave me the credibility and skills needed to launch my own cloud consulting firm. Within 18 months, we've grown to a team of 25 serving clients across 3 countries.",
        stats: "₹5.2Cr annual revenue",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        gradient: "from-blue-600 to-indigo-700"
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Senior Data Scientist, Global Analytics Inc.",
        certification: "MVIT Certified Data Science Professional",
        location: "New York, USA",
        year: 2020,
        story: "After my MVIT certification, I received three job offers within weeks. The hands-on projects were exactly what employers were looking for. My salary increased by 140% after certification.",
        stats: "Promoted twice in 2 years",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        gradient: "from-teal-600 to-emerald-700"
    },
    {
        id: 3,
        name: "Amit Patel",
        role: "Cybersecurity Lead, SecureBank",
        certification: "MVIT Certified Ethical Hacker",
        location: "Singapore",
        year: 2022,
        story: "The MVIT program's practical penetration testing labs helped me transition from network admin to cybersecurity specialist. I now lead a team protecting financial systems across Asia.",
        stats: "Team of 15 security professionals",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        gradient: "from-purple-600 to-violet-700"
    },
    {
        id: 4,
        name: "Ananya Desai",
        role: "AI Product Manager, FutureTech",
        certification: "MVIT Certified AI Specialist",
        location: "London, UK",
        year: 2023,
        story: "The MVIT certification bridged my technical knowledge gaps and helped me communicate effectively with engineering teams. I now oversee development of AI products used by millions.",
        stats: "2 patents filed",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        gradient: "from-pink-600 to-rose-700"
    }
];

// Background Success Elements
const successElements = [
    { icon: <FaTrophy className="text-4xl text-yellow-400/30" />, x: 150, y: 100, duration: 18 },
    { icon: <FaBriefcase className="text-3xl text-blue-400/30" />, x: 400, y: 200, duration: 20 },
    { icon: <FaChartLine className="text-4xl text-teal-400/30" />, x: 600, y: 300, duration: 15 },
    { icon: <FaStar className="text-3xl text-gold-400/30" />, x: 200, y: 400, duration: 22 },
    { icon: <FaRocket className="text-4xl text-purple-400/30" />, x: 500, y: 50, duration: 17 },
];

export default function MVITSuccessStories () {
    const [isMounted, setIsMounted] = useState(false);

    // Ensure animations only run after client-side mount
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        },
        exit: { opacity: 0 }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
        hover: { scale: 1.03, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: 20 }
    };

    const successVariants: Variants = {
        animate: (element: { x: number; y: number; duration: number }) => ({
            x: [element.x, element.x + 50, element.x - 50, element.x],
            y: [element.y, element.y - 70, element.y + 70, element.y],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1, 1],
            transition: {
                duration: element.duration,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }),
        exit: { opacity: 0 }
    };

    if (!isMounted) return null; // Prevent rendering until mounted

    return (
        <div className={`min-h-screen bg-gray-950 text-white ${montserrat.className} relative overflow-hidden`}>
            {/* Animated Background with Success Theme */}
            <motion.div
                className="fixed inset-0 pointer-events-none z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {successElements.map((element, index) => (
                    <motion.div
                        key={index}
                        custom={element}
                        variants={successVariants}
                        animate="animate"
                        exit="exit"
                        className="absolute"
                    >
                        {element.icon}
                    </motion.div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-gray-900/10"></div>
            </motion.div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center pt-16 pb-12"
            >
                <div className="flex justify-center mb-4">
                    <FaTrophy className="text-5xl text-yellow-400" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                    MVIT Success Stories
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Celebrating the achievements of our certified professionals who are making an impact worldwide
                </p>
            </motion.div>

            {/* Stats Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10 container mx-auto px-4 mb-16"
            >
                <div className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-gray-800/50">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <FaUserTie className="text-4xl mb-2 text-yellow-400" />
                            <p className="text-3xl font-bold text-white">500+</p>
                            <p className="text-gray-300">Certified Professionals</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <MdSchool className="text-4xl mb-2 text-yellow-400" />
                            <p className="text-3xl font-bold text-white">42</p>
                            <p className="text-gray-300">Countries</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaBriefcase className="text-4xl mb-2 text-yellow-400" />
                            <p className="text-3xl font-bold text-white">85%</p>
                            <p className="text-gray-300">Career Advancement</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaChartLine className="text-4xl mb-2 text-yellow-400" />
                            <p className="text-3xl font-bold text-white">3.5x</p>
                            <p className="text-gray-300">Salary Increase</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Success Stories Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="relative z-10 container mx-auto px-4 pb-16 grid md:grid-cols-2 gap-8"
            >
                {successStories.map((story) => (
                    <motion.div
                        key={story.id}
                        variants={itemVariants}
                        whileHover="hover"
                        className={`rounded-xl overflow-hidden bg-gradient-to-br ${story.gradient} shadow-lg transition-shadow`}
                    >
                        <div className="p-6 relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform translate-x-16 -translate-y-16"></div>
                            <div className="flex items-center mb-6">
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="w-16 h-16 rounded-full object-cover border-4 border-white/30"
                                />
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-white">{story.name}</h3>
                                    <p className="text-gray-200">{story.role}</p>
                                </div>
                            </div>
                            <div className="mb-6 text-gray-100 text-sm space-y-2">
                                <div className="flex items-center">
                                    <MdSchool className="mr-2 text-yellow-400" />
                                    <span>{story.certification}</span>
                                </div>
                                <div className="flex items-center">
                                    <MdLocationOn className="mr-2 text-yellow-400" />
                                    <span>{story.location}</span>
                                </div>
                                <div className="flex items-center">
                                    <MdDateRange className="mr-2 text-yellow-400" />
                                    <span>Certified: {story.year}</span>
                                </div>
                            </div>
                            <div className="relative mb-6">
                                <FaQuoteLeft className="absolute -top-2 left-0 text-white/50 text-3xl" />
                                <p className="text-gray-100 pl-8 italic">{story.story}</p>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 p-4 rounded-lg">
                                <FaTrophy className="text-yellow-400" />
                                <p className="text-sm text-white font-semibold">{story.stats}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10 container mx-auto px-4 pb-20"
            >
                <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 text-center shadow-md">
                    <FaRocket className="text-4xl text-blue-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Start Your Success Story</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Join our network of high-achieving professionals. MVIT certifications open doors to new opportunities.
                    </p>
                    <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition duration-300">
                        Explore Certification Programs
                    </button>
                </div>
            </motion.div>
        </div>
    );
};