import html from '../../assets/html.png'

import '../../styles/global.css';
import '../../styles/projectCard.css';

export const ProjectCard = () => {
    return (
        <div className="project-card d-flex  justify-content-around flex-row">
            <div>
                <img src={html} alt="project" className='img'/>
            </div>
            <div className="project-text">
                <p className='project-title p-2'>project 1</p>
                <p className="project-des p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, provident.</p>
                <button className='project-btn'>view in github</button>
            </div>
        </div>
    );
}