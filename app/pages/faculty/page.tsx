'use client';

import React, { useRef, useEffect, useState } from 'react';
import {
    FaLinkedin, FaGithub, FaTwitter, FaRobot, FaFlask, FaGraduationCap, FaUniversity,
    FaTrophy, FaFileAlt, FaQuoteLeft, FaAward, FaCertificate, FaCodeBranch, FaLaptopCode,
    FaRegLightbulb, FaUsers, FaProjectDiagram, FaMicrochip, FaDatabase, FaServer, FaCentos,
    FaCode, FaPaintBrush, FaGlobe, FaBusinessTime, FaBook, FaBalanceScale
} from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Oswald, Raleway, Playfair_Display } from 'next/font/google';

// Load Google Fonts
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-oswald'
});

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-raleway'
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-playfair'
});

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    expertise: string[];
    image: string;
    department: keyof typeof departmentIcons;
    links: {
        linkedin: string;
        github: string;
        twitter: string;
    };
}

const departmentIcons = {
    'technology': <FaCode className="text-red-400" />,
    'design': <FaPaintBrush className="text-red-400" />,
    'language': <FaGlobe className="text-red-400" />,
    'business': <FaBusinessTime className="text-red-400" />,
    'education': <FaGraduationCap className="text-red-400" />,
    'social-science': <FaBalanceScale className="text-red-400" />,
    'islamic-studies': <FaBook className="text-red-400" />,
} as const;

