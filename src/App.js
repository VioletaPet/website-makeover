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

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/angebot" element={<Angebot />} />
            <Route path="/angebot/yoga" element={<Yoga />} />
            <Route path="/angebot/akasha" element={<Akasha />} />
            <Route path="/angebot/ernährungsberatung" element={<Nutrition />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
