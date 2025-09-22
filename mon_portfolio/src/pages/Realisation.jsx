import "../SASS/pages/realisation.css"
import BubblesBackground from "../components/item/BubblesBackground";
import ToggleSection from "../components/item/ToggleSection";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Icon } from '@iconify/react';
import gsap from "gsap";
import { useRef, useEffect } from "react";




function Realisation() {

  const containerRef = useRef();
    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 150 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
        );
        return () => {
            gsap.to(containerRef.current, { opacity: 0, y: -50, duration: 0.4, ease: "power2.in" });
        };
    }, []);

  return (
    <div className="vers-realisation" ref={containerRef}>
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
            <p>
                Ce projet est une excellente opportunité pour moi de mettre en pratique mes compétences en développement web et d'apprendre de nouvelles technologies.
            </p>
            <p>
                Le site est en cours de développement et je suis enthousiaste à l'idée de le partager une fois qu'il sera terminé.
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
                      <img src="/assets/realisation/Page d'accueil.webp" alt="Maquette de reves d'exploration" />
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
                    <ToggleSection title="Nouvelles technologies utilisées">
                      <ul>
                        <li><h4>Astro :</h4><br/> Framework moderne pour construire des sites web rapides.</li>
                        <li><h4>TailwindCSS :</h4><br/> Framework CSS utilitaire pour un design rapide et réactif. </li>
                      </ul>
                    </ToggleSection>
                    <ToggleSection title="Outils et plateformes">
                      <ul>
                        <li><h4>Hébergement :</h4><br/> Netlify pour le déploiement du site.</li>
                        <li><h4>Versioning :</h4><br/> Git et GitHub pour la gestion du code source.</li>
                        <li><h4>Design :</h4><br/> Figma pour la création des maquettes.</li>
                        <li><h4>SEO :</h4><br/> Google Analytics pour le suivi des performances.</li>
                      </ul>
                    </ToggleSection>
                    <ToggleSection title="Durée du projet">
                      <ul>
                        <li><h4>Début :</h4><br/> Mai 2025</li>
                        <li><h4>Estimation de fin :</h4><br/> Inconnu </li>
                        <li><h4>Statut actuel :</h4><br/> En cours de développement</li>
                      </ul>
                    </ToggleSection>
                    <ToggleSection title="Rôle dans le projet">
                      <ul>
                        <li><h4>Intégration web :</h4><br/> Traduction des maquettes en code HTML/CSS.</li>
                        <li><h4>Développement front-end :</h4><br/> Création d'interfaces utilisateur interactives.</li>
                        <li><h4>Tests et optimisation :</h4><br/> Assurer la performance et la compatibilité multi-navigateurs.</li>
                        <li><h4>Mise à jour du contenu :</h4><br/> Gestion et actualisation des informations sur le site.</li>
                      </ul>
                    </ToggleSection>
                    <ToggleSection title="Fonctionnalités clés">
                      <ul>
                        <li><h4>Design responsive :</h4><br/> Adapté à tous les appareils.</li>
                        <li><h4>Blog interactif :</h4><br/> Articles avec commentaires.</li>
                        <li><h4>Galerie multimédia :</h4><br/> Photos et vidéos des voyages.</li>
                        <li><h4>Formulaire de contact :</h4><br/> Pour questions et collaborations.</li>
                        <li><h4>Optimisation SEO :</h4><br/> Meilleure visibilité en ligne.</li>
                      </ul>
                    </ToggleSection>
                    <ToggleSection title="Défis rencontrés">
                      <ul>
                        <li><h4>Conception responsive :</h4><br/> Adapter le design pour tous les appareils.</li>
                        <li><h4>Optimisation des performances :</h4><br/> Assurer des temps de chargement rapides.</li>
                        <li><h4>SEO :</h4><br/> Optimiser le contenu pour les moteurs de recherche.</li>
                        <li><h4>Accessibilité :</h4><br/> Rendre le site utilisable par tous.</li>
                        <li><h4>Intégration de contenu dynamique :</h4><br/> Permettre aux utilisateurs de soumettre des articles.</li>
                      </ul>
                    </ToggleSection>
                  </div>
              </div>
            </div>
      </section>
    </div>
  )
}

export default Realisation;