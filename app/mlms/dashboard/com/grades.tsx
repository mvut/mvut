export default function GradesBook() {
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

    const gradeBook: GradeItem[] = [
        { courseId: "cs101", courseTitle: "Introduction to Computer Science", assignments: 85, quizzes: 90, midterm: 88, final: 92, total: 89, grade: "A" },
        { courseId: "math202", courseTitle: "Linear Algebra", assignments: 78, quizzes: 82, midterm: 75, final: 80, total: 79, grade: "B+" },
        { courseId: "eng105", courseTitle: "Technical Writing", assignments: 95, quizzes: 88, midterm: 92, final: 94, total: 93, grade: "A" },
    ];
    return (
        <div className="space-y-6">
            <div className="bg-glass-inner rounded-xl border border-white/10 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-white/5">
                    <tr>
                        {["Course", "Assignments", "Quizzes", "Midterm", "Final", "Total", "Grade"].map((header) => (
                            <th key={header} className="px-6 py-4 text-left text-sm font-medium text-white/80">
                                {header}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {gradeBook.map((item) => (
                        <tr
                            key={item.courseId}
                            className="border-t border-white/10 hover:bg-white/5 transition-colors duration-200"
                        >
                            <td className="px-6 py-4 text-white">{item.courseTitle}</td>
                            <td className="px-6 py-4 text-white">{item.assignments}</td>
                            <td className="px-6 py-4 text-white">{item.quizzes}</td>
                            <td className="px-6 py-4 text-white">{item.midterm}</td>
                            <td className="px-6 py-4 text-white">{item.final}</td>
                            <td className="px-6 py-4 font-medium text-white">{item.total}</td>
                            <td className="px-6 py-4">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                        item.grade === "A" ? "bg-green-500/20 text-green-400" :
                                                            item.grade === "B+" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"
                                                    }`}
                                                >
                                                    {item.grade}
                                                </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}