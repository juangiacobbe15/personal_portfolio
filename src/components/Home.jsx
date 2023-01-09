import { Link } from 'react-scroll'
import { Container } from 'react-bootstrap';

import '../styles/global.css';
import '../styles/home.css';

export const Home = () => {
    return (
        <Container fluid className='d-flex justify-content-baseline flex-column align-items-center home' name='home'>
            <div className="home-text">
                    <p>Hi &#128075;, i'm</p>
                    <h1 className='big-home-text'>Juan Ignacio Giacobbe,</h1>
                    <h2 className='big-home-text'>Fullstack web developer</h2>
                    <p>more text</p>
                </div>
                <div className="btns-container">
                    <Link className="btn" >Download resume &#128100;</Link>
                    <Link to='contact' className="btn" >Contact me &#9993;</Link>
                </div>
        </Container>
    );
}