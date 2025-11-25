import '../SASS/pages/competence.scss'
import { Icon } from '@iconify/react';
import SkillsComponent from '../components/item/SkillsComponent'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const techStackFrontEnd = [
    { name: 'HTML5', icon: 'skill-icons:html', level: 'Expert' },
    { name: 'CSS3', icon: 'skill-icons:css', level: 'Expert' },
    { name: 'JavaScript', icon: 'skill-icons:javascript', level: 'Avancé' },
    { name: 'React', icon: 'skill-icons:react-dark', level: 'Avancé' },
    { name: 'Sass', icon: 'skill-icons:sass', level: 'Avancé' }
];

const techStackBackEnd = [
    { name: 'Python', icon: 'skill-icons:python-dark', level: 'Intermédiaire' },
];

const tools = [
    { name: 'Git', icon: 'mdi:git', color: '#F05032' },
    { name: 'GitHub', icon: 'mdi:github', color: '#181717' },
    { name: 'Figma', icon: 'simple-icons:figma', color: '#F24E1E' },
    { name: 'Vite', icon: 'skill-icons:vite-dark', color: '#646CFF' },
    { name: 'VS Code', icon: 'skill-icons:vscode-dark', color: '#007ACC' },
];

function initOrbs(ref) {
    const container = ref;
    const orbs = [];
    const orbCount = 10;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    for (let i = 0; i < orbCount; i++) {
        const orb = document.createElement('div');
        orb.className = 'orb';
        const size = 150 + Math.random() * 250;
        orb.style.width = size + 'px';
        orb.style.height = size + 'px';
        orb.style.left = Math.random() * containerWidth + 'px';
        orb.style.top = Math.random() * containerHeight + 'px';
        container.appendChild(orb);
        orbs.push(orb);
    }

    const tl = gsap.timeline({ repeat: -1 });

    orbs.forEach((orb, index) => {
        tl.to(orb, {
            x: () => (Math.random() - 0.5) * 400,
            y: () => (Math.random() - 0.5) * 400,
            duration: 8 + Math.random() * 4,
            ease: "sine.inOut",
            delay: index * 0.2
        }, 0);

        tl.fromTo(orb, {
            scale: 0.5,
            opacity: 0.15
        }, {
            scale: 1 + Math.random() * 0.3,
            opacity: 0.3 + Math.random() * 0.2,
            duration: 5 + Math.random() * 3,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
        }, 0);
    });

    return tl;
}

