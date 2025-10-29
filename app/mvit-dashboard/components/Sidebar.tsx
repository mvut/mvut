// components/layout/Sidebar.tsx
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiHome,
    FiBook,
    FiUsers,
    FiSettings,
    FiHelpCircle,
    FiLogOut,
} from 'react-icons/fi';
import React from "react";
import {FaChalkboardTeacher} from "react-icons/fa";
import {FiBarChart } from 'react-icons/fi'; // Added missing icon

interface SidebarProps {
    isOpen: boolean;
    activeTab: string;
    onTabChange: (tab: string) => void;
}

// Change from default export to named export
export const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTab, onTabChange }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: FiHome },
        { id: 'courses', label: 'Courses', icon: FiBook },
        { id: 'students', label: 'Students', icon: FiUsers },
        { id: 'instructors', label: 'Instructors', icon: FaChalkboardTeacher },
        { id: 'analytics', label: 'Analytics', icon: FiBarChart }, // Fixed icon
        { id: 'settings', label: 'Settings', icon: FiSettings },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                        onClick={() => onTabChange(activeTab)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.div
                initial={false}
                animate={{
                    width: isOpen ? '280px' : '0px',
                    opacity: isOpen ? 1 : 0
                }}
                className="fixed lg:relative z-30 h-full bg-white shadow-xl lg:shadow-none overflow-hidden"
            >
                <div className="w-80 lg:w-64 h-full flex flex-col">
                    {/* Logo */}
                    <div className="p-6 border-b">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-3"
                        >
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">MVIT</span>
                            </div>
                            <span className="text-xl font-bold text-gray-800">MVIT LMS</span>
                        </motion.div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4">
                        <ul className="space-y-2">
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        transition: { delay: index * 0.1 }
                                    }}
                                >
                                    <button
                                        onClick={() => onTabChange(item.id)}
                                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                            activeTab === item.id
                                                ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                                                : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span className="font-medium">{item.label}</span>
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t">
                        <button className="flex items-center space-x-3 w-full px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <FiHelpCircle className="w-5 h-5" />
                            <span className="font-medium">Help & Support</span>
                        </button>
                        <button className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg">
                            <FiLogOut className="w-5 h-5" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

// Remove this line if using named export
// export default Sidebar;