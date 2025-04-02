'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    FaReact, FaNodeJs, FaDatabase, FaCloud,
    FaMobile, FaCode, FaServer, FaShieldAlt,
    FaPython, FaDocker, FaGraduationCap, FaQuoteLeft,
    FaUserTie, FaHtml5, FaCss3Alt, FaRobot, FaChalkboardTeacher,
    FaDesktop, FaLaptopCode, FaUniversity, FaSchool
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
    SiTypescript, SiTailwindcss, SiKubernetes,
    SiMongodb, SiPostgresql, SiPhp, SiCsharp,
    SiJavascript, SiTensorflow, SiPytorch, SiOpenai
} from "react-icons/si";
import Image from "next/image";
import MVITLogo from "@/public/mvutflame.png";

type Service = {
    title: string;
    description: string;
    features: string[];
    icon: React.ComponentType<{ className?: string }>;
    category: 'development' | 'ai' | 'education' | 'enterprise';
};

type Technology = {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    category: 'frontend' | 'backend' | 'ai-ml' | 'devops' | 'database' | 'languages';
};

type Testimonial = {
    quote: string;
    name: string;
    position: string;
    company: string;
};

export default function ServicesPage() {
    const [isMounted, setIsMounted] = useState(false);
    const [activeCategory, setActiveCategory] = useState<'all' | 'development' | 'ai' | 'education' | 'enterprise'>('all');

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-900 py-12" />
        );
    }

    const filteredServices = activeCategory === 'all'
        ? services
        : services.filter(service => service.category === activeCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-900 py-12 text-white relative overflow-hidden">
            {/* Background Elements */}
            <BackgroundCircles />

            <div className="container mx-auto px-4 relative z-10">
                {/* Hero Section */}
                <HeroSection />

                {/* Services Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {[
                        { id: 'all', label: 'All Services' },
                        { id: 'development', label: 'Development' },
                        { id: 'ai', label: 'AI Solutions' },
                        { id: 'education', label: 'Education' },
                        { id: 'enterprise', label: 'Enterprise' }
                    ].map(({id, label}) => (
                        <motion.button
                            key={id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(id as any)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                activeCategory === id
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                                    : 'bg-black bg-opacity-40 text-blue-300 border border-blue-800'
                            }`}
                        >
                            {label}
                        </motion.button>
                    ))}
                </div>

                {/* Services Section */}
                <ServicesGrid services={filteredServices} />

                {/* Special AI Section */}
                <AISpecialSection />

                {/* Technology Stack */}
                <TechnologySection />

                {/* Education Section */}
                <EducationSection />

                {/* Testimonials */}
                <TestimonialSection />

                {/* CTA */}
                <CallToAction />
            </div>
        </div>
    );
}

const BackgroundCircles = () => (
    <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full bg-blue-800 opacity-10"
                initial={{
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    width: `${Math.random() * 300 + 100}px`,
                    height: `${Math.random() * 300 + 100}px`,
                }}
                animate={{
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    transition: {
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                }}
            />
        ))}
    </div>
);

const HeroSection = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
    >
        <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 mx-auto mb-6 relative"
        >
            <Image
                src={MVITLogo}
                alt="MVIT Logo"
                fill
                className="object-contain"
                priority
            />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Empowering Through Technology
        </h1>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Comprehensive digital solutions, AI innovation, and technology education to strengthen and uplift communities
        </p>
    </motion.div>
);

