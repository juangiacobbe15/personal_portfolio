import { ProjectCard } from './ProjectCard';

import '../../styles/global.css';
import '../../styles/projects.css';

export const Projects = () => {
    return (
        <section className="projects" name='projects'>
            <div className="section-title-container">
                <h1 className="section-title">My recent projects</h1>
                <p className="section-subtitle">There are some of my recent projects</p>
            </div>

            <div className="projects-grid" data-aos='fade-in' data-aos-delay='500'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    );
}