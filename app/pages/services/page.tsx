'use client';
import React from "react";
import { motion } from "framer-motion";
import {
    FaBootstrap,
    FaCss3Alt,
    FaDocker, FaHandshake,
    FaHtml5, FaLightbulb,
    FaNodeJs,
    FaPython,
    FaReact,
    FaSymfony, FaUserTie,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
    IoLogoFigma,
    IoLogoJavascript,
    IoLogoLaravel,
    IoLogoVercel,
} from "react-icons/io5";
import {
    SiAdobephotoshop,
    SiCsharp,
    SiGooglecloud,
    SiKubernetes,
    SiMysql,
    SiPhp,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { MdAnalytics } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-16">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                {/* Title Section */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 flex items-center justify-center gap-2"
                    >
                        <MdHomeRepairService size={40} />
                        Our Services
                    </motion.h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mt-4 leading-relaxed">
                        At MVIT, we provide cutting-edge solutions designed to empower businesses, drive innovation, and foster growth through technology and expertise.
                    </p>
                </div>

                {/* Service Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex flex-col items-start p-6 rounded-2xl shadow-lg transition-all`}
                            style={{
                                background: service.background,
                            }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                {React.createElement(service.icon, { size: 30 })}
                                <h2 className={`text-xl font-bold ${service.textColor}`}>
                                    {service.title}
                                </h2>
                            </div>
                            <p className="text-sm text-gray-700">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Technology Icons Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center text-gray-200 text-center py-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 pb-8"
                    >
                        Technologies We Use
                    </motion.h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                        Our team leverages a wide range of modern technologies to deliver innovative solutions tailored to your needs.
                    </p>
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center justify-center"
                            >
                                {React.createElement(tech.icon, {
                                    size: 40,
                                    className:
                                        "hover:text-white transition-all ease-in-out",
                                })}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 pb-8"
                    >
                        Why Choose Us?
                    </motion.h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                        At MVIT, we combine expertise, innovation, and a commitment to excellence to deliver unparalleled value to our clients and partners.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reasonsToChoose.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center"
                            >
                                {React.createElement(reason.icon, {
                                    size: 40,
                                    className: "text-teal-400 mx-auto mb-4",
                                })}
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-200">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 pb-8"
                    >
                        What Our Clients Say
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center"
                            >
                                <p className="text-gray-200 italic">{testimonial.quote}</p>
                                <p className="text-teal-400 font-bold mt-4">{testimonial.name}</p>
                                <p className="text-gray-300">{testimonial.position}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

// Service Data with Icons and Backgrounds
const services = [
    {
        title: "Solutions",
        description:
            "MVIT Solutions delivers expert IT services, driving business growth through customized solutions, digital transformation, data analytics, cybersecurity, cloud computing, AI, and machine learning.",
        icon: FaReact,
        textColor: "text-amber-600",
        background: "linear-gradient(to bottom right, #fff3e0, #ffe0b2)",
    },
    {
        title: "Research",
        description:
            "MVIT Research drives innovation and advancement through cutting-edge solutions, leveraging applied research, industry collaborations, interdisciplinary initiatives, emerging technology exploration, and data-driven insights.",
        icon: FaNodeJs,
        textColor: "text-stone-600",
        background: "linear-gradient(to bottom right, #f5f5f5, #d7ccc8)",
    },
    {
        title: "Career",
        description:
            "MVIT Career fuels professional growth, empowering students and professionals to achieve their goals through comprehensive services, including career counseling, internship and job placement support.",
        icon: FaBootstrap,
        textColor: "text-green-600",
        background: "linear-gradient(to bottom right, #e8f5e9, #c8e6c9)",
    },
    {
        title: "Internship",
        description:
            "MVIT Internships provide hands-on learning, industry collaborations, mentorship, project-based work, and career advancement support, bridging the gap between academics and professional experience.",
        icon: FaPython,
        textColor: "text-blue-600",
        background: "linear-gradient(to bottom right, #e3f2fd, #bbdefb)",
    },
    {
        title: "Education",
        description:
            "MVIT Education fosters academic excellence through innovative teaching methods, cutting-edge curriculum, and hands-on learning experiences.",
        icon: FaHtml5,
        textColor: "text-stone-700",
        background: "linear-gradient(to bottom right, #fafafa, #e0e0e0)",
    },
    {
        title: "Advisory",
        description:
            "MVIT Advisory offers expert guidance on technology, digital transformation, market trends, operational optimization, and growth planning.",
        icon: FaSymfony,
        textColor: "text-red-700",
        background: "linear-gradient(to bottom right, #ffebee, #ffcdd2)",
    },
    {
        title: "Entrepreneurship",
        description:
            "MVIT Entrepreneurship propels innovative ideas into successful businesses through comprehensive support, including incubation and acceleration programs.",
        icon: FaDocker,
        textColor: "text-blue-700",
        background: "linear-gradient(to bottom right, #e1f5fe, #b3e5fc)",
    },
    {
        title: "Training and Development",
        description:
            "MVIT Training and Development offers expert-led programs for professional growth, including certifications, workshops, leadership development, technical skills training, and soft skills enhancement.",
        icon: FaCss3Alt,
        textColor: "text-amber-600",
        background: "linear-gradient(to bottom right, #fff8e1, #ffecb3)",
    },
];

// Technology Icons Data
const technologies = [
    { icon: FaReact },
    { icon: FaNodeJs },
    { icon: RiNextjsFill },
    { icon: FaPython },
    { icon: FaBootstrap },
    { icon: RiTailwindCssFill },
    { icon: FaHtml5 },
    { icon: FaCss3Alt },
    { icon: IoLogoJavascript },
    { icon: SiPhp },
    { icon: IoLogoLaravel },
    { icon: FaSymfony },
    { icon: TbBrandCpp },
    { icon: IoLogoVercel },
    { icon: BiLogoPostgresql },
    { icon: SiMysql },
    { icon: DiMongodb },
    { icon: SiAdobephotoshop },
    { icon: IoLogoFigma },
    { icon: SiCsharp },
    { icon: SiGooglecloud },
    { icon: FaDocker },
    { icon: SiKubernetes },
    { icon: MdAnalytics },
];

// Reasons to Choose Us Data
const reasonsToChoose = [
    {
        title: "Expert Team",
        description:
            "Our team consists of highly skilled professionals with years of experience in their respective fields.",
        icon: FaUserTie,
    },
    {
        title: "Innovative Solutions",
        description:
            "We leverage the latest technologies and methodologies to deliver cutting-edge solutions.",
        icon: FaLightbulb,
    },
    {
        title: "Customer-Centric Approach",
        description:
            "We prioritize our clients' needs and tailor our services to meet their unique requirements.",
        icon: FaHandshake,
    },
];

// Testimonials Data
const testimonials = [
    {
        quote:
            "MVIT's expertise and professionalism exceeded our expectations. Their solutions were exactly what we needed to scale our business.",
        name: "John Doe",
        position: "CEO, Tech Innovators Inc.",
    },
    {
        quote:
            "The team at MVIT is incredible. They provided us with innovative solutions that transformed our operations.",
        name: "Jane Smith",
        position: "CTO, FutureTech Solutions",
    },
    {
        quote:
            "Working with MVIT was a seamless experience. Their dedication to quality and customer satisfaction is unmatched.",
        name: "Alice Johnson",
        position: "Product Manager, Global Enterprises",
    },
];