
import '../styles/catalogue.css'
import {useAnimatedItems} from "@/app/components/animatedItems";

export default function Catalogue() {
    useAnimatedItems();
    return (
        <div id='Catalogue' className="catalogue-main-div">
            <div className="catalogue-container">
                <h1 className="catalogue-title honk-title animated-item">Catálogo</h1>
                <a target="_blank" rel="noopener noreferrer"
                   className="catalogue-image-container">
                    <img className="catalogue-main-image animated-item" src="/assets/catalogueImage.jpg" alt="catalogueImage"/>
                </a>
            </div>
        </div>
    )
}
