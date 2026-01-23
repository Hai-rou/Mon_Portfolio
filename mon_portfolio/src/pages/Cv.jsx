import '../SASS/pages/cv.scss';
import { Icon } from '@iconify/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Cv() {
  const containerRef = useRef();
  
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="cv-container" ref={containerRef}>
      <div className="cv-grid">
        {/* Section Information Personnelle */}
        <section className="cv-section personal-info">
          <h2 className="section-title">
            <Icon icon="mdi:account" width="24" height="24" />
            Information Personnelle
          </h2>
          <div className="info-content">
            <div className="info-item">
              <Icon icon="mdi:map-marker" width="18" height="18" />
              <span>Beaune, France</span>
            </div>
            <div className="info-item">
              <Icon icon="mdi:email" width="18" height="18" />
              <span>hairou.houmadi@gmail.com</span>
            </div>
            <div className="info-item">
              <Icon icon="mdi:phone" width="18" height="18" />
              <span>06 46 17 83 89</span>
            </div>
            <div className="info-item">
              <Icon icon="mdi:github" width="18" height="18" />
              <a href="https://github.com/Hai-rou?" target="_blank" rel="noopener noreferrer">https://github.com/Hai-rou?tab=repositories</a>
            </div>
            <div className="info-item">
              <Icon icon="mdi:linkedin" width="18" height="18" />
              <span>linkedin.com/in/profile</span>
            </div>
          </div>
        </section>

        {/* Section Outils et Technologies Principales */}
        <section className="cv-section tools-tech">
          <h2 className="section-title">
            <Icon icon="mdi:tools" width="24" height="24" />
            Environnement de Développement
          </h2>
          <div className="tools-grid">
            <div className="tool-category">
              <h4>IDE & Éditeurs</h4>
              <div className="tech-badges">
                <span className="tech-badge"><Icon icon="simple-icons:visualstudiocode" />VS Code</span>
              </div>
            </div>
            <div className="tool-category">
              <h4>Langages</h4>
              <div className="tech-badges">
                <span className="tech-badge"><Icon icon="logos:javascript" width="16" height="16" />JavaScript</span>
                <span className='tech-badge'><Icon icon="logos:angular-icon" width="16" height="16" />Angular</span>
                <span className="tech-badge"><Icon icon="logos:react" width="16" height="16" />React</span>
              </div>
            </div>
            <div className="tool-category">
              <h4>Qualité</h4>
              <div className="tech-badges">
                <span className="tech-badge"><Icon icon="simple-icons:eslint" />ESLint</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Projets Techniques (CLÉ) */}
        <section className="cv-section projects-key">
          <h2 className="section-title highlight">
            <Icon icon="mdi:rocket-launch" width="24" height="24" />
            Projets Techniques
          </h2>
          <div className="projects-list">
            <div className="project-entry">
              <div className="project-header">
                <h3>Rêves d'Exploration</h3>
                <span className="project-date">Mai 2025 - En cours</span>
              </div>
              <p className="project-desc">Plateforme de voyage avec Astro, TailwindCSS et Python</p>
              <div className="project-tech">
                <span>Astro</span>
                <span>TailwindCSS</span>
                <span>Python</span>
                <span>Figma</span>
              </div>
            </div>
            
            <div className="project-entry">
              <div className="project-header">
                <h3>Haacchi Music</h3>
                <span className="project-date">2025 - En cours</span>
              </div>
              <p className="project-desc">Application de streaming musical développée avec Angular</p>
              <div className="project-tech">
                <span>Angular</span>
                <span>TypeScript</span>
                <span>SCSS</span>
                <span>Vercel</span>
              </div>
            </div>

            <div className="project-entry">
              <div className="project-header">
                <h3>Portfolio Personnel</h3>
                <span className="project-date">2024 - 2025</span>
              </div>
              <p className="project-desc">Site portfolio moderne avec animations et design système</p>
              <div className="project-tech">
                <span>React</span>
                <span>GSAP</span>
                <span>SCSS</span>
                <span>Vite</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Compétences Techniques */}
        <section className="cv-section technical-skills">
          <h2 className="section-title">
            <Icon icon="mdi:code-tags" width="24" height="24" />
            Compétences Techniques
          </h2>
          <div className="skills-categories">
            <div className="skill-category">
              <h4>Frontend</h4>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">React / Next.js</span>
                  <div className="skill-bar"><div className="skill-level" style={{width: '70%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Vue.js / Angular</span>
                  <div className="skill-bar"><div className="skill-level" style={{width: '30%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">HTML5 / CSS3 / SCSS</span>
                  <div className="skill-bar"><div className="skill-level" style={{width: '95%'}}></div></div>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h4>Backend</h4>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">Node.js / Express</span>
                  <div className="skill-bar"><div className="skill-level" style={{width: '65%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Python / Django</span>
                  <div className="skill-bar"><div className="skill-level" style={{width: '15%'}}></div></div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h4>Base de données</h4>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">MongoDB</span>
                  <div className="skill-bar"><div className="skill-level" style={{width: '30%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">PostgreSQL / MySQL</span>
                  <div className="skill-bar"><div className="skill-level" style={{width: '15%'}}></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Expérience Professionnelle */}
        <section className="cv-section professional-experience">
          <h2 className="section-title">
            <Icon icon="mdi:briefcase" width="24" height="24" />
            Expérience Professionnelle
          </h2>
          <div className="experience-timeline">
            <div className="experience-entry">
              <div className="exp-date">2025 - Présent</div>
              <div className="exp-content">
                <h3>Développeur Frontend</h3>
                <h4>Bénévole - projet personnel</h4>
                <ul>
                  <li>Développement d'applications web modernes avec React et Angular</li>
                  <li>Intégration de designs responsives et accessibles</li>
                  <li>Optimisation des performances et du SEO</li>
                </ul>
              </div>
            </div>

            <div className="experience-entry">
              <div className="exp-date">2025</div>
              <div className="exp-content">
                <h3>Intégrateur Web</h3>
                <h4>Projets OpenClassrooms</h4>
                <ul>
                  <li>Transformation de maquettes en interfaces fonctionnelles</li>
                  <li>Respect des bonnes pratiques web (accessibilité, SEO)</li>
                  <li>Développement avec méthodologies agiles</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section Langues et Permis */}
        <section className="cv-section languages-permits">
          <h2 className="section-title">
            <Icon icon="mdi:translate" width="24" height="24" />
            Langues & Mobilité
          </h2>
          <div className="languages-content">
            <div className="language-item">
              <Icon icon="emojione:flag-for-france" width="20" height="20" />
              <div>
                <span className="lang-name">Français</span>
                <span className="lang-level">Langue maternelle</span>
              </div>
            </div>
            <div className="language-item">
              <Icon icon="emojione:flag-for-united-kingdom" width="20" height="20" />
              <div>
                <span className="lang-name">Anglais</span>
                <span className="lang-level">Professionnel (A2)</span>
              </div>
            </div>
            <div className="permit-item">
              <Icon icon="mdi:car" width="20" height="20" />
              <span>Permis B - Véhicule personnel</span>
            </div>
          </div>
        </section>

        {/* Section Formation */}
        <section className="cv-section education">
          <h2 className="section-title">
            <Icon icon="mdi:school" width="24" height="24" />
            Formation
          </h2>
          <div className="education-list">
            <div className="education-entry">
              <div className="edu-date">2025</div>
              <div className="edu-content">
                <h3>Développeur Web</h3>
                <h4>OpenClassrooms</h4>
                <p>Formation intensive en développement web (HTML, CSS, JavaScript, React, Node.js)</p>
              </div>
            </div>
            
            <div className="education-entry">
              <div className="edu-date">2025</div>
              <div className="edu-content">
                <h3>Formation Frontend Avancée</h3>
                <h4>Expérience - projet personnel</h4>
                <p>Spécialisation React, TypeScript, Next.js et optimisation web</p>
                <p>Apprentissage continu et mise en pratique : Projet Angular</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Loisirs */}
        <section className="cv-section hobbies">
          <h2 className="section-title">
            <Icon icon="mdi:gamepad-variant" width="24" height="24" />
            Loisirs & Centres d'Intérêt
          </h2>
          <div className="hobbies-grid">
            <div className="hobby-item">
              <Icon icon="mdi:code-braces" width="24" height="24" />
              <span>Open Source</span>
            </div>
            <div className="hobby-item">
              <Icon icon="mdi:book-open-variant" width="24" height="24" />
              <span>Tech Blog</span>
            </div>
            <div className="hobby-item">
              <Icon icon="mdi:camera" width="24" height="24" />
              <span>Photographie</span>
            </div>
            <div className="hobby-item">
              <Icon icon="mdi:airplane" width="24" height="24" />
              <span>Voyages</span>
            </div>
          </div>
        </section>

        {/* Section Certifications */}
        <section className="cv-section certifications">
          <h2 className="section-title">
            <Icon icon="mdi:certificate" width="24" height="24" />
            Certifications & Diplômes
          </h2>
          <div className="certifications-list">
            <div className="cert-item">
              <Icon icon="mdi:check-decagram" width="20" height="20" />
              <div>
                <h4>Développeur Web - Niveau 5 (Bac +2)</h4>
                <span>OpenClassrooms - 2025</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bouton de téléchargement */}
      <div className="cv-actions">
        <button className="download-btn">
          <Icon icon="mdi:download" width="20" height="20" />
          <span>Télécharger le CV (PDF)</span>
        </button>
      </div>
    </div>
  );
}

export default Cv;