import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import ViewMoreBtn from '../view-more-btn/ViewMoreBtn';

import './footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <h1>Contact me!</h1>
            <div className="icons">
                    <a href="https://www.linkedin.com/in/juan-ignacio-giacobbe-578218227" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='icon'/></a>
                    <a href="https://github.com/juangiacobbe15" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon'/></a>
                    <a href="https://github.com/juangiacobbe15" target="_blank"><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
            </div>

            <ViewMoreBtn 
                value='Send me a message' 
                path='contact'
            />
        </div>
    );
}