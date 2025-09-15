import React, { useRef, useEffect, useState } from "react";
import "../SASS/pages/acti.scss";
import { projectsData } from "../data/projetsData";
import gsap from "gsap";
import { div } from "framer-motion/client";

function Activites() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);
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
        <div className="activites-page" ref={containerRef}>
            <h1>Activites</h1>
            <p>
                Ici, je présentes mes activités, projets et contributions en dehors de mes réalisations principales.
                Cela peut inclure des projets personnels, des contributions à des projets open source, etc.
            </p>
            <h2>
                Projets GitHub récents
            </h2>
            <p>
                Voici une liste de mes projets GitHub récemment mis à jour.
            </p>
            <div className="projects-container">
                <div className="projects-list">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={project.className}
                            >
                                <img src={project.image} alt={`Image ${project.title}`} />
                                {project.title}
                            </a>
                            <button className="see-more-btn" onClick={() => { setSelectedProject(project); setShowModal(true); }}>
                                Voir plus
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && selectedProject && (
                <Modal selectedProject={selectedProject} setShowModal={setShowModal} />
            )}
            <div className="formation-section">
                <h2>Formation</h2>
                <div className="formation-list">
                    <div className="formation-item">
                        <img src="/assets/openclassrooms.webp" alt="Logo OpenClassrooms" />
                    </div>
                </div>
            </div>
        </div>
    );
    function Modal({ selectedProject, setShowModal }) {
        const modalRef = React.useRef(null);
        React.useEffect(() => {
            if (modalRef.current) {
                gsap.fromTo(
                    modalRef.current,
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
                );
            }
            return () => {
                if (modalRef.current) {
                    gsap.to(modalRef.current, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.in" });
                }
            };
        }, []);
        return (
            <div className="modal-overlay" onClick={() => setShowModal(false)}>
                <div className="modal-content" ref={modalRef} onClick={e => e.stopPropagation()}>
                    <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
                    <h2>{selectedProject.title}</h2>
                    <img src={selectedProject.image} alt={`Image ${selectedProject.title}`} style={{ maxWidth: "100%" }} />
                    <p>{selectedProject.description || "Pas de description disponible."}</p>
                    {selectedProject.technologies && (
                        <div className="tech-list">
                            <strong>Technologies :</strong>
                            <ul>
                                {selectedProject.technologies.map((tech, idx) => (
                                    <li key={idx}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="demo-link">
                        Voir le projet sur GitHub
                    </a>
                </div>
            </div>
        );
    }

    // Modal component for GSAP animation
    function Modal({ selectedProject, setShowModal }) {
        const modalRef = React.useRef(null);
        React.useEffect(() => {
            if (modalRef.current) {
                gsap.fromTo(
                    modalRef.current,
                    { opacity: 0, scale: 0.1},
                    { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
                );
            }
            return () => {
                if (modalRef.current) {
                    gsap.to(modalRef.current, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.in" });
                }
            };
        }, []);
        return (
            <div className="modal-overlay" onClick={() => setShowModal(false)}>
                <div className="modal-content" ref={modalRef} onClick={e => e.stopPropagation()}>
                    <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
                    <h2>{selectedProject.title}</h2>
                    <img src={selectedProject.image} alt={`Image ${selectedProject.title}`} style={{ maxWidth: "100%" }} />
                    <p>{selectedProject.description || "Pas de description disponible."}</p>
                    {selectedProject.information && (
                        <div className="info-list">
                            <strong>Informations :</strong>
                            <p>{selectedProject.information}</p>
                        </div>
                    )}
                    {selectedProject.objectives && (
                        <div className="objectives-list">
                            <strong>Objectifs :</strong>
                            <ul>
                                {selectedProject.objectives.map((objective, idx) => (
                                    <li key={idx}>{objective}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {selectedProject.technologies && (
                        <div className="tech-list">
                            <strong>Technologies :</strong>
                            <ul>
                                {selectedProject.technologies.map((tech, idx) => (
                                    <li key={idx}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="demo-link">
                        Voir le projet sur GitHub
                    </a>
                </div>
            </div>
        );
    }
    
}
export default Activites;