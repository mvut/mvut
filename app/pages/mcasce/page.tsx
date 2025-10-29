'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaCode,
    FaBrain,
    FaCloud,
    FaCheckCircle,
    FaClock,
    FaRobot,
    FaStar,
    FaCalendarAlt,
    FaGraduationCap,
    FaLaptopCode,
    FaBriefcase,
    FaChevronRight,
    FaPlay,
    FaPause,
    FaUsers,
    FaDollarSign,
} from 'react-icons/fa';
import { MdAnalytics, MdOutlineSmartToy, MdSchool } from 'react-icons/md';
import { TbMathSymbols } from 'react-icons/tb';

type Module = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    level: string;
    icon: React.ReactNode;
    skills: string[];
    projects: string[];
    midTerm: string[];
    finalTerm: string[];
};

type Testimonial = {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    outcome: string;
    avatar: string;
};

type TabType = 'overview' | 'curriculum' | 'outcomes' | 'testimonials' | 'trainer';

type HighlightItem = {
    icon: React.ReactNode;
    value: string;
    label: string;
    color: string;
};

type RoleItem = {
    title: string;
    salary: string;
    growth: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
};

type TabItem = {
    id: TabType;
    label: string;
    icon: React.ReactNode;
};

type TrainerOpportunity = {
    title: string;
    earning: string;
    requirements: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
};

const MODULES: Module[] = [
    {
        id: 'fullstack',
        title: 'Full-Stack Software Engineer',
        subtitle: 'Build end-to-end applications with modern tech stacks',
        description: 'Master frontend and backend development using TypeScript, React, Node.js, and cloud deployment strategies.',
        duration: '6 months',
        level: 'Level 1',
        icon: <FaCode className="text-2xl" />,
        skills: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Testing', 'Database Design'],
        projects: ['E-commerce Platform', 'Task Management System', 'Real-time Chat App'],
        midTerm: ['Web Fundamentals', 'Frontend Development', 'Backend Basics'],
        finalTerm: ['Full-Stack Integration', 'Database Optimization', 'Deployment Strategies']
    },
    {
        id: 'datascience',
        title: 'Data Science Analyst',
        subtitle: 'Transform data into actionable insights',
        description: 'Learn data analysis, visualization, and statistical modeling to drive business decisions and product development.',
        duration: '6 months',
        level: 'Level 2',
        icon: <MdAnalytics className="text-2xl" />,
        skills: ['Python', 'Pandas', 'SQL', 'Data Visualization', 'Statistical Analysis'],
        projects: ['Sales Forecasting System', 'Customer Segmentation', 'Business Intelligence Dashboard'],
        midTerm: ['Data Analysis Fundamentals', 'SQL Mastery', 'Statistical Methods'],
        finalTerm: ['Advanced Analytics', 'Machine Learning Basics', 'Data Storytelling']
    },
    {
        id: 'mlengineer',
        title: 'Machine Learning Systems Engineer',
        subtitle: 'Build production-ready ML systems',
        description: 'Design, train, and deploy machine learning models with focus on reliability, scalability, and monitoring.',
        duration: '6 months',
        level: 'Level 3',
        icon: <FaBrain className="text-2xl" />,
        skills: ['TensorFlow/PyTorch', 'ML Pipelines', 'CI/CD', 'Feature Engineering', 'Model Deployment'],
        projects: ['Recommender System', 'Fraud Detection Engine', 'Predictive Maintenance'],
        midTerm: ['ML Fundamentals', 'Model Training', 'Evaluation Metrics'],
        finalTerm: ['Production Deployment', 'Performance Optimization', 'Monitoring Systems']
    },
    {
        id: 'dlresearch',
        title: 'Deep Learning Research Engineer',
        subtitle: 'Advance AI through research and innovation',
        description: 'Implement cutting-edge research, reproduce papers, and develop novel architectures for complex AI challenges.',
        duration: '6 months',
        level: 'Level 4',
        icon: <TbMathSymbols className="text-2xl" />,
        skills: ['PyTorch', 'Transformers', 'Research Methods', 'Neural Architecture', 'Experimental Design'],
        projects: ['Image Generation System', 'NLP Language Model', 'Computer Vision Applications'],
        midTerm: ['Deep Learning Theory', 'Architecture Design', 'Research Methodology'],
        finalTerm: ['Advanced Architectures', 'Research Implementation', 'Paper Reproduction']
    },
    {
        id: 'aiarchitect',
        title: 'AI Solutions Architect',
        subtitle: 'Design enterprise-scale AI systems',
        description: 'Architect comprehensive AI solutions with focus on scalability, security, and business alignment.',
        duration: '6 months',
        level: 'Level 5',
        icon: <FaCheckCircle className="text-2xl" />,
        skills: ['System Design', 'Microservices', 'Security', 'Cloud Architecture', 'Solution Design'],
        projects: ['AI-Powered CRM', 'Enterprise Analytics Platform', 'Intelligent Automation System'],
        midTerm: ['System Design Principles', 'Architecture Patterns', 'Security Fundamentals'],
        finalTerm: ['Enterprise Solutions', 'Scalability Design', 'Integration Strategies']
    },
    {
        id: 'cloudai',
        title: 'Cloud AI Infrastructure Engineer',
        subtitle: 'Build and optimize cloud infrastructure for AI',
        description: 'Master cloud platforms, infrastructure as code, and orchestration for scalable ML workloads and deployments.',
        duration: '6 months',
        level: 'Level 6',
        icon: <FaCloud className="text-2xl" />,
        skills: ['Kubernetes', 'Docker', 'AWS/GCP/Azure', 'Monitoring', 'Cost Optimization'],
        projects: ['Auto-scaling ML Infrastructure', 'Multi-cloud Deployment', 'MLOps Pipeline'],
        midTerm: ['Cloud Fundamentals', 'Containerization', 'Basic Orchestration'],
        finalTerm: ['Advanced Infrastructure', 'Multi-cloud Strategy', 'Production Optimization']
    },
];

