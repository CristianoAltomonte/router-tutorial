import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <About />
     <Contact />
    </div>
  );
}

export default App;
