import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
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
      <Footer />
    </div>
  );
}

export default App;
