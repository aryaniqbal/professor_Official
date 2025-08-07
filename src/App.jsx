import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'


import Home from './pages/Home';
import PrivacyPlicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import Invite1 from './pages/invite';
import Header from './components/Header';
import Footer from './components/Footer';
import Notfound from './pages/Notfound';

function App() {
  return (
    <Router>
      <div className="container">
        {/* Full Header */}
        <Header />

        {/* Page Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/invite' element={<Invite1 />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/Disclaimer' element={<Disclaimer />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPlicy />} />
          <Route path="/NotFound" element={<Notfound />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}


export default App
