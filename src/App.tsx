import React, { FC } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard/DashBoard';
import HomePage from './pages/HomePage/HomePage';
import InsertPage from './pages/InsertPage/InsertPage';

const App: FC = () => (
  <Router>
    <Routes>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/insert-store" element={<InsertPage />} />
    </Routes>
  </Router>
);

export default App;
