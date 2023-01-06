import { Link } from 'react-scroll';

import '../styles/global.css';
import '../styles/navbar.css';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to='' className='logo' data-aos='fade-down' exact >JIG</Link>
                <div className="navigation" data-aos='fade-right'> 
                    <ul className="list">
                        <li>
                            <Link to='' className='link' exact>Home</Link>
                        </li>
                        <li>
                            <Link to='about' className='link'>About me</Link>
                        </li>
                        <li>
                            <Link to='projects' className='link'>Projects</Link>
                        </li>
                        <li>
                            <Link to='contact' className='link'>Contact me</Link>
                        </li>
                    </ul>
                </div>              
            </nav>
        </>
    );
}