'use client';

import { useEffect, useState } from "react";
import { FiUser, FiBook, FiAward, FiLogOut, FiCalendar, FiFolder, FiStar } from "react-icons/fi";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MVITLogo from "@/public/mvutflame.png";
import { motion } from "framer-motion";
import Courses from "@/app/mlms/dashboard/com/courses";
import GradesBook from "@/app/mlms/dashboard/com/grades";
import CalendarComponent from "@/app/mlms/dashboard/com/calendar";
import ResourcesComponent from "./com/resources";
import ProfileComponent from "@/app/mlms/dashboard/com/profile";
import DashboardComponent from "@/app/mlms/dashboard/com/dashboard";

type StudentProfile = {
    name: string;
    studentId: string;
    email: string;
    program: string;
    semester: string;
    cgpa: number;
    avatar: string;
};

type NavItem = {
    tab: string;
    icon: React.ReactNode;
    label: string;
};

const studentProfile: StudentProfile = {
    name: "Alex Johnson",
    studentId: "STU2023001",
    email: "alex.johnson@university.edu",
    program: "Bachelor of Computer Science",
    semester: "Fall 2023",
    cgpa: 3.75,
    avatar: "",
};

const navItems: NavItem[] = [
    { tab: "dashboard", icon: <FiStar />, label: "Dashboard" },
    { tab: "courses", icon: <FiBook />, label: "My Courses" },
    { tab: "grades", icon: <FiAward />, label: "Grade Book" },
    { tab: "calendar", icon: <FiCalendar />, label: "Calendar" },
    { tab: "resources", icon: <FiFolder />, label: "Resources" },
    { tab: "profile", icon: <FiUser />, label: "Profile" },
];

const StudentDashboard = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [isClient, setIsClient] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
        if (status === "unauthenticated") router.push("/mlms/login");
    }, [status, router]);

    if (status === "loading" || !isClient) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-space-gradient text-white">
                <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 mb-6">
                        <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping"></div>
                        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    </div>
                    <span className="text-white text-lg font-medium tracking-wider">LOADING DASHBOARD...</span>
                </div>
            </div>
        );
    }

    const renderActiveTab = () => {
        switch (activeTab) {
            case "courses":
                return <Courses />;
            case "grades":
                return <GradesBook />;
            case "calendar":
                return <CalendarComponent />;
            case "resources":
                return <ResourcesComponent />;
            case "profile":
                return <ProfileComponent />;
            case "dashboard":
            default:
                return <DashboardComponent />;
        }
    };

    return (
        <div className="min-h-screen bg-space-gradient text-white relative overflow-hidden">
            {/* Cosmic Background Animation */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {/* Stars */}
                <div className="absolute inset-0 bg-starfield opacity-80"></div>

                {/* Nebula Clouds */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/30 rounded-full filter blur-[100px] animate-float-slow"></div>
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-900/30 rounded-full filter blur-[80px] animate-float-medium"></div>

                {/* Pulsing Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-900/30 to-transparent opacity-50"></div>

                {/* Floating Particles */}
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/10"
                        style={{
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Header */}
            <header className="bg-glass-header backdrop-blur-xl shadow-cosmic sticky top-0 z-10 border-b border-white/10">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="relative w-12 h-12">
                            <Image
                                src={MVITLogo}
                                alt="MVIT Logo"
                                fill
                                className="object-contain transition-transform duration-500 hover:rotate-6"
                                priority
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 tracking-tight">
                                MVIT PORTAL
                            </h1>
                            <p className="text-sm text-white/70">Student Dashboard</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative text-sm font-medium">{studentProfile.name}</span>
                        </div>
                        <button
                            onClick={() => signOut()}
                            className="flex items-center text-red-400 hover:text-white transition-all duration-300 group relative"
                        >
                            <span className="absolute -inset-1 bg-red-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative flex items-center">
                                <FiLogOut className="mr-2" /> Logout
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex container mx-auto px-6 py-8 gap-8 relative z-0">
                {/* Sidebar */}
                <motion.aside
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="w-72 bg-glass rounded-xl shadow-cosmic p-6 flex flex-col"
                >
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="relative w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group">
                            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <FiUser size={24} className="text-purple-400 z-10" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-white">{studentProfile.name}</h3>
                            <p className="text-xs text-white/60">{studentProfile.studentId}</p>
                        </div>
                    </div>
                    <nav className="space-y-2">
                        {navItems.map(({ tab, icon, label }) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group ${
                                    activeTab === tab
                                        ? "bg-purple-500/20 text-purple-400 shadow-purple-glow"
                                        : "hover:bg-white/5 text-white/80 hover:text-white"
                                }`}
                            >
                                <span className={`transition-colors duration-300 ${activeTab === tab ? "text-purple-400" : "text-white/60 group-hover:text-white"}`}>
                                    {icon}
                                </span>
                                <span>{label}</span>
                            </button>
                        ))}
                    </nav>
                </motion.aside>

                {/* Main Content */}
                <main className="flex-1 bg-glass rounded-xl shadow-cosmic p-8 overflow-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="text-3xl font-bold text-white mb-6"
                    >
                        {activeTab === "dashboard" ? "Dashboard" : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                    </motion.h1>

                    {renderActiveTab()}
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-glass-header py-4 text-center text-white/50 text-sm border-t border-white/10">
                <p>© {new Date().getFullYear()} Mansha Virtual Institute of Technologies. All rights reserved.</p>
            </footer>

            <style jsx global>{`
                .bg-space-gradient {
                    background: radial-gradient(ellipse at bottom, #0F172A 0%, #020617 100%);
                }

                .bg-glass {
                    background: rgba(15, 23, 42, 0.7);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }

                .bg-glass-header {
                    background: rgba(15, 23, 42, 0.8);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                }

                .bg-glass-inner {
                    background: rgba(30, 41, 59, 0.5);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                }

                .shadow-cosmic {
                    box-shadow: 0 0 20px rgba(139, 92, 246, 0.1), 0 0 40px rgba(124, 58, 237, 0.1);
                }

                .shadow-purple-glow {
                    box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.3);
                }

                .shadow-purple-glow-sm {
                    box-shadow: 0 0 0 1px rgba(167, 139, 250, 0.3);
                }

                .bg-starfield {
                    background-image:
                            radial-gradient(white, rgba(255,255,255,.2) 1px, transparent 1px),
                            radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 1px),
                            radial-gradient(white, rgba(255,255,255,.1) 1px, transparent 1px);
                    background-size: 200px 200px, 300px 300px, 400px 400px;
                    background-position: 0 0, 40px 60px, 130px 270px;
                }

                @keyframes float {
                    0% {
                        transform: translateY(0) translateX(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) translateX(20px);
                        opacity: 0;
                    }
                }

                @keyframes float-slow {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(20px, 20px);
                    }
                }

                @keyframes float-medium {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(-15px, -15px);
                    }
                }

                .animate-float-slow {
                    animation: float-slow 15s ease-in-out infinite;
                }

                .animate-float-medium {
                    animation: float-medium 10s ease-in-out infinite;
                }

                @keyframes twinkle {
                    0%, 100% {
                        opacity: 0.2;
                    }
                    50% {
                        opacity: 1;
                    }
                }

                .animate-twinkle {
                    animation: twinkle 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default StudentDashboard;