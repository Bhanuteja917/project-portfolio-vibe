
import { CalendarDays, Building } from "lucide-react";
import Section from "../Section";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: [
      "Led the redesign of the company's flagship product, resulting in a 40% increase in user engagement",
      "Managed a team of 5 developers, implementing Agile methodologies",
      "Developed and maintained the component library used across multiple projects"
    ],
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: [
      "Architected and developed RESTful APIs for mobile and web applications",
      "Implemented authentication and authorization systems",
      "Optimized database queries, improving application performance by 30%"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "React", "AWS"]
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "2016 - 2018",
    description: [
      "Developed responsive websites for various clients across different industries",
      "Collaborated with designers to implement UI/UX improvements",
      "Maintained and updated existing client websites"
    ],
    technologies: ["JavaScript", "HTML", "CSS", "jQuery", "PHP"]
  }
];

const Experience = () => {
  return (
    <Section id="experience" className="bg-background">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-12 bg-card rounded-lg p-6 shadow-md relative animate-fade-in" 
              style={{ animationDelay: `${index * 100 + 100}ms` }}
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-1/2 top-full w-px h-12 bg-border -translate-x-1/2"></div>
              )}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Building className="mr-1 h-4 w-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-foreground">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
