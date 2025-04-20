'use client';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Image, { StaticImageData } from 'next/image';
import MVITLogo from '@/public/mvut_flame.png'; // Replace with your actual logo path

type StudentInfo = {
    name: string;
    studentId: string;
    program: string;
    semester: string;
    enrollmentDate: string;
    expectedGraduation: string;
    advisor: string;
};

type GradeItem = {
    courseId: string;
    courseTitle: string;
    creditHours: number;
    assignments: number;
    quizzes: number;
    midterm: number;
    final: number;
    total: number;
    grade: string;
    gradePoints: number;
};

export default function GradesBook() {
    const studentInfo: StudentInfo = {
        name: "Ali Ahmed Khan",
        studentId: "MVIT-2023-0056",
        program: "Bachelor of Science in Computer Science",
        semester: "Fall 2023",
        enrollmentDate: "September 2021",
        expectedGraduation: "May 2025",
        advisor: "Dr. Sarah Johnson"
    };

    const gradeBook: GradeItem[] = [
        { courseId: "cs101", courseTitle: "Introduction to Computer Science", creditHours: 3, assignments: 85, quizzes: 90, midterm: 88, final: 92, total: 89, grade: "A", gradePoints: 4.0 },
        { courseId: "math202", courseTitle: "Linear Algebra", creditHours: 4, assignments: 78, quizzes: 82, midterm: 75, final: 80, total: 79, grade: "B+", gradePoints: 3.3 },
        { courseId: "eng105", courseTitle: "Technical Writing", creditHours: 2, assignments: 95, quizzes: 88, midterm: 92, final: 94, total: 93, grade: "A", gradePoints: 4.0 },
    ];

    // Calculate semester totals
    const totalCreditHours = gradeBook.reduce((sum, course) => sum + course.creditHours, 0);
    const totalGradePoints = gradeBook.reduce((sum, course) => sum + (course.gradePoints * course.creditHours), 0);
    const semesterGPA = totalGradePoints / totalCreditHours;
    const overallCGPA = 3.8;

    // Calculate grand totals
    const grandTotalMarks = gradeBook.reduce((sum, course) => sum + course.total, 0);
    const maxPossibleMarks = gradeBook.length * 100;
    const percentageObtained = (grandTotalMarks / maxPossibleMarks) * 100;

    // PDF generation
    const gradeBookRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        content: () => gradeBookRef.current,
        pageStyle: `
            @page {
                size: A4;
                margin: 20mm;
            }
            @media print {
                body {
                    -webkit-print-color-adjust: exact;
                    color: #000;
                    font-family: Arial, sans-serif;
                }
                .print-header {
                    background-color: #1a365d !important;
                    color: white !important;
                    -webkit-print-color-adjust: exact;
                }
                .print-table {
                    border-color: #e2e8f0 !important;
                }
                .print-row {
                    border-bottom-color: #e2e8f0 !important;
                }
                .print-grade-A {
                    background-color: #dcfce7 !important;
                    color: #166534 !important;
                }
                .print-grade-B {
                    background-color: #dbeafe !important;
                    color: #1e40af !important;
                }
                .print-signature {
                    border-top: 1px solid #000 !important;
                }
            }
        `,
        documentTitle: `${studentInfo.name}_${studentInfo.semester}_GradeReport`,
        onAfterPrint: () => console.log("PDF generated successfully"),
        removeAfterPrint: true
    });

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            {/* Main Container */}
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <header className="text-center">
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Academic Grade Portal
                    </h1>
                    <p className="mt-2 text-gray-400">Mansha Virtual Institute of Technologies</p>
                </header>

                {/* Student Credentials */}
                <section className="bg-gray-800 rounded-xl border border-gray-700 p-6 shadow-lg">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-white">{studentInfo.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mt-4">
                                <div>
                                    <p className="text-sm text-gray-400">Student ID</p>
                                    <p className="text-white font-medium">{studentInfo.studentId}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Program</p>
                                    <p className="text-white font-medium">{studentInfo.program}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Semester</p>
                                    <p className="text-white font-medium">{studentInfo.semester}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Enrollment Date</p>
                                    <p className="text-white font-medium">{studentInfo.enrollmentDate}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Expected Graduation</p>
                                    <p className="text-white font-medium">{studentInfo.expectedGraduation}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Academic Advisor</p>
                                    <p className="text-white font-medium">{studentInfo.advisor}</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => handlePrint()}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors shadow-md hover:shadow-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                            </svg>
                            Download Grade Report
                        </button>
                    </div>
                </section>

                {/* Performance Summary */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-5 shadow-md">
                        <h3 className="text-sm font-medium text-blue-200">Semester GPA</h3>
                        <p className="text-3xl font-bold text-white mt-2">{semesterGPA.toFixed(2)}</p>
                        <p className="text-xs text-blue-300 mt-1">Based on {totalCreditHours} credit hours</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-5 shadow-md">
                        <h3 className="text-sm font-medium text-purple-200">Overall CGPA</h3>
                        <p className="text-3xl font-bold text-white mt-2">{overallCGPA.toFixed(2)}</p>
                        <p className="text-xs text-purple-300 mt-1">Cumulative performance</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl p-5 shadow-md">
                        <h3 className="text-sm font-medium text-green-200">Semester Percentage</h3>
                        <p className="text-3xl font-bold text-white mt-2">{percentageObtained.toFixed(1)}%</p>
                        <p className="text-xs text-green-300 mt-1">{grandTotalMarks}/{maxPossibleMarks} points</p>
                    </div>
                </section>

                {/* Grade Table */}
                <section className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden shadow-lg">
                    <table className="w-full">
                        <thead className="bg-gray-700">
                        <tr>
                            {["Course", "Credits", "Assignments", "Quizzes", "Midterm", "Final", "Total", "Grade", "Points"].map((header) => (
                                <th key={header} className="px-5 py-3 text-left text-sm font-medium text-gray-300">
                                    {header}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {gradeBook.map((item) => (
                            <tr
                                key={item.courseId}
                                className="border-t border-gray-700 hover:bg-gray-750 transition-colors"
                            >
                                <td className="px-5 py-4 text-white font-medium">{item.courseTitle}</td>
                                <td className="px-5 py-4 text-white text-center">{item.creditHours}</td>
                                <td className="px-5 py-4 text-white text-center">{item.assignments}</td>
                                <td className="px-5 py-4 text-white text-center">{item.quizzes}</td>
                                <td className="px-5 py-4 text-white text-center">{item.midterm}</td>
                                <td className="px-5 py-4 text-white text-center">{item.final}</td>
                                <td className="px-5 py-4 text-white text-center font-bold">{item.total}</td>
                                <td className="px-5 py-4 text-center">
                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                                item.grade === "A" ? "bg-green-900/30 text-green-400" :
                                                    item.grade.startsWith("B") ? "bg-blue-900/30 text-blue-400" :
                                                        "bg-purple-900/30 text-purple-400"
                                            }`}
                                        >
                                            {item.grade}
                                        </span>
                                </td>
                                <td className="px-5 py-4 text-white text-center">{item.gradePoints.toFixed(1)}</td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot className="bg-gray-700/50">
                        <tr>
                            <td className="px-5 py-3 text-white font-bold">Semester Total</td>
                            <td className="px-5 py-3 text-white text-center font-bold">{totalCreditHours}</td>
                            <td colSpan={4} className="px-5 py-3 text-white text-center">
                                <span className="font-medium">Obtained: {grandTotalMarks}</span> / {maxPossibleMarks}
                            </td>
                            <td className="px-5 py-3 text-white text-center font-bold">{grandTotalMarks}</td>
                            <td className="px-5 py-3 text-center">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-600 text-white">
                                        {percentageObtained.toFixed(1)}%
                                    </span>
                            </td>
                            <td className="px-5 py-3 text-white text-center font-bold">{semesterGPA.toFixed(2)}</td>
                        </tr>
                        </tfoot>
                    </table>
                </section>

                {/* Grade Legend */}
                <section className="bg-gray-800 rounded-xl border border-gray-700 p-5 shadow-md">
                    <h3 className="text-lg font-bold text-white mb-3">Grading System</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { grade: "A", points: 4.0, range: "90-100%", desc: "Excellent" },
                            { grade: "B+", points: 3.3, range: "85-89%", desc: "Very Good" },
                            { grade: "B", points: 3.0, range: "80-84%", desc: "Good" },
                            { grade: "C+", points: 2.3, range: "75-79%", desc: "Above Average" },
                        ].map((item) => (
                            <div key={item.grade} className="bg-gray-750 p-4 rounded-lg border border-gray-700">
                                <div className="flex items-center space-x-3">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                        item.grade === "A" ? "bg-green-900/30 text-green-400" :
                                            item.grade.startsWith("B") ? "bg-blue-900/30 text-blue-400" :
                                                "bg-purple-900/30 text-purple-400"
                                    }`}>
                                        {item.grade}
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium text-white">{item.points} Grade Points</p>
                                        <p className="text-xs text-gray-400">{item.range} - {item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PDF Content (hidden on screen, only for printing) */}
                <div className="hidden">
                    <div ref={gradeBookRef} className="p-8 text-gray-800">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-8 print-header p-6 bg-blue-900 text-white rounded-lg">
                            <div>
                                <h1 className="text-3xl font-bold">Mansha Virtual Institute of Technologies</h1>
                                <p className="text-blue-200 text-lg mt-1">Official Grade Report</p>
                            </div>
                            <div className="w-28 h-28 relative">
                                <Image
                                    src={MVITLogo}
                                    alt="MVIT Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>

                        {/* Student Information */}
                        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h2 className="text-xl font-bold mb-4 text-blue-800">Student Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">Full Name</p>
                                    <p className="font-medium">{studentInfo.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Student ID</p>
                                    <p className="font-medium">{studentInfo.studentId}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Academic Program</p>
                                    <p className="font-medium">{studentInfo.program}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Current Semester</p>
                                    <p className="font-medium">{studentInfo.semester}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Academic Advisor</p>
                                    <p className="font-medium">{studentInfo.advisor}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Expected Graduation</p>
                                    <p className="font-medium">{studentInfo.expectedGraduation}</p>
                                </div>
                            </div>
                        </div>

                        {/* Academic Performance */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4 text-blue-800">Academic Performance</h2>
                            <table className="w-full border-collapse print-table">
                                <thead>
                                <tr className="bg-gray-100">
                                    {["Course", "Credits", "Assignments", "Quizzes", "Midterm", "Final", "Total", "Grade", "Points"].map((header) => (
                                        <th key={header} className="p-3 text-left border-b-2 border-gray-300 font-semibold text-gray-700">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {gradeBook.map((item) => (
                                    <tr key={item.courseId} className="print-row border-b border-gray-200">
                                        <td className="p-3 font-medium">{item.courseTitle}</td>
                                        <td className="p-3 text-center">{item.creditHours}</td>
                                        <td className="p-3 text-center">{item.assignments}</td>
                                        <td className="p-3 text-center">{item.quizzes}</td>
                                        <td className="p-3 text-center">{item.midterm}</td>
                                        <td className="p-3 text-center">{item.final}</td>
                                        <td className="p-3 text-center font-bold">{item.total}</td>
                                        <td className="p-3 text-center">
                                                <span className={`inline-block px-2 py-1 rounded text-xs font-semibold print-grade-${item.grade[0]}`}>
                                                    {item.grade}
                                                </span>
                                        </td>
                                        <td className="p-3 text-center">{item.gradePoints.toFixed(1)}</td>
                                    </tr>
                                ))}
                                </tbody>
                                <tfoot className="bg-gray-50">
                                <tr className="font-semibold">
                                    <td className="p-3">Semester Summary</td>
                                    <td className="p-3 text-center">{totalCreditHours}</td>
                                    <td colSpan={4} className="p-3 text-center">
                                        <span className="font-medium">Obtained: {grandTotalMarks}</span> / {maxPossibleMarks}
                                    </td>
                                    <td className="p-3 text-center font-bold">{grandTotalMarks}</td>
                                    <td className="p-3 text-center font-bold">{percentageObtained.toFixed(1)}%</td>
                                    <td className="p-3 text-center font-bold">{semesterGPA.toFixed(2)}</td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>

                        {/* Summary Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <h3 className="font-bold text-lg mb-3 text-blue-800">Performance Summary</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Semester GPA:</span>
                                        <span className="font-medium">{semesterGPA.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Cumulative GPA:</span>
                                        <span className="font-medium">{overallCGPA.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Total Credit Hours:</span>
                                        <span className="font-medium">{totalCreditHours}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Semester Percentage:</span>
                                        <span className="font-medium">{percentageObtained.toFixed(1)}%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <h3 className="font-bold text-lg mb-3 text-blue-800">Grading Scale</h3>
                                <div className="space-y-2">
                                    {[
                                        { grade: "A", points: 4.0, range: "90-100%", desc: "Excellent" },
                                        { grade: "B+", points: 3.3, range: "85-89%", desc: "Very Good" },
                                        { grade: "B", points: 3.0, range: "80-84%", desc: "Good" },
                                        { grade: "C+", points: 2.3, range: "75-79%", desc: "Above Average" },
                                    ].map((item) => (
                                        <div key={item.grade} className="flex justify-between">
                                            <div>
                                                <span className="font-medium">{item.grade}:</span>
                                                <span className="text-gray-600 text-sm ml-2">{item.range}</span>
                                            </div>
                                            <span className="text-gray-700">{item.points} points</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-12 pt-6 border-t border-gray-300 text-sm">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-gray-700">Issued Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                    <p className="text-gray-600">This is an official document from MVIT</p>
                                </div>
                                <div className="text-right">
                                    <div className="h-20 w-48 print-signature relative">
                                        <div className="absolute bottom-0 right-0 w-32 h-0.5 bg-gray-400"></div>
                                        <p className="absolute bottom-1 right-0 text-gray-700">Registrar&apos;s Signature</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-center text-xs text-gray-500">
                                <p>Mansha Virtual Institute of Technologies | www.mvit.edu | registrar@mvit.edu</p>
                                <p className="mt-1">This document is valid without the official seal and signature</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}