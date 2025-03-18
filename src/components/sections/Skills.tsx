
import { 
  Code, Database, Server, Globe, 
  Smartphone, Palette, Wrench, Layers 
} from "lucide-react";
import { useState } from "react";
import Section from "../Section";
import { Card, CardContent } from "../ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface SkillUsage {
  name: string;
  description: string;
  projects?: string[];
  experience?: string[];
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

// Sample skill usage data - in a real app, this would come from a proper data source
const skillUsages: Record<string, SkillUsage> = {
  "React": {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    projects: ["Portfolio Website", "E-commerce Dashboard", "Social Media App"],
    experience: ["3 years at TechCorp", "2 years at StartupX"]
  },
  "TypeScript": {
    name: "TypeScript",
    description: "A typed superset of JavaScript that compiles to plain JavaScript.",
    projects: ["Banking API", "Portfolio Website"],
    experience: ["2 years at FinTech Inc"]
  },
  "Node.js": {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    projects: ["REST API", "Backend Services", "Real-time Chat App"],
    experience: ["4 years at WebDev Agency"]
  },
  // Additional skills can be added here
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(skill);
    setIsOpen(true);
  };

  return (
    <Section id="skills" className="bg-muted/30">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in">
          Skills & Expertise
        </h2>
        
        <div className="mb-8 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my technical skills and expertise. Click on any skill to see where I've applied it in projects and professional experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border border-muted hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <button
                      key={skillIndex}
                      onClick={() => handleSkillClick(skill)}
                      className="px-3 py-1 rounded-full bg-background border border-border hover:bg-primary/10 hover:border-primary/50 transition-colors duration-300 text-sm cursor-pointer"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Skill detail sheet */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{selectedSkill}</SheetTitle>
              <SheetDescription>
                {selectedSkill && skillUsages[selectedSkill] 
                  ? skillUsages[selectedSkill].description 
                  : "A valuable technical skill in my toolkit"}
              </SheetDescription>
            </SheetHeader>
            <div className="py-6">
              {selectedSkill && skillUsages[selectedSkill] ? (
                <>
                  {skillUsages[selectedSkill].projects && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Projects</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {skillUsages[selectedSkill].projects.map((project, i) => (
                          <li key={i}>{project}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {skillUsages[selectedSkill].experience && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Experience</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {skillUsages[selectedSkill].experience.map((exp, i) => (
                          <li key={i}>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-muted-foreground">
                  No detailed information available for this skill yet.
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Section>
  );
};

export default Skills;
