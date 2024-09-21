import '../styles/homeContent.css'
import '../styles/contactUs.css'
import Text from '../texts/texts'
import {useAnimatedItems} from "@/app/components/animatedItems";

export default function ContactUs() {

    return (
        <div id='ContactUs' className="contact-main-div">
            <div className="contact-container">
                <div className="contact-text-container animated-item">
                    <h1 className="contact-title honk-title ">Contáctanos</h1>
                    <br></br>
                    <p className='about-text'>¡Estamos aquí para ayudarte!</p>

                    <p className='about-text'>Si necesitas más información o quieres
                        contratar alguno de nuestros servicios, no dudes en contactarnos.
                        Estamos disponibles para resolver tus dudas y brindarte
                        la mejor atención.</p>

                    <p className='about-text'>Haz clic en el botón de abajo para
                        comunicarte con nosotros directamente a través de WhatsApp.
                        ¡Estamos a solo un mensaje de distancia!.</p>

                    <a href={Text.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                        <button className="whatsapp-button">Contáctanos por WhatsApp</button>
                    </a>

                </div>
                <div className='contact-image-container animated-item'>
                    <img className='contact-image' src="/assets/contactBanner.jpg" alt='contact'/>
                </div>
            </div>
        </div>
    )
}
