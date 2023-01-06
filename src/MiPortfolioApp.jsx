import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/about-me/About';
import { Projects } from './components/projects/Projects';
import { Footer } from './components/footer/Footer';

export const MiPortfolioApp = () => {
  useEffect(() => {
      AOS.init({ duration:'1000' });
  }, []);

  return (
    <main className="main-container">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </main>
  );
};