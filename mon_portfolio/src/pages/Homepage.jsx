import '../SASS/pages/homepage.scss'
import { Icon } from '@iconify/react';
import SkillsComponent from '../components/item/SkillsComponent'
import ContactForm from '../components/item/ContactForm'
import Activites from '../components/item/Activite'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
    const sectionRefs = useRef([]);

    useEffect(() => {
        sectionRefs.current.forEach((section) => {
            if (section) {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        });
    }, []);

    return (
        <div className="homepage">
            {/* Hero Section */}
            <section 
                id="Presenta" 
                className="presentation-section"
                ref={(el) => (sectionRefs.current[0] = el)}
            >
                <div className="section-header">
                    <div className="header-icon">
                        <Icon icon="mdi:account-circle" width="40" height="40" />
                    </div>
                    <h2>À propos de moi</h2>
                    <p className="section-subtitle">Développeur Web passionné par l'innovation</p>
                </div>

                <div className="presentation-content">
                    <div className="profile-visual">
                        <div className="avatar-container">
                            <img src="/assets/logo-h.webp" alt="Haïrou - Développeur Web" />
                            <div className="avatar-ring"></div>
                        </div>
                        <div className="status-badge">
                            <span className="status-dot"></span>
                            <span>Disponible pour projets</span>
                        </div>
                    </div>

                    <div className="bio-content">
                        <div className="bio-card">
                            <div className="card-header">
                                <Icon icon="mdi:code-tags" width="28" height="28" />
                                <h3>Parcours</h3>
                            </div>
                            <p>
                                Passionné depuis toujours par le développement informatique, 
                                j'ai transformé mon hobby en carrière professionnelle. Aujourd'hui 
                                <strong> développeur web spécialisé React</strong>, je crée des 
                                expériences utilisateur modernes et performantes.
                            </p>
                        </div>

                        <div className="bio-card featured">
                            <div className="card-header">
                                <Icon icon="mdi:rocket-launch" width="28" height="28" />
                                <h3>Vision</h3>
                            </div>
                            <p>
                                Mon objectif : devenir <strong>développeur full-stack</strong> en 
                                maîtrisant l'écosystème Python/Django pour le back-end, tout en 
                                continuant à perfectionner mes compétences front-end.
                            </p>
                        </div>

                        <div className="tech-stack-preview">
                            <span className="stack-label">Stack actuelle</span>
                            <div className="stack-icons">
                                <Icon icon="skill-icons:react-dark" width="32" height="32" />
                                <Icon icon="skill-icons:javascript" width="32" height="32" />
                                <Icon icon="skill-icons:sass" width="32" height="32" />
                                <Icon icon="skill-icons:html" width="32" height="32" />
                                <Icon icon="skill-icons:css" width="32" height="32" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Project Section */}
            <section 
                id="realisation" 
                className="project-section"
                ref={(el) => (sectionRefs.current[1] = el)}
            >
                <div className="section-header">
                    <div className="header-icon">
                        <Icon icon="mdi:briefcase" width="40" height="40" />
                    </div>
                    <h2>Projet en cours</h2>
                    <p className="section-subtitle">Innovation & Expertise technique</p>
                </div>

                <div className="project-showcase">
                    <div className="project-card">
                        <div className="project-badge">
                            <Icon icon="mdi:star" width="20" height="20" />
                            <span>En développement</span>
                        </div>

                        <div className="project-header">
                            <div className="project-logo">
                                <img src="/assets/realisation/logo.webp" alt="Rêves d'Exploration" />
                            </div>
                            <div className="project-info">
                                <h3>Rêves d'Exploration</h3>
                                <p className="project-tagline">Agence de voyage personnalisée</p>
                                <a href="https://reve-exploration.vercel.app/" target="_blank" rel="noopener noreferrer">Visiter le site en ligne mais toujours en développement</a>
                                <div className="project-meta">
                                    <div className="meta-item">
                                        <Icon icon="mdi:clock-outline" width="18" height="18" />
                                        <span>Lun-Sam 9H-19H</span>
                                    </div>
                                    <div className="meta-item">
                                        <Icon icon="mdi:email-outline" width="18" height="18" />
                                        <span>test@revesexploration.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="project-description">
                            <blockquote>
                                <Icon icon="mdi:format-quote-open" width="24" height="24" />
                                <p>
                                    Rêves d'exploration est une agence de voyage à domicile offrant 
                                    un service personnalisé, directement chez vous ou à distance. 
                                    Avec plus de <strong>6 ans d'expérience</strong> et des milliers 
                                    de voyageurs satisfaits, je lance ma propre agence de voyages sur mesure.
                                </p>
                            </blockquote>
                        </div>

                        <div className="tech-discovery">
                            <div className="discovery-header">
                                <Icon icon="mdi:lightbulb-on" width="24" height="24" />
                                <h4>Nouvelles technologies explorées</h4>
                            </div>
                            <div className="tech-chips">
                                <div className="tech-chip">
                                    <div className="chip-icon">
                                        <img src="/assets/realisation/astro.svg" alt="Astro" />
                                    </div>
                                    <div className="chip-content">
                                        <span className="chip-name">Astro</span>
                                        <span className="chip-desc">Framework ultra-rapide</span>
                                    </div>
                                </div>
                                <div className="tech-chip">
                                    <div className="chip-icon">
                                        <img src="/assets/realisation/tailwind2.webp" alt="Tailwind CSS" />
                                    </div>
                                    <div className="chip-content">
                                        <span className="chip-name">Tailwind CSS</span>
                                        <span className="chip-desc">Utility-first CSS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section 
                id="activites" 
                className="activities-section"
                ref={(el) => (sectionRefs.current[2] = el)}
            >
                <div className="section-header">
                    <div className="header-icon">
                        <Icon icon="mdi:folder-multiple" width="40" height="40" />
                    </div>
                    <h2>Projets & Réalisations</h2>
                    <p className="section-subtitle">Portfolio de mes créations</p>
                </div>
                <Activites />
            </section>

            {/* Skills Section */}
            <section 
                id="competences" 
                className="skills-section"
                ref={(el) => (sectionRefs.current[3] = el)}
            >
                <div className="section-header">
                    <div className="header-icon">
                        <Icon icon="mdi:chart-bar" width="40" height="40" />
                    </div>
                    <h2>Expertise technique</h2>
                    <p className="section-subtitle">Compétences & niveaux de maîtrise</p>
                </div>
                <div className="skills-container">
                    <SkillsComponent />
                </div>
            </section>

            {/* Contact Section */}
            <section 
                id="contact" 
                className="contact-section"
                ref={(el) => (sectionRefs.current[4] = el)}
            >
                <div className="section-header">
                    <div className="header-icon">
                        <Icon icon="mdi:email-fast" width="40" height="40" />
                    </div>
                    <h2>Démarrons un projet ensemble</h2>
                    <p className="section-subtitle">
                        Une idée ? Un projet ? N'hésitez pas à me contacter
                    </p>
                </div>
                <ContactForm />
            </section>
        </div>
    )
}

export default Homepage
