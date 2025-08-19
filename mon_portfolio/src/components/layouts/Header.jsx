import "../../SASS/layouts/header.css"
import { AnimatedBanner } from "../item/banner"

function Header () {
    return(
        <header>
            <AnimatedBanner />
            <nav className="Navbar">
                <ul>
                    <li><a href="#accueil">Accueil</a></li>
                    <li><a href="#presenta">Présentation</a></li>
                    <li><a href="#realisation">Réalisation</a></li>
                    <li><a href="#activites">Activités</a></li>
                    <li><a href="#competences">Compétences</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#cv">CV</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header