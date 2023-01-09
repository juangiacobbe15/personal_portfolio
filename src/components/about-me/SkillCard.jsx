import '../../styles/global.css';
import '../../styles/skillCard.css';

export const SkillCard = (props) => {
    return (
        <div className="skill-card">
            <img src={props.imgSrc} alt="skill" className='img'/>
            <p>{props.skill}</p>
        </div>
    );
}