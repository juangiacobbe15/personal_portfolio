import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Contact from './pages/contact/Contact';

function App() {
  useEffect(() => {
      AOS.init({ duration:'1000' });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/projects' element={ <Projects /> }/>
          <Route path='/contact' element={ <Contact /> }/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