function Competence() {
    const containerRef = useRef();
    const bgRef = useRef(null);
    const orbsAnimationRef = useRef(null);

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

    useEffect(() => {
        if (bgRef.current) {
            orbsAnimationRef.current = initOrbs(bgRef.current);
        }
        return () => {
            if (bgRef.current) {
                const orbs = bgRef.current.querySelectorAll('.orb');
                orbs.forEach(orb => orb.remove());
            }
            if (orbsAnimationRef.current) {
                orbsAnimationRef.current.kill();
            }
        };
    }, []);

    return (
        <div id="competence-bg" className="competences-page" ref={containerRef}>
            <div className="orbs-bg" ref={bgRef}></div>
            
            <div className="competence-content">
                <div className="page-hero">
                    <div className="logo-section">
                        <div className="logo-anime">
                            <img src="/assets/logo-h.webp" alt="Logo Haïrou" />
                        </div>
                    </div>
                    
                    <div className="hero-text">
                        <h1>Compétences & Expertise</h1>
                        <p className="hero-subtitle">
                            Développeur web passionné, constamment en apprentissage pour maîtriser 
                            les technologies modernes et créer des expériences web exceptionnelles.
                        </p>
                    </div>
                </div>

                <section className="skills-section">
                    <div className="section-header">
                        <Icon icon="mdi:chart-line" width="32" height="32" />
                        <h2>Niveaux de maîtrise</h2>
                    </div>
                    <SkillsComponent />
                    <p className="skills-note">
                        <Icon icon="mdi:information" width="18" height="18" />
                        Les pourcentages reflètent mon niveau actuel et évoluent continuellement avec l'expérience.
                    </p>
                </section>

                <section className="tech-stack-section">
                    <div className="section-header">
                        <Icon icon="mdi:tools" width="32" height="32" />
                        <h2>Stack technique</h2>
                    </div>
                    
                    <div className="tech-grid">
                        <div className="tech-category">
                            <div className="category-header">
                                <Icon icon="mdi:monitor" width="28" height="28" />
                                <h3>Frontend</h3>
                            </div>
                            <div className="tech-cards">
                                {techStackFrontEnd.map((tech, index) => (
                                    <div className="tech-card" key={index}>
                                        <div className="tech-icon">
                                            <Icon icon={tech.icon} width="40" height="40" />
                                        </div>
                                        <div className="tech-info">
                                            <span className="tech-name">{tech.name}</span>
                                            <span className="tech-level">{tech.level}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tech-category">
                            <div className="category-header">
                                <Icon icon="mdi:server" width="28" height="28" />
                                <h3>Backend</h3>
                            </div>
                            <div className="tech-cards">
                                {techStackBackEnd.map((tech, index) => (
                                    <div className="tech-card" key={index}>
                                        <div className="tech-icon">
                                            <Icon icon={tech.icon} width="40" height="40" />
                                        </div>
                                        <div className="tech-info">
                                            <span className="tech-name">{tech.name}</span>
                                            <span className="tech-level">{tech.level}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tech-category tools-category">
                            <div className="category-header">
                                <Icon icon="mdi:toolbox" width="28" height="28" />
                                <h3>Outils & Environnement</h3>
                            </div>
                            <div className="tools-grid">
                                {tools.map((tool, index) => (
                                    <div className="tool-chip" key={index}>
                                        <Icon icon={tool.icon} width="24" height="24" style={{ color: tool.color }} />
                                        <span>{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="learning-section">
                    <div className="section-header">
                        <Icon icon="mdi:rocket-launch" width="32" height="32" />
                        <h2>Objectifs & Évolution</h2>
                    </div>
                    
                    <div className="learning-grid">
                        <div className="learning-card">
                            <div className="learning-icon">
                                <Icon icon="mdi:target" width="32" height="32" />
                            </div>
                            <h3>Court terme</h3>
                            <p>
                                Approfondir JavaScript ES6+ et React (hooks, context, performance optimization) 
                                pour créer des applications web modernes et performantes.
                            </p>
                        </div>

                        <div className="learning-card featured">
                            <div className="learning-icon">
                                <Icon icon="mdi:star" width="32" height="32" />
                            </div>
                            <h3>Long terme</h3>
                            <p>
                                Devenir développeur full-stack en maîtrisant Python/Django et PostgreSQL, 
                                tout en développant mes compétences en architecture logicielle.
                            </p>
                        </div>

                        <div className="learning-card">
                            <div className="learning-icon">
                                <Icon icon="mdi:account-group" width="32" height="32" />
                            </div>
                            <h3>Soft Skills</h3>
                            <p>
                                Renforcer mes compétences en gestion de projet Agile, 
                                communication d'équipe et méthodologies de développement collaboratif.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="discovery-section">
                    <div className="discovery-card">
                        <div className="discovery-header">
                            <div className="discovery-icon">
                                <Icon icon="simple-icons:greensock" width="48" height="48" />
                            </div>
                            <div>
                                <h2>GSAP - GreenSock Animation Platform</h2>
                                <p className="discovery-subtitle">Découverte clé durant le développement</p>
                            </div>
                        </div>
                        
                        <p className="discovery-description">
                            GSAP est une bibliothèque JavaScript professionnelle pour créer des animations 
                            fluides, performantes et cross-browser. Intégrée dans ce portfolio, elle permet 
                            de donner vie aux interfaces avec des transitions élégantes.
                        </p>

                        <div className="features-grid">
                            <div className="feature-item">
                                <Icon icon="mdi:speedometer" width="24" height="24" />
                                <div>
                                    <h4>Performance élevée</h4>
                                    <p>Optimisé pour des animations fluides à 60 FPS</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Icon icon="mdi:web" width="24" height="24" />
                                <div>
                                    <h4>Cross-browser</h4>
                                    <p>Compatible avec tous les navigateurs modernes</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Icon icon="mdi:tune" width="24" height="24" />
                                <div>
                                    <h4>Contrôle précis</h4>
                                    <p>Timeline avancée et synchronisation fine</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Icon icon="mdi:puzzle" width="24" height="24" />
                                <div>
                                    <h4>API intuitive</h4>
                                    <p>Simple à apprendre, puissante à utiliser</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Competence;