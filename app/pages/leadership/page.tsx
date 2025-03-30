'use client';
import React from "react";
import { motion } from "framer-motion";
import {
    FaUserTie,
    FaUsers,
    FaUniversity,
    FaChalkboardTeacher,
    FaChartLine,
    FaQuoteLeft,
    FaGlobe,
    FaLightbulb,
    FaHandshake
} from "react-icons/fa";
import Image from "next/image";
import MVITLogo from "@/public/mvutflame.png";

interface ExecutiveMember {
    name: string;
    position: string;
    bio: string;
}

interface BoardMember {
    role: string;
    position: string;
    responsibilities: string;
}

interface LeadershipPrinciple {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface Testimonial {
    quote: string;
    name: string;
    position: string;
}


interface ExecutiveMember {
    name: string;
    position: string;
    bio: string;
    slug: string; // Add this line
    social?: {
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
}

const executiveTeam: ExecutiveMember[] = [
    {
        name: "Abubakar Siddique",
        position: "Co-Founder & President",
        bio: "A seasoned leader with over 24 years of expertise in computer science and technology, driving innovation and strategic growth as Co-Founder and President.",
        slug: "/faculty/abs.png",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "#"
        }
    },
    {
        name: "Mike Litman",
        position: "Dean of Entrepreneurship",
        bio: "A dynamic leader fostering innovation and entrepreneurship, cultivating the next generation of innovators as Dean of Entrepreneurship.",
        slug: "/faculty/mike2.jpg",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "#"
        }
    },
    {
        name: "Dr. Arshad Iqbal",
        position: "Director Research and Education",
        bio: "An accomplished educator and researcher with 18+ years of experience in data science, shaping the future of education and research as Director of Research and Education.",
        slug: "/faculty/arshadiqbal.jpg",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "#"
        }
    },
    {
        name: "Abid Hussain",
        position: "Dean of AI Engineering",
        bio: "A visionary innovator with 20+ years of experience in education technology and AI, leading advancements in artificial intelligence as Dean of AI Engineering.",
        slug: "/faculty/abid.jpg",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "#"
        }
    },
];

