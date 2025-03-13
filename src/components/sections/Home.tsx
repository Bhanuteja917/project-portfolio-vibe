
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import TypewriterEffect from "../TypewriterEffect";
import InteractiveBackground from "../InteractiveBackground";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background relative overflow-hidden"
    >
      <InteractiveBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
            Hi, I'm{" "}
            <TypewriterEffect 
              text="Your Name" 
              className="text-primary" 
              delay={150} 
            />
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in animation-delay-100">
            A passionate developer crafting beautiful digital experiences
          </p>
          <div className="flex justify-center gap-4 animate-fade-in animation-delay-200">
            <Button asChild size="lg" className="group transition-all duration-300 hover:scale-105">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="transition-all duration-300 hover:scale-105">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
