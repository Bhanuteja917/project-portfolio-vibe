
import { 
  Code, Database, Server, Globe, 
  Smartphone, Palette, Wrench, Layers 
} from "lucide-react";
import Section from "../Section";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 50 + 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
