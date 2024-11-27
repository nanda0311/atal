import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

// Pages
import Home from './pages/Homepage';
import Contact from './pages/contact.jsx';
import Partners from './pages/Partners.jsx';
import Portfolio from './pages/Portfolio.jsx';

// Layouts
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/startupDetail" element={<Portfolio />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
