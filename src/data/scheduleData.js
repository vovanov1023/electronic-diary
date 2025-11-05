// src/data/scheduleData.js

// Час дзвінків (пари по 2 уроки)
export const bellSchedule = [
    { start: "08:50", end: "09:35" },
    { start: "09:40", end: "10:25" },
    { start: "10:35", end: "11:20" },
    { start: "11:25", end: "12:10" },
    { start: "12:30", end: "13:15" },
    { start: "13:30", end: "14:15" },
    { start: "14:25", end: "15:10" },
    { start: "15:15", end: "16:00" }
];

// Типи тижнів для розкладу
const WEEK_TYPES = {
    ALL: 'all',           // Кожен тиждень
    ODD: '1t',            // Непарні тижні (1т)
    EVEN: '2t',           // Парні тижні (2т)
    EVEN_HALF: '2/4t',    // Кожен другий парний (2/4т)
    ODD_HALF: '3/4t',     // Кожен другий непарний (3/4т)
    FIRST_ODD: '1/4t',    // Кожен перший непарний (1/4т)
    FOURTH: '4/4t'        // Кожен четвертий тиждень (4/4т)
};

const baseSchedule = {
    monday: [
        { id: "1", subject: "Англійська мова", room: "107", weekType: WEEK_TYPES.ALL },
        { id: "2", subject: "Англійська мова", room: "107", weekType: WEEK_TYPES.ALL },
        { id: "3", subject: "Алгебра", room: "106", weekType: WEEK_TYPES.ALL },
        { id: "4", subject: "Алгебра", room: "106", weekType: WEEK_TYPES.ALL },
        { id: "5_odd", subject: "Фізика", room: "102", weekType: WEEK_TYPES.ODD },
        { id: "6_odd", subject: "Фізика", room: "102", weekType: WEEK_TYPES.ODD},
        { id: "5_even", subject: "Українська література", room: "102", weekType: WEEK_TYPES.EVEN },
        { id: "6_even", subject: "Українська література", room: "102", weekType: WEEK_TYPES.EVEN }
    ],
    tuesday: [
        { id: "1", subject: "Фізична культура", room: "Спортзал", weekType: WEEK_TYPES.ALL },
        { id: "2", subject: "Фізична культура", room: "Спортзал", weekType: WEEK_TYPES.ALL },
        { id: "3", subject: "Геометрія", room: "106", weekType: WEEK_TYPES.ALL },
        { id: "4", subject: "Геометрія", room: "106", weekType: WEEK_TYPES.ALL },
        { id: "5", subject: "Українська мова", room: "202", weekType: WEEK_TYPES.ALL },
        { id: "6", subject: "Українська мова", room: "202", weekType: WEEK_TYPES.ALL },
        { id: "7_odd", subject: "Алгебра", room: "106", weekType: WEEK_TYPES.ODD },
        { id: "8_odd", subject: "Алгебра", room: "106", weekType: WEEK_TYPES.ODD },
        { id: "7_even", subject: "Фізика", room: "102", weekType: WEEK_TYPES.EVEN },
        { id: "8_even", subject: "Фізика", room: "102", weekType: WEEK_TYPES.EVEN }
    ],
    wednesday: [
        { id: "1", subject: "Алгебра", room: "106", weekType: WEEK_TYPES.ALL },
        { id: "2", subject: "Алгебра", room: "106", weekType: WEEK_TYPES.ALL },
        { id: "3", subject: "Інформатика", room: "101", weekType: WEEK_TYPES.ALL },
        { id: "4", subject: "Технології", room: "101", weekType: WEEK_TYPES.ALL },
        { id: "5", subject: "Англ. мова", room: "202", weekType: WEEK_TYPES.ALL },
        { id: "6", subject: "Англ. мова", room: "202", weekType: WEEK_TYPES.ALL },
        { id: "7", subject: "Захист України", room: "204", weekType: WEEK_TYPES.ALL },
        { id: "8", subject: "Захист України", room: "204", weekType: WEEK_TYPES.ALL }
    ],
    thursday: [
        { id: "1_odd", subject: "Хімія", room: null, weekType: WEEK_TYPES.ODD },
        { id: "2_odd", subject: "Хімія", room: null, weekType: WEEK_TYPES.ODD },
        { id: "1_even", subject: "Біологія", room: null, weekType: WEEK_TYPES.EVEN },
        { id: "2_even", subject: "Біологія", room: null, weekType: WEEK_TYPES.EVEN },
        { id: "3_odd", subject: "Географія", room: null, weekType: WEEK_TYPES.ODD },
        { id: "4_odd", subject: "Географія", room: null, weekType: WEEK_TYPES.ODD },
        { id: "3_even", subject: "Астрономія", room: null, weekType: WEEK_TYPES.EVEN },
        { id: "4_even", subject: "Астрономія", room: null, weekType: WEEK_TYPES.EVEN },
        { id: "5_odd", subject: "Всесвітня історія", room: null, weekType: WEEK_TYPES.ODD },
        { id: "6_odd", subject: "Всесвітня історія", room: null, weekType: WEEK_TYPES.ODD },
        { id: "5_even", subject: "Зарубіжна література", room: null, weekType: WEEK_TYPES.EVEN },
        { id: "6_even", subject: "Зарубіжна література", room: null, weekType: WEEK_TYPES.EVEN },
        { id: "7_first_odd", subject: "Біологія", room: null, weekType: WEEK_TYPES.FIRST_ODD },
        { id: "8_first_odd", subject: "Біологія", room: null, weekType: WEEK_TYPES.FIRST_ODD },
        { id: "7_odd_half", subject: "Хімія", room: null, weekType: WEEK_TYPES.ODD_HALF },
        { id: "8_odd_half", subject: "Хімія", room: null, weekType: WEEK_TYPES.ODD_HALF },
        { id: "7_fourth", subject: "Інформатика", room: null, weekType: WEEK_TYPES.FOURTH },
        { id: "8_fourth", subject: "Інформатика", room: null, weekType: WEEK_TYPES.FOURTH }
    ],
    friday: [
        { id: "1_odd", subject: "Історія України", room: "104", weekType: WEEK_TYPES.ODD },
        { id: "2_odd", subject: "Історія України", room: "104", weekType: WEEK_TYPES.ODD },
        { id: "1_even", subject: "Геометрія", room: "106", weekType: WEEK_TYPES.EVEN },
        { id: "2_even", subject: "Геометрія", room: "106", weekType: WEEK_TYPES.EVEN },
        { id: "3_even", subject: "Фізика", room: "102", weekType: WEEK_TYPES.EVEN },
        { id: "4_even", subject: "Фізика", room: "102", weekType: WEEK_TYPES.EVEN },
        { id: "3_odd", subject: "Українська література", room: "106", weekType: WEEK_TYPES.ODD },
        { id: "4_odd", subject: "Українська література", room: "106", weekType: WEEK_TYPES.ODD },
        { id: "5", subject: "Алгебра", room: "106", weekType: WEEK_TYPES.ALL },
        { id: "6", subject: "Алгебра", room: "106", weekType: WEEK_TYPES.ALL },
        { id: "7_even_half", subject: "Історія України", room: "104", weekType: WEEK_TYPES.EVEN_HALF },
        { id: "8_even_half", subject: "Історія України", room: "104", weekType: WEEK_TYPES.EVEN_HALF }
    ]
};

// Функція для визначення парності тижня
export const getWeekType = (date) => {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + startOfYear.getDay() + 1) / 7);
    return weekNumber % 2 === 0 ? 'even' : 'odd';
};

// Функція для визначення номера тижня в місяці
export const getWeekOfMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfMonth = date.getDate();
    return Math.ceil((dayOfMonth + firstDay.getDay()) / 7);
};

// Перевірка чи відповідає тиждень типу
const matchesWeekType = (weekTypeRule, date) => {
    const weekType = getWeekType(date);
    const weekOfMonth = getWeekOfMonth(date);

    switch(weekTypeRule) {
        case WEEK_TYPES.ALL:
            return true;
        case WEEK_TYPES.ODD:
            return weekType === 'odd';
        case WEEK_TYPES.EVEN:
            return weekType === 'even';
        case WEEK_TYPES.EVEN_HALF: // 2-й і 4-й тиждень місяця
            return weekType === 'even' && (weekOfMonth === 2 || weekOfMonth === 4);
        case WEEK_TYPES.ODD_HALF: // 1-й і 3-й тиждень місяця
            return weekType === 'odd' && (weekOfMonth === 1 || weekOfMonth === 3);
        case WEEK_TYPES.FIRST_ODD: // Перший непарний
            return weekType === 'odd' && weekOfMonth === 1;
        case WEEK_TYPES.FOURTH: // Кожен четвертий тиждень
            return weekOfMonth === 4;
        default:
            return true;
    }
};

// Отримання розкладу на конкретний день
export const getScheduleForDate = (date) => {
    const dayOfWeek = date.getDay();

    // Вихідні - немає розкладу
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return [];
    }

    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayName = dayNames[dayOfWeek];

    let schedule = baseSchedule[dayName] || [];

    // Фільтруємо уроки відповідно до типу тижня
    schedule = schedule.filter(lesson => matchesWeekType(lesson.weekType, date));
    return schedule.map((lesson, index) => ({
        ...lesson,
        lessonNumber: index + 1,
        time: `${bellSchedule[index].start} - ${bellSchedule[index].end}`
    }));
};

// Форматування дати
export const formatDate = (date) => {
    const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
    const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
        'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${dayName}, ${day} ${month}`;
};

// Форматування короткої дати
export const formatShortDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};