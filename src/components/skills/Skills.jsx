import SkillCard from "../skill-card/SkillCard";

import './skills.css';

export default function Skills() {
    return (
        <section className="skills">
            <h1 className="section-title">My skills</h1>
            <div className="skills-grid">
                <SkillCard />
                <SkillCard />
                <SkillCard />
            </div>
        </section>
    );
}