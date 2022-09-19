import { NavLink } from 'react-router-dom';

import './navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <NavLink to='' className='logo' data-aos='fade-down' exact >JIG</NavLink>
                <div className="navigation" data-aos='fade-right'> 
                    <ul className="list">
                        <li>
                            <NavLink to='/' className='link' exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'className='link'>About me</NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' className='link'>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className='link'>Contact me</NavLink>
                        </li>
                    </ul>
                </div>              
            </nav>
        </>
        
    );
}