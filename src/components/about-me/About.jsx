import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { Skills } from './Skills';

import '../../styles/global.css';
import '../../styles/about.css';

export const About = () => {
    return (
        <>
            <section className="about" name='about'>
                <div className="about-grid">
                    <div className="about-img">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.LfYPMTYF5U9QEHJCiVRorQHaEK&pid=Api&P=0" alt="juan" className='img'/>
                    </div>

                    <div className="about-text">
                        <div className="section-title-container">
                            <h1 className="section-title">About me</h1>
                            <p className='section-subtitle'>Know a little more about me :)</p>
                        </div>
                        <p>I'm a software engineering student from argentina really passionate with informatic. 
                            Take a look at my resume here. </p>
                        <p>I'm always learning new technologies and methods to resolve problems. </p> 
                        <p>You can contact me to start collaborating in my social networks or you 
                            can send me a message through this form</p>
                        <div className="btns-container">
                            <a href="https://www.linkedin.com/in/juan-ignacio-giacobbe-578218227" target="_blank"><FontAwesomeIcon icon={faLinkedin} className=''/></a>
                            <a href="https://github.com/juangiacobbe15" target="_blank"><FontAwesomeIcon icon={faGithub} className=''/></a>
                        </div>
                    </div>
                </div>

            </section>
            <Skills />
        </>
    );
}