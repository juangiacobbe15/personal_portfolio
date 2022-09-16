import { NavLink, Outlet } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import './navbar.css';

const classNameFunc = ({ isActive }) => (isActive ? "link active" : "link");
const classNameLogo = ({ isActive }) => (isActive ? "logo active" : "logo");

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <NavLink to='' className={classNameLogo} exact>JIG</NavLink>
                <div className="navigation"> 
                    <ul className="list">
                        <li>
                            <NavLink to='/' className={classNameFunc} exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'className={classNameFunc}>About me</NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' className={classNameFunc}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className={classNameFunc}>Contact me</NavLink>
                        </li>
                    </ul>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/juan-ignacio-giacobbe-578218227" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='icon'/></a>
                        <a href="https://github.com/juangiacobbe15" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon'/></a>
                    </div>
                </div>              
            </nav>
        </>
        
    );
}