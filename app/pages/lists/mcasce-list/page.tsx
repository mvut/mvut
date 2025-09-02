"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["latin"],
});

// Sample candidate data (replace with API call in a real application)
interface Candidate {
    id: string;
    name: string;
    program: string;
    country: string;
}

const sampleCandidates: Candidate[] = [
    {
        id: "25001",
        name: "Muhammad Abdullah",
        program: "Kindergarten STEM Entrepreneurs",
        country: "Pakistan",
    },
    {
        id: "25002",
        name: "Muhammad Haseeb",
        program: "Kindergarten STEM Entrepreneurs",
        country: "Pakistan",
    },
    {
        id: "25003",
        name: "Muhammad Waseem Ilyas",
        program: "MCASCE Certification",
        country: "Pakistan",
    },
    {
        id: "25004",
        name: "Muhammad Haroon",
        program: "MCASCE Certification",
        country: "Pakistan",
    },{
        id: "25005",
        name: "Muhammad Abrar",
        program: "MCASCE Certification",
        country: "Pakistan",
    },
];

export default function CandidatesList() {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Simulate fetching data from an API
        setCandidates(sampleCandidates);
    }, []);

    const filteredCandidates = candidates.filter(
        (candidate) =>
            candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            candidate.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            candidate.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
            candidate.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const tableRowVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            className={`${roboto.className} py-20 relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-black via-[#1a0000] to-[#2d0000]`}
        >
            {/* Animated particles - Only render on client side */}
            {isClient && (
                <div className="absolute inset-0 z-0">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-red-600 rounded-full opacity-30"
                            initial={{
                                x: Math.random() * 100 + "vw",
                                y: Math.random() * 100 + "vh",
                            }}
                            animate={{
                                x: [null, Math.random() * 100 + "vw"],
                                y: [null, Math.random() * 100 + "vh"],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    ))}
                </div>
            )}

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                       List of Candidates Applied for MCASCE Certification Program
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Career Building Certification by{" "}
                        <span className="font-semibold text-red-400">MVIT</span>
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="relative max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Search by ID, name, program, or country"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-900/80 text-gray-200 rounded-xl border border-gray-800 focus:outline-none focus:border-red-600 placeholder-gray-500"
                        />
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                </motion.div>

                {/* Candidates Table */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-800"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                            <tr className="bg-gray-800/50 text-gray-300">
                                <th className="px-6 py-4 font-semibold">Application ID</th>
                                <th className="px-6 py-4 font-semibold">Name</th>
                                <th className="px-6 py-4 font-semibold">Program</th>
                                <th className="px-6 py-4 font-semibold">Country</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredCandidates.length > 0 ? (
                                filteredCandidates.map((candidate, index) => (
                                    <motion.tr
                                        key={candidate.id}
                                        variants={tableRowVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors"
                                    >
                                        <td className="px-6 py-4 text-gray-300">{candidate.id}</td>
                                        <td className="px-6 py-4 text-gray-300">{candidate.name}</td>
                                        <td className="px-6 py-4 text-gray-300">{candidate.program}</td>
                                        <td className="px-6 py-4 text-gray-300">{candidate.country}</td>
                                    </motion.tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="px-6 py-4 text-center text-gray-400">
                                        No candidates found
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Back to Programs Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-8 text-center"
                >
                    <Link
                        href="/pages/study"
                        className="inline-flex items-center text-red-400 font-semibold hover:text-red-300 transition-colors"
                    >
                        Back to Programs <FaArrowRight className="ml-2 text-sm" />
                    </Link>
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
            background-size: 200% 200%;
          }
          50% {
            background-position: 100% 50%;
            background-size: 200% 200%;
          }
        }
      `}</style>
        </section>
    );
}