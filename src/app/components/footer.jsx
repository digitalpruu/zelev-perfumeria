import '../styles/footer.css'
import Texts from "@/app/texts/texts";

export default function TheFooter() {
    return (
        <div className="footer">
            <div className="logo-footer">
                <img src="/assets/logo.png"/>
            </div>
            <div className="slogan-footer">
                <h3>{Texts.footer.slogan.p1}</h3>
                <h3>{Texts.footer.slogan.p2}</h3>
            </div>
            <div className="navigation-footer">
                <a href='/#Home'>Inicio</a>
                <a href="/#ContactUs">Contactanos</a>
                <a href="/#About">Nosotros</a>
                <a href="/terminos">Politica de tratamiento de datos</a>
            </div>
            <div className="social-media">
                <h3>{Texts.footer.address}</h3>
                <h3>{Texts.footer.phone}</h3>
                <h3>Síguenos</h3>
                <div className="social-media-icon">
                    <a target="_blank" rel="noopener noreferrer"
                       href={Texts.footer.facebook}>
                        <img className="media-logo-footer facebook-logo" src="/assets/facebook.png"/></a>
                    <a target="_blank" rel="noopener noreferrer"
                       href={Texts.footer.instagram}>
                        <img className="media-logo-footer instagram-logo" src="/assets/instagram.png"/></a>
                    <a target="_blank" rel="noopener noreferrer" href={Texts.footer.whatsappLink}>
                        <img className="media-logo-footer whatsapp-logo" src="/assets/whatsapp.png"/></a>
                </div>
            </div>
        </div>
    )
}