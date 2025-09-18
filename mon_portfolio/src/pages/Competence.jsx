import '../SASS/pages/competence.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import SkillsComponent from '../components/item/SkillsComponent'
import { useEffect,useRef } from 'react';
import { gsap } from 'gsap';

const techStackFrontEnd = [
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Sass', icon: 'fab fa-sass' },
    { name: 'vite', icon: 'fas fa-bolt' },
];
const techStackBackEnd = [
    { name: 'Python', icon: 'fab fa-python' },
];
function initOrbs(ref) {
    const container = ref;
    const orbs = [];
    const orbCount = 15;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    for (let i = 0; i < orbCount; i++) {
        const orb = document.createElement('div');
        orb.className = 'orb';
        const size = 100 + Math.random() * 200;
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
            x: () => (Math.random() - 0.5) * 500,
            y: () => (Math.random() - 0.5) * 500,
            duration: 6 + Math.random() * 4,
            ease: "sine.inOut",
            delay: index * 0.3
        }, 0);

        tl.fromTo(orb, {
            scale: 0.3,
            opacity: 0.2
        }, {
            scale: 1 + Math.random() * 0.5,
            opacity: 0.6 + Math.random() * 0.4,
            duration: 4 + Math.random() * 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
        }, 0);
    });

    animations[4] = tl;
}
const animations = [];

function Competence() {
    const containerRef = useRef();
    const bgRef = useRef(null);

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
            initOrbs(bgRef.current);
        }
        // Cleanup: remove orbs on unmount
        return () => {
            if (bgRef.current) {
                const orbs = bgRef.current.querySelectorAll('.orb');
                orbs.forEach(orb => orb.remove());
            }
        };
    }, []);
    return(
        <div id="competence-bg" className="competences-page" ref={containerRef}>
            <div className="orbs-bg" ref={bgRef}></div>
            <div className="competence-content">
                <div className="logo-anime">
                    <img src="/assets/logo-h.webp" alt="Logo avec mon Pseudo" />       
                </div>
                <div className='title-competence'>
                    <h1>Compétences</h1>
                    <p>Voici un aperçu de mes compétences actuelles en développement web. 
                        Je suis constamment en train d'apprendre et d'améliorer mes compétences pour rester à jour avec les dernières technologies et tendances du secteur.
                    </p>
                </div>
                <SkillsComponent />
                <p>
                    Note: Les pourcentages indiqués reflètent mon niveau de compétence actuel et sont susceptibles d'évoluer à mesure que j'acquiers de nouvelles connaissances et expériences.
                </p>
                <p>
                    Durant ma formation chez OpenClassrooms, j'ai eu l'occasion de travailler sur plusieurs projets pratiques qui m'ont permis de mettre en application les compétences acquises. 
                    Ces projets incluent la création de sites web responsives, le développement d'applications web interactives, et l'intégration de fonctionnalités avancées telles que l'authentification des utilisateurs et la gestion de bases de données.
                </p>
                <h2>Horizon d'évolution</h2>
                <p>
                    Mon objectif à court terme est de renforcer mes compétences en JavaScript et en React, car ce sont des technologies clés dans le développement web moderne. 
                    À long terme, je vise à maîtriser le développement back-end avec Python et Django, ce qui me permettra de devenir un développeur full-stack compétent.
                </p>
                <p>
                    En plus des compétences techniques, je m'efforce également de développer des compétences en gestion de projet et en collaboration d'équipe, car je crois que ces compétences sont essentielles pour réussir dans le domaine du développement web.
                </p>
                <h2>Mon portfolio</h2>
                <h3>Technologies utilisées :</h3>
                <div className='tech-portfolio'>
                    <div className='tech-item'>
                        <h4>FrontEnd</h4>
                        <div className='tech-list'>
                            {techStackFrontEnd.map((tech, index) => (
                                <div className='tech-card' key={index}>
                                    <i className={tech.icon}></i>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='tech-item'>
                        <h4>BackEnd</h4>
                        <div className='tech-list'>
                            {techStackBackEnd.map((tech, index) => (
                                <div className='tech-card' key={index}>
                                    <i className={tech.icon}></i>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <h4>Découverte et Apprentissage</h4>
                <p>
                    En plus des technologies mentionnées ci-dessus, je suis également en train d'explorer et d'apprendre d'autres outils et frameworks qui sont pertinents pour le développement web. 
                    Actuellement, je me concentre sur l'apprentissage de Git pour la gestion de version, ainsi que sur des frameworks CSS comme Tailwind CSS pour améliorer la rapidité et l'efficacité du développement front-end.
                    Je suis également intéressé par l'exploration de bases de données comme PostgreSQL et MongoDB pour le développement back-end.
                    Mon objectif est de continuer à élargir mes compétences et à rester à jour avec les dernières tendances et technologies dans le domaine du développement web.
                </p>
                <p>
                    Durant le développement de mon portfolio, j'ai également eu l'occasion d'explorer des outils de déploiement et d'hébergement tels que Netlify et Vercel, qui facilitent la mise en ligne rapide de projets web.
                </p>
                <h5>Découverte durant le développement</h5>
                <h6>GSAP</h6>
                <p>
                    J'ai également découvert GSAP (GreenSock Animation Platform), une bibliothèque JavaScript puissante pour créer des animations fluides et performantes. 
                    Je prévois d'intégrer GSAP dans mes futurs projets pour améliorer l'expérience utilisateur grâce à des animations attrayantes.
                </p>
                <div className='avantage-gsap'>
                    <h6>Avantage GSAP</h6>
                    <ul>
                        <li>Performance élevée : GSAP est optimisé pour des performances rapides, même avec des animations complexes.</li>
                        <li>Compatibilité multi-navigateurs : Fonctionne de manière cohérente sur tous les principaux navigateurs.</li>
                        <li>Contrôle précis : Offre un contrôle granulaire sur les animations, y compris la synchronisation et les effets de rebond.</li>
                        <li>Facilité d'utilisation : Une API simple et intuitive qui facilite la création d'animations complexes.</li>
                        <li>Communauté active : Une grande communauté de développeurs et une documentation complète pour un support continu.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Competence;