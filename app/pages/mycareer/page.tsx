'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaCode, FaServer, FaMobile, FaDatabase, FaRobot, FaShieldAlt, FaCloud, FaChartLine, FaGamepad, FaLaptopCode } from 'react-icons/fa';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface Career {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    skills: string[];
    salary: string;
    demand: string;
    path: string;
}

const CareersPage = () => {
    const [activeTab, setActiveTab] = useState<string>('all');
    const [expandedCareer, setExpandedCareer] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Career data
    const careers: Career[] = [
        {
            id: 'frontend',
            title: 'Frontend Developer',
            icon: <FaCode className="text-blue-500 text-2xl" />,
            description: 'Build interactive user interfaces and client-side applications using modern frameworks.',
            skills: ['JavaScript/TypeScript', 'React/Vue/Angular', 'HTML/CSS', 'Responsive Design'],
            salary: '$70,000 - $150,000',
            demand: 'High',
            path: 'Learn fundamentals → Choose a framework → Build portfolio projects'
        },
        {
            id: 'backend',
            title: 'Backend Developer',
            icon: <FaServer className="text-green-500 text-2xl" />,
            description: 'Develop server-side logic, databases, and APIs that power web applications.',
            skills: ['Node.js/Python/Java', 'REST/GraphQL APIs', 'Databases', 'Authentication'],
            salary: '$80,000 - $160,000',
            demand: 'High',
            path: 'Learn a backend language → Understand databases → Build APIs → Learn deployment'
        },
        {
            id: 'fullstack',
            title: 'Full Stack Developer',
            icon: <FaLaptopCode className="text-purple-500 text-2xl" />,
            description: 'Handle both frontend and backend development to create complete web applications.',
            skills: ['Frontend frameworks', 'Backend languages', 'Database management', 'DevOps basics'],
            salary: '$90,000 - $170,000',
            demand: 'Very High',
            path: 'Master frontend → Learn backend → Connect both → Understand deployment'
        },
        {
            id: 'mobile',
            title: 'Mobile Developer',
            icon: <FaMobile className="text-yellow-500 text-2xl" />,
            description: 'Create applications for iOS and Android platforms using native or cross-platform frameworks.',
            skills: ['Swift/Kotlin', 'React Native/Flutter', 'Mobile UI/UX', 'App Store deployment'],
            salary: '$75,000 - $155,000',
            demand: 'High',
            path: 'Choose platform → Learn framework → Build apps → Publish to stores'
        },
        {
            id: 'devops',
            title: 'DevOps Engineer',
            icon: <FaCloud className="text-red-500 text-2xl" />,
            description: 'Bridge development and operations with CI/CD pipelines, cloud infrastructure, and automation.',
            skills: ['Docker/Kubernetes', 'AWS/Azure/GCP', 'CI/CD Pipelines', 'Infrastructure as Code'],
            salary: '$100,000 - $180,000',
            demand: 'Very High',
            path: 'Learn Linux → Master cloud services → Understand containers → Automate workflows'
        },
        {
            id: 'data',
            title: 'Data Engineer',
            icon: <FaDatabase className="text-indigo-500 text-2xl" />,
            description: 'Design and maintain data pipelines and infrastructure for analytics and machine learning.',
            skills: ['SQL/NoSQL', 'ETL Processes', 'Big Data tools', 'Data warehousing'],
            salary: '$95,000 - $175,000',
            demand: 'Growing',
            path: 'Learn databases → Master ETL → Understand cloud data services → Learn pipeline tools'
        },
        {
            id: 'ai',
            title: 'AI/ML Engineer',
            icon: <FaRobot className="text-pink-500 text-2xl" />,
            description: 'Develop machine learning models and artificial intelligence solutions for various applications.',
            skills: ['Python', 'TensorFlow/PyTorch', 'Data Science', 'Algorithm design'],
            salary: '$110,000 - $200,000',
            demand: 'Growing',
            path: 'Learn Python → Study math/stats → Master ML frameworks → Build models'
        },
        {
            id: 'security',
            title: 'Security Engineer',
            icon: <FaShieldAlt className="text-teal-500 text-2xl" />,
            description: 'Protect systems and networks from cyber threats and ensure data privacy.',
            skills: ['Ethical Hacking', 'Cryptography', 'Security Protocols', 'Risk Assessment'],
            salary: '$100,000 - $190,000',
            demand: 'Very High',
            path: 'Learn networking → Study security concepts → Get certifications → Practice pentesting'
        },
        {
            id: 'game',
            title: 'Game Developer',
            icon: <FaGamepad className="text-orange-500 text-2xl" />,
            description: 'Create video games for various platforms using game engines and programming.',
            skills: ['Unity/Unreal', 'C#/C++', '3D Graphics', 'Game Physics'],
            salary: '$60,000 - $140,000',
            demand: 'Moderate',
            path: 'Learn game engine → Study game design → Build small games → Create portfolio'
        },
        {
            id: 'cloud',
            title: 'Cloud Architect',
            icon: <FaCloud className="text-blue-400 text-2xl" />,
            description: 'Design and implement cloud solutions and migration strategies for businesses.',
            skills: ['Cloud Services', 'Architecture Patterns', 'Networking', 'Cost Optimization'],
            salary: '$120,000 - $220,000',
            demand: 'High',
            path: 'Master cloud platform → Learn architecture → Understand compliance → Get certified'
        },
        {
            id: 'qa',
            title: 'QA Automation Engineer',
            icon: <FaChartLine className="text-green-400 text-2xl" />,
            description: 'Develop automated testing solutions to ensure software quality and reliability.',
            skills: ['Testing Frameworks', 'Selenium/Cypress', 'CI/CD Integration', 'Performance Testing'],
            salary: '$70,000 - $140,000',
            demand: 'Growing',
            path: 'Learn testing concepts → Master automation tools → Integrate with CI/CD → Learn scripting'
        },
        {
            id: 'blockchain',
            title: 'Blockchain Developer',
            icon: <FaDatabase className="text-gray-700 text-2xl" />,
            description: 'Build decentralized applications and smart contracts on blockchain platforms.',
            skills: ['Solidity/Rust', 'Smart Contracts', 'Web3.js', 'Blockchain Fundamentals'],
            salary: '$90,000 - $200,000',
            demand: 'Emerging',
            path: 'Learn blockchain basics → Master smart contracts → Understand crypto → Build DApps'
        }
    ];

    const filteredCareers = activeTab === 'all'
        ? careers
        : careers.filter(career => career.id === activeTab);

    // Background animation effect
    useEffect(() => {
        if (!isClient) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = clientX / window.innerWidth;
            const y = clientY / window.innerHeight;

            document.documentElement.style.setProperty('--mouse-x', x.toString());
            document.documentElement.style.setProperty('--mouse-y', y.toString());
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isClient]);

    if (!isClient) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="animate-pulse text-white text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
                {/* Animated background elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="absolute inset-0 bg-radial-gradient opacity-20" style={{
                        background: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
                    }}></div>
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-blue-500 opacity-10"
                            style={{
                                width: `${Math.random() * 200 + 100}px`,
                                height: `${Math.random() * 200 + 100}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                x: [0, (Math.random() - 0.5) * 100],
                                y: [0, (Math.random() - 0.5) * 100],
                                opacity: [0.1, 0.05, 0.1],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        />
                    ))}
                </div>

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-space bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Build Your Future in Code
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
                            Discover rewarding careers in software development and join our career-building programs designed to launch your tech journey.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Link
                                href={'/pages/study'}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 flex items-center gap-2"
                            >
                                Explore Programs <FiArrowRight />
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Career Paths Section */}
                <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-space">Software Development Career Paths</h2>
                        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
                            The tech industry offers diverse opportunities. Find the path that matches your interests and skills.
                        </p>
                    </motion.div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab('all')}
                            className={`px-5 py-2 rounded-full font-medium transition-all ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                        >
                            All Careers
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab('frontend')}
                            className={`px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${activeTab === 'frontend' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                        >
                            <FaCode /> Frontend
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab('backend')}
                            className={`px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${activeTab === 'backend' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                        >
                            <FaServer /> Backend
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab('fullstack')}
                            className={`px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${activeTab === 'fullstack' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                        >
                            <FaLaptopCode /> Full Stack
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab('devops')}
                            className={`px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${activeTab === 'devops' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                        >
                            <FaCloud /> DevOps
                        </motion.button>
                    </div>

                    {/* Careers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCareers.map((career) => (
                            <motion.div
                                key={career.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-blue-500"
                            >
                                <div
                                    className="p-6 cursor-pointer"
                                    onClick={() => setExpandedCareer(expandedCareer === career.id ? null : career.id)}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gray-700 rounded-lg">
                                            {career.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2">{career.title}</h3>
                                            <p className="text-gray-300">{career.description}</p>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: expandedCareer === career.id ? 180 : 0 }}
                                            className="text-gray-400 mt-1"
                                        >
                                            <FiChevronDown />
                                        </motion.div>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {expandedCareer === career.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-6 pb-6"
                                        >
                                            <div className="pt-4 border-t border-gray-700">
                                                <div className="grid grid-cols-2 gap-4 mb-4">
                                                    <div>
                                                        <h4 className="font-semibold text-blue-400 mb-2">Average Salary</h4>
                                                        <p>{career.salary}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-blue-400 mb-2">Market Demand</h4>
                                                        <p>{career.demand}</p>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h4 className="font-semibold text-blue-400 mb-2">Key Skills</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {career.skills.map((skill, i) => (
                                                            <span key={i} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                                {skill}
                              </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="font-semibold text-blue-400 mb-2">Learning Path</h4>
                                                    <p>{career.path}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Career Building Programs */}
                <section id="programs" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 bg-gray-800 bg-opacity-50 rounded-3xl my-16 backdrop-blur-sm border border-gray-700">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-space">Career Building Programs</h2>
                        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
                            Our structured programs are designed to take you from beginner to job-ready in your chosen field.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Bootcamp Program */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-gray-900 p-8 rounded-xl border border-gray-700"
                            >
                                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                    <FaCode className="text-xl" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Coding Bootcamp</h3>
                                <p className="text-gray-300 mb-6">
                                    Intensive 12-week program focusing on full-stack development with hands-on projects and career support.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3">
                                        <span className="bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">✓</span>
                                        <span>Project-based learning</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">✓</span>
                                        <span>1:1 mentorship</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">✓</span>
                                        <span>Career coaching</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">✓</span>
                                        <span>Portfolio development</span>
                                    </li>
                                </ul>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Link
                                        href="#"
                                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                                    >
                                        Learn More
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Apprenticeship Program */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-gray-900 p-8 rounded-xl border border-gray-700"
                            >
                                <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                    <FaMobile className="text-xl" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Tech Apprenticeship</h3>
                                <p className="text-gray-300 mb-6">
                                    6-month paid apprenticeship with real-world experience and gradual responsibility increase.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3">
                                        <span className="bg-purple-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">✓</span>
                                        <span>Paid work experience</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="bg-purple-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">✓</span>
                                        <span>Company mentorship</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="bg-purple-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">✓</span>
                                        <span>Gradual skill building</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="bg-purple-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">✓</span>
                                        <span>Potential full-time offer</span>
                                    </li>
                                </ul>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Link
                                        href="#"
                                        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                                    >
                                        Learn More
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Specialization Program */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-gray-900 p-8 rounded-xl border border-gray-700"
                            >
                                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                    <FaRobot className="text-xl" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Specialization Track</h3>
                                <p className="text-gray-300 mb-6">
                                    Deep dive into specific technologies like AI, Cloud, or Cybersecurity with expert guidance.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3">
                                        <span className="bg-green-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">✓</span>
                                        <span>Advanced curriculum</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="bg-green-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">✓</span>
                                        <span>Industry expert instructors</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="bg-green-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">✓</span>
                                        <span>Cutting-edge technologies</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="bg-green-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">✓</span>
                                        <span>Certification preparation</span>
                                    </li>
                                </ul>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Link
                                        href="#"
                                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                                    >
                                        Learn More
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* CTA Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space">Ready to Launch Your Tech Career?</h2>
                        <p className="text-xl text-gray-300 mb-10">
                            Join thousands of students who transformed their careers with our programs. The future of tech starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={'/pages/apply'}
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300"
                                >
                                    Apply Now
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={''}
                                    className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300"
                                >
                                    Schedule Consultation
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </div>

            <style jsx global>{`
        :root {
          --mouse-x: 0.5;
          --mouse-y: 0.5;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        .font-space {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
        </>
    );
};

export default CareersPage;