// app/api/exam/submit/route.ts
import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        const {
            studentId,
            examType = 'midterm',
            answers,
            mcqMarks,
            timeSpent,
            flaggedQuestions = [],
            wordCounts = {}
        } = await request.json();

        // Validate required fields
        if (!studentId || !answers || typeof mcqMarks === 'undefined') {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Calculate derived values
        const mcqCorrect = Math.round(mcqMarks / 2); // Each MCQ is 2 marks
        const mcqTotal = 30; // Total MCQ questions
        const subjectiveTotal = 15; // Total subjective questions
        const totalPossibleMarks = mcqTotal * 2 + subjectiveTotal * 5;

        // Insert exam results
        const response = await sql`
      INSERT INTO qat_exam_results (
        student_id,
        exam_type,
        answers,
        mcq_correct,
        mcq_total,
        mcq_marks,
        total_possible_marks,
        time_spent,
        flagged_questions,
        word_counts,
        status
      ) VALUES (
        ${studentId},
        ${examType},
        ${JSON.stringify(answers)},
        ${mcqCorrect},
        ${mcqTotal},
        ${mcqMarks},
        ${totalPossibleMarks},
        ${timeSpent},
        ${flaggedQuestions},
        ${JSON.stringify(wordCounts)},
        'submitted'
      )
      RETURNING id, gpa
    `;

        const insertedId = response.rows[0].id;
        const gpa = parseFloat(response.rows[0].gpa);

        return NextResponse.json({
            success: true,
            examId: insertedId,
            mcqResults: {
                correct: mcqCorrect,
                total: mcqTotal,
                marks: mcqMarks
            },
            gpa: gpa.toFixed(2)
        }, { status: 201 });

    } catch (error) {
        console.error('Exam submission error:', error);
        return NextResponse.json(
            {
                error: "Failed to submit exam",
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}