const TESTIMONIALS: Testimonial[] = [
    {
        id: 't1',
        name: 'Daha Qalbi',
        role: 'AI Engineer',
        company: 'TechInnovate',
        content: 'The comprehensive curriculum and hands-on projects gave me the confidence to lead AI initiatives and deploy production systems.',
        outcome: 'Promoted to Senior AI Engineer within 6 months',
        avatar: '👩‍💻'
    },
    {
        id: 't2',
        name: 'Samina Hassan',
        role: 'ML Specialist',
        company: 'DataDrive Inc',
        content: 'From foundational programming to advanced ML deployment - this program accelerated my career transition into AI.',
        outcome: 'Deployed 3 production ML systems in first year',
        avatar: '👩‍🔬'
    },
    {
        id: 't3',
        name: 'Shahpara Safdar',
        role: 'Cloud AI Architect',
        company: 'CloudScale Technologies',
        content: 'The blend of research depth and engineering practicality enabled me to design and implement enterprise AI solutions.',
        outcome: 'Led architecture for $2M AI implementation project',
        avatar: '👩‍💼'
    },
];

const HIGHLIGHT_ITEMS: HighlightItem[] = [
    { icon: <FaClock />, value: '2100+', label: 'Learning Hours', color: 'from-orange-500 to-red-500' },
    { icon: <FaLaptopCode />, value: '50+', label: 'Practical Labs', color: 'from-green-500 to-teal-500' },
    { icon: <FaCalendarAlt />, value: '3 Years', label: 'Program Duration', color: 'from-purple-500 to-pink-500' },
    { icon: <FaGraduationCap />, value: '6 Modules', label: 'Comprehensive Curriculum', color: 'from-blue-500 to-cyan-500' },
];

const ROLE_ITEMS: RoleItem[] = [
    {
        title: 'AI Engineer',
        salary: '$95K – $180K',
        growth: '+32% YoY',
        description: 'Design and implement AI systems and machine learning models',
        icon: <FaBrain />,
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        title: 'Cloud Architect',
        salary: '$120K – $220K',
        growth: '+28% YoY',
        description: 'Design cloud infrastructure and deployment strategies',
        icon: <FaCloud />,
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'ML Specialist',
        salary: '$110K – $200K',
        growth: '+35% YoY',
        description: 'Develop and optimize machine learning systems',
        icon: <MdOutlineSmartToy />,
        gradient: 'from-green-500 to-teal-500'
    },
    {
        title: 'Data Scientist',
        salary: '$90K – $170K',
        growth: '+25% YoY',
        description: 'Extract insights and build data-driven solutions',
        icon: <MdAnalytics />,
        gradient: 'from-orange-500 to-red-500'
    },
];

const TRAINER_OPPORTUNITIES: TrainerOpportunity[] = [
    {
        title: 'Module Trainer',
        earning: '$5K – $10K per module',
        requirements: '1+ year post-completion experience',
        description: 'Teach core modules to new cohorts, sharing practical insights and mentoring aspiring engineers.',
        icon: <FaLaptopCode />,
        gradient: 'from-green-500 to-teal-500'
    },
    {
        title: 'Mentorship Lead',
        earning: '$8K – $15K annually',
        requirements: 'Top performer certification',
        description: 'Guide small groups through projects and career development, building your leadership skills.',
        icon: <FaUsers />,
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Advanced Workshop Instructor',
        earning: '$12K – $20K per workshop',
        requirements: '2+ years industry experience',
        description: 'Lead specialized workshops on emerging AI and cloud topics for intermediate learners.',
        icon: <FaBrain />,
        gradient: 'from-purple-500 to-pink-500'
    },
];

