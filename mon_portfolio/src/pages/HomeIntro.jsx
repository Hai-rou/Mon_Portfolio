import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "../SASS/pages/homeintro.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HomeIntro({ onEnter }) {
    const leftDoorRef = useRef();
    const rightDoorRef = useRef();
    const contentRef = useRef();
    const canvasRef = useRef();
    const [hover, setHover] = useState(false);

    // Particules de fond
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(88, 166, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        
        tl.from(".intro-logo", {
            opacity: 0,
            scale: 0.5,
            rotate: -180,
            duration: 1.2,
            ease: "back.out(1.7)"
        })
        .from(".intro-title", {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4")
        .from(".intro-subtitle", {
            opacity: 0,
            y: 20,
            duration: 0.6
        }, "-=0.3")
        .from(".intro-features", {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5
        }, "-=0.2")
        .from(".enter-btn", {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "back.out(1.7)",
            clearProps: "all"
        }, "-=0.2");
    }, []);

    // Animation portes avec effet 3D
    const handleEnterClick = () => {
        const tl = gsap.timeline();
        
        // Animation du contenu qui s'efface
        tl.to(".intro-content", {
            opacity: 0,
            scale: 0.9,
            duration: 0.4,
            ease: "power2.in"
        });
        
        // Animation des portes
        tl.to(leftDoorRef.current, {
            x: "-100%",
            rotateY: -90,
            transformOrigin: "left center",
            duration: 1.2,
            ease: "power3.inOut"
        }, "-=0.2")
        .to(rightDoorRef.current, {
            x: "100%",
            rotateY: 90,
            transformOrigin: "right center",
            duration: 1.2,
            ease: "power3.inOut",
            onComplete: onEnter
        }, "-=1.2");
    };

    return (
        <div className="home-intro">
            <canvas ref={canvasRef} className="intro-canvas"></canvas>
            
            {/* Portes avec gradient */}
            <div ref={leftDoorRef} className="door left-door"></div>
            <div ref={rightDoorRef} className="door right-door"></div>
            
            {/* Contenu */}
            <div className="intro-content" ref={contentRef}>
                <div className="intro-logo">
                    <Icon icon="mdi:code-braces-box" width="80" height="80" />
                </div>
                
                <h1 className="intro-title">
                    Bienvenue sur mon Portfolio
                </h1>
                
                <p className="intro-subtitle">
                    Développeur Web passionné par la création d'expériences digitales modernes et performantes
                </p>
                
                <div className="intro-features">
                    <div className="feature-item">
                        <Icon icon="mdi:react" width="24" height="24" />
                        <span>React & Vite</span>
                    </div>
                    <div className="feature-item">
                        <Icon icon="mdi:responsive" width="24" height="24" />
                        <span>Design Responsive</span>
                    </div>
                    <div className="feature-item">
                        <Icon icon="mdi:palette-outline" width="24" height="24" />
                        <span>UI/UX Moderne</span>
                    </div>
                </div>
                
                <button
                    className={`enter-btn ${hover ? 'hovered' : ''}`}
                    onClick={handleEnterClick}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <span className="btn-text">
                        {hover ? (
                            <>
                                <Icon icon="mdi:arrow-right" width="28" height="28" />
                                <span>Découvrir</span>
                            </>
                        ) : (
                            'Entrer'
                        )}
                    </span>
                </button>
            </div>
        </div>
    );
}

export default HomeIntro;