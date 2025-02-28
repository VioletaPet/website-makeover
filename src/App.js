import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Angebot from './components/pages/Angebot';
import Footer from './components/Footer';
import Yoga from './components/pages/Yoga';
import Akasha from './components/pages/Akasha';
import Nutrition from './components/pages/Nutrition';
import Massage from './components/pages/Massage';
import Rogers from './components/pages/Rogers';
import Coaching from './components/pages/Coaching';
import About from './components/pages/About';
import Imprint from './components/pages/Imprint';
import Contact from './components/pages/Contact';
import ScrollingUp from './components/ScrollingUp';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollingUp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/angebot" element={<Angebot />} />
            <Route path="/angebot/yoga" element={<Yoga />} />
            <Route path="/angebot/akasha" element={<Akasha />} />
            <Route path="/angebot/ernährungsberatung" element={<Nutrition />} />
            <Route path="/angebot/psychologische-beratung" element={<Rogers />} />
            <Route path="/angebot/coaching" element={<Coaching />} />
            <Route path="/angebot/massagen" element={<Massage />} />
            <Route path="/über-mich" element={<About />} />
            <Route path="/impressum-und-datenschutz" element={<Imprint />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
