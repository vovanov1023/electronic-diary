// src/data/teacherJournalData.js

const journalDatabase = {
    "algebra_10a": {
        "s1": {
            "2025-11-03": "10",
            "2025-11-05": "9",
            "2025-11-07": "11"
        },
        "s2": {
            "2025-11-03": "8",
            "2025-11-05": "н"
        },
        "s3": {
            "2025-11-03": "11",
            "2025-11-05": "12",
            "2025-11-07": "10"
        },
        // ... (інші учні)
        "s10": { // Наш "тестовий" учень
            "2025-11-04": "11",
            "2025-11-05": "9"
        }
    }
};

export const getLessonDatesForSubject = (subjectId, classId) => {
    // Поки що повертаємо статичний список для Алгебри 10-А
    if (subjectId === 'algebra' && classId === '10a') {
        return [
            { date: "2025-11-03", type: "Урок" },
            { date: "2025-11-04", type: "Урок" },
            { date: "2025-11-05", type: "Урок" },
            { date: "2025-11-07", type: "КР" }, // П'ятниця
            { date: "2025-11-10", type: "Урок" },
            { date: "2025-11-12", type: "Урок" },
        ];
    }
    // За замовчуванням
    return [];
};

export const getJournalData = (subjectId, classId) => {
    const key = `${subjectId}_${classId}`;
    return journalDatabase[key] || {};
};

// === ФУНКЦІЯ ЗБЕРЕЖЕННЯ ===
export const updateJournalEntry = (subjectId, classId, studentId, date, value) => {
    const key = `${subjectId}_${classId}`;

    if (!journalDatabase[key]) journalDatabase[key] = {};
    if (!journalDatabase[key][studentId]) journalDatabase[key][studentId] = {};

    if (value === "") {
        delete journalDatabase[key][studentId][date];
    } else {
        journalDatabase[key][studentId][date] = value;
    }

    console.log(`Журнал збережено: ${studentId} ${date} -> ${value}`);
};