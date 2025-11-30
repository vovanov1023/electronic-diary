// src/components/LessonCard.jsx
import React from 'react';
import './LessonCard.css';

const getIconForType = (type) => {
    const icons = {
        link: 'link',
        file: 'description',
        video: 'play_circle',
        slideshow: 'slideshow',
        article: 'article'
    };
    return icons[type] || 'attach_file';
};

function LessonCard({
                        lessonNumber,
                        subject,
                        time,
                        room,
                        teacher,
                        homework,
                        grade,
                        topic,
                        materials,
                        onClick,
                        showDetails = false
                    }) {
    return (
        <div
            className="lesson-card-component"
            onClick={onClick}
        >
            <div className="lesson-time-badge">
                <div className="lesson-number-component">{lessonNumber}</div>
                {time && <div className="lesson-time-component">{time.replace(' - ', '\n')}</div>}
            </div>

            <div className="lesson-main-info">

                <div className="lesson-subject-row">
                    <h3 className="lesson-subject-component">{subject}</h3>
                    {grade && (
                        <div className="lesson-grade-badge">
                            {grade.grade}
                        </div>
                    )}

                    {room && !showDetails && (
                        <span className="lesson-room-badge">
                            <span className="material-symbols-outlined">door_front</span>
                            {room}
                        </span>
                    )}
                </div>

                {topic && (
                    <p className="lesson-topic-preview">{topic}</p>
                )}

                {showDetails && (room || teacher) && (
                    <div className="lesson-details">
                        {teacher && (
                            <span className="lesson-teacher">
                                <span className="material-symbols-outlined">person</span>
                                {teacher}
                            </span>
                        )}
                        {room && (
                            <span className="lesson-room">
                                <span className="material-symbols-outlined">door_front</span>
                                {room}
                            </span>
                        )}
                    </div>
                )}

                {/* --- Прев'ю ДЗ (якщо є) --- */}
                {homework && showDetails && (
                    <div className="lesson-homework-preview">
                        <div className="homework-icon-wrapper">
                            <span className="material-symbols-outlined">
                                {homework.completed ? 'check' : 'assignment'}
                            </span>
                        </div>
                        <div className="homework-preview-text">
                            <div className={`homework-title-preview ${homework.completed ? 'completed' : ''}`}>
                                {homework.title}
                            </div>
                            <div className="homework-deadline-preview">
                                <span className="material-symbols-outlined">schedule</span>
                                До {homework.deadline}
                            </div>
                        </div>
                    </div>
                )}

                {/* --- Прев'ю Матеріалів (якщо є) --- */}
                {materials && materials.length > 0 && (
                    <div className="materials-preview-list">
                        {materials.slice(0, 3).map(material => ( // Показуємо макс. 3
                            <div key={material.id} className="material-preview-item">
                                <span className="material-symbols-outlined">
                                    {material.icon || getIconForType(material.type)}
                                </span>
                                <span>{material.title}</span>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default LessonCard;