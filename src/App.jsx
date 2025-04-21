import React from 'react';
import './App.css'
import Navbar from '/components/Navbar';
import Footer from '/components/Footer';
import Home from '/components/Home';
import About from '/components/About';
import Projects from '/components/Projects';
import Contact from '/components/Contact';

// the components are brought into one area and displayed onto the page
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
