import React, { useState } from 'react';
import './App.css';
import DiaryPage from './pages/DiaryPage';
import LessonDetailPage from './pages/LessonDetailPage';
import LessonCard from "./components/LessonCard";
import {formatShortDate, getScheduleForDate} from "./data/scheduleData";
import {getHomeworkForLesson} from "./data/homeworkData";
import GradesPage from "./pages/GradesPage";
import SubjectDetailPage from './pages/SubjectDetailPage';
import DeadlinesWidget from './components/DeadlinesWidget';
import RecentGradesWidget from './components/RecentGradesWidget';
import './components/DashboardWidget.css';
import { getMaterialsForLesson } from "./data/lessonMaterials";
import { getGradeForLessonByDate } from "./data/gradesData";

function HeaderContent({ title }) {
    return (
        <div className="header-content">
            <span className="material-symbols-outlined icon">menu</span>
            <h1 className="header-title">{title}</h1>
            <img src={"images/header/profile.svg"} alt="profileIcon" className="icon"/>
        </div>
    );
}

const currentDate = new Date(/*"2025-11-03"*/);
const schedule = getScheduleForDate(currentDate);

// Компонент головної сторінки
function HomePage({ onLessonClick, onGradesClick, onNavigateToLesson }) {
    return (
        <>
            <div className="page-title">
                <h2>Розклад на сьогодні</h2>
            </div>

            <div className="lessons-list">
                {
                    schedule.length === 0 ? (
                        <div className="no-lessons">
                            <span className="material-symbols-outlined">event_busy</span>
                            <p>Вихідний день</p>
                            <p className="no-lessons-subtitle">Насолоджуйся відпочинком! 🎉</p>
                        </div>
                    ) : (
                        schedule.map((lesson) => {
                            const dateString = formatShortDate(currentDate);
                            const homework = getHomeworkForLesson(lesson.id, dateString);
                            const lessonDetails = getMaterialsForLesson(lesson.id, dateString);
                            const grade = getGradeForLessonByDate(lesson.subject, dateString);

                            return (
                                <LessonCard
                                    key={lesson.id}
                                    lessonNumber={lesson.lessonNumber}
                                    subject={lesson.subject}
                                    time={lesson.time}
                                    room={lesson.room}
                                    homework={homework}
                                    showDetails={false}

                                    teacher={lesson.teacher}
                                    topic={lessonDetails?.topic}
                                    materials={lessonDetails?.materials}
                                    grade={grade}

                                    onClick={() => onLessonClick && onLessonClick(lesson, homework, dateString, 'home')}
                                />
                            );
                        })
                    )
                }
            </div>

            <div className="dashboard-widgets">
                <DeadlinesWidget onNavigateToLesson={onNavigateToLesson}/>
                <RecentGradesWidget
                    onGradesClick={onGradesClick}
                    onNavigateToLesson={onNavigateToLesson}
                />
            </div>

            <div className="news-section">
                <h3 className="news-title">Стрічка новин</h3>
                <div className="news-placeholder">
                    <p>Тут будуть оголошення</p>
                </div>
            </div>
        </>
    );
}

