
import { useEffect, useState } from "react";

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
  const [isTyping, setIsTyping] = useState(true);

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

  return <span className={className}>{displayText}</span>;
};

export default TypewriterEffect;
