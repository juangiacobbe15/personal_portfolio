import '../../styles/global.css';
import '../../styles/projectCard.css';

export const ProjectCard = () => {
    return (
        <div className="project-card">
            <div className="project-img">
                <img src="https://tse2.mm.bing.net/th?id=OIP.kEUkm4rRg7FZZYD19PRuwAHaE8&pid=Api&P=0" alt="project" />
            </div>
            <div className="project-text">
                <p className='project-title'>project 1</p>
                <p className="project-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, provident.</p>
                <button className='project-btn'>view in github</button>
            </div>
        </div>
    );
}