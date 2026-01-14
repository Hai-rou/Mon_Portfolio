import "../SASS/pages/realisation.scss"
import BubblesBackground from "../components/item/BubblesBackground";
import ToggleSection from "../components/item/ToggleSection";
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
      <div className="page-header">
        <h1>Réalisations</h1>
        <p className="page-subtitle">
          Découvrez mes projets professionnels et personnels, reflétant mon engagement envers l'excellence technique et la créativité.
        </p>
      </div>

      <section className="project-showcase">
        <div className="project-card featured">
          <div className="project-badge">
            <Icon icon="mdi:star" width="20" height="20" />
            <span>En cours</span>
          </div>
          
          <div className="project-header">
            <div className="project-title-section">
              <h2>Rêves d'Exploration</h2>
              <p className="project-subtitle">Plateforme de voyage et d'aventures</p>
              <a href="https://reve-exploration.vercel.app/" target="_blank" rel="noopener noreferrer">Visiter le projet en ligne mais toujours en développement</a>
            </div>
            <div className="project-meta">
              <div className="meta-item">
                <Icon icon="mdi:calendar" width="18" height="18" />
                <span>Mai 2025 - En cours</span>
              </div>
              <div className="meta-item">
                <Icon icon="mdi:account" width="18" height="18" />
                <span>Intégrateur Web</span>
              </div>
            </div>
          </div>

          <div className="project-content">
            <div className="project-visual">
              <div className="mockup-container">
                <div className="mockup-frame">
                  <div className="browser-bar">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="browser-url">revesdexploration.com</div>
                  </div>
                  <img src="/assets/realisation/Page d'accueil.webp" alt="Maquette Rêves d'Exploration" />
                </div>
              </div>
            </div>

            <div className="project-details">
              <div className="detail-section">
                <h3>
                  <Icon icon="mdi:target" width="24" height="24" />
                  Vue d'ensemble
                </h3>
                <p>
                  Site web dédié aux passionnés de voyages, offrant des guides détaillés, 
                  des récits d'aventures et une communauté interactive pour partager des expériences.
                </p>
              </div>

              <div className="detail-section">
                <h3>
                  <Icon icon="mdi:cog" width="24" height="24" />
                  Technologies
                </h3>
                <div className="tech-stack">
                  <div className="tech-category">
                    <span className="category-label">Frontend</span>
                    <div className="tech-items">
                      <div className="tech-chip">
                        <Icon icon="simple-icons:astro" width="16" height="16" />
                        <span>Astro</span>
                      </div>
                      <div className="tech-chip">
                        <Icon icon="simple-icons:tailwindcss" width="16" height="16" />
                        <span>TailwindCSS</span>
                      </div>
                      <div className="tech-chip">
                        <Icon icon="skill-icons:javascript" width="16" height="16" />
                        <span>JavaScript</span>
                      </div>
                    </div>
                  </div>
                  <div className="tech-category">
                    <span className="category-label">Backend</span>
                    <div className="tech-items">
                      <div className="tech-chip">
                        <Icon icon="skill-icons:python-dark" width="16" height="16" />
                        <span>Python</span>
                      </div>
                    </div>
                  </div>
                  <div className="tech-category">
                    <span className="category-label">Outils</span>
                    <div className="tech-items">
                      <div className="tech-chip">
                        <Icon icon="simple-icons:figma" width="16" height="16" />
                        <span>Figma</span>
                      </div>
                      <div className="tech-chip">
                        <Icon icon="mdi:git" width="16" height="16" />
                        <span>Git</span>
                      </div>
                      <div className="tech-chip">
                        <Icon icon="simple-icons:netlify" width="16" height="16" />
                        <span>Netlify</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>
                  <Icon icon="mdi:briefcase" width="24" height="24" />
                  Responsabilités
                </h3>
                <div className="responsibilities-grid">
                  <div className="responsibility-item">
                    <div className="resp-icon">
                      <Icon icon="mdi:code-tags" width="20" height="20" />
                    </div>
                    <div className="resp-content">
                      <h4>Intégration web</h4>
                      <p>Traduction des maquettes Figma en code HTML/CSS performant</p>
                    </div>
                  </div>
                  <div className="responsibility-item">
                    <div className="resp-icon">
                      <Icon icon="mdi:palette" width="20" height="20" />
                    </div>
                    <div className="resp-content">
                      <h4>Design responsive</h4>
                      <p>Adaptation fluide sur tous les types d'appareils</p>
                    </div>
                  </div>
                  <div className="responsibility-item">
                    <div className="resp-icon">
                      <Icon icon="mdi:speedometer" width="20" height="20" />
                    </div>
                    <div className="resp-content">
                      <h4>Optimisation</h4>
                      <p>Performance, SEO et accessibilité web</p>
                    </div>
                  </div>
                  <div className="responsibility-item">
                    <div className="resp-icon">
                      <Icon icon="mdi:puzzle" width="20" height="20" />
                    </div>
                    <div className="resp-content">
                      <h4>Développement</h4>
                      <p>Création d'interfaces utilisateur interactives</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section highlights">
                <h3>
                  <Icon icon="mdi:star-circle" width="24" height="24" />
                  Points clés
                </h3>
                <div className="highlights-list">
                  <div className="highlight-item">
                    <Icon icon="mdi:check-circle" width="20" height="20" />
                    <span>Blog interactif avec système de commentaires</span>
                  </div>
                  <div className="highlight-item">
                    <Icon icon="mdi:check-circle" width="20" height="20" />
                    <span>Galerie multimédia optimisée pour tous formats</span>
                  </div>
                  <div className="highlight-item">
                    <Icon icon="mdi:check-circle" width="20" height="20" />
                    <span>Architecture SEO-friendly pour meilleure visibilité</span>
                  </div>
                  <div className="highlight-item">
                    <Icon icon="mdi:check-circle" width="20" height="20" />
                    <span>Formulaire de contact avec validation avancée</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <div className="project-title-section">
              <h2>Haacchi Music</h2>
              <p className="project-subtitle">Haacchi Music - Gestionnaire de bibliothèque musicale PWA</p>
              <p className="project-subtitle">
                Application web progressive développée avec Angular 19, 
                permettant aux utilisateurs de gérer et écouter leur collection musicale personnelle directement depuis leur navigateur.
              </p>
              <p className="projet-subtitle">
                Philosophie :<br />
                Haacchi remet l'utilisateur au centre de sa musique, sans dépendre de plateformes de streaming. 
                Inspiré de l'esprit MySpace où la musique définissait l'identité numérique.
              </p>
              <a href="https://music-projet.vercel.app/" target="_blank" rel="noopener noreferrer">Visiter le projet en ligne</a>
            </div>
            <div className="project-meta">
              <div className="meta-item">
                <Icon icon="mdi:calendar" width="18" height="18" />
                <span>2026</span>
              </div>
              <div className="meta-item">
                <Icon icon="mdi:account" width="18" height="18" />
                <span>Développeur Frontend</span>
              </div>
            </div>
          </div>

          <div className="project-content">
            <div className="project-visual">
              <div className="mockup-container">
                <div className="mockup-frame">
                  <div className="browser-bar">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="browser-url">haacchimusic.com</div>
                  </div>
                  <img src="/assets/realisation/haacchi-homepage.png" alt="Maquette Haacchi Music" />
                </div>
              </div>
            </div>

            <div className="project-details">
              <div className="detail-section">
                <h3>
                  <Icon icon="mdi:target" width="24" height="24" />
                  Vue d'ensemble
                </h3>
                <p>
                  Progressive Web App permettant de transformer sa bibliothèque musicale locale en playlists intelligentes. 
                  Scanne automatiquement les dossiers, extrait les métadonnées et offre une expérience d'écoute fluide, 
                  installable sur mobile comme une app native.
                </p>
              </div>

              <div className="detail-section">
                <h3>
                  <Icon icon="mdi:cog" width="24" height="24" />
                  Technologies
                </h3>
                <div className="tech-stack">
                  <div className="tech-category">
                    <span className="category-label">Frontend</span>
                    <div className="tech-items">
                      <div className="tech-chip">
                        <Icon icon="simple-icons:angular" width="16" height="16" />
                        <span>Angular</span>
                      </div>
                      <div className="tech-chip">
                        <Icon icon="skill-icons:typescript" width="16" height="16" />
                        <span>TypeScript</span>
                      </div>
                      <div className="tech-chip">
                        <Icon icon="simple-icons:sass" width="16" height="16" />
                        <span>SCSS</span>
                      </div>
                    </div>
                  </div>
                  <div className="tech-category">
                    <span className="category-label">Outils</span>
                    <div className="tech-items">
                      <div className="tech-chip">
                        <Icon icon="mdi:git" width="16" height="16" />
                        <span>Git</span>
                      </div>
                      <div className="tech-chip">
                        <Icon icon="simple-icons:vercel" width="16" height="16" />
                        <span>Vercel</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>
                  <Icon icon="mdi:briefcase" width="24" height="24" />
                  Responsabilités
                </h3>
                <div className="responsibilities-grid">
                  <div className="responsibility-item">
                    <div className="resp-icon">
                      <Icon icon="mdi:code-tags" width="20" height="20" />
                    </div>
                    <div className="resp-content">
                      <h4>Développement Angular</h4>
                      <p>Création de composants réutilisables et modulaires</p>
                    </div>
                  </div>
                  <div className="responsibility-item">
                    <div className="resp-icon">
                      <Icon icon="mdi:music" width="20" height="20" />
                    </div>
                    <div className="resp-content">
                      <h4>Lecteur audio</h4>
                      <p>Intégration d'un lecteur audio avec contrôles avancés</p>
                    </div>
                  </div>
                  <div className="responsibility-item">
                    <div className="resp-icon">
                      <Icon icon="mdi:database" width="20" height="20" />
                    </div>
                    <div className="resp-content">
                      <h4>Gestion des données</h4>
                      <p>Services Angular pour la gestion de l'état et des données</p>
                    </div>
                  </div>
                  <div className="responsibility-item">
                    <div className="resp-icon">
                      <Icon icon="mdi:responsive" width="20" height="20" />
                    </div>
                    <div className="resp-content">
                      <h4>Interface responsive</h4>
                      <p>Design adaptatif pour tous les appareils</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section highlights">
                <h3>
                  <Icon icon="mdi:star-circle" width="24" height="24" />
                  Points clés
                </h3>
                <div className="highlights-list">
                  <div className="highlight-item">
                    <Icon icon="mdi:check-circle" width="20" height="20" />
                    <span>📂 Scan intelligent : Parcours récursif des dossiers musicaux avec File System Access API</span>
                  </div>
                  <div className="highlight-item">
                    <Icon icon="mdi:check-circle" width="20" height="20" />
                    <span>🎵 Playlists automatiques : Création de playlists basées sur l'arborescence des dossiers</span>
                  </div>
                  <div className="highlight-item">
                    <Icon icon="mdi:check-circle" width="20" height="20" />
                    <span>🎨 Métadonnées enrichies : Extraction automatique des titres, artistes, albums et pochettes via music-metadata-browser</span>
                  </div>
                  <div className="highlight-item">
                    <Icon icon="mdi:check-circle" width="20" height="20" />
                    <span>💾 Persistance locale : Sauvegarde des playlists dans IndexedDB pour éviter le rescan</span>
                  </div>
                  <div className="highlight-item">
                    <Icon icon="mdi:check-circle" width="20" height="20" />
                    <span>🔀 Lecteur avancé : Lecture aléatoire, navigation suivant/précédent, barre de progression interactive</span>
                  </div>
                  <div className="highlight-item">
                    <Icon icon="mdi:check-circle" width="20" height="20" />
                    <span>📱 Installation mobile : PWA installable avec manifest et service worker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="coming-soon-section">
          <div className="coming-soon-content">
            <Icon icon="mdi:rocket-launch" width="48" height="48" />
            <h3>Nouveaux projets en préparation</h3>
            <p>D'autres réalisations seront bientôt disponibles. Restez connecté pour découvrir mes prochaines créations !</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Realisation;