
import { 
  Code, Database, Server, Globe, 
  Smartphone, Palette, Wrench, Layers 
} from "lucide-react";
import Section from "../Section";
import SkillsGraph from "../SkillsGraph";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Code className="h-6 w-6" />,
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "HTML5/CSS3", "Tailwind CSS", "Redux"]
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express", "NestJS", "Django", "Flask", "GraphQL", "REST API"]
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Elasticsearch"]
  },
  {
    title: "DevOps & Cloud",
    icon: <Globe className="h-6 w-6" />,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "GCP", "Azure"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "PWA"]
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="h-6 w-6" />,
    skills: ["Figma", "Adobe XD", "Sketch", "User Research", "Wireframing", "Prototyping"]
  },
  {
    title: "Tools & Methodologies",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["Git", "Jira", "Agile", "Scrum", "Jest", "Cypress", "Webpack"]
  },
  {
    title: "Architecture",
    icon: <Layers className="h-6 w-6" />,
    skills: ["Microservices", "Serverless", "System Design", "Design Patterns", "Performance Optimization"]
  }
];

const Skills = () => {
  return (
    <Section id="skills" className="bg-muted/30">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          Skills & Expertise
        </h2>
        
        <div className="mb-8 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Drag nodes to explore, zoom in/out, and pan around. Skills are clustered by category.
          </p>
        </div>
        
        <SkillsGraph skillCategories={skillCategories} />
      </div>
    </Section>
  );
};

export default Skills;
