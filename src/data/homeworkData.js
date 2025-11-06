// src/data/homeworkData.js

export const homeworkData = [
    {
        id: 1,
        date: "2025-11-03",
        lessonId: "3",
        title: "Розв'язати задачі",
        description: "Завдання №45-52 з теми 'Логарифмічні рівняння'. Обов'язково показати всі кроки розв'язання.",
        deadline: "14:25",
        completed: false,
        type: "writing",
        attachments: []
    },
    {
        id: 2,
        date: "2025-11-04",
        lessonId: "5",
        title: "Виконати вправи в підручнику",
        description: "Завдання 7, 5 параграф 13.",
        deadline: "12:30",
        completed: false,
        type: "writing",
        attachments: []
    }

];

// Отримати завдання за датою
export const getHomeworkByDate = (date) => {
    return homeworkData.filter(hw => hw.date === date);
};

// Отримати завдання для конкретного уроку
export const getHomeworkForLesson = (lessonId, date) => {
    return homeworkData.find(hw => hw.lessonId === lessonId && hw.date === date);
};

// Отримати кількість невиконаних завдань за датою
export const getIncompleteHomeworkCount = (date) => {
    return homeworkData.filter(hw => hw.date === date && !hw.completed).length;
};