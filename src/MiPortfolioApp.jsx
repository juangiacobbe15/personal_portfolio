import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar, Home, About, Projects, Footer } from './components';

export const MiPortfolioApp = () => {
  
  useEffect(() => {
      AOS.init({ duration:'1000' });
  }, []);

  return (
    <main className="main-container">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </main>
  );
};