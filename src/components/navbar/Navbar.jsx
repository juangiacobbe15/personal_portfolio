import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <span className="logo">JIG</span>

            <div className="navigation">
                <div className="icons">
                    <a href="#" target="__blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#" target="__blank"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                
                <ul className="list">
                    <li><a href="#home" className='link'>Home</a></li>
                    <li><a href="#" className='link'>About me</a></li>
                    <li><a href="#" className='link'>Projects</a></li>
                    <li><a href="#" className='link'>Contact Me</a></li>
                </ul>
            </div>
            
        </nav>
    );
}