import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './layouts/Menu';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Homepage';

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
