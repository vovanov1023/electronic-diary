// src/pages/TeacherLessonEditorPage.jsx
import React, { useState } from 'react';
// Імпортуємо наші нові функції
import { upsertLessonDetails } from '../data/lessonMaterials';
import { upsertHomework } from '../data/homeworkData';
import './TeacherLessonEditorPage.css';

function TeacherLessonEditorPage({ lessonData, onBack }) {
    const { lesson, dateString, topic, homework } = lessonData;

    // Створюємо стани для всіх полів форми
    const [lessonTopic, setLessonTopic] = useState(topic || "");
    const [hwTitle, setHwTitle] = useState(homework?.title || "");
    const [hwDescription, setHwDescription] = useState(homework?.description || "");
    const [hwDeadline, setHwDeadline] = useState(homework?.deadline || "17:00");

    const handleSave = () => {
        // 1. Зберігаємо тему уроку
        upsertLessonDetails(lesson.id, dateString, {
            topic: lessonTopic,
            description: "" // Поки не використовуємо опис
        });

        // 2. Зберігаємо ДЗ (лише якщо вчитель ввів заголовок)
        if (hwTitle.trim() !== "") {
            upsertHomework(lesson.id, dateString, lesson.subject, {
                title: hwTitle,
                description: hwDescription,
                deadline: hwDeadline
            });
        }

        alert('Урок збережено!');
        onBack(); // Повертаємось на попередню сторінку
    };

    return (
        <div className="lesson-editor-page">
            {/* Header (використовуємо знайомі стилі) */}
            <div className="detail-header">
                <button onClick={onBack} className="back-button">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Назад
                </button>
                <div className="detail-header-info">
                    <h1 className="detail-subject">{lesson.subject} ({lesson.class})</h1>
                    <div className="detail-meta">
                        <span className="material-symbols-outlined">calendar_today</span>
                        <span>{dateString}</span>
                        <span className="material-symbols-outlined">schedule</span>
                        <span>{lesson.time}</span>
                    </div>
                </div>
            </div>

            {/* Форма редагування */}
            <div className="editor-form-content">

                {/* Секція "Урок" */}
                <section className="detail-section">
                    <h2 className="section-title">
                        <span className="material-symbols-outlined">school</span>
                        Інформація про урок
                    </h2>
                    <div className="form-group">
                        <label htmlFor="lessonTopic">Тема уроку</label>
                        <input
                            type="text"
                            id="lessonTopic"
                            className="form-input"
                            value={lessonTopic}
                            onChange={(e) => setLessonTopic(e.target.value)}
                            placeholder="Наприклад: Логарифмічні рівняння"
                        />
                    </div>
                </section>

                {/* Секція "Домашнє завдання" */}
                <section className="detail-section">
                    <h2 className="section-title">
                        <span className="material-symbols-outlined">assignment</span>
                        Домашнє завдання
                    </h2>
                    <div className="form-group">
                        <label htmlFor="hwTitle">Завдання</label>
                        <input
                            type="text"
                            id="hwTitle"
                            className="form-input"
                            value={hwTitle}
                            onChange={(e) => setHwTitle(e.target.value)}
                            placeholder="Наприклад: Вправа №15, ст. 34"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hwDescription">Опис (необов'язково)</label>
                        <textarea
                            id="hwDescription"
                            className="form-textarea"
                            rows="4"
                            value={hwDescription}
                            onChange={(e) => setHwDescription(e.target.value)}
                            placeholder="Додаткові інструкції, посилання тощо..."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hwDeadline">Дедлайн (час)</label>
                        <input
                            type="time"
                            id="hwDeadline"
                            className="form-input short"
                            value={hwDeadline}
                            onChange={(e) => setHwDeadline(e.target.value)}
                        />
                    </div>
                </section>

                {/* Секція "Матеріали" (поки заглушка) */}
                <section className="detail-section">
                    <h2 className="section-title">
                        <span className="material-symbols-outlined">folder_open</span>
                        Матеріали до уроку
                    </h2>
                    <button className="attach-file-btn editor-attach-btn">
                        <span className="material-symbols-outlined">attach_file</span>
                        Прикріпити файл
                    </button>
                    <p className="form-hint">Тут можна буде додавати файли та посилання (як в Classroom).</p>
                </section>

                {/* Кнопка Зберегти */}
                <button className="save-lesson-btn" onClick={handleSave}>
                    <span className="material-symbols-outlined">save</span>
                    Зберегти зміни
                </button>
            </div>
        </div>
    );
}

export default TeacherLessonEditorPage;