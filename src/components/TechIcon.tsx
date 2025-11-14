import React from 'react';
import {
  DiReact, DiNodejs, DiMongodb, DiJava, DiPython, DiGit, DiDocker, DiAws, DiNginx, DiLinux
} from 'react-icons/di';
import {
  SiExpress, SiStripe, SiRedux, SiFirebase, SiMui, SiTailwindcss, SiFramer, 
  SiNextdotjs, SiPostgresql, SiGraphql, SiTypescript, SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si';

// Define the type for the icon map
const iconMap: { [key: string]: React.ReactElement } = {
  'react': <DiReact />,
  'node.js': <DiNodejs />,
  'mongodb': <DiMongodb />,
  'express': <SiExpress />,
  'stripe api': <SiStripe />,
  'redux': <SiRedux />,
  'firebase': <SiFirebase />,
  'material ui': <SiMui />,
  'javascript': <SiJavascript />,
  'html': <SiHtml5 />,
  'css': <SiCss3 />,
  'tailwindcss': <SiTailwindcss />,
  'framer motion': <SiFramer />,
  'next.js': <SiNextdotjs />,
  'postgresql': <SiPostgresql />,
  'graphql': <SiGraphql />,
  'aws s3': <DiAws />,
  'typescript': <SiTypescript />,
  'java': <DiJava />,
  'python': <DiPython />,
  'git': <DiGit />,
  'docker': <DiDocker />,
  'nginx': <DiNginx />,
  'linux': <DiLinux />,
};

// Define the type for the component's props
interface TechIconProps {
  tech: string;
}

const TechIcon: React.FC<TechIconProps> = ({ tech }) => {
  const normalizedTech = tech.toLowerCase();
  const icon = iconMap[normalizedTech];

  if (!icon) {
    return <span>{tech}</span>; // Fallback to text if no icon is found
  }

  return (
    <div className="group relative flex items-center">
      {React.cloneElement(icon, {
        className: "text-2xl md:text-3xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
      })}
      <div
        className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 bg-gray-800 text-white text-xs rounded-md shadow-lg whitespace-nowrap"
        role="tooltip"
      >
        {tech}
      </div>
    </div>
  );
};

export default TechIcon;
