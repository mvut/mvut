'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaLinkedin,
    FaTwitter,
    FaGithub,
    FaFacebook,
    FaGlobe,
    FaCertificate,
    FaUserTie, FaSearch
} from 'react-icons/fa';
import { MdEmail, MdWork } from 'react-icons/md';

type Certification = {
    name: string;
    date: string;
    credentialId: string;
};

type SocialLinks = {
    linkedin?: string;
    twitter?: string;
    github?: string;
    facebook?: string;
    website?: string;
    email?: string;
};

type CertifiedProfessional = {
    id: string;
    name: string;
    designation: string;
    image: string;
    bio: string;
    certifications: Certification[];
    socialLinks: SocialLinks;
};

const mockProfessionals: CertifiedProfessional[] = [
    {
        id: '1',
        name: 'Dr. Sarah Johnson',
        designation: 'Senior AI Researcher',
        image: '/images/professionals/sarah-johnson.jpg',
        bio: 'Expert in machine learning with 10+ years of experience in implementing AI solutions for healthcare.',
        certifications: [
            {
                name: 'MVIT Certified AI Specialist',
                date: '2022-05-15',
                credentialId: 'MVIT-AI-2022-0015'
            },
            {
                name: 'MVIT Advanced Data Science',
                date: '2021-11-20',
                credentialId: 'MVIT-DS-2021-0032'
            }
        ],
        socialLinks: {
            linkedin: 'https://linkedin.com/in/sarahjohnson',
            twitter: 'https://twitter.com/sarah_ai',
            github: 'https://github.com/sarah-ai-projects',
            facebook: 'https://facebook.com/sarah.johnson',
            website: 'https://sarahjohnson.ai'
        }
    },
    {
        id: '2',
        name: 'Michael Chen',
        designation: 'Cloud Solutions Architect',
        image: '/images/professionals/michael-chen.jpg',
        bio: 'Specializes in cloud infrastructure and DevOps with certifications across multiple platforms.',
        certifications: [
            {
                name: 'MVIT Certified Cloud Architect',
                date: '2023-01-10',
                credentialId: 'MVIT-CC-2023-0007'
            }
        ],
        socialLinks: {
            linkedin: 'https://linkedin.com/in/michaelchen-cloud',
            email: 'michael.chen@example.com',
            website: 'https://michaelchen.dev'
        }
    },
    {
        id: '3',
        name: 'Priya Patel',
        designation: 'Cybersecurity Lead',
        image: '/images/professionals/priya-patel.jpg',
        bio: 'Passionate about securing digital assets and educating organizations about cybersecurity best practices.',
        certifications: [
            {
                name: 'MVIT Certified Security Expert',
                date: '2022-08-22',
                credentialId: 'MVIT-SEC-2022-0012'
            },
            {
                name: 'MVIT Ethical Hacking',
                date: '2021-06-30',
                credentialId: 'MVIT-EH-2021-0021'
            }
        ],
        socialLinks: {
            linkedin: 'https://linkedin.com/in/priyapatel-security',
            twitter: 'https://twitter.com/priya_sec',
            facebook: 'https://facebook.com/priya.patel.security'
        }
    }
];

