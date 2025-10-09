// app/datasheet/page.tsx
'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaFilePdf } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DatasheetPDF from '@/app/components/DatasheetPDF';

const examData = [
    { sr: 1, courseCode: 'MRSE-201', courseName: 'HTML Fundamentals', date: '13-10-2025', day: 'Monday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
    { sr: 2, courseCode: 'MRSE-206', courseName: 'Tailwind CSS', date: '16-10-2025', day: 'Thursday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
    { sr: 3, courseCode: 'MRSE-103', courseName: 'Introduction to JavaScript Programming', date: '20-10-2025', day: 'Monday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
    { sr: 4, courseCode: 'MRSE-04', courseName: 'Introduction to Python Programming', date: '22-10-2025', day: 'Wednesday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
    { sr: 5, courseCode: 'MRSE-403', courseName: 'React Programming', date: '24-10-2025', day: 'Friday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
    { sr: 6, courseCode: 'MRSE-207', courseName: 'Next.js and Vercel Deployment', date: '27-10-2025', day: 'Monday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
    { sr: 7, courseCode: 'MRSE-307', courseName: 'Structured Query Language', date: '31-10-2025', day: 'Friday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
];

export default function DatasheetPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center mb-4">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-14 h-14 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">M</span>
                        </div>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">MVIT MCASCE EXAMINATION</h1>
                    <p className="text-gray-600">M1 Full-Stack Software Engineer (FSSE) — DATASHEET TERM-I SPRING-2025</p>
                </motion.div>

                {/* Download Button */}
                <div className="flex justify-center mb-8">
                    <PDFDownloadLink
                        document={<DatasheetPDF />}
                        fileName="MVIT_Datasheet_Term-I_Spring-2025.pdf"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition shadow-md"
                    >
                        {({ loading }) =>
                            loading ? 'Preparing PDF...' : (
                                <>
                                    <FaFilePdf className="text-xl" />
                                    Download PDF Datasheet
                                </>
                            )
                        }
                    </PDFDownloadLink>
                </div>

                {/* Table */}
                <motion.div
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">#</th>
                                <th className="py-3 px-4 text-left">Course</th>
                                <th className="py-3 px-4 text-left">Date</th>
                                <th className="py-3 px-4 text-left">Day</th>
                                <th className="py-3 px-4 text-left">Time</th>
                                <th className="py-3 px-4 text-left">Venue</th>
                            </tr>
                            </thead>
                            <tbody>
                            {examData.map((exam, index) => (
                                <motion.tr
                                    key={exam.sr}
                                    className="border-b border-gray-100 hover:bg-gray-50"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                                >
                                    <td className="py-3 px-4 font-mono text-gray-700">{exam.sr}</td>
                                    <td className="py-3 px-4">
                                        <div className="font-semibold text-gray-800">{exam.courseCode}</div>
                                        <div className="text-sm text-gray-600">{exam.courseName}</div>
                                    </td>
                                    <td className="py-3 px-4 flex items-center gap-2 text-gray-700">
                                        <FaCalendarAlt className="text-cyan-500 flex-shrink-0" />
                                        {exam.date}
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">{exam.day}</td>
                                    <td className="py-3 px-4 flex items-center gap-2 text-gray-700">
                                        <FaClock className="text-blue-500 flex-shrink-0" />
                                        {exam.time}
                                    </td>
                                    <td className="py-3 px-4 flex items-start gap-2 text-gray-700">
                                        <FaMapMarkerAlt className="text-red-500 mt-0.5 flex-shrink-0" />
                                        <span>{exam.venue}</span>
                                    </td>
                                </motion.tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Signature */}
                <motion.div
                    className="mt-10 text-center text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                >
                    <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm">
                        <FaGraduationCap className="text-gray-600" />
                        Yasir Ali — Controller Examinations
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Dated: October 2025</p>
                </motion.div>
            </div>
        </div>
    );
}