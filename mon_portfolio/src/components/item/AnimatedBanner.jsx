import { useRef, useEffect } from "react";
import "../../SASS/item/banner.css";

// Particles Animation
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
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgb(250, 166, 27)';
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

        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.strokeStyle = `rgba(100, 200, 255, ${0.3 * (1 - distance / 120)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    function handleResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}

export function AnimatedBanner() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const cleanup = initParticles(canvasRef.current);
            return cleanup;
        }
    }, []);

    return (
        <div className="banner">
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
                <p>Création moderne et responsive pour web</p>
            </div>
        </div>
    );
}