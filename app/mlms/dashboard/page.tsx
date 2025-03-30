"use client";

import {useEffect, useState} from 'react';
import {
    FiUser,
    FiBook,
    FiAward,
    FiBarChart2,
    FiHome,
    FiFileText,
    FiHelpCircle,
    FiLogOut,
    FiChevronDown,
    FiChevronRight,
    FiCheckCircle,
    FiClock,
    FiMessageSquare,
    FiUsers
} from 'react-icons/fi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { RiDiscussLine } from 'react-icons/ri';
import { BsFileEarmarkText, BsQuestionSquare } from 'react-icons/bs';
import {useSession, signOut} from "next-auth/react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import MVITLogo from '@/public/mvutflame.png';

type Course = {
    id: string;
    title: string;
    code: string;
    instructor: {
        name: string;
        email: string;
        officeHours: string;
    };
    progress: number;
    assignmentsDue: number;
    unreadDiscussions: number;
    upcomingQuizzes: number;
    grade?: string;
};

type GradeItem = {
    courseId: string;
    courseTitle: string;
    assignments: number;
    quizzes: number;
    midterm: number;
    final: number;
    total: number;
    grade: string;
};

const StudentDashboard = () => {
    const [activeTab, setActiveTab] = useState('courses');
    const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

    // Mock data
    const studentProfile = {
        name: "Alex Johnson",
        studentId: "STU2023001",
        email: "alex.johnson@university.edu",
        program: "Bachelor of Computer Science",
        semester: "Fall 2023",
        cgpa: 3.75,
        avatar: "/default-avatar.jpg"
    };

    const courses: Course[] = [
        {
            id: "cs101",
            title: "Introduction to Computer Science",
            code: "CS 101",
            instructor: {
                name: "Dr. Sarah Williams",
                email: "s.williams@university.edu",
                officeHours: "Mon/Wed 2-4pm"
            },
            progress: 75,
            assignmentsDue: 2,
            unreadDiscussions: 5,
            upcomingQuizzes: 1,
            grade: "A"
        },
        {
            id: "math202",
            title: "Linear Algebra",
            code: "MATH 202",
            instructor: {
                name: "Prof. David Chen",
                email: "d.chen@university.edu",
                officeHours: "Tue/Thu 1-3pm"
            },
            progress: 60,
            assignmentsDue: 1,
            unreadDiscussions: 3,
            upcomingQuizzes: 0,
            grade: "B+"
        },
        {
            id: "eng105",
            title: "Technical Writing",
            code: "ENG 105",
            instructor: {
                name: "Dr. Emily Parker",
                email: "e.parker@university.edu",
                officeHours: "Fri 10am-12pm"
            },
            progress: 90,
            assignmentsDue: 0,
            unreadDiscussions: 2,
            upcomingQuizzes: 0,
            grade: "A"
        }
    ];

    const gradeBook: GradeItem[] = [
        {
            courseId: "cs101",
            courseTitle: "Introduction to Computer Science",
            assignments: 85,
            quizzes: 90,
            midterm: 88,
            final: 92,
            total: 89,
            grade: "A"
        },
        {
            courseId: "math202",
            courseTitle: "Linear Algebra",
            assignments: 78,
            quizzes: 82,
            midterm: 75,
            final: 80,
            total: 79,
            grade: "B+"
        },
        {
            courseId: "eng105",
            courseTitle: "Technical Writing",
            assignments: 95,
            quizzes: 88,
            midterm: 92,
            final: 94,
            total: 93,
            grade: "A"
        }
    ];

    const toggleCourseExpand = (courseId: string) => {
        setExpandedCourse(expandedCourse === courseId ? null : courseId);
    };
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/mlms');
        }
    }, [status, router]);

    if (status === 'loading') {
        return <div className="min-h-screen flex items-center justify-center bg-gray-50">Loading...</div>;
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* MVIT Header */}
            <header className="bg-red-800 text-white shadow-md">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="relative w-12 h-12">
                            <Image
                                src={MVITLogo}
                                alt="MVIT Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Mansha Virtual Institute of Technologies</h1>
                            <p className="text-xs text-red-200">Student Portal Dashboard</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-sm">
                            Welcome, <span className="font-semibold">{studentProfile.name}</span>
                        </div>
                        <button
                            onClick={() => signOut()}
                            className="flex items-center space-x-1 text-sm hover:text-red-200"
                        >
                            <FiLogOut size={16} />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="w-64 bg-indigo-800 text-white p-4 flex flex-col">
                    <div className="flex items-center space-x-3 p-4 border-b border-indigo-700">
                        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                            <FiUser size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold">{studentProfile.name}</h3>
                            <p className="text-xs text-indigo-200">{studentProfile.studentId}</p>
                        </div>
                    </div>

                    <nav className="flex-1 mt-6">
                        <button
                            onClick={() => setActiveTab('courses')}
                            className={`flex items-center space-x-3 w-full p-3 rounded-lg mb-2 ${activeTab === 'courses' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
                        >
                            <FiBook size={18} />
                            <span>My Courses</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('grades')}
                            className={`flex items-center space-x-3 w-full p-3 rounded-lg mb-2 ${activeTab === 'grades' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
                        >
                            <FiAward size={18} />
                            <span>Grade Book</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`flex items-center space-x-3 w-full p-3 rounded-lg mb-2 ${activeTab === 'profile' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
                        >
                            <FiUser size={18} />
                            <span>Profile</span>
                        </button>
                    </nav>
                </div>

                {/* Dashboard Content */}
                <div className="flex-1 overflow-auto">
                    {/* Dashboard Header */}
                    <div className="bg-white shadow-sm p-4 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-800">
                            {activeTab === 'courses' && 'My Courses'}
                            {activeTab === 'grades' && 'Grade Book'}
                            {activeTab === 'profile' && 'My Profile'}
                        </h1>
                        <div className="flex items-center space-x-4">
                            <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                                CGPA: {studentProfile.cgpa}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <main className="p-6">
                        {activeTab === 'courses' && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-gray-700">Enrolled Courses ({courses.length})</h2>

                                <div className="grid gap-6">
                                    {courses.map((course) => (
                                        <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                            <div
                                                className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                                                onClick={() => toggleCourseExpand(course.id)}
                                            >
                                                <div>
                                                    <h3 className="font-bold text-lg">{course.title}</h3>
                                                    <p className="text-sm text-gray-600">{course.code}</p>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <div className="text-right">
                                                        <span className="text-sm font-medium text-gray-500">Progress</span>
                                                        <div className="w-32 bg-gray-200 rounded-full h-2.5">
                                                            <div
                                                                className="bg-green-500 h-2.5 rounded-full"
                                                                style={{ width: `${course.progress}%` }}
                                                            ></div>
                                                        </div>
                                                        <span className="text-xs font-medium">{course.progress}%</span>
                                                    </div>
                                                    {expandedCourse === course.id ? (
                                                        <FiChevronDown size={20} className="text-gray-500" />
                                                    ) : (
                                                        <FiChevronRight size={20} className="text-gray-500" />
                                                    )}
                                                </div>
                                            </div>

                                            {expandedCourse === course.id && (
                                                <div className="border-t border-gray-200 p-4">
                                                    <div className="grid md:grid-cols-3 gap-6">
                                                        {/* Course Activities */}
                                                        <div className="md:col-span-2">
                                                            <h4 className="font-medium text-gray-700 mb-3">Course Activities</h4>
                                                            <div className="grid grid-cols-3 gap-3">
                                                                <a href="#" className="flex flex-col items-center p-3 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100">
                                                                    <BsFileEarmarkText size={20} />
                                                                    <span className="text-sm mt-1">Assignments ({course.assignmentsDue})</span>
                                                                </a>
                                                                <a href="#" className="flex flex-col items-center p-3 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100">
                                                                    <BsQuestionSquare size={20} />
                                                                    <span className="text-sm mt-1">Quizzes ({course.upcomingQuizzes})</span>
                                                                </a>
                                                                <a href="#" className="flex flex-col items-center p-3 rounded-lg bg-green-50 text-green-700 hover:bg-green-100">
                                                                    <RiDiscussLine size={20} />
                                                                    <span className="text-sm mt-1">Discussions ({course.unreadDiscussions})</span>
                                                                </a>
                                                            </div>

                                                            <div className="mt-4">
                                                                <h4 className="font-medium text-gray-700 mb-2">Recent Announcements</h4>
                                                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-2">
                                                                    <p className="text-sm font-medium">Midterm exam schedule posted</p>
                                                                    <p className="text-xs text-gray-500">2 days ago</p>
                                                                </div>
                                                                <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                                                                    <p className="text-sm font-medium">Assignment 2 deadline extended</p>
                                                                    <p className="text-xs text-gray-500">1 week ago</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Instructor Info */}
                                                        <div>
                                                            <h4 className="font-medium text-gray-700 mb-3">Instructor</h4>
                                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                                <div className="flex items-center space-x-3 mb-3">
                                                                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                                                        <FaChalkboardTeacher className="text-indigo-600" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="font-medium">{course.instructor.name}</p>
                                                                        <p className="text-xs text-gray-500">{course.code} Instructor</p>
                                                                    </div>
                                                                </div>
                                                                <div className="space-y-2 text-sm">
                                                                    <p className="flex items-center">
                                                                        <FiUser className="mr-2 text-gray-500" />
                                                                        <span>{course.instructor.email}</span>
                                                                    </p>
                                                                    <p className="flex items-center">
                                                                        <FiClock className="mr-2 text-gray-500" />
                                                                        <span>Office Hours: {course.instructor.officeHours}</span>
                                                                    </p>
                                                                </div>
                                                                <button className="mt-3 w-full py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">
                                                                    Send Message
                                                                </button>
                                                            </div>

                                                            {/* Course Grade */}
                                                            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                                                                <h5 className="font-medium text-gray-700 mb-2">Your Grade</h5>
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center">
                                                                        <FiAward className="text-yellow-500 mr-2" />
                                                                        <span className="font-medium">Current Grade:</span>
                                                                    </div>
                                                                    <span className="text-lg font-bold">{course.grade}</span>
                                                                </div>
                                                                <button className="mt-3 w-full py-2 border border-indigo-600 text-indigo-600 rounded-lg text-sm hover:bg-indigo-50">
                                                                    View Grade Details
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'grades' && (
                            <div>
                                <h2 className="text-xl font-semibold text-gray-700 mb-6">Grade Book - {studentProfile.semester}</h2>

                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignments</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quizzes</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Midterm</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Final</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                        {gradeBook.map((item) => (
                                            <tr key={item.courseId} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="font-medium text-gray-900">{item.courseTitle}</div>
                                                    <div className="text-sm text-gray-500">{item.courseId.toUpperCase()}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.assignments}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quizzes}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.midterm}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.final}</td>
                                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.total}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                    ${item.grade === 'A' ? 'bg-green-100 text-green-800' :
                                                    item.grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                                                        'bg-yellow-100 text-yellow-800'}`}>
                                                    {item.grade}
                                                </span>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-6 grid md:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="font-medium text-gray-700 mb-4">Semester Summary</h3>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-gray-600">Courses Taken:</span>
                                            <span className="font-medium">3</span>
                                        </div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-gray-600">Completed:</span>
                                            <span className="font-medium">2</span>
                                        </div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-gray-600">In Progress:</span>
                                            <span className="font-medium">1</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Current SGPA:</span>
                                            <span className="font-bold text-indigo-600">3.82</span>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                                        <h3 className="font-medium text-gray-700 mb-4">GPA Progress</h3>
                                        <div className="h-64">
                                            {/* This would be a chart in a real implementation */}
                                            <div className="bg-gray-100 rounded-lg h-full flex items-center justify-center text-gray-400">
                                                GPA Trend Chart Visualization
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'profile' && (
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="md:col-span-1">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <div className="flex flex-col items-center">
                                            <div className="w-24 h-24 rounded-full bg-indigo-100 mb-4 flex items-center justify-center">
                                                {studentProfile.avatar ? (
                                                    <img src={studentProfile.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
                                                ) : (
                                                    <FiUser size={32} className="text-indigo-600" />
                                                )}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">{studentProfile.name}</h3>
                                            <p className="text-sm text-gray-500">{studentProfile.studentId}</p>

                                            <div className="mt-4 w-full">
                                                <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                                                    Upload New Photo
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                            <h4 className="font-medium text-gray-700 mb-3">Academic Information</h4>
                                            <div className="space-y-2 text-sm">
                                                <p className="flex justify-between">
                                                    <span className="text-gray-600">Program:</span>
                                                    <span className="font-medium">{studentProfile.program}</span>
                                                </p>
                                                <p className="flex justify-between">
                                                    <span className="text-gray-600">Current Semester:</span>
                                                    <span className="font-medium">{studentProfile.semester}</span>
                                                </p>
                                                <p className="flex justify-between">
                                                    <span className="text-gray-600">CGPA:</span>
                                                    <span className="font-bold text-indigo-600">{studentProfile.cgpa}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-lg font-bold text-gray-800 mb-6">Personal Information</h3>

                                        <form className="space-y-4">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                                    <input
                                                        type="text"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                        defaultValue="Alex"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                                    <input
                                                        type="text"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                        defaultValue="Johnson"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                                <input
                                                    type="email"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    defaultValue={studentProfile.email}
                                                />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                        placeholder="+1 (___) ___-____"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                                    <input
                                                        type="date"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                                <textarea
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    rows={3}
                                                    placeholder="Enter your address"
                                                ></textarea>
                                            </div>

                                            <div className="pt-4 border-t border-gray-200 flex justify-end">
                                                <button
                                                    type="button"
                                                    className="mr-3 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700"
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-lg font-bold text-gray-800 mb-6">Change Password</h3>

                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                                                <input
                                                    type="password"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    placeholder="Enter current password"
                                                />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                        placeholder="Enter new password"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                        placeholder="Confirm new password"
                                                    />
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t border-gray-200 flex justify-end">
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700"
                                                >
                                                    Update Password
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* MVIT Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-4 text-center text-sm">
                    <p>© {new Date().getFullYear()} Mansha Virtual Institute of Technologies. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="hover:text-red-400">Terms of Service</a>
                        <a href="#" className="hover:text-red-400">Privacy Policy</a>
                        <a href="#" className="hover:text-red-400">Contact Us</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default StudentDashboard;