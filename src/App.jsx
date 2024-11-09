// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Homepage';
import React from 'react';
import Menu from './layouts/Menu';
import Header from './layouts/Header';
import Footer from './layouts/Footer';



function App() {
  return (
    <Router>
      <Header />
      <Menu /> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
