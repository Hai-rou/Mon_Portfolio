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
                Mon parcours professionnel a débuté dans le secteur agricole, où j'ai obtenu un Bac Pro PH (Production Horticole) et poursuivi sur un BTSA au Lycée Agricole de Coutances. 
                Durant cette période, j'ai eu l'opportunité de travailler sur un projet de reconnaissance des végétaux tout public grâce aux QR codes. 
                Ce projet m'a permis de développer mes compétences en analyse de données, tout en renforçant ma passion pour la technologie.
            </p>
            <p>
                Avant de devenir développeur web, j'ai travaillé dans le domaine de la vente pendant plusieurs années. 
                J'y ai acquis de nombreuses compétences en communication, en gestion de projets et en travail d'équipe.
                Ces compétences me sont très utiles dans mon travail de développeur web, où la collaboration avec les clients et les collègues est essentielle.
            </p>
            <p>
                De Castorama à Prolians, de conseiller de vente à magasinier, le domaine de la vente a été un challenge plein de rebondissements et d'imprévus. 
                J'ai appris à m'adapter rapidement aux situations changeantes et à gérer efficacement les priorités, des compétences qui me servent aujourd'hui dans le développement web.
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
                    J'ai suivi une formation intensive de développeur web front-end chez OpenClassrooms, lors de laquelle j'ai appris les bases du HTML, CSS, JavaScript, React et d'autres technologies web.
                    J'ai également travaillé sur plusieurs projets différents pour mettre en pratique mes compétences et développer mon portfolio.
                </p>
                <p>
                    En plus de ma formation chez OpenClassrooms, j'ai également suivi des cours en ligne et lu de nombreux livres sur le développement web pour approfondir mes connaissances et rester à jour avec les dernières tendances et technologies.
                </p>
                <p>
                    Le développement web est un domaine en constante évolution, et je suis déterminé à continuer à apprendre et à m'améliorer en tant que développeur web tout au long de ma carrière.
                </p>
                <p>
                    Je suis toujours à la recherche de nouveaux défis et de nouvelles opportunités pour apprendre et grandir en tant que développeur. 
                    N'hésitez pas à me contacter si vous souhaitez en savoir plus sur moi ou sur mes compétences.
                </p>
            </section>
            <section className="skills-fusion">
                <h2>Fusion de compétences</h2>
                <p className="fusion-intro">
                    Mon parcours unique combine des expériences variées qui enrichissent mon approche du développement web.
                </p>
                <div className="skills-grid">
                    <div className="skill-card">
                        <div className="skill-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3>Formation agricole</h3>
                        <p>Bac Pro & BTSA en Production Horticole. Projet innovant de reconnaissance des végétaux via QR codes.</p>
                        <div className="skill-tags">
                            <span>Analyse de données</span>
                            <span>Innovation</span>
                        </div>
                    </div>

                    <div className="skill-card highlight">
                        <div className="skill-icon central">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
                            </svg>
                        </div>
                        <h3>Développeur Web</h3>
                        <p>Intégration des compétences techniques et humaines pour créer des solutions web modernes et performantes.</p>
                        <div className="skill-tags">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>SASS</span>
                        </div>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3>Expérience commerciale</h3>
                        <p>Années dans la vente (Castorama, Prolians). Communication, gestion de projets et travail d'équipe.</p>
                        <div className="skill-tags">
                            <span>Communication</span>
                            <span>Adaptabilité</span>
                        </div>
                    </div>
                </div>

                <div className="fusion-arrows">
                    <svg width="100%" height="120" viewBox="0 0 800 120" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#58A6FF" stopOpacity="0.3"/>
                                <stop offset="50%" stopColor="#3FB950" stopOpacity="0.8"/>
                                <stop offset="100%" stopColor="#58A6FF" stopOpacity="0.3"/>
                            </linearGradient>
                        </defs>
                        <path d="M 100 60 Q 250 20, 400 60 T 700 60" 
                              stroke="url(#arrowGradient)" 
                              strokeWidth="3" 
                              fill="none"
                              strokeDasharray="10,5"
                              className="animated-path"/>
                        <path d="M 700 60 Q 550 100, 400 60 T 100 60" 
                              stroke="url(#arrowGradient)" 
                              strokeWidth="3" 
                              fill="none"
                              strokeDasharray="10,5"
                              className="animated-path reverse"/>
                    </svg>
                </div>

                <div className="fusion-result">
                    <div className="result-content">
                        <div className="result-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.76489 14.1003 1.98232 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3>Résultat</h3>
                        <p>
                            Un développeur web polyvalent avec une forte capacité d'adaptation, 
                            une approche analytique des problèmes et d'excellentes compétences relationnelles.
                        </p>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default About