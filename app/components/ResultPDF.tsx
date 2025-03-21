import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Register Google Fonts
Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf',
            fontWeight: 'normal',
        },
        {
            src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc9.ttf',
            fontWeight: 'bold',
        },
    ],
});

Font.register({
    family: 'Lora',
    fonts: [
        {
            src: 'https://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkqg.ttf',
            fontWeight: 'normal',
        },
        {
            src: 'https://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787z5vBJBkqg.ttf',
            fontWeight: 'bold',
        },
    ],
});

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Roboto',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Lora',
        color: '#2C3E50',
    },
    section: {
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#34495E',
    },
    value: {
        fontSize: 12,
        marginBottom: 10,
        color: '#2C3E50',
    },
    question: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#34495E',
    },
    answer: {
        fontSize: 11,
        marginLeft: 10,
        color: '#2C3E50',
    },
    correct: {
        fontSize: 11,
        marginLeft: 10,
        color: '#27AE60',
    },
    wrong: {
        fontSize: 11,
        marginLeft: 10,
        color: '#E74C3C',
    },
    notAnswered: {
        fontSize: 11,
        marginLeft: 10,
        color: '#7F8C8D',
    },
    summary: {
        fontSize: 14,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#34495E',
    },
});

const ResultPDF = ({
                       userName,
                       registrationId,
                       questions,
                       answers,
                       correctAnswers,
                       totalQuestions,
                       percentage,
                       subjectName,
                   }: {
    userName: string;
    registrationId: string;
    questions: any[];
    answers: { [key: number]: string };
    correctAnswers: number;
    totalQuestions: number;
    percentage: string;
    subjectName: string;
}) => {
    // Calculate wrong and not answered questions
    const wrongAnswers = questions.reduce((count, question, index) => {
        if (answers[index] && answers[index] !== question.correctAnswer) {
            return count + 1;
        }
        return count;
    }, 0);

    const notAnswered = questions.reduce((count, _, index) => {
        if (!answers[index]) {
            return count + 1;
        }
        return count;
    }, 0);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.header}>Test Result</Text>

                {/* Candidate Details */}
                <View style={styles.section}>
                    <Text style={styles.label}>Candidate Name:</Text>
                    <Text style={styles.value}>{userName}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Registration ID:</Text>
                    <Text style={styles.value}>{registrationId}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Subject Name:</Text>
                    <Text style={styles.value}>{subjectName}</Text>
                </View>

                {/* Marks and Percentage */}
                <View style={styles.section}>
                    <Text style={styles.label}>Marks:</Text>
                    <Text style={styles.value}>
                        {correctAnswers} / {totalQuestions}
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Percentage:</Text>
                    <Text style={styles.value}>{percentage}%</Text>
                </View>

                {/* Summary of Correct, Wrong, and Not Answered Questions */}
                <Text style={styles.summary}>Summary:</Text>
                <View style={styles.section}>
                    <Text style={styles.label}>Correct Answers: {correctAnswers}</Text>
                    <Text style={styles.label}>Wrong Answers: {wrongAnswers}</Text>
                    <Text style={styles.label}>Not Answered: {notAnswered}</Text>
                </View>

                {/* Questions and Answers */}
                <Text style={styles.summary}>Questions and Answers:</Text>
                {questions.map((question, index) => (
                    <View key={index} style={styles.section}>
                        <Text style={styles.question}>{question.question}</Text>
                        <Text style={styles.answer}>Your Answer: {answers[index] || 'Not answered'}</Text>
                        {answers[index] === question.correctAnswer ? (
                            <Text style={styles.correct}>✔️ Correct</Text>
                        ) : answers[index] ? (
                            <Text style={styles.wrong}>❌ Wrong</Text>
                        ) : (
                            <Text style={styles.notAnswered}>— Not Answered</Text>
                        )}
                    </View>
                ))}
            </Page>
        </Document>
    );
};

export default ResultPDF;