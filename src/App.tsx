import React, { FC } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import InsertPage from './pages/InsertPage/InsertPage';

const App: FC = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/insert-store" element={<InsertPage />} />
    </Routes>
  </Router>
);

export default App;
