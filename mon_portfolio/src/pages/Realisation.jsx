import "../SASS/pages/realisation.css"
import BubblesBackground from "../components/item/BubblesBackground";
import ToggleSection from "../components/item/ToggleSection";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Icon } from '@iconify/react';



function Realisation() {
  return (
    <div className="vers-realisation">
      <BubblesBackground />
      <h1>Réalisation</h1>
      <p>
        Ici, vous trouverez mes projets en cours.  
        Chaque réalisation est accompagnée d'une description détaillée, des technologies utilisées et des défis relevés. 
        N'hésitez pas à explorer mon portfolio pour découvrir la diversité et la qualité de mon travail.
      </p>
      <section className="projet-en-cours">
            <h2>Projet professionnel en cours</h2>
            <p>
                Actuellement, je travaille sur un projet de site web pour une entreprise basée dans le Calvados.
            </p>
            <div>
                <h2>Reves d'exploration</h2>
                <p>
                    Rêves d'exploration est un site web dédié aux passionnés de voyages et d'aventures.
                    Il offre des guides de voyage, des récits d'aventures et des conseils pratiques pour les explorateurs en herbe.
                    Le site est conçu pour être une source d'inspiration et d'information pour ceux qui rêvent de découvrir le monde.
                </p>
                <div className="reves">
                    <div className="reves-maquette">
                        <img src="/assets/realisation/Page d'accueil.png" alt="Maquette de reves d'exploration" />
                    </div>
                    <div className="reves-item">
                      <ToggleSection title="Objectif du site">
                        <ul>
                          <li><h4>Site vitrine :</h4><br/> Fournir des informations détaillées.</li>
                          <li><h4>Blog :</h4><br/> Partager des récits et conseils pratiques.</li>
                          <li><h4>Communauté :</h4><br/> Permettre aux utilisateurs de partager.</li>
                          <li><h4>Ressources :</h4><br/> Guides téléchargeables.</li>
                          <li><h4>Clientèle :</h4><br/> Formulaire de contact.</li>
                        </ul>
                      </ToggleSection>
                      <ToggleSection title="Technologies utilisées">
                        <div className="technologies">
                          <div className="front-back">
                            <h4>FrontEnd</h4>
                            <div className="techno-list">
                              <Icon icon="simple-icons:astro" width="18" height="18" style={{marginRight: '8px'}} /> Astro
                              <i className="fab fa-html5" style={{color: '#E34F26', marginRight: '8px'}}></i> HTML5
                              <Icon icon="simple-icons:tailwindcss" width="18" height="18" style={{color: '#06B6D4', marginRight: '8px', marginLeft: '16px'}} /> TailwindCSS
                              <i className="fab fa-css3-alt" style={{color: '#1572B6', marginRight: '8px', marginLeft: '16px'}}></i> CSS3
                              <i className="fab fa-js-square" style={{color: '#F7DF1E', marginRight: '8px', marginLeft: '16px'}}></i> JavaScript
                            </div>
                          </div>
                          <div className="front-back">
                            <h4>BackEnd</h4>
                            <div className="techno-list">
                              <i className="fab fa-python" style={{color: '#777BB4', marginRight: '8px'}}></i> Python
                            </div>
                          </div>
                        </div>                          
                      </ToggleSection>
                    </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default Realisation;