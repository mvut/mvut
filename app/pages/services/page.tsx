'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    FaBootstrap, FaCss3Alt, FaDocker, FaHandshake, FaHtml5,
    FaLightbulb, FaNodeJs, FaPython, FaQuoteLeft, FaReact,
    FaSymfony, FaUserTie, FaMobile, FaServer, FaChartLine,
    FaShieldAlt, FaDatabase, FaCloud, FaGraduationCap, FaLaptopCode, FaStar
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoLaravel, IoLogoVercel } from "react-icons/io5";
import { SiAdobephotoshop, SiCsharp, SiGooglecloud, SiKubernetes, SiMysql, SiPhp } from "react-icons/si";
import { TbBrandCpp, TbBrandReactNative } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { MdAnalytics, MdHomeRepairService, MdDesignServices, MdSchool } from "react-icons/md";
import Image from "next/image";
import MVITLogo from "@/public/mvutflame.png";

export default function ServicesPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Generate consistent random values on client side only
    const circleData = isClient ? Array(20).fill(null).map(() => ({
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        initialWidth: Math.random() * 300 + 100,
        initialHeight: Math.random() * 300 + 100,
        animateX: Math.random() * 100,
        animateY: Math.random() * 100,
        duration: Math.random() * 10 + 10
    })) : [];

    if (!isClient) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900 py-16 text-white relative overflow-hidden" />
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900 py-16 text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {circleData.map((data, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-red-800 opacity-10"
                        initial={{
                            x: data.initialX,
                            y: data.initialY,
                            width: data.initialWidth,
                            height: data.initialHeight,
                        }}
                        animate={{
                            x: data.animateX,
                            y: data.animateY,
                            transition: {
                                duration: data.duration,
                                repeat: Infinity,
                                repeatType: "reverse" as const
                            }
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                {/* Hero Section - Redesigned */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16 relative"
                >
                    {/* Logo Container with Glow Effect */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-28 h-28 mb-6 group"
                    >
                        <div className="absolute inset-0 bg-red-600 rounded-full opacity-20 blur-md group-hover:opacity-30 transition-all duration-300 -z-10"></div>
                        <Image
                            src={MVITLogo}
                            alt="MVIT Logo"
                            fill
                            className="object-contain drop-shadow-lg"
                            priority
                        />
                    </motion.div>

                    {/* Title with Animated Gradient */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <MdHomeRepairService
                                size={36}
                                className="text-red-400 animate-pulse"
                            />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-red-500 leading-tight">
                                Our Services
                            </h1>
                        </div>

                        {/* Decorative Elements */}
                        <div className="flex items-center justify-center gap-2 my-4">
                            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500"></div>
                            <FaStar className="text-amber-400 text-xs" />
                            <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-transparent"></div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            Empowering your digital transformation with cutting-edge solutions and expert development services
                        </motion.p>
                    </motion.div>

                    {/* Floating Particles */}
                    <div className="absolute -top-10 left-1/4 w-2 h-2 rounded-full bg-amber-400 opacity-70 animate-float"></div>
                    <div className="absolute top-20 right-1/3 w-3 h-3 rounded-full bg-red-500 opacity-50 animate-float-delay"></div>
                </motion.div>

                {/* Core Services Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-red-400 mb-8 text-center">
                        Core Development Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreServices.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-red-900 hover:border-red-600 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-red-900 bg-opacity-30">
                                        {React.createElement(service.icon, {
                                            size: 24,
                                            className: "text-red-400"
                                        })}
                                    </div>
                                    <h2 className="text-xl font-bold text-white">
                                        {service.title}
                                    </h2>
                                </div>
                                <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                                <ul className="text-gray-400 text-xs space-y-1">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-red-400 mr-2">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Internship Program Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-20 bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-amber-900"
                >
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-lg bg-amber-900 bg-opacity-30">
                                    <FaGraduationCap size={24} className="text-amber-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-amber-400">
                                    Internship & Training Program
                                </h2>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Our intensive hands-on training bridges the gap between academic learning and industry requirements.
                            </p>
                            <div className="bg-amber-900 bg-opacity-20 rounded-lg p-4 border border-amber-800">
                                <h3 className="font-bold text-amber-300 mb-2">Program Highlights:</h3>
                                <ul className="text-gray-300 text-sm space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-amber-400 mr-2">•</span>
                                        Real-world project experience under expert mentorship
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-400 mr-2">•</span>
                                        Comprehensive curriculum covering modern tech stacks
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-400 mr-2">•</span>
                                        Career guidance and interview preparation
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-400 mr-2">•</span>
                                        Certificate upon successful completion
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {internshipTracks.map((track, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-black bg-opacity-70 rounded-lg p-5 border border-gray-800"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-md bg-amber-900 bg-opacity-30">
                                                <FaLaptopCode className="text-amber-400" size={20} />
                                            </div>
                                            <h3 className="font-bold text-white">{track.title}</h3>
                                        </div>
                                        <div className="text-gray-300 text-sm mb-3">
                                            <p>{track.description}</p>
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            <p className="font-semibold text-amber-400">Skills Covered:</p>
                                            <p>{track.skills.join(', ')}</p>
                                        </div>
                                        <div className="mt-3 text-xs text-gray-400">
                                            <p className="font-semibold text-amber-400">Duration:</p>
                                            <p>{track.duration}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Technology Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-red-400 mb-8 text-center">
                        Our Technology Stack
                    </h2>
                    <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
                        We leverage the most advanced and reliable technologies to deliver exceptional solutions
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center p-4 bg-black bg-opacity-30 rounded-lg border border-red-900 hover:border-red-600 transition-all"
                            >
                                <div className="mb-2">
                                    {React.createElement(tech.icon, {
                                        size: 32,
                                        className: "text-gray-300 hover:text-white transition-colors"
                                    })}
                                </div>
                                <span className="text-xs text-gray-300 text-center">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Client Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-red-400 mb-8 text-center">
                        Client Success Stories
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-red-900 hover:border-red-600 transition-all"
                            >
                                <div className="flex items-start mb-4">
                                    <div className="text-red-400 mr-3">
                                        <FaQuoteLeft size={20} />
                                    </div>
                                    <p className="text-gray-300 italic flex-1">
                                        {testimonial.quote}
                                    </p>
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="w-10 h-10 rounded-full bg-red-900 bg-opacity-30 flex items-center justify-center mr-3">
                                        <FaUserTie className="text-red-400" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{testimonial.name}</p>
                                        <p className="text-sm text-gray-400">{testimonial.position}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

// Service Data
const coreServices = [
    {
        title: "Web Development",
        description: "Custom web applications built with modern frameworks and technologies.",
        icon: FaReact,
        features: [
            "Responsive design",
            "Single Page Applications (SPAs)",
            "Progressive Web Apps (PWAs)",
            "CMS integration",
            "E-commerce solutions"
        ]
    },
    {
        title: "Mobile Development",
        description: "Cross-platform mobile apps for iOS and Android with native performance.",
        icon: TbBrandReactNative,
        features: [
            "React Native development",
            "Native iOS/Android apps",
            "Offline capabilities",
            "Push notifications",
            "App store deployment"
        ]
    },
    {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and serverless architectures.",
        icon: FaCloud,
        features: [
            "AWS/GCP/Azure services",
            "Serverless architecture",
            "Microservices",
            "Containerization",
            "CI/CD pipelines"
        ]
    },
    {
        title: "UI/UX Design",
        description: "Beautiful, intuitive interfaces that enhance user experience.",
        icon: MdDesignServices,
        features: [
            "User research",
            "Wireframing & prototyping",
            "Interaction design",
            "Design systems",
            "Usability testing"
        ]
    },
    {
        title: "Data Engineering",
        description: "Powerful data pipelines and analytics platforms.",
        icon: FaDatabase,
        features: [
            "Data warehousing",
            "ETL/ELT pipelines",
            "Big data solutions",
            "Business intelligence",
            "Machine learning pipelines"
        ]
    },
    {
        title: "DevOps Services",
        description: "Streamlined development workflows and infrastructure automation.",
        icon: FaDocker,
        features: [
            "Infrastructure as Code",
            "Container orchestration",
            "Monitoring & logging",
            "Performance optimization",
            "Security hardening"
        ]
    }
];

const internshipTracks = [
    {
        title: "Frontend Development",
        description: "Master modern frontend frameworks and build responsive UIs",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
        duration: "3-6 months"
    },
    {
        title: "Backend Development",
        description: "Learn server-side programming and database management",
        skills: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"],
        duration: "4-6 months"
    },
    {
        title: "Full Stack Development",
        description: "End-to-end application development training",
        skills: ["MERN Stack", "Authentication", "API Design", "Deployment"],
        duration: "6-9 months"
    },
    {
        title: "DevOps Engineering",
        description: "Infrastructure management and deployment pipelines",
        skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
        duration: "4-6 months"
    },
    {
        title: "UI/UX Design",
        description: "User-centered design principles and prototyping",
        skills: ["Figma", "User Research", "Wireframing", "Design Systems"],
        duration: "3-5 months"
    },
    {
        title: "Data Science",
        description: "Data analysis and machine learning fundamentals",
        skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Visualization"],
        duration: "5-7 months"
    }
];

const technologies = [
    { icon: FaReact, name: "React" },
    { icon: RiNextjsFill, name: "Next.js" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: FaPython, name: "Python" },
    { icon: TbBrandCpp, name: "C++" },
    { icon: SiCsharp, name: "C#" },
    { icon: SiPhp, name: "PHP" },
    { icon: IoLogoLaravel, name: "Laravel" },
    { icon: FaSymfony, name: "Symfony" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: FaBootstrap, name: "Bootstrap" },
    { icon: RiTailwindCssFill, name: "Tailwind" },
    { icon: TbBrandReactNative, name: "React Native" },
    { icon: BiLogoPostgresql, name: "PostgreSQL" },
    { icon: SiMysql, name: "MySQL" },
    { icon: DiMongodb, name: "MongoDB" },
    { icon: FaDocker, name: "Docker" },
    { icon: SiKubernetes, name: "Kubernetes" },
    { icon: IoLogoVercel, name: "Vercel" },
    { icon: SiGooglecloud, name: "Google Cloud" },
    { icon: MdAnalytics, name: "Analytics" },
    { icon: SiAdobephotoshop, name: "Photoshop" }
];

// Testimonials Data
const testimonials = [
    {
        quote: "MVIT delivered our e-commerce platform ahead of schedule with exceptional quality. Their team was professional and communicative throughout.",
        name: "Sarah Johnson",
        position: "CTO, TechNova Solutions"
    },
    {
        quote: "The mobile app they developed for us has 4.9 stars on both app stores with over 50k downloads in the first month.",
        name: "Michael Chen",
        position: "Product Manager, RetailApp"
    },
    {
        quote: "Their internship program produced developers who were immediately productive. We hired 3 of their graduates.",
        name: "David Wilson",
        position: "Engineering Lead, FinTech Corp"
    }
];