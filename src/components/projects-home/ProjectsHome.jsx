import ProjectHomeCard from '../project-home-card/ProjectHomeCard';
import ViewMoreBtn from '../view-more-btn/ViewMoreBtn';

import './projects-home.css';

export default function ProjectsHome() {
    return (
        <section className="projects-home">
            <h1 className='section-title'>My work</h1>
            <div className="projects-home-grid">
                <ProjectHomeCard />
                <ProjectHomeCard />
                <ProjectHomeCard />
            </div>

            <ViewMoreBtn 
                value='See more'
                path='projects'
            />
        </section>
    );
}