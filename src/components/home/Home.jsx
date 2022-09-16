import './home.css';


export default function Home() {
    return (
        <section className="home" id='home'>
            <div className="home-text">
                <h1>Juan Giacobbe</h1>
                <h1>Frontend developer</h1>
            </div>
            <div className="home-btns">
                <button className="btn home-btn">LinkedIn</button>
                <button className="btn home-btn">Github</button>
            </div>
        </section>
    );
}