import React, { FC } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard/DashBoard';
import HomePage from './pages/HomePage/HomePage';

const App: FC = () => (
  <Router>
    <Routes>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
