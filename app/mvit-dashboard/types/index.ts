// types/index.ts
export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'instructor' | 'student';
    avatar?: string;
    lastLogin: Date;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    instructor: string;
    students: number;
    duration: string;
    status: 'active' | 'draft' | 'archived';
    progress: number;
    thumbnail?: string;
    createdAt: Date;
}

export interface Student {
    id: string;
    name: string;
    email: string;
    enrolledCourses: number;
    completedCourses: number;
    progress: number;
    joinDate: Date;
    status: 'active' | 'inactive';
}

export interface Analytics {
    totalStudents: number;
    totalCourses: number;
    activeInstructors: number;
    completionRate: number;
    revenue?: number;
}