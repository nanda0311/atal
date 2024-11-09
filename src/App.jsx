// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Homepage';
import React from 'react';
import Navbar from './layouts/navbar.jsx';
import Header from './layouts/Header';
import Footer from './layouts/Footer';



function App() {
  return (
    <Router>
      <Header />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
