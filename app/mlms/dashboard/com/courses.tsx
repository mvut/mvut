'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronRight, FiClock } from 'react-icons/fi';
import { BsFileEarmarkText, BsQuestionSquare } from 'react-icons/bs';
import { RiDiscussLine } from 'react-icons/ri';

// Types
interface Instructor {
    id: string;
    name: string;
    email: string;
    officeHours: string;
}

interface Course {
    id: string;
    title: string;
    code: string;
    instructor: Instructor;
    progress: number;
    assignmentsDue: number;
    unreadDiscussions: number;
    upcomingQuizzes: number;
    grade?: string;
}

// API Response Type
interface ApiResponse {
    data?: Course[];
    error?: string;
}

const Courses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const toggleCourseExpand = (courseId: string) => {
        setExpandedCourse(expandedCourse === courseId ? null : courseId);
    };

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/api/auth/courses', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-store',
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result: ApiResponse = await response.json();

                // Validate response
                if (!result.data || !Array.isArray(result.data)) {
                    throw new Error('Invalid data format: Expected an array of courses');
                }

                setCourses(result.data);
            } catch (err) {
                console.error('Error fetching courses:', err);
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500" />
                <span className="sr-only">Loading courses...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <p className="text-red-400">Error: {error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-2 text-sm text-red-300 hover:text-white transition-colors"
                >
                    Try again
                </button>
            </div>
        );
    }

    if (courses.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-white/70">No courses found for this semester</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {courses.map((course) => (
                <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-900/70 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden"
                >
                    <button
                        type="button"
                        className="flex w-full justify-between items-center cursor-pointer p-4 hover:bg-white/5 transition-colors"
                        onClick={() => toggleCourseExpand(course.id)}
                        aria-expanded={expandedCourse === course.id}
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                            <p className="text-sm text-white/60">{course.code}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-24 bg-gray-600/30 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${
                                        course.progress > 75
                                            ? 'bg-green-500'
                                            : course.progress > 50
                                                ? 'bg-blue-500'
                                                : 'bg-purple-500'
                                    } w-[${course.progress}%]`}
                                    aria-valuenow={course.progress}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                            {expandedCourse === course.id ? (
                                <FiChevronDown className="text-purple-400" />
                            ) : (
                                <FiChevronRight className="text-white/60" />
                            )}
                        </div>
                    </button>

                    {expandedCourse === course.id && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                                <div className="md:col-span-2 p-4">
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            {
                                                icon: <BsFileEarmarkText size={16} />,
                                                label: 'Assignments',
                                                count: course.assignmentsDue,
                                                color: 'blue',
                                            },
                                            {
                                                icon: <BsQuestionSquare size={16} />,
                                                label: 'Quizzes',
                                                count: course.upcomingQuizzes,
                                                color: 'purple',
                                            },
                                            {
                                                icon: <RiDiscussLine size={16} />,
                                                label: 'Discussions',
                                                count: course.unreadDiscussions,
                                                color: 'green',
                                            },
                                        ].map((item, index) => (
                                            <a
                                                key={index}
                                                href="#"
                                                className={`flex flex-col items-center p-3 rounded-lg bg-${item.color}-500/10 border border-${item.color}-500/20 hover:bg-${item.color}-500/20 transition-colors`}
                                            >
                                                <span className={`text-${item.color}-400 mb-1`}>{item.icon}</span>
                                                <span className="text-xs text-white">{item.label}</span>
                                                <span className="text-xs font-medium text-white mt-1">({item.count})</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-4 space-y-4">
                                    <div>
                                        <h4 className="text-xs font-medium text-white/70 mb-1">Instructor</h4>
                                        <p className="text-white">{course.instructor.name}</p>
                                        <p className="text-xs text-white/60">{course.instructor.email}</p>
                                        <p className="text-xs text-white/60 mt-1 flex items-center">
                                            <FiClock className="mr-1" />
                                            {course.instructor.officeHours}
                                        </p>
                                    </div>

                                    {course.grade && (
                                        <div>
                                            <h4 className="text-xs font-medium text-white/70 mb-1">Current Grade</h4>
                                            <p className="text-xl font-bold text-purple-400">{course.grade}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default Courses;