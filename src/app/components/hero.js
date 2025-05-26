import { useEffect, useRef } from 'react';
import { color, motion } from 'framer-motion';

function InteractiveHero({colors}) {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const hero = heroRef.current;

    const resizeCanvas = () => {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
      initParticles();
    };

    class Particle {
      constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.baseX = x;
        this.baseY = y;
        this.density = Math.random() * 30 + 1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        const dx = mouse.current.x - this.x;
        const dy = mouse.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = mouse.current.radius;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const forceX = dx / distance * force * this.density;
          const forceY = dy / distance * force * this.density;

          this.x -= forceX;
          this.y -= forceY;
        } else {
          // Return to original position
          if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 10;
          if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 10;
        }
        this.draw();
      }
    }

    const color = colors.particleColor;


    const initParticles = () => {
      particles.current = [];
      const gap = 40;
      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          particles.current.push(new Particle(x, y, 3, color));
        }
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach(p => p.update());
      requestAnimationFrame(animateParticles);
    };

    const handleMouseMove = (e) => {
      const bounds = hero.getBoundingClientRect();
      if (
        e.clientX >= bounds.left && e.clientX <= bounds.right &&
        e.clientY >= bounds.top && e.clientY <= bounds.bottom
      ) {
        mouse.current.x = e.clientX - bounds.left;
        mouse.current.y = e.clientY - bounds.top;
      } else {
        mouse.current.x = undefined;
        mouse.current.y = undefined;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    animateParticles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [colors.particleColor]);

  return (
    <div className="w-full min-h-screen flex flex-col">
     {/* Hero Section (with particles) */}
      <section
        id='home'
        ref={heroRef}
        className="relative flex-1 flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        />

        <motion.div
          className="relative z-10 px-4 rounded-xl"
          style={{backdropFilter: 'blur(2px)'}}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold" style={{ color: colors.text}}>
            Hi, I am Aishwarya S
          </h1>
          <motion.p
            className="text-xl mt-4 bold "
            style={{ color: colors.text }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Full Stack Developer | Spring Boot & React Enthusiast
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}

export default InteractiveHero;
