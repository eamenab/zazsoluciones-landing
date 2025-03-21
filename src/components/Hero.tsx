
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Animation parameters
    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
      direction: number;
      lastUpdate: number;
    }[] = [];

    const colors = ["#0057FF", "#5A4CDB", "#845EC2", "#74BDFD"];

    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(Math.floor(canvas.width / 30), 30);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 8 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.5 + 0.1,
          direction: Math.random() * Math.PI * 2,
          lastUpdate: Date.now(),
        });
      }
    };

    createParticles();

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const currentTime = Date.now();
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const timeDelta = currentTime - p.lastUpdate;
        
        // Update particle position
        if (timeDelta > 20) {
          p.direction += (Math.random() - 0.5) * 0.1;
          p.lastUpdate = currentTime;
        }
        
        p.x += Math.cos(p.direction) * p.speed;
        p.y += Math.sin(p.direction) * p.speed;
        
        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) {
          p.direction = Math.PI - p.direction;
        }
        
        if (p.y < 0 || p.y > canvas.height) {
          p.direction = -p.direction;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + "20"; // Add transparency
        ctx.fill();
        
        // Draw connecting lines to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color + Math.floor((1 - distance / 100) * 20).toString(16).padStart(2, '0');
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              SaaS a la Medida con{" "}
              <span className="highlight-text">Inteligencia Artificial</span>
            </h1>
            <p className="text-lg text-zaz-dark-gray mb-8 max-w-lg">
              Transformamos tu negocio con soluciones de software personalizadas
              que se adaptan perfectamente a tus necesidades, impulsadas por las
              últimas tecnologías de IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-gradient text-white px-6 py-6 shadow-button font-medium text-base hover:shadow-lg transition-all hover:scale-105 flex items-center">
                Comienza Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-zaz-blue text-zaz-blue hover:bg-zaz-blue/5 px-6 py-6 font-medium text-base transition-all"
              >
                Conoce Nuestras Soluciones
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-200">
            <div className="aspect-square w-full max-w-md mx-auto md:ml-auto relative">
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
              ></canvas>
              <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80 z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-zaz-blue/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-zaz-indigo/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-500"></div>
    </section>
  );
};

export default Hero;
