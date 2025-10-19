'use client';

import { useState, useEffect } from 'react';

interface Admission {
    id: number;
    full_name: string;
    father_name: string;
    qualification: string;
    institute: string;
    total_marks: string;
    obtained_marks: string;
    gmail: string;
    dob: string;
    whatsapp: string;
    program: string;
    campus: string;
    semester: string;
    classes: string;
    country: string;
    created_at: string;
}

export default function AdmissionsPage() {
    const [admissions, setAdmissions] = useState<Admission[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCampus, setFilterCampus] = useState('all');
    const [filterClass, setFilterClass] = useState('all');

    const fetchAdmissions = async () => {
        try {
            setError(null);
            const response = await fetch('/api/auth/getnewapps');

            if (!response.ok) {
                throw new Error('Failed to fetch admissions');
            }

            const data = await response.json();
            setAdmissions(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    // Initial fetch
    useEffect(() => {
        fetchAdmissions();
    }, []);

    // Auto-refresh every 30 seconds
    useEffect(() => {
        const interval = setInterval(fetchAdmissions, 30000);
        return () => clearInterval(interval);
    }, []);

    const calculatePercentage = (obtained: string, total: string) => {
        const obtainedNum = parseFloat(obtained);
        const totalNum = parseFloat(total);
        return totalNum > 0 ? ((obtainedNum / totalNum) * 100).toFixed(2) : '0.00';
    };

    // Get unique values for filters
    const campuses = ['all', ...new Set(admissions.map(admission => admission.campus))];
    const classTypes = ['all', ...new Set(admissions.map(admission => admission.classes))];

    // Filter admissions
    const filteredAdmissions = admissions.filter(admission => {
        const matchesSearch =
            admission.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            admission.father_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            admission.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
            admission.campus.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCampus = filterCampus === 'all' || admission.campus === filterCampus;
        const matchesClass = filterClass === 'all' || admission.classes === filterClass;

        return matchesSearch && matchesCampus && matchesClass;
    });

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading admissions data...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center max-w-md mx-auto">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚠️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to Load Data</h3>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={fetchAdmissions}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                Applicants
                            </h1>
                            <p className="text-gray-600">
                                Managing {admissions.length} student records
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center text-sm text-gray-500 bg-white px-3 py-2 rounded-lg border border-gray-200">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                Live Updates
                            </div>
                            <button
                                onClick={fetchAdmissions}
                                className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-medium shadow-sm"
                            >
                                Refresh Data
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Search Students
                            </label>
                            <input
                                type="text"
                                placeholder="Search by name, program, or campus..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Filter by Campus
                            </label>
                            <select
                                value={filterCampus}
                                onChange={(e) => setFilterCampus(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            >
                                {campuses.map(campus => (
                                    <option key={campus} value={campus}>
                                        {campus === 'all' ? 'All Campuses' : campus}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Filter by Class Type
                            </label>
                            <select
                                value={filterClass}
                                onChange={(e) => setFilterClass(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            >
                                {classTypes.map(classType => (
                                    <option key={classType} value={classType}>
                                        {classType === 'all' ? 'All Class Types' : classType}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Results Info */}
                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                            Showing {filteredAdmissions.length} of {admissions.length} students
                        </span>
                        {(searchTerm || filterCampus !== 'all' || filterClass !== 'all') && (
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setFilterCampus('all');
                                    setFilterClass('all');
                                }}
                                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Clear all filters
                            </button>
                        )}
                    </div>
                </div>

                {/* Admissions Grid */}
                {filteredAdmissions.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🎓</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            No students found
                        </h3>
                        <p className="text-gray-600 max-w-md mx-auto">
                            {searchTerm || filterCampus !== 'all' || filterClass !== 'all'
                                ? 'No students match your current filters. Try adjusting your search criteria.'
                                : 'No admission records found in the database.'
                            }
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredAdmissions.map((admission) => (
                            <div
                                key={admission.id}
                                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden group"
                            >
                                {/* Header with Gradient */}
                                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                                    <h3 className="text-lg font-semibold text-white truncate">
                                        {admission.full_name}
                                    </h3>
                                    <p className="text-blue-100 text-sm truncate">
                                        {admission.father_name}
                                    </p>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    {/* Program & Campus */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                                Program
                                            </p>
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                {admission.program}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                                Campus
                                            </p>
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                {admission.campus}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Semester & Class Type */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                                Semester
                                            </p>
                                            <p className="text-sm font-medium text-gray-900">
                                                {admission.semester}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                                Class Type
                                            </p>
                                            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {admission.classes}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Qualification & Marks */}
                                    <div>
                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                            Qualification
                                        </p>
                                        <p className="text-sm text-gray-900 mb-2">
                                            {admission.qualification}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-gray-500">Marks Obtained</span>
                                            <span className="text-sm font-semibold text-gray-900">
                                                {admission.obtained_marks}/{admission.total_marks}
                                                <span className="text-gray-500 ml-1">
                                                    ({calculatePercentage(admission.obtained_marks, admission.total_marks)}%)
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                {/* Footer */}
                                <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        <span>From {admission.country}</span>
                                        <span>Applied {new Date(admission.created_at).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}