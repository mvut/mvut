'use client';
import Link from 'next/link';
import {
    FaRobot,
    FaCode,
    FaChalkboardTeacher,
    FaPython,
    FaPhp,
    FaLaptopCode,
    FaClipboardList,
    FaAward,
    FaBookOpen,
    FaUsers,
    FaSearch,
    FaConnectdevelop,
    FaRocket,
    FaGlobe,
    FaHandsHelping,
    FaPalette,
    FaPaintBrush, FaProjectDiagram
} from 'react-icons/fa';
import { SiHiveBlockchain } from "react-icons/si";
import { motion, Variants } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import React from "react";
import { GrCertificate } from "react-icons/gr";

// Font configuration
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

// Interfaces
interface StudyProgram {
    title: string;
    description: string;
    icon: JSX.Element;
    link: string;
    gradient: string;
}

interface Testimonial {
    quote: string;
    name: string;
    position: string;
    gradient: string;
}

interface Skill {
    name: string;
    icon: JSX.Element;
    description: string;
}

// Study Programs Data
const studyPrograms: StudyProgram[] = [
    {
        title: 'Mansha Certified Autonomous Systems and Cloud Engineer (MCASCE)',
        description: 'Master the integration of cloud computing, robotics, and AI, Machine Learning and Data Science.',
        icon: <GrCertificate  className="text-8xl" />,
        link: '/pages/mcasce',
        gradient: 'from-indigo-700 to-black-600'
    },
    {
        title: 'Excellence in Language and Innovation Testing Evaluation',
        description: 'Master global language and innovation skills for academic and professional excellence.',
        icon: <FaGlobe className="text-4xl" />,
        link: '/study/glint',
        gradient: 'from-blue-700 to-teal-600'
    },
    {
        title: 'SDLC Process Architect Certification',
        description: 'Command the software lifecycle, from ideation to deployment, mastering Agile, Waterfall, and DevOps.',
        icon: <FaProjectDiagram className="text-4xl" />,
        link: '/study/sdlc-architect',
        gradient: 'from-blue-600 to-cyan-600'
    },
    {
        title: 'Certified Software Product Designer',
        description: 'Craft user-focused software with expertise in UX/UI, full-stack coding, and market-driven strategies.',
        icon: <FaPaintBrush className="text-4xl" />,
        link: '/study/cspd',
        gradient: 'from-indigo-500 to-purple-600'
    },
    {
        title: 'UX/UI Designer',
        description: 'Design intuitive digital experiences, excelling in user-centered principles and prototyping.',
        icon: <FaPalette className="text-4xl" />,
        link: '/study/ux-ui',
        gradient: 'from-fuchsia-600 to-pink-700'
    },
    {
        title: 'Mansha Robotics and Software Engineer',
        description: 'Build cutting-edge robotics and automation solutions with advanced software engineering skills.',
        icon: <FaLaptopCode className="text-4xl" />,
        link: '/study/mrse',
        gradient: 'from-purple-600 to-indigo-700'
    },
    {
        title: 'Mansha Certified AI Agents Developer',
        description: 'Forge intelligent AI agents through hands-on projects, shaping the future of technology.',
        icon: <FaRobot className="text-4xl" />,
        link: '/study/mcaad',
        gradient: 'from-teal-600 to-emerald-700'
    },
    {
        title: 'Office Management, AI and Prompt Engineering',
        description: 'Elevate office leadership with AI expertise and innovative prompt engineering techniques.',
        icon: <FaRobot className="text-4xl" />,
        link: '/study/om-ai-prompt',
        gradient: 'from-pink-600 to-rose-700'
    },
    {
        title: 'Mansha Certified Blockchain Technician',
        description: 'Master blockchain innovation, building decentralized apps through dynamic, real-world projects.',
        icon: <SiHiveBlockchain className="text-4xl" />,
        link: '/study/mcbt',
        gradient: 'from-yellow-600 to-amber-700'
    },
    {
        title: 'Full Stack Development with Next.js',
        description: 'Create modern web applications, mastering full-stack development with Next.js and React.',
        icon: <FaCode className="text-4xl" />,
        link: '/study/fsdn',
        gradient: 'from-green-600 to-lime-700'
    },
    {
        title: 'Next-Generation Web Development with Python',
        description: 'Develop dynamic web apps using Python’s powerful Django and Flask frameworks.',
        icon: <FaPython className="text-4xl" />,
        link: '/study/nxgdp',
        gradient: 'from-red-600 to-orange-700'
    },
    {
        title: 'Full Stack PHP Development',
        description: 'Excel in server-side scripting, crafting robust full-stack solutions with PHP expertise.',
        icon: <FaPhp className="text-4xl" />,
        link: '/study/fsp',
        gradient: 'from-indigo-600 to-violet-700'
    },
    {
        title: 'Kindergarten (K.G.) STEM Entrepreneurs',
        description: 'Inspire young innovators with STEM fundamentals and entrepreneurial thinking skills.',
        icon: <FaChalkboardTeacher className="text-4xl" />,
        link: '/study/kg-stem',
        gradient: 'from-blue-600 to-cyan-700'
    },
    {
        title: 'Corporate Communication for IT Professionals',
        description: 'Sharpen communication skills tailored for IT experts in corporate environments.',
        icon: <FaUsers className="text-4xl" />,
        link: '/study/corporate-communication',
        gradient: 'from-orange-600 to-amber-700'
    },
    {
        title: 'Office Management and Work Ethics',
        description: 'Boost professionalism and efficiency with expert office management and ethics.',
        icon: <FaClipboardList className="text-4xl" />,
        link: '/study/omwe',
        gradient: 'from-cyan-600 to-sky-700'
    },
    {
        title: 'Research and Thesis Development',
        description: 'Hone research techniques and excel in thesis creation for technical fields.',
        icon: <FaSearch className="text-4xl" />,
        link: '/study/research-thesis',
        gradient: 'from-gray-600 to-slate-700'
    },
    {
        title: 'Mansha Certified API Developer',
        description: 'Design secure, high-performance APIs using industry-leading development practices.',
        icon: <FaConnectdevelop className="text-4xl" />,
        link: '/study/mcad',
        gradient: 'from-emerald-600 to-teal-700'
    },
    {
        title: 'Laravel Fullstack Engineer',
        description: 'Master full-stack development, building scalable web apps with Laravel expertise.',
        icon: <FaPhp className="text-4xl" />,
        link: '/study/laravel-fullstack',
        gradient: 'from-violet-600 to-purple-700'
    },
    {
        title: 'Golang API Engineer',
        description: 'Engineer high-speed APIs and microservices with Go for optimal performance.',
        icon: <FaCode className="text-4xl" />,
        link: '/study/golang-api',
        gradient: 'from-amber-600 to-orange-700'
    },
];

