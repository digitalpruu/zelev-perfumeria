import '../styles/quote.css'
import SolicitudForm from "@/app/components/solicitudForm";
import Texts from "@/app/texts/texts";
import {useAnimatedItems} from "@/app/components/animatedItems";

export default function Quote() {
    useAnimatedItems()
    return (
        <div id='Quote' className="quote-main-div">
            <div className="quote-container">
                <div className='quote-image-container animated-item'>
                    <h1 className="quote-title honk-title  ">Solicitud de Cotización</h1>
                    <SolicitudForm/>
                </div>
                <div className="quote-text-container animated-item">
                    <h1 className="about-title honk-title ">Cotiza</h1>
                    <p className='about-text'>En {Texts.index.title}, nos esforzamos por ofrecerte los mejores productos
                        adaptados a tus necesidades. Si estás interesado en alguno de nuestros productos,
                        te invitamos a solicitar una cotización personalizada. Simplemente completa el formulario
                        con tus datos y los detalles del producto que te interesa, y nuestro equipo revisará tu
                        solicitud de inmediato.
                    </p>
                    <br/>
                    <p className='about-text'>
                        Una vez que recibamos tu información, te enviaremos una respuesta detallada a tu
                        correo electrónico con toda la información que necesitas para tomar la mejor decisión.
                        Estamos comprometidos con brindarte un servicio rápido y eficiente, por lo que puedes
                        esperar una respuesta en el menor tiempo posible.
                    </p>
                    <br/>
                    <p className='about-text'>
                        Si tienes alguna duda durante el proceso o necesitas asesoría adicional, no dudes en
                        ponerte en contacto con nosotros. Estamos aquí para ayudarte a encontrar las mejores
                        soluciones. ¡Gracias por confiar en nosotros!
                    </p>
                </div>
            </div>

        </div>
    )
}
