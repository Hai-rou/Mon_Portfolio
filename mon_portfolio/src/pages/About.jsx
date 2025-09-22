import '../SASS/pages/about.css'
import { useRef, useEffect } from "react";
import gsap from "gsap";

function About () {
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

    return(
        <>
        <main ref={containerRef} className="about-page">
            <h1>A propos de moi</h1>
            <p>
                Je m'appelle Haïrou, j'ai 28 ans et je suis développeur web front-end. Passionné par le développement web, 
                j'ai décidé de me reconvertir dans ce domaine pour en faire mon métier.
                J'aime créer des sites web modernes et fonctionnels en utilisant les dernières technologies.
            </p>
            <p>
                Mon parcours professionnel a débuté dans le secteur agricole, où j'ai obtenu un Bac Pro PH (Production Horticole) et poursuivis sur un BTSA au Lycée Agricole de Coutances. 
                Durant cette période, j'ai eu l'opportunité de travailler sur un projet de reconnaissance des végétaux tout public grâce au QR code. 
                Ce projet m'a permis de développer mes compétences et analyse de données, tout en renforçant ma passion pour la technologie.
            </p>
            <p>
                Avant de devenir développeur web, j'ai travaillé dans le domaine de la vente pendant plusieurs années. 
                J'ai acquis de nombreuses compétences en communication, en gestion de projet et en travail d'équipe.
                Ces compétences me sont très utiles dans mon travail de développeur web, où la collaboration avec les clients et les collègues est essentielle.
            </p>
            <p>
                De Castorama à Prolians, de conseiller de vente à magasinier, le domaine de la vente a été un challenge plein de rebondissement et d'imprévu. 
                Le domaine de la vente et ces nombreuses methodes de travail nécessite de la fléxibiliter. Ce que je retiens de ces expériences, c'est l'organisation et la gestion. 
                Des points primordiaux pour continuer de progresser.
            </p>
            <section className='about-me'>
                <figure>
                    <img src="/assets/about/lycee_coutances.webp" alt="Projet de reconnaissance des végétaux au Lycée agricole de Coutances" />
                    <figcaption>Projet de reconnaissance des végétaux au Lycée agricole de Coutances</figcaption>
                </figure>
                {/* Flèche SVG */}
                <div className="arrow">
                    <svg width="40" height="40" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 464c-8.2 0-16.4-3.1-22.6-9.4l-192-192c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 338.7V48c0-17.7 14.3-32 32-32s32 14.3 32 32v290.7l137.4-121.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-192 192c-6.2 6.3-14.4 9.4-22.7 9.4z" fill="#58A6FF"/>
                    </svg>
                </div>
                <figure className='photos'>
                    <img className='item' src="/assets/about/bvs_beaune.webp" alt="Photo du magasin BVS Beaune" />
                    <img className='item' src="/assets/about/casto_Quimper.webp" alt="Photo du magasin de Castorama de Quimper" />
                    <img className='item' src="/assets/about/fransbonhomme.webp" alt="Photo du dépôt FransBohomme de Beaune" />
                    <img className='item' src="/assets/about/prolians_beaune.webp" alt="Photo du magasin de Prolians de Beaune" />
                </figure>
                {/* Flèche SVG */}
                <div className="arrow">
                    <svg width="40" height="40" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 464c-8.2 0-16.4-3.1-22.6-9.4l-192-192c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 338.7V48c0-17.7 14.3-32 32-32s32 14.3 32 32v290.7l137.4-121.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-192 192c-6.2 6.3-14.4 9.4-22.7 9.4z" fill="#58A6FF"/>
                    </svg>
                </div>
                <figure>
                    <img src="/assets/about/integrateur.webp" alt="Image qui illustre le metier d'intégrateur web" />
                    <figcaption>Le métier de développeur web</figcaption>
                </figure>
            </section>
            <section className='formation'>
                <h2>Formation </h2>
                <p>
                    J'ai suivi une formation intensive de développeur web front-end chez OpenClassrooms, où j'ai appris les bases du HTML, CSS, JavaScript, React et d'autres technologies web.
                    J'ai également travaillé sur plusieurs projets pratiques pour mettre en pratique mes compétences et développer mon portfolio.
                </p>
                <p>
                    En plus de ma formation chez OpenClassrooms, j'ai également suivi des cours en ligne et lu de nombreux livres sur le développement web pour approfondir mes connaissances et rester à jour avec les dernières tendances et technologies.
                </p>
                <p>
                    Je suis convaincu que le développement web est un domaine en constante évolution, et je suis déterminé à continuer à apprendre et à m'améliorer en tant que développeur web tout au long de ma carrière.
                </p>
                <p>
                    Je suis toujours à la recherche de nouveaux défis et de nouvelles opportunités pour apprendre et grandir en tant que développeur. 
                    N'hésitez pas à me contacter si vous souhaitez en savoir plus sur moi ou sur mes compétences.
                </p>
            </section>
            <section className="skills-fusion">
                <h2>Fusion de compétences</h2>
                <div className="skills-diagram-animated">
                    <svg width="300" height="300" viewBox="0 0 300 300" className="fixed-circle">
                        <circle cx="150" cy="150" r="120" fill="#0D1117" />
                        <text x="150" y="60" textAnchor="middle" fill="#E6EDF3" fontSize="12">Formation agricole</text>
                        <text x="220" y="150" textAnchor="middle" fill="#E6EDF3" fontSize="12">Projet innovant</text>
                        <text x="150" y="250" textAnchor="middle" fill="#E6EDF3" fontSize="12">Expérience de vente</text>
                        <text x="90" y="150" textAnchor="middle" fill="#E6EDF3" fontSize="10">Adaptabilité & organisation</text>
                    </svg>
                    <div className="rotating-arrows">
                        <svg width="300" height="300" viewBox="0 0 300 300">
                            {/* Flèche courbée 1 */}
                            <g>
                                <path d="M150,40 A110,110 0 0,1 260,150" stroke="#3FB950" strokeWidth="6" fill="none"/>
                                <polygon points="269,150 250,145 255,155" fill="#3FB950"/>
                            </g>
                            {/* Flèche courbée 2 */}
                            <g transform="rotate(120 150 150)">
                                <path d="M150,40 A110,110 0 0,1 260,150" stroke="#3FB950" strokeWidth="6" fill="none"/>
                                <polygon points="269,150 250,145 255,155" fill="#3FB950"/>
                            </g>
                            {/* Flèche courbée 3 */}
                            <g transform="rotate(240 150 150)">
                                <path d="M150,40 A110,110 0 0,1 260,150" stroke="#3FB950" strokeWidth="6" fill="none"/>
                                <polygon points="269,150 250,145 255,155" fill="#3FB950"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default About