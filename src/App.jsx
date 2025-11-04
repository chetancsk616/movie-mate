import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Wexp from './components/Worxexp.jsx'

import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Wexp/>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