const ServicesGrid = ({ services }: { services: Service[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service, i) => (
            <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-black bg-opacity-40 backdrop-blur-sm rounded-xl p-6 border border-blue-800 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
                <div className="text-blue-400 text-3xl mb-4">
                    <service.icon />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-blue-200 text-sm mb-4">{service.description}</p>
                <ul className="text-sm text-blue-300 space-y-2">
                    {service.features.map((feature, j) => (
                        <li key={j} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </motion.div>
        ))}
    </div>
);

const AISpecialSection = () => (
    <div className="mb-16 bg-gradient-to-r from-blue-900/50 to-cyan-900/30 rounded-xl p-8 border border-cyan-500">
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 text-center md:text-right">
                <FaRobot className="text-6xl text-cyan-300 mx-auto md:mx-0" />
                <h2 className="text-2xl font-bold mt-4 text-cyan-200">AI Agents Development</h2>
                <p className="text-blue-200 mt-2">State-of-the-art autonomous systems</p>
            </div>
            <div className="md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black/30 p-4 rounded-lg border border-cyan-800">
                        <h3 className="font-bold text-cyan-300 mb-2">Conversational AI</h3>
                        <p className="text-blue-200 text-sm">Advanced chatbots and virtual assistants with natural language understanding</p>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg border border-cyan-800">
                        <h3 className="font-bold text-cyan-300 mb-2">Predictive Agents</h3>
                        <p className="text-blue-200 text-sm">AI systems that anticipate needs and automate decision-making</p>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg border border-cyan-800">
                        <h3 className="font-bold text-cyan-300 mb-2">Computer Vision</h3>
                        <p className="text-blue-200 text-sm">Image and video analysis for automation and insights</p>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg border border-cyan-800">
                        <h3 className="font-bold text-cyan-300 mb-2">Autonomous Systems</h3>
                        <p className="text-blue-200 text-sm">Self-learning agents that optimize processes continuously</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const TechnologySection = () => {
    const techCategories = [
        { id: 'languages', name: 'Languages', icon: FaCode },
        { id: 'frontend', name: 'Frontend', icon: FaReact },
        { id: 'backend', name: 'Backend', icon: FaServer },
        { id: 'ai-ml', name: 'AI/ML', icon: FaRobot },
        { id: 'database', name: 'Databases', icon: FaDatabase },
        { id: 'devops', name: 'DevOps', icon: FaDocker }
    ];

    return (
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-400">
                Our Technology Stack
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {techCategories.map(category => (
                    <div key={category.id} className="bg-black/20 rounded-lg border border-blue-800 p-4">
                        <div className="flex items-center mb-3">
                            <category.icon className="text-blue-400 mr-2" />
                            <h3 className="font-semibold text-blue-300">{category.name}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {technologies
                                .filter(tech => tech.category === category.id)
                                .map((tech, i) => (
                                    <motion.div
                                        key={tech.name}
                                        whileHover={{ scale: 1.05 }}
                                        className="text-xs bg-blue-900/30 text-blue-200 px-2 py-1 rounded flex items-center"
                                    >
                                        <tech.icon className="mr-1" />
                                        {tech.name}
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const EducationSection = () => (
    <div className="mb-16 bg-black/30 rounded-xl p-8 border border-blue-700">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-400">
            Education & Training Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
                <FaSchool className="text-3xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">School Programs</h3>
                <p className="text-blue-200 mb-4">Introduction to programming and computational thinking for students</p>
                <ul className="text-sm text-blue-300 space-y-2">
                    <li>• Scratch programming</li>
                    <li>• Web development basics</li>
                    <li>• Robotics foundations</li>
                </ul>
            </div>
            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
                <FaUniversity className="text-3xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">University Curriculum</h3>
                <p className="text-blue-200 mb-4">Advanced software engineering and AI courses</p>
                <ul className="text-sm text-blue-300 space-y-2">
                    <li>• Full-stack development</li>
                    <li>• Machine learning</li>
                    <li>• Cloud computing</li>
                </ul>
            </div>
            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
                <FaChalkboardTeacher className="text-3xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Professional Training</h3>
                <p className="text-blue-200 mb-4">Industry-relevant skills development</p>
                <ul className="text-sm text-blue-300 space-y-2">
                    <li>• AI/ML certification</li>
                    <li>• DevOps engineering</li>
                    <li>• Cybersecurity training</li>
                </ul>
            </div>
        </div>
    </div>
);

const TestimonialSection = () => (
    <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-400">
            Client & Student Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-black bg-opacity-40 rounded-xl p-6 border border-blue-800"
                >
                    <div className="flex items-start mb-4">
                        <FaQuoteLeft className="text-blue-500 mr-3 mt-1" />
                        <p className="text-blue-200 italic">&quot;{testimonial.quote}&quot;</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center mr-3">
                            <FaUserTie className="text-blue-400" />
                        </div>
                        <div>
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-blue-300">{testimonial.position}</p>
                            <p className="text-xs text-blue-400">{testimonial.company}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const CallToAction = () => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center bg-black bg-opacity-40 rounded-xl p-8 border border-blue-800 max-w-4xl mx-auto"
    >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business or Institution?</h3>
        <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Whether you need custom software, AI solutions, or technology training programs, our team is ready to help.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-lg font-medium"
            >
                Contact Our Team
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-900/20 transition-colors"
            >
                Explore Training Programs
            </motion.button>
        </div>
    </motion.div>
);

const services: Service[] = [
    // Development Services
    {
        title: "Custom Web Development",
        description: "Tailored web applications built for performance and scalability",
        icon: FaReact,
        features: [
            "React/Next.js frontends",
            "TypeScript development",
            "Responsive design",
            "Progressive Web Apps",
            "SEO optimization"
        ],
        category: 'development'
    },
    {
        title: "Mobile App Development",
        description: "Cross-platform mobile solutions for iOS and Android",
        icon: FaMobile,
        features: [
            "React Native development",
            "Native iOS/Android apps",
            "Offline functionality",
            "Push notifications",
            "App store deployment"
        ],
        category: 'development'
    },
    {
        title: "Desktop Applications",
        description: "Native desktop software for Windows, macOS, and Linux",
        icon: FaDesktop,
        features: [
            "Electron-based solutions",
            "Native performance",
            "System integration",
            "Automatic updates",
            "Cross-platform compatibility"
        ],
        category: 'development'
    },
    // AI Services
    {
        title: "AI Agents Development",
        description: "Autonomous AI systems for business automation",
        icon: FaRobot,
        features: [
            "Conversational AI chatbots",
            "Predictive analytics agents",
            "Computer vision systems",
            "Autonomous decision-making",
            "Continuous learning"
        ],
        category: 'ai'
    },
    {
        title: "Machine Learning Solutions",
        description: "Custom ML models for your specific business needs",
        icon: FaLaptopCode,
        features: [
            "Predictive modeling",
            "Natural language processing",
            "Anomaly detection",
            "Recommendation systems",
            "Model deployment"
        ],
        category: 'ai'
    },
    // Education Services
    {
        title: "School Coding Programs",
        description: "Technology education for K-12 students",
        icon: FaSchool,
        features: [
            "Intro to programming",
            "Game development",
            "Web design basics",
            "Robotics foundations",
            "STEM curriculum"
        ],
        category: 'education'
    },
    {
        title: "University Tech Courses",
        description: "Advanced curriculum for higher education",
        icon: FaUniversity,
        features: [
            "Software engineering",
            "Data science",
            "Cloud computing",
            "AI/ML fundamentals",
            "Capstone projects"
        ],
        category: 'education'
    },
    // Enterprise Services
    {
        title: "Enterprise Software",
        description: "Custom solutions for large organizations",
        icon: FaServer,
        features: [
            "Scalable architecture",
            "Microservices",
            "Legacy system modernization",
            "High availability",
            "Enterprise security"
        ],
        category: 'enterprise'
    },
    {
        title: "DevOps & Cloud",
        description: "Infrastructure and deployment solutions",
        icon: FaCloud,
        features: [
            "CI/CD pipelines",
            "Container orchestration",
            "Infrastructure as Code",
            "Cloud migration",
            "Monitoring & logging"
        ],
        category: 'enterprise'
    }
];

const technologies: Technology[] = [
    // Languages
    { name: "Python", icon: FaPython, category: 'languages' },
    { name: "JavaScript", icon: SiJavascript, category: 'languages' },
    { name: "TypeScript", icon: SiTypescript, category: 'languages' },
    { name: "PHP", icon: SiPhp, category: 'languages' },
    { name: "C#", icon: SiCsharp, category: 'languages' },

    // Frontend
    { name: "React", icon: FaReact, category: 'frontend' },
    { name: "Next.js", icon: RiNextjsFill, category: 'frontend' },
    { name: "HTML5", icon: FaHtml5, category: 'frontend' },
    { name: "CSS3", icon: FaCss3Alt, category: 'frontend' },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: 'frontend' },

    // Backend
    { name: "Node.js", icon: FaNodeJs, category: 'backend' },
    { name: "Django", icon: FaPython, category: 'backend' },
    { name: "Flask", icon: FaPython, category: 'backend' },
    { name: ".NET", icon: SiCsharp, category: 'backend' },
    { name: "Laravel", icon: SiPhp, category: 'backend' },

    // AI/ML
    { name: "TensorFlow", icon: SiTensorflow, category: 'ai-ml' },
    { name: "PyTorch", icon: SiPytorch, category: 'ai-ml' },
    { name: "OpenAI", icon: SiOpenai, category: 'ai-ml' },
    { name: "Computer Vision", icon: FaRobot, category: 'ai-ml' },
    { name: "NLP", icon: FaRobot, category: 'ai-ml' },

    // Database
    { name: "MongoDB", icon: SiMongodb, category: 'database' },
    { name: "PostgreSQL", icon: SiPostgresql, category: 'database' },
    { name: "MySQL", icon: FaDatabase, category: 'database' },
    { name: "Redis", icon: FaDatabase, category: 'database' },

    // DevOps
    { name: "Docker", icon: FaDocker, category: 'devops' },
    { name: "Kubernetes", icon: SiKubernetes, category: 'devops' },
    { name: "AWS", icon: FaCloud, category: 'devops' },
    { name: "Azure", icon: FaCloud, category: 'devops' },
    { name: "CI/CD", icon: FaCode, category: 'devops' }
];

const testimonials: Testimonial[] = [
    {
        quote: "The AI agent developed by MVIT transformed our customer service operations, handling 80% of inquiries with 95% satisfaction rates.",
        name: "Sarah Johnson",
        position: "Director of Operations",
        company: "Global Retail Inc."
    },
    {
        quote: "Our students gained real-world skills through MVIT's training program, with many securing tech jobs immediately after graduation.",
        name: "Dr. Michael Chen",
        position: "Computer Science Dean",
        company: "State University"
    },
    {
        quote: "The custom ERP system MVIT built streamlined our operations across 12 countries, reducing costs by 30% in the first year.",
        name: "David Wilson",
        position: "CIO",
        company: "Manufacturing Corp"
    }
];