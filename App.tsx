import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import InfoSection from './components/InfoSection';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-primary bg-secondary selection:bg-primary selection:text-secondary">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <InfoSection />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;