export default function CertifiedProfessionalsPage() {
    const [professionals, setProfessionals] = useState<CertifiedProfessional[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCertification, setSelectedCertification] = useState<string>('all');

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(() => {
                setProfessionals(mockProfessionals);
                setLoading(false);
            }, 1000);
        };
        fetchData();
    }, []);

    const allCertifications = Array.from(
        new Set(mockProfessionals.flatMap(p => p.certifications.map(c => c.name)))
    );

    const filteredProfessionals = professionals.filter(professional => {
        const matchesSearch =
            professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            professional.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
            professional.certifications.some(cert =>
                cert.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

        const matchesCertification =
            selectedCertification === 'all' ||
            professional.certifications.some(cert => cert.name === selectedCertification);

        return matchesSearch && matchesCertification;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-black text-white">
            <Head>
                <title>MVIT Certified Professionals</title>
                <meta name="description" content="Browse all professionals certified by MVIT" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Montserrat:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block relative mb-6">
                        <div className="absolute -inset-4 bg-emerald-500/20 rounded-xl blur-md"></div>
                        <h1 className="relative text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-white font-montserrat">
                            MVIT Certified Professionals
                        </h1>
                    </div>
                    <p className="text-lg text-emerald-300 max-w-3xl mx-auto font-poppins">
                        Discover top talent certified by MVIT - leaders in their respective fields
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-emerald-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search professionals..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-emerald-300 font-poppins transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="w-full md:w-64">
                            <select
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white font-poppins appearance-none"
                                value={selectedCertification}
                                onChange={(e) => setSelectedCertification(e.target.value)}
                            >
                                <option value="all">All Certifications</option>
                                {allCertifications.map((cert, index) => (
                                    <option key={index} value={cert}>{cert}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <motion.div
                            animate={{
                                rotate: 360,
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full"
                        ></motion.div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredProfessionals.map((professional, index) => (
                                <motion.div
                                    key={professional.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -5 }}
                                    className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-emerald-500 transition-all duration-300 shadow-lg"
                                >
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-emerald-500/10 group-hover:opacity-30 opacity-0 transition-opacity duration-300"></div>

                                    {/* Header with image */}
                                    <div className="relative h-48 bg-gradient-to-r from-emerald-600 to-emerald-800 flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-black/30"></div>
                                        <FaUserTie className="text-white text-6xl opacity-20" />
                                        <div className="absolute -bottom-6 left-6">
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                                            >
                                                <FaCertificate className="text-white text-xl" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 pt-10">
                                        {/* Name and designation */}
                                        <div className="mb-4">
                                            <h2 className="text-2xl font-bold text-white font-montserrat group-hover:text-emerald-400 transition-colors">
                                                {professional.name}
                                            </h2>
                                            <div className="flex items-center text-emerald-400 mt-1 font-poppins">
                                                <MdWork className="mr-2" />
                                                <span>{professional.designation}</span>
                                            </div>
                                        </div>

                                        {/* Bio */}
                                        <p className="text-gray-300 mb-6 font-poppins text-sm leading-relaxed">
                                            {professional.bio}
                                        </p>

                                        {/* Certifications */}
                                        <div className="mb-6">
                                            <h3 className="text-lg font-semibold mb-3 flex items-center font-montserrat text-white">
                                                <FaCertificate className="mr-2 text-emerald-400" />
                                                MVIT Certifications
                                            </h3>
                                            <ul className="space-y-2">
                                                {professional.certifications.map((cert, i) => (
                                                    <motion.li
                                                        key={i}
                                                        whileHover={{ x: 5 }}
                                                        className="bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-700 text-sm"
                                                    >
                                                        <div className="font-medium text-white">{cert.name}</div>
                                                        <div className="text-xs text-emerald-300 mt-1">
                                                            <span className="font-mono">{cert.credentialId}</span> • {new Date(cert.date).toLocaleDateString()}
                                                        </div>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Social links */}
                                        <div className="flex flex-wrap gap-3">
                                            {professional.socialLinks.linkedin && (
                                                <motion.a
                                                    href={professional.socialLinks.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.2, y: -2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="text-gray-400 hover:text-[#0A66C2] transition-colors"
                                                    title="LinkedIn"
                                                >
                                                    <FaLinkedin className="text-xl" />
                                                </motion.a>
                                            )}
                                            {professional.socialLinks.twitter && (
                                                <motion.a
                                                    href={professional.socialLinks.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.2, y: -2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
                                                    title="Twitter"
                                                >
                                                    <FaTwitter className="text-xl" />
                                                </motion.a>
                                            )}
                                            {professional.socialLinks.github && (
                                                <motion.a
                                                    href={professional.socialLinks.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.2, y: -2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="text-gray-400 hover:text-[#333] transition-colors"
                                                    title="GitHub"
                                                >
                                                    <FaGithub className="text-xl" />
                                                </motion.a>
                                            )}
                                            {professional.socialLinks.facebook && (
                                                <motion.a
                                                    href={professional.socialLinks.facebook}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.2, y: -2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="text-gray-400 hover:text-[#1877F2] transition-colors"
                                                    title="Facebook"
                                                >
                                                    <FaFacebook className="text-xl" />
                                                </motion.a>
                                            )}
                                            {professional.socialLinks.website && (
                                                <motion.a
                                                    href={professional.socialLinks.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.2, y: -2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                                    title="Personal Website"
                                                >
                                                    <FaGlobe className="text-xl" />
                                                </motion.a>
                                            )}
                                            {professional.socialLinks.email && (
                                                <motion.a
                                                    href={`mailto:${professional.socialLinks.email}`}
                                                    whileHover={{ scale: 1.2, y: -2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                                    title="Email"
                                                >
                                                    <MdEmail className="text-xl" />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {/* Empty state */}
                {!loading && filteredProfessionals.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="inline-block mb-6 p-6 bg-gray-800 rounded-full">
                            <FaSearch className="text-4xl text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 font-montserrat">No professionals found</h3>
                        <p className="text-emerald-300 font-poppins">Try adjusting your search filters</p>
                    </motion.div>
                )}
            </main>

            <footer className="py-8 text-center text-emerald-300 border-t border-gray-800 font-poppins">
                <div className="container mx-auto px-4">
                    <p>© {new Date().getFullYear()} MVIT Certification Authority. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}