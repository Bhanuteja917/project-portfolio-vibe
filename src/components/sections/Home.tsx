
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
            Hi, I'm{" "}
            <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in animation-delay-100">
            A passionate developer crafting beautiful digital experiences
          </p>
          <div className="flex justify-center gap-4 animate-fade-in animation-delay-200">
            <Button asChild size="lg">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