const CombinedFacultyPage = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                when: "beforeChildren"
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 80,
                duration: 0.5
            }
        },
    };

    const hoverCard = {
        scale: 1.02,
        boxShadow: "0 10px 20px -5px rgba(255, 0, 0, 0.3)",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
        }
    };

    // Certifications data from page1
    const certifications = [
        { name: 'Mansha Robotics and Software Engineer', icon: <FaRobot /> },
        { name: 'Mansha Certified AI Agents Developer', icon: <FaRobot /> },
        { name: 'Office Management, AI and Prompt Engineering', icon: <FaGraduationCap /> },
        { name: 'Mansha Certified Blockchain Technician', icon: <FaCodeBranch /> },
        { name: 'Full Stack Development with Next.js', icon: <FaLaptopCode /> },
        { name: 'Next-Generation Web Development with Python', icon: <FaServer /> },
        { name: 'Full Stack PHP Development', icon: <FaCodeBranch /> },
        { name: 'Kindergarten (K.G.) STEM Entrepreneurs', icon: <FaRegLightbulb /> },
        { name: 'Corporate Communication for IT Professionals', icon: <FaUsers /> },
        { name: 'Office Management and Work Ethics', icon: <FaProjectDiagram /> },
        { name: 'Research and Thesis Development', icon: <FaFileAlt /> },
        { name: 'Golang API Engineer', icon: <FaMicrochip /> },
        { name: 'Laravel Fullstack Engineer', icon: <FaDatabase /> },
        { name: 'Mansha Certified API Developer', icon: <FaCentos /> }
    ];

    // Departments data from page1
    const departments = [
        {
            name: 'AI Engineering',
            icon: <FaRobot className="text-red-500" size={20} />,
            description: 'Pioneering autonomous systems through cutting-edge AI research',
            dean: {
                name: 'Abid Hussain',
                role: 'Dean of AI Engineering',
                bio: 'Former lead AI researcher at DeepMind with 15+ years experience developing intelligent systems. Published over 10 papers in top AI conferences.',
                education: 'MS in Computer Science, Master of Education',
                achievements: [
                    'Agentic AI',
                    'Software Engineering',
                    'Fuzzy Logic'
                ],
                image: '/faculty/abid.jpg',
                links: {
                    linkedin: '#',
                    github: '#',
                    twitter: '#',
                },
            },
        },
        {
            name: 'Advanced Sciences',
            icon: <FaFlask className="text-red-400" size={20} />,
            description: 'Pushing boundaries in fundamental scientific research',
            dean: {
                name: 'Babar Hussain',
                role: 'Dean of Sciences',
                bio: 'Fields Medal nominee specializing in mathematical modeling with applications in fluid dynamics and quantum systems.',
                education: 'M.Phil. Mathematics, Master of Education',
                achievements: [
                    'Number Theory',
                    'Mathematical Modeling',
                    'Honorary PHD'
                ],
                image: '/faculty/babar.jpg',
                links: {
                    linkedin: '#',
                    github: '#',
                    twitter: '#',
                },
            },
        },
        {
            name: 'Entrepreneurship',
            icon: <FaUniversity className="text-red-300" size={20} />,
            description: 'Cultivating the next generation of innovators',
            dean: {
                name: 'Mike Litman',
                role: 'Dean of Entrepreneurship',
                bio: 'Serial entrepreneur with 5 successful exits totaling $2.3B. Early investor in 12 unicorn startups and global speaker on innovation.',
                education: 'MBA, Wharton School of Business',
                achievements: [
                    'Ernst & Young Entrepreneur',
                    'TechStars Accelerator',
                    'Fortune 500 board member'
                ],
                image: '/faculty/mike2.jpg',
                links: {
                    linkedin: '#',
                    github: '#',
                    twitter: '#',
                },
            },
        },
        {
            name: 'Research',
            icon: <FaGraduationCap className="text-red-200" size={20} />,
            description: 'Advancing human knowledge through interdisciplinary research',
            dean: {
                name: 'Muhammad Arshad Iqbal',
                role: 'Dean of Research',
                bio: 'Published over 10 papers in Nature and Science journals. Developed novel nanomaterials for energy storage and quantum computing.',
                education: 'PhD in Statistics',
                achievements: [
                    'Data Scientist',
                    'AI and Machine Learning',
                    'Research Engineering',
                ],
                image: '/faculty/arshadiqbal.jpg',
                links: {
                    linkedin: '#',
                    github: '#',
                    twitter: '#',
                },
            },
        },
    ];

    // Team members data from page2
    const teamMembers: TeamMember[] = [
        // Technology Department
        {
            name: 'Muhammad Shaaban',
            role: 'Instructor PHP Frameworks',
            bio: 'Fullstack Web Developer with 8+ years experience building enterprise applications',
            expertise: ['Laravel', 'Symfony', 'API Development', 'MySQL'],
            image: '/faculty/mst.jpg',
            department: 'technology',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Ali Ijaz',
            role: 'Computer Science Education',
            bio: 'Expert in Computer Science and IT Education with focus on curriculum development',
            expertise: ['Algorithms', 'Data Structures', 'CS Fundamentals', 'Pedagogy'],
            image: '/faculty/ali.png',
            department: 'technology',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Daha Qalbi',
            role: 'Instructor MERN Stack',
            bio: 'Specializes in building scalable MERN Stack Applications with microservices architecture',
            expertise: ['React', 'Node.js', 'MongoDB', 'GraphQL'],
            image: '/faculty/daha.jpg',
            department: 'technology',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Abbas Muhammad',
            role: 'Instructor SE & Databases',
            bio: 'Database architect specializing in optimization and information retrieval techniques',
            expertise: ['SQL', 'NoSQL', 'Database Design', 'ETL'],
            image: '/faculty/mabbas.jpg',
            department: 'technology',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'M. Rizwan Khalid',
            role: 'Instructor Information Technology',
            bio: 'Researcher in emerging technologies with focus on practical applications',
            expertise: ['Cloud Computing', 'IoT', 'Blockchain', 'AI Applications'],
            image: '/faculty/rizwan.jpg',
            department: 'technology',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Muhammad Arshad',
            role: 'Instructor Software Engineering',
            bio: 'Expert in software quality assurance and performance optimization',
            expertise: ['Testing Frameworks', 'CI/CD', 'Performance Tuning', 'Agile'],
            image: '/faculty/arshad.jpg',
            department: 'technology',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Ghulam Abbas',
            role: 'Instructor Programming & Algorithms',
            bio: 'Competitive programming coach with multiple ICPC regional wins',
            expertise: ['Algorithm Design', 'Competitive Programming', 'C++', 'Python'],
            image: '/faculty/gabbas2.jpeg',
            department: 'technology',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Amir Shahzad',
            role: 'Instructor Computational Algorithms',
            bio: 'Researcher in computational complexity and algorithm optimization',
            expertise: ['Complexity Theory', 'Parallel Algorithms', 'Optimization', 'Numerical Methods'],
            image: '/faculty/amir.jpg',
            department: 'technology',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Sohail Ahmed',
            role: 'Instructor R&D, Simulation',
            bio: 'Research scientist with expertise in computational modeling',
            expertise: ['Simulation', 'Data Science', 'Research Methods', 'Modeling'],
            image: '/faculty/sohail.jpg',
            department: 'technology',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },

        // Design Department
        {
            name: 'Muhammad Awais',
            role: 'Instructor Tailwind CSS',
            bio: 'UI/UX specialist focused on design systems and component-driven development',
            expertise: ['Tailwind', 'Figma', 'Accessibility', 'Design Systems'],
            image: '/faculty/awais.jpg',
            department: 'design',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Muhammad Hussain',
            role: 'Instructor Computer Graphics',
            bio: 'Digital artist and technical director with expertise in 3D modeling and animation',
            expertise: ['Blender', 'Maya', 'Substance Painter', 'Unreal Engine'],
            image: '/faculty/hussain.jpg',
            department: 'design',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Muhammad Haris',
            role: 'Instructor Frontend Design',
            bio: 'UI/UX designer with focus on interactive and accessible design',
            expertise: ['Adobe XD', 'UI Design', 'Prototyping', 'User Research'],
            image: '/faculty/haris.jpg',
            department: 'design',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },

        // Language Department
        {
            name: 'Muhammad Younas Alam',
            role: 'Instructor English Language',
            bio: 'Linguistics expert with focus on ESL teaching methodologies',
            expertise: ['ESL', 'Linguistics', 'Academic Writing', 'Public Speaking'],
            image: '/faculty/younis.jpg',
            department: 'language',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Sabar Hussain',
            role: 'Instructor English Literature',
            bio: 'Literary critic and scholar specializing in postcolonial literature',
            expertise: ['Literary Theory', 'Critical Analysis', 'Creative Writing', 'Drama'],
            image: '/faculty/sabar.jpg',
            department: 'language',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Muhammad Ikram',
            role: 'Instructor Urdu Language',
            bio: 'Linguist specializing in Urdu literature and translation studies',
            expertise: ['Urdu Literature', 'Translation', 'Poetry', 'Philology'],
            image: '/faculty/ikram.jpg',
            department: 'language',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },

        // Business Department
        {
            name: 'Rashid Zafar',
            role: 'Instructor Marketing Education',
            bio: 'Digital marketing strategist with expertise in growth hacking',
            expertise: ['Digital Marketing', 'SEO', 'Content Strategy', 'Branding'],
            image: '/faculty/rashid.jpg',
            department: 'business',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Kamran Shareef',
            role: 'Instructor Business Management',
            bio: 'Former Fortune 500 executive specializing in organizational leadership',
            expertise: ['Leadership', 'Strategic Management', 'Operations', 'HR'],
            image: '/faculty/kamran.jpg',
            department: 'business',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Maqsood Ahmad',
            role: 'Instructor Commerce',
            bio: 'E-commerce expert with focus on global supply chain management',
            expertise: ['E-commerce', 'Supply Chain', 'Retail', 'Entrepreneurship'],
            image: '/faculty/maqsood.jpg',
            department: 'business',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Ghulam Muhammad',
            role: 'Instructor Amazon VA',
            bio: 'E-commerce expert with 10+ years Amazon marketplace experience',
            expertise: ['Amazon FBA', 'PPC', 'Product Research', 'Store Optimization'],
            image: '/faculty/gami.jpg',
            department: 'business',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },

        // Education Department
        {
            name: 'Safia',
            role: 'Instructor Computer Education',
            bio: 'Focused on foundational computer literacy and digital skills education',
            expertise: ['Computer Basics', 'Office Suite', 'Digital Literacy', 'IT Fundamentals'],
            image: '/faculty/dummy.png',
            department: 'education',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Yasir Ali',
            role: 'Instructor Educational Studies',
            bio: 'Educational psychologist specializing in learning methodologies',
            expertise: ['Pedagogy', 'Curriculum Design', 'Assessment', 'EdTech'],
            image: '/faculty/yasir.jpg',
            department: 'education',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },

        // Social Science Department
        {
            name: 'Sarfraz Ahmad',
            role: 'Instructor Sociology',
            bio: 'Legal scholar with expertise in social justice and policy',
            expertise: ['Social Theory', 'Public Policy', 'Human Rights', 'Criminology'],
            image: '/faculty/SARFRAZ.jpg',
            department: 'social-science',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },
        {
            name: 'Muhammad Yasir',
            role: 'Instructor Political Science',
            bio: 'Geopolitical analyst with focus on international relations',
            expertise: ['International Relations', 'Political Theory', 'Diplomacy', 'Public Admin'],
            image: '/faculty/yassri.jpeg',
            department: 'social-science',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        },

        // Islamic Studies Department
        {
            name: 'Abdul Hameed',
            role: 'Instructor Islamic Studies',
            bio: 'Islamic scholar with expertise in comparative religion',
            expertise: ['Fiqh', 'Quranic Studies', 'Hadith', 'Comparative Religion'],
            image: '/faculty/hameed.jpg',
            department: 'islamic-studies',
            links: {
                linkedin: '#',
                github: '#',
                twitter: '#',
            },
        }
    ];

    // Predefined particle positions to avoid Math.random() during SSR
    const particlePositions = Array(20).fill(0).map((_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`, // Deterministic positioning
        top: `${(i * 19) % 100}%`
    }));

    return (
        <div ref={ref} className={`w-full min-h-screen relative overflow-hidden ${raleway.className}`}>
            {/* Animated Background */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 z-0 bg-gradient-to-br from-black via-red-900 to-black"
            />

            {/* Particle overlay */}
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
                {/* Header Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12 md:mb-20"
                >
                    <motion.h1
                        variants={itemVariants}
                        className={`text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 mb-6 ${playfair.className}`}
                    >
                        Academic Leadership
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-red-200 max-w-3xl mx-auto"
                    >
                        Our world-class faculty and academic leadership driving innovation and excellence
                    </motion.p>
                </motion.div>

                {/* Department Leadership Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold text-white mb-8 text-center ${playfair.className}`}>
                        Department Leadership
                    </h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                        {departments.map((department, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={hoverCard}
                                className="flex flex-col lg:flex-row bg-black/50 backdrop-blur-sm rounded-xl border border-red-900/50 overflow-hidden hover:border-red-500 transition-all duration-300 h-full shadow-lg hover:shadow-red-900/30"
                            >
                                {/* Left Side - Image & Social */}
                                <div className="lg:w-2/5 p-6 flex flex-col items-center justify-center bg-gradient-to-b from-red-900/20 to-black/50">
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        className="relative w-40 h-40 rounded-full border-2 border-red-500/30 shadow-lg overflow-hidden mb-6"
                                    >
                                        <Image
                                            src={department.dean.image}
                                            alt={department.dean.name}
                                            fill
                                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={index < 2}
                                        />
                                    </motion.div>

                                    {/* Social Links */}
                                    <div className="flex justify-center gap-4">
                                        <motion.a
                                            whileHover={{ y: -2, color: "#0077B5" }}
                                            href={department.dean.links.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors duration-200"
                                            aria-label="LinkedIn"
                                        >
                                            <FaLinkedin size={20} />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ y: -2, color: "#f5f5f5" }}
                                            href={department.dean.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors duration-200"
                                            aria-label="GitHub"
                                        >
                                            <FaGithub size={20} />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ y: -2, color: "#1DA1F2" }}
                                            href={department.dean.links.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors duration-200"
                                            aria-label="Twitter"
                                        >
                                            <FaTwitter size={20} />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Right Side - Information */}
                                <div className="lg:w-3/5 p-6 flex flex-col">
                                    {/* Department Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        {department.icon}
                                        <h2 className={`text-xl font-bold text-white ${oswald.className}`}>{department.name}</h2>
                                    </div>
                                    <p className="text-sm text-red-200 mb-5">{department.description}</p>

                                    {/* Dean Info */}
                                    <div className="mb-5">
                                        <h3 className="text-xl font-bold text-white">{department.dean.name}</h3>
                                        <p className="text-sm text-red-400 font-medium">{department.dean.role}</p>
                                    </div>

                                    {/* Bio */}
                                    <div className="relative mb-6">
                                        <FaQuoteLeft className="absolute -left-2 -top-2 text-red-900/50 text-xl" />
                                        <p className="text-sm text-gray-300 pl-4">{department.dean.bio}</p>
                                    </div>

                                    {/* Education & Achievements */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                                        <div className="bg-black/30 p-3 rounded-lg border border-red-900/30">
                                            <h4 className="text-xs font-semibold text-red-400 mb-2">EDUCATION</h4>
                                            <p className="text-xs text-gray-300">{department.dean.education}</p>
                                        </div>
                                        <div className="bg-black/30 p-3 rounded-lg border border-red-900/30">
                                            <h4 className="text-xs font-semibold text-red-400 mb-2">ACHIEVEMENTS</h4>
                                            <ul className="text-xs text-gray-300 space-y-1">
                                                {department.dean.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-red-400 mr-1">•</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Faculty Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold text-white mb-8 text-center ${playfair.className}`}>
                        Our Faculty Team
                    </h2>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.3
                                }
                            }
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { y: 50, opacity: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 10
                                        }
                                    }
                                }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.3)",
                                    transition: { duration: 0.3 }
                                }}
                                className="flex flex-col bg-black bg-opacity-70 rounded-xl border border-red-900/50 overflow-hidden hover:border-red-500 transition-all duration-500"
                            >
                                {/* Department Tag */}
                                <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-black bg-opacity-70 rounded-full border border-red-900/50">
                                    {departmentIcons[member.department]}
                                </div>

                                {/* Profile Image */}
                                <div className="w-full flex justify-center pt-8">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="relative w-32 h-32 rounded-full border-4 border-red-500/30 shadow-xl overflow-hidden"
                                    >
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={index < 4}
                                        />
                                    </motion.div>
                                </div>

                                {/* Member Details */}
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-sm text-red-400 font-medium mb-3">{member.role}</p>
                                    <p className="text-xs text-gray-300 mb-4">{member.bio}</p>

                                    {/* Expertise */}
                                    <div className="mb-6">
                                        <h4 className="text-xs font-semibold text-red-400 mb-2">AREAS OF EXPERTISE</h4>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {member.expertise.map((skill, i) => (
                                                <span key={i} className="text-xs bg-red-900/30 text-gray-300 px-2 py-1 rounded">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex justify-center gap-4">
                                        {member.links.linkedin && (
                                            <motion.a
                                                whileHover={{ y: -3, color: "#0077B5" }}
                                                href={member.links.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                                aria-label="LinkedIn"
                                            >
                                                <FaLinkedin size={18} />
                                            </motion.a>
                                        )}
                                        {member.links.github && (
                                            <motion.a
                                                whileHover={{ y: -3, color: "#f5f5f5" }}
                                                href={member.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                                aria-label="GitHub"
                                            >
                                                <FaGithub size={18} />
                                            </motion.a>
                                        )}
                                        {member.links.twitter && (
                                            <motion.a
                                                whileHover={{ y: -3, color: "#1DA1F2" }}
                                                href={member.links.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                                aria-label="Twitter"
                                            >
                                                <FaTwitter size={18} />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 bg-gradient-to-br from-red-900/40 to-black/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl"
                >
                    <div className="p-10 md:p-12 lg:p-16">
                        <div className="text-center max-w-4xl mx-auto mb-12">
                            <div className="inline-flex items-center justify-center p-4 bg-red-600/20 rounded-full mb-6">
                                <FaCertificate className="text-3xl text-red-400" />
                            </div>
                            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${playfair.className}`}>
                                Professional Certifications
                            </h2>
                            <p className="text-lg text-red-200">
                                Industry-recognized programs to advance your technical and professional skills
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.03 }}
                                    className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-red-900/50 hover:border-red-700 transition-all flex items-start gap-4"
                                >
                                    <div className="text-red-500 mt-1">
                                        {cert.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-bold text-white mb-1 ${oswald.className}`}>{cert.name}</h3>
                                        <div className="text-xs font-medium text-red-400 bg-red-900/30 px-3 py-1 rounded-full inline-block mt-2">
                                            Enroll Now
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    <div className="bg-black/50 backdrop-blur-sm border border-red-900/50 rounded-xl p-6 text-center hover:border-red-500 transition-all">
                        <div className="flex justify-center mb-3">
                            <FaTrophy className="text-2xl text-red-500" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">50+</h3>
                        <p className="text-xs md:text-sm text-red-200">Award Winners</p>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm border border-red-900/50 rounded-xl p-6 text-center hover:border-red-500 transition-all">
                        <div className="flex justify-center mb-3">
                            <FaAward className="text-2xl text-red-500" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">200+</h3>
                        <p className="text-xs md:text-sm text-red-200">Patents</p>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm border border-red-900/50 rounded-xl p-6 text-center hover:border-red-500 transition-all">
                        <div className="flex justify-center mb-3">
                            <FaFileAlt className="text-2xl text-red-500" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">500+</h3>
                        <p className="text-xs md:text-sm text-red-200">Research Papers</p>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm border border-red-900/50 rounded-xl p-6 text-center hover:border-red-500 transition-all">
                        <div className="flex justify-center mb-3">
                            <FaGraduationCap className="text-2xl text-red-500" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">1M+</h3>
                        <p className="text-xs md:text-sm text-red-200">Citations</p>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.a href={'https://wa.me/17472094775'}
                        whileHover={{ scale: 1.03, boxShadow: "0 5px 15px -5px rgba(255, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-full shadow-lg hover:shadow-red-500/30 transition-all duration-300 text-lg"
                    >
                        Join Our Academic Community
                    </motion.a>
                </motion.div>
            </div>

            {/* Floating particles - Only render on client side */}
            {isClient && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    {particlePositions.map((particle) => (
                        <motion.div
                            key={particle.id}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 0.3, 0],
                                transition: {
                                    duration: 15,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }
                            }}
                            className="absolute w-1 h-1 bg-red-500 rounded-full"
                            style={{
                                left: particle.left,
                                top: particle.top
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CombinedFacultyPage;