import { ProjectCard } from './ProjectCard';

import '../../styles/global.css';
import '../../styles/projects.css';
import { Col, Container, Row } from 'react-bootstrap';

export const Projects = () => {
    return (
        // <section className="projects" name='projects'>
            // <div className="section-title-container">
            //     <h1 className="section-title">My recent projects</h1>
            //     <p className="section-subtitle">There are some of my recent projects</p>
            // </div>

        //     <div className="projects-grid" data-aos='fade-in' data-aos-delay='500'>
        //         <ProjectCard />
        //         <ProjectCard />
        //         <ProjectCard />
        //     </div>
        // </section>

        <Container fluid className='d-flex justify-content-center align-center flex-column text-center' name='projects'>
            <div className="section-title-container">
                    <h1 className="section-title">My recent projects</h1>
                    <p className="section-subtitle">There are some of my recent projects</p>
            </div>

            <Container className='d-flex justify-content-center align-center flex-column text-center'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Container>
        </Container>
    );
}