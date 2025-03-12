
import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "../ui/button";
import Section from "../Section";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your server or a form service
    console.log("Form submitted:", formData);
    alert("Thanks for your message! I'll get back to you soon.");
    
    // Reset the form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <Section id="contact" className="bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in animation-delay-100">
            <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out if you have any questions, project inquiries, or just want to connect! I'm always open to discussing new opportunities and ideas.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:your.email@example.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    github.com/yourusername
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-fade-in animation-delay-200">
            <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
