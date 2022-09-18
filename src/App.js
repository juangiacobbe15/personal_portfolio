import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

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
    </div>
  );
}

export default App;
