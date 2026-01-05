import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Hero from './Hero';
import Skills from './Skills';
import FAQ from './FAQ';
import Footer from './Footer';

function App() {
  return (
    <div className="app-shell">
      <div className="frame">
        <Header />
        <main className="frame-body">
          <Hero />
          <Skills />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
