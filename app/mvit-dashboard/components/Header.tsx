// components/layout/Header.tsx
import { motion } from 'framer-motion';
import { FiSearch, FiBell, FiSettings, FiMenu } from 'react-icons/fi';
import React from 'react';

interface HeaderProps {
    onMenuToggle: () => void;
    onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle, onSearch }) => {
    return (
        <header className="bg-white shadow-sm border-b z-10">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={onMenuToggle}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <FiMenu className="w-5 h-5 text-gray-600" />
                    </button>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '300px' }}
                        className="relative"
                    >
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search courses, students, instructors..."
                            onChange={(e) => onSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </motion.div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <FiBell className="w-5 h-5 text-gray-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <FiSettings className="w-5 h-5 text-gray-600" />
                    </motion.button>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 cursor-pointer"
                    >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">A</span>
                        </div>
                        <div className="hidden md:block">
                            <p className="text-sm font-medium text-gray-900">Admin User</p>
                            <p className="text-xs text-gray-500">Administrator</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </header>
    );
};