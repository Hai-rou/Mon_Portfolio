import { useRef, useState } from "react";
import "../SASS/pages/homeintro.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HomeIntro({ onEnter }) {
    const leftDoorRef = useRef();
    const rightDoorRef = useRef();
    const contentRef = useRef();
    const [hover, setHover] = useState(false);

    useGSAP(() => {
        gsap.from(
            contentRef.current.children,
            {
                opacity: 0,
                y: 40,
                stagger: 0.2,
                duration: 1,
                ease: "power2.out"
            }
        );
    }, []);

    // Animation porte à deux vantaux
    const handleEnterClick = () => {
        gsap.to(leftDoorRef.current, {
            x: "-10%",
            rotateY: -70,
            transformOrigin: "left center",
            duration: 1.2,
            ease: "power2.slide"
        });
        gsap.to(rightDoorRef.current, {
            x: "10%",
            rotateY: 70,
            transformOrigin: "right center",
            duration: 1.2,
            ease: "power2.slide",
            onComplete: onEnter // Appelle la fonction après l'animation
        });
    };

    return (
        <div className="home-intro" style={{ position: "relative", overflow: "hidden" }}>
            {/* Portes */}
            <div
                ref={leftDoorRef}
                className="door left-door"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "50%",
                    height: "100vh", // prend toute la hauteur de la fenêtre
                    background: "#ffffff",
                    zIndex: 10,
                    transition: "none"
                }}
            >
            </div>
            <div
                ref={rightDoorRef}
                className="door right-door"
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "50%",
                    height: "100vh", // prend toute la hauteur de la fenêtre
                    background: "#ffffff",
                    zIndex: 10,
                    transition: "none"
                }}
            >
            </div>
            {/* Contenu */}
            <div className="intro-content" ref={contentRef} style={{ position: "relative", zIndex: 20 }}>
                <h1>Bienvenue sur mon portfolio</h1>
                <p>Découvrez mes projets et mon univers web.</p>
                <button
                    className="dezea-btn"
                    onClick={handleEnterClick}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <svg className="circle-border" width="150" height="150">
                        <circle cx="75" cy="75" r="70"/>
                    </svg>
                    <span className={hover ? "hide" : ""}>Entrer</span>
                    <div className="arrow"></div>
                </button>
            </div>
        </div>
    );
}

export default HomeIntro;