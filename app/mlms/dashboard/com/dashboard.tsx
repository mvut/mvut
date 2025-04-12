'use client';

import { motion } from "framer-motion";
import { FiBell } from "react-icons/fi";
import { useEffect, useState } from "react";

type Notification = {
    id: string;
    message: string;
    time: string;
    unread: boolean;
};

type StudentProfile = {
    name: string;
    studentId: string;
    email: string;
    program: string;
    semester: string;
    cgpa: number;
    avatar: string;
};

type StatCard = {
    label: string;
    value: string | number;
    color: "green" | "yellow" | "purple" | "blue"; // Limited to known colors
};

export default function DashboardComponent() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const studentProfile: StudentProfile = {
        name: "Alex Johnson",
        studentId: "STU2023001",
        email: "alex.johnson@university.edu",
        program: "Bachelor of Computer Science",
        semester: "Fall 2023",
        cgpa: 3.75,
        avatar: "",
    };

    const notifications: Notification[] = [
        { id: "n1", message: "New discussion post in CS 101", time: "2 hours ago", unread: true },
        { id: "n2", message: "Assignment 2 graded", time: "1 day ago", unread: false },
    ];

    const stats: StatCard[] = [
        { label: "CGPA", value: studentProfile.cgpa, color: "green" },
        { label: "Notifications", value: notifications.filter(n => n.unread).length, color: "yellow" },
    ];

    // Prevent hydration errors by only rendering on client side
    if (!isClient) {
        return null;
    }

    return (
        <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
                {stats.map((stat, i) => {
                    // Map color to actual Tailwind classes to avoid dynamic class issues
                    const colorClasses = {
                        green: {
                            bg: "bg-green-500/10",
                            border: "border-green-500/20",
                            text: "text-green-400"
                        },
                        yellow: {
                            bg: "bg-yellow-500/10",
                            border: "border-yellow-500/20",
                            text: "text-yellow-400"
                        },
                        purple: {
                            bg: "bg-purple-500/10",
                            border: "border-purple-500/20",
                            text: "text-purple-400"
                        },
                        blue: {
                            bg: "bg-blue-500/10",
                            border: "border-blue-500/20",
                            text: "text-blue-400"
                        }
                    };

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-4 ${colorClasses[stat.color].bg} rounded-lg border ${colorClasses[stat.color].border} backdrop-blur-sm`}
                        >
                            <p className={`text-2xl font-bold ${colorClasses[stat.color].text}`}>{stat.value}</p>
                            <p className="text-sm text-white/70">{stat.label}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Notifications */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-glass-inner p-6 rounded-lg border border-white/10"
            >
                <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
                    <FiBell className="mr-2 text-purple-400" /> Notifications
                </h2>
                {notifications.map((n) => (
                    <div
                        key={n.id}
                        className={`p-3 rounded-lg mb-2 transition-all duration-300 ${
                            n.unread
                                ? "bg-purple-500/10 border border-purple-500/20 shadow-purple-glow-sm"
                                : "bg-white/5 hover:bg-white/10"
                        }`}
                    >
                        <p className="text-sm text-white">{n.message}</p>
                        <p className="text-xs text-white/50">{n.time}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}