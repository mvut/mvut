'use client';
import React from 'react';
import { FiUsers, FiBook, FiAward, FiBarChart2, FiDollarSign, FiCalendar, FiSettings, FiBell } from 'react-icons/fi';
import { FaChalkboardTeacher, FaGraduationCap, FaBuilding } from 'react-icons/fa';
import { MdOutlineScience, MdComputer, MdEngineering } from 'react-icons/md';
import { BsGraphUp, BsPeopleFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

export default function PresidentDashboard() {
    const router = useRouter();

    // Sample data - replace with actual API calls
    const dashboardData = {
        students: 4250,
        faculty: 320,
        departments: 8,
        placements: 92.5,
        researchPapers: 187,
        budget: '₹86.5 Cr',
        upcomingEvents: 5,
        pendingApprovals: 12
    };

    const departmentStats = [
        { name: 'Computer Science', students: 1200, faculty: 45, icon: <MdComputer className="text-blue-500" size={24} /> },
        { name: 'Electronics', students: 950, faculty: 38, icon: <MdEngineering className="text-green-500" size={24} /> },
        { name: 'Mechanical', students: 850, faculty: 42, icon: <MdEngineering className="text-red-500" size={24} /> },
        { name: 'Civil', students: 650, faculty: 35, icon: <FaBuilding className="text-yellow-500" size={24} /> },
        { name: 'Basic Sciences', students: 600, faculty: 28, icon: <MdOutlineScience className="text-purple-500" size={24} /> }
    ];

    const quickActions = [
        { title: 'Academic Calendar', icon: <FiCalendar size={20} />, action: () => router.push('/calendar') },
        { title: 'Budget Approval', icon: <FiDollarSign size={20} />, action: () => router.push('/finance') },
        { title: 'Faculty Hiring', icon: <FaChalkboardTeacher size={20} />, action: () => router.push('/recruitment') },
        { title: 'Infra Projects', icon: <FaBuilding size={20} />, action: () => router.push('/infrastructure') }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">MVIT President Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
                            <FiBell size={20} />
                        </button>
                        <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                P
                            </div>
                            <span className="ml-2 text-sm font-medium text-gray-700">President</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6 flex items-center">
                        <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                            <FiUsers size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total Students</p>
                            <p className="text-2xl font-bold">{dashboardData.students.toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6 flex items-center">
                        <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                            <FaChalkboardTeacher size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Faculty Members</p>
                            <p className="text-2xl font-bold">{dashboardData.faculty}</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6 flex items-center">
                        <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                            <FiAward size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Placement Rate</p>
                            <p className="text-2xl font-bold">{dashboardData.placements}%</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6 flex items-center">
                        <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
                            <FiDollarSign size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Annual Budget</p>
                            <p className="text-2xl font-bold">{dashboardData.budget}</p>
                        </div>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Department Statistics */}
                    <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold text-gray-900">Department Statistics</h2>
                            <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Faculty</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S:F Ratio</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                {departmentStats.map((dept, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    {dept.icon}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{dept.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dept.students}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dept.faculty}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {(dept.students / dept.faculty).toFixed(1)}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
                        <div className="space-y-3">
                            {quickActions.map((action, index) => (
                                <button
                                    key={index}
                                    onClick={action.action}
                                    className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <div className="p-2 rounded-full bg-gray-100 text-gray-600 mr-3">
                                        {action.icon}
                                    </div>
                                    <span className="text-sm font-medium">{action.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Pending Approvals */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold text-gray-900">Pending Approvals</h2>
                                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                  {dashboardData.pendingApprovals} New
                </span>
                            </div>
                            <div className="space-y-3">
                                <div className="p-3 border border-gray-200 rounded-lg">
                                    <p className="text-sm font-medium">New Lab Equipment Proposal</p>
                                    <p className="text-xs text-gray-500 mt-1">Computer Science Dept - ₹24.5L</p>
                                </div>
                                <div className="p-3 border border-gray-200 rounded-lg">
                                    <p className="text-sm font-medium">International Conference Budget</p>
                                    <p className="text-xs text-gray-500 mt-1">Mechanical Dept - ₹12.8L</p>
                                </div>
                                <button className="w-full text-sm text-blue-600 hover:text-blue-800 mt-2 text-left">
                                    View all pending items →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    {/* Research & Publications */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold text-gray-900">Research & Publications</h2>
                            <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm text-gray-500">Total Publications (2024)</p>
                            <p className="text-lg font-bold">{dashboardData.researchPapers}</p>
                        </div>
                        <div className="h-4 bg-gray-200 rounded-full mb-4">
                            <div className="h-4 bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span>SCI Indexed</span>
                                <span className="font-medium">84</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Scopus Indexed</span>
                                <span className="font-medium">67</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Patents Filed</span>
                                <span className="font-medium">12</span>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold text-gray-900">Upcoming Events</h2>
                            <button className="text-sm text-blue-600 hover:text-blue-800">View Calendar</button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-3">
                                    <FiCalendar size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">NAAC Peer Team Visit</p>
                                    <p className="text-xs text-gray-500">Jun 15-17, 2024</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="p-2 bg-green-100 text-green-600 rounded-lg mr-3">
                                    <FaGraduationCap size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Annual Convocation</p>
                                    <p className="text-xs text-gray-500">Jul 5, 2024</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mr-3">
                                    <BsPeopleFill size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Industry Meet</p>
                                    <p className="text-xs text-gray-500">Jun 22, 2024</p>
                                </div>
                            </div>
                            <button className="w-full text-sm text-blue-600 hover:text-blue-800 mt-2 text-left">
                                + {dashboardData.upcomingEvents - 3} more events
                            </button>
                        </div>
                    </div>

                    {/* Institutional KPIs */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Institutional KPIs</h2>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>NAAC Score (Current)</span>
                                    <span className="font-medium">3.62/4.0</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>NIRF Ranking Improvement</span>
                                    <span className="font-medium">+8 positions</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div className="h-2 bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Student Satisfaction</span>
                                    <span className="font-medium">88%</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '88%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Faculty Retention</span>
                                    <span className="font-medium">94%</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div className="h-2 bg-purple-500 rounded-full" style={{ width: '94%' }}></div>
                                </div>
                            </div>
                        </div>
                        <button className="mt-4 text-sm text-blue-600 hover:text-blue-800">
                            View Detailed Analytics →
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}