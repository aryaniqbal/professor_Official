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
import CACO92 from './gamespages/caco92';
import DADU92 from './gamespages/dado92';
import FANTASY from './gamespages/fantasy';
import GLORY92 from './gamespages/glory92';
import GO92 from './gamespages/go92';
import JEETO92 from './gamespages/jeeto92';
import PAKGAME from './gamespages/pakgame';
import PKR92 from './gamespages/pkr92';
import R92 from './gamespages/r92';

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
          {/* GAMESPATH */}
          <Route path="/caco92" element={<CACO92 />} />
          <Route path="/dado92" element={<DADU92 />} />
          <Route path="/fantasy" element={<FANTASY />} />
          <Route path="/glory92" element={<GLORY92 />} />
          <Route path="/go92" element={<GO92 />} />
          <Route path="/jeeto92" element={<JEETO92 />} />
          <Route path="/pakgame" element={<PAKGAME />} />
          <Route path="/pkr92" element={<PKR92 />} />
          <Route path="/r92" element={<R92 />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}


export default App
