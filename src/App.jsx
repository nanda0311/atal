<<<<<<< HEAD
// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Homepage';
import About from './pages/about';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './layouts/Menu';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Homepage';
>>>>>>> cddf5fb90cd00f61c13945e0222763798513f2b3

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
