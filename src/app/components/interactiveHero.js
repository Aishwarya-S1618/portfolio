"use client";

import { useEffect, useRef, useState } from 'react';

export default function InteractivePage({colors}) {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip particle logic on mobile

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const hero = heroRef.current;

    const particles = [];
    const mouse = { x: undefined, y: undefined };

    const resizeCanvas = () => {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    };

    class Particle {
      constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.alpha = 1;
      }

      draw() {
        ctx.fillStyle = colors.accent;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        this.alpha -= 0.02;
        this.size += 0.2;
      }
    }


    const addParticle = (x, y) => {
      particles.push(new Particle(x, y, 5));
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) particles.splice(i, 1);
      });
      requestAnimationFrame(animateParticles);
    };

    const handleMouseMove = (e) => {
      const bounds = hero.getBoundingClientRect();
      if (e.clientX >= bounds.left && e.clientX <= bounds.right &&
          e.clientY >= bounds.top && e.clientY <= bounds.bottom) {
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        addParticle(x, y);
      }
    };

    resizeCanvas();
    animateParticles();
    hero.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [colors, isMobile]);

  return (
    <div id="home" style={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Hero Section */}
      <div
        ref={heroRef}
        style={{
          flex: '1 0 80vh',
          position: 'relative',
          overflow: 'hidden',
          background: isMobile
            ? 'linear-gradient(135deg, #81BFDA, #FADA7A)'
            : '#ffffff',
          transition: 'background 0.5s ease'
        }}
      >
        {!isMobile && (
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
        )}
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{ fontSize: '3rem', color: colors.accent }}>Welcome to My Interactive Space</h1>
        </div>
      </div>
      </div>
  );
}
