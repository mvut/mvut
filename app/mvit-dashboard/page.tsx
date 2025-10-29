'use client'
import { motion } from 'framer-motion';
import {
    FiUsers,
    FiBook,
    FiBarChart,
    FiDollarSign,
    FiBell,
    FiSettings,
    FiMenu,
    FiSearch
} from 'react-icons/fi';
import {
    FaChalkboardTeacher,
    FaGraduationCap,
    FaBookReader
} from 'react-icons/fa';
import React, { useState } from 'react';
import { Sidebar } from '@/app/mvit-dashboard/components/Sidebar';
import { Header } from '@/app/mvit-dashboard/components/Header';
import StatCard from '@/app/mvit-dashboard/components/StatCard';
import RecentActivities from '@/app/mvit-dashboard/components/RecentActivities';
import ProgressOverview from '@/app/mvit-dashboard/components/ProgressOverview';
import CourseManagement from '@/app/mvit-dashboard/components/CourseManagement';

const MVITDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');

    const stats = [
        {
            title: 'Total Students',
            value: '2,847',
            icon: FiUsers,
            change: '+12%',
            color: 'blue'
        },
        {
            title: 'Total Courses',
            value: '156',
            icon: FiBook,
            change: '+8%',
            color: 'green'
        },
        {
            title: 'Active Instructors',
            value: '42',
            icon: FaChalkboardTeacher,
            change: '+5%',
            color: 'purple'
        },
        {
            title: 'Completion Rate',
            value: '78%',
            icon: FiBarChart,
            change: '+3%',
            color: 'orange'
        }
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar
                isOpen={sidebarOpen}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header
                    onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                    onSearch={(query) => console.log(query)}
                />

                <main className="flex-1 overflow-y-auto p-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {stats.map((stat, index) => (
                                <StatCard key={index} stat={stat} index={index} />
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2">
                                <RecentActivities />
                            </div>

                            <div>
                                <ProgressOverview />
                            </div>
                        </div>

                        <div className="mt-8">
                            <CourseManagement />
                        </div>
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

export default MVITDashboard;