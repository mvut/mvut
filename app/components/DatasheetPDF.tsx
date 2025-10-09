'use client'
// components/DatasheetPDF.tsx
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
        backgroundColor: '#ffffff',
    },
    header: {
        textAlign: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        fontSize: 14,
        color: '#333',
        marginBottom: 20,
    },
    table: {
        display: 'flex',
        width: '100%',
        border: '1px solid #000',
        flexDirection: 'column',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottom: '1px solid #ccc',
    },
    tableHeader: {
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: 'bold',
    },
    tableCell: {
        padding: 8,
        fontSize: 10,
        borderRight: '1px solid #ccc',
        flexGrow: 1,
        flexBasis: 0,
    },
    lastCell: {
        borderRight: 'none',
    },
    footer: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 12,
        color: '#555',
    },
});

// Exam data (same as in page)
const examData = [
    { sr: 1, code: 'MRSE-201', name: 'HTML Fundamentals', date: '13-10-2025', day: 'Monday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
    { sr: 2, code: 'MRSE-206', name: 'Tailwind CSS', date: '16-10-2025', day: 'Thursday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
    { sr: 3, code: 'MRSE-103', name: 'Introduction to JavaScript Programming', date: '20-10-2025', day: 'Monday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
    { sr: 4, code: 'MRSE-04', name: 'Introduction to Python Programming', date: '22-10-2025', day: 'Wednesday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
    { sr: 5, code: 'MRSE-403', name: 'React Programming', date: '24-10-2025', day: 'Friday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
    { sr: 6, code: 'MRSE-207', name: 'Next.js and Vercel Deployment', date: '27-10-2025', day: 'Monday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
    { sr: 7, code: 'MRSE-307', name: 'Structured Query Language', date: '31-10-2025', day: 'Friday', time: '04:00 PM – 06:00 PM', venue: 'MVIT, (Pakpattan) Pakistan' },
];

const DatasheetPDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>MVIT MCASCE EXAMINATION</Text>
                <Text style={styles.subtitle}>M1 Full-Stack Software Engineer (FSSE) — DATASHEET TERM-I SPRING-2025</Text>
            </View>

            {/* Table */}
            <View style={styles.table}>
                {/* Table Header */}
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={[styles.tableCell, styles.lastCell]}>#</Text>
                    <Text style={[styles.tableCell, styles.lastCell]}>Course</Text>
                    <Text style={[styles.tableCell, styles.lastCell]}>Date</Text>
                    <Text style={[styles.tableCell, styles.lastCell]}>Day</Text>
                    <Text style={[styles.tableCell, styles.lastCell]}>Time</Text>
                    <Text style={styles.tableCell}>Venue</Text>
                </View>

                {/* Table Rows */}
                {examData.map((exam) => (
                    <View key={exam.sr} style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.lastCell]}>{exam.sr}</Text>
                        <Text style={[styles.tableCell, styles.lastCell]}>
                            {exam.code} {exam.name}
                        </Text>
                        <Text style={[styles.tableCell, styles.lastCell]}>{exam.date}</Text>
                        <Text style={[styles.tableCell, styles.lastCell]}>{exam.day}</Text>
                        <Text style={[styles.tableCell, styles.lastCell]}>{exam.time}</Text>
                        <Text style={styles.tableCell}>{exam.venue}</Text>
                    </View>
                ))}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text>Yasir Ali — Controller Examinations</Text>
                <Text>Dated: October 2025</Text>
            </View>
        </Page>
    </Document>
);

export default DatasheetPDF;