import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Wexp from './components/Workexp.jsx'

import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Wexp/>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
