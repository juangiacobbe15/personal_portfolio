import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';

import { Skills } from './Skills';

import '../../styles/global.css';
import '../../styles/about.css';

export const About = () => {
    return (
        <>
            <Container fluid className='d-flex justify-content-center flex-column p-2 about'>
                <Container>
                    <Row className='justify-content-md-center'>
                        <Col className='about-img' xs={12} md={6}>
                            <img src="https://tse2.mm.bing.net/th?id=OIP.LfYPMTYF5U9QEHJCiVRorQHaEK&pid=Api&P=0" alt="juan" className='img'/>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="about-text">
                                <div className="section-title-container">
                                    <h1 className="section-title " name='about'>About me</h1>
                                    <p className='section-subtitle'>Know a little more about me :)</p>
                                </div>
                                <p>I'm a software engineering student from argentina really passionate with informatic. 
                                    Take a look at my resume here. </p>
                                <p>I'm always learning new technologies and methods to resolve problems. </p> 
                                <p>You can contact me to start collaborating in my social networks or you 
                                can send me a message through this form</p>
                                <div className="btns-container">
                                    <a href="https://www.linkedin.com/in/juan-ignacio-giacobbe-578218227" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='icon'/></a>
                                    <a href="https://github.com/juangiacobbe15" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon'/></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Skills />
            </Container>
        </>
    );
}