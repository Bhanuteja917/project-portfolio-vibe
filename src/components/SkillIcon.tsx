
import React from 'react';
import { cn } from "@/lib/utils";

interface SkillIconProps {
  name: string;
  className?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ name, className }) => {
  // Map of skill names to their icons and colors
  const skillIcons: Record<string, { icon: string; color: string }> = {
    'React': {
      icon: '/logos/react.svg',
      color: '#61DAFB'
    },
    'TypeScript': {
      icon: '/logos/typescript.svg',
      color: '#3178C6'
    },
    'Next.js': {
      icon: '/logos/nextjs.svg',
      color: '#000000'
    },
    'Vue.js': {
      icon: '/logos/vue.svg',
      color: '#4FC08D'
    },
    'Node.js': {
      icon: '/logos/nodejs.svg',
      color: '#339933'
    },
    'MongoDB': {
      icon: '/logos/mongodb.svg',
      color: '#47A248'
    },
    'PostgreSQL': {
      icon: '/logos/postgresql.svg',
      color: '#4169E1'
    },
    'Docker': {
      icon: '/logos/docker.svg',
      color: '#2496ED'
    },
    'AWS': {
      icon: '/logos/aws.svg',
      color: '#FF9900'
    },
    'Git': {
      icon: '/logos/git.svg',
      color: '#F05032'
    }
  };

  const iconData = skillIcons[name];
  
  if (!iconData) {
    return null;
  }

  return (
    <div className="group relative inline-block">
      <img
        src={iconData.icon}
        alt={`${name} logo`}
        className={cn(
          "w-5 h-5 transition-all duration-300 grayscale group-hover:grayscale-0",
          className
        )}
        style={{
          filter: "grayscale(1)",
          WebkitFilter: "grayscale(1)"
        }}
      />
    </div>
  );
};

export default SkillIcon;
