import './about.css';

export default function About() {
    return (
        <section className="about">
            <div className="about-grid">
                <div className="about-text">
                    <h3 className="about-title">ABOUT</h3>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Tempore, ipsum saepe 
                        nesciunt quasi expedita magni. Odio c
                        orrupti facilis repellendus quas!</p>
                    <div className="btns-container">
                        <button className="btn">LinkedIn</button>
                        <button className="btn">Github</button>
                    </div>
                </div>
                <div className="about-img">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.LfYPMTYF5U9QEHJCiVRorQHaEK&pid=Api&P=0" alt="juan" className='img'/>
                </div>
            </div>
        </section>
    );
}