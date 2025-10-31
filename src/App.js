import React, { useState } from 'react';
import './App.css';

// Тестові дані уроків
const lessonsData = [
  {
    id: 1,
    subject: "Історія України",
    type: "Переглянути матеріал",
    grade: "12"
  },
  {
    id: 2,
    subject: "Англійська мова",
    type: "Виконати тестування",
    grade: "12"
  },
  {
    id: 3,
    subject: "Алгебра",
    type: "Контрольна робота",
    grade: "12"
  },
  {
    id: 4,
    subject: "Біологія",
    type: "Перевглянути матеріал до уроку",
    grade: "12"
  },
  {
    id: 5,
    subject: "Фізика",
    type: "Лекція, перевглянути матеріал",
    grade: "12"
  },
  {
    id: 6,
    subject: "Географія",
    type: "Завдання",
    grade: "12"
  },
  {
    id: 7,
    subject: "Українська література",
    type: "Твір",
    grade: "12"
  },
  {
    id: 8,
    subject: "Фізична культура",
    type: "Завдання",
    grade: "12"
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
      <div className="app">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <img src={"images/header/menu.svg"} alt="menuIcon" className="icon"/>
            <h1 className="header-title">Головна</h1>
            <img src={"images/header/profile.svg"} alt="profileIcon" className="icon"/>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <div className="page-title">
            <h2>Розклад на сьогодні</h2>
          </div>

          {/* Lessons List */}
          <div className="lessons-list">
            {lessonsData.map((lesson, index) => (
                <div key={lesson.id} className="lesson-card">
                  <div className="lesson-content">
                    <div className="lesson-info">
                      <span className="lesson-number">{index + 1}.</span>
                      <div>
                        <h3 className="lesson-subject">{lesson.subject}</h3>
                        <p className="lesson-type">{lesson.type}</p>
                      </div>
                    </div>
                    <div className="lesson-meta">
                      <div className="lesson-grade">{lesson.grade}/12</div>
                      <div className="grade-label">Оцінка</div>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* News Section */}
          <div className="news-section">
            <h3 className="news-title">Стрічка новин</h3>
            <div className="news-placeholder">
              <p>Тут будуть оголошення</p>
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="bottom-nav">
          <div className="nav-content">
            <button
                onClick={() => setActiveTab('home')}
                className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
            >
              <img src={`images/bottom-navbar/${activeTab === 'home' ? 'active' : 'inactive'}/home.svg`} alt={"mainPage"} className="nav-icon" />
              <span>Головна</span>
            </button>

            <button
                onClick={() => setActiveTab('diary')}
                className={`nav-button ${activeTab === 'diary' ? 'active' : ''}`}
            >
              <img src={`images/bottom-navbar/${activeTab === 'diary' ? 'active' : 'inactive'}/diary.svg`} alt={"diaryIcon"} className="nav-icon" />
              <span>Щоденник</span>
            </button>

            <button
                onClick={() => setActiveTab('grades')}
                className={`nav-button ${activeTab === 'grades' ? 'active' : ''}`}
            >
              <img src={`images/bottom-navbar/${activeTab === 'grades' ? 'active' : 'inactive'}/grades.svg`} alt={"gradesIcon"} className="nav-icon" />
              <span>Успішність</span>
            </button>
          </div>
        </nav>
      </div>
  );
}

export default App;