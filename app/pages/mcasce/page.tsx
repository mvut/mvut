'use client'
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
    FaClock
} from 'react-icons/fa';
import { MdSchool, MdComputer, MdAnalytics } from 'react-icons/md';
import { TbMathSymbols } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from "next/link";

// Define types for our certification program
type Module = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    skills: string[];
    projects: string[];
};

type Testimonial = {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
};

export default function MCASCEPage() {
    const [activeTab, setActiveTab] = useState<string>('overview');
    const [mounted, setMounted] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Mock data for modules
    const modules: Module[] = [
        {
            id: 'fullstack',
            title: 'Full-Stack Software Engineer',
            subtitle: 'Build end-to-end applications with modern frameworks',
            description: 'Master the complete software development lifecycle from frontend to backend, learning industry-standard tools and practices for building scalable web applications.',
            duration: '16 weeks',
            level: 'Beginner',
            icon: <FaCode className="text-4xl" />,
            color: 'text-red-400',
            bgColor: 'bg-gradient-to-br from-black to-red-900',
            skills: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'REST APIs'],
            projects: ['E-commerce Platform', 'Social Media App', 'Task Management System']
        },
        {
            id: 'datascience',
            title: 'Data Science Analyst',
            subtitle: 'Transform data into actionable insights',
            description: 'Learn to collect, process, analyze, and visualize data to extract meaningful insights and drive business decisions using statistical methods and modern tools.',
            duration: '16 weeks',
            level: 'Beginner',
            icon: <MdAnalytics className="text-4xl" />,
            color: 'text-green-400',
            bgColor: 'bg-gradient-to-br from-black to-green-900',
            skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'SQL', 'Statistical Analysis'],
            projects: ['Sales Forecasting', 'Customer Segmentation', 'Market Basket Analysis']
        },
        {
            id: 'mlengineer',
            title: 'Machine Learning Systems Engineer',
            subtitle: 'Design and deploy ML-powered applications',
            description: 'Develop expertise in building, training, and deploying machine learning models in production environments, focusing on scalability and reliability.',
            duration: '16 weeks',
            level: 'Intermediate',
            icon: <FaBrain className="text-4xl" />,
            color: 'text-red-400',
            bgColor: 'bg-gradient-to-br from-black to-red-900',
            skills: ['Scikit-learn', 'TensorFlow', 'Model Deployment', 'ML Pipelines', 'Feature Engineering'],
            projects: ['Recommendation System', 'Fraud Detection', 'Predictive Maintenance']
        },
        {
            id: 'dlresearch',
            title: 'Deep Learning Research Engineer',
            subtitle: 'Push the boundaries of AI innovation',
            description: 'Dive deep into neural networks and cutting-edge research, learning to develop novel architectures and contribute to the advancement of artificial intelligence.',
            duration: '16 weeks',
            level: 'Advanced',
            icon: <TbMathSymbols className="text-4xl" />,
            color: 'text-red-400',
            bgColor: 'bg-gradient-to-br from-black to-red-900',
            skills: ['PyTorch', 'CNN', 'RNN', 'Transformers', 'Research Methods', 'Paper Implementation'],
            projects: ['Image Generation', 'Natural Language Understanding', 'Reinforcement Learning']
        },
        {
            id: 'aiarchitect',
            title: 'AI Solutions Architect',
            subtitle: 'Design enterprise AI systems',
            description: 'Learn to design comprehensive AI solutions that address complex business problems, integrating multiple technologies and ensuring scalability and security.',
            duration: '16 weeks',
            level: 'Advanced',
            icon: <FaLayerGroup className="text-4xl" />,
            color: 'text-green-400',
            bgColor: 'bg-gradient-to-br from-black to-green-900',
            skills: ['System Design', 'AI Integration', 'Microservices', 'API Design', 'Security'],
            projects: ['Enterprise Chatbot', 'AI-Powered CRM', 'Smart Analytics Platform']
        },
        {
            id: 'cloudai',
            title: 'Cloud AI Infrastructure Engineer',
            subtitle: 'Build and manage AI infrastructure at scale',
            description: 'Master cloud platforms and infrastructure as code to deploy and manage AI systems efficiently, ensuring high availability and performance.',
            duration: '16 weeks',
            level: 'Intermediate',
            icon: <FaCloud className="text-4xl" />,
            color: 'text-red-400',
            bgColor: 'bg-gradient-to-br from-black to-red-900',
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
            avatar: '/images/avatar1.jpg'
        },
        {
            id: '2',
            name: 'Samina Hassan',
            role: 'Full-Stack Developer',
            company: 'MVITech',
            content: 'The depth and breadth of the curriculum exceeded my expectations. I went from knowing basic Python to deploying production ML systems in just 6 months.',
            avatar: '/images/avatar2.jpg'
        },
        {
            id: '3',
            name: 'Shahpara Safdar',
            role: 'Researcher',
            company: 'MVITech',
            content: 'What sets MCASCE apart is the focus on practical skills. The certification opened doors to opportunities I never thought possible.',
            avatar: '/images/avatar3.jpg'
        }
    ];

    // Trigger mounting effect for animations
    useEffect(() => {
        setMounted(true);
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Montserrat:wght@500;600;700;800;900&display=swap');
                :root {
                    --font-poppins: 'Poppins', sans-serif;
                    --font-montserrat: 'Montserrat', sans-serif;
                }
                .text-gradient {
                    background: linear-gradient(90deg, #EF4444, #10B981);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-pulse-slow {
                    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                .bg-primary-gradient {
                    background: linear-gradient(135deg, #000000 60%, #EF4444 30%, #10B981 10%);
                }
                .bg-secondary-gradient {
                    background: linear-gradient(135deg, #000000 70%, #EF4444 25%, #10B981 5%);
                }
                .bg-module-gradient {
                    background: linear-gradient(135deg, #000000 60%, #EF4444 30%, #10B981 10%);
                }
            `}</style>

            <div className="min-h-screen bg-primary-gradient">
                {/* Animated Background Elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Hero Section */}
                <section className="relative z-10 pt-20 pb-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center">
                            <div className={`lg:w-1/2 mb-12 lg:mb-0 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                                <div className="inline-block">
                                    <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-green-500/20 text-red-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-red-500/30">
                                        MVIT Certified Program
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                    <span className="text-white">Mansha Certified</span>
                                    <br />
                                    <span className="text-gradient">Autonomous Systems</span>
                                    <br />
                                    <span className="text-white">and</span>
                                    <span className="text-gradient"> Cloud Engineer</span>
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                    Transform your career with our comprehensive certification program that combines cutting-edge AI technologies with cloud infrastructure expertise.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gradient-to-r from-red-500 to-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300"
                                    >
                                        <Link href={'/pages/apply'} target={'_blank'}>Start Your Journey</Link>
                                    </motion.button>
                                    <button className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                        View Curriculum
                                    </button>
                                </div>
                                <div className="flex items-center mt-8 space-x-8 text-gray-400">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">6</div>
                                        <div className="text-sm">Modules</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">2100+</div>
                                        <div className="text-sm">Hours of Content</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">50+</div>
                                        <div className="text-sm">Hands-on Labs</div>
                                    </div>
                                </div>
                            </div>
                            <div className={`lg:w-1/2 relative transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-green-500 rounded-3xl transform rotate-6"></div>
                                    <div className="relative bg-black/90 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                                        <div className="grid grid-cols-2 gap-4">
                                            {modules.slice(0, 4).map((module, index) => (
                                                <motion.div
                                                    key={module.id}
                                                    whileHover={{ scale: 1.05 }}
                                                    className={`p-4 rounded-2xl ${module.bgColor} text-white`}
                                                    style={{ animationDelay: `${index * 100}ms` }}
                                                >
                                                    <div className="flex items-center mb-2">
                                                        {module.icon}
                                                        <span className="ml-2 text-sm font-medium">{module.title.split(' ')[0]}</span>
                                                    </div>
                                                    <div className="text-xs opacity-90">{module.duration}</div>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="mt-6 text-center">
                                            <motion.div
                                                animate={{
                                                    rotate: 360,
                                                    transition: {
                                                        duration: 8,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    }
                                                }}
                                                className="w-16 h-16 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                            >
                                                <FaNetworkWired className="text-white" />
                                            </motion.div>
                                            <p className="text-sm text-gray-300">Integrated Learning Path</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modules Overview */}
                <section className="relative z-10 py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                <span className="text-white">Six Integrated</span>
                                <span className="text-gradient"> Learning Modules</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Our comprehensive program is designed to take you from foundational concepts to advanced implementation
                                across the entire AI and cloud engineering spectrum.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            {modules.map((module, index) => (
                                <motion.div
                                    key={module.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    className={`bg-black/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300`}
                                >
                                    <div className={`${module.bgColor} p-6 text-white`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center">
                                                {module.icon}
                                                <h3 className="text-xl font-bold ml-3">{module.title}</h3>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                module.level === 'Beginner' ? 'bg-white/20' :
                                                    module.level === 'Intermediate' ? 'bg-white/30' : 'bg-white/40'
                                            }`}>
                                                {module.level}
                                            </span>
                                        </div>
                                        <p className="text-white/90 text-sm">{module.subtitle}</p>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-300 mb-6 leading-relaxed">{module.description}</p>
                                        <div className="mb-6">
                                            <div className="flex items-center mb-3">
                                                <FaClock className="text-red-400 mr-2" />
                                                <span className="text-sm font-medium text-white">Duration: {module.duration}</span>
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-white mb-3">Key Skills</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {module.skills.map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 hover:bg-white/20 transition-colors duration-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-3">Hands-on Projects</h4>
                                            <ul className="space-y-2">
                                                {module.projects.map((project, projectIndex) => (
                                                    <li key={projectIndex} className="flex items-center text-gray-300 text-sm">
                                                        <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                                                        <span>{project}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-full mt-6 bg-gradient-to-r ${module.id.includes('data') || module.id.includes('aiarchitect') ? 'from-green-500 to-green-600' : 'from-red-500 to-red-600'} text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300`}
                                        >
                                            Explore Module
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Learning Approach */}
                <section className="relative z-10 py-20 bg-black/50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                <span className="text-white">Our</span>
                                <span className="text-gradient"> Learning Approach</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                We combine theoretical knowledge with extensive practical experience to ensure you&apos;re ready for real-world challenges.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: <FaGraduationCap className="text-4xl text-red-400" />,
                                    title: 'Expert Instructors',
                                    description: 'Learn from industry professionals with years of real-world experience in AI and cloud technologies.'
                                },
                                {
                                    icon: <FaNetworkWired className="text-4xl text-green-400" />,
                                    title: 'Integrated Curriculum',
                                    description: 'Our modules are designed to build upon each other, creating a cohesive learning journey.'
                                },
                                {
                                    icon: <FaRocket className="text-4xl text-red-400" />,
                                    title: 'Hands-on Labs',
                                    description: 'Over 50 practical labs that simulate real-world scenarios and challenges.'
                                },
                                {
                                    icon: <FaChartLine className="text-4xl text-green-400" />,
                                    title: 'Career Support',
                                    description: 'Personalized guidance and resources to help you advance your career in AI engineering.'
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="bg-black/80 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300"
                                >
                                    <div className="flex justify-center mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="relative z-10 py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                <span className="text-white">Success</span>
                                <span className="text-gradient"> Stories</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Hear from our graduates who have transformed their careers through the MCASCE program.
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative overflow-hidden"
                            >
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-6">
                                        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center">
                                            <FaRobot className="text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center mb-4">
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <blockquote className="text-xl text-gray-200 mb-6 leading-relaxed">
                                            &quot;{testimonials[currentTestimonial].content}&quot;
                                        </blockquote>
                                        <div>
                                            <div className="font-bold text-white">{testimonials[currentTestimonial].name}</div>
                                            <div className="text-gray-400">
                                                {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-6 space-x-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                index === currentTestimonial ? 'bg-gradient-to-r from-red-500 to-green-500' : 'bg-white/30 hover:bg-white/50'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative z-10 py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-red-900/80 to-green-900/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 text-center"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                <span className="text-white">Ready to Transform</span>
                                <span className="text-gradient"> Your Career?</span>
                            </h2>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-red-500 to-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300"
                                >
                                    <Link href={'/pages/apply'}>Enroll Now</Link>
                                </motion.button>
                                <button className="border border-white/50 text-white px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                    Schedule a Call
                                </button>
                            </div>
                            <div className="mt-8 text-sm text-gray-400">
                                24-month program • Flexible scheduling • Career support included
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}