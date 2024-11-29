import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Homepage';
import Contact from './pages/contact.jsx';
import Partners from './pages/Partners.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Service from './pages/Service.jsx';
import Events from './pages/Events.jsx';
import Tenders from './pages/Tenders'; 
import TendersAdmin from './admin/TendersAdmin'; // Import Tenders Admin Page

// Layouts
import Header from './layouts/Header';
import Footer from './layouts/Footer';

// Components (Partners)
import Academic from './components/Partners/Academic.jsx';
import Cooperative from './components/Partners/Co-operative.jsx';
import Investment from './components/Partners/Investment.jsx';
import IP from './components/Partners/IPsupport.jsx';
import Network from './components/Partners/Network.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/studentProject" element={<Service />} />
        <Route path="/startupDetail" element={<Portfolio />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tenders" element={<Tenders />} /> 
        <Route path="/admin/tenders" element={<TendersAdmin />} /> 
        <Route path="/academicPartners" element={<Academic />} />
        <Route path="/cooperativePartners" element={<Cooperative />} />
        <Route path="/investmentPartners" element={<Investment />} />
        <Route path="/ipSupporters" element={<IP />} />
        <Route path="/networkingPartners" element={<Network />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
