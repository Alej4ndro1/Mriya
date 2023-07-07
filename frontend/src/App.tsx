import React, { useEffect, useState } from 'react';
import './App.scss';
import './main.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { MainPage } from './pages/MainPage';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { DreamsPage } from './pages/DreamsPage';
import { DetailedPage } from './pages/DetailedPage';
import { ContactsPage } from './pages/ContactsPage';
import { AskForHelpPage } from './pages/AskForHelpPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getDreams } from './api/dreams';

function App() {
  useEffect(() => {
    getDreams();
  }, []);

  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/dreams" element={<DreamsPage />} />
        <Route path="/dreams/:id" element={<DetailedPage />} />

        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/ask-for-help" element={<AskForHelpPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
