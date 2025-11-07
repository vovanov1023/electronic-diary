// src/data/gradesData.js

// Утиліта для розрахунку середнього
export const calculateAverage = (grades) => {
    if (!grades || grades.length === 0) return 0;
    const sum = grades.reduce((acc, grade) => acc + grade.grade, 0);
    const average = sum / grades.length;
    // Повертаємо середнє з одним знаком після коми
    return parseFloat(average.toFixed(1));
};

export const gradesData = {
    "algebra": {
        subject: "Алгебра",
        teacher: "Іваненко О.М.",
        semester1: [
            { id: 1, type: "СР", grade: 10, max: 12, date: "2025-11-04", lessonId: "7" }
        ],
        semester1_absences: [
            { id: 'a1', date: '2025-09-18', },
            { id: 'a2', date: '2025-10-03', comment: 'Був у лікаря' }
        ],
        semester1_final: 10,
        semester2: [],
        semester2_final: null,
        year_final: null,
    },
    "ukrainian_language": {
        subject: "Українська мова",
        teacher: "Петренко Г.В.",
        semester1: [
            { id: 6, type: "Диктант", grade: 8, max: 12, date: "2025-11-04", comment: "", lessonId: "5" }
        ],
        semester1_absences: [],
        semester1_final: 9,
        semester2: [],
        semester2_final: null,
        year_final: null,
    },
    "physics": {
        subject: "Фізика",
        teacher: "Бойко В.І.",
        semester1: [
            { id: 9, type: "ЛР", grade: 11, max: 12, date: "2025-11-03", comment: "", lessonId: "5" }
        ],
        semester1_absences: [],
        semester1_final: 11,
        semester2: [],
        semester2_final: null,
        year_final: null,
    },
    "english_language": {
        subject: "Англійська мова",
        teacher: "Ковальчук М.С.",
        semester1: [
            { id: 12, type: "Speaking", grade: 12, max: 12, date: "2025-11-03", comment: "", lessonId: "1"}
        ],
        semester1_absences: [],
        semester1_final: 11,
        semester2: [],
        semester2_final: null,
        year_final: null,
    },
    "ukraine_history": {
        subject: "Історія України",
        teacher: "Шевченко Т.П.",
        semester1: [
            { id: 15, type: "Відповідь", grade: 1, max: 12, date: "2025-09-16", comment: "", lessonId: "7" }
        ],
        semester1_absences: [],
        semester1_final: 9,
        semester2: [],
        semester2_final: null,
        year_final: null,
    }
};

export function getGradesForLesson(subjectName) {
    for (const subject in gradesData) {
        if (gradesData[subject].subject === subjectName) {
            return gradesData[subject].semester1;
        }
    }
    return [];
}

// Отримати всі дані
export const getAllGrades = () => {
    // Одразу розраховуємо середній бал для кожного предмету
    const subjects = Object.values(gradesData);
    return subjects.map(
        subject => (
            {
                ...subject,
                average: calculateAverage(subject.semester1), // Поки що рахуємо лише за 1 семестр
                absenceCount: subject.semester1_absences ? subject.semester1_absences.length : 0
            }
        )
    );
};

export const getGradeForLessonByDate = (subjectName, dateString) => {
    const grades = getGradesForLesson(subjectName);
    if (!grades) return null;
    return grades.find(grade => grade.date === dateString) || null;
};

export const getRecentGrades = (limit = 3) => {
    const allGrades = [];

    for (const subjectKey in gradesData) {
        const subject = gradesData[subjectKey];

        subject.semester1.forEach(grade => {
            allGrades.push({
                ...grade,
                subject: subject.subject
            });
        });
    }

    allGrades.sort((a, b) => new Date(b.date) - new Date(a.date));
    return allGrades.slice(0, limit);
};