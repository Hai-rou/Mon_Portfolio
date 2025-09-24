import { useState } from 'react';
import '../../SASS/item/activites.scss';

// Données des projets avec descriptions
import { projectsData } from '../../data/projetsData';

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
                    <img src="/assets/openclassrooms.webp" alt="Logo Openclassrooms" />
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