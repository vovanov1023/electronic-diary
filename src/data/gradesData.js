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
    // Кожен ключ - унікальний ID предмету (можна використовувати subject.toLowerCase())
    "algebra": {
        subject: "Алгебра",
        teacher: "Іваненко О.М.",
        semester1: [
            { id: 1, type: "СР", grade: 10, max: 12, date: "2025-09-15" },
            { id: 2, type: "ДЗ", grade: 11, max: 12, date: "2025-09-20" },
            { id: 3, type: "КР", grade: 9, max: 12, date: "2025-10-01" },
            { id: 4, type: "Відповідь", grade: 12, max: 12, date: "2025-10-05" },
            { id: 5, type: "СР", grade: 10, max: 12, date: "2025-10-15" },
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
            { id: 6, type: "Диктант", grade: 8, max: 12, date: "2025-09-17", comment: "" },
            { id: 7, type: "Твір", grade: 10, max: 12, date: "2025-09-25", comment: "" },
            { id: 8, type: "СР", grade: 9, max: 12, date: "2025-10-10", comment: "" },
        ],
        semester1_final: 9,
        semester2: [],
        semester2_final: null,
        year_final: null,
    },
    "physics": {
        subject: "Фізика",
        teacher: "Бойко В.І.",
        semester1: [
            { id: 9, type: "ЛР", grade: 11, max: 12, date: "2025-09-22", comment: "" },
            { id: 10, type: "СР", grade: 10, max: 12, date: "2025-10-03", comment: "можна було потужніше" },
            { id: 11, type: "КР", grade: 11, max: 12, date: "2025-10-20", comment: "" },
        ],
        semester1_final: 11,
        semester2: [],
        semester2_final: null,
        year_final: null,
    },
    "english_language": {
        subject: "Англійська мова",
        teacher: "Ковальчук М.С.",
        semester1: [
            { id: 12, type: "Speaking", grade: 12, max: 12, date: "2025-09-18", comment: ""},
            { id: 13, type: "Writing", grade: 10, max: 12, date: "2025-09-28", comment: "" },
            { id: 14, type: "Test", grade: 11, max: 12, date: "2025-10-12", comment: "вельми потужно" },
        ],
        semester1_final: 11,
        semester2: [],
        semester2_final: null,
        year_final: null,
    },
    "ukraine_history": {
        subject: "Історія України",
        teacher: "Шевченко Т.П.",
        semester1: [
            { id: 15, type: "Відповідь", grade: 9, max: 12, date: "2025-09-16", comment: "" },
            { id: 16, type: "Тест", grade: 10, max: 12, date: "2025-09-30", comment: "" },
            { id: 17, type: "Контурні к.", grade: 8, max: 12, date: "2025-10-14", comment: "терпимо" },
        ],
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
    return subjects.map(subject => ({
        ...subject,
        average: calculateAverage(subject.semester1) // Поки що рахуємо лише за 1 семестр
    }));
};