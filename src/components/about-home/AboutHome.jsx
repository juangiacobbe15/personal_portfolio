import ViewMoreBtn from "../view-more-btn/ViewMoreBtn";

import './about-home.css';

export default function AboutHome() {
    return (
        <section className="about-home">
            <div className="about-home-grid">
                <div className="about-home-text">
                    <h1>ABOUT</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Obcaecati optio ipsa, necessitatibus fugiat autem 
                        consectetur aut maxime sunt porro sapiente.</p>
                </div>

                <div className="about-home-img">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.LfYPMTYF5U9QEHJCiVRorQHaEK&pid=Api&P=0" 
                        alt="juan" 
                    />
                </div>
            </div>

            <ViewMoreBtn 
                value='View more' 
                path='about'
            />
            
        </section>
    );
}