'use client';

import { FaCode, FaRobot, FaShieldAlt, FaDatabase, FaNetworkWired, FaGamepad, FaMobile, FaCloud, FaChartLine, FaBrain, FaCogs, FaLayerGroup } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import Link from "next/link";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

type FieldCard = {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    salaryRange: string;
    demand: 'High' | 'Very High' | 'Moderate';
    gradient: string;
    topCareer: string;
};

export default function ComputerSciencePage() {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    const csFields = [
        {
            id: 'agentic-ai',
            title: 'Agentic AI Development',
            icon: <FaCogs className="text-2xl" />,
            description: 'Build autonomous AI agents that can plan and execute complex tasks',
            salaryRange: '$140K-$300K',
            demand: 'Very High',
            gradient: 'from-purple-700 to-indigo-700',
            topCareer: 'Agentic AI Developer'
        },
        {
            id: 'fullstack-ai',
            title: 'Full Stack AI Engineering',
            icon: <FaLayerGroup className="text-2xl" />,
            description: 'Develop end-to-end AI systems from models to production applications',
            salaryRange: '$130K-$280K',
            demand: 'Very High',
            gradient: 'from-blue-700 to-cyan-700',
            topCareer: 'Full Stack AI Engineer'
        },
        {
            id: 'ai-ml',
            title: 'AI & Machine Learning',
            icon: <FaRobot className="text-2xl" />,
            description: 'Build intelligent systems that learn and solve complex problems',
            salaryRange: '$110K-$250K',
            demand: 'Very High',
            gradient: 'from-purple-600 to-indigo-600',
            topCareer: 'ML Engineer'
        },
        {
            id: 'cybersecurity',
            title: 'Cybersecurity',
            icon: <FaShieldAlt className="text-2xl" />,
            description: 'Protect systems and data from digital threats',
            salaryRange: '$90K-$300K+',
            demand: 'Very High',
            gradient: 'from-red-600 to-rose-600',
            topCareer: 'Security Architect'
        },
        {
            id: 'data-science',
            title: 'Data Science',
            icon: <FaChartLine className="text-2xl" />,
            description: 'Extract insights from complex datasets',
            salaryRange: '$90K-$200K',
            demand: 'High',
            gradient: 'from-teal-600 to-emerald-600',
            topCareer: 'Data Scientist'
        },
        {
            id: 'software-dev',
            title: 'Software Development',
            icon: <FaCode className="text-2xl" />,
            description: 'Design and build software applications',
            salaryRange: '$85K-$220K',
            demand: 'High',
            gradient: 'from-blue-600 to-cyan-600',
            topCareer: 'Full-Stack Developer'
        },
        {
            id: 'cloud-computing',
            title: 'Cloud Computing',
            icon: <FaCloud className="text-2xl" />,
            description: 'Build scalable cloud-based systems',
            salaryRange: '$110K-$220K',
            demand: 'Very High',
            gradient: 'from-amber-600 to-orange-600',
            topCareer: 'Cloud Architect'
        },
        {
            id: 'game-dev',
            title: 'Game Development',
            icon: <FaGamepad className="text-2xl" />,
            description: 'Create interactive entertainment experiences',
            salaryRange: '$65K-$160K',
            demand: 'High',
            gradient: 'from-fuchsia-600 to-pink-600',
            topCareer: 'Game Programmer'
        },
        {
            id: 'mobile-dev',
            title: 'Mobile Development',
            icon: <FaMobile className="text-2xl" />,
            description: 'Build apps for iOS and Android platforms',
            salaryRange: '$85K-$190K',
            demand: 'High',
            gradient: 'from-violet-600 to-purple-600',
            topCareer: 'iOS/Android Developer'
        },
        {
            id: 'networking',
            title: 'Networking',
            icon: <FaNetworkWired className="text-2xl" />,
            description: 'Design and manage communication systems',
            salaryRange: '$80K-$180K',
            demand: 'High',
            gradient: 'from-green-600 to-lime-600',
            topCareer: 'Network Architect'
        },
        {
            id: 'db-systems',
            title: 'Database Systems',
            icon: <FaDatabase className="text-2xl" />,
            description: 'Design efficient data storage systems',
            salaryRange: '$90K-$200K',
            demand: 'High',
            gradient: 'from-sky-600 to-blue-600',
            topCareer: 'Database Architect'
        },
        {
            id: 'hci',
            title: 'Human-Computer Interaction',
            icon: <FaBrain className="text-2xl" />,
            description: 'Design intuitive user interfaces',
            salaryRange: '$85K-$180K',
            demand: 'High',
            gradient: 'from-rose-600 to-red-600',
            topCareer: 'UX Designer'
        }
    ];

    return (
        <div className={`min-h-screen bg-gray-50 ${montserrat.className}`}>
            {/* Hero Section */}
            <section className="relative py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Tech Specializations</h1>
                        <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                            Explore the most in-demand fields in technology and AI
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link
                                href="/pages/study"
                                className="bg-white text-blue-900 hover:bg-blue-100 font-medium py-2 px-5 rounded-full transition-all text-sm"
                            >
                                Explore Careers
                            </Link>
                            <Link
                                href="/usai"
                                className="border border-white text-white hover:bg-white/10 font-medium py-2 px-5 rounded-full transition-all text-sm"
                            >
                                United School
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Fields Grid */}
            <section className="py-12 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Top Tech Specializations
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Key fields with career potential and salary ranges
                        </p>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                    >
                        {csFields.map((field) => (
                            <motion.div
                                key={field.id}
                                variants={item}
                                whileHover={{ y: -3 }}
                                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                            >
                                <div className={`h-2 bg-gradient-to-r ${field.gradient}`}></div>
                                <div className="p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${field.gradient} text-white`}>
                                            {field.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{field.title}</h3>
                                            <span className={`text-xs px-2 py-1 rounded-full ${
                                                field.demand === 'Very High' ? 'bg-red-100 text-red-800' :
                                                    field.demand === 'High' ? 'bg-amber-100 text-amber-800' :
                                                        'bg-green-100 text-green-800'
                                            }`}>
                                                {field.demand} Demand
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4">{field.description}</p>

                                    <div className="flex justify-between items-center text-sm">
                                        <div>
                                            <p className="font-medium text-gray-900">{field.topCareer}</p>
                                            <p className="text-gray-500">{field.salaryRange}</p>
                                        </div>
                                        <Link
                                            href={`/pages/study/${field.id}`}
                                            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                                        >
                                            Details →
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-3xl font-bold mb-1">22%</div>
                            <p className="text-blue-200 text-sm">Projected job growth</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-3xl font-bold mb-1">$136K</div>
                            <p className="text-blue-200 text-sm">Median annual wage</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-3xl font-bold mb-1">1.4M+</div>
                            <p className="text-blue-200 text-sm">Job openings by 2032</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}