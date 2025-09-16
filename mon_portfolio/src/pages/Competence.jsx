import '../SASS/pages/competence.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import SkillsComponent from '../components/item/SkillsComponent'

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

function Competence() {
    return(
        <div className="competences-page">
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
        </div>
    )
}

export default Competence;