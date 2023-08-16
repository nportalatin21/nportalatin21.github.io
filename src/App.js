// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavigationBar from './components/NavigationBar'; // Add this line
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AboutMe from './components/AboutMe';


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigationBar /> {/* Add the navigation bar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/about-me' element={<AboutMe/>}/>
          {/* Add more routes for other sections */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
