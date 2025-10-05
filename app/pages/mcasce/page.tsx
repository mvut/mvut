'use client';

import {
    FaCode,
    FaDatabase,
    FaBrain,
    FaLayerGroup,
    FaServer,
    FaCloud,
    FaCheckCircle,
    FaRocket,
    FaChartLine,
    FaRobot,
    FaNetworkWired,
    FaGraduationCap,
    FaClock,
    FaStar,
} from 'react-icons/fa';
import { MdSchool, MdComputer, MdAnalytics } from 'react-icons/md';
import { TbMathSymbols } from 'react-icons/tb';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Define types
type Module = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    level: 'Level-0' | 'Level-1' | 'Level-2'| 'Level-3'| 'Level-4'| 'Level-5';
    icon: React.ReactNode;
    skills: string[];
    projects: string[];
};

type Testimonial = {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    outcome: string;
};

export default function MCASCEPage() {
    const [activeTab, setActiveTab] = useState<string>('overview');
    const [mounted, setMounted] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Modules data (simplified gradients for consistency)
    const modules: Module[] = [
        {
            id: 'fullstack',
            title: 'Full-Stack Software Engineer',
            subtitle: 'Build end-to-end applications with modern frameworks',
            description: 'Master the complete software development lifecycle from frontend to backend, learning industry-standard tools and practices for building scalable web applications.',
            duration: '16 weeks',
            level: 'Level-0',
            icon: <FaCode className="text-3xl text-red-400" />,
            skills: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'REST APIs'],
            projects: ['E-commerce Platform', 'Social Media App', 'Task Management System']
        },
        {
            id: 'datascience',
            title: 'Data Science Analyst',
            subtitle: 'Transform data into actionable insights',
            description: 'Learn to collect, process, analyze, and visualize data to extract meaningful insights and drive business decisions using statistical methods and modern tools.',
            duration: '16 weeks',
            level: 'Level-1',
            icon: <MdAnalytics className="text-3xl text-green-400" />,
            skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'SQL', 'Statistical Analysis'],
            projects: ['Sales Forecasting', 'Customer Segmentation', 'Market Basket Analysis']
        },
        {
            id: 'mlengineer',
            title: 'Machine Learning Systems Engineer',
            subtitle: 'Design and deploy ML-powered applications',
            description: 'Develop expertise in building, training, and deploying machine learning models in production environments, focusing on scalability and reliability.',
            duration: '16 weeks',
            level: 'Level-2',
            icon: <FaBrain className="text-3xl text-red-400" />,
            skills: ['Scikit-learn', 'TensorFlow', 'Model Deployment', 'ML Pipelines', 'Feature Engineering'],
            projects: ['Recommendation System', 'Fraud Detection', 'Predictive Maintenance']
        },
        {
            id: 'dlresearch',
            title: 'Deep Learning Research Engineer',
            subtitle: 'Push the boundaries of AI innovation',
            description: 'Dive deep into neural networks and cutting-edge research, learning to develop novel architectures and contribute to the advancement of artificial intelligence.',
            duration: '16 weeks',
            level: 'Level-3',
            icon: <TbMathSymbols className="text-3xl text-red-400" />,
            skills: ['PyTorch', 'CNN', 'RNN', 'Transformers', 'Research Methods', 'Paper Implementation'],
            projects: ['Image Generation', 'Natural Language Understanding', 'Reinforcement Learning']
        },
        {
            id: 'aiarchitect',
            title: 'AI Solutions Architect',
            subtitle: 'Design enterprise AI systems',
            description: 'Learn to design comprehensive AI solutions that address complex business problems, integrating multiple technologies and ensuring scalability and security.',
            duration: '16 weeks',
            level: 'Level-4',
            icon: <FaLayerGroup className="text-3xl text-green-400" />,
            skills: ['System Design', 'AI Integration', 'Microservices', 'API Design', 'Security'],
            projects: ['Enterprise Chatbot', 'AI-Powered CRM', 'Smart Analytics Platform']
        },
        {
            id: 'cloudai',
            title: 'Cloud AI Infrastructure Engineer',
            subtitle: 'Build and manage AI infrastructure at scale',
            description: 'Master cloud platforms and infrastructure as code to deploy and manage AI systems efficiently, ensuring high availability and performance.',
            duration: '16 weeks',
            level: 'Level-5',
            icon: <FaCloud className="text-3xl text-red-400" />,
            skills: ['AWS/Azure/GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring', 'Cost Optimization'],
            projects: ['Auto-scaling ML Platform', 'Data Pipeline Orchestration', 'Hybrid Cloud Deployment']
        }
    ];

    const testimonials: Testimonial[] = [
        {
            id: '1',
            name: 'Daha Qalbi',
            role: 'MERN Stack Developer',
            company: 'CEO CodingVerse',
            content: 'The MCASCE program transformed my career. The hands-on labs and real-world projects gave me the confidence to lead AI initiatives at my organization.',
            outcome: 'Promoted to Lead AI Engineer within 3 months'
        },
        {
            id: '2',
            name: 'Samina Hassan',
            role: 'Full-Stack Developer',
            company: 'MVITech',
            content: 'The depth and breadth of the curriculum exceeded my expectations. I went from knowing basic Python to deploying production ML systems in just 6 months.',
            outcome: 'Deployed 3 production AI systems for clients'
        },
        {
            id: '3',
            name: 'Shahpara Safdar',
            role: 'Researcher',
            company: 'MVITech',
            content: 'What sets MCASCE apart is the focus on practical skills. The certification opened doors to opportunities I never thought possible.',
            outcome: 'Published research paper with industry partner'
        }
    ];

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Level badge styling
    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Beginner': return 'bg-blue-500/20 text-blue-300';
            case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300';
            case 'Advanced': return 'bg-purple-500/20 text-purple-300';
            default: return 'bg-gray-500/20 text-gray-300';
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-green-500/20 text-red-300 rounded-full text-sm font-medium backdrop-blur-sm border border-red-500/30">
                  MVIT Certified Program
                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Mansha Certified
                                <br />
                                <span className="bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent">
                  Autonomous Systems & Cloud Engineer
                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                                A 24-month intensive certification program that transforms you into an industry-ready AI and cloud engineering professional.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link
                                    href="/pages/apply"
                                    className="bg-gradient-to-r from-red-500 to-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition"
                                >
                                    Enroll Now
                                </Link>
                                <button className="border border-gray-700 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition">
                                    View Full Curriculum
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-white">6</div>
                                    <div className="text-sm text-gray-400">Specialized Modules</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">2100+</div>
                                    <div className="text-sm text-gray-400">Learning Hours</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">50+</div>
                                    <div className="text-sm text-gray-400">Hands-on Labs</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-6 text-center">Integrated Learning Path</h3>
                            <div className="space-y-4">
                                {modules.map((module, idx) => (
                                    <div key={module.id} className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                                        <div className="mr-4 text-red-400">{module.icon}</div>
                                        <div className="flex-1">
                                            <div className="font-medium">{module.title}</div>
                                            <div className="text-xs text-gray-400">{module.duration}</div>
                                        </div>
                                        <span className={`text-xs px-2 py-1 rounded ${getLevelColor(module.level)}`}>
                      {module.level}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <section className="py-20 px-4 bg-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Comprehensive <span className="bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent">Learning Modules</span>
                        </h2>
                        <p className="text-gray-400 max-w-3xl mx-auto">
                            Six integrated modules designed to build your expertise from foundational concepts to advanced implementation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {modules.map((module, index) => (
                            <motion.div
                                key={module.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all"
                            >
                                <div className="p-6 border-b border-gray-800">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center">
                                            {module.icon}
                                            <h3 className="text-xl font-bold ml-3">{module.title}</h3>
                                        </div>
                                        <span className={`text-xs px-2 py-1 rounded ${getLevelColor(module.level)}`}>
                      {module.level}
                    </span>
                                    </div>
                                    <p className="text-gray-400 text-sm">{module.subtitle}</p>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-300 mb-6 text-sm">{module.description}</p>

                                    <div className="mb-6">
                                        <div className="flex items-center text-sm text-gray-400 mb-3">
                                            <FaClock className="text-red-400 mr-2" />
                                            <span>{module.duration} • Full-time commitment</span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-white mb-3 text-sm">Key Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {module.skills.map((skill, i) => (
                                                <span key={i} className="px-2 py-1 bg-gray-800 text-xs rounded">
                          {skill}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-white mb-3 text-sm">Projects</h4>
                                        <ul className="space-y-2">
                                            {module.projects.map((project, i) => (
                                                <li key={i} className="flex items-start text-gray-300 text-sm">
                                                    <FaCheckCircle className="text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                                    <span>{project}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Career <span className="bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent">Outcomes</span>
                        </h2>
                        <p className="text-gray-400 max-w-3xl mx-auto">
                            Our graduates are prepared for high-impact roles in AI engineering, cloud architecture, and data science.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'AI Engineer', salary: '$95K–$180K', growth: '+32% YoY' },
                            { title: 'Cloud Architect', salary: '$120K–$220K', growth: '+28% YoY' },
                            { title: 'ML Specialist', salary: '$110K–$200K', growth: '+35% YoY' },
                            { title: 'Data Scientist', salary: '$90K–$170K', growth: '+25% YoY' }
                        ].map((role, idx) => (
                            <div key={idx} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-green-500/30 transition">
                                <div className="text-2xl font-bold text-white mb-2">{role.title}</div>
                                <div className="text-green-400 font-medium mb-1">{role.salary}</div>
                                <div className="text-gray-400 text-sm">{role.growth}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-4 bg-gray-900/50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Graduate <span className="bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent">Success</span>
                        </h2>
                        <p className="text-gray-400">Real results from our certified professionals</p>
                    </div>

                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                        <div className="flex items-start mb-6">
                            <div className="flex-shrink-0 mr-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center">
                                    <FaRobot className="text-white text-lg" />
                                </div>
                            </div>
                            <div>
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-gray-200 italic mb-4">
                                    &quot;{testimonials[currentTestimonial].content}&quot;
                                </blockquote>
                                <div className="font-medium text-white">{testimonials[currentTestimonial].name}</div>
                                <div className="text-gray-400 text-sm">
                                    {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                                </div>
                                <div className="mt-2 text-green-400 text-sm font-medium">
                                    → {testimonials[currentTestimonial].outcome}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center space-x-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentTestimonial(idx)}
                                    className={`w-2 h-2 rounded-full transition ${
                                        idx === currentTestimonial ? 'bg-red-500' : 'bg-gray-600'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Become an <span className="bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent">AI & Cloud Professional</span>?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Join the next cohort of certified engineers building the future of autonomous systems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/pages/apply"
                                className="bg-gradient-to-r from-red-500 to-green-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition"
                            >
                                Apply Now — Limited Seats
                            </Link>
                            {/*<button className="border border-gray-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition">*/}
                            {/*    Schedule Consultation*/}
                            {/*</button>*/}
                        </div>

                        <p className="text-gray-500 text-sm mt-6">
                            24-month program • Flexible scheduling • Career support included • Industry certification
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}