export default function LeadershipPage() {
    // Predefined positions for animated background elements to avoid SSR mismatch
    const backgroundElements = React.useMemo(() =>
            Array.from({ length: 20 }).map((_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                duration: Math.random() * 10 + 10
            }))
        , []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900 py-16 text-white font-sans relative overflow-hidden">
            {/* Animated Background Elements - Client-side only */}
            <div className="absolute inset-0 overflow-hidden">
                {backgroundElements.map((element) => (
                    <motion.div
                        key={element.id}
                        className="absolute rounded-full bg-red-800 opacity-10"
                        initial={{
                            x: `${element.x}%`,
                            y: `${element.y}%`,
                            width: `${element.width}px`,
                            height: `${element.height}px`,
                        }}
                        animate={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            transition: {
                                duration: element.duration,
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
                {/* Leadership Hero Section - Redesigned */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center text-center mb-16 relative py-8"
                >
                    {/* Logo with Animated Ring */}
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-20 h-20 mb-6"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-red-500/30 border-t-red-500 rounded-full"
                        />
                        <Image
                            src={MVITLogo}
                            alt="MVIT Logo"
                            fill
                            className="object-contain p-2"
                            priority
                        />
                    </motion.div>

                    {/* Title with Decorative Elements */}
                    <div className="relative">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-red-500 mb-4"
                        >
                            Leadership
                        </motion.h1>

                        {/* Decorative underline */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto max-w-xs"
                        />
                    </div>

                    {/* Subtitle with fade-in */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed relative"
                    >
                        <span className="absolute -left-6 text-red-400">“</span>
                        Guiding the future of education with vision, innovation, and transformative leadership in the AI era.
                        <span className="absolute -right-6 text-red-400">”</span>
                    </motion.p>

                    {/* Floating decorative elements */}
                    <div className="absolute -top-5 left-10 w-3 h-3 rounded-full bg-amber-400/40 animate-float"></div>
                    <div className="absolute bottom-10 right-12 w-4 h-4 rounded-full bg-red-500/30 animate-float-delay"></div>
                </motion.div>

                {/* Leadership Philosophy */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-20"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-red-900">
                            <FaUserTie className="text-5xl text-red-400 mb-6" />
                            <h3 className="text-2xl font-bold text-red-400 mb-4">Transformational Leadership</h3>
                            <p className="text-gray-300">
                                Our leaders inspire through vision, intellectual stimulation, and individualized consideration to drive institutional transformation.
                            </p>
                        </div>
                        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-red-900">
                            <FaGlobe className="text-5xl text-red-400 mb-6" />
                            <h3 className="text-2xl font-bold text-red-400 mb-4">Global Perspective</h3>
                            <p className="text-gray-300">
                                We cultivate leaders with international outlooks who can navigate complex global education landscapes.
                            </p>
                        </div>
                        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-red-900">
                            <FaLightbulb className="text-5xl text-red-400 mb-6" />
                            <h3 className="text-2xl font-bold text-red-400 mb-4">Innovation Culture</h3>
                            <p className="text-gray-300">
                                Fostering creative problem-solving and cutting-edge approaches to education technology.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Executive Leadership */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-red-400 mb-8 text-center">
                        Executive Leadership
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {executiveTeam.map((member, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden border border-red-900 hover:border-red-600 transition-all"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={`${member.slug}`} // Update with your image path
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-4">
                                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                        <p className="text-red-400">{member.position}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-gray-300 text-sm mb-4">{member.bio}</p>

                                    {/* Social/Contact Links */}
                                    <div className="flex space-x-3">
                                        <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Board of Governors */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-red-400 mb-8 text-center">
                        Board of Governors
                    </h2>
                    <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
                        Our Board provides strategic direction and governance oversight to ensure MVIT&apos;s continued excellence and innovation in education.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-black bg-opacity-50 backdrop-blur-sm rounded-xl border border-red-900">
                            <thead>
                            <tr className="bg-red-900 bg-opacity-50">
                                <th className="py-3 px-4 text-left">Role</th>
                                <th className="py-3 px-4 text-left">Position</th>
                                <th className="py-3 px-4 text-left">Responsibilities</th>
                            </tr>
                            </thead>
                            <tbody>
                            {boardMembers.map((member, index) => (
                                <tr
                                    key={index}
                                    className={`border-t border-red-900 ${index % 2 === 0 ? 'bg-black bg-opacity-20' : ''}`}
                                >
                                    <td className="py-4 px-4">{member.role}</td>
                                    <td className="py-4 px-4">{member.position}</td>
                                    <td className="py-4 px-4 text-gray-300">{member.responsibilities}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Leadership Principles */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-red-400 mb-8 text-center">
                        Our Leadership Principles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {leadershipPrinciples.map((principle, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-red-900"
                            >
                                <div className="text-red-400 text-3xl mb-4">{principle.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{principle.title}</h3>
                                <p className="text-gray-300">{principle.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-red-400 mb-8 text-center">
                        Voices of Leadership
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-red-900"
                            >
                                <FaQuoteLeft className="text-red-400 mb-4" />
                                <p className="text-gray-300 italic mb-6">{testimonial.quote}</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-red-900 bg-opacity-30 flex items-center justify-center mr-4">
                                        <FaUserTie className="text-red-400" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{testimonial.name}</p>
                                        <p className="text-sm text-gray-400">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

// Executive Team Data
// const executiveTeam: ExecutiveMember[] = [
//     {
//         name: "Abubakar Siddique",
//         position: "Co-Founder & President",
//         bio: "Visionary leader with 20+ years in education technology and AI innovation."
//     },
//     {
//         name: "John Smith",
//         position: "Rector",
//         bio: "Academic strategist driving institutional excellence and global partnerships."
//     },
//     {
//         name: "Dr. Arshad Iqbal",
//         position: "Vice President, Academics",
//         bio: "Curriculum innovator and pedagogical expert shaping future-ready education."
//     },
//     {
//         name: "Muhammad Shaban",
//         position: "Chief Technology Officer",
//         bio: "Tech visionary leading our digital transformation and AI integration."
//     }
// ];

// Board Members Data
const boardMembers: BoardMember[] = [
    {
        role: "President (Founder and Owner)",
        position: "Chairman",
        responsibilities: "Overall strategic direction and institutional vision"
    },
    {
        role: "Vice-President",
        position: "Co-Chairman",
        responsibilities: "Operational leadership and executive oversight"
    },
    {
        role: "Rector",
        position: "Member",
        responsibilities: "Academic leadership and quality assurance"
    },
    {
        role: "Deans",
        position: "Member",
        responsibilities: "Departmental leadership and academic programming"
    },
    {
        role: "Registrar",
        position: "Secretary",
        responsibilities: "Governance administration and compliance"
    },
    {
        role: "Finance Expert",
        position: "Member",
        responsibilities: "Financial stewardship and resource allocation"
    },
    {
        role: "Industry Representatives",
        position: "Member",
        responsibilities: "Industry alignment and workforce relevance"
    }
];

// Leadership Principles
const leadershipPrinciples: LeadershipPrinciple[] = [
    {
        icon: <FaChartLine />,
        title: "Visionary Thinking",
        description: "Anticipating future educational needs and technological trends to stay ahead of the curve."
    },
    {
        icon: <FaHandshake />,
        title: "Collaborative Approach",
        description: "Building partnerships across disciplines and institutions to amplify impact."
    },
    {
        icon: <FaUniversity />,
        title: "Academic Excellence",
        description: "Maintaining rigorous standards while innovating delivery methods."
    },
    {
        icon: <FaLightbulb />,
        title: "Innovation Mindset",
        description: "Encouraging creative solutions to complex educational challenges."
    },
    {
        icon: <FaUsers />,
        title: "Inclusive Leadership",
        description: "Valuing diverse perspectives and fostering equitable opportunities."
    },
    {
        icon: <FaChalkboardTeacher />,
        title: "Mentorship Culture",
        description: "Developing the next generation of education leaders through guidance and support."
    }
];

// Testimonials Data
const testimonials: Testimonial[] = [
    {
        quote: "What sets MVIT's leadership apart is their unwavering commitment to both technological advancement and human-centered education. They've created an ecosystem where innovation serves pedagogy.",
        name: "Ahmad Sarfraz",
        position: "Advisory Board Member"
    },
    {
        quote: "The leadership team's ability to anticipate industry needs and adapt our programs accordingly has been instrumental in our graduates' success. Their vision is truly transformative.",
        name: "Prof. Safia",
        position: "Dean of Computer Science"
    }
];

