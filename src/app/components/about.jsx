import '../styles/homeContent.css'
import '../styles/about.css'
import Text from '../texts/texts'
import {useAnimatedItems} from "@/app/components/animatedItems";

export default function About() {
    useAnimatedItems();
    return (
        <div id='About' className="about-main-div">
                <div className="about-container">
                    <div className='about-image-container animated-item'>
                        <img className='about-image' src="/assets/aboutBanner.jpg" alt='about'/>
                    </div>
                    <div className="about-text-container animated-item">
                        <h1 className="about-title honk-title ">Acerca de Nosotros</h1>
                        <p className='about-text'> {Text.about.description1}</p>

                        <p className='about-text'> {Text.about.description2}</p>

                    </div>
                </div>
        </div>
    )
}