const TAB_ITEMS: TabItem[] = [
    { id: 'overview', label: 'Program Overview', icon: <MdSchool /> },
    { id: 'curriculum', label: 'Curriculum', icon: <FaLaptopCode /> },
    { id: 'outcomes', label: 'Career Outcomes', icon: <FaBriefcase /> },
    { id: 'testimonials', label: 'Success Stories', icon: <FaStar /> },
    { id: 'trainer', label: 'Trainer Opportunities', icon: <FaUsers /> },
];

const ProgramHighlights: React.FC = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {HIGHLIGHT_ITEMS.map((item, index) => (
            <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 hover:border-gray-600 transition-all duration-300 cursor-pointer"
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <motion.div
                    className={`text-4xl mb-4 bg-gradient-to-br ${item.color} bg-clip-text text-transparent relative z-10`}
                    initial={{ scale: 0.8, rotate: -10 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {item.icon}
                </motion.div>
                <motion.div
                    className="text-3xl font-bold text-white mb-2 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {item.value}
                </motion.div>
                <motion.div
                    className="text-gray-400 text-sm relative z-10"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {item.label}
                </motion.div>
                {/* Subtle glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
            </motion.div>
        ))}
    </div>
);

interface ModuleCardProps {
    module: Module;
    index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
    >
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    {module.icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">{module.title}</h3>
                    <p className="text-gray-400 text-sm">{module.subtitle}</p>
                </div>
            </div>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                {module.level}
            </span>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">{module.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <span>⏱️ {module.duration}</span>
            <div className="flex items-center gap-1 text-blue-400 group-hover:gap-2 transition-all">
                <span>Explore</span>
                <FaChevronRight className="text-xs" />
            </div>
        </div>

        <div className="flex flex-wrap gap-2">
            {module.skills.slice(0, 3).map((skill) => (
                <span key={skill} className="bg-gray-700/50 px-3 py-1 rounded-full text-xs text-gray-300">
                    {skill}
                </span>
            ))}
            {module.skills.length > 3 && (
                <span className="bg-gray-700/50 px-3 py-1 rounded-full text-xs text-gray-400">
                    +{module.skills.length - 3}
                </span>
            )}
        </div>
    </motion.div>
);

const FloatingParticle: React.FC<{ index: number }> = ({ index }) => (
    <motion.div
        className="absolute rounded-full bg-blue-500/10"
        style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
        }}
        animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
        }}
    />
);

const AnimatedBackground: React.FC = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
            {[...Array(20)].map((_, i) => (
                <FloatingParticle key={i} index={i} />
            ))}
        </div>
    </div>
);

export default function MCASCEPage(): JSX.Element {
    const [activeTab, setActiveTab] = useState<TabType>('overview');
    const [selectedModule, setSelectedModule] = useState<Module | null>(null);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isClient, setIsClient] = useState(false);

    // Fix hydration by ensuring this only runs on client
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isPlaying || !isClient) return;

        const interval = setInterval(() => {
            setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isPlaying, isClient]);

    // Don't render animated background during SSR to prevent hydration mismatch
    if (!isClient) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-xl">Loading...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
            <AnimatedBackground />
            {/* Hero Section */}
            <section className="relative pt-20 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="relative z-10"
                        >

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                                Mansha Certified Autonomous Systems & Cloud Engineer
                            </h1>

                            <p className="text-xl text-gray-300 mt-8 leading-relaxed max-w-2xl">
                                A rigorous three-year program designed for aspiring technologists at any stage—equipping learners from diverse backgrounds with the skills to become expert AI and Cloud engineers through immersive, project-based training and mentorship.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-12">
                                <Link
                                    href="/pages/apply"
                                    className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25"
                                >
                                    <span className="relative z-10">Apply Now</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                                <Link
                                    href={'/pages/mcasce/study-scheme'}
                                    className="group border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 backdrop-blur-sm"
                                >
                                    <span className="flex items-center gap-2">
                                        Study Scheme
                                        <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 shadow-2xl">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-sm" />
                                <h3 className="text-2xl font-bold mb-8 text-white relative z-10">Program Journey</h3>
                                <div className="space-y-4 relative z-10">
                                    {MODULES.map((module) => (
                                        <motion.div
                                            key={module.id}
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all cursor-pointer border border-gray-700 hover:border-gray-600"
                                            onClick={() => setSelectedModule(module)}
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                                                {module.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-white truncate">{module.title}</h4>
                                                <p className="text-gray-400 text-xs truncate">{module.subtitle}</p>
                                            </div>
                                            <div className="text-xs font-medium bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                                                {module.level}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Program Highlights */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
                <ProgramHighlights />
            </section>

            {/* Navigation Tabs */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="flex overflow-x-auto gap-2 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-2 border border-gray-700">
                    {TAB_ITEMS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-xl whitespace-nowrap transition-all duration-300 ${
                                activeTab === tab.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                            }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Main Content */}
            <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <AnimatePresence mode="wait">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <motion.section
                            key="overview"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-16"
                        >
                            <div className="grid lg:grid-cols-2 gap-16">
                                <div>
                                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                                        Program Overview
                                    </h2>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                        The Mansha Certified Autonomous Systems and Cloud Engineer (MCASCE) program is a
                                        comprehensive 3-year journey designed to transform software developers into expert
                                        AI and cloud engineers. Through six intensive modules, you&apos;ll gain practical experience
                                        in building, deploying, and operating real AI systems at scale.
                                    </p>

                                    <div className="space-y-6">
                                        {[
                                            { icon: <FaCalendarAlt className="text-blue-400" />, text: 'Online classes, Monday to Friday' },
                                            { icon: <FaClock className="text-green-400" />, text: '3 years (6 months per module)' },
                                            { icon: <FaGraduationCap className="text-purple-400" />, text: 'Comprehensive exam after each module' },
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-2xl border border-gray-700">
                                                {item.icon}
                                                <span className="text-gray-300">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
                                    <h3 className="text-2xl font-bold mb-8 text-white">Key Features</h3>
                                    <div className="grid gap-4">
                                        {[
                                            '2100+ hours of hands-on learning',
                                            '50+ practical labs and projects',
                                            '1-month on-job training',
                                            'Industry mentorship',
                                            'Career support and placement',
                                            'Comprehensive certification'
                                        ].map((feature, index) => (
                                            <motion.div
                                                key={feature}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-center gap-4 p-3 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                                            >
                                                <FaCheckCircle className="text-green-400 flex-shrink-0" />
                                                <span className="text-gray-300">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    )}

                    {/* Curriculum Tab */}
                    {activeTab === 'curriculum' && (
                        <motion.section
                            key="curriculum"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-12"
                        >
                            <h2 className="text-4xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                                Curriculum Overview
                            </h2>

                            <div className="grid gap-8">
                                {MODULES.map((module, index) => (
                                    <ModuleCard key={module.id} module={module} index={index} />
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {/* Career Outcomes Tab */}
                    {activeTab === 'outcomes' && (
                        <motion.section
                            key="outcomes"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-12"
                        >
                            <h2 className="text-4xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                                Career Outcomes
                            </h2>

                            <p className="text-gray-300 text-lg max-w-3xl">
                                Graduates of the MCASCE program are prepared for high-demand roles in the AI and cloud computing industry,
                                with practical experience in building, deploying, and operating real systems.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                                {ROLE_ITEMS.map((role, index) => (
                                    <motion.div
                                        key={role.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl"
                                    >
                                        <div className={`text-4xl mb-6 bg-gradient-to-br ${role.gradient} bg-clip-text text-transparent`}>
                                            {role.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">{role.title}</h3>
                                        <div className="text-xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent mb-2">
                                            {role.salary}
                                        </div>
                                        <div className="text-green-400 text-sm font-medium mb-4">{role.growth}</div>
                                        <p className="text-gray-300 leading-relaxed">{role.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {/* Testimonials Tab */}
                    {activeTab === 'testimonials' && (
                        <motion.section
                            key="testimonials"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-12"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-4xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                                    Graduate Success Stories
                                </h2>
                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="p-3 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-gray-600 transition-colors"
                                    aria-label={isPlaying ? 'Pause testimonials' : 'Play testimonials'}
                                >
                                    {isPlaying ? <FaPause /> : <FaPlay />}
                                </button>
                            </div>

                            <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-3xl p-12">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={testimonialIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="flex flex-col lg:flex-row gap-12 items-center"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl">
                                                {TESTIMONIALS[testimonialIndex].avatar}
                                            </div>
                                        </div>

                                        <div className="flex-1 text-center lg:text-left">
                                            <div className="flex justify-center lg:justify-start gap-1 mb-6">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <FaStar key={i} className="text-yellow-400 text-xl" />
                                                ))}
                                            </div>

                                            <blockquote className="text-2xl italic text-gray-200 mb-8 leading-relaxed">
                                                &quot;{TESTIMONIALS[testimonialIndex].content}&quot;
                                            </blockquote>

                                            <div className="space-y-3">
                                                <div className="font-bold text-xl text-white">
                                                    {TESTIMONIALS[testimonialIndex].name}
                                                </div>
                                                <div className="text-gray-300 text-lg">
                                                    {TESTIMONIALS[testimonialIndex].role} at {TESTIMONIALS[testimonialIndex].company}
                                                </div>
                                                <div className="text-green-400 font-semibold text-lg">
                                                    {TESTIMONIALS[testimonialIndex].outcome}
                                                </div>
                                            </div>

                                            <div className="flex justify-center lg:justify-start gap-3 mt-8">
                                                {TESTIMONIALS.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => {
                                                            setTestimonialIndex(index);
                                                            setIsPlaying(false);
                                                        }}
                                                        className={`w-4 h-4 rounded-full transition-all ${
                                                            index === testimonialIndex
                                                                ? 'bg-blue-500 scale-125'
                                                                : 'bg-gray-600 hover:bg-gray-500'
                                                        }`}
                                                        aria-label={`View testimonial ${index + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.section>
                    )}

                    {/* Trainer Opportunities Tab */}
                    {activeTab === 'trainer' && (
                        <motion.section
                            key="trainer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-12"
                        >
                            <div className="grid lg:grid-cols-2 gap-16">
                                <div>
                                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                                        Trainer Opportunities
                                    </h2>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                        After completing the MCASCE program and gaining 1 year of professional experience, exceptional graduates can transition into trainer roles. Share your expertise, mentor the next generation, and earn competitive income while advancing your own career.
                                    </p>

                                    <div className="space-y-6">
                                        {[
                                            { icon: <FaClock className="text-blue-400" />, text: 'Eligible after 1 year of program completion' },
                                            { icon: <FaDollarSign className="text-green-400" />, text: 'Flexible earning potential up to $20K+ annually' },
                                            { icon: <FaUsers className="text-purple-400" />, text: 'Part-time or full-time training commitments' },
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-2xl border border-gray-700">
                                                {item.icon}
                                                <span className="text-gray-300">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
                                    <h3 className="text-2xl font-bold mb-8 text-white">Why Become a Trainer?</h3>
                                    <div className="grid gap-4">
                                        {[
                                            'Deepen your expertise through teaching',
                                            'Build a professional network in education',
                                            'Flexible schedule around your full-time role',
                                            'Contribute to the AI community',
                                            'Access to advanced certification tracks',
                                            'Ongoing support and resources'
                                        ].map((benefit, index) => (
                                            <motion.div
                                                key={benefit}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-center gap-4 p-3 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                                            >
                                                <FaCheckCircle className="text-green-400 flex-shrink-0" />
                                                <span className="text-gray-300">{benefit}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold text-center bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                                    Available Trainer Roles
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {TRAINER_OPPORTUNITIES.map((opportunity, index) => (
                                        <motion.div
                                            key={opportunity.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl"
                                        >
                                            <div className={`text-4xl mb-4 bg-gradient-to-br ${opportunity.gradient} bg-clip-text text-transparent`}>
                                                {opportunity.icon}
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2">{opportunity.title}</h4>
                                            <div className="text-xl font-bold bg-gradient-to-br from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                                                {opportunity.earning}
                                            </div>
                                            <div className="text-sm text-gray-400 mb-3">{opportunity.requirements}</div>
                                            <p className="text-gray-300 leading-relaxed">{opportunity.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>

                {/* Final CTA */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-24 text-center"
                >
                    <div className="relative bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-3xl p-16">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-sm" />
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                                Ready to Start Your Journey?
                            </h2>
                            <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                                Join the next cohort of aspiring AI and Cloud engineers. Transform your career with hands-on experience and industry-recognized certification.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link
                                    href="/pages/apply"
                                    className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-12 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25"
                                >
                                    <span className="relative z-10">Apply for MCASCE</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                                <Link
                                    href="/pages/curriculum"
                                    className="group border border-gray-600 hover:border-gray-400 px-12 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 backdrop-blur-sm"
                                >
                                    <span className="flex items-center gap-3">
                                        Download Curriculum
                                        <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </div>
                            <div className="mt-8 text-gray-400 text-lg">
                                3-year program • Online classes • Career support • Limited seats available
                            </div>
                        </div>
                    </div>
                </motion.section>
            </main>
        </div>
    );
}