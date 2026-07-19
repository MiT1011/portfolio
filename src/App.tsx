import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import OpenToWork from './components/OpenToWork';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <OpenToWork />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Philosophy />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;