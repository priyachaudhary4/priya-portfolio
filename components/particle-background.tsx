"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let dataStreams: { x: number; y: number; speed: number; length: number; opacity: number }[] = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let isMouseMoving = false;
    let mouseTimeout: NodeJS.Timeout;

    const isLight = resolvedTheme === 'light';
    const colors = isLight ? [
      "rgba(59, 130, 246, 0.4)",  // Soft Blue
      "rgba(168, 85, 247, 0.3)",  // Soft Purple
      "rgba(96, 165, 250, 0.4)",  // Light Cyan-Blue
      "rgba(59, 130, 246, 0.2)",  // Very Soft Blue
      "rgba(168, 85, 247, 0.4)",  // Purple
    ] : [
      "rgba(59, 130, 246, 0.8)",  // Electric Blue
      "rgba(168, 85, 247, 0.8)",  // Purple
      "rgba(6, 182, 212, 0.7)",   // Neon Cyan
      "rgba(59, 130, 246, 0.6)",  // Electric Blue
      "rgba(168, 85, 247, 0.7)",  // Purple
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      // Much higher density for the 'plexus' network look
      const particleCount = Math.min(250, Math.floor((canvas.width * canvas.height) / 7000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.1, // Extremely slow movement
          vy: (Math.random() - 0.5) * 0.1,
          // 10% chance of being a large bright node, otherwise small dots
          size: Math.random() > 0.9 ? Math.random() * 2.5 + 1.5 : Math.random() * 1 + 0.5,
          opacity: Math.random() > 0.9 ? 1 : Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      
      dataStreams = [];
      for (let i = 0; i < 40; i++) {
        dataStreams.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 4 + 2,
          length: Math.random() * 150 + 50,
          opacity: Math.random() * 0.15 + 0.02
        });
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Connect nodes if they are close enough
          if (distance < 160) {
            const opacity = (1 - distance / 160) * 0.25;
            ctx.beginPath();
            
            // Create gradient line between nodes
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            gradient.addColorStop(0, particles[i].color.replace(/[\d.]+\)$/g, `${opacity})`));
            gradient.addColorStop(1, particles[j].color.replace(/[\d.]+\)$/g, `${opacity})`));
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5; // Thinner, sharper lines
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Connect nodes to mouse if close
        if (isMouseMoving) {
          const dxMouse = particles[i].x - mouseX;
          const dyMouse = particles[i].y - mouseY;
          const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          
          if (distanceMouse < 200) {
            const opacity = (1 - distanceMouse / 200) * 0.4;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      // Create a slight trailing effect depending on theme
      ctx.fillStyle = resolvedTheme === 'light' ? "rgba(255, 255, 255, 0.2)" : "rgba(3, 7, 18, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw digital data streams
      dataStreams.forEach((stream) => {
        stream.y += stream.speed;
        if (stream.y > canvas.height) {
          stream.y = -stream.length;
          stream.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        const streamGradient = ctx.createLinearGradient(stream.x, stream.y, stream.x, stream.y + stream.length);
        streamGradient.addColorStop(0, `rgba(6, 182, 212, 0)`);
        streamGradient.addColorStop(1, `rgba(6, 182, 212, ${stream.opacity})`);
        ctx.strokeStyle = streamGradient;
        ctx.lineWidth = 1;
        ctx.moveTo(stream.x, stream.y);
        ctx.lineTo(stream.x, stream.y + stream.length);
        ctx.stroke();
      });

      // Draw connections first
      drawConnections();

      // Update and draw particles
      particles.forEach((particle) => {
        // Mouse interaction - dynamic attraction/repulsion based on distance
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (isMouseMoving && distance < 250 && distance > 0) {
          const force = (250 - distance) / 250;
          
          // Pull strongly towards mouse if far, push slightly if too close
          if (distance > 100) {
            particle.vx += dx * force * 0.001;
            particle.vy += dy * force * 0.001;
          } else {
            particle.vx -= dx * force * 0.003;
            particle.vy -= dy * force * 0.003;
          }
        }

        // Apply velocity with damping (air resistance)
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Speed limit
        const maxSpeed = 1.5;
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle core
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        gradient.addColorStop(0, particle.color.replace(/[\d.]+\)$/g, `${particle.opacity})`));
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 500);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(mouseTimeout);
    };
  }, [resolvedTheme]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 mix-blend-normal dark:mix-blend-screen transition-opacity duration-500"
        style={{ opacity: 0.85 }}
      />
      {/* CRT Scanline Sweep */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30 mix-blend-overlay overflow-hidden">
        <div className="w-full h-[15%] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-scanline" />
      </div>
    </>
  );
}
