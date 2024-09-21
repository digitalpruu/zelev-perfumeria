import text from '../texts/texts'
import '../styles/homeContent.css'

export default function HomeContent() {
    return (
        <div id='Home' className="home-main-div">
            <div className="main-container">
                <h1 className="main-title animated-item">{text.homeContent.title}</h1>
                <a target="_blank" rel="noopener noreferrer"
                   className="main-image-container">
                    <img className="home-main-image animated-item" src="/assets/mainImage.jpg" alt="mainImage"/>
                </a>
                <div className="main-text">
                    <nav className="navHome">
                        <a href="#About">Conocenos</a>
                        <a href="#Catalogue" className="homeBorder">Productos</a>
                        <a href="#ContactUs" className="homeBorder">Contactanos</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
