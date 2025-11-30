// src/pages/TeacherJournalPage.jsx
import React, { useState, useEffect } from 'react';
import { getStudentsByClass } from '../data/classData';
import { getJournalData, getLessonDatesForSubject, updateJournalEntry } from '../data/teacherJournalData';
import { syncGradeFromJournal } from '../data/gradesData';
import './TeacherJournalPage.css';

const formatJournalDate = (dateString) => {
    try {
        const parts = dateString.split('-');
        return `${parts[2]}.${parts[1]}`;
    } catch (e) { return dateString; }
};

function TeacherJournalPage() {
    const [selectedClass, setSelectedClass] = useState('10a');
    const [selectedSubject, setSelectedSubject] = useState('algebra');

    // Локальний стан для відображення
    const [journalData, setJournalData] = useState({});

    const students = getStudentsByClass(selectedClass);
    const lessonDates = getLessonDatesForSubject(selectedSubject, selectedClass);

    // Завантаження даних при старті або зміні предмету
    useEffect(() => {
        const data = getJournalData(selectedSubject, selectedClass);
        // Робимо глибоку копію для локального стану, щоб уникнути мутацій
        setJournalData(JSON.parse(JSON.stringify(data)));
    }, [selectedClass, selectedSubject]);

    // 1. Обробник ВВОДУ (тільки UI)
    const handleInputChange = (studentId, date, value) => {
        // Оновлюємо локальний стан миттєво, щоб користувач бачив, що друкує
        setJournalData(prevData => {
            const newData = { ...prevData };
            if (!newData[studentId]) newData[studentId] = {};
            newData[studentId][date] = value;
            return newData;
        });
    };

    // 2. Обробник ЗАВЕРШЕННЯ (Збереження + Синхронізація)
    const handleGradeCommit = (studentId, date, value) => {
        const allowedValues = /^(1[0-2]|[1-9]|н|Н)$/;

        let finalValue = value;

        if (!allowedValues.test(value)) {
            // Якщо ввели дурницю - стираємо
            finalValue = "";
            // Оновлюємо UI назад на пусте
            handleInputChange(studentId, date, "");
        }

        // А. Зберігаємо в "Базу Даних" вчителя (щоб не зникало)
        updateJournalEntry(selectedSubject, selectedClass, studentId, date, finalValue);

        // Б. Синхронізація (тільки для тестового учня s10)
        if (studentId === 's10') {
            syncGradeFromJournal(selectedSubject, date, finalValue);
        }
    };

    const getGradeValue = (studentId, date) => {
        if (journalData[studentId] && journalData[studentId][date] !== undefined) {
            return journalData[studentId][date];
        }
        return "";
    };

    return (
        <div className="journal-page">
            <div className="journal-selectors">
                <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="journal-select"
                >
                    <option value="10a">10-А Клас</option>
                </select>

                <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="journal-select"
                >
                    <option value="algebra">Алгебра</option>
                    <option value="ukrainian_language">Укр. мова</option>
                </select>
            </div>

            <div className="journal-table-wrapper">
                <table className="journal-table">
                    <thead>
                    <tr>
                        <th className="student-name-header">Учень</th>
                        {lessonDates.map(lesson => (
                            <th key={lesson.date} className="date-header">
                                <div className="date-cell">
                                    <span>{formatJournalDate(lesson.date)}</span>
                                    <span className="date-type">{lesson.type}</span>
                                </div>
                            </th>
                        ))}
                    </tr>
                    </thead>

                    <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td className="student-name-cell">
                                <span className="student-index">{index + 1}.</span>
                                {student.name}
                            </td>

                            {lessonDates.map(lesson => (
                                <td key={`${student.id}-${lesson.date}`} className="grade-cell">
                                    <input
                                        type="text"
                                        className="grade-input"
                                        maxLength={2}
                                        value={getGradeValue(student.id, lesson.date)}
                                        // 1. Дозволяємо друкувати
                                        onChange={(e) => handleInputChange(student.id, lesson.date, e.target.value)}
                                        // 2. Зберігаємо тільки коли закінчили
                                        onBlur={(e) => handleGradeCommit(student.id, lesson.date, e.target.value)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TeacherJournalPage;