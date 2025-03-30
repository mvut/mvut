'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaNewspaper, FaUsers, FaRobot, FaCode, FaMicroscope, FaChild, FaBook, FaGithub, FaLightbulb, FaHandsHelping, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaChalkboardTeacher, FaBrain, FaSchool, FaUserTie, FaAward, FaArrowRight } from 'react-icons/fa';
import { Poppins } from 'next/font/google';
import Logo from '@/public/usai-logo-3.png'
// Load Google Font
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.3 },
    },
};
const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

// Data
const news = [
    {
        title: 'Introduction to AI for Kids',
        date: '2023-10-01',
        description: 'Our innovative curriculum introduces kindergarteners to machine learning concepts through interactive games and storytelling.',
        icon: <FaChild size={30} className="text-yellow-500" />,
        link: '/news/ai-for-kids'
    },
    {
        title: 'STEM Fair 2023 Winners',
        date: '2023-09-25',
        description: 'Congratulations to our young innovators who showcased groundbreaking projects at the annual STEM Fair!',
        icon: <FaMicroscope size={30} className="text-purple-500" />,
        link: '/news/stem-fair-winners'
    },
    {
        title: 'New Robotics Program',
        date: '2023-09-15',
        description: 'Launching our robotics curriculum where students as young as 5 learn to build and program their own robots.',
        icon: <FaRobot size={30} className="text-red-500" />,
        link: '/news/robotics-program'
    },
];

const admittedCandidates = [
    { name: 'Alice Johnson', age: 5, program: 'Tiny Stars' },
    { name: 'Bob Smith', age: 6, program: 'Little Coders' },
    { name: 'Charlie Brown', age: 5, program: 'Tiny Stars' },
    { name: 'Diana Prince', age: 7, program: 'STEM Explorers' },
    { name: 'Ethan Hunt', age: 6, program: 'Little Coders' },
    { name: 'Fiona Gallagher', age: 7, program: 'STEM Explorers' },
    { name: 'George Lucas', age: 8, program: 'Young Entrepreneurs' },
    { name: 'Hannah Montana', age: 5, program: 'Tiny Stars' },
];

const learningRoadmap = [
    {
        title: 'Term-0 Tiny Stars',
        description: 'Ages 3-5: Introduction to technology through play',
        icon: <FaChild size={30} className="text-yellow-500" />,
        skills: ['Basic computing', 'Pattern recognition', 'Simple robotics']
    },
    {
        title: 'Term-I Little Coders',
        description: 'Ages 5-7: Foundational programming concepts',
        icon: <FaCode size={30} className="text-blue-500" />,
        skills: ['Block coding', 'Algorithm thinking', 'Digital creativity']
    },
    {
        title: 'Term-II STEM Explorers',
        description: 'Ages 7-9: Hands-on science and engineering',
        icon: <FaMicroscope size={30} className="text-purple-500" />,
        skills: ['Robotics kits', 'Scientific method', '3D modeling']
    },
    {
        title: 'Term-III Entrepreneurs',
        description: 'Ages 9-11: Innovation and problem-solving',
        icon: <FaRobot size={30} className="text-red-500" />,
        skills: ['App development', 'Business concepts', 'Presentation skills']
    },
    {
        title: 'Term-IV Phonics Wizards',
        description: 'Ages 4-6: Literacy meets technology',
        icon: <FaBook size={30} className="text-green-500" />,
        skills: ['Digital storytelling', 'Language apps', 'Reading with AI']
    },
    {
        title: 'Term-V Prompt Engineering',
        description: 'Ages 5-10: Literacy meets technology',
        icon: <FaBook size={30} className="text-green-500" />,
        skills: ['Digital Story Writing', 'Graphic Designing', 'How to Talk with Robots']
    },
];

const testimonials = [
    {
        quote: 'USAI has transformed my child learning experience. They now love coding and robotics! The teachers make complex concepts so accessible.',
        author: 'John Smith',
        role: 'Parent of 6-year-old'
    },
    {
        quote: 'The STEM programs are top-notch. My daughter is always excited to attend classes and comes home bursting with new ideas.',
        author: 'Mike Litman',
        role: 'Parent of 7-year-old'
    },
    {
        quote: 'A perfect blend of fun and education. I wish this kind of program existed when I was a child. Highly recommend USAI to all parents.',
        author: 'Maqsood Ahmad',
        role: 'Parent of 5-year-old'
    },
];

const upcomingEvents = [
    {
        title: 'Open House Day',
        date: '2023-11-15',
        time: '10:00 AM - 2:00 PM',
        location: 'USAI Main Campus',
        description: 'Tour our facilities and meet our teachers. Special demo classes for prospective students.',
        icon: <FaSchool size={24} className="text-blue-500" />
    },
    {
        title: 'Parent Workshop: AI in Early Education',
        date: '2023-11-20',
        time: '6:00 PM - 8:00 PM',
        location: 'Virtual',
        description: 'Learn how we integrate AI concepts in age-appropriate ways for young learners.',
        icon: <FaChalkboardTeacher size={24} className="text-purple-500" />
    },
    {
        title: 'Young Innovators Showcase',
        date: '2023-12-05',
        time: '3:00 PM - 5:00 PM',
        location: 'Community Center',
        description: 'Our students present their semester projects to the community.',
        icon: <FaAward size={24} className="text-red-500" />
    }
];

const faculty = [
    {
        name: 'John Smith',
        role: 'Director of AI Education',
        expertise: 'Child-centered AI pedagogy',
        icon: <FaUserTie size={24} className="text-blue-600" />
    },
    {
        name: 'Abubakar Siddique',
        role: 'AI and Robotics Engineer',
        expertise: 'Early childhood robotics',
        icon: <FaRobot size={24} className="text-red-600" />
    },
    {
        name: 'Babar Hussain',
        role: 'Lead STEM Educator',
        expertise: 'Hands-on science learning',
        icon: <FaMicroscope size={24} className="text-purple-600" />
    },
    {
        name: 'Abid Hussain',
        role: 'Agentic AI Leader',
        expertise: 'Hands-on AI learning',
        icon: <FaMicroscope size={24} className="text-purple-600" />
    },
    {
        name: 'Aneela Abubakar',
        role: 'Lead Child Care',
        expertise: 'Child Care and Quality Education',
        icon: <FaMicroscope size={24} className="text-purple-600" />
    },
    {
        name: 'Muhammad Younas Alam',
        role: 'English Languages Expert',
        expertise: 'Language learning and Communication',
        icon: <FaMicroscope size={24} className="text-purple-600" />
    }
];

export default function UnitedSchoolOfAI() {
    return (
        <div className={`min-h-screen ${poppins.className} bg-gradient-to-br from-red-900 via-gray-900 to-red-900 text-gray-100`}>
            {/* Header Section */}
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="mb-10"
                    >
                        <Image
                            src={Logo}
                            alt="USAI Logo"
                            width={120}
                            height={120}
                            className="mx-auto"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-amber-300 mb-6 leading-tight"
                    >
                        United School of Artificial Intelligence
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed"
                    >
                        Pioneering the future of AI education with world-class faculty and cutting-edge curriculum.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-10 flex flex-wrap justify-center gap-4"
                    >
                        <Link href="/usai/apply">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 transition-all"
                            >
                                <FaGraduationCap /> Apply Now
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </motion.header>

            {/* Main Content */}
            <main className="relative z-10 pb-24">
                {/* Stats Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-16 px-4 sm:px-6 lg:px-8"
                >
                    <div className="max-w-7xl mx-auto bg-black/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-900/50">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { value: "10", label: "Students Enrolled", color: "text-red-300" },
                                { value: "20", label: "Certified Educators", color: "text-amber-300" },
                                { value: "14", label: "Innovative Programs", color: "text-red-400" },
                                { value: "94%", label: "Parent Satisfaction", color: "text-amber-400" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="p-4"
                                >
                                    <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                                    <div className="text-gray-400 mt-2">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Programs Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="py-16 px-4 sm:px-6 lg:px-8"
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-amber-300 mb-4">
                                Our Learning Pathways
                            </h2>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Comprehensive AI education for all levels, from beginners to advanced researchers.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {learningRoadmap.map((program, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-red-900/30 hover:border-amber-500/50 transition-all duration-300 shadow-lg"
                                >
                                    <div className="text-4xl mb-4 flex justify-center">
                                        {program.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-center text-gray-100 mb-2">
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-300 text-center mb-4">
                                        {program.description}
                                    </p>
                                    <div className="mt-4">
                                        <h4 className="font-medium text-gray-200 mb-2">
                                            Skills Developed:
                                        </h4>
                                        <ul className="space-y-2">
                                            {program.skills.map((skill, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-2 text-gray-400"
                                                >
                                                    <FaLightbulb className="text-amber-400" /> {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Faculty Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="py-16 px-4 sm:px-6 lg:px-8"
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-red-300 mb-4">
                                Meet Our Educators
                            </h2>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Passionate professionals dedicated to nurturing young minds.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {faculty.map((member, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-red-900/30 hover:border-amber-500/50 transition-all duration-300 shadow-lg text-center"
                                >
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-red-900 to-amber-900 flex items-center justify-center mx-auto mb-4">
                                        {member.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-100">
                                        {member.name}
                                    </h3>
                                    <p className="text-amber-400 font-medium">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-300 mt-2">
                                        {member.expertise}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Testimonials Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="py-16 px-4 sm:px-6 lg:px-8"
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-amber-300 mb-4">
                                Parent Testimonials
                            </h2>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                Hear what families say about our programs.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-red-900/30 hover:border-amber-500/50 transition-all duration-300 shadow-lg"
                                >
                                    <FaHandsHelping
                                        size={40}
                                        className="text-amber-400 mb-4"
                                    />
                                    <p className="text-gray-300 italic mb-6">
                                        &quot;{testimonial.quote}&quot;
                                    </p>
                                    <div className="mt-auto">
                                        <p className="font-bold text-gray-100">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="py-16 px-4 sm:px-6 lg:px-8"
                >
                    <div className="max-w-4xl mx-auto text-center bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-red-900/50 shadow-xl">
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-amber-300 mb-6"
                        >
                            Ready to Join the Future of Education?
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                        >
                            Applications for the 2025-2026 academic year are now open. Limited spots available.
                        </motion.p>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <Link href="/usai/apply">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 transition-all"
                                >
                                    <FaGraduationCap /> Apply Now
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.section>
            </main>
        </div>    );
}