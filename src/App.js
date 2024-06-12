import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Courses from './Courses';
import myinstagram from './instagram.jpeg';
import myfacebook from './facebook.png';
import mytwitter from './twitter.png';
import myyoutube from './youtube.png';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Router>
      <div className='first'>
      <div className={`app ${theme}`}>
        <div className="button-container">
          <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>

        <header className="app-header">
          <h1>YOGA CENTER</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <div className="footer-container">
            <div className="footer-section about">
              <h2>About Us</h2>
              <p>At our yoga center, we cultivate wellness and peace through personalized yoga practices. Join us to transform your mind, body, and spirit.</p>
            </div>

            <div className="footer-section social">
              <h2>Follow Us</h2>
              <ul className="social-icons">
                <li><a href="#"><img src={myfacebook} alt="Facebook"/></a></li>
                <li><a href="#"><img src={mytwitter} alt="Twitter"/></a></li>
                <li><a href="#"><img src={myinstagram} alt="Instagram"/></a></li>
                <li><a href="#"><img src={myyoutube} alt="YouTube"/></a></li>
              </ul>
            </div>

            <div className="footer-section contact">
              <h2>Contact Us</h2>
              <p>Email: yoga28center@gmail.com</p>
              <p>Phone: +8598-3658-4857</p>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; 2024 Yoga Center. All rights reserved.
          </div>
        </footer>
      </div>
      </div>
    </Router>
  );
}

export default App;
