import ProjectCard from '../../components/project-card/ProjectCard';

import './projects.css';

export default function Projects() {
    return (
        <section className="projects">
            <h1 className="section-title">My recent projects</h1>
            <div className="projects-grid" data-aos='fade-in' data-aos-delay='500'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    );
}