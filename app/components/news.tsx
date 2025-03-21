'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaNewspaper, FaArrowRight, FaUsers, FaLightbulb, FaTrophy } from "react-icons/fa";
import Link from "next/link";

const NewsAndEvents = () => {
    return (
        <section className="min-h-[80vh] py-16 bg-gradient-to-br from-blue-600 via-green-500 to-teal-400 relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            {/* Shimmer Effect */}
            <motion.div
                className="absolute inset-0 bg-white/10 blur-[120px] animate-shimmer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ repeat: Infinity, duration: 3 }}
            ></motion.div>

            {/* Content */}
            <div className="relative z-10 px-4 md:px-16 lg:px-24 text-center">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-8"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    News & Events
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                    Stay updated with the latest news, announcements, and upcoming events at our institute. Explore workshops, achievements, and community activities.
                </motion.p>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1: Upcoming Events */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition-shadow duration-300 hover:scale-105"
                    >
                        <FaCalendarAlt className="text-4xl text-blue-600 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/events/science-fair" className="text-blue-600 hover:underline flex items-center">
                                    Annual Science Fair <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">December 15th, 2023</p>
                                <p className="text-gray-500 text-sm">Join us for a showcase of innovative projects and research.</p>
                            </li>
                            <li>
                                <Link href="/events/alumni-meet" className="text-blue-600 hover:underline flex items-center">
                                    Alumni Meet <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">January 5th, 2024</p>
                                <p className="text-gray-500 text-sm">Reconnect with alumni and share your success stories.</p>
                            </li>
                            <li>
                                <Link href="/events/cultural-fest" className="text-blue-600 hover:underline flex items-center">
                                    Cultural Fest <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">February 20th, 2024</p>
                                <p className="text-gray-500 text-sm">Celebrate diversity with music, dance, and art.</p>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Card 2: Latest News */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition-shadow duration-300 hover:scale-105"
                    >
                        <FaNewspaper className="text-4xl text-green-600 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Latest News</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/news/research-excellence" className="text-green-600 hover:underline flex items-center">
                                    Ranked #1 in Research <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">November 10th, 2023</p>
                                <p className="text-gray-500 text-sm">Recognized for groundbreaking research in AI and sustainability.</p>
                            </li>
                            <li>
                                <Link href="/news/new-campus" className="text-green-600 hover:underline flex items-center">
                                    New Campus Inauguration <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">October 25th, 2023</p>
                                <p className="text-gray-500 text-sm">State-of-the-art facilities for students and faculty.</p>
                            </li>
                            <li>
                                <Link href="/news/scholarship-announcement" className="text-green-600 hover:underline flex items-center">
                                    Scholarship Announcement <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">October 15th, 2023</p>
                                <p className="text-gray-500 text-sm">Merit-based scholarships for deserving students.</p>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Card 3: Workshops */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition-shadow duration-300 hover:scale-105"
                    >
                        <FaCalendarAlt className="text-4xl text-teal-600 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Workshops</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/workshops/ai-workshop" className="text-teal-600 hover:underline flex items-center">
                                    AI Workshop <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">January 10th, 2024</p>
                                <p className="text-gray-500 text-sm">Learn the latest trends in artificial intelligence.</p>
                            </li>
                            <li>
                                <Link href="/workshops/data-science" className="text-teal-600 hover:underline flex items-center">
                                    Data Science Workshop <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">February 5th, 2024</p>
                                <p className="text-gray-500 text-sm">Hands-on training in data analysis and visualization.</p>
                            </li>
                            <li>
                                <Link href="/workshops/cybersecurity" className="text-teal-600 hover:underline flex items-center">
                                    Cybersecurity Workshop <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">March 15th, 2024</p>
                                <p className="text-gray-500 text-sm">Explore the world of cybersecurity and ethical hacking.</p>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Card 4: Achievements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                        viewport={{ once: true }}
                        className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition-shadow duration-300 hover:scale-105"
                    >
                        <FaTrophy className="text-4xl text-purple-600 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Achievements</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/achievements/innovation-award" className="text-purple-600 hover:underline flex items-center">
                                    Innovation Award <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">November 20th, 2023</p>
                                <p className="text-gray-500 text-sm">Won the National Innovation Award for 2023.</p>
                            </li>
                            <li>
                                <Link href="/achievements/sports-championship" className="text-purple-600 hover:underline flex items-center">
                                    Sports Championship <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">October 30th, 2023</p>
                                <p className="text-gray-500 text-sm">Secured first place in inter-university sports.</p>
                            </li>
                            <li>
                                <Link href="/achievements/research-grant" className="text-purple-600 hover:underline flex items-center">
                                    Research Grant <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">October 10th, 2023</p>
                                <p className="text-gray-500 text-sm">Received a $1M grant for renewable energy research.</p>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Card 5: Community Activities */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                        viewport={{ once: true }}
                        className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition-shadow duration-300 hover:scale-105"
                    >
                        <FaUsers className="text-4xl text-orange-600 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Community Activities</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/community/clean-drive" className="text-orange-600 hover:underline flex items-center">
                                    Clean & Green Drive <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">December 10th, 2023</p>
                                <p className="text-gray-500 text-sm">Join us in making our campus eco-friendly.</p>
                            </li>
                            <li>
                                <Link href="/community/blood-donation" className="text-orange-600 hover:underline flex items-center">
                                    Blood Donation Camp <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">January 20th, 2024</p>
                                <p className="text-gray-500 text-sm">Donate blood and save lives.</p>
                            </li>
                            <li>
                                <Link href="/community/mentorship-program" className="text-orange-600 hover:underline flex items-center">
                                    Mentorship Program <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">February 1st, 2024</p>
                                <p className="text-gray-500 text-sm">Guide and inspire the next generation.</p>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Card 6: Innovation Hub */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
                        viewport={{ once: true }}
                        className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition-shadow duration-300 hover:scale-105"
                    >
                        <FaLightbulb className="text-4xl text-yellow-600 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Innovation Hub</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/innovation/startup-incubation" className="text-yellow-600 hover:underline flex items-center">
                                    Startup Incubation <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">Ongoing</p>
                                <p className="text-gray-500 text-sm">Support for budding entrepreneurs.</p>
                            </li>
                            <li>
                                <Link href="/innovation/hackathon" className="text-yellow-600 hover:underline flex items-center">
                                    Hackathon 2024 <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">March 10th, 2024</p>
                                <p className="text-gray-500 text-sm">Code, collaborate, and innovate.</p>
                            </li>
                            <li>
                                <Link href="/innovation/tech-talks" className="text-yellow-600 hover:underline flex items-center">
                                    Tech Talks <FaArrowRight className="ml-2" />
                                </Link>
                                <p className="text-gray-600 mt-1">Monthly</p>
                                <p className="text-gray-500 text-sm">Insights from industry leaders.</p>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NewsAndEvents;