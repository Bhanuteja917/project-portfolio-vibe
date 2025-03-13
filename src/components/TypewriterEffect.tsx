
import { useEffect, useState, useRef } from "react";

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterEffect = ({
  text,
  delay = 100,
  className = "",
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Reset the typewriter effect
  const resetTypewriter = () => {
    setDisplayText("");
    setCurrentIndex(0);
    setIsTyping(true);
  };

  // Set up the intersection observer to detect when the element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          resetTypewriter();
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  // Handle the typewriter effect animation
  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      setIsTyping(false);
    }
  }, [currentIndex, delay, isTyping, text]);

  return <span ref={elementRef} className={className}>{displayText}</span>;
};

export default TypewriterEffect;
