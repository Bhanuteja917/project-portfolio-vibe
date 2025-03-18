
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0 transition-all hover:text-primary duration-300">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-muted-foreground group">
            <span className="transition-all duration-300 group-hover:text-foreground">Made with</span>
            <Heart className="h-4 w-4 mx-1 text-primary transition-transform duration-300 group-hover:scale-125 hover:animate-pulse" />
            <span className="transition-all duration-300 group-hover:text-foreground">using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
