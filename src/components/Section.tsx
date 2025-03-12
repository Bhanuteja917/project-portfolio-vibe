
import React from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ id, className = "", children }: SectionProps) => {
  return (
    <section
      id={id}
      className={`min-h-screen py-16 flex items-center ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
