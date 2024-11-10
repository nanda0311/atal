// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Homepage';
import React from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Contact from './pages/contact.jsx';




function App() {
  return (
    <Router>
      <Header />
      {/* <Navbar />  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
