import AboutHome from '../../components/about-home/AboutHome';
import ProjectsHome from '../../components/projects-home/ProjectsHome';
import Footer from '../../components/footer/Footer';
import IntroHome from '../../components/intro-home/IntroHome';

import './home.css';

export default function Home() {
    return (
        <>
            <IntroHome />
            <AboutHome />
            <ProjectsHome />
            <Footer />
        </>
        
    );
}