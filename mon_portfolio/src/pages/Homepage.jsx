import '../SASS/pages/homepage.css'

function Homepage () {
    return(
        
        <div className="Homepage">
            <section id="Presenta" className="presentation">
                <h2>Présentation</h2>
                <p>
                    Longtemps passionné par le domaine du codage information, 
                    j'ai l'occasion aujourd'hui de pouvoir transformer mon hobby en métier.
                    Actuellement développeur web, je conçois des sites web sous react. 
                    Dans un avenir proche, je vais commencer à faire du Back-end sous Python avec le framework Django.
                </p>
            </section>
            <section id="realisation" className="realisation">
                <h2>Réalisation en cours</h2>
                <div className='reali'>
                    <div className='reve'>
                        <img src="./src/assets/realisation/logo.webp" alt="Logo de l'entreprise Reve d'exploration" />
                        <p>Du Lundi au Samedi de 9H à 19H</p>
                        <p>test@revesexploration.com</p>
                    </div>
                    <p className='info'>
                        Rêves d’exploration est une agence de voyage à domicile qui vous offre un service personnalisé, 
                        directement chez vous ou à distance, selon vos préférences.<br />
                        Avec plus de six ans d’expérience et des milliers de voyageurs comblés, 
                        j’inaugure ma propre agence de voyages sur mesure.
                    </p>
                    <div className='tech'>
                        <p>Nouvelle technologie abordée pour le projet</p>
                        <div className='tech-item'>
                            <img src="./src/assets/realisation/astro.svg" alt="Logo de la technologie Astro" />
                            <p>Astro</p>
                        </div>
                        <div className='tech-item'>
                            <img src="./src/assets/realisation/tailwind2.webp" alt="Logo de la technologie Tailwind" />
                            <p>Tailwind</p>
                        </div>
                    </div>
                </div>
                
            </section>
            <section id="activites" className="activites">
                <h2>Activités</h2>
                <div className="act-container">
                    <div className="git-container">
                        <p>Dernier dépôts GitHub récemment mis à jour</p>
                        <div className="Act-Bank">
                            <a 
                            href="https://github.com/Hai-rou/Argent-Bank"
                            target="_blank"
                            rel="noolpener noreferrer"
                            className="Bank-btn">
                            <img src="./src/assets/argentBankLogo.webp" alt="Image projet Argent Bank" />
                            Projet Argent Bank
                            </a>
                            <a 
                            href="https://github.com/Hai-rou/Projet_9-Debuggez-une-application-React.js"
                            target='_blank'
                            rel='noolpener noreferrer'
                            className='events-btn'>
                            <img src="./src/assets/724.webp" alt="Logo projet 724 debuggage" />
                            724 Events
                            </a>
                            <a 
                            href="https://github.com/Hai-rou/Projet_6"
                            target='_blank'
                            rel='noolpener noreferrer'
                            className='sophie-btn'>
                            <img src="./src/assets/sophie.webp" alt="Logo projet Sophie Bluel" />
                            Sophie Bluel
                            </a>
                            <a href="https://github.com/Hai-rou/Projet_8-Nina_Carducci"
                            target='_blank'
                            rel='noolpener noreferrer'
                            className='nina-btn'
                            >
                            <img src="./src/assets/nina.webp" alt="Logo projet Nina Carducci" />
                            Nina Carducci
                            </a>
                        </div>
                    </div>
                    <div className='diplo-container'>
                        <p>Dernier diplôme, emploi et projet</p>
                        <div className='item'>
                            <img src="./src/assets/openclassrooms.webp" alt="Logo Openclassrooms" />
                            <div className='context'>
                                <h3>Intégrateur Web</h3>
                                <p>OpenClassrooms</p>
                            </div>
                            <p>Formations</p>
                            <p>2025</p>
                        </div>
                    </div>
                    <div className='reseau-container'>
                        <p>Connectez-vous avec moi</p>
                    </div>
                </div>    
            </section>
            <section id="competences" className="competences">
                <h2>Compétences</h2>

            </section>
            <section id="contact" className="contact">
                <h2>Demarrons un projet ensemble, n'hesitez pas à me contacter</h2>
            </section>
        </div>
        
        
    )
}

export default Homepage