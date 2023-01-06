import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { Contact } from './ContactForm';

import '../../styles/footer.css';

export const Footer = () => {
    return (
        <div className="footer">
            <h1>Contact me!</h1>
            <div className="icons" data-aos='fade-in' data-aos-duration='2000'>
                    <a href="https://www.linkedin.com/in/juan-ignacio-giacobbe-578218227" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='icon'/></a>
                    <a href="https://github.com/juangiacobbe15" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon'/></a>
                    <a href="https://github.com/juangiacobbe15" target="_blank"><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
            </div>

            <Contact />
        </div>
    );
}