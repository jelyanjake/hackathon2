import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MenuPopup from './components/menupopup';
import LoginPage from './components/login';
import RegPage from './components/home';
import HistPage from './components/logs';
import IntPage from './components/reg';
import logo from './assets/meteor.gif';

function App() {
  
  const location = useLocation();

  const pageVariants = {
    initial: { y: 30, opacity: 0 },
    in: { y: 0, opacity: 1 },
    out: { y: -30, opacity: 0 }
  };
  
  const pageTransition = {
    type: "spring",
    mass: 0.5,
    damping: 15,
    stiffness: 100
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <nav>
            <a href="#" className="logo"><img src={logo} className='logo-icon'></img>JobStreams</a>
            <ul className="nav-links">
              <li><MenuPopup /></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <LoginPage />
              </motion.div>
            } />
            <Route path="/registration" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <RegPage />
              </motion.div>
            } />
            <Route path="/interviews" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <IntPage />
              </motion.div>
            } />
            <Route path="/history" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <HistPage />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="footer">
        <div className="container">
          <p>ICT Congress | Hackathon | UCPT Team A</p>
        </div>
      </footer>
    </div>
  );
}

export default App;