function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [previousContext, setPreviousContext] = useState(null);
    const [diaryDate, setDiaryDate] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);

    const getHeaderTitle = () => {
        if (selectedSubject) return selectedSubject.subject;
        if (selectedLesson) return selectedLesson.subject;

        switch(activeTab) {
            case 'home': return 'Головна';
            case 'diary': return 'Щоденник';
            case 'grades': return 'Успішність';
            default: return 'Головна';
        }
    };

    // Обробник кліка на урок
    const handleLessonClick = (lesson, homework, date, source) => {
        console.log('Клік на урок:', lesson, homework, date, 'з:', source);

        // Зберігаємо контекст звідки відкрили урок
        setPreviousContext({
            source: source,
            date: date,
            tab: activeTab
        });

        setSelectedLesson({ ...lesson, homework, date });
    };

    // Обробник повернення назад
    const handleBackFromLesson = () => {
        if (previousContext) {
            // Якщо відкрили з головної - повертаємось на головну
            if (previousContext.source === 'home') {
                setActiveTab('home');
                setDiaryDate(null);
            }
            // Якщо відкрили зі щоденника - повертаємось в щоденник на ту саму дату
            else if (previousContext.source === 'diary') {
                setActiveTab('diary');
                // Встановлюємо дату з якої відкрили урок
                setDiaryDate(new Date(previousContext.date));
            }
        }

        setSelectedLesson(null);
        setPreviousContext(null);
    };

    const handleSubjectClick = (subjectData) => {
        console.log('Клік на предмет:', subjectData);
        setSelectedSubject(subjectData);
        setSelectedLesson(null);
    };

    const handleBackFromSubject = () => {
        setSelectedSubject(null);
        setActiveTab('grades');
    };

    const handleGradesClick = () => {
        setActiveTab('grades');
        setSelectedLesson(null);
        setSelectedSubject(null);
        setPreviousContext(null);
        setDiaryDate(null);
    };

    const navigateToLesson = (lessonId, dateString, source) => {
        console.log(`Навігація до уроку: ${lessonId} на ${dateString} з ${source}`);

        const lessonDate = new Date(dateString);
        const schedule = getScheduleForDate(lessonDate);

        const lesson = schedule.find(l => l.id === lessonId);

        if (!lesson) {
            console.error("Помилка: Урок не знайдено!");
            alert("Помилка: не вдалося знайти цей урок.");
            return;
        }

        const homework = getHomeworkForLesson(lessonId, dateString);

        // Використовуємо наш існуючий обробник
        handleLessonClick(lesson, homework, dateString, source);
    };

    const renderContent = () => {
        if (selectedSubject) {
            return (
                <SubjectDetailPage
                    subjectData={selectedSubject}
                    onBack={handleBackFromSubject}
                />
            );
        }

        if (selectedLesson) {
            return (
                <LessonDetailPage
                    lesson={selectedLesson}
                    homework={selectedLesson.homework}
                    date={selectedLesson.date}
                    onBack={handleBackFromLesson}
                />
            );
        }

        // 3. Інакше показуємо звичайні сторінки
        switch(activeTab) {
            case 'home':
                return <HomePage
                    onLessonClick={handleLessonClick}
                    onGradesClick={handleGradesClick}
                    onNavigateToLesson={navigateToLesson}
                />;
            case 'diary':
                return <DiaryPage onLessonClick={handleLessonClick} initialDate={diaryDate} />;
            case 'grades':
                return <GradesPage onSubjectClick={handleSubjectClick} />;
            default:
                return <HomePage onLessonClick={handleLessonClick} />;
        }
    };

    return (
        <div className="app">
            <header className="header">
                <HeaderContent title={getHeaderTitle()} />
            </header>

            <main className="main-content">
                {renderContent()}
            </main>

            <nav className="bottom-nav">
                <HeaderContent title={getHeaderTitle()} />
                <div className="nav-content">
                    <button
                        onClick={() => {
                            setActiveTab('home');
                            setSelectedLesson(null);
                            setSelectedSubject(null);
                            setPreviousContext(null);
                            setDiaryDate(null);
                        }}
                        className={`nav-button ${activeTab === 'home' && !selectedLesson ? 'active' : ''}`}
                    >
                        <div className={"button-icon-wrapper"}>
                            <span className="material-symbols-outlined nav-icon">home</span>
                        </div>
                        <span>Головна</span>
                    </button>

                    <button
                        onClick={() => {
                            setActiveTab('diary');
                            setSelectedLesson(null);
                            setPreviousContext(null);
                            setDiaryDate(null);
                        }}
                        className={`nav-button ${activeTab === 'diary' && !selectedLesson ? 'active' : ''}`}
                    >
                        <div className={"button-icon-wrapper"}>
                            <span className="material-symbols-outlined nav-icon">today</span>
                        </div>
                        <span>Щоденник</span>
                    </button>

                    <button
                        onClick={() => {
                            setActiveTab('grades');
                            setSelectedLesson(null);
                            setPreviousContext(null);
                            setDiaryDate(null);
                        }}
                        className={`nav-button ${activeTab === 'grades' && !selectedLesson ? 'active' : ''}`}
                    >
                        <div className={"button-icon-wrapper"}>
                            <span className="material-symbols-outlined nav-icon">award_star</span>
                        </div>
                        <span>Успішність</span>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default App;