import './home.css';


export default function Home() {
    return (
        <section className="home" id='home'>
            <div className="home-text">
                <h1 className='home-name'>Juan Giacobbe</h1>
                <h1 className='home-work'>Frontend developer</h1>
            </div>
            <div className="btns-container">
                <button className="btn">LinkedIn</button>
                <button className="btn">Github</button>
            </div>
        </section>
    );
}