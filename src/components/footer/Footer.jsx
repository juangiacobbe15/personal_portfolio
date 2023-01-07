import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { ContactForm } from './ContactForm';

import '../../styles/footer.css';

export const Footer = () => {
    return (
        <section className="footer" name='contact' data-aos='fade-in' data-aos-duration='2000'>
            <div className="footer-grid">
                <div className="footer-text">
                    <div className="section-title-container">
                        <h1 className="section-title">Contact me</h1>
                        <p className="section-subtitle">hola</p>
                    </div>

                    <div className="icons">
                            <a href="https://www.linkedin.com/in/juan-ignacio-giacobbe-578218227" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='icon'/></a>
                            <a href="https://github.com/juangiacobbe15" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon'/></a>
                            <a href="https://github.com/juangiacobbe15" target="_blank"><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
                    </div>
                </div>

                <ContactForm />
            </div>
        </section>
    );
}