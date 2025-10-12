'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    FaChalkboardTeacher,
    FaGraduationCap,
    FaUsers,
    FaAward,
    FaBook,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaMapMarkerAlt,
    FaGlobe,
    FaCode,
    FaRobot,
    FaBrain,
    FaChartLine,
    FaCloud,
    FaUniversity,
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
    FaProductHunt,
    FaTiktok
} from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import Image from "next/image";
import Link from "next/link";
import {GiStairsGoal} from "react-icons/gi";

interface Publication {
    title: string;
    conference: string;
    year: number;
    link?: string;
}

interface Project {
    title: string;
    description: string;
    technologies: string[];
    status: 'active' | 'completed' | 'upcoming';
}

interface TeachingActivity {
    course: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    students: number;
    rating: number;
}

interface Education {
    degree: string;
    institution: string;
    year: string;
    focus: string;
}

interface Expertise {
    name: string;
    icon: React.ReactNode;
    level: number;
}

interface Achievement {
    count: string;
    label: string;
    icon: React.ReactNode;
}

interface Contact {
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
    whatsapp: string;
    scholar: string;
    youtube?: string;
    tiktok?: string;
}

interface Instructor {
    name: string;
    title: string;
    tagline: string;
    avatar: string;
    bio: string;
    contact: Contact;
    expertise: Expertise[];
    achievements: Achievement[];
    currentRoles: string[];
    publications: Publication[];
    currentProjects: Project[];
    teachingActivities: TeachingActivity[];
    education: Education[];
}

