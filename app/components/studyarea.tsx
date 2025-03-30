'use client';

import { FaCode, FaRobot, FaShieldAlt, FaDatabase, FaNetworkWired, FaGamepad, FaMobile, FaCloud, FaChartLine, FaBrain } from 'react-icons/fa';
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
    coreConcepts: string[];
    careerPaths: string[];
    trendingTechnologies: string[];
    salaryRange: string;
    demand: 'High' | 'Very High' | 'Moderate';
    gradient: string;
};

export default function ComputerSciencePage() {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    // Top 10 CS Fields
    const csFields: FieldCard[] = [
        {
            id: 'ai-ml',
            title: 'Artificial Intelligence & Machine Learning',
            icon: <FaRobot className="text-3xl" />,
            description: 'Develop intelligent systems that can learn, reason, and solve complex problems using algorithms and statistical models.',
            coreConcepts: [
                'Neural Networks',
                'Deep Learning',
                'Natural Language Processing',
                'Computer Vision',
                'Reinforcement Learning'
            ],
            careerPaths: [
                'ML Engineer ($120K-$200K)',
                'AI Researcher ($140K-$250K)',
                'Data Scientist ($110K-$180K)',
                'Computer Vision Engineer ($130K-$210K)'
            ],
            trendingTechnologies: [
                'Generative AI',
                'Transformers',
                'LLMs (GPT, Claude)',
                'Autonomous Systems'
            ],
            salaryRange: '$110,000 - $250,000',
            demand: 'Very High',
            gradient: 'from-purple-600 to-indigo-600'
        },
        {
            id: 'cybersecurity',
            title: 'Cybersecurity',
            icon: <FaShieldAlt className="text-3xl" />,
            description: 'Protect systems, networks, and data from digital attacks through security measures and ethical hacking techniques.',
            coreConcepts: [
                'Cryptography',
                'Network Security',
                'Ethical Hacking',
                'Risk Management',
                'Incident Response'
            ],
            careerPaths: [
                'Security Analyst ($90K-$150K)',
                'Penetration Tester ($100K-$180K)',
                'CISO ($150K-$300K+)',
                'Security Architect ($130K-$220K)'
            ],
            trendingTechnologies: [
                'Zero Trust Architecture',
                'AI in Security',
                'Quantum Cryptography',
                'Cloud Security'
            ],
            salaryRange: '$90,000 - $300,000+',
            demand: 'Very High',
            gradient: 'from-red-600 to-rose-600'
        },
        {
            id: 'data-science',
            title: 'Data Science',
            icon: <FaChartLine className="text-3xl" />,
            description: 'Extract insights from complex datasets using statistical analysis, machine learning, and data visualization techniques.',
            coreConcepts: [
                'Statistical Modeling',
                'Data Mining',
                'Predictive Analytics',
                'Big Data Technologies',
                'Data Visualization'
            ],
            careerPaths: [
                'Data Scientist ($110K-$180K)',
                'Data Engineer ($120K-$190K)',
                'BI Analyst ($90K-$140K)',
                'MLOps Engineer ($130K-$200K)'
            ],
            trendingTechnologies: [
                'Automated ML',
                'Data Mesh',
                'Real-time Analytics',
                'Feature Stores'
            ],
            salaryRange: '$90,000 - $200,000',
            demand: 'High',
            gradient: 'from-teal-600 to-emerald-600'
        },
        {
            id: 'software-dev',
            title: 'Software Development',
            icon: <FaCode className="text-3xl" />,
            description: 'Design, develop, test, and maintain software applications and systems using programming languages and frameworks.',
            coreConcepts: [
                'Algorithms & Data Structures',
                'Software Architecture',
                'APIs & Microservices',
                'Testing & Debugging',
                'DevOps Practices'
            ],
            careerPaths: [
                'Full-Stack Developer ($85K-$160K)',
                'Backend Engineer ($100K-$180K)',
                'DevOps Engineer ($110K-$190K)',
                'Technical Lead ($130K-$220K)'
            ],
            trendingTechnologies: [
                'WebAssembly',
                'Serverless Architecture',
                'Low-Code Platforms',
                'AI-assisted Coding'
            ],
            salaryRange: '$85,000 - $220,000',
            demand: 'High',
            gradient: 'from-blue-600 to-cyan-600'
        },
        {
            id: 'cloud-computing',
            title: 'Cloud Computing',
            icon: <FaCloud className="text-3xl" />,
            description: 'Build and manage distributed systems using cloud platforms to deliver scalable and reliable computing services.',
            coreConcepts: [
                'Virtualization',
                'Containerization',
                'Serverless Computing',
                'Cloud Security',
                'Distributed Systems'
            ],
            careerPaths: [
                'Cloud Architect ($130K-$220K)',
                'Cloud Engineer ($110K-$180K)',
                'Solutions Architect ($120K-$200K)',
                'SRE ($115K-$190K)'
            ],
            trendingTechnologies: [
                'Multi-cloud Strategies',
                'Edge Computing',
                'Cloud-native Development',
                'FinOps'
            ],
            salaryRange: '$110,000 - $220,000',
            demand: 'Very High',
            gradient: 'from-amber-600 to-orange-600'
        },
        {
            id: 'game-dev',
            title: 'Game Development',
            icon: <FaGamepad className="text-3xl" />,
            description: 'Create interactive entertainment experiences through programming, design, and computer graphics.',
            coreConcepts: [
                'Game Engines',
                'Physics Simulation',
                '3D Graphics',
                'AI for Games',
                'Multiplayer Networking'
            ],
            careerPaths: [
                'Game Programmer ($70K-$150K)',
                'Technical Artist ($80K-$140K)',
                'Game Designer ($65K-$130K)',
                'XR Developer ($90K-$160K)'
            ],
            trendingTechnologies: [
                'Real-time Ray Tracing',
                'Procedural Generation',
                'VR/AR Development',
                'Cloud Gaming'
            ],
            salaryRange: '$65,000 - $160,000',
            demand: 'High',
            gradient: 'from-fuchsia-600 to-pink-600'
        },
        {
            id: 'mobile-dev',
            title: 'Mobile Development',
            icon: <FaMobile className="text-3xl" />,
            description: 'Build applications for smartphones and tablets targeting iOS and Android platforms.',
            coreConcepts: [
                'Platform-specific SDKs',
                'Cross-platform Frameworks',
                'Mobile UI/UX',
                'Performance Optimization',
                'Offline Capabilities'
            ],
            careerPaths: [
                'iOS Developer ($95K-$160K)',
                'Android Developer ($90K-$150K)',
                'Flutter Developer ($85K-$140K)',
                'Mobile Architect ($120K-$190K)'
            ],
            trendingTechnologies: [
                'Foldable Devices',
                '5G Applications',
                'ML on Edge',
                'Instant Apps'
            ],
            salaryRange: '$85,000 - $190,000',
            demand: 'High',
            gradient: 'from-violet-600 to-purple-600'
        },
        {
            id: 'networking',
            title: 'Computer Networking',
            icon: <FaNetworkWired className="text-3xl" />,
            description: 'Design, implement, and manage communication systems that connect devices and transfer data.',
            coreConcepts: [
                'Network Protocols',
                'Routing & Switching',
                'Wireless Technologies',
                'Network Security',
                'SDN & NFV'
            ],
            careerPaths: [
                'Network Engineer ($80K-$140K)',
                'Network Architect ($110K-$180K)',
                'Cloud Network Specialist ($100K-$170K)',
                'VoIP Engineer ($90K-$150K)'
            ],
            trendingTechnologies: [
                '5G Networks',
                'Wi-Fi 6/6E',
                'Intent-based Networking',
                'Quantum Networking'
            ],
            salaryRange: '$80,000 - $180,000',
            demand: 'High',
            gradient: 'from-green-600 to-lime-600'
        },
        {
            id: 'db-systems',
            title: 'Database Systems',
            icon: <FaDatabase className="text-3xl" />,
            description: 'Design, implement, and optimize systems for efficient data storage, retrieval, and management.',
            coreConcepts: [
                'Relational Databases',
                'NoSQL Systems',
                'Database Design',
                'Query Optimization',
                'Distributed Databases'
            ],
            careerPaths: [
                'Database Administrator ($90K-$150K)',
                'Data Engineer ($110K-$180K)',
                'Database Architect ($120K-$200K)',
                'Big Data Specialist ($115K-$190K)'
            ],
            trendingTechnologies: [
                'NewSQL',
                'Vector Databases',
                'Blockchain Databases',
                'Serverless Databases'
            ],
            salaryRange: '$90,000 - $200,000',
            demand: 'High',
            gradient: 'from-sky-600 to-blue-600'
        },
        {
            id: 'hci',
            title: 'Human-Computer Interaction',
            icon: <FaBrain className="text-3xl" />,
            description: 'Study and design interfaces that optimize how humans interact with computers and technology.',
            coreConcepts: [
                'User Research',
                'Usability Testing',
                'Interaction Design',
                'Accessibility',
                'Information Architecture'
            ],
            careerPaths: [
                'UX Designer ($85K-$150K)',
                'UI Developer ($90K-$160K)',
                'UX Researcher ($95K-$140K)',
                'Product Designer ($100K-$180K)'
            ],
            trendingTechnologies: [
                'Voice Interfaces',
                'AR/VR Interaction',
                'Brain-Computer Interfaces',
                'Emotional AI'
            ],
            salaryRange: '$85,000 - $180,000',
            demand: 'High',
            gradient: 'from-rose-600 to-red-600'
        }
    ];

    return (
        <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 ${montserrat.className}`}>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Computer Science Specializations</h1>
                        <p className="text-xl text-blue-100 mb-8">
                            Explore the top 10 in-demand fields shaping the future of technology and innovation
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href={'/pages/study'} className="bg-white text-blue-900 hover:bg-blue-100 font-medium py-3 px-6 rounded-full transition-all">
                                Explore Careers
                            </Link>
                            <Link href={'/usai'} className="border border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-full transition-all">
                                United School
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Fields Grid */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Top 10 Computer Science Fields
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover the most sought-after specializations with detailed career insights and emerging trends
                        </p>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                        {csFields.map((field) => (
                            <motion.div
                                key={field.id}
                                variants={item}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row h-full">
                                    {/* Gradient Header */}
                                    <div className={`w-full md:w-1/3 flex items-center justify-center p-8 bg-gradient-to-br ${field.gradient}`}>
                                        <div className="text-white text-center">
                                            <div className="flex justify-center mb-4">
                                                {field.icon}
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{field.title}</h3>
                                            <div className="flex items-center justify-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            field.demand === 'Very High' ? 'bg-red-100 text-red-800' :
                                field.demand === 'High' ? 'bg-amber-100 text-amber-800' :
                                    'bg-green-100 text-green-800'
                        }`}>
                          {field.demand} Demand
                        </span>
                                                <span className="px-2 py-1 rounded-full bg-white/30 text-xs font-medium">
                          {field.salaryRange}
                        </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-full md:w-2/3 p-6">
                                        <p className="text-gray-700 mb-6">{field.description}</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                                                    Core Concepts
                                                </h4>
                                                <ul className="space-y-1.5 text-sm text-gray-600">
                                                    {field.coreConcepts.map((concept, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <span className="text-blue-500 mr-2">•</span>
                                                            <span>{concept}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2 h-2 rounded-full bg-green-600 mr-2"></span>
                                                    Career Paths
                                                </h4>
                                                <ul className="space-y-1.5 text-sm text-gray-600">
                                                    {field.careerPaths.map((path, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <span className="text-green-500 mr-2">•</span>
                                                            <span>{path}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-purple-600 mr-2"></span>
                                                Trending Technologies
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {field.trendingTechnologies.map((tech, i) => (
                                                    <span key={i} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                            {tech}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6"
                        >
                            <div className="text-4xl font-bold mb-2">22%</div>
                            <p className="text-blue-200">Projected job growth for CS fields (2022-2032)</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="p-6"
                        >
                            <div className="text-4xl font-bold mb-2">$136,620</div>
                            <p className="text-blue-200">Median annual wage for CS occupations (2023)</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="p-6"
                        >
                            <div className="text-4xl font-bold mb-2">1.4M+</div>
                            <p className="text-blue-200">Computing job openings expected by 2032</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}