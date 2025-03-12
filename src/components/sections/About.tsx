
import Section from "../Section";

const About = () => {
  return (
    <Section id="about" className="bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
          About Me
        </h2>
        <div className="bg-card rounded-lg shadow-lg p-6 md:p-8 animate-fade-in animation-delay-100">
          <p className="text-lg mb-4">
            I'm a passionate developer with a knack for creating elegant solutions to complex problems. With a background in computer science and years of industry experience, I've developed a deep understanding of software development principles and practices.
          </p>
          <p className="text-lg mb-4">
            My journey in tech began with a curiosity about how things work, which evolved into a career building applications that make a difference. I specialize in full-stack development, with expertise in both frontend and backend technologies.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and sharing knowledge with the community.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