const InstructorProfile = () => {
    const instructor: Instructor = {
        name: "Abubakar Siddique",
        title: "President, Co-Founder and Principal Instructor",
        tagline: "Solo Architect of AI-Empowered Learning Revolutions",
        avatar: "/faculty/abs.PNG",
        bio: "To democratize quality education through technological innovation, empowering learners worldwide with " +
            "cutting-edge AI and software development skills. I am committed to bridging the gap between academic theory and real-world application, " +
            "fostering a generation of ethical technologists who can solve complex global challenges. By creating accessible, adaptive learning experiences and " +
            "mentoring future leaders, I aim to transform how education is delivered and experienced in the digital age.",

        contact: {
            email: "dr.sagher@gmail.com",
            phone: "+923017362696",
            location: "Pakpattan, Pakistan",
            website: "https://mvitech.org/",
            linkedin: "https://linkedin.com/in/drsagher",
            twitter: "https://twitter.com/drsagher",
            facebook: "https://facebook.com/drsagher",
            instagram: "https://instagram.com/drsagher",
            whatsapp: "https://wa.me/923017362696",
            scholar: "https://scholar.google.com/citations?user=drsagher",
            youtube: "https://youtube.com/@drsagher",
            tiktok: "https://tiktok.com/@dr.sagher"
        },

        expertise: [
            { name: "Artificial Intelligence", icon: <FaRobot className="text-purple-500" />, level: 95 },
            { name: "Machine Learning", icon: <FaBrain className="text-blue-500" />, level: 90 },
            { name: "Software Engineering", icon: <FaCode className="text-green-500" />, level: 92 },
            { name: "Data Science", icon: <FaChartLine className="text-orange-500" />, level: 88 },
            { name: "Cloud Computing", icon: <FaCloud className="text-cyan-500" />, level: 85 },
            { name: "STEM Education", icon: <FaGraduationCap className="text-red-500" />, level: 95 }
        ],

        achievements: [
            { count: "15 +", label: "Years Experience", icon: <FaAward className="text-yellow-500" /> },
            { count: "10 K+", label: "Students Taught", icon: <FaUsers className="text-blue-500" /> },
            { count: "100 +", label: "Projects", icon: <FaProductHunt  className="text-green-500" /> },
            { count: "50 +", label: "Trainings", icon: <FaBook className="text-purple-500" /> }
        ],

        currentRoles: [
            "Principal AI Instructor & Curriculum Developer",
            "Research Lead - AI Education Initiatives",
            "Academic Program Coordinator",
            "Student Research Mentor",
            "Industry-Academia Bridge Coordinator"
        ],

        publications: [
            {
                title: "Adaptive Learning Systems for STEM Education Using AI",
                conference: "International Conference on Educational Technology",
                year: 2024,
                link: "#"
            },
            {
                title: "Low-Code AI Platforms for Beginner Programmers",
                conference: "ACM SIGCSE Technical Symposium",
                year: 2023,
                link: "#"
            },
            {
                title: "Integrating AI Literacy in K-12 Curriculum",
                conference: "IEEE Frontiers in Education Conference",
                year: 2023,
                link: "#"
            }
        ],

        currentProjects: [
            {
                title: "AI-Powered Learning Assistant",
                description: "Developing an intelligent tutoring system that adapts to individual student learning patterns",
                technologies: ["Python", "TensorFlow", "React", "FastAPI"],
                status: "active"
            },
            {
                title: "STEM Education Platform",
                description: "Creating an interactive platform for teaching programming and computational thinking",
                technologies: ["JavaScript", "Node.js", "MongoDB", "AWS"],
                status: "active"
            },
            {
                title: "Research Paper Analytics Tool",
                description: "AI tool for analyzing research trends and suggesting collaboration opportunities",
                technologies: ["Python", "NLP", "Data Visualization"],
                status: "upcoming"
            }
        ],

        teachingActivities: [
            {
                course: "Kindergarten (K.G.) STEM Entrepreneurs",
                level: "Beginner",
                students: 20,
                rating: 4.9
            },
            {
                course: "Full-Stack AI Engineer",
                level: "Intermediate",
                students: 20,
                rating: 4.8
            },
            {
                course: "Mansha Certified Autonomous Systems and Cloud Engineer (MCASCE)",
                level: "Advanced",
                students: 20,
                rating: 4.9
            },
            {
                course: "Office Management, AI and Prompt Engineering",
                level: "Intermediate",
                students: 20,
                rating: 4.7
            }
        ],

        education: [
            {
                degree: "MS in Computer Science",
                institution: "Virtual University",
                year: "2020",
                focus: "Computer Networks"
            },
            {
                degree: "BS in Computer Science",
                institution: "Virtual University",
                year: "2012",
                focus: "Computer Programming"
            },
            {
                degree: "Bachelor in Educational Leadership",
                institution: "AIOU University",
                year: "2015",
                focus: "Research, Curriculum Development"
            }
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const fallback = target.nextSibling as HTMLElement;
        if (fallback) fallback.style.display = 'flex';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                            {/* Avatar with Enhanced Design */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 1, delay: 0.2, type: "spring" }}
                                className="flex-shrink-0 relative"
                            >
                                {/* Outer Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-75 animate-pulse"></div>

                                {/* Main Avatar Container */}
                                <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src={instructor.avatar}
                                        alt={instructor.name}
                                        width={256}
                                        height={256}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={handleImageError}
                                        priority
                                    />
                                    {/* Fallback */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center"
                                        style={{ display: 'none' }}
                                    >
                                        <FaChalkboardTeacher className="text-white text-8xl" />
                                    </div>
                                </div>

                                {/* Status Indicator */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1, type: "spring" }}
                                    className="absolute -bottom-2 -right-2 bg-green-500 border-4 border-white rounded-full p-2 shadow-lg"
                                >
                                    <div className="w-4 h-4 bg-green-300 rounded-full animate-ping"></div>
                                </motion.div>
                            </motion.div>

                            {/* Basic Info */}
                            <div className="flex-1 text-center lg:text-left space-y-6">
                                {/* Name with Gradient Text */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
                                >
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              {instructor.name.split(' ')[0]}
            </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              {instructor.name.split(' ')[1]}
            </span>
                                </motion.h1>

                                {/* Title */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="text-xl md:text-2xl text-blue-200 font-light max-w-3xl leading-relaxed"
                                >
                                    {instructor.title}
                                </motion.p>

                                {/* Tagline */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="text-lg md:text-xl text-purple-200/90 font-medium max-w-3xl leading-relaxed"
                                >
                                    {instructor.tagline}
                                </motion.p>

                                {/* Stats Bar */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                    className="flex flex-wrap gap-6 py-6 justify-center lg:justify-start"
                                >
                                    {instructor.achievements.slice(0, 3).map((achievement, index) => (
                                        <div key={index} className="text-center group">
                                            <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                                {achievement.count}
                                            </div>
                                            <div className="text-sm text-blue-200/80 uppercase tracking-wider">
                                                {achievement.label}
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>

                                {/* Enhanced Social Media Links */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                    className="flex flex-wrap gap-4 justify-center lg:justify-start"
                                >
                                    {[
                                        { icon: FaEnvelope, href: `mailto:${instructor.contact.email}`, label: 'Email', color: 'hover:text-red-400' },
                                        { icon: FaLinkedin, href: instructor.contact.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
                                        { icon: FaTwitter, href: instructor.contact.twitter, label: 'Twitter', color: 'hover:text-sky-400' },
                                        { icon: FaFacebook, href: instructor.contact.facebook, label: 'Facebook', color: 'hover:text-blue-600' },
                                        { icon: FaInstagram, href: instructor.contact.instagram, label: 'Instagram', color: 'hover:text-pink-500' },
                                        { icon: FaWhatsapp, href: instructor.contact.whatsapp, label: 'WhatsApp', color: 'hover:text-green-400' },
                                        { icon: FaYoutube, href: instructor.contact.youtube, label: 'YouTube', color: 'hover:text-red-500' },
                                        { icon: FaTiktok, href: instructor.contact.tiktok, label: 'TikTok', color: 'hover:text-black' },
                                        { icon: SiGooglescholar, href: instructor.contact.scholar, label: 'Scholar', color: 'hover:text-blue-300' }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={`${social.label} Profile`}
                                            className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white border border-white/20 ${social.color} hover:bg-white/20 hover:scale-110 transition-all duration-300 group`}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <social.icon className="text-xl group-hover:scale-110 transition-transform" />
                                        </motion.a>
                                    ))}
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.4 }}
                                    className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-2xl hover:shadow-blue-500/25"
                                    >
                                        <Link href={'/pages/apply'}>Start Learning Today</Link>
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-colors"
                                    >
                                        <Link href={'/pages/study'}>View Programs</Link>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-8 bg-white/80 backdrop-blur-sm shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {instructor.achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group hover:scale-105 transition-transform duration-300"
                            >
                                <div className="flex justify-center mb-2">
                                    {achievement.icon}
                                </div>
                                <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {achievement.count}
                                </div>
                                <div className="text-gray-600 text-sm">{achievement.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        {/* Left Column - Bio & Contact */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Bio Card */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <GiStairsGoal  className="text-blue-500" />
                                    Mission
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    {instructor.bio}
                                </p>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <FaEnvelope className="text-green-500" />
                                    Contact & Social
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <FaEnvelope className="text-gray-400" />
                                        <a href={`mailto:${instructor.contact.email}`} className="hover:text-blue-600 transition-colors">
                                            {instructor.contact.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <FaMapMarkerAlt className="text-gray-400" />
                                        <span>{instructor.contact.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <FaGlobe className="text-gray-400" />
                                        <a href={instructor.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                            Visit Website
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <FaWhatsapp className="text-green-500" />
                                        <a href={instructor.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                                            {instructor.contact.phone}
                                        </a>
                                    </div>
                                </div>

                                {/* Social Media Icons Row */}
                                <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200 flex-wrap">
                                    {[
                                        { icon: FaLinkedin, href: instructor.contact.linkedin, color: "hover:text-blue-600", title: "LinkedIn" },
                                        { icon: FaTwitter, href: instructor.contact.twitter, color: "hover:text-blue-400", title: "Twitter" },
                                        { icon: FaFacebook, href: instructor.contact.facebook, color: "hover:text-blue-800", title: "Facebook" },
                                        { icon: FaInstagram, href: instructor.contact.instagram, color: "hover:text-pink-600", title: "Instagram" },
                                        { icon: FaYoutube, href: instructor.contact.youtube, color: "hover:text-red-600", title: "YouTube" },
                                        { icon: FaTiktok, href: instructor.contact.tiktok, color: "hover:text-black", title: "TikTok" },
                                        { icon: SiGooglescholar, href: instructor.contact.scholar, color: "hover:text-blue-500", title: "Google Scholar" }
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-gray-600 ${social.color} transition-colors text-xl`}
                                            title={social.title}
                                        >
                                            <social.icon />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Current Roles */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <FaUsers className="text-purple-500" />
                                    Current Roles
                                </h2>
                                <ul className="space-y-2">
                                    {instructor.currentRoles.map((role, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-700 group">
                                            <span className="text-blue-500 mt-1 group-hover:scale-110 transition-transform">•</span>
                                            <span className="group-hover:text-blue-600 transition-colors">{role}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Right Column - Details */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Expertise */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <FaBrain className="text-yellow-500" />
                                    Areas of Expertise
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {instructor.expertise.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="space-y-2 group"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    {skill.icon}
                                                    <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                                <span className="text-sm text-gray-600">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 group-hover:from-blue-600 group-hover:to-purple-600"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Teaching Activities */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <FaGraduationCap className="text-green-500" />
                                    Teaching Activities
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {instructor.teachingActivities.map((activity, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow group hover:border-blue-200"
                                        >
                                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                {activity.course}
                                            </h3>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    activity.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                                                        activity.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-red-100 text-red-800'
                                                }`}>
                                                    {activity.level}
                                                </span>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-yellow-500">★</span>
                                                    <span className="text-sm font-medium">{activity.rating}</span>
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {activity.students.toLocaleString()} students
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Current Projects */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <FaCode className="text-orange-500" />
                                    Current Projects
                                </h2>
                                <div className="space-y-4">
                                    {instructor.currentProjects.map((project, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow group hover:border-blue-200"
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    project.status === 'active' ? 'bg-green-100 text-green-800' :
                                                        project.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                                                            'bg-blue-100 text-blue-800'
                                                }`}>
                                                    {project.status}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-blue-100 hover:text-blue-700 transition-colors"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Education */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <FaUniversity className="text-blue-500" />
                                    Education
                                </h2>
                                <div className="space-y-4">
                                    {instructor.education.map((edu, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="border-l-4 border-blue-500 pl-4 py-2 group hover:border-blue-600 transition-colors"
                                        >
                                            <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-gray-700">{edu.institution}</p>
                                            <div className="flex justify-between text-sm text-gray-600">
                                                <span>{edu.year}</span>
                                                <span className="text-blue-600">{edu.focus}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold mb-6">
                            Interested in Collaboration?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Let&apos;s work together on Research, AI Integration, and Educational Transformation
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                <Link href={'/pages/study'}>View Programs</Link>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                            >
                                <Link href={'/pages/apply'}>Get Started with AI</Link>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default InstructorProfile;