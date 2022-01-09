import React, { FC } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import StoreDetailsPage from './pages/StoreDetailsPage/StoreDetailsPage';

const App: FC = () => (
  <Router>
    <Routes>
      <Route path="/storedetails" element={<StoreDetailsPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
