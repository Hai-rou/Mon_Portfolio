import { useRef, useEffect } from "react";
import "../../SASS/item/banner.scss";

// Animation des particules
function initParticles(canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 2 + 1;
            this.color = `rgba(63,185,80,${Math.random() * 0.5 + 0.2})`;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
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
            ctx.fillStyle = this.color;
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

        // Dessine les lignes entre particules proches
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 120) { // distance max pour relier
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = "rgba(63,185,80,0.2)"; // vert transparent
                    ctx.lineWidth = 1;
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
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
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

    // Animation d'apparition du banner et de ses éléments
    useEffect(() => {
        if (bannerRef.current) {
            const elements = [
                bannerRef.current.querySelector("img"),
                ...bannerRef.current.querySelectorAll(".banner-content > p, .banner-content h1")
            ].filter(Boolean);

            
        }
    }, []);

    return (
        <div className="banner" ref={bannerRef}>
            <img
                src="../assets/logo-h.webp"
                alt="Logo de Haïrou"
            />
            <div className="banner-3">
                <canvas ref={canvasRef}></canvas>
            </div>
            <div id="accueil" className="banner-content">
                <p>Bonjour</p>
                <h1 className="typing-wrapper">
                    <span className="line line1">Je suis Haïrou Houmadi</span><br />
                    <span className="line line2">développeur Web</span>
                    <span className="caret" aria-hidden="true"></span>
                </h1>
                <p className="subtitle">Création moderne et responsive pour web</p>
            </div>
        </div>
    );
}
