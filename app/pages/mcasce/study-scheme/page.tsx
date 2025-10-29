'use client';
import React from 'react';
import Link from 'next/link';

interface Course {
    code: string;
    title: string;
    category: 'fundamental' | 'frontend' | 'backend' | 'ai' | 'capstone';
    description?: string;
    duration?: string;
    level: 'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6';
}

interface Module {
    id: string;
    title: string;
    level: 'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6';
    description: string;
    courses: number;
    status: 'current' | 'upcoming' | 'future';
    focus: string[];
}

const Module1Page: React.FC = () => {
    const modules: Module[] = [
        {
            id: 'fullstack',
            title: 'Full-Stack Software Engineer',
            level: 'M1',
            description: 'Comprehensive full-stack development with AI integration',
            courses: 12,
            status: 'current',
            focus: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'APIs']
        },
        {
            id: 'data-science',
            title: 'Data Science Analyst',
            level: 'M2',
            description: 'Statistical analysis, data visualization, and predictive modeling',
            courses: 8,
            status: 'upcoming',
            focus: ['Python', 'Pandas', 'Matplotlib', 'Statistics', 'Machine Learning']
        },
        {
            id: 'ml-systems',
            title: 'Machine Learning Systems Engineer',
            level: 'M3',
            description: 'MLOps, model deployment, and scalable machine learning systems',
            courses: 10,
            status: 'future',
            focus: ['TensorFlow', 'PyTorch', 'Docker', 'Kubernetes', 'MLOps']
        },
        {
            id: 'deep-learning',
            title: 'Deep Learning Research Engineer',
            level: 'M4',
            description: 'Neural networks, computer vision, and advanced AI research',
            courses: 12,
            status: 'future',
            focus: ['Neural Networks', 'Computer Vision', 'NLP', 'Research Methods']
        },
        {
            id: 'ai-architect',
            title: 'AI Solutions Architect',
            level: 'M5',
            description: 'Enterprise AI solutions design and architecture',
            courses: 9,
            status: 'future',
            focus: ['System Design', 'Cloud Architecture', 'Enterprise AI', 'Security']
        },
        {
            id: 'cloud-ai',
            title: 'Cloud AI Infrastructure Engineer',
            level: 'M6',
            description: 'Cloud platforms, distributed systems, and AI infrastructure',
            courses: 11,
            status: 'future',
            focus: ['AWS', 'Azure', 'GCP', 'Distributed Systems', 'Infrastructure']
        }
    ];

    const courses: Course[] = [
        // M1 Courses
        {
            code: 'MRSE-201',
            title: 'HTML Fundamentals',
            category: 'fundamental',
            description: 'Learn the building blocks of web development with HTML5',
            duration: '2 weeks',
            level: 'M1'
        },
        {
            code: 'MRSE-206',
            title: 'Tailwind CSS',
            category: 'frontend',
            description: 'Master utility-first CSS framework for rapid UI development',
            duration: '2 weeks',
            level: 'M1'
        },
        {
            code: 'MRSE-103',
            title: 'Introduction to JavaScript Programming',
            category: 'fundamental',
            description: 'Core JavaScript concepts and programming fundamentals',
            duration: '3 weeks',
            level: 'M1'
        },
        {
            code: 'MRSE-404',
            title: 'Introduction to Python Programming',
            category: 'backend',
            description: 'Python basics for backend development and scripting',
            duration: '3 weeks',
            level: 'M1'
        },
        {
            code: 'MRSE-403',
            title: 'React Programming',
            category: 'frontend',
            description: 'Modern React development with hooks and components',
            duration: '3 weeks',
            level: 'M1'
        },
        {
            code: 'MRSE-207',
            title: 'Next.js and Vercel Deployment',
            category: 'frontend',
            description: 'Full-stack React framework with production deployment',
            duration: '2 weeks',
            level: 'M1'
        },
        {
            code: 'MRSE-307',
            title: 'Structured Query Language',
            category: 'backend',
            description: 'Database design and SQL for data management',
            duration: '2 weeks',
            level: 'M1'
        },
        {
            code: 'MRSE-502',
            title: 'API Design & Development',
            category: 'backend',
            description: 'RESTful API design and implementation',
            duration: '3 weeks',
            level: 'M1'
        },
        {
            code: 'MRSE-504',
            title: 'Secure Authentication Systems',
            category: 'backend',
            description: 'Authentication, authorization, and security best practices',
            duration: '2 weeks',
            level: 'M1'
        },
        {
            code: 'MRSE-701',
            title: 'AI Agent Development with N8N',
            category: 'ai',
            description: 'Workflow automation and AI agent creation using N8N',
            duration: '2 weeks',
            level: 'M1'
        },
        {
            code: 'MRSE-702',
            title: 'Building Agents with OpenAI SDK',
            category: 'ai',
            description: 'AI agent development using OpenAI APIs and SDK',
            duration: '3 weeks',
            level: 'M1'
        },
        {
            code: 'MRSE-901',
            title: 'Capstone: Build & Deploy a Real-World Project',
            category: 'capstone',
            description: 'End-to-end project development and deployment',
            duration: '4 weeks',
            level: 'M1'
        },
    ];

    const getLevelColor = (level: Course['level']): string => {
        const colors = {
            M1: 'bg-blue-100 text-blue-800 border-blue-300',
            M2: 'bg-green-100 text-green-800 border-green-300',
            M3: 'bg-purple-100 text-purple-800 border-purple-300',
            M4: 'bg-orange-100 text-orange-800 border-orange-300',
            M5: 'bg-red-100 text-red-800 border-red-300',
            M6: 'bg-indigo-100 text-indigo-800 border-indigo-300'
        };
        return colors[level];
    };

    const getStatusColor = (status: Module['status']): string => {
        const colors = {
            current: 'bg-green-100 text-green-800',
            upcoming: 'bg-yellow-100 text-yellow-800',
            future: 'bg-gray-100 text-gray-800'
        };
        return colors[status];
    };

    const getCategoryColor = (category: Course['category']): string => {
        const colors = {
            fundamental: 'bg-blue-50 text-blue-700 border-blue-200',
            frontend: 'bg-green-50 text-green-700 border-green-200',
            backend: 'bg-purple-50 text-purple-700 border-purple-200',
            ai: 'bg-orange-50 text-orange-700 border-orange-200',
            capstone: 'bg-red-50 text-red-700 border-red-200'
        };
        return colors[category];
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Study Scheme
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Mansha Certified Autonomous Systems & Cloud Engineer (MCASCE)
                    </p>
                </div>

                {/* Modules Overview Table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                            🎯 Modules Overview (M1 - M6)
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Level
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Module Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Courses
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Focus Areas
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {modules.map((module, index) => (
                                <tr key={module.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold border-2 ${getLevelColor(module.level)}`}>
                                                {module.level}
                                            </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-semibold text-gray-900">{module.title}</div>
                                        <div className="text-sm text-gray-500 mt-1">{module.description}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{module.courses} courses</div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex flex-wrap gap-1">
                                            {module.focus.slice(0, 3).map((tech, techIndex) => (
                                                <span key={techIndex} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-800">
                                                        {tech}
                                                    </span>
                                            ))}
                                            {module.focus.length > 3 && (
                                                <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-200 text-gray-600">
                                                        +{module.focus.length - 3} more
                                                    </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(module.status)}`}>
                                                {module.status === 'current' && '🟢 Current'}
                                                {module.status === 'upcoming' && '🟡 Upcoming'}
                                                {module.status === 'future' && '⚪ Future'}
                                            </span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Courses by Module Table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                            📚 List of M1 Courses
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Module
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Course Code
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Course Title
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {courses.map((course, index) => (
                                <tr key={course.code} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold border-2 ${getLevelColor(course.level)}`}>
                                                {course.level}
                                            </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-mono text-gray-900 font-medium">{course.code}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">{course.title}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-600 max-w-xs">{course.description}</div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Module1Page;