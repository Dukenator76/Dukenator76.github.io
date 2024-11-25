import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Routes>
      <Route path="/Website" element={<HomePage />} />
      <Route path="/Website/project/:id" element={<ProjectPage />} />
      <Route path="/" element={<Navigate to="/Website" replace />} />
    </Routes>
  );
}

export default App;