// Testimonials Data
const testimonials: Testimonial[] = [
    {
        quote: "The Mansha Certified AI Agents Developer program transformed my career. Highly recommend it!",
        name: "Abid Hussain",
        position: "AI Engineer, Class of 2023",
        gradient: 'from-teal-600 to-emerald-700'
    },
    {
        quote: "The Research and Development course gave me the skills I needed to land my dream job.",
        name: "Muhammad Younas Alam",
        position: "Linguistics Researcher",
        gradient: 'from-blue-600 to-indigo-700'
    },
    {
        quote: "I loved the hands-on approach of the Mansha Robotics program. It was both challenging and rewarding.",
        name: "Safia",
        position: "Software Engineer, Class of 2021",
        gradient: 'from-purple-600 to-violet-700'
    },

];

// Featured Skills Data
const featuredSkills: Skill[] = [
    {
        name: "Problem Solving",
        icon: <FaCode className="text-3xl text-blue-400" />,
        description: "Learn to break down complex problems into manageable solutions using code."
    },
    {
        name: "Collaboration",
        icon: <FaUsers className="text-3xl text-purple-400" />,
        description: "Work effectively in teams to build real-world applications."
    },
    {
        name: "Innovation",
        icon: <FaRocket className="text-3xl text-pink-400" />,
        description: "Develop creative solutions using cutting-edge technologies."
    }
];

// Success Metrics Data
const successMetrics = {
    studentsTrained: "5,000+",
    projectsCompleted: "1,200+",
    employmentRate: "92%",
    communityMembers: "10,000+"
};

const StudyPrograms: React.FC = () => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        hover: { y: -10, transition: { duration: 0.3 } }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className={`min-h-screen bg-gray-950 text-white ${montserrat.className}`}>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4 text-center relative z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Future-Ready Education
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Empowering tomorrow&apos;s innovators with cutting-edge skills and knowledge
                    </p>
                </motion.div>
            </section>

            {/* Code Literacy Mission */}
            <section className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 text-center border border-gray-800/50"
                >
                    <FaGlobe className="text-4xl text-blue-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Code Literacy for All</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        At MVIT, we believe coding is a universal language that should be accessible to everyone. Our programs are designed to bridge the gap, offering beginner-friendly courses to advanced certifications, ensuring that learners of all backgrounds can thrive in the digital age.
                    </p>
                </motion.div>
            </section>

            {/* Programs Grid */}
            <section className="container mx-auto px-4 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {studyPrograms.map((program, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${program.gradient} p-6 shadow-lg hover:shadow-xl transition-shadow`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform translate-x-16 -translate-y-16"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    {program.icon}
                                    <h2 className="text-xl font-semibold">{program.title}</h2>
                                </div>
                                <p className="text-gray-100 mb-6 text-sm">{program.description}</p>
                                <Link href={program.link} className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                    Explore Program
                                    <span className="w-4 h-4 rounded-full border-2 border-white/50 flex items-center justify-center">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Featured Skills */}
            <section className="container mx-auto px-4 py-16">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                    Skills You’ll Master
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {featuredSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-gray-900/50 rounded-xl p-6 text-center border border-gray-800/50"
                        >
                            {skill.icon}
                            <h3 className="text-xl font-semibold mt-4 mb-2">{skill.name}</h3>
                            <p className="text-gray-300 text-sm">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800/50"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-blue-400">Why MVIT?</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Experience transformative education with industry-led programs, state-of-the-art facilities, and a commitment to your success. Join a community of innovators shaping the future.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-full"
                            >
                                <FaAward className="text-5xl text-white bg-gray-900 rounded-full p-2" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Success Metrics */}
            <section className="container mx-auto px-4 py-16">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                    Our Impact
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-4xl font-bold text-blue-400">{successMetrics.studentsTrained}</p>
                        <p className="text-gray-300">Students Trained</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <p className="text-4xl font-bold text-purple-400">{successMetrics.projectsCompleted}</p>
                        <p className="text-gray-300">Projects Completed</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-4xl font-bold text-pink-400">{successMetrics.employmentRate}</p>
                        <p className="text-gray-300">Employment Rate</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <p className="text-4xl font-bold text-teal-400">{successMetrics.communityMembers}</p>
                        <p className="text-gray-300">Community Members</p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="container mx-auto px-4 py-16">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                    Student Success Stories
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className={`rounded-xl p-6 bg-gradient-to-br ${testimonial.gradient} shadow-md`}
                        >
                            <p className="text-gray-100 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-gray-200">{testimonial.position}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Resources & Community */}
            <section className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800/50"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-purple-400">Resources & Community</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Join our vibrant community and access free resources to kickstart your coding journey. From beginner tutorials to advanced workshops, we’ve got you covered.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/resources" className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                    Free Resources
                                </Link>
                                <Link href="/community" className="bg-transparent hover:bg-purple-600/20 px-4 py-2 rounded-full text-sm font-medium border border-purple-500 transition-colors">
                                    Join Community
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <FaHandsHelping className="text-6xl text-purple-400" />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 text-center"
                >
                    <FaBookOpen className="text-4xl text-blue-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Discover new programs in AI, blockchain, and more. Join our waitlist for exclusive updates!
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold transition-colors">
                        Join Waitlist
                    </button>
                </motion.div>
            </section>
        </div>
    );
};

export default StudyPrograms;