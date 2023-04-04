import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Post from './components/Post';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
