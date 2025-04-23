import Image, { StaticImageData } from 'next/image';
import MVITLogo from '@/public/mvut_flame.png'; // Replace with your actual logo path
import { FaGraduationCap, FaUserTie, FaCalendarAlt, FaIdCard } from 'react-icons/fa';
import { FiAward, FiPercent } from 'react-icons/fi';
import { GiGraduateCap } from 'react-icons/gi';

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

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 p-4 sm:p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header with Logo */}
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 relative">
                            <Image
                                src={MVITLogo}
                                alt="MVIT Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Academic Grade Portal</h1>
                            <p className="text-gray-600">Mansha Virtual Institute of Technologies</p>
                        </div>
                    </div>
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        <p className="font-medium">Semester: {studentInfo.semester}</p>
                    </div>
                </header>

                {/* Student Profile Card */}
                <section className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <FaUserTie className="text-blue-600" />
                            Student Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-100 p-2 rounded-full">
                                    <FaIdCard className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Student ID</p>
                                    <p className="font-medium">{studentInfo.studentId}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-purple-100 p-2 rounded-full">
                                    <FaGraduationCap className="text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Program</p>
                                    <p className="font-medium">{studentInfo.program}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <FaCalendarAlt className="text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Enrollment Date</p>
                                    <p className="font-medium">{studentInfo.enrollmentDate}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-yellow-100 p-2 rounded-full">
                                    <GiGraduateCap className="text-yellow-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Expected Graduation</p>
                                    <p className="font-medium">{studentInfo.expectedGraduation}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-red-100 p-2 rounded-full">
                                    <FaUserTie className="text-red-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Academic Advisor</p>
                                    <p className="font-medium">{studentInfo.advisor}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Performance Summary */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                                <FiAward className="text-blue-600" />
                            </div>
                            <h3 className="text-sm font-medium text-gray-500">Semester GPA</h3>
                        </div>
                        <div className="flex items-end gap-2">
                            <p className="text-3xl font-bold text-gray-900">{semesterGPA.toFixed(2)}</p>
                            <p className="text-sm text-gray-500 mb-1">/ 4.0</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Based on {totalCreditHours} credit hours</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 p-2 rounded-full">
                                <GiGraduateCap className="text-purple-600" />
                            </div>
                            <h3 className="text-sm font-medium text-gray-500">Overall CGPA</h3>
                        </div>
                        <div className="flex items-end gap-2">
                            <p className="text-3xl font-bold text-gray-900">{overallCGPA.toFixed(2)}</p>
                            <p className="text-sm text-gray-500 mb-1">/ 4.0</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Cumulative performance</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-green-100 p-2 rounded-full">
                                <FiPercent className="text-green-600" />
                            </div>
                            <h3 className="text-sm font-medium text-gray-500">Semester Percentage</h3>
                        </div>
                        <div className="flex items-end gap-2">
                            <p className="text-3xl font-bold text-gray-900">{percentageObtained.toFixed(1)}%</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{grandTotalMarks}/{maxPossibleMarks} points</p>
                    </div>
                </section>

                {/* Grade Table */}
                <section className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                            <tr>
                                {["Course", "Credits", "Assignments", "Quizzes", "Midterm", "Final", "Total", "Grade"].map((header) => (
                                    <th key={header} className="px-5 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {gradeBook.map((item) => (
                                <tr key={item.courseId} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-5 py-4 whitespace-nowrap">
                                        <div className="font-medium text-gray-900">{item.courseTitle}</div>
                                        <div className="text-sm text-gray-500">{item.courseId}</div>
                                    </td>
                                    <td className="px-5 py-4 whitespace-nowrap text-center text-gray-900">
                                        {item.creditHours}
                                    </td>
                                    <td className="px-5 py-4 whitespace-nowrap text-center text-gray-900">
                                        {item.assignments}
                                    </td>
                                    <td className="px-5 py-4 whitespace-nowrap text-center text-gray-900">
                                        {item.quizzes}
                                    </td>
                                    <td className="px-5 py-4 whitespace-nowrap text-center text-gray-900">
                                        {item.midterm}
                                    </td>
                                    <td className="px-5 py-4 whitespace-nowrap text-center text-gray-900">
                                        {item.final}
                                    </td>
                                    <td className="px-5 py-4 whitespace-nowrap text-center font-bold text-gray-900">
                                        {item.total}
                                    </td>
                                    <td className="px-5 py-4 whitespace-nowrap text-center">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    item.grade === "A" ? "bg-green-100 text-green-800" :
                                                        item.grade.startsWith("B") ? "bg-blue-100 text-blue-800" :
                                                            "bg-purple-100 text-purple-800"
                                                }`}
                                            >
                                                {item.grade}
                                            </span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                            <tfoot className="bg-gray-50">
                            <tr>
                                <td className="px-5 py-3 font-bold text-gray-900">Semester Total</td>
                                <td className="px-5 py-3 text-center font-bold text-gray-900">{totalCreditHours}</td>
                                <td colSpan={4} className="px-5 py-3 text-center text-gray-700">
                                    <span className="font-medium">Obtained: {grandTotalMarks}</span> / {maxPossibleMarks}
                                </td>
                                <td className="px-5 py-3 text-center font-bold text-gray-900">{grandTotalMarks}</td>
                                <td className="px-5 py-3 text-center">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                                            {percentageObtained.toFixed(1)}%
                                        </span>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>

                {/* Grade Legend */}
                <section className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        Grading System
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { grade: "A", points: 4.0, range: "90-100%", desc: "Excellent" },
                            { grade: "B+", points: 3.3, range: "85-89%", desc: "Very Good" },
                            { grade: "B", points: 3.0, range: "80-84%", desc: "Good" },
                            { grade: "C+", points: 2.3, range: "75-79%", desc: "Above Average" },
                        ].map((item) => (
                            <div key={item.grade} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        item.grade === "A" ? "bg-green-100 text-green-800" :
                                            item.grade.startsWith("B") ? "bg-blue-100 text-blue-800" :
                                                "bg-purple-100 text-purple-800"
                                    }`}>
                                        {item.grade}
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{item.points} Grade Points</p>
                                        <p className="text-xs text-gray-500">{item.range} - {item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}