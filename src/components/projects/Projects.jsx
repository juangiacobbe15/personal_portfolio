import ProjectCard from '../project-card/ProjectCard';

import './projects.css';

export default function Projects() {
    return (
        <section className="projects">
            <div className="projects-grid">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />

            </div>
        </section>
    );
}