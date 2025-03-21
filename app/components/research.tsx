'use client';
import { motion } from "framer-motion";
import { BsLightbulbFill, BsCodeSlash, BsGraphUp, BsRocketTakeoff, BsCheckCircle } from "react-icons/bs";
import { Montserrat } from "next/font/google";
import Link from "next/link";

// Load Google Font
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function ResearchComponent() {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger child animations
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 12 }, // Smooth spring effect
        },
    };

    return (
        <div className={`w-full py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 ${montserrat.className}`}>
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-bold text-center text-indigo-900"
            >
                <BsLightbulbFill size={40} className="inline-block mr-2 text-yellow-500" />
                Career Development and Mission
            </motion.h2>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="py-6 px-4 md:px-8 lg:px-16 text-center text-lg leading-relaxed text-gray-700"
            >
                At MVIT, we ignite curiosity and illuminate possibilities.
                Our mission is to empower individuals by offering a diverse range of online and on-site career-building opportunities and lifelong learning programs designed to meet the evolving demands of the global workforce. We specialize in cutting-edge fields such as <b>Computer Science</b>, <b>Information Technology</b>, <b>Business Management</b>, <b>Custom Software Development</b>, and <b>Web Applications</b>, equipping our students with the technical expertise and practical skills needed to excel in today’s digital economy. Beyond technical knowledge, we emphasize the importance of <b>Communication Skills</b>, <b>Leadership Training</b>, and <b>Research Methodologies</b>, fostering well-rounded professionals who can lead, innovate, and adapt in any industry. Our programs are tailored to provide hands-on experience, ensuring that learners not only understand theoretical concepts but also gain the confidence to apply them in real-world scenarios. Whether you&apos;re looking to upskill, transition careers, or launch a new venture, MVIT offers a supportive and dynamic environment to help you achieve your goals. With a focus on affordability, accessibility, and excellence, we are committed to transforming lives through education and creating a global community of lifelong learners. Join us and take the next step toward a brighter, more fulfilling future.            </motion.p>

            {/* Areas of Expertise */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-16 items-center gap-8 mt-8"
            >
                {/* Artificial Intelligence */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-1/3"
                >
                    <BsCodeSlash size={40} className="text-indigo-600 mb-4" />
                    <h2 className="text-xl font-bold text-indigo-900">Artificial Intelligence</h2>
                    <p className="text-sm text-gray-600 text-center">
                        Unlock the future with our comprehensive suite of emerging AI courses.
                    </p>
                    <ul className="mt-4 space-y-2 text-left">
                        <li className="flex items-center">
                            <BsCheckCircle className="text-green-600 mr-2" />
                            AI Agents
                        </li>
                        <li className="flex items-center">
                            <BsCheckCircle className="text-green-600 mr-2" />
                            Prompt Engineering
                        </li>
                        <li className="flex items-center">
                            <BsCheckCircle className="text-green-600 mr-2" />
                            Machine Learning
                        </li>
                    </ul>
                </motion.div>

                {/* Computer Science and IT */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-1/3"
                >
                    <BsGraphUp size={40} className="text-green-600 mb-4" />
                    <h2 className="text-xl font-bold text-indigo-900">Computer Science & IT</h2>
                    <p className="text-sm text-gray-600 text-center">
                        Explore over 25+ diverse fields of professional growth and scientific inquiry.
                    </p>
                    <ul className="mt-4 space-y-2 text-left">
                        <li className="flex items-center">
                            <BsCheckCircle className="text-green-600 mr-2" />
                            Software Engineering
                        </li>
                        <li className="flex items-center">
                            <BsCheckCircle className="text-green-600 mr-2" />
                            Cybersecurity
                        </li>
                        <li className="flex items-center">
                            <BsCheckCircle className="text-green-600 mr-2" />
                            Cloud Computing
                        </li>
                    </ul>
                </motion.div>

                {/* Research and Development */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-1/3"
                >
                    <BsRocketTakeoff size={40} className="text-red-600 mb-4" />
                    <h2 className="text-xl font-bold text-indigo-900">Research & Development</h2>
                    <p className="text-sm text-gray-600 text-center">
                        Go from beginner to confident pro in emerging technologies with our R&D programs.
                    </p>
                    <ul className="mt-4 space-y-2 text-left">
                        <li className="flex items-center">
                            <BsCheckCircle className="text-green-600 mr-2" />
                            Data Science
                        </li>
                        <li className="flex items-center">
                            <BsCheckCircle className="text-green-600 mr-2" />
                            Blockchain
                        </li>
                        <li className="flex items-center">
                            <BsCheckCircle className="text-green-600 mr-2" />
                            Quantum Computing
                        </li>
                    </ul>
                </motion.div>
            </motion.div>

            {/* Affordable Fee Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 px-4 md:px-8 lg:px-16"
            >
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <h2 className="text-3xl font-bold text-indigo-900 mb-4">Affordable Fees</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        We believe in making quality education accessible to everyone. Our programs are designed to be affordable without compromising on quality.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-indigo-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-indigo-900">Kindergarten (K.G.) STEM Entrepreneurs</h3>
                            <p className="text-gray-700 mt-2">$20/month</p>
                            <ul className="mt-4 space-y-2 text-left">
                                <li className="flex items-center">
                                    <BsCheckCircle className="text-green-600 mr-2" />
                                    Admission Fee $50
                                </li>
                                <li className="flex items-center">
                                    <BsCheckCircle className="text-green-600 mr-2" />
                                    Duration 60 Weeks
                                </li>
                            </ul>
                        </div>
                        <div className="bg-indigo-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-indigo-900">Mansha Certified AI Agents Developer (MCAAD)</h3>
                            <p className="text-gray-700 mt-2">$20/month</p>
                            <ul className="mt-4 space-y-2 text-left">
                                <li className="flex items-center">
                                    <BsCheckCircle className="text-green-600 mr-2" />
                                    Admission Fee $50
                                </li>
                                <li className="flex items-center">
                                    <BsCheckCircle className="text-green-600 mr-2" />
                                    Duration 72 Weeks
                                </li>
                            </ul>
                        </div>
                        <div className="bg-indigo-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-indigo-900">Mansha Robotics and Software Engineer (MRSE)</h3>
                            <p className="text-gray-700 mt-2">$20/month</p>
                            <ul className="mt-4 space-y-2 text-left">
                                <li className="flex items-center">
                                    <BsCheckCircle className="text-green-600 mr-2" />
                                    Admission Fee $50
                                </li>
                                <li className="flex items-center">
                                    <BsCheckCircle className="text-green-600 mr-2" />
                                    Duration 96 Weeks
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="mt-8 px-8 py-3 bg-indigo-900 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300">
                        <Link href={'/pages/apply'} target={'_blank'}>Apply Now</Link>
                    </button>
                </div>
            </motion.div>
        </div>
    );
}