import '../SASS/pages/homepage.css'
import  SkillsComponent from '../components/item/SkillsComponent'
import ContactForm from '../components/item/ContactForm'
import Activites from '../components/item/Activite'

function Homepage () {
    return(
        
        <div className="homepage">
            <section id="Presenta" className="presentation">
                <h2>Présentation</h2>
                <div className='pres-content'>
                    <img src="/assets/logo-h.webp" alt="Logo avec mon Pseudo" />
                     <p>
                        Longtemps passionné par le domaine du codage information, 
                        j'ai l'occasion aujourd'hui de pouvoir transformer mon hobby en métier.<br />
                        Actuellement développeur web, je conçois des sites web sous react. 
                        Dans un avenir proche, je vais commencer à faire du Back-end sous Python avec le framework Django.
                    </p>
                </div>
            </section>
            <section id="realisation" className="realisation">
                <h2>Réalisation en cours</h2>
                <div className='reali'>
                    <div className='reve'>
                        <img src="/assets/realisation/logo.webp" alt="Logo de l'entreprise Reve d'exploration" />
                        <p>Du Lundi au Samedi de 9H à 19H</p>
                        <p>test@revesexploration.com</p>
                    </div>
                    <p className='info'>
                        Rêves d’exploration est une agence de voyage à domicile qui vous offre un service personnalisé, 
                        directement chez vous ou à distance, selon vos préférences.<br />
                        Avec plus de six ans d’expérience et des milliers de voyageurs comblés, 
                        j’inaugure ma propre agence de voyages sur mesure.<br />
                        
                    </p>
                    <div className='tech'>
                        <p>Nouvelle technologie abordée pour le projet</p>
                        <div className='tech-item'>
                            <img src="/assets/realisation/astro.svg" alt="Logo de la technologie Astro" />
                            <span>Astro</span>
                        </div>
                        <div className='tech-item'>
                            <img src="/assets/realisation/tailwind2.webp" alt="Logo de la technologie Tailwind" />
                            <span>Tailwind</span>
                        </div>
                    </div>
                </div>
                
            </section>
            <section id="activites" className="activites">
                <h2>Activités</h2>
                <Activites />
            </section>
            <section id="competences" className="competences">
                <h2>Compétences</h2>
                <div className='competences-container'>
                    <img src="/assets/logo-H..webp" alt="Logo avec mon Pseudo" />
                    <SkillsComponent /> 
                </div>
                
            </section>
            <section id="contact" className="contact">
                <h2>Demarrons un projet ensemble, n'hesitez pas à me contacter</h2>
                <ContactForm />
            </section>
        </div>
        
        
    )
}

export default Homepage