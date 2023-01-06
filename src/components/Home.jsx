import '../styles/home.css';
import '../styles/global.css';

export const Home = () => {
    return (
        <section className="home" name='home'>
                <div className="home-text">
                    <p>Hi &#128075;, i'm</p>
                    <h1 className='big-home-text'>Juan Ignacio Giacobbe,</h1>
                    <h2 className='big-home-text'>Fullstack web developer</h2>
                    <p>more text</p>
                </div>
                <div className="btns-container">
                    <button className="btn" data-aos="fade-down" data-aos-delay='2000' >Download resume &#128100;</button>
                    <button className="btn" data-aos="fade-down" data-aos-delay='2000' >Contact me &#9993;</button>

                </div>
            </section>
    );
}