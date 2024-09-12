import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import JobVacancy from './pages/JobVacancy';
import About from './pages/About';
import JobDetail from './pages/JobDetail';  // Import JobDetail

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/job-vacancy" element={<JobVacancy />} />
        <Route path="/about" element={<About />} />
        <Route path="/job/:id" element={<JobDetail />} /> {/* Route untuk Job Detail */}
      </Routes>
    </Router>
  );
}

export default App;
