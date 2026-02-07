/**
 * HackFest '26 Plexus/Neural Network Background Animation
 * Creates an animated geometric mesh with particles and connections
 * matching the poster's aesthetic.
 */

(function () {
    const canvas = document.getElementById('plexus-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    // Muted color palette from poster
    const colors = {
        particle: 'rgba(255, 255, 255, 0.9)',      // Bright White-Purple for visibility
        line1: 'rgba(188, 19, 254, 0.6)',          // Visible purple
        line2: 'rgba(255, 0, 127, 0.5)',           // Visible pink
        line3: 'rgba(0, 243, 255, 0.5)',           // Visible cyan
        orbs: [
            'rgba(188, 19, 254, 0.15)', // Purple orb
            'rgba(255, 0, 127, 0.15)',  // Pink orb
            'rgba(0, 243, 255, 0.15)'   // Cyan orb
        ]
    };

    // Configuration
    const config = {
        particleCount: 100, // Increased count
        maxDistance: 200,   // Increased connection distance
        particleSpeed: 0.4,
        particleSize: 3,    // Larger particles
        orbCount: 6,
        orbSize: 450
    };

    class Orb {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.2;
            this.vy = (Math.random() - 0.5) * 0.2;
            this.radius = config.orbSize * (0.8 + Math.random() * 0.4);
            this.color = colors.orbs[Math.floor(Math.random() * colors.orbs.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges gently
            if (this.x < -this.radius) this.vx *= -1;
            if (this.x > canvas.width + this.radius) this.vx *= -1;
            if (this.y < -this.radius) this.vy *= -1;
            if (this.y > canvas.height + this.radius) this.vy *= -1;
        }

        draw() {
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'rgba(0,0,0,0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill entire canvas to blend
        }
    }

    class Particle {
        constructor() {
            this.reset();
            this.y = Math.random() * canvas.height;
            this.x = Math.random() * canvas.width;
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * config.particleSpeed;
            this.vy = (Math.random() - 0.5) * config.particleSpeed;
            this.radius = Math.random() * config.particleSize + 1.5;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Wrap around screen edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = colors.particle;
            ctx.fill();

            // Add glow to particles
            ctx.shadowBlur = 15;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    let orbs = [];

    function initParticles() {
        particles = [];
        orbs = [];

        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }

        for (let i = 0; i < config.orbCount; i++) {
            orbs.push(new Orb());
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.maxDistance) {
                    const opacity = 1 - (distance / config.maxDistance);

                    // Vary line colors for visual interest
                    let lineColor = colors.line1;
                    if (i % 3 === 1) lineColor = colors.line2;
                    else if (i % 3 === 2) lineColor = colors.line3;

                    ctx.beginPath();
                    ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/g, (opacity * 0.8) + ')'); // Much higher opacity
                    ctx.lineWidth = 1.5; // Thicker lines
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background orbs first (lava lamp effect)
        // Use composite operation for better blending
        ctx.globalCompositeOperation = 'screen';
        orbs.forEach(orb => {
            orb.update();
            orb.draw();
        });

        // Reset for particles to ensure they draw ON TOP meaningfully
        ctx.globalCompositeOperation = 'source-over';

        connectParticles(); // Draw lines first so particles appear on top

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        animationId = requestAnimationFrame(animate);
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    }

    function init() {
        resizeCanvas();
        animate();
    }

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            cancelAnimationFrame(animationId);
            resizeCanvas();
            animate();
        }, 250);
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Force HackFest Theme
    try {
        const currentTheme = localStorage.getItem('mdbook-theme');
        if (currentTheme !== 'hackfest') {
            localStorage.setItem('mdbook-theme', 'hackfest');
            document.documentElement.classList.remove('light', 'rust', 'coal', 'navy', 'ayu');
            document.documentElement.classList.add('hackfest');
        }
    } catch (e) {
        console.log('Error setting theme:', e);
    }
})();
