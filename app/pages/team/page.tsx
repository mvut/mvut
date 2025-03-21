'use client'
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TeamPage = () => {
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

    const teamMembers = [
        {
            name: 'Muhammad Shaaban',
            role: 'Instructor PHP Frameworks',
            bio: 'Fullstack Web Developer',
            image: '/faculty/mst.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/arshad-iqbal',
                github: 'https://github.com/arshad-iqbal',
                twitter: 'https://twitter.com/arshad_iqbal',
            },
        },
        {
            name: 'Ali Ijaz',
            role: 'Computer Science Education',
            bio: 'Expert in Computer Science and IT Education',
            image: '/faculty/ali.png',
            links: {
                linkedin: 'https://linkedin.com/in/abbas-muhammad',
                github: 'https://github.com/abbas-muhammad',
                twitter: 'https://twitter.com/abbas_muhammad',
            },
        },
        {
            name: 'Daha Qalbi',
            role: 'Instructor MERN Stack',
            bio: 'Specializes in MERN Stack Applications',
            image: '/faculty/daha.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/abid-hussain',
                github: 'https://github.com/abid-hussain',
                twitter: 'https://twitter.com/abid_hussain',
            },
        },
        {
            name: 'Muhammad Awais',
            role: 'Instructor Tailwind CSS ',
            bio: 'Dedicated to UX/UI Development',
            image: '/faculty/awais.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Abbas Muhammad',
            role: 'Instructor SE & Databases',
            bio: 'Dedicated in Teaching Databases and Information Retrieval Techniques',
            image: '/faculty/mabbas.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Safia',
            role: 'Instructor Computer Education',
            bio: 'Dedicated to Educate Computer Fundamentals',
            image: '/faculty/dummy.png',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'M. Rizwan Khalid',
            role: 'Instructor Information Technology',
            bio: 'Dedicated to Educate Emerging Technologies',
            image: '/faculty/rizwan.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Muhammad Hussain',
            role: 'Instructor Computer Graphics',
            bio: 'Dedicated to Graphic Design and Development Tools',
            image: '/faculty/hussain.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Muhammad Arshad',
            role: 'Instructor Software Engineering',
            bio: 'Expert in Software Performance Evaluation and Testing',
            image: '/faculty/arshad.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Ghulam Abbas',
            role: 'Instructor Programming & Algorithms',
            bio: 'Dedicated to Teach Programming Languages',
            image: '/faculty/gabbas2.jpeg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Amir Shahzad',
            role: 'Instructor Computational Algorithms',
            bio: 'Dedicated to Think and Simulate Computational Algorithms',
            image: '/faculty/amir.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Muhammad Younas Alam',
            role: 'Instructor English Language',
            bio: 'Dedicated for Teaching Linguistics',
            image: '/faculty/younis.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Sabar Hussain',
            role: 'Instructor English Literature',
            bio: 'Dedicated for Teaching Literature and Criticism',
            image: '/faculty/sabar.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Rashid Zafar',
            role: 'Instructor Marketing Education',
            bio: 'Expert in Business and Entrepreneurship',
            image: '/faculty/rashid.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Kamran Shareef',
            role: 'Instructor Business Management',
            bio: 'Expert in Marketing, Sales and Management',
            image: '/faculty/kamran.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Maqsood Ahmad',
            role: 'Instructor Commerce',
            bio: 'Expert in eCommerce and Entrepreneurship',
            image: '/faculty/maqsood.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Sarfraz Ahmad',
            role: 'Instructor Sociology',
            bio: 'Expert in Law and Social Activities',
            image: '/faculty/SARFRAZ.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Yasir Ali',
            role: 'Instructor Educational Studies',
            bio: 'Educational Thoughts and Leadership Expert',
            image: '/faculty/yasir.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Muhammad Yasir',
            role: 'Instructor Political Science',
            bio: 'Expert in Teaching Politics',
            image: '/faculty/yassri.jpeg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Abdul Hameed',
            role: 'Instructor Islamic Studies',
            bio: 'Expert in Teaching Islamic law and Education',
            image: '/faculty/hameed.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Muhammad Ikram',
            role: 'Instructor Urdu Language',
            bio: 'Expert in Urdu English Translation',
            image: '/faculty/ikram.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Sohail Ahmed',
            role: 'Instructor R&D, Simulation',
            bio: 'Expert in Computer Networks and Research',
            image: '/faculty/sohail.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Ghulam Muhammad',
            role: 'Instructor Amazon VA',
            bio: 'Expert in Amazon Store',
            image: '/faculty/gami.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },
        {
            name: 'Muhammad Haris',
            role: 'Instructor Frontend Design',
            bio: 'Expert in Adobe Tools',
            image: '/faculty/haris.jpg',
            links: {
                linkedin: 'https://linkedin.com/in/sohail-ahmed',
                github: 'https://github.com/sohail-ahmed',
                twitter: 'https://twitter.com/sohail_ahmed',
            },
        },

    ];

    return (
        <div className="container flex flex-col py-20 bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen">
            {/* Header Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 leading-tight"
                >
                    Meet Our Team
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl lg:text-2xl mt-4 text-gray-700 leading-relaxed"
                >
                    A group of passionate individuals dedicated to innovation, education, and excellence.
                </motion.p>
            </motion.div>

            {/* Team Members Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-4"
            >
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Profile Image */}
                        <div className="border-4 border-indigo-500 rounded-full overflow-hidden w-36 h-36">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={150}
                                height={150}
                                className="rounded-full object-cover"
                            />
                        </div>

                        {/* Member Details */}
                        <div className="text-center">
                            <h2 className="text-lg font-bold text-indigo-900">{member.name}</h2>
                            <p className="text-sm text-gray-600">{member.role}</p>
                            <p className="text-xs text-gray-500 mt-2">{member.bio}</p>

                            {/* Social Links */}
                            <div className="flex items-center justify-center gap-4 mt-4">
                                <a
                                    href={member.links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:text-indigo-800 transition-all duration-300"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                                <a
                                    href={member.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-gray-900 transition-all duration-300"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href={member.links.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                                >
                                    <FaTwitter size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TeamPage;