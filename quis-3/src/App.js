import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';  // Fixed relative import
import Home from './home/home';  // Fixed relative import
import ManageData from './managedata/managedata';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manageData" element={<ManageData />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
