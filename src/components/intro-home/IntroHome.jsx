import './intro-home.css';

export default function IntroHome() {
    return (
        <section className="home" id='home'>
                <div className="home-text">
                    <h1 className='home-name'>Juan Giacobbe</h1>
                    <h1 className='home-work'>Frontend developer</h1>
                </div>
                <div className="btns-container">
                    <button className="btn">Download resume</button>
                </div>
            </section>
    );
}