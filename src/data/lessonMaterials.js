// src/data/lessonMaterials.js

export const lessonMaterials = {
    // Алгебра, понеділок, пара 2 (уроки 3-4)
    "3": {
        topic: "Логарифмічні рівняння",
        description: "Продовжуємо вивчати логарифмічні рівняння. Розглянемо складніші випадки та методи розв'язання.",
        materials: [
            {
                id: 1,
                type: "link",
                title: "Презентація до уроку",
                url: "https://docs.google.com/presentation/example",
                icon: "slideshow"
            },
            {
                id: 2,
                type: "file",
                title: "Конспект теми.pdf",
                url: "#",
                icon: "description"
            },
            {
                id: 3,
                type: "video",
                title: "Відеоурок: Логарифмічні рівняння",
                url: "https://youtube.com/watch?v=example",
                icon: "play_circle"
            }
        ],
        grades: [
            {
                id: 1,
                type: "Контрольна робота",
                grade: 11,
                maxGrade: 12,
                date: "2025-10-28",
                comment: "Добре, але є помилки в останній задачі"
            },
            {
                id: 2,
                type: "Домашнє завдання",
                grade: 12,
                maxGrade: 12,
                date: "2025-10-25",
                comment: "Відмінна робота!"
            }
        ]
    },

    // Українська мова, вівторок, пара 3 (уроки 5-6)
    "5": {
        topic: "Складнопідрядні речення",
        description: "Вивчаємо види складнопідрядних речень, їх ознаки та правила пунктуації.",
        materials: [
            {
                id: 1,
                type: "link",
                title: "Правила пунктуації",
                url: "https://example.com/rules",
                icon: "article"
            },
            {
                id: 2,
                type: "file",
                title: "Вправи для практики.docx",
                url: "#",
                icon: "description"
            }
        ],
        grades: [
            {
                id: 1,
                type: "Самостійна робота",
                grade: 10,
                maxGrade: 12,
                date: "2025-10-30",
                comment: "Добре, але потрібно більше уваги до розділових знаків"
            }
        ]
    },

    // Англійська мова, понеділок, пара 1 (уроки 1-2)
    "1": {
        topic: "Unit 5: Artificial Intelligence",
        description: "Discussing the impact of AI on modern society. Vocabulary and grammar practice.",
        materials: [
            {
                id: 1,
                type: "file",
                title: "Vocabulary list.pdf",
                url: "#",
                icon: "description"
            },
            {
                id: 2,
                type: "video",
                title: "TED Talk: The Future of AI",
                url: "https://youtube.com/watch?v=example",
                icon: "play_circle"
            },
            {
                id: 3,
                type: "link",
                title: "Grammar exercises (online)",
                url: "https://example.com/grammar",
                icon: "link"
            }
        ],
        grades: []
    }
};

// Отримати матеріали для конкретного уроку
export const getMaterialsForLesson = (lessonId) => {
    return lessonMaterials[lessonId] || null;
};

// Коментарі (для прикладу)
export const lessonComments = {
    "3": [
        {
            id: 1,
            author: "Іваненко О.М.",
            role: "teacher",
            text: "Не забудьте здати домашнє завдання до кінця тижня!",
            date: "2025-11-02T10:30:00",
            avatar: null
        },
        {
            id: 2,
            author: "Петренко М.",
            role: "student",
            text: "Добрий день! Чи можна використовувати калькулятор на контрольній?",
            date: "2025-11-02T14:20:00",
            avatar: null
        }
    ]
};

// Отримати коментарі для уроку
export const getCommentsForLesson = (lessonId) => {
    return lessonComments[lessonId] || [];
};