// src/pages/SubjectDetailPage.jsx
import React from 'react';
import { calculateAverage } from '../data/gradesData';
import './SubjectDetailPage.css';

// Утиліта для дати (YYYY-MM-DD -> DD.MM.YYYY)
const formatFullDate = (dateString) => {
    try {
        const [year, month, day] = dateString.split('-');
        return `${day}.${month}.${year}`;
    } catch (e) {
        return dateString;
    }
};

function SubjectDetailPage({ subjectData, onBack }) {

    const average = calculateAverage(subjectData.semester1);
    const absenceCount = subjectData.semester1_absences ? subjectData.semester1_absences.length : 0;
    const absences = subjectData.semester1_absences || [];

    return (
        <div className="subject-detail-page">
            {/* Header */}
            <div className="detail-header subject-detail-header">
                <button onClick={onBack} className="back-button">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Назад
                </button>

                <div className="detail-header-info">
                    <h1 className="detail-subject">{subjectData.subject}</h1>
                    <div className="detail-meta">
                        <span className="material-symbols-outlined">person</span>
                        <span>{subjectData.teacher}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="detail-content">

                {/* Статистика */}
                <section className="detail-section">
                    <h2 className="section-title">
                        <span className="material-symbols-outlined">monitoring</span>
                        I Семестр
                    </h2>
                    <div className="subject-stats-grid">
                        <div className="subject-stats-item">
                            <span className="stats-label">Середній бал</span>
                            <span className="stats-value-small">{average}</span>
                        </div>
                        <div className="subject-stats-item">
                            <span className="stats-label">Пропусків</span>
                            <span className="stats-value-small">{absenceCount}</span>
                        </div>
                        <div className="subject-stats-item">
                            <span className="stats-label">Тематична</span>
                            <span className="stats-value-small">?</span>
                        </div>
                        <div className="subject-stats-item">
                            <span className="stats-label">Семестрова</span>
                            <span className="stats-value-small">{subjectData.semester1_final || '?'}</span>
                        </div>
                    </div>
                </section>

                {/* Усі Оцінки */}
                <section className="detail-section">
                    <h2 className="section-title">
                        <span className="material-symbols-outlined">grade</span>
                        Список оцінок
                    </h2>

                    {subjectData.semester1.length > 0 ? (
                        <div className="full-grades-list">
                            {/* Відображаємо у зворотному порядку - новіші вгорі */}
                            {[...subjectData.semester1].reverse().map((grade) => (
                                <div key={grade.id} className="full-grade-item">
                                    <div className="full-grade-main">
                                        <div className="full-grade-value">{grade.grade}</div>
                                        <div className="full-grade-info">
                                            <span className="full-grade-type">{grade.type}</span>
                                            <span className="full-grade-date">{formatFullDate(grade.date)}</span>
                                        </div>
                                    </div>
                                    {grade.comment && (
                                        <div className="full-grade-comment">
                                            <span className="material-symbols-outlined">chat_bubble</span>
                                            <span>{grade.comment}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-grades-message">Оцінок за цей семестр ще немає.</p>
                    )}
                </section>

                <section className="detail-section">
                    <h2 className="section-title">
                        <span className="material-symbols-outlined">event_busy</span>
                        Список пропусків
                    </h2>

                    {absences.length > 0 ? (
                        <div className="full-absences-list">
                            {[...absences].reverse().map((absence) => (
                                <div key={absence.id} className="full-absence-item">
                                    <div className="full-absence-main">
                                        <div className="full-absence-icon">
                                            <span className="material-symbols-outlined">
                                                person_off
                                            </span>
                                        </div>
                                        <div className="full-absence-info">
                                            <span className="full-absence-type">
                                                Пропуск
                                            </span>
                                            <span className="full-absence-date">{formatFullDate(absence.date)}</span>
                                        </div>
                                    </div>
                                    {absence.comment && (
                                        <div className="full-absence-comment">
                                            <span className="material-symbols-outlined">chat_bubble</span>
                                            <span>{absence.comment}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-grades-message">Пропусків за цей семестр немає.</p>
                    )}
                </section>

            </div>
        </div>
    );
}

export default SubjectDetailPage;