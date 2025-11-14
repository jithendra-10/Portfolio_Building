'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import TechIcon from '../TechIcon';

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: string[];
  githubLink: string;
  liveLink: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="flex flex-col h-full w-full rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden group"
    >
      <div className="h-52 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 items-center mb-4">
          {project.techStack.map((tech, index) => (
            <TechIcon key={index} tech={tech} />
          ))}
        </div>
        <div className="mt-auto flex justify-end gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            aria-label="View GitHub repository"
          >
            <Github size={24} />
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            aria-label="View live demo"
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGrid;
