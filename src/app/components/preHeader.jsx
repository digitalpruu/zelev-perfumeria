import '../styles/preHeader.css';
import Texts from "@/app/texts/texts";


export default function PreHeader() {
    return (
        <>
            <header className="header preHeader-main-container">
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
                <nav className="navigation">
                    <a href="/#ContactUs">Contactanos</a>
                </nav>
            </header>
        </>
    );
}
