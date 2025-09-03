import { useState } from 'react';
import '../../SASS/item/activites.css';

// Images 
import ArgentBankLogo from "../../assets/argentBankLogo.webp";
import Logo724 from "../../assets/724.webp";
import SophieLogo from "../../assets/sophie.webp";
import NinaLogo from "../../assets/nina.webp";
import OpenClassroomsLogo from "../../assets/openclassrooms.webp";

// Données des projets avec descriptions
const projectsData = [
    {
        id: 'argent-bank',
        title: 'Projet Argent Bank',
        image: ArgentBankLogo,
        url: 'https://github.com/Hai-rou/Argent-Bank',
        className: 'Bank-btn',
        description: 'Application bancaire React avec authentification JWT',
        technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
        status: 'Projet : Terminé',
        duration: '3 mois'
    },
    {
        id: '724-events',
        title: '724 Events',
        image: Logo724,
        url: 'https://github.com/Hai-rou/Projet_9-Debuggez-une-application-React.js',
        className: 'events-btn',
        description: 'Débogage et optimisation d\'une application React d\'événements',
        technologies: ['React', 'JavaScript', 'SASS', 'Jest'],
        status: 'Projet : Terminé',
        duration: '2 mois'
    },
    {
        id: 'sophie-bluel',
        title: 'Sophie Bluel',
        image: SophieLogo,
        url: 'https://github.com/Hai-rou/Projet_6',
        className: 'sophie-btn',
        description: 'Site portfolio d\'architecte avec interface d\'administration',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'API REST'],
        status: 'Projet : Terminé',
        duration: '2 mois'
    },
    {
        id: 'nina-carducci',
        title: 'Nina Carducci',
        image: NinaLogo,
        url: 'https://github.com/Hai-rou/Projet_8-Nina_Carducci',
        className: 'nina-btn',
        description: 'Optimisation SEO et performance d\'un site de photographe',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'SEO', 'Lighthouse'],
        status: 'Projet : Terminé',
        duration: '1 mois'
    }
];

// Composant Modal
const ProjectModal = ({ project, position, isVisible }) => {
    if (!isVisible || !project) return null;

    return (
        <div 
            className={`project-modal ${isVisible ? "visible" : ""}`}
            style={{
                position: 'fixed',
                left: position.x + 20,
                top: position.y - 50,
                zIndex: 1000
            }}
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{project.title}</h3>
                    <span className={`status ${project.status.toLowerCase()}`}>
                        {project.status}
                    </span>
                </div>
                
                <div className="modal-body">
                    <p className="description">{project.description}</p>
                    
                    <div className="project-details">
                        <div className="detail-item">
                            <strong>Durée:</strong> {project.duration}
                        </div>
                        
                        <div className="detail-item">
                            <strong>Technologies:</strong>
                            <div className="tech-tags">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="modal-footer">
                    <small>Cliquez pour voir le repository GitHub</small>
                </div>
            </div>
        </div>
    );
};

// Composant principal
function Activites() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (project, event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
        setHoveredProject(project);
    };

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
        setHoveredProject(null);
    };

    return (
        <div className="act-container">
            {/* Section GitHub */}
            <div className="git-container">
                <p>Derniers dépôts GitHub récemment mis à jour</p>
                <div className="Act-Bank">
                    {projectsData.map((project) => (
                        <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={project.className}
                            onMouseEnter={(e) => handleMouseEnter(project, e)}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={project.image} alt={`Image ${project.title}`} />
                            {project.title}
                        </a>
                    ))}
                </div>
            </div>

            {/* Section diplôme */}
            <div className="diplo-container">
                <p>Dernier diplôme, emploi et projet</p>
                <div className="item">
                    <img src={OpenClassroomsLogo} alt="Logo Openclassrooms" />
                    <div className="context">
                        <h3>Intégrateur Web</h3>
                        <span>OpenClassrooms</span>
                    </div>
                    <span>Formations</span>
                    <span>2025</span>
                </div>
            </div>

            {/* Section réseaux */}
            <div className="reseau-container">
                <p>Connectez-vous avec moi</p>
            </div>

            {/* Modal */}
            <ProjectModal
                project={hoveredProject}
                position={mousePosition}
                isVisible={!!hoveredProject}
            />
        </div>
    );
}

export default Activites;