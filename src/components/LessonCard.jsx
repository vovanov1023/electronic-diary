// src/components/LessonCard.jsx
import React from 'react';
import './LessonCard.css';

function LessonCard({
                        lessonNumber,
                        subject,
                        type,
                        time,
                        room,
                        teacher,
                        grade,
                        homework,
                        onClick,
                        showDetails = false // Для щоденника показуємо більше деталей
                    }) {
    return (
        <div
            className="lesson-card-component"
            onClick={onClick}
        >
            <div className="lesson-time-badge">
                <div className="lesson-number-component">{lessonNumber}</div>
                {time && <div className="lesson-time-component">{time}</div>}
            </div>

            <div className="lesson-main-info">
                <div className="lesson-subject-row">
                    <h3 className="lesson-subject-component">{subject}</h3>
                    {homework && !homework.completed && (
                        <span className="homework-badge">ДЗ</span>
                    )}
                    {grade && (
                        <div className="lesson-grade-component">
                            <div className="grade-value">{grade}/12</div>
                            <div className="grade-label-component">Оцінка</div>
                        </div>
                    )}
                </div>

                {type && !showDetails && (
                    <p className="lesson-type-component">{type}</p>
                )}

                {showDetails && (room || teacher) && (
                    <div className="lesson-details">
                        {room && (
                            <span className="lesson-room">
                                <span className="material-symbols-outlined">door_front</span>
                                {room}
                            </span>
                        )}
                        {teacher && (
                            <span className="lesson-teacher">
                                <span className="material-symbols-outlined">person</span>
                                {teacher}
                            </span>
                        )}
                    </div>
                )}

                {homework && showDetails && (
                    <div className="lesson-homework-preview">
                        <div className="homework-icon-wrapper">
                            <span className="material-symbols-outlined">assignment</span>
                        </div>
                        <div className="homework-preview-text">
                            <div className="homework-title-preview">{homework.title}</div>
                            <div className="homework-deadline-preview">
                                <span className="material-symbols-outlined">schedule</span>
                                До {homework.deadline}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LessonCard;