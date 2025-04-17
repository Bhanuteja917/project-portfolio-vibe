import React from 'react';
import { cn } from "@/lib/utils";

interface SkillIconProps {
  name: string;
  className?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ name, className }) => {
  // Map of skill names to their icons and colors from Simple Icons
  const skillIcons: Record<string, { icon: string; color: string }> = {
    'React': {
      icon: 'https://cdn.simpleicons.org/react/61DAFB',
      color: '#61DAFB'
    },
    'TypeScript': {
      icon: 'https://cdn.simpleicons.org/typescript/3178C6',
      color: '#3178C6'
    },
    'Next.js': {
      icon: 'https://cdn.simpleicons.org/nextdotjs/000000',
      color: '#000000'
    },
    'Vue.js': {
      icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
      color: '#4FC08D'
    },
    'Node.js': {
      icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
      color: '#339933'
    },
    'MongoDB': {
      icon: 'https://cdn.simpleicons.org/mongodb/47A248',
      color: '#47A248'
    },
    'PostgreSQL': {
      icon: 'https://cdn.simpleicons.org/postgresql/4169E1',
      color: '#4169E1'
    },
    'Docker': {
      icon: 'https://cdn.simpleicons.org/docker/2496ED',
      color: '#2496ED'
    },
    'AWS': {
      icon: 'https://cdn.simpleicons.org/amazonaws/FF9900',
      color: '#FF9900'
    },
    'Git': {
      icon: 'https://cdn.simpleicons.org/git/F05032',
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
          "w-5 h-5 transition-all duration-300 group-hover:filter-none",
          className
        )}
        style={{
          filter: "grayscale(1)",
          webkitFilter: "grayscale(1)",
          transition: "filter 0.3s ease"
        }}
      />
    </div>
  );
};

export default SkillIcon;
