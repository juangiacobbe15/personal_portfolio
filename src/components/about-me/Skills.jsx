import { SkillCard } from "./SkillCard";

import '../../styles/global.css';
import '../../styles/skills.css';

export const Skills = () => {
    return (
        <section className="skills">
            <div className="section-title-container">
                <h1 className="section-title">My skills</h1>
                <p className="section-subtitle">Here are some of the technologies that i've worked with</p>
            </div>
            <div className="skills-grid">
                <SkillCard />
                <SkillCard />
                <SkillCard />
            </div>
        </section>
    );
}