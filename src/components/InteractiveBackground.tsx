
import { useEffect, useRef } from "react";

interface InteractiveBackgroundProps {
  className?: string;
}

const InteractiveBackground = ({ className = "" }: InteractiveBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas dimensions
    const updateSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener("resize", updateSize);
    updateSize();

    // Particle settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = 150;
    const colors = ["#9b87f5", "#7E69AB", "#6E59A5", "#1A1F2C", "#D6BCFA"];

    // Mouse position
    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120
    };

    window.addEventListener("mousemove", function(event) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    });

    window.addEventListener("mouseout", function() {
      mouse.x = null;
      mouse.y = null;
    });

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 30) + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      draw() {
        if (!context) return;
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.closePath();
        context.fill();
      }
      
      update() {
        if (mouse.x === null || mouse.y === null) {
          // Return to original position
          const dx = this.baseX - this.x;
          const dy = this.baseY - this.y;
          this.x += dx * 0.02;
          this.y += dy * 0.02;
          return;
        }
        
        // Calculate distance from mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        
        // Max distance, past that the force is 0
        const maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        
        if (force < 0) force = 0;
        
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;
        
        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 20;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 20;
          }
        }
      }
    }

    // Create particles
    function init() {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    }

    // Connect particles with lines
    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            opacityValue = 1 - (distance / 120);
            context.strokeStyle = `rgba(155, 135, 245, ${opacityValue * 0.4})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particlesArray[a].x, particlesArray[a].y);
            context.lineTo(particlesArray[b].x, particlesArray[b].y);
            context.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
    }

    // Initialize and start animation
    init();
    animate();

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", function(event) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
      });
      window.removeEventListener("mouseout", function() {
        mouse.x = null;
        mouse.y = null;
      });
    };
  }, []);

  return <canvas ref={canvasRef} className={`absolute inset-0 ${className}`} />;
};

export default InteractiveBackground;
