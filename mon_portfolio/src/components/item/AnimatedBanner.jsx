import { useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import "../../SASS/item/banner.scss";
import { gsap } from "gsap";

// Animation des particules améliorée
function initParticles(canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;
    const mouse = { x: null, y: null, radius: 120 };

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 2.5 + 1;
            this.baseColor = [88, 166, 255]; // Primary color RGB
            this.speedX = Math.random() * 0.8 - 0.4;
            this.speedY = Math.random() * 0.8 - 0.4;
        }
        
        update() {
            // Interaction avec la souris
            if (mouse.x && mouse.y) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 3;
                    this.y -= Math.sin(angle) * force * 3;
                }
            }
            
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.radius * 2
            );
            gradient.addColorStop(0, `rgba(${this.baseColor.join(',')}, 1)`);
            gradient.addColorStop(1, `rgba(${this.baseColor.join(',')}, 0.3)`);
            ctx.fillStyle = gradient;
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

        // Lignes connectant les particules proches
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(88, 166, 255, ${opacity})`;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function handleMouseMove(e) {
        mouse.x = e.x;
        mouse.y = e.y;
    }
    
    function handleMouseLeave() {
        mouse.x = null;
        mouse.y = null;
    }

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        window.removeEventListener('resize', handleResize);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
}

export function AnimatedBanner() {
    const canvasRef = useRef(null);
    const bannerRef = useRef(null);

    // Particules
    useEffect(() => {
        if (canvasRef.current) {
            const cleanup = initParticles(canvasRef.current);
            return cleanup;
        }
    }, []);

    // Animation GSAP d'apparition
    useEffect(() => {
        if (bannerRef.current) {
            const tl = gsap.timeline();
            
            tl.from(".banner-logo", {
                scale: 0.8,
                rotate: -10,
                duration: 1,
                ease: "back.out(1.7)"
            })
            .from(".banner-greeting", {
                y: -20,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.3")
            .from(".typing-wrapper", {
                y: 20,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.2")
            .from(".banner-subtitle", {
                y: 20,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.3")
            .from(".banner-cta", {
                scale: 0.9,
                duration: 0.5,
                ease: "back.out(1.7)"
            }, "-=0.2")
            .from(".social-links", {
                opacity: 0,
                x: -20,
                stagger: 0.1,
                duration: 0.4,
                ease: "power2.out"
            }, "-=0.3");
        }
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="banner" ref={bannerRef}>
            <div className="banner-background">
                <canvas ref={canvasRef}></canvas>
            </div>
            
            <div className="banner-content">
                <img
                    src="/assets/logo-h.webp"
                    alt="Logo de Haïrou"
                    className="banner-logo"
                />
                
                <div className="banner-text">
                    <p className="banner-greeting">Bonjour, je suis</p>
                    
                    <h1 className="typing-wrapper">
                        <span className="line line1">Haïrou Houmadi</span><br />
                        <span className="line line2">Développeur Web</span>
                        <span className="caret" aria-hidden="true"></span>
                    </h1>
                    
                    <p className="banner-subtitle">
                        Création d'expériences web modernes et performantes
                    </p>
                    
                    <div className="banner-cta">
                        <button onClick={() => scrollToSection('contact')} className="cta-primary">
                            <span>Me contacter</span>
                            <Icon icon="mdi:arrow-right" width="20" height="20" />
                        </button>
                        <button onClick={() => scrollToSection('realisation')} className="cta-secondary">
                            <span>Voir mes projets</span>
                            <Icon icon="mdi:briefcase-outline" width="20" height="20" />
                        </button>
                    </div>
                    
                    <div className="social-links">
                        <a href="https://github.com/Hai-rou" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Icon icon="mdi:github" width="24" height="24" />
                        </a>
                        <a href="https://www.linkedin.com/in/hairou-houmadi" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Icon icon="mdi:linkedin" width="24" height="24" />
                        </a>
                        <a href="mailto:contacthh.dev@gmail.com" className="social-link">
                            <Icon icon="mdi:email-outline" width="24" height="24" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="scroll-indicator">
                <Icon icon="mdi:chevron-down" width="32" height="32" />
            </div>
        </div>
    );
}
