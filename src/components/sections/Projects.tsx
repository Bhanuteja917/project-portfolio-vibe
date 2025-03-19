
import { Github, Globe } from "lucide-react";
import { Button } from "../ui/button";
import Section from "../Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout.",
    image: "https://placehold.co/600x400/1a2e35/ffffff?text=E-Commerce+Project",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "https://placehold.co/600x400/1a2e35/ffffff?text=Task+Management+App",
    tech: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard showing forecasts and historical data visualization.",
    image: "https://placehold.co/600x400/1a2e35/ffffff?text=Weather+Dashboard",
    tech: ["JavaScript", "Chart.js", "Weather API", "CSS Grid"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const Projects = () => {
  return (
    <Section id="projects" className="bg-muted/30">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          My Projects
        </h2>
        
        <div className="max-w-5xl mx-auto px-4">
          <Carousel opts={{ 
            align: "center",
            loop: true
          }}>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
                  <div 
                    className="bg-card rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in h-full flex flex-col" 
                    style={{ animationDelay: `${index * 100 + 100}ms` }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-auto">
                        {project.github && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="sm" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <Globe className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center">
              <CarouselPrevious className="relative inset-0 translate-y-0 mr-2" />
              <CarouselNext className="relative inset-